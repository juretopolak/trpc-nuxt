import type { Config } from 'drizzle-kit';

export default {
  schema: './server/db/schema.ts',
  out: './server/db/migrations',
  driver: 'better-sqlite',
  dbCredentials: {
    url: './.wrangler/state/v3/d1/01026519-d409-441d-9ff7-5ab60a7d1ea0/db.sqlite',
  }
} satisfies Config;
