export class Recipe {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(recipe: Recipe) {
    this.id = recipe.id;
    this.title = recipe.title;
    this.description = recipe.description;
    this.createdAt = recipe.createdAt;
    this.updatedAt = recipe.updatedAt;
  }
}
