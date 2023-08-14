import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const user = sqliteTable('user', {
  id: text('id',).primaryKey(),
  email: text('email').notNull(),
});

integer('id', { mode: 'number' }).primaryKey({autoIncrement: true})