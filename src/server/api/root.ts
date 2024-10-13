import { actionRouter } from '~/server/api/routers/action'
import { buildingRouter } from '~/server/api/routers/building'
import { userRouter } from '~/server/api/routers/user'
import { createCallerFactory, createTRPCRouter } from '~/server/api/trpc'
import { type inferRouterOutputs } from '@trpc/server'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  action: actionRouter,
  building: buildingRouter,
  user: userRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter)

// type RouterInput = inferRouterInputs<ActionRouter>
type RouterOutput = inferRouterOutputs<AppRouter>

export type ActionIndexOutput = RouterOutput['action']['index']
export type BuildingIndexOutput = RouterOutput['building']['index']
