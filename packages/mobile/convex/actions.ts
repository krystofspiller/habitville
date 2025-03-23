import { query, mutation } from './_generated/server'
import { getAuthUserId } from '@convex-dev/auth/server'
import { v } from 'convex/values'

export const getUserActions = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx)
    if (userId === null) {
      return null
    }

    return await ctx.db
      .query('actions')
      .withIndex('user', (q) => q.eq('userId', userId))
      .collect()
  },
})

export const createAction = mutation({
  args: { name: v.string(), effect: v.float64() },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx)
    if (userId === null) {
      throw new Error('401 - Unauthenticated')
    }

    const newTaskId = await ctx.db.insert('actions', {
      name: args.name,
      effect: args.effect,
      archived: false,
      userId,
    })
    return newTaskId
  },
})
