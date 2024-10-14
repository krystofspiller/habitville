import { type User, type PrismaClient } from '@prisma/client'
import { buildingNewPayloadSchema } from '~/app/_schemas/buildings-new'
import { fetchUser } from '~/server/api/routers/user'

import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc'
import {
  getBuildCost,
  getUserBuildings,
  unbuiltBuilding,
} from '~/server/app/models/building'

export async function getBuildings(user: User, db: PrismaClient) {
  const buildings = await db.building.findMany({
    where: {
      createdBy: { id: user.id },
    },
  })

  return getUserBuildings(user, buildings)
}

export const buildingRouter = createTRPCRouter({
  create: protectedProcedure
    .input(buildingNewPayloadSchema)
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findFirst({
        where: { id: ctx.session.user.id },
      })
      if (!user) {
        return null
      }

      const buildings = await getBuildings(user, ctx.db)

      const buildingToBuild =
        buildings.find((b) => b.type === input.type) ??
        unbuiltBuilding(input.type)
      const buildingNew = buildingToBuild.quantity === 0
      const buildingCost = getBuildCost(buildingToBuild, buildings, user)

      if (!buildingCost.buildCost || buildingCost.buildCost > user.balance) {
        throw new Error('Cannot be built')
      }

      const updateUserPromise = ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: { balance: { decrement: buildingCost.buildCost } },
      })

      const buildingPromise = buildingNew
        ? ctx.db.building.create({
            data: {
              type: input.type,
              quantity: 1,
              level: 1,
              createdBy: { connect: { id: ctx.session.user.id } },
            },
          })
        : ctx.db.building.update({
            where: { id: buildingToBuild.id },
            data: { quantity: { increment: 1 } },
          })

      return Promise.all([updateUserPromise, buildingPromise])
    }),

  index: protectedProcedure.query(async ({ ctx }) => {
    const user = await fetchUser(ctx.session.user.id, ctx.db)
    if (!user) {
      return null
    }

    return getBuildings(user, ctx.db)
  }),
})
