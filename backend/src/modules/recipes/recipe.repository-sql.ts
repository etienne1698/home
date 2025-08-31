import { db } from "~/shared/database";
import { recipesTable } from "./recipe.sql";
import type { RecipeRepository } from "./recipe.repository";
import type { Recipe } from "./recipe.entity";

export class RecipeRepositorySql implements RecipeRepository {
  async getAll() {
    const result = await db.select().from(recipesTable);
    return result;
  }

  async create(recipe: Omit<Recipe, "id" | "createdAt" | "updatedAt">) {
    const result = await db.insert(recipesTable).values(recipe).returning();
    return result[0];
  }
}
