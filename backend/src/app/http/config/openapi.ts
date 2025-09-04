import { Scalar } from "@scalar/hono-api-reference";
import { swaggerUI } from "@hono/swagger-ui";
import { openAPISpecs } from "hono-openapi";
import { Hono } from "hono";

export function setupOpenApi(app: Hono) {
  const OPENAPI_URL = "/openapi.json";

  app.get(
    OPENAPI_URL,
    openAPISpecs(app, {
      documentation: {
        info: {
          title: "",
          version: "1.0.0",
          description: "",
        },
        servers: [{ url: process.env.URL!, description: "Server" }],
      },
    })
  );

  app.get("/openapi/swagger-ui", swaggerUI({ url: OPENAPI_URL }));

  app.get(
    "/openapi/scalar-ui",
    Scalar({
      theme: "saturn",
      url: OPENAPI_URL,
    })
  );

  return app;
}
