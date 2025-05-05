import { internalMutation, query } from './_generated/server'
import { getAuthUserId } from '@convex-dev/auth/server'
import { v } from 'convex/values'

export const currentUser = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx)
    if (userId === null) {
      return null
    }
    return await ctx.db.get(userId)
  },
})

export const updateUserBalance = internalMutation({
  args: {
    id: v.id('users'),
    balance: v.number(),
  },
  handler: async (ctx, { id, balance }) => {
    const userId = await getAuthUserId(ctx)
    if (userId === null) {
      throw new Error('401 - Unauthenticated')
    }
    const currentUser = await ctx.db.get(userId)
    if (currentUser === null) {
      throw new Error('User not found')
    }

    return await ctx.db.patch(id, {
      balance: (currentUser?.balance ?? 0) + balance,
    })
  },
})
