"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type MealSplit = {
  name: string;
  protein: number;
  carbs: number;
  fats: number;
};

type SavedProfile = {
  name?: string;
  age?: string;
  weight?: string;
  height?: string;
  goal?: string;
  activity?: string;
  mealsPerDay?: string;
  nutritionStyle?: string;
  hasSnack?: string;
  waist?: string;
  hips?: string;
  chest?: string;
};

export default function RegistroPage() {
  const router = useRouter();
  const [savedProfile, setSavedProfile] = useState<SavedProfile>({});

  useEffect(() => {
    const storedProfile = localStorage.getItem("macrofit-profile");

    if (storedProfile) {
      router.replace("/dashboard");
    }
  }, [router]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const age = Number(form.get("age"));
    const weight = Number(form.get("weight"));
    const height = Number(form.get("height"));
    const goal = String(form.get("goal"));
    const activity = String(form.get("activity"));
    const mealsPerDay = Number(form.get("mealsPerDay"));
    const nutritionStyle = "low-carb";
    const hasSnack = String(form.get("hasSnack")) === "yes";

    const activityMultiplier =
      activity === "light"
        ? 1.35
        : activity === "moderate"
        ? 1.5
        : activity === "active"
        ? 1.65
        : 1.2;

    const goalAdjustment =
      goal === "fat-loss"
        ? 0.82
        : goal === "recomp"
        ? 0.92
        : goal === "muscle-gain"
        ? 1.08
        : 1;

    const bmr = 10 * weight + 6.25 * height - 5 * age - 161;

    const macroWeight = weight > 100 ? Math.round(weight * 0.75) : weight;

    let proteinMultiplier = 1.7;
    let carbMultiplier = 1.0;

    if (goal === "fat-loss") {
      proteinMultiplier = 1.8;
      carbMultiplier = 0.8;
    }

    if (goal === "recomp") {
      proteinMultiplier = 1.9;
      carbMultiplier = 1.0;
    }

    if (goal === "muscle-gain") {
      proteinMultiplier = 2.0;
      carbMultiplier = 1.4;
    }

    if (goal === "maintenance") {
      proteinMultiplier = 1.6;
      carbMultiplier = 1.0;
    }

    let protein = Math.round(macroWeight * proteinMultiplier);
    let carbs = Math.round(macroWeight * carbMultiplier);

    protein = Math.min(protein, 220);
    carbs = Math.min(carbs, 180);

    let calories = Math.round(bmr * activityMultiplier * goalAdjustment);

    let fats = Math.round((calories - protein * 4 - carbs * 4) / 9);

    fats = Math.max(45, Math.min(fats, 120));

    calories = Math.round(protein * 4 + carbs * 4 + fats * 9);

    const mainMeals =
      mealsPerDay === 2
        ? ["Almuerzo", "Cena"]
        : ["Desayuno", "Almuerzo", "Cena"];

    let meals: MealSplit[];

    if (hasSnack) {
      const snack = {
        name: "Snack",
        protein: Math.round(protein * 0.15),
        carbs: Math.round(carbs * 0.15),
        fats: Math.round(fats * 0.12),
      };

      meals = [
        ...mainMeals.map((name) => ({
          name,
          protein: Math.round((protein - snack.protein) / mainMeals.length),
          carbs: Math.round((carbs - snack.carbs) / mainMeals.length),
          fats: Math.round((fats - snack.fats) / mainMeals.length),
        })),
        snack,
      ];
    } else {
      meals = mainMeals.map((name) => ({
        name,
        protein: Math.round(protein / mainMeals.length),
        carbs: Math.round(carbs / mainMeals.length),
        fats: Math.round(fats / mainMeals.length),
      }));
    }

    const finalProfile = {
      name: String(form.get("name")),
      age: String(form.get("age")),
      weight: String(form.get("weight")),
      height: String(form.get("height")),
      goal,
      activity,
      mealsPerDay: String(form.get("mealsPerDay")),
      nutritionStyle,
      hasSnack: String(form.get("hasSnack")),
      chest: String(form.get("chest")),
      waist: String(form.get("waist")),
      hips: String(form.get("hips")),
      calories,
      protein,
      carbs,
      fats,
      meals,
    };

    localStorage.setItem("macrofit-profile", JSON.stringify(finalProfile));

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-transparent p-6">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex rounded-full border border-[#D8CFC2] bg-transparent px-5 py-3 text-[#5A463B] hover:bg-[#F1ECE4]"
        >
          ← Volver
        </Link>
      </div>

      <section className="mx-auto max-w-3xl mony-card rounded-[2rem] p-8 md:p-12">
        <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#7A6F63]">
          Perfil inicial
        </p>

        <h1 className="brand-title text-5xl leading-none text-[#5A463B] md:text-7xl">
          Crea tu perfil
        </h1>

        <p className="mt-6 leading-relaxed text-[#7A6F63]">
          Ingresa tus datos para que Fácil y Fit calcule tus macros y los
          convierta en porciones reales de comida.
        </p>

        <form
          key={JSON.stringify(savedProfile)}
          onSubmit={handleSubmit}
          className="mt-10 grid gap-5"
        >
          <input
            name="name"
            defaultValue={savedProfile.name || ""}
            className="rounded-full border border-[#D8CFC2] bg-white/70 px-5 py-4 outline-none"
            placeholder="Nombre"
            required
          />

          <div className="grid gap-4 md:grid-cols-3">
            <input
              name="age"
              defaultValue={savedProfile.age || ""}
              className="rounded-full border border-[#D8CFC2] bg-white/70 px-5 py-4 outline-none"
              placeholder="Edad"
              type="number"
              required
            />

            <input
              name="weight"
              defaultValue={savedProfile.weight || ""}
              className="rounded-full border border-[#D8CFC2] bg-white/70 px-5 py-4 outline-none"
              placeholder="Peso kg"
              type="number"
              required
            />

            <input
              name="height"
              defaultValue={savedProfile.height || ""}
              className="rounded-full border border-[#D8CFC2] bg-white/70 px-5 py-4 outline-none"
              placeholder="Estatura cm"
              type="number"
              required
            />
          </div>

          <select
            name="goal"
            defaultValue={savedProfile.goal || ""}
            required
            className="rounded-full border border-[#D8CFC2] bg-white/70 px-5 py-4 outline-none"
          >
            <option value="">Objetivo principal</option>
            <option value="fat-loss">Pérdida de grasa</option>
            <option value="recomp">Recomposición corporal</option>
            <option value="muscle-gain">Aumento de masa muscular</option>
            <option value="maintenance">Mantenimiento</option>
          </select>

          <select
            name="activity"
            defaultValue={savedProfile.activity || ""}
            required
            className="rounded-full border border-[#D8CFC2] bg-white/70 px-5 py-4 outline-none"
          >
            <option value="">Nivel de actividad</option>
            <option value="sedentary">Sedentaria</option>
            <option value="light">Ligera</option>
            <option value="moderate">Moderada</option>
            <option value="active">Activa</option>
          </select>

          <select
            name="mealsPerDay"
            defaultValue={savedProfile.mealsPerDay || ""}
            required
            className="rounded-full border border-[#D8CFC2] bg-white/70 px-5 py-4 outline-none"
          >
            <option value="">Comidas al día</option>
            <option value="2">2 comidas</option>
            <option value="3">3 comidas</option>
          </select>

          <select
            name="hasSnack"
            defaultValue={savedProfile.hasSnack || ""}
            required
            className="rounded-full border border-[#D8CFC2] bg-white/70 px-5 py-4 outline-none"
          >
            <option value="">¿Incluye snack?</option>
            <option value="yes">Sí, incluye snack</option>
            <option value="no">No, sin snack</option>
          </select>

          <div className="rounded-[1.5rem] border border-[#D8CFC2] bg-[#F7F4EF]/80 p-5">
            <p className="text-sm uppercase tracking-[0.25em] text-[#7A6F63]">
              Método nutricional
            </p>

            <p className="mt-2 text-xl font-semibold text-[#5A463B]">
              Low Carb MonyFit
            </p>

            <p className="mt-2 text-sm leading-relaxed text-[#7A6F63]">
              Este desafío trabaja con una distribución baja en carbohidratos,
              priorizando proteína, grasas saludables y comida real.
            </p>
          </div>

          <div className="mt-4 rounded-[2rem] border border-[#D8CFC2] bg-white/40 p-5">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#7A6F63]">
              Medidas corporales
            </p>

            <p className="mb-5 text-sm leading-relaxed text-[#7A6F63]">
              Mide con cinta métrica, sin apretar y manteniendo una postura
              natural.
            </p>

            <div className="grid gap-6 md:grid-cols-[1fr_260px]">
              <div className="flex flex-col gap-4">
                <input
                  name="chest"
                  defaultValue={savedProfile.chest || ""}
                  className="h-14 w-full rounded-xl border border-[#D8CFC2] bg-white px-5 text-[#5A463B] outline-none"
                  placeholder="Contorno de pecho (cm)"
                  type="number"
                  required
                />

                <input
                  name="waist"
                  defaultValue={savedProfile.waist || ""}
                  className="h-14 w-full rounded-xl border border-[#D8CFC2] bg-white px-5 text-[#5A463B] outline-none"
                  placeholder="Contorno de cintura (cm)"
                  type="number"
                  required
                />

                <input
                  name="hips"
                  defaultValue={savedProfile.hips || ""}
                  className="h-14 w-full rounded-xl border border-[#D8CFC2] bg-white px-5 text-[#5A463B] outline-none"
                  placeholder="Contorno de cadera (cm)"
                  type="number"
                  required
                />

                <div className="relative overflow-hidden rounded-[1.5rem] border border-[#D8CFC2] bg-[#F7F4EF] p-2">
                  <img
                    src="/body-measurements.png"
                    alt="Guía de medidas corporales"
                    className="mx-auto scale-110 origin-center"
                  />

                  <div className="absolute left-[8%] right-[8%] top-[23.5%] flex items-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#6E7A5A] text-sm font-bold text-white">
                      1
                    </div>
                    <div className="ml-3 flex-1 border-t-2 border-dashed border-[#6E7A5A]" />
                  </div>

                  <div className="absolute left-[8%] right-[8%] top-[31%] flex items-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#C49A6C] text-sm font-bold text-white">
                      2
                    </div>
                    <div className="ml-3 flex-1 border-t-2 border-dashed border-[#C49A6C]" />
                  </div>

                  <div className="absolute left-[8%] right-[8%] top-[40.5%] flex items-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#A86B57] text-sm font-bold text-white">
                      3
                    </div>
                    <div className="ml-3 flex-1 border-t-2 border-dashed border-[#A86B57]" />
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-[#D8CFC2] bg-[#F7F4EF] p-5">
                <p className="text-center text-sm font-semibold text-[#5A463B]">
                  ¿Cómo medirte?
                </p>

                <div className="mt-5 space-y-3">
                  {[
                    {
                      number: "1",
                      title: "Pecho",
                      text: "Mide alrededor de la parte más amplia del busto.",
                      color: "bg-[#6E7A5A]",
                    },
                    {
                      number: "2",
                      title: "Cintura",
                      text: "Mide alrededor de la parte más estrecha del torso.",
                      color: "bg-[#C49A6C]",
                    },
                    {
                      number: "3",
                      title: "Cadera",
                      text: "Mide alrededor de la parte más amplia de la cadera y glúteos.",
                      color: "bg-[#A86B57]",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[1.25rem] border border-[#D8CFC2] bg-white p-4"
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${item.color}`}
                        >
                          {item.number}
                        </span>

                        <div>
                          <p className="font-semibold text-[#5A463B]">
                            {item.title}
                          </p>

                          <p className="mt-1 text-xs leading-relaxed text-[#7A6F63]">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-[#D8CFC2] bg-white px-4 py-3">
                  <p className="text-xs leading-relaxed text-[#7A6F63]">
                    💡 Realiza las mediciones siempre en el mismo horario y con
                    la cinta métrica paralela al suelo para obtener resultados
                    consistentes.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-[#9A8F84]">
              Estas medidas ayudan a personalizar mejor tus recomendaciones y
              hacer seguimiento de tu progreso.
            </p>
          </div>

          <button
            type="submit"
            className="mony-button mt-4 px-8 py-4 font-medium"
          >
            Guardar mi perfil
          </button>
        </form>
      </section>
    </main>
  );
}