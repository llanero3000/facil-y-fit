export type MealName = "Desayuno" | "Almuerzo" | "Cena" | "Snack";

export type ChallengeMeal = {
  title: string;
  description: string;
  proteinFoodIds: string[];
  carbFoodIds: string[];
  fatFoodIds: string[];
  vegetableFoodIds: string[];
  ingredients: string[];
  preparation: string[];
  avoidFoods: string[];
  notes?: string[];
};

export type ChallengeDay = Record<MealName, ChallengeMeal>;

export const mealNames: MealName[] = [
  "Desayuno",
  "Almuerzo",
  "Cena",
  "Snack",
];

export const challengeData: Record<string, ChallengeDay> = {
  "Día 1": {
    Desayuno: {
      title: "Pancakes de avena + huevo + fruta",
      description:
        "Desayuno práctico para iniciar el día con proteína, energía controlada y buena saciedad.",
      proteinFoodIds: ["whole-egg", "egg-whites", "greek-yogurt"],
      carbFoodIds: ["oats", "banana", "berries"],
      fatFoodIds: ["peanut-butter", "chia", "almonds"],
      vegetableFoodIds: ["spinach"],
      ingredients: [
        "Avena",
        "Huevo o claras",
        "Banano o frutos rojos",
        "Canela",
        "Yogur griego opcional",
      ],
      preparation: [
        "Mezcla la avena con huevo o claras.",
        "Agrega canela y fruta.",
        "Cocina en sartén antiadherente.",
        "Sirve con yogur griego si necesitas más proteína.",
      ],
      avoidFoods: ["Azúcar refinada", "Sirope regular", "Mantequilla en exceso"],
      notes: [
        "Si tu objetivo es pérdida de grasa, usa fruta moderada.",
        "Si tu objetivo es aumento de masa, puedes usar más avena o fruta.",
      ],
    },

    Almuerzo: {
      title: "Bistec con arroz, aguacate y ensalada",
      description:
        "Almuerzo completo con proteína, carbohidrato, grasa saludable y vegetales.",
      proteinFoodIds: ["beef-steak", "lean-beef", "chicken", "turkey"],
      carbFoodIds: ["rice", "potato", "cassava", "arepa"],
      fatFoodIds: ["avocado", "olive-oil"],
      vegetableFoodIds: ["lettuce", "tomato", "cucumber", "spinach"],
      ingredients: [
        "Bistec de res",
        "Arroz cocido",
        "Aguacate",
        "Ensalada fresca",
      ],
      preparation: [
        "Cocina el bistec a la plancha o sartén.",
        "Sirve con arroz cocido.",
        "Agrega aguacate y ensalada fresca.",
      ],
      avoidFoods: ["Salsas procesadas", "Frituras", "Refrescos", "Alcohol"],
      notes: [
        "Puedes cambiar el arroz por papa, yuca o arepa.",
        "La cantidad exacta cambia según tus macros personales.",
      ],
    },

    Cena: {
      title: "Ensalada con proteína y vegetales",
      description:
        "Cena ligera, alta en proteína y con vegetales abundantes.",
      proteinFoodIds: ["shredded-chicken", "tuna", "white-fish", "whole-egg"],
      carbFoodIds: ["sweet-potato", "potato", "quinoa"],
      fatFoodIds: ["avocado", "olive-oil", "chia"],
      vegetableFoodIds: ["lettuce", "tomato", "cucumber", "spinach"],
      ingredients: [
        "Proteína a elección",
        "Vegetales frescos",
        "Aguacate o aceite de oliva",
        "Carbohidrato opcional según objetivo",
      ],
      preparation: [
        "Arma una base grande de vegetales.",
        "Agrega la proteína.",
        "Añade grasa saludable.",
        "Incluye carbohidrato solo si corresponde a tu objetivo o entrenamiento.",
      ],
      avoidFoods: ["Aderezos cremosos", "Crutones", "Refrescos"],
      notes: [
        "Para reset metabólico/desinflamar, prioriza vegetales y proteína.",
        "Para masa muscular, puedes agregar batata, papa o quinoa.",
      ],
    },

    Snack: {
      title: "Yogur griego con fruta y frutos secos",
      description:
        "Snack rápido, dulce y balanceado para mantener saciedad.",
      proteinFoodIds: ["greek-yogurt", "protein-powder", "cottage-cheese"],
      carbFoodIds: ["berries", "apple", "banana"],
      fatFoodIds: ["almonds", "walnuts", "chia"],
      vegetableFoodIds: [],
      ingredients: [
        "Yogur griego",
        "Fruta",
        "Almendras, nueces o chía",
      ],
      preparation: [
        "Sirve el yogur en un bowl.",
        "Agrega la fruta.",
        "Añade una porción pequeña de grasa saludable.",
      ],
      avoidFoods: ["Granola azucarada", "Miel en exceso", "Dulces procesados"],
      notes: [
        "Si no consumes lácteos, puedes cambiar por proteína en polvo o cottage si aplica.",
      ],
    },
  },

  "Día 2": {
    Desayuno: {
      title: "Arepa fit con huevo y aguacate",
      description:
        "Desayuno latino balanceado con proteína, carbohidrato y grasa saludable.",
      proteinFoodIds: ["whole-egg", "egg-whites", "tuna", "shredded-chicken"],
      carbFoodIds: ["arepa", "corn-flour-arepas", "wholegrain-bread"],
      fatFoodIds: ["avocado", "cheese"],
      vegetableFoodIds: ["tomato", "spinach"],
      ingredients: [
        "Arepa",
        "Huevo, claras, atún o pollo desmechado",
        "Aguacate",
        "Tomate o espinaca",
      ],
      preparation: [
        "Prepara la arepa.",
        "Cocina la proteína elegida.",
        "Sirve con aguacate y vegetales frescos.",
      ],
      avoidFoods: ["Arepa frita", "Margarina", "Quesos muy grasos en exceso"],
      notes: [
        "Para pérdida de grasa, usa arepa más pequeña.",
        "Para masa muscular, puedes usar arepa completa y más proteína.",
      ],
    },

    Almuerzo: {
      title: "Pollo con papa y ensalada",
      description:
        "Plato fácil de meal prep con proteína magra, carbohidrato y vegetales.",
      proteinFoodIds: ["chicken", "turkey", "white-fish", "pork-loin"],
      carbFoodIds: ["potato", "sweet-potato", "rice", "quinoa"],
      fatFoodIds: ["avocado", "olive-oil"],
      vegetableFoodIds: ["broccoli", "lettuce", "cucumber", "tomato"],
      ingredients: [
        "Pechuga de pollo",
        "Papa o batata",
        "Ensalada o vegetales cocidos",
        "Aguacate o aceite de oliva",
      ],
      preparation: [
        "Cocina la proteína a la plancha.",
        "Hierve o hornea la papa.",
        "Acompaña con vegetales y grasa saludable.",
      ],
      avoidFoods: ["Papas fritas", "Salsas cremosas", "Refrescos"],
      notes: [
        "Puedes cambiar papa por arroz, batata o quinoa.",
      ],
    },

    Cena: {
      title: "Pescado con vegetales y aguacate",
      description:
        "Cena ligera con proteína fácil de digerir y vegetales abundantes.",
      proteinFoodIds: ["white-fish", "salmon", "shrimp", "tuna"],
      carbFoodIds: ["sweet-potato", "potato", "quinoa"],
      fatFoodIds: ["avocado", "olive-oil"],
      vegetableFoodIds: ["zucchini", "broccoli", "asparagus", "spinach"],
      ingredients: [
        "Pescado o camarones",
        "Vegetales verdes",
        "Aguacate o aceite de oliva",
        "Carbohidrato opcional",
      ],
      preparation: [
        "Cocina el pescado o camarones.",
        "Saltea o cocina los vegetales.",
        "Agrega la grasa saludable sugerida.",
      ],
      avoidFoods: ["Empanizados", "Frituras", "Salsas comerciales"],
      notes: [
        "Para días bajos en carbohidrato, omite o reduce la batata/papa.",
      ],
    },

    Snack: {
      title: "Smoothie proteico",
      description:
        "Opción práctica para post entreno o merienda alta en proteína.",
      proteinFoodIds: ["protein-powder", "greek-yogurt", "cottage-cheese"],
      carbFoodIds: ["banana", "berries", "apple"],
      fatFoodIds: ["chia", "peanut-butter", "almonds"],
      vegetableFoodIds: ["spinach"],
      ingredients: [
        "Proteína en polvo o yogur griego",
        "Fruta",
        "Agua o leche vegetal",
        "Chía o mantequilla de maní opcional",
      ],
      preparation: [
        "Licúa todos los ingredientes.",
        "Ajusta la fruta según tu objetivo.",
        "Sirve frío.",
      ],
      avoidFoods: ["Azúcar añadida", "Sirope", "Helado"],
      notes: [
        "Para pérdida de grasa, usa frutos rojos en vez de banano completo.",
      ],
    },
  },

  "Día 3": {
    Desayuno: {
      title: "Omelette con vegetales",
      description:
        "Desayuno bajo en carbohidratos, alto en proteína y saciedad.",
      proteinFoodIds: ["whole-egg", "egg-whites", "ham", "cottage-cheese"],
      carbFoodIds: ["wholegrain-bread", "arepa", "oats"],
      fatFoodIds: ["avocado", "cheese", "olive-oil"],
      vegetableFoodIds: ["spinach", "tomato", "bell-pepper", "onion"],
      ingredients: [
        "Huevos o claras",
        "Espinaca, tomate o pimentón",
        "Aguacate opcional",
        "Carbohidrato opcional según objetivo",
      ],
      preparation: [
        "Bate los huevos o claras.",
        "Agrega vegetales picados.",
        "Cocina en sartén antiadherente.",
      ],
      avoidFoods: ["Tocineta en exceso", "Pan dulce", "Margarina"],
      notes: [
        "Ideal para reset metabólico o días bajos en carbohidratos.",
      ],
    },

    Almuerzo: {
      title: "Pasta con albóndigas y ensalada",
      description:
        "Comida más alta en carbohidratos, ideal para días de pierna o entrenamiento fuerte.",
      proteinFoodIds: ["lean-beef", "turkey", "chicken"],
      carbFoodIds: ["pasta", "rice", "potato"],
      fatFoodIds: ["avocado", "olive-oil"],
      vegetableFoodIds: ["tomato", "lettuce", "spinach", "cucumber"],
      ingredients: [
        "Pasta",
        "Carne magra para albóndigas",
        "Salsa de tomate natural",
        "Ensalada",
      ],
      preparation: [
        "Prepara las albóndigas con carne magra.",
        "Cocina la pasta.",
        "Sirve con salsa de tomate natural y ensalada.",
      ],
      avoidFoods: ["Salsas cremosas", "Queso en exceso", "Pan adicional"],
      notes: [
        "Si no es día de entrenamiento fuerte, reduce la pasta.",
      ],
    },

    Cena: {
      title: "Tacos fit",
      description:
        "Cena flexible con tortillas, proteína y vegetales.",
      proteinFoodIds: ["chicken", "lean-beef", "tuna", "tofu"],
      carbFoodIds: ["tortilla", "pita-bread", "arepa"],
      fatFoodIds: ["avocado", "greek-yogurt"],
      vegetableFoodIds: ["lettuce", "tomato", "cucumber", "cilantro"],
      ingredients: [
        "Tortillas",
        "Proteína a elección",
        "Vegetales",
        "Aguacate o salsa ligera",
      ],
      preparation: [
        "Calienta las tortillas.",
        "Agrega la proteína.",
        "Añade vegetales y grasa saludable.",
      ],
      avoidFoods: ["Salsas cremosas", "Queso excesivo", "Frituras"],
      notes: [
        "Puedes usar hojas de lechuga como opción más ligera.",
      ],
    },

    Snack: {
      title: "Manzana con mantequilla de maní",
      description:
        "Snack sencillo para antojo dulce y saciedad.",
      proteinFoodIds: ["greek-yogurt", "protein-powder", "cottage-cheese"],
      carbFoodIds: ["apple", "berries", "rice-cakes"],
      fatFoodIds: ["peanut-butter", "almonds", "walnuts"],
      vegetableFoodIds: [],
      ingredients: [
        "Manzana verde",
        "Mantequilla de maní",
        "Proteína opcional",
      ],
      preparation: [
        "Corta la manzana.",
        "Acompaña con mantequilla de maní.",
        "Agrega proteína si necesitas completar tu porción.",
      ],
      avoidFoods: ["Dulces procesados", "Chocolate con azúcar", "Galletas"],
      notes: [
        "Controla la mantequilla de maní porque es fácil pasarse.",
      ],
    },
  },

  "Día 4": {
    Desayuno: {
      title: "Yogur bowl con fruta y semillas",
      description:
        "Desayuno fresco con proteína, fruta y grasas saludables.",
      proteinFoodIds: ["greek-yogurt", "protein-powder", "cottage-cheese"],
      carbFoodIds: ["berries", "banana", "granola", "oats"],
      fatFoodIds: ["chia", "almonds", "walnuts"],
      vegetableFoodIds: [],
      ingredients: [
        "Yogur griego",
        "Fruta",
        "Chía o frutos secos",
        "Granola opcional",
      ],
      preparation: [
        "Sirve el yogur.",
        "Agrega fruta.",
        "Añade semillas o frutos secos.",
      ],
      avoidFoods: ["Yogur azucarado", "Granola muy dulce", "Miel en exceso"],
      notes: [
        "Para detox o pérdida de grasa, usa frutos rojos y evita granola alta en azúcar.",
      ],
    },

    Almuerzo: {
      title: "Ensalada de atún con garbanzos",
      description:
        "Almuerzo fresco con proteína, fibra y carbohidrato moderado.",
      proteinFoodIds: ["tuna", "chicken", "whole-egg"],
      carbFoodIds: ["chickpeas", "lentils", "quinoa"],
      fatFoodIds: ["olive-oil", "avocado"],
      vegetableFoodIds: ["lettuce", "tomato", "cucumber", "spinach"],
      ingredients: [
        "Atún",
        "Garbanzos",
        "Vegetales frescos",
        "Aceite de oliva o aguacate",
      ],
      preparation: [
        "Mezcla el atún con garbanzos.",
        "Agrega vegetales frescos.",
        "Añade grasa saludable.",
      ],
      avoidFoods: ["Mayonesa regular", "Crutones", "Refrescos"],
      notes: [
        "Los garbanzos también aportan proteína vegetal.",
      ],
    },

    Cena: {
      title: "Sopa de pollo con verduras",
      description:
        "Cena reconfortante, ligera y alta en volumen.",
      proteinFoodIds: ["shredded-chicken", "chicken", "turkey"],
      carbFoodIds: ["potato", "cassava", "sweet-potato"],
      fatFoodIds: ["avocado", "olive-oil"],
      vegetableFoodIds: ["carrot", "celery", "zucchini", "spinach"],
      ingredients: [
        "Pollo",
        "Verduras",
        "Papa o yuca opcional",
        "Aguacate opcional",
      ],
      preparation: [
        "Cocina el pollo con verduras.",
        "Agrega carbohidrato si corresponde.",
        "Sirve caliente.",
      ],
      avoidFoods: ["Cubitos muy altos en sodio", "Pan adicional", "Frituras"],
      notes: [
        "Muy buena para días de desinflamación.",
      ],
    },

    Snack: {
      title: "Rice cakes con proteína",
      description:
        "Snack rápido para antes o después de entrenar.",
      proteinFoodIds: ["protein-powder", "greek-yogurt", "cottage-cheese"],
      carbFoodIds: ["rice-cakes", "banana", "apple"],
      fatFoodIds: ["peanut-butter", "almonds"],
      vegetableFoodIds: [],
      ingredients: [
        "Galletas de arroz",
        "Proteína o yogur",
        "Mantequilla de maní opcional",
      ],
      preparation: [
        "Sirve las galletas de arroz.",
        "Acompaña con proteína.",
        "Agrega grasa saludable si corresponde.",
      ],
      avoidFoods: ["Nutella regular", "Mermeladas azucaradas", "Dulces"],
      notes: [
        "Útil cuando necesitas algo rápido.",
      ],
    },
  },
    "Día 6": {
    Desayuno: {
      title: "Desayuno flexible alto en proteína",
      description:
        "Fin de semana opcional. Mantén proteína alta y carbohidratos controlados.",
      proteinFoodIds: ["whole-egg", "egg-whites", "greek-yogurt", "tuna"],
      carbFoodIds: ["arepa", "oats", "wholegrain-bread", "berries"],
      fatFoodIds: ["avocado", "peanut-butter", "almonds"],
      vegetableFoodIds: ["spinach", "tomato"],
      ingredients: [
        "Proteína a elección",
        "Carbohidrato controlado",
        "Grasa saludable",
        "Vegetales opcionales",
      ],
      preparation: [
        "Escoge una proteína.",
        "Agrega un carbohidrato según tus macros.",
        "Completa con grasa saludable y vegetales.",
      ],
      avoidFoods: ["Azúcar refinada", "Frituras", "Jugos azucarados"],
      notes: ["Día flexible: sigue tus porciones personalizadas."],
    },

    Almuerzo: {
      title: "Plato flexible MonyFit",
      description:
        "Arma tu plato con proteína, carbohidrato permitido, grasa saludable y ensalada.",
      proteinFoodIds: ["chicken", "beef-steak", "white-fish", "tuna"],
      carbFoodIds: ["rice", "potato", "sweet-potato", "arepa"],
      fatFoodIds: ["avocado", "olive-oil", "almonds"],
      vegetableFoodIds: ["lettuce", "tomato", "cucumber", "spinach"],
      ingredients: [
        "Proteína principal",
        "Carbohidrato permitido",
        "Ensalada o vegetales",
        "Grasa saludable",
      ],
      preparation: [
        "Escoge una proteína.",
        "Agrega carbohidrato según tus macros.",
        "Completa con ensalada y grasa saludable.",
      ],
      avoidFoods: ["Alcohol", "Refrescos", "Salsas procesadas", "Frituras"],
      notes: ["Mantén la estructura del plato aunque sea fin de semana."],
    },

    Cena: {
      title: "Cena ligera flexible",
      description:
        "Cena enfocada en proteína y vegetales, con carbohidrato opcional.",
      proteinFoodIds: ["white-fish", "chicken", "tuna", "whole-egg"],
      carbFoodIds: ["sweet-potato", "potato", "quinoa"],
      fatFoodIds: ["avocado", "olive-oil"],
      vegetableFoodIds: ["lettuce", "cucumber", "spinach", "zucchini"],
      ingredients: [
        "Proteína ligera",
        "Vegetales abundantes",
        "Grasa saludable",
        "Carbohidrato opcional",
      ],
      preparation: [
        "Prepara la proteína.",
        "Acompaña con vegetales.",
        "Agrega grasa saludable.",
      ],
      avoidFoods: ["Comida rápida", "Frituras", "Dulces procesados"],
      notes: ["Si cenaste tarde, mantén esta comida más ligera."],
    },

    Snack: {
      title: "Snack inteligente",
      description:
        "Solo si tienes hambre real. Prioriza proteína y grasas buenas.",
      proteinFoodIds: ["protein-powder", "greek-yogurt", "whole-egg", "tuna"],
      carbFoodIds: ["berries", "apple"],
      fatFoodIds: ["almonds", "chia", "avocado"],
      vegetableFoodIds: ["cucumber", "carrot"],
      ingredients: [
        "Proteína",
        "Fruta baja en azúcar o vegetales",
        "Grasa saludable opcional",
      ],
      preparation: [
        "Escoge una opción simple.",
        "Evita snacks dulces o ultra procesados.",
      ],
      avoidFoods: ["Dulces", "Galletas", "Jugos", "Chocolate azucarado"],
      notes: ["Si no tienes hambre, puedes saltarlo."],
    },
  },

  "Día 7": {
    Desayuno: {
      title: "Desayuno libre guiado",
      description:
        "Día opcional para mantener estructura sin rigidez.",
      proteinFoodIds: ["whole-egg", "greek-yogurt", "cottage-cheese", "tuna"],
      carbFoodIds: ["oats", "arepa", "wholegrain-bread", "berries"],
      fatFoodIds: ["avocado", "almonds", "peanut-butter"],
      vegetableFoodIds: ["spinach", "tomato"],
      ingredients: [
        "Proteína",
        "Carbohidrato permitido",
        "Grasa saludable",
        "Vegetales opcionales",
      ],
      preparation: [
        "Arma tu desayuno con una opción de cada grupo.",
        "Sigue las cantidades sugeridas por la app.",
      ],
      avoidFoods: ["Pan dulce", "Azúcar refinada", "Frituras"],
      notes: ["Día de planificación y consistencia."],
    },

    Almuerzo: {
      title: "Almuerzo familiar adaptado",
      description:
        "Usa la app para adaptar una comida familiar a tus porciones.",
      proteinFoodIds: ["chicken", "lean-beef", "white-fish", "pork-loin"],
      carbFoodIds: ["rice", "potato", "cassava", "plantain", "arepa"],
      fatFoodIds: ["avocado", "olive-oil"],
      vegetableFoodIds: ["lettuce", "tomato", "cucumber", "broccoli"],
      ingredients: [
        "Proteína disponible",
        "Carbohidrato controlado",
        "Ensalada o vegetales",
        "Grasa saludable",
      ],
      preparation: [
        "Escoge la proteína del plato familiar.",
        "Mide el carbohidrato según tus macros.",
        "Agrega vegetales abundantes.",
      ],
      avoidFoods: ["Alcohol", "Refrescos", "Postres azucarados", "Frituras"],
      notes: ["No se trata de prohibirse, sino de saber elegir."],
    },

    Cena: {
      title: "Cena de cierre de semana",
      description:
        "Cena simple para cerrar la semana ligera y organizada.",
      proteinFoodIds: ["chicken", "white-fish", "tuna", "whole-egg"],
      carbFoodIds: ["sweet-potato", "potato", "quinoa"],
      fatFoodIds: ["avocado", "olive-oil", "chia"],
      vegetableFoodIds: ["spinach", "lettuce", "cucumber", "zucchini"],
      ingredients: [
        "Proteína",
        "Vegetales",
        "Grasa saludable",
        "Carbohidrato opcional",
      ],
      preparation: [
        "Prepara una proteína simple.",
        "Acompaña con vegetales.",
        "Agrega carbohidrato solo si corresponde.",
      ],
      avoidFoods: ["Comidas pesadas", "Frituras", "Azúcar"],
      notes: ["Ideal para preparar el inicio de la próxima semana."],
    },

    Snack: {
      title: "Snack opcional",
      description:
        "Mantén el snack solo si realmente lo necesitas.",
      proteinFoodIds: ["protein-powder", "greek-yogurt", "whole-egg"],
      carbFoodIds: ["berries", "apple"],
      fatFoodIds: ["almonds", "chia", "avocado"],
      vegetableFoodIds: ["cucumber", "celery"],
      ingredients: [
        "Proteína",
        "Vegetales o fruta moderada",
        "Grasa saludable opcional",
      ],
      preparation: [
        "Elige una opción rápida.",
        "Mantén la porción moderada.",
      ],
      avoidFoods: ["Snacks azucarados", "Jugos", "Galletas", "Cereales dulces"],
      notes: ["Si no hay hambre real, no hace falta snack."],
    },
  },
};