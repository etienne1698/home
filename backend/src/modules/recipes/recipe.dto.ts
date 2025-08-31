import { z } from "zod";

export const getAllRecipeDto = {
  response: z.array(
    z.object({
      id: z.number(),
      title: z.string(),
      description: z.string(),
      createdAt: z.string(),
      updatedAt: z.string(),
    })
  ),
};

export const createRecipeDto = {
  body: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
  }),
  response: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
  }),
};
