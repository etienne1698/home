import { type RecipeRepository } from "./recipe.repository";

export class RecipeService {
  constructor(private readonly recipeRepository: RecipeRepository) {}

  getAll() {
    return this.recipeRepository.getAll();
  }
}
