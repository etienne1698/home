import { Hono } from "hono";
import { auth } from "./auth";

export function authRouter() {
  const router = new Hono();

  router.on(["POST", "GET"], "/**", (c) => auth.handler(c.req.raw));

  return router;
}
