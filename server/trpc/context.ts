import { inferAsyncReturnType } from '@trpc/server'
import { drizzle } from 'drizzle-orm/d1';
import type { H3Event } from 'h3'

export interface Env {
  DB: D1Database;
}
// TS Error in createContext  ./server/api/trpc/[trpc].ts
// export const createContext = async (event: H3Event, env: Env) => {
export const createContext = async (event: H3Event) => {
  const req = event.req
  const res = event.res
  //const db = drizzle(env.DB)
  return { req, res};
};

export type Context = inferAsyncReturnType<typeof createContext>;