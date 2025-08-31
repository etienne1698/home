import { drizzle } from "drizzle-orm/node-postgres";

import * as authSchema from "~/modules/auth/auth.sql";

export const db = drizzle(process.env.DATABASE_URL!, {
  schema: {
    ...authSchema,
  },
});
