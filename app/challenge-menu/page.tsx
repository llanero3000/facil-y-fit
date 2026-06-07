"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { challengeData, mealNames, MealName } from "@/lib/challengeData";
import { foodDatabase } from "@/lib/food-database";
import { translateSelectedFood } from "@/lib/food-translator";

const days = Object.keys(challengeData);

type StoredMeal = {
  name: string;
  protein: number;
  carbs: number;
  fats: number;
};

type StoredProfile = {
  meals?: StoredMeal[];
};

function getFoodName(id: string) {
  return foodDatabase.find((food) => food.id === id)?.name || id;
}

function getMealTargets(profile: StoredProfile, selectedMeal: MealName) {
  const meal = profile.meals?.find((item) => item.name === selectedMeal);

  return {
    protein: meal?.protein || 30,
    carbs: meal?.carbs || 35,
    fats: meal?.fats || 10,
  };
}

function getPortion(id: string, target: number) {
  return translateSelectedFood(id, target);
}

export default function ChallengeMenuPage() {
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [selectedMeal, setSelectedMeal] = useState<MealName>("Desayuno");
  const [profile, setProfile] = useState<StoredProfile>({});

  useEffect(() => {
    const storedProfile = localStorage.getItem("macrofit-profile");

    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const currentMeal = challengeData[selectedDay][selectedMeal];
  const targets = getMealTargets(profile, selectedMeal);

  const baseProtein = currentMeal.proteinFoodIds[0]
    ? getPortion(currentMeal.proteinFoodIds[0], targets.protein)
    : null;

  const baseCarb = currentMeal.carbFoodIds[0]
    ? getPortion(currentMeal.carbFoodIds[0], targets.carbs)
    : null;

  const baseFat = currentMeal.fatFoodIds[0]
    ? getPortion(currentMeal.fatFoodIds[0], targets.fats)
    : null;

  const proteinSwaps = currentMeal.proteinFoodIds
    .slice(1)
    .map((id) => getPortion(id, targets.protein))
    .filter(Boolean);

  const carbSwaps = currentMeal.carbFoodIds
    .slice(1)
    .map((id) => getPortion(id, targets.carbs))
    .filter(Boolean);

  const fatSwaps = currentMeal.fatFoodIds
    .slice(1)
    .map((id) => getPortion(id, targets.fats))
    .filter(Boolean);

  const suggestedVegetables = currentMeal.vegetableFoodIds
    .map((id) => foodDatabase.find((food) => food.id === id))
    .filter(Boolean)
    .slice(0, 5);

  return (
    <main className="min-h-screen bg-[#F7F4EF] p-6">
      <div className="mb-6">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 rounded-full border border-[#D8CFC2] bg-white px-5 py-3 text-[#5A463B] transition-all hover:bg-[#F1ECE4]"
        >
          ← Volver al dashboard
        </Link>
      </div>

      <section className="mx-auto max-w-6xl rounded-[2rem] border border-[#D8CFC2] bg-white/70 p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.35em] text-[#7A6F63]">
          Desafío Mi Mejor Versión
        </p>

        <h1 className="mt-4 brand-title text-5xl md:text-7xl text-[#5A463B] leading-none">
          Menú + recetas día a día
        </h1>

        <div className="mt-8 rounded-[2rem] border border-[#D8CFC2] bg-[#F7F4EF] p-6">
          <p className="text-sm uppercase tracking-[0.25em] text-[#7A6F63]">
            {selectedDay} · Piernas + Hipopresivos
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#5A463B]">
            Carga alta
          </h2>

          <div className="mt-5 rounded-[1.5rem] border border-[#D8CFC2] bg-white/70 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-[#7A6F63]">
              En ayunas
            </p>

            <p className="mt-2 text-lg font-medium text-[#5A463B]">
              Bebida diurética
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`rounded-full px-6 py-3 transition-all ${
                selectedDay === day
                  ? "bg-[#7D8B66] text-white"
                  : "border border-[#D8CFC2] text-[#5A463B]"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {mealNames.map((meal) => (
            <button
              key={meal}
              onClick={() => setSelectedMeal(meal)}
              className={`rounded-full px-6 py-3 transition-all ${
                selectedMeal === meal
                  ? "bg-[#5A463B] text-white"
                  : "border border-[#D8CFC2] text-[#5A463B]"
              }`}
            >
              {meal}
            </button>
          ))}
        </div>

        <section className="mt-12 rounded-[2rem] border border-[#D8CFC2] bg-white p-8">
          <p className="text-sm uppercase tracking-[0.25em] text-[#7A6F63]">
            {selectedMeal}
          </p>

          <h2 className="mt-4 text-4xl font-semibold text-[#5A463B]">
            {currentMeal.title}
          </h2>

          <p className="mt-4 text-[#7A6F63] leading-relaxed">
            {currentMeal.description}
          </p>

          <div className="mt-8 rounded-[1.5rem] border border-[#D8CFC2] bg-[#F7F4EF] p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-[#7A6F63]">
              Tus macros para este {selectedMeal.toLowerCase()}
            </p>

            <div className="mt-4 flex flex-wrap gap-3 text-[#5A463B]">
              <span className="rounded-full bg-white px-4 py-2 border border-[#D8CFC2]">
                Proteína {targets.protein}g
              </span>
              <span className="rounded-full bg-white px-4 py-2 border border-[#D8CFC2]">
                Carbs {targets.carbs}g
              </span>
              <span className="rounded-full bg-white px-4 py-2 border border-[#D8CFC2]">
                Grasas {targets.fats}g
              </span>
            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-[#D8CFC2] bg-[#F7F4EF] p-5">
            <h3 className="text-2xl font-semibold text-[#5A463B]">
              Porciones para ti según el menú
            </h3>

            <p className="mt-2 text-sm text-[#7A6F63]">
              Estas son las porciones de la receta base del menú, ajustadas a
              tus datos y objetivo.
            </p>

            <div className="mt-6 grid gap-4">
              {baseProtein && (
                <div className="rounded-[1.25rem] border border-[#D8CFC2] bg-white p-5">
                  <p className="font-semibold text-[#5A463B]">Proteína</p>
                  <p className="mt-2 text-[#7A6F63]">
                    {baseProtein.grams}g {baseProtein.name}
                  </p>
                  {baseProtein.householdText && (
                    <p className="text-xs text-[#9A8F84]">
                      ≈ {baseProtein.householdText}
                    </p>
                  )}
                </div>
              )}

              {baseCarb && (
                <div className="rounded-[1.25rem] border border-[#D8CFC2] bg-white p-5">
                  <p className="font-semibold text-[#5A463B]">Carbohidrato</p>
                  <p className="mt-2 text-[#7A6F63]">
                    {baseCarb.grams}g {baseCarb.name}
                  </p>
                  {baseCarb.householdText && (
                    <p className="text-xs text-[#9A8F84]">
                      ≈ {baseCarb.householdText}
                    </p>
                  )}
                </div>
              )}

              {baseFat && (
                <div className="rounded-[1.25rem] border border-[#D8CFC2] bg-white p-5">
                  <p className="font-semibold text-[#5A463B]">Grasa</p>
                  <p className="mt-2 text-[#7A6F63]">
                    {baseFat.grams}g {baseFat.name}
                  </p>
                  {baseFat.householdText && (
                    <p className="text-xs text-[#9A8F84]">
                      ≈ {baseFat.householdText}
                    </p>
                  )}
                </div>
              )}

            </div>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-[#D8CFC2] bg-white p-5">
            <h3 className="text-2xl font-semibold text-[#5A463B]">
              Preparación
            </h3>

            <ul className="mt-4 space-y-3 text-[#7A6F63]">
              {currentMeal.preparation.map((step) => (
                <li key={step}>• {step}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-[#D8CFC2] bg-[#F7F4EF] p-5">
            <h3 className="text-2xl font-semibold text-[#5A463B]">
              Intercambios con porciones equivalentes
            </h3>

            <p className="mt-2 text-sm text-[#7A6F63]">
              Si quieres cambiar algún alimento del menú, usa una opción del
              mismo grupo. Cada cantidad se calcula según tus macros personales.
            </p>

            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <div className="rounded-[1.25rem] border border-[#D8CFC2] bg-white p-5">
                <p className="font-semibold text-[#5A463B]">Proteína</p>

                <div className="mt-3 space-y-3 text-[#7A6F63]">
                  {proteinSwaps.map((food) =>
                    food ? (
                      <div key={food.id}>
                        <p>
                          {food.grams}g {food.name}
                        </p>
                        {food.householdText && (
                          <p className="text-xs text-[#9A8F84]">
                            ≈ {food.householdText}
                          </p>
                        )}
                      </div>
                    ) : null
                  )}
                </div>
              </div>

              <div className="rounded-[1.25rem] border border-[#D8CFC2] bg-white p-5">
                <p className="font-semibold text-[#5A463B]">Carbohidratos</p>

                <div className="mt-3 space-y-3 text-[#7A6F63]">
                  {carbSwaps.map((food) =>
                    food ? (
                      <div key={food.id}>
                        <p>
                          {food.grams}g {food.name}
                        </p>
                        {food.householdText && (
                          <p className="text-xs text-[#9A8F84]">
                            ≈ {food.householdText}
                          </p>
                        )}
                      </div>
                    ) : null
                  )}
                </div>
              </div>

              <div className="rounded-[1.25rem] border border-[#D8CFC2] bg-white p-5">
                <p className="font-semibold text-[#5A463B]">Grasa</p>

                <div className="mt-3 space-y-3 text-[#7A6F63]">
                  {fatSwaps.map((food) =>
                    food ? (
                      <div key={food.id}>
                        <p>
                          {food.grams}g {food.name}
                        </p>
                        {food.householdText && (
                          <p className="text-xs text-[#9A8F84]">
                            ≈ {food.householdText}
                          </p>
                        )}
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            </div>
          </div>

          {suggestedVegetables.length > 0 && (
            <div className="mt-8 rounded-[1.5rem] border border-[#D8CFC2] bg-white p-5">
              <h3 className="text-2xl font-semibold text-[#5A463B]">
                Vegetales / acompañantes
              </h3>

              <div className="mt-4 flex flex-wrap gap-3">
                {suggestedVegetables.map((vegetable) =>
                  vegetable ? (
                    <span
                      key={vegetable.id}
                      className="rounded-full border border-[#D8CFC2] bg-[#F7F4EF] px-5 py-3 text-[#5A463B]"
                    >
                      {vegetable.name}
                    </span>
                  ) : null
                )}
              </div>

              <p className="mt-5 text-[#7A6F63]">
                Puedes agregarlos libremente para más volumen, saciedad y
                micronutrientes.
              </p>
            </div>
          )}

          {currentMeal.notes && (
            <div className="mt-8 rounded-[1.5rem] border border-[#D8CFC2] bg-white p-5">
              <h3 className="text-2xl font-semibold text-[#5A463B]">
                Notas de Mony
              </h3>

              <ul className="mt-4 space-y-2 text-[#7A6F63]">
                {currentMeal.notes.map((note) => (
                  <li key={note}>• {note}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 rounded-[1.5rem] border border-[#E8D7D7] bg-[#FFF7F7] p-5">
            <h3 className="text-2xl font-semibold text-[#8B4A4A]">
              Evita
            </h3>

            <ul className="mt-4 space-y-2 text-[#8B4A4A]">
              {currentMeal.avoidFoods.map((food) => (
                <li key={food}>• {food}</li>
              ))}
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
}