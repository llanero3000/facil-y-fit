"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { playInteraction } from "@/lib/app-sound";

type StoredProfile = {
  name?: string;
  age?: string;
  weight?: string;
  height?: string;
  goal?: string;
  activity?: string;
  mealsPerDay?: string;
  hasSnack?: string;
  chest?: string;
  waist?: string;
  hips?: string;
  calories?: number;
  protein?: number;
  carbs?: number;
  fats?: number;
};

const goalLabels: Record<string, string> = {
  "fat-loss": "Pérdida de grasa",
  recomp: "Recomposición corporal",
  "muscle-gain": "Aumento de masa muscular",
  maintenance: "Mantenimiento",
};

const activityLabels: Record<string, string> = {
  sedentary: "Sedentaria",
  light: "Ligera",
  moderate: "Moderada",
  active: "Activa",
};

export default function ProfilePage() {
  const [profile, setProfile] = useState<StoredProfile>({});

  useEffect(() => {
    const storedProfile = localStorage.getItem("macrofit-profile");
    if (storedProfile) setProfile(JSON.parse(storedProfile));
  }, []);

 async function copyMacros() {
  const text = `Fácil y Fit by MonyFit

🔥 Calorías: ${profile.calories || "--"} kcal
🍗 Proteína: ${profile.protein || "--"}g
🍚 Carbs: ${profile.carbs || "--"}g
🥑 Grasas: ${profile.fats || "--"}g`;

  try {
    await navigator.clipboard.writeText(text);
    playInteraction();
    alert("Macros copiadas 📋");
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    document.execCommand("copy");
    document.body.removeChild(textarea);

    playInteraction();
    alert("Macros copiadas 📋");
  }
}

  return (
    <main className="min-h-screen bg-transparent p-3 pb-28 md:p-6">
      <div className="mb-6">
        <Link
          href="/dashboard"
          onClick={() => playInteraction()}
          className="inline-flex rounded-full border border-[#D8CFC2] bg-white/85 px-5 py-3 text-[#5A463B] backdrop-blur-sm"
        >
          ← Volver
        </Link>
      </div>

      <section className="mx-auto max-w-3xl rounded-[2rem] border border-[#D8CFC2] bg-white/80 p-6 backdrop-blur-sm md:p-10">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#D8CFC2] bg-gradient-to-br from-[#6E7A5A] to-[#87966F] p-6 text-white">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
<div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/5" />

          <p className="text-xs uppercase tracking-[0.35em] text-white/80">
            Fácil y Fit
          </p>

          <h1 className="mt-3 brand-title text-5xl">
            {profile.name || "Usuario"}
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/20 px-3 py-1 text-sm">
              🎯 {goalLabels[profile.goal || ""] || "Objetivo"}
            </span>

            <span className="rounded-full bg-white/20 px-4 py-1 text-sm">
              ⚡ Low Carb
              <p className="mt-2 text-sm text-white/80">
  Tu plan personalizado está listo para ayudarte a alcanzar tus objetivos.
</p>
            </span>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-3 text-center">
            <MacroSummary emoji="🔥" label="Kcal" value={profile.calories || "--"} />
            <MacroSummary emoji="🍗" label="Prot" value={`${profile.protein || "--"}g`} />
            <MacroSummary emoji="🍚" label="Carbs" value={`${profile.carbs || "--"}g`} />
            <MacroSummary emoji="🥑" label="Grasas" value={`${profile.fats || "--"}g`} />
          </div>
        </div>
        <div className="mt-5 rounded-xl bg-white/10 p-3 text-center">
  <p className="text-xs uppercase tracking-[0.25em] text-white/70">
    Método
  </p>

  <p className="mt-1 font-semibold">
    Low Carb MonyFit
  </p>
</div>

        <div className="mt-5">
          <button
            onClick={copyMacros}
            className="w-full rounded-[1.25rem] bg-[#6E7A5A] px-5 py-4 text-white transition-all hover:opacity-90"
          >
            📋 Copiar mis macros
          </button>
        </div>

        <h2 className="mt-8 text-2xl font-semibold text-[#5A463B]">
          Información personal
        </h2>

        <div className="mt-4 grid gap-4">
          {[
            ["Nombre", profile.name || "--"],
            ["Edad", profile.age ? `${profile.age} años` : "--"],
            ["Peso", profile.weight ? `${profile.weight} kg` : "--"],
            ["Estatura", profile.height ? `${profile.height} cm` : "--"],
            ["Objetivo", goalLabels[profile.goal || ""] || "--"],
            ["Actividad", activityLabels[profile.activity || ""] || "--"],
            ["Comidas al día", profile.mealsPerDay || "--"],
            ["Snack", profile.hasSnack === "yes" ? "Sí" : "No"],
            ["Pecho", profile.chest ? `${profile.chest} cm` : "--"],
            ["Cintura", profile.waist ? `${profile.waist} cm` : "--"],
            ["Cadera", profile.hips ? `${profile.hips} cm` : "--"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-[1.25rem] border border-[#D8CFC2] bg-[#F7F4EF]/85 p-4"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-[#7A6F63]">
                {label}
              </p>

              <p className="mt-1 text-lg font-semibold text-[#5A463B]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function MacroSummary({
  emoji,
  label,
  value,
}: {
  emoji: string;
  label: string;
  value: string | number;
}) {
  return (
    <div>
      <p className="text-xl">{emoji}</p>
      <p className="text-xs opacity-80">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}