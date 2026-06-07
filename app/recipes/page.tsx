"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { monyfitRecipes } from "@/lib/monyfit-recipes";

type Goal = "weightLoss" | "hormonalBalance" | "detox" | "muscleGain" | "maintenance";

const goalLabels = {
  weightLoss: "Pérdida de peso",
  hormonalBalance: "Balance hormonal",
  detox: "Detox / desinflamación",
  muscleGain: "Aumento de masa",
  maintenance: "Mantenimiento",
};

export default function RecipesPage() {
  const [selectedGoal, setSelectedGoal] = useState<Goal>("weightLoss");

  return (
    <main className="min-h-screen bg-[#F7F4EF] p-6">
      <section className="mx-auto max-w-5xl mony-card rounded-[2rem] p-8 md:p-12">
        <Navbar />

        <p className="text-xs tracking-[0.35em] uppercase text-[#7A6F63] mb-6">
          Menús MonyFit
        </p>

        <h1 className="brand-title text-5xl md:text-7xl text-[#5A463B] leading-none">
          Recetas adaptadas a tu objetivo
        </h1>

        <p className="mt-6 text-[#7A6F63] leading-relaxed max-w-2xl">
          Elige tu objetivo y mira cómo ajustar cada receta del menú MonyFit.
        </p>

        <select
          value={selectedGoal}
          onChange={(event) => setSelectedGoal(event.target.value as Goal)}
          className="mt-8 w-full rounded-full border border-[#D8CFC2] bg-white/70 px-5 py-4 outline-none"
        >
          {Object.entries(goalLabels).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <div className="mt-10 grid gap-6">
          {monyfitRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="rounded-[2rem] bg-white/60 border border-[#D8CFC2] p-6"
            >
              <p className="text-2xl font-semibold text-[#5A463B]">
                {recipe.title}
              </p>

              <p className="mt-2 text-sm text-[#7A6F63]">
                {recipe.description}
              </p>

              <div className="mt-6 rounded-[1.5rem] bg-[#F7F4EF] border border-[#D8CFC2] p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-[#7A6F63]">
                  Porción recomendada para {goalLabels[selectedGoal]}
                </p>

                <p className="mt-3 text-[#5A463B] font-medium leading-relaxed">
                  {recipe.portionGuide[selectedGoal]}
                </p>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {recipe.components.map((component) => (
                  <div
                    key={component.name}
                    className="rounded-[1.5rem] border border-[#D8CFC2] bg-white/60 p-4"
                  >
                    <p className="font-semibold text-[#5A463B]">
                      {component.name}
                    </p>

                    <p className="mt-1 text-sm text-[#7A6F63]">
                      {component.baseAmount}
                    </p>

                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#A08F84]">
                      {component.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}