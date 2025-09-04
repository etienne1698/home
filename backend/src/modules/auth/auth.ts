import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "~/shared/infrastructure/database";
import { openAPI } from "better-auth/plugins";

export const auth = betterAuth({
  baseURL: process.env.URL!,
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  emailVerification: {
    sendOnSignUp: false,
    requireEmailVerification: false,
  },
  trustedOrigins: [process.env.FRONTEND_URL!, process.env.URL!],
  advanced: {
    crossSubDomainCookies: {
      enabled: true,
      domain: process.env.DOMAIN as string,
    },
    defaultCookieAttributes: {
      sameSite: "Lax",
    },
  },
  plugins: [openAPI()],
});
