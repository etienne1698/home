import { authRouter } from "~/modules/auth/auth.routes";

import { RecipeRepositorySql } from "~/modules/recipes/recipe.repository-sql";
import { recipeRouter } from "~/modules/recipes/recipe.routes";
import { RecipeService } from "~/modules/recipes/recipe.service";

export const appAuthRouter = authRouter();

export const appRecipeRepository = new RecipeRepositorySql();
export const appRecipeService = new RecipeService(appRecipeRepository);
export const appRecipeRouter = recipeRouter(appRecipeService);

