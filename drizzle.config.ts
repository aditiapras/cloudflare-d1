import type { Config } from "drizzle-kit";

export default {
  out: "./drizzle",
  schema: "./database/schema.ts",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    databaseId: "db413bc7-df02-4ad6-a16e-671f1e56f28d",
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID as string,
    token: process.env.CLOUDFLARE_TOKEN as string,
  },
} satisfies Config;
