import { db } from "~/shared/database";
import { recipesTable } from "./recipe.sql";
import type { RecipeRepository } from "./recipe.repository";
import { Recipe } from "./recipe.entity";

export class RecipeRepositorySql implements RecipeRepository {
  async getAll() {
    const result = await db.select().from(recipesTable);
    return result.map(
      (recipe) =>
        new Recipe({
          id: recipe.id,
          title: recipe.title,
          description: recipe.description,
          createdAt: recipe.createdAt,
          updatedAt: recipe.updatedAt,
        })
    );
  }

  async create(recipe: Omit<Recipe, "id" | "createdAt" | "updatedAt">) {
    const result = await db.insert(recipesTable).values(recipe).returning();
    return new Recipe({
      id: result[0].id,
      title: result[0].title,
      description: result[0].description,
      createdAt: result[0].createdAt,
      updatedAt: result[0].updatedAt,
    });
  }
}
