import { Hono } from "hono";
import { corsMiddleware } from "./shared/cors";
import { setupOpenApi } from "./shared/openapi";

export const app = new Hono();

app.use("*", corsMiddleware);
setupOpenApi(app);