import { inferAsyncReturnType } from '@trpc/server'
import { FetchCreateContextWithCloudflareEnvFnOptions } from 'cloudflare-pages-plugin-trpc'
import { drizzle } from 'drizzle-orm/d1'

interface Env {
  DB: D1Database
}

export const createContext = async ({
  env,
}: FetchCreateContextWithCloudflareEnvFnOptions<Env>) => ({
  db: drizzle(env.DB),
})

export type Context = inferAsyncReturnType<typeof createContext>