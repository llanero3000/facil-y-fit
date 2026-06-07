import { foodDatabase, FoodCategory, MealTag } from "@/lib/food-database";

function pluralizeMeasure(measureName: string) {
  const pluralMap: Record<string, string> = {
    unidad: "unidades",
    huevo: "huevos",
    "huevo grande": "huevos grandes",
    cucharada: "cucharadas",
    cucharadita: "cucharaditas",
    taza: "tazas",
    "1/2 taza": "medias tazas",
    tajada: "tajadas",
    rebanada: "rebanadas",
    lonja: "lonjas",
    galleta: "galletas",
    wrap: "wraps",
    "wrap mediano": "wraps medianos",
    tostón: "tostones",
    "tostón mediano": "tostones medianos",
    "palma mediana cocida": "palmas medianas cocidas",
    "filete pequeño cocido": "filetes pequeños cocidos",
    "pieza mediana": "piezas medianas",
    "rodaja mediana": "rodajas medianas",
    arepa: "arepas",
    pan: "panes",
  };

  return pluralMap[measureName] || `${measureName}s`;
}

function formatMeasure(amount: number, measureName?: string) {
  if (!measureName) return "";

  const rounded = Math.round(amount * 4) / 4;

  if (rounded < 0.25) return "";

  const measure =
    rounded > 1 ? pluralizeMeasure(measureName) : measureName;

  if (rounded === 0.25) return `¼ ${measureName}`;
  if (rounded === 0.5) return `½ ${measureName}`;
  if (rounded === 0.75) return `¾ ${measureName}`;
  if (rounded === 1) return `1 ${measureName}`;
  if (rounded === 1.25) return `1¼ ${measure}`;
  if (rounded === 1.5) return `1½ ${measure}`;
  if (rounded === 1.75) return `1¾ ${measure}`;

  return `${Math.round(rounded)} ${measure}`;
}

function calculateFoodAmount(foodId: string, targetMacro: number) {
  const food = foodDatabase.find((item) => item.id === foodId);

  if (!food || food.macroPer100g <= 0) return null;

  const grams = Math.round((targetMacro / food.macroPer100g) * 100);

  const measureAmount = food.gramsPerMeasure
    ? grams / food.gramsPerMeasure
    : null;

  const householdText = measureAmount
    ? formatMeasure(measureAmount, food.measureName)
    : "";

  return {
    ...food,
    grams,
    householdText,
  };
}

export function getFoodOptions(
  category: FoodCategory,
  targetMacro: number,
  mealTag?: MealTag
) {
  return foodDatabase
    .filter((food) => {
      const matchesCategory = food.category === category;
      const matchesMeal = mealTag ? food.mealTags.includes(mealTag) : true;

      return matchesCategory && matchesMeal;
    })
    .map((food) => calculateFoodAmount(food.id, targetMacro))
    .filter(Boolean);
}

export function translateSelectedFood(foodId: string, targetMacro: number) {
  return calculateFoodAmount(foodId, targetMacro);
}