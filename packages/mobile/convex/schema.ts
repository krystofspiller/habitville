import { defineSchema, defineTable } from 'convex/server'
import { authTables } from '@convex-dev/auth/server'
import { v } from 'convex/values'

const schema = defineSchema({
  ...authTables,
  users: defineTable({
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    email: v.optional(v.string()),
    emailVerificationTime: v.optional(v.number()),
    phone: v.optional(v.string()),
    phoneVerificationTime: v.optional(v.number()),
    isAnonymous: v.optional(v.boolean()),
    balance: v.optional(v.number()),
    score: v.optional(v.number()),
    scoreCollectedAt: v.optional(v.number()),
  })
    .index('email', ['email'])
    .index('phone', ['phone']),
  actions: defineTable({
    name: v.string(),
    effect: v.float64(),
    archived: v.boolean(),
    userId: v.id('users'),
  }).index('user', ['userId']),
  performedActions: defineTable({
    actionId: v.id('actions'),
    userId: v.id('users'),
    quantity: v.number(),
  }),
  buildings: defineTable({
    type: v.number(),
    quantity: v.number(),
    level: v.number(),
    userId: v.id('users'),
  }),
})

export default schema
