"use client";

import Navbar from "@/components/Navbar";
import { useState } from "react";
import { getFoodOptions } from "@/lib/food-translator";

const categoryLabels = {
  protein: "Intercambios de proteína",
  carb: "Intercambios de carbohidratos",
  fat: "Intercambios de grasas",
} as const;

type SwapCategory = keyof typeof categoryLabels;

export default function SwapsPage() {
  const [proteinTarget, setProteinTarget] = useState(30);
  const [carbTarget, setCarbTarget] = useState(35);
  const [fatTarget, setFatTarget] = useState(15);

  const swapTargets: Record<SwapCategory, number> = {
    protein: proteinTarget,
    carb: carbTarget,
    fat: fatTarget,
  };

  const setters: Record<SwapCategory, (value: number) => void> = {
    protein: setProteinTarget,
    carb: setCarbTarget,
    fat: setFatTarget,
  };

  return (
    <main className="min-h-screen bg-transparent p-6">
      <section className="mx-auto max-w-5xl mony-card rounded-[2rem] p-8 md:p-12">
        <Navbar />

        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#7A6F63]">
          Intercambios inteligentes
        </p>

        <h1 className="brand-title text-5xl leading-none text-[#5A463B] md:text-7xl">
          Cambia alimentos sin perder el balance
        </h1>

        <p className="mt-6 max-w-2xl leading-relaxed text-[#7A6F63]">
          Elige cuántos gramos quieres alcanzar y la app te muestra porciones
          equivalentes en comida real.
        </p>

        <div className="mt-10 grid gap-8">
          {(["protein", "carb", "fat"] as SwapCategory[]).map((category) => {
            const options = getFoodOptions(
              category,
              swapTargets[category]
            ).filter(
              (food): food is NonNullable<typeof food> => food !== null
            );

            return (
              <div key={category}>
                <h2 className="mb-3 text-2xl font-semibold text-[#5A463B]">
                  {categoryLabels[category]}
                </h2>

                <div className="mb-5 flex flex-col gap-3 text-sm text-[#7A6F63] sm:flex-row sm:items-center">
                  <span>Opciones aproximadas para llegar a</span>

                  <input
                    type="number"
                    min="1"
                    value={swapTargets[category]}
                    onChange={(event) =>
                      setters[category](Number(event.target.value))
                    }
                    className="w-28 rounded-full border border-[#D8CFC2] bg-white/70 px-4 py-2 text-[#5A463B] outline-none"
                  />

                  <span>
                    gramos de{" "}
                    {category === "protein"
                      ? "proteína"
                      : category === "carb"
                      ? "carbohidratos"
                      : "grasa"}
                    .
                  </span>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {options.map((food) => (
                    <div
                      key={food.id}
                      className="rounded-[1.5rem] border border-[#D8CFC2] bg-white/60 p-5"
                    >
                      <p className="font-semibold text-[#5A463B]">
                        {food.name}
                      </p>

                      <p className="mt-2 text-sm text-[#7A6F63]">
                        {food.grams}g
                        {food.householdText && (
                          <span className="mt-1 block text-xs text-[#9A8F84]">
                            ≈ {food.householdText}
                          </span>
                        )}
                      </p>

                      {food.note && (
                        <p className="mt-3 text-xs text-[#9A8F84]">
                          {food.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}