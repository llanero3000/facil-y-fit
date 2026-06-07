"use client";

import { useState } from "react";
import Link from "next/link";
import { foodDatabase, FoodCategory } from "@/lib/food-database";
import { playInteraction } from "@/lib/app-sound";

const categoryLabels: Record<FoodCategory, string> = {
  protein: "Proteínas",
  carb: "Carbohidratos",
  fat: "Grasas saludables",
  vegetable: "Vegetales",
};

const categoryDescriptions: Record<FoodCategory, string> = {
  protein:
    "Ayudan a construir músculo, mantener saciedad y llegar a tus macros.",
  carb: "Aportan energía para entrenar, rendir y sostener tu día.",
  fat: "Apoyan saciedad, hormonas y absorción de nutrientes.",
  vegetable: "Aportan fibra, volumen, micronutrientes y saciedad.",
};

const categoryEmoji: Record<FoodCategory, string> = {
  protein: "🍗",
  carb: "🍚",
  fat: "🥑",
  vegetable: "🥗",
};

const categories: FoodCategory[] = ["protein", "carb", "fat", "vegetable"];

function getMacroLabel(macroName: string) {
  if (macroName === "protein") return "proteína";
  if (macroName === "carbs") return "carbohidratos";
  return "grasas";
}

export default function FoodLibraryPage() {
  const [search, setSearch] = useState("");

  return (
    <main className="min-h-screen bg-transparent p-6">
      <div className="mb-6">
        <Link
          href="/dashboard"
  onClick={() => playInteraction()}
          className="inline-flex rounded-full border border-[#D8CFC2] bg-white px-5 py-3 text-[#5A463B] hover:bg-[#F1ECE4]"
        >
          ← Volver
        </Link>
      </div>

      <section className="mx-auto max-w-6xl rounded-[2rem] border border-[#D8CFC2] bg-white/70 p-5 md:p-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#D8CFC2]">
          <img
            src="/images/library-hero.png"
            alt="Biblioteca de alimentos Fácil y Fit"
            className="h-[300px] w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#2E271F]/70 via-[#2E271F]/35 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-white/80">
              Guía rápida
            </p>

            <h1 className="mt-3 brand-title text-5xl md:text-7xl text-white leading-none">
              Biblioteca de alimentos
            </h1>

            <p className="mt-4 max-w-xl text-white/90 leading-relaxed">
              Aprende qué aporta cada alimento y úsalo para identificar
              proteínas, carbohidratos, grasas y vegetales dentro de tus comidas.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <input
            type="text"
            placeholder="Buscar alimento..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full rounded-full border border-[#D8CFC2] bg-white px-6 py-4 text-[#5A463B] outline-none placeholder:text-[#A99D91]"
          />
        </div>

        <div className="mt-10 grid gap-10">
          {categories.map((category) => {
            const foods = foodDatabase.filter(
              (food) =>
                food.category === category &&
                food.name.toLowerCase().includes(search.toLowerCase())
            );

            if (foods.length === 0) return null;

            return (
              <section key={category}>
                <div className="mb-5 rounded-[1.5rem] border border-[#D8CFC2] bg-[#F7F4EF] p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl border border-[#D8CFC2]">
                      {categoryEmoji[category]}
                    </span>

                    <div>
                      <h2 className="text-3xl font-semibold text-[#5A463B]">
                        {categoryLabels[category]}
                      </h2>

                      <p className="mt-1 text-[#7A6F63]">
                        {categoryDescriptions[category]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {foods.map((food) => (
                    <article
                      key={food.id}
                      className="rounded-[1.5rem] border border-[#D8CFC2] bg-[#F7F4EF] p-5 transition-all hover:scale-[1.01]"
                    >
                      <div className="flex flex-col gap-2">
                        <h3 className="text-xl font-semibold text-[#5A463B]">
                          {food.name}
                        </h3>

                        <p className="text-sm text-[#7A6F63]">
                          100g aportan aprox.{" "}
                          <strong className="text-[#5A463B]">
                            {food.macroPer100g}g de{" "}
                            {getMacroLabel(food.macroName)}
                          </strong>
                          .
                        </p>

                        {food.measureName && food.gramsPerMeasure && (
                          <p className="text-sm text-[#7A6F63]">
                            Medida casera:{" "}
                            <strong className="text-[#5A463B]">
                              1 {food.measureName} ≈ {food.gramsPerMeasure}g
                            </strong>
                          </p>
                        )}

                        {food.benefits && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {food.benefits.map((benefit) => (
                              <span
                                key={benefit}
                                className="rounded-full bg-white px-3 py-1 text-xs text-[#5A463B] border border-[#D8CFC2]"
                              >
                                {benefit}
                              </span>
                            ))}
                          </div>
                        )}

                        {food.note && (
                          <p className="mt-3 text-xs text-[#9A8F84] leading-relaxed">
                            {food.note}
                          </p>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}