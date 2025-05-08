import { type PrismaClient } from '@prisma/client'
import { buildingNewPayloadSchema } from '~/app/_schemas/buildings-new'

import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc'
import { getUserBuildings } from '~/server/app/models/building'
import { getUser } from './user'

export async function getBuildings(userId: string, db: PrismaClient) {
  const buildings = await db.building.findMany({
    where: {
      createdBy: { id: userId },
    },
  })

  return getUserBuildings(buildings)
}

export const buildingRouter = createTRPCRouter({
  create: protectedProcedure
    .input(buildingNewPayloadSchema)
    .mutation(async ({ ctx, input }) => {
      const allBuildingsPromise = getBuildings(ctx.session.user.id, ctx.db)
      const userPromise = getUser(ctx.session.user.id, ctx.db)

      const [allBuildings, user] = await Promise.all([
        allBuildingsPromise,
        userPromise,
      ])

      const toBuild = allBuildings.find(
        (building) => building.type === input.type,
      )

      if (!toBuild) {
        throw new Error('Cannot find a building to build')
      }
      if (!toBuild.buildCost) {
        throw new Error('Building does not have build cost')
      }
      if (!user) {
        throw new Error('Cannot find a user')
      }
      if (toBuild.buildCost > user.balance) {
        throw new Error('Not enough RP')
      }

      const updateUserPromise = ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: { balance: { decrement: toBuild.buildCost } },
      })

      const buildingPromise =
        toBuild.quantity > 0
          ? ctx.db.building.update({
              where: {
                id: toBuild.id,
              },
              data: {
                quantity: toBuild.quantity + 1,
              },
            })
          : ctx.db.building.create({
              data: {
                type: input.type,
                quantity: 1,
                level: 1,
                createdBy: { connect: { id: ctx.session.user.id } },
              },
            })

      return Promise.all([updateUserPromise, buildingPromise])
    }),

  index: protectedProcedure.query(async ({ ctx }) => {
    return getBuildings(ctx.session.user.id, ctx.db)
  }),
})
