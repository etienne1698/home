import { Hono } from "hono";
import { corsMiddleware } from "./config/cors";
import { setupOpenApi } from "./config/openapi";

export const app = new Hono();

app.use("*", corsMiddleware);
setupOpenApi(app);