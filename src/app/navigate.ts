'use server'

import { redirect } from 'next/navigation'

type AbsoluteRoute = `${string}`

export async function navigate(route: AbsoluteRoute) {
  redirect(route)
}
