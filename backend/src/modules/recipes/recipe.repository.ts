import type { Recipe } from "./recipe.entity";

export interface RecipeRepository  {
  getAll: () => Promise<Recipe[]>;
};