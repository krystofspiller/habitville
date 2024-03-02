import { z } from 'zod'

import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc'

export const actionRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(({ ctx, input }) => {
      return ctx.db.action.create({
        data: {
          name: input.name,
          cost: 100,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      })
    }),

  index: protectedProcedure.query(({ ctx }) => {
    return ctx.db.action.findMany({
      where: { createdBy: { id: ctx.session.user.id } },
    })
  }),
})
