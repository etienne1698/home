import "dotenv/config";
import { serve } from "@hono/node-server";
import { app } from "./app";
import "./routes";

serve(
  {
    fetch: app.fetch,
    port: 3300,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
