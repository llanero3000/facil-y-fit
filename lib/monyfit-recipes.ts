export type MonyfitGoal =
  | "weight-loss"
  | "hormonal-balance"
  | "detox"
  | "muscle-gain"
  | "maintenance";

export type MealType =
  | "breakfast"
  | "lunch"
  | "dinner"
  | "snack"
  | "pre-workout"
  | "post-workout";

export type CarbLevel = "low" | "moderate" | "high";

export type RecipeComponent = {
  name: string;
  role: "protein" | "carb" | "fat" | "vegetable" | "fruit" | "liquid" | "spice";
  baseAmount: string;
  swaps?: string[];
};

export type MonyfitRecipe = {
  id: string;
  title: string;
  mealType: MealType;
  carbLevel: CarbLevel;
  trainingDay?: string;
  description: string;
  components: RecipeComponent[];
  tips: string[];
  portionGuide: {
    weightLoss: string;
    hormonalBalance: string;
    detox: string;
    muscleGain: string;
    maintenance: string;
  };
};

export const monyfitRecipes: MonyfitRecipe[] = [
  {
    id: "pancakes-huevo-fruta",
    title: "Pancakes + huevo + fruta / jugo verde",
    mealType: "breakfast",
    carbLevel: "moderate",
    trainingDay: "Abdomen + hipopresivos / carga baja de carbs",
    description:
      "Desayuno tipo MonyFit con pancakes de avena, huevo y acompañamiento ligero.",
    components: [
      {
        name: "Avena",
        role: "carb",
        baseAmount: "40 g",
        swaps: ["pan integral", "arepa pequeña", "tortilla integral"],
      },
      {
        name: "Banano",
        role: "fruit",
        baseAmount: "1/2 unidad",
        swaps: ["fresas", "manzana verde", "piña"],
      },
      {
        name: "Huevo",
        role: "protein",
        baseAmount: "1 unidad",
        swaps: ["claras", "yogur griego", "proteína en polvo"],
      },
      {
        name: "Leche de almendras",
        role: "liquid",
        baseAmount: "100 ml",
        swaps: ["agua", "leche vegetal"],
      },
      {
        name: "Mantequilla de almendra o maní",
        role: "fat",
        baseAmount: "30 g",
        swaps: ["almendras", "nueces", "chía"],
      },
    ],
    tips: [
      "Ideal como desayuno con energía controlada.",
      "Si es día bajo en carbohidratos, reduce fruta o usa fresas.",
      "Si entrenas fuerte, puedes mantener la avena completa.",
    ],
    portionGuide: {
      weightLoss:
        "Usa 30–40 g de avena, 1 huevo o claras, fruta moderada y 1 cucharadita de mantequilla de maní.",
      hormonalBalance:
        "Mantén proteína alta, usa fruta baja en azúcar como fresas y agrega grasa saludable moderada.",
      detox:
        "Usa fresas o manzana verde, acompaña con jugo verde y evita exceso de mantequilla de maní.",
      muscleGain:
        "Usa 50–60 g de avena, 1 huevo + claras y agrega yogur griego o proteína.",
      maintenance:
        "Usa la porción base: 40 g avena, 1 huevo, fruta y grasa saludable moderada.",
    },
  },
  {
    id: "sopa-bistec-ensalada",
    title: "Sopa + bistec encebollado + ensalada",
    mealType: "lunch",
    carbLevel: "low",
    trainingDay: "Abdomen + hipopresivos / descanso",
    description:
      "Comida baja en carbohidratos con proteína principal, sopa de verduras y ensalada fresca.",
    components: [
      {
        name: "Pechuga de pollo en sopa",
        role: "protein",
        baseAmount: "150 g",
        swaps: ["atún", "pescado", "huevos", "carne magra"],
      },
      {
        name: "Bistec de carne magra",
        role: "protein",
        baseAmount: "150–180 g",
        swaps: ["pollo", "pescado", "lomo de cerdo"],
      },
      {
        name: "Papa o yuca",
        role: "carb",
        baseAmount: "1/2 porción",
        swaps: ["arroz", "arepa", "plátano", "batata"],
      },
      {
        name: "Ensalada fresca",
        role: "vegetable",
        baseAmount: "Libre",
        swaps: ["espinaca", "lechuga", "pepino", "tomate"],
      },
      {
        name: "Aceite de oliva o aguacate",
        role: "fat",
        baseAmount: "1 cucharadita o 1/4 aguacate",
        swaps: ["aceite de aguacate", "almendras"],
      },
    ],
    tips: [
      "Muy buena opción para días de menor carga de carbohidratos.",
      "La ensalada puede ser abundante.",
      "Si hay mucha proteína en sopa y bistec, ajusta la cantidad total.",
    ],
    portionGuide: {
      weightLoss:
        "Elige una proteína principal de 120–150 g, sopa con verduras, ensalada libre y 1/2 porción de papa o yuca si aplica.",
      hormonalBalance:
        "Mantén proteína completa, vegetales abundantes y grasa saludable moderada.",
      detox:
        "Prioriza sopa, verduras y ensalada. Usa poca grasa añadida y carbohidrato opcional pequeño.",
      muscleGain:
        "Usa 150–180 g de proteína y agrega porción completa de papa, yuca o arroz.",
      maintenance:
        "Usa 130–150 g de proteína, ensalada libre y 1 porción moderada de carbohidrato.",
    },
  },
  {
    id: "pasta-albondigas",
    title: "Pasta con albóndigas en salsa de tomate",
    mealType: "lunch",
    carbLevel: "high",
    trainingDay: "Solo días de pierna / glúteo",
    description:
      "Almuerzo opcional alto en energía para días de entrenamiento fuerte.",
    components: [
      {
        name: "Pasta",
        role: "carb",
        baseAmount: "70–80 g seca",
        swaps: ["arroz", "papa", "yuca", "arepa"],
      },
      {
        name: "Carne molida magra",
        role: "protein",
        baseAmount: "120–150 g",
        swaps: ["pollo molido", "pavo", "atún"],
      },
      {
        name: "Salsa de tomate",
        role: "vegetable",
        baseAmount: "1/2 taza",
        swaps: ["tomate natural", "salsa casera"],
      },
      {
        name: "Aguacate",
        role: "fat",
        baseAmount: "1/4 unidad",
        swaps: ["aceite de oliva", "almendras"],
      },
      {
        name: "Ensalada",
        role: "vegetable",
        baseAmount: "Libre",
        swaps: ["pepino", "zanahoria", "espinaca"],
      },
    ],
    tips: [
      "No es ideal para días de descanso o abdomen.",
      "Perfecta para días de pierna/glúteo por mayor carga de energía.",
      "Acompaña con ensalada para mejorar saciedad.",
    ],
    portionGuide: {
      weightLoss:
        "Usa 50–60 g de pasta seca, 120 g de carne magra, ensalada abundante y poca grasa añadida.",
      hormonalBalance:
        "Usa pasta moderada, proteína suficiente y acompaña con ensalada para estabilidad.",
      detox:
        "Mejor usar esta receta solo ocasionalmente; baja la pasta y sube vegetales.",
      muscleGain:
        "Usa 80–100 g pasta seca, 150 g carne y mantén el aguacate o aceite.",
      maintenance:
        "Usa 70–80 g pasta seca, 120–150 g carne y ensalada libre.",
    },
  },
  {
    id: "snack-bowl-proteico",
    title: "Bowl proteico",
    mealType: "snack",
    carbLevel: "moderate",
    description:
      "Snack con yogur griego, fruta, frutos secos y toque dulce controlado.",
    components: [
      {
        name: "Yogur griego",
        role: "protein",
        baseAmount: "150–250 g",
        swaps: ["queso cottage", "proteína en polvo"],
      },
      {
        name: "Manzana verde o fresas",
        role: "fruit",
        baseAmount: "1 porción",
        swaps: ["piña", "frutos rojos"],
      },
      {
        name: "Frutos secos",
        role: "fat",
        baseAmount: "1 puñado pequeño",
        swaps: ["almendras", "nueces", "chía"],
      },
      {
        name: "Chocolate oscuro",
        role: "fat",
        baseAmount: "1 cuadrito",
        swaps: ["cacao en polvo sin azúcar"],
      },
    ],
    tips: [
      "Buena opción para ansiedad por dulce.",
      "Si quieres algo más ligero, baja los frutos secos.",
      "Si necesitas más proteína, agrega 1/2 scoop.",
    ],
    portionGuide: {
      weightLoss:
        "Usa 150 g de yogur, fresas o manzana, y solo 10 g de frutos secos.",
      hormonalBalance:
        "Usa yogur o cottage, fruta baja en azúcar y grasa saludable moderada.",
      detox:
        "Usa yogur natural, fresas, chía y evita chocolate si hay mucha ansiedad por dulce.",
      muscleGain:
        "Usa 250 g de yogur, fruta completa, granola o avena y frutos secos.",
      maintenance:
        "Usa 200 g de yogur, fruta y 1 porción pequeña de frutos secos.",
    },
  },
  {
  id: "arepa-huevo-aguacate",
  title: "Arepa con huevo y aguacate",
  mealType: "breakfast",
  carbLevel: "moderate",
  description: "Desayuno latino balanceado con carbohidrato, proteína y grasa saludable.",
  components: [
    { name: "Arepa", role: "carb", baseAmount: "1 arepa mediana", swaps: ["pan integral", "tortilla", "avena"] },
    { name: "Huevo", role: "protein", baseAmount: "2 huevos", swaps: ["claras", "pollo desmechado", "atún"] },
    { name: "Aguacate", role: "fat", baseAmount: "1/4 unidad", swaps: ["aceite de oliva", "almendras"] },
    { name: "Tomate / espinaca", role: "vegetable", baseAmount: "Libre", swaps: ["pepino", "lechuga"] },
  ],
  tips: ["Ideal para desayuno fuerte.", "Para low carb usa media arepa o más claras."],
  portionGuide: {
    weightLoss: "Usa 1/2 arepa, 1 huevo + claras y 1/4 aguacate.",
    hormonalBalance: "Usa arepa pequeña, 2 huevos y vegetales frescos.",
    detox: "Usa media arepa, claras, espinaca y aguacate moderado.",
    muscleGain: "Usa 1 arepa completa, 2 huevos + claras y aguacate.",
    maintenance: "Usa 1 arepa mediana, 2 huevos y 1/4 aguacate.",
  },
},
{
  id: "pollo-arroz-ensalada",
  title: "Pollo con arroz y ensalada",
  mealType: "lunch",
  carbLevel: "moderate",
  description: "Plato clásico para almuerzo balanceado y fácil de ajustar.",
  components: [
    { name: "Pechuga de pollo", role: "protein", baseAmount: "120–150 g", swaps: ["pavo", "pescado", "carne magra"] },
    { name: "Arroz cocido", role: "carb", baseAmount: "1/2–1 taza", swaps: ["papa", "batata", "quinoa", "yuca"] },
    { name: "Ensalada", role: "vegetable", baseAmount: "Libre", swaps: ["brócoli", "espinaca", "pepino"] },
    { name: "Aguacate / aceite de oliva", role: "fat", baseAmount: "1/4 aguacate o 1 cdta aceite", swaps: ["almendras", "semillas"] },
  ],
  tips: ["Muy útil para meal prep.", "Sube arroz en días de pierna/glúteo."],
  portionGuide: {
    weightLoss: "120 g pollo, 1/2 taza arroz, ensalada abundante y poca grasa añadida.",
    hormonalBalance: "130–150 g pollo, 1/2 taza arroz, vegetales y grasa saludable moderada.",
    detox: "120 g pollo, ensalada grande, arroz pequeño u opcional.",
    muscleGain: "150–180 g pollo, 1 taza arroz y aguacate.",
    maintenance: "140 g pollo, 3/4 taza arroz, ensalada libre.",
  },
},
{
  id: "salmon-batata-vegetales",
  title: "Salmón con batata y vegetales",
  mealType: "dinner",
  carbLevel: "moderate",
  description: "Cena rica en proteína, omega 3 y carbohidrato de buena calidad.",
  components: [
    { name: "Salmón", role: "protein", baseAmount: "120–150 g", swaps: ["pescado blanco", "pollo", "camarones"] },
    { name: "Batata", role: "carb", baseAmount: "150–200 g", swaps: ["papa", "arroz", "quinoa"] },
    { name: "Vegetales verdes", role: "vegetable", baseAmount: "Libre", swaps: ["brócoli", "calabacín", "espárragos"] },
    { name: "Aceite de oliva", role: "fat", baseAmount: "Opcional", swaps: ["aguacate", "semillas"] },
  ],
  tips: ["Buena para recuperación.", "Si buscas pérdida de peso, controla la batata."],
  portionGuide: {
    weightLoss: "120 g salmón, 100–150 g batata y vegetales abundantes.",
    hormonalBalance: "120–150 g salmón, batata moderada y vegetales verdes.",
    detox: "120 g salmón o pescado blanco, vegetales abundantes y poca batata.",
    muscleGain: "150–180 g salmón, 200–250 g batata y vegetales.",
    maintenance: "150 g salmón, 150–200 g batata y vegetales.",
  },
},
{
  id: "tacos-fit",
  title: "Tacos fit",
  mealType: "lunch",
  carbLevel: "moderate",
  description: "Tacos adaptados con proteína magra, vegetales y grasa saludable.",
  components: [
    { name: "Tortillas", role: "carb", baseAmount: "2–3 unidades", swaps: ["arepa", "pan pita", "arroz"] },
    { name: "Pollo / carne magra", role: "protein", baseAmount: "120–150 g", swaps: ["pavo", "atún", "tofu"] },
    { name: "Pico de gallo / ensalada", role: "vegetable", baseAmount: "Libre", swaps: ["lechuga", "tomate", "pepino"] },
    { name: "Aguacate", role: "fat", baseAmount: "1/4 unidad", swaps: ["yogur griego como salsa", "aceite de oliva"] },
  ],
  tips: ["Evita exceso de salsas cremosas.", "Puedes hacerlo low carb con hojas de lechuga."],
  portionGuide: {
    weightLoss: "2 tortillas pequeñas, 120 g proteína, vegetales abundantes y poco aguacate.",
    hormonalBalance: "2 tortillas, 130–150 g proteína, vegetales y aguacate moderado.",
    detox: "Usa hojas de lechuga o 1–2 tortillas, proteína magra y vegetales.",
    muscleGain: "3–4 tortillas, 150–180 g proteína y aguacate.",
    maintenance: "2–3 tortillas, 140 g proteína y vegetales.",
  },
},
{
  id: "ensalada-atun-garbanzos",
  title: "Ensalada de atún con garbanzos",
  mealType: "lunch",
  carbLevel: "moderate",
  description: "Opción fresca, alta en proteína y fibra.",
  components: [
    { name: "Atún", role: "protein", baseAmount: "1 lata grande", swaps: ["pollo", "huevo", "salmón"] },
    { name: "Garbanzos", role: "carb", baseAmount: "1/2 taza", swaps: ["lentejas", "caraotas", "quinoa"] },
    { name: "Ensalada fresca", role: "vegetable", baseAmount: "Libre", swaps: ["pepino", "tomate", "espinaca"] },
    { name: "Aceite de oliva / aguacate", role: "fat", baseAmount: "1 cdta o 1/4 aguacate", swaps: ["semillas", "almendras"] },
  ],
  tips: ["Buena opción rápida.", "Alta en fibra y saciedad."],
  portionGuide: {
    weightLoss: "1 lata atún, 1/3–1/2 taza garbanzos y ensalada abundante.",
    hormonalBalance: "1 lata atún, 1/2 taza garbanzos, vegetales y grasa saludable.",
    detox: "Atún, ensalada abundante y garbanzos moderados.",
    muscleGain: "1–2 latas atún, 3/4 taza garbanzos y aguacate.",
    maintenance: "1 lata atún, 1/2 taza garbanzos y ensalada.",
  },
},
{
  id: "wrap-pollo",
  title: "Wrap de pollo",
  mealType: "lunch",
  carbLevel: "moderate",
  description: "Comida práctica para llevar con proteína y vegetales.",
  components: [
    { name: "Tortilla / pan pita", role: "carb", baseAmount: "1 unidad", swaps: ["arepa", "pan integral"] },
    { name: "Pollo desmechado", role: "protein", baseAmount: "120–150 g", swaps: ["atún", "pavo", "huevo"] },
    { name: "Lechuga y tomate", role: "vegetable", baseAmount: "Libre", swaps: ["espinaca", "pepino"] },
    { name: "Aguacate / yogur griego", role: "fat", baseAmount: "1/4 aguacate o salsa ligera", swaps: ["aceite de oliva"] },
  ],
  tips: ["Ideal para lunch rápido.", "Puedes hacerlo más ligero con menos tortilla y más ensalada."],
  portionGuide: {
    weightLoss: "1 tortilla pequeña, 120 g pollo, muchos vegetales y poca grasa.",
    hormonalBalance: "1 tortilla, 130 g pollo, vegetales y aguacate moderado.",
    detox: "Usa tortilla pequeña o lechuga, pollo y muchos vegetales.",
    muscleGain: "1–2 tortillas, 150–180 g pollo y aguacate.",
    maintenance: "1 tortilla, 140 g pollo y vegetales.",
  },
},
{
  id: "omelette-vegetales",
  title: "Omelette con vegetales",
  mealType: "breakfast",
  carbLevel: "low",
  description: "Desayuno bajo en carbohidratos, alto en proteína y saciedad.",
  components: [
    { name: "Huevos", role: "protein", baseAmount: "2 unidades", swaps: ["claras", "queso cottage"] },
    { name: "Claras", role: "protein", baseAmount: "100–150 g", swaps: ["pavo", "pollo desmechado"] },
    { name: "Espinaca / tomate", role: "vegetable", baseAmount: "Libre", swaps: ["pimentón", "champiñones"] },
    { name: "Aguacate", role: "fat", baseAmount: "1/4 unidad", swaps: ["queso", "aceite de oliva"] },
  ],
  tips: ["Excelente para low carb.", "Puedes agregar arepa pequeña si entrenas fuerte."],
  portionGuide: {
    weightLoss: "1 huevo + claras, vegetales libres y 1/4 aguacate.",
    hormonalBalance: "2 huevos o 1 huevo + claras, vegetales y grasa saludable.",
    detox: "Claras, espinaca, tomate y aguacate moderado.",
    muscleGain: "2 huevos + claras y añade arepa o pan si necesitas energía.",
    maintenance: "2 huevos, vegetales y 1/4 aguacate.",
  },
},
{
  id: "smoothie-proteico",
  title: "Smoothie proteico",
  mealType: "snack",
  carbLevel: "moderate",
  description: "Smoothie rápido con proteína, fruta y grasa saludable opcional.",
  components: [
    { name: "Proteína en polvo / yogur griego", role: "protein", baseAmount: "1 scoop o 200 g yogur", swaps: ["cottage", "claras pasteurizadas"] },
    { name: "Banano o frutos rojos", role: "fruit", baseAmount: "1 porción", swaps: ["manzana", "piña"] },
    { name: "Leche vegetal / agua", role: "liquid", baseAmount: "200 ml", swaps: ["agua", "leche de almendras"] },
    { name: "Chía / mantequilla de maní", role: "fat", baseAmount: "1 cda pequeña", swaps: ["almendras", "nueces"] },
  ],
  tips: ["Perfecto post entreno.", "Para pérdida de peso usa frutos rojos en vez de banano."],
  portionGuide: {
    weightLoss: "1 scoop o 150–200 g yogur, frutos rojos y agua/leche vegetal.",
    hormonalBalance: "Proteína + fruta baja en azúcar + chía moderada.",
    detox: "Yogur natural o proteína, frutos rojos y agua; evita exceso de mantequilla de maní.",
    muscleGain: "1 scoop, banano completo, leche vegetal y avena opcional.",
    maintenance: "Proteína, 1 porción fruta y grasa saludable pequeña.",
  },
},
];