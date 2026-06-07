"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { foodDatabase } from "@/lib/food-database";
import { translateSelectedFood } from "@/lib/food-translator";
import { playInteraction } from "@/lib/app-sound";

const mealLabels = {
  breakfast: "Desayuno",
  lunch: "Almuerzo",
  dinner: "Cena",
  snack: "Snack",
};

type MealKey = keyof typeof mealLabels;

type StoredMeal = {
  name: string;
  protein: number;
  carbs: number;
  fats: number;
};

type StoredProfile = {
  meals?: StoredMeal[];
};

function getMealName(meal: MealKey) {
  if (meal === "breakfast") return "Desayuno";
  if (meal === "lunch") return "Almuerzo";
  if (meal === "dinner") return "Cena";
  return "Snack";
}

export default function EatTodayPage() {
  const [profile, setProfile] = useState<StoredProfile>({});
  const [mealType, setMealType] = useState<MealKey>("lunch");

  const [selectedProtein, setSelectedProtein] = useState("");
  const [selectedCarb, setSelectedCarb] = useState("");
  const [selectedFat, setSelectedFat] = useState("");

  const [useSecondaryProtein, setUseSecondaryProtein] = useState(false);
  const [useSecondaryCarb, setUseSecondaryCarb] = useState(false);
  const [useSecondaryFat, setUseSecondaryFat] = useState(false);

  const [secondaryProtein, setSecondaryProtein] = useState("");
  const [secondaryCarb, setSecondaryCarb] = useState("");
  const [secondaryFat, setSecondaryFat] = useState("");

  useEffect(() => {
    const storedProfile = localStorage.getItem("macrofit-profile");

    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const mealTarget = profile.meals?.find(
    (meal) => meal.name === getMealName(mealType)
  );

  const targets = {
    protein: mealTarget?.protein || 30,
    carbs: mealTarget?.carbs || 35,
    fats: mealTarget?.fats || 10,
  };

  const proteins = useMemo(
    () => foodDatabase.filter((food) => food.category === "protein"),
    []
  );

  const carbs = useMemo(
    () => foodDatabase.filter((food) => food.category === "carb"),
    []
  );

  const fats = useMemo(
    () => foodDatabase.filter((food) => food.category === "fat"),
    []
  );

  const vegetables = useMemo(
    () => foodDatabase.filter((food) => food.category === "vegetable").slice(0, 8),
    []
  );

  const proteinTargetPerFood =
    useSecondaryProtein && secondaryProtein ? targets.protein / 2 : targets.protein;

  const carbTargetPerFood =
    useSecondaryCarb && secondaryCarb ? targets.carbs / 2 : targets.carbs;

  const fatTargetPerFood =
    useSecondaryFat && secondaryFat ? targets.fats / 2 : targets.fats;

  const proteinFood = selectedProtein
    ? translateSelectedFood(selectedProtein, proteinTargetPerFood)
    : null;

  const secondaryProteinFood =
    useSecondaryProtein && secondaryProtein
      ? translateSelectedFood(secondaryProtein, targets.protein / 2)
      : null;

  const carbFood = selectedCarb
    ? translateSelectedFood(selectedCarb, carbTargetPerFood)
    : null;

  const secondaryCarbFood =
    useSecondaryCarb && secondaryCarb
      ? translateSelectedFood(secondaryCarb, targets.carbs / 2)
      : null;

  const fatFood = selectedFat
    ? translateSelectedFood(selectedFat, fatTargetPerFood)
    : null;

  const secondaryFatFood =
    useSecondaryFat && secondaryFat
      ? translateSelectedFood(secondaryFat, targets.fats / 2)
      : null;

  return (
    <main className="min-h-screen bg-transparent p-3 md:p-6">
      <div className="mb-6">
        <Link
          href="/dashboard"
  onClick={() => playInteraction()}
          className="inline-flex rounded-full border border-[#D8CFC2] bg-white px-5 py-3 text-[#5A463B] hover:bg-[#F1ECE4]"
        >
          ← Volver
        </Link>
      </div>

      <section className="mx-auto max-w-5xl rounded-[1.5rem] border border-[#D8CFC2] bg-white/70 p-4 md:rounded-[2rem] md:p-12">
        <div className="relative overflow-hidden rounded-[1.5rem] border border-[#D8CFC2] md:rounded-[2rem]">
          <img
            src="/images/eat-today-hero.png"
            alt="¿Qué vas a comer hoy?"
            className="h-[240px] w-full object-cover object-center md:h-[320px]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#2E271F]/75 via-[#2E271F]/35 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-white/80">
              Intercambiador de alimentos
            </p>

            <h1 className="mt-3 brand-title text-4xl text-white leading-none md:text-7xl">
              ¿Qué vas a comer hoy?
            </h1>

            <p className="mt-4 max-w-xl text-sm text-white/90 leading-relaxed md:text-base">
              Selecciona los ingredientes de tu receta y descubre cuánto servirte
              según tus macros personales.
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-[#D8CFC2] bg-[#F7F4EF] p-5">
          <p className="text-sm uppercase tracking-[0.25em] text-[#7A6F63]">
            Cómo usarlo
          </p>

          <ol className="mt-4 space-y-2 text-sm text-[#5A463B] md:text-base">
            <li>1. Revisa la receta que Mony envió en el grupo.</li>
            <li>2. Selecciona proteína, carbohidrato y grasa.</li>
            <li>3. Si tu plato combina ingredientes, activa secundarios.</li>
            <li>4. Fácil y Fit divide tus macros y calcula tus porciones.</li>
          </ol>
        </div>

        <div className="mt-8">
          <label className="text-sm text-[#7A6F63]">Comida</label>

          <select
            value={mealType}
            onChange={(event) => {
              setMealType(event.target.value as MealKey);
              setSelectedProtein("");
              setSelectedCarb("");
              setSelectedFat("");
              setSecondaryProtein("");
              setSecondaryCarb("");
              setSecondaryFat("");
              setUseSecondaryProtein(false);
              setUseSecondaryCarb(false);
              setUseSecondaryFat(false);
            }}
            className="mt-2 w-full rounded-full border border-[#D8CFC2] bg-white px-5 py-4 outline-none"
          >
            {Object.entries(mealLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-[#D8CFC2] bg-[#F7F4EF] p-5">
          <p className="text-sm uppercase tracking-[0.25em] text-[#7A6F63]">
            Tus macros para {mealLabels[mealType]}
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full bg-white px-4 py-2 text-[#5A463B] border border-[#D8CFC2]">
              Proteína {targets.protein}g
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-[#5A463B] border border-[#D8CFC2]">
              Carbs {targets.carbs}g
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-[#5A463B] border border-[#D8CFC2]">
              Grasas {targets.fats}g
            </span>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-[1.5rem] border border-[#D8CFC2] bg-[#F7F4EF] p-4">
            <label className="text-sm text-[#7A6F63]">Proteína principal</label>

            <select
              value={selectedProtein}
              onChange={(event) => setSelectedProtein(event.target.value)}
              className="mt-2 w-full rounded-[1.25rem] border border-[#D8CFC2] bg-white px-5 py-4 outline-none"
            >
              <option value="">Selecciona</option>
              {proteins.map((food) => (
                <option key={food.id} value={food.id}>
                  {food.name}
                </option>
              ))}
            </select>

            <label className="mt-4 flex items-center gap-2 text-sm text-[#7A6F63]">
              <input
                type="checkbox"
                checked={useSecondaryProtein}
                onChange={(event) => {
                  setUseSecondaryProtein(event.target.checked);
                  if (!event.target.checked) setSecondaryProtein("");
                }}
              />
              Agregar proteína secundaria
            </label>

            {useSecondaryProtein && (
              <select
                value={secondaryProtein}
                onChange={(event) => setSecondaryProtein(event.target.value)}
                className="mt-3 w-full rounded-[1.25rem] border border-[#D8CFC2] bg-white px-5 py-4 outline-none"
              >
                <option value="">Proteína secundaria</option>
                {proteins
                  .filter((food) => food.id !== selectedProtein)
                  .map((food) => (
                    <option key={food.id} value={food.id}>
                      {food.name}
                    </option>
                  ))}
              </select>
            )}
          </div>

          <div className="rounded-[1.5rem] border border-[#D8CFC2] bg-[#F7F4EF] p-4">
            <label className="text-sm text-[#7A6F63]">
              Carbohidrato principal
            </label>

            <select
              value={selectedCarb}
              onChange={(event) => setSelectedCarb(event.target.value)}
              className="mt-2 w-full rounded-[1.25rem] border border-[#D8CFC2] bg-white px-5 py-4 outline-none"
            >
              <option value="">Selecciona</option>
              {carbs.map((food) => (
                <option key={food.id} value={food.id}>
                  {food.name}
                </option>
              ))}
            </select>

            <label className="mt-4 flex items-center gap-2 text-sm text-[#7A6F63]">
              <input
                type="checkbox"
                checked={useSecondaryCarb}
                onChange={(event) => {
                  setUseSecondaryCarb(event.target.checked);
                  if (!event.target.checked) setSecondaryCarb("");
                }}
              />
              Agregar carbohidrato secundario
            </label>

            {useSecondaryCarb && (
              <select
                value={secondaryCarb}
                onChange={(event) => setSecondaryCarb(event.target.value)}
                className="mt-3 w-full rounded-[1.25rem] border border-[#D8CFC2] bg-white px-5 py-4 outline-none"
              >
                <option value="">Carbohidrato secundario</option>
                {carbs
                  .filter((food) => food.id !== selectedCarb)
                  .map((food) => (
                    <option key={food.id} value={food.id}>
                      {food.name}
                    </option>
                  ))}
              </select>
            )}
          </div>

          <div className="rounded-[1.5rem] border border-[#D8CFC2] bg-[#F7F4EF] p-4">
            <label className="text-sm text-[#7A6F63]">Grasa principal</label>

            <select
              value={selectedFat}
              onChange={(event) => setSelectedFat(event.target.value)}
              className="mt-2 w-full rounded-[1.25rem] border border-[#D8CFC2] bg-white px-5 py-4 outline-none"
            >
              <option value="">Selecciona</option>
              {fats.map((food) => (
                <option key={food.id} value={food.id}>
                  {food.name}
                </option>
              ))}
            </select>

            <label className="mt-4 flex items-center gap-2 text-sm text-[#7A6F63]">
              <input
                type="checkbox"
                checked={useSecondaryFat}
                onChange={(event) => {
                  setUseSecondaryFat(event.target.checked);
                  if (!event.target.checked) setSecondaryFat("");
                }}
              />
              Agregar grasa secundaria
            </label>

            {useSecondaryFat && (
              <select
                value={secondaryFat}
                onChange={(event) => setSecondaryFat(event.target.value)}
                className="mt-3 w-full rounded-[1.25rem] border border-[#D8CFC2] bg-white px-5 py-4 outline-none"
              >
                <option value="">Grasa secundaria</option>
                {fats
                  .filter((food) => food.id !== selectedFat)
                  .map((food) => (
                    <option key={food.id} value={food.id}>
                      {food.name}
                    </option>
                  ))}
              </select>
            )}
          </div>
        </div>

        <div className="mt-10 rounded-[1.5rem] border border-[#D8CFC2] bg-[#F7F4EF] p-5 md:rounded-[2rem] md:p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-[#7A6F63]">
            Resultado personalizado
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#5A463B]">
            Tu plato ideal
          </h2>

          <div className="mt-6 grid gap-4">
            {proteinFood && (
              <FoodResultCard title="🍗 Proteína principal" food={proteinFood} />
            )}

            {secondaryProteinFood && (
              <FoodResultCard
                title="🍗 Proteína secundaria"
                food={secondaryProteinFood}
              />
            )}

            {carbFood && (
              <FoodResultCard title="🍚 Carbohidrato principal" food={carbFood} />
            )}

            {secondaryCarbFood && (
              <FoodResultCard
                title="🍚 Carbohidrato secundario"
                food={secondaryCarbFood}
              />
            )}

            {fatFood && (
              <FoodResultCard title="🥑 Grasa principal" food={fatFood} />
            )}

            {secondaryFatFood && (
              <FoodResultCard title="🥑 Grasa secundaria" food={secondaryFatFood} />
            )}

            {vegetables.length > 0 && (
              <div className="rounded-[1.5rem] bg-white p-5 border border-[#D8CFC2]">
                <p className="text-sm font-semibold text-[#5A463B]">
                  🥗 Vegetales libres
                </p>

                <p className="mt-2 text-[#7A6F63]">
                  {vegetables.map((vegetable) => vegetable.name).join(", ")}
                </p>
              </div>
            )}
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-[#D8CFC2] bg-white/70 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-[#7A6F63]">
              Calculado para
            </p>

            <p className="mt-3 text-[#5A463B]">
              Proteína {targets.protein}g · Carbs {targets.carbs}g · Grasas{" "}
              {targets.fats}g
            </p>

            {(secondaryProteinFood || secondaryCarbFood || secondaryFatFood) && (
              <p className="mt-2 text-xs text-[#7A6F63]">
                Cuando agregas un ingrediente secundario, Fácil y Fit divide esa
                macro en partes iguales entre ambos ingredientes.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function FoodResultCard({
  title,
  food,
}: {
  title: string;
  food: {
    name: string;
    grams: number;
    householdText?: string;
    note?: string;
    usageTip?: string;
  };
}) {
  return (
    <div className="rounded-[1.5rem] bg-white p-5 border border-[#D8CFC2]">
      <p className="text-sm font-semibold text-[#5A463B]">{title}</p>

      <p className="mt-2 text-lg text-[#5A463B]">{food.name}</p>

      <p className="mt-1 text-[#7A6F63]">
        {food.grams}g
        {food.householdText && ` · ≈ ${food.householdText}`}
      </p>

      {food.usageTip && (
        <p className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-800">
          💡 {food.usageTip}
        </p>
      )}

      {food.note && (
        <p className="mt-2 text-xs text-[#A86B57] leading-relaxed">
          ⚠️ {food.note}
        </p>
      )}
    </div>
  );
}