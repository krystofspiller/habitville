import { z } from 'zod'
import { actionNewPayloadSchema } from '~/app/_schemas/actions-new'

import { createTRPCRouter, protectedProcedure } from '~/server/api/trpc'

export const actionRouter = createTRPCRouter({
  create: protectedProcedure
    .input(actionNewPayloadSchema)
    .mutation(({ ctx, input }) => {
      return ctx.db.action.create({
        data: {
          name: input.name,
          cost: input.cost,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      })
    }),

  index: protectedProcedure
    .input(
      z
        .object({
          includeArchived: z.boolean().optional(),
        })
        .optional(),
    )
    .query(async ({ ctx, input }) => {
      const actions = await ctx.db.action.findMany({
        where: {
          createdBy: { id: ctx.session.user.id },
          ...(input?.includeArchived ? {} : { archived: false }),
        },
      })

      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)

      const performedActions = await ctx.db.performedAction.findMany({
        where: {
          actionId: { in: actions.map((action) => action.id) },
          performed: { gte: yesterday },
        },
      })

      return actions.map((action) => ({
        ...action,
        performedRecently: performedActions.some(
          (performedAction) => performedAction.actionId === action.id,
        ),
      }))
    }),

  archive: protectedProcedure
    .input(
      z.object({
        actionId: z.number().int(),
        unarchive: z.boolean().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.action.update({
        where: { id: input.actionId },
        data: {
          archived: input.unarchive ? false : true,
        },
      })
    }),

  markCompleted: protectedProcedure
    .input(
      z.object({
        actionId: z.number().int(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const getActionPromise = ctx.db.action.findFirst({
        where: { id: input.actionId, createdBy: { id: ctx.session.user.id } },
      })

      const getUserPromise = ctx.db.user.findFirst({
        where: { id: ctx.session.user.id },
      })

      const [action, user] = await Promise.all([
        getActionPromise,
        getUserPromise,
      ])

      if (!action) {
        throw new Error('Action not found')
      }
      if (!user) {
        throw new Error('User not found')
      }

      const createPerformedActionPromise = ctx.db.performedAction.create({
        data: {
          actionId: input.actionId,
          performed: new Date(),
        },
      })

      const updateUserPromise = ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: {
          balance: user.balance + action.cost,
          xp: user.xp + action.cost,
        },
      })

      await Promise.all([createPerformedActionPromise, updateUserPromise])
    }),
})
