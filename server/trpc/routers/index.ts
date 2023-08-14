import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { user } from '@/server/db/schema'

export const appRouter = router({
  hello: publicProcedure
    .input(
      z.object({
        text: z.string().nullish(),
      }),
    )
    .query(({ input, ctx }) => {
      //const users = ctx.db.select().from(user).all()
      return {
        greeting: 'lalal'
      }
    }),
})

// export type definition of API
export type AppRouter = typeof appRouter