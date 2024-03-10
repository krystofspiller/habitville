import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc'
import { getLevel } from '~/util/level'

export const userRouter = createTRPCRouter({
  get: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findFirst({
      where: { id: ctx.session.user.id },
    })

    if (!user) {
      return null
    }

    return {
      ...user,
      levelInfo: getLevel(user.xp),
    }
  }),
})
