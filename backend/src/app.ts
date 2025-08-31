import { Hono } from "hono";
import { corsMiddleware } from "./shared/cors";

export const app = new Hono();

app.use("*", corsMiddleware);
