import type { Recipe } from "./recipe.entity";

export interface RecipeRepository  {
  getAll: () => Promise<Recipe[]>;
  create: (recipe: Omit<Recipe, "id" | "createdAt" | "updatedAt">) => Promise<Recipe>;
};