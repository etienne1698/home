import { Hono } from "hono";
import { corsMiddleware } from "../shared/config/cors";
import { setupOpenApi } from "../shared/config/openapi";

export const app = new Hono();

app.use("*", corsMiddleware);
setupOpenApi(app);