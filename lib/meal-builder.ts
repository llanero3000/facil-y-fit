import { foodDatabase, FoodCategory, MealTag } from "./food-database";

export function getFoodsByMealAndCategory(
  meal: MealTag,
  category: FoodCategory
) {
  return foodDatabase.filter(
    (food) =>
      food.category === category &&
      food.mealTags.includes(meal)
  );
}