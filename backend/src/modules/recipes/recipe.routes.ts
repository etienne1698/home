import { Hono } from "hono";
import { RecipeService } from "./recipe.service";

export function recipeRouter(recipeService: RecipeService) {
  const router = new Hono();

  router.get("/", async (c) => {
    const result = await recipeService.getAll();
    return c.json(result);
  });

  return router;
}
