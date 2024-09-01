import { type PrismaClient } from '@prisma/client'
import { buildingNewPayloadSchema } from '~/app/_schemas/buildings-new'

import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc'
import { getEnhancedBuildings } from '~/server/app/models/building'

export async function getBuildings(userId: string, db: PrismaClient) {
  const buildings = await db.building.findMany({
    where: {
      createdBy: { id: userId },
    },
  })

  return getEnhancedBuildings(buildings)
}

export const buildingRouter = createTRPCRouter({
  create: protectedProcedure
    .input(buildingNewPayloadSchema)
    .mutation(({ ctx, input }) => {
      const updateUserPromise = ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: { balance: { decrement: 100 } },
      })

      const createBuildingPromise = ctx.db.building.create({
        data: {
          type: input.type,
          quantity: 1,
          level: 1,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      })

      return Promise.all([updateUserPromise, createBuildingPromise])
    }),

  index: protectedProcedure.query(async ({ ctx }) => {
    return getBuildings(ctx.session.user.id, ctx.db)
  }),
})
