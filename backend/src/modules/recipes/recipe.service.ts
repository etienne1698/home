import type { Recipe } from "./recipe.entity";
import { type RecipeRepository } from "./recipe.repository";

export class RecipeService {
  constructor(private readonly recipeRepository: RecipeRepository) {}

  getAll() {
    return this.recipeRepository.getAll();
  }

  create(recipe: Omit<Recipe, "id" | "createdAt" | "updatedAt">) {
    return this.recipeRepository.create(recipe);
  }
}
