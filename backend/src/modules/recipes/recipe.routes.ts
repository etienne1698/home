import { Hono } from "hono";
import { RecipeService } from "./recipe.service";
import { describeRoute } from "hono-openapi";
import { createRecipeDto, getAllRecipeDto } from "./recipe.dto";
import { resolver, validator } from "hono-openapi/zod";

export function recipeRouter(recipeService: RecipeService) {
  const router = new Hono();
  const OPEN_API_TAG = "Recipes";

  router.get(
    "/",
    describeRoute({
      tags: [OPEN_API_TAG],
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: resolver(getAllRecipeDto.response),
            },
          },
        },
      },
    }),
    async (c) => {
      const result = await recipeService.getAll();
      return c.json(result);
    }
  );

  router.post(
    "/",
    describeRoute({
      tags: [OPEN_API_TAG],
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: resolver(createRecipeDto.response),
            },
          },
        },
      },
    }),
    validator("json", createRecipeDto.body),
    async (c) => {
      const result = await recipeService.create(await c.req.json());
      return c.json(result);
    }
  );

  return router;
}
