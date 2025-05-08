import { type PrismaClient } from '@prisma/client'
import { getBuildings } from '~/server/api/routers/building'
import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc'
import {
  getScoreGeneration,
  getWarehouseCap,
} from '~/server/app/models/building'
import { getCollectScoreInfo } from '~/server/app/models/user'
import { getLevel } from '~/util/level'

export async function getUser(userId: string, db: PrismaClient) {
  const user = await db.user.findFirst({
    where: { id: userId },
  })

  if (!user) {
    return null
  }

  const buildings = await db.building.findMany({
    where: {
      createdBy: { id: userId },
    },
  })

  return {
    ...user,
    levelInfo: getLevel(user.xp),
    warehouseCap: getWarehouseCap(buildings),
  }
}

export const userRouter = createTRPCRouter({
  get: protectedProcedure.query(async ({ ctx }) => {
    return getUser(ctx.session.user.id, ctx.db)
  }),

  collectScore: protectedProcedure.mutation(async ({ ctx }) => {
    const requestTime = new Date()

    const buildings = await getBuildings(ctx.session.user.id, ctx.db)
    const user = await getUser(ctx.session.user.id, ctx.db)

    if (!user) {
      return null
    }

    const { scorePerHour } = getScoreGeneration(buildings)
    const { accumulatedScore, collectedAt } = getCollectScoreInfo(
      user.scoreCollectedAt,
      user.warehouseCap,
      scorePerHour,
      requestTime,
    )

    if (accumulatedScore < 1) return null

    return ctx.db.user.update({
      where: { id: ctx.session.user.id },
      data: {
        scoreCollectedAt: collectedAt,
        score: { increment: accumulatedScore },
      },
    })
  }),
})
