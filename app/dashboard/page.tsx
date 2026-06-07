"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { tips } from "@/lib/tips";
import { syncBackgroundMusic, playInteraction } from "@/lib/app-sound";
import {
  UserRound,
  UtensilsCrossed,
  BookOpen,
  Settings as SettingsIcon,
} from "lucide-react";

type StoredProfile = {
  name?: string;
  goal?: string;
  calories?: number;
  protein?: number;
  carbs?: number;
  fats?: number;
};

const goalLabels: Record<string, string> = {
  "fat-loss": "Pérdida de grasa",
  recomposition: "Recomposición corporal",
  recomp: "Recomposición corporal",
  "muscle-gain": "Aumento de masa muscular",
  "metabolic-reset": "Reset metabólico",
  balanced: "Balanceado MonyFit",
  maintenance: "Mantenimiento",
};

export default function DashboardPage() {
  const [profile, setProfile] = useState<StoredProfile>({});

  const [dailyTip] = useState(() => {
    const today = new Date().toDateString();

    const index =
      today.split("").reduce((total, char) => total + char.charCodeAt(0), 0) %
      tips.length;

    return tips[index];
  });

  useEffect(() => {
  const storedProfile = localStorage.getItem("macrofit-profile");

  if (storedProfile) {
    setProfile(JSON.parse(storedProfile));
  }

  syncBackgroundMusic();
}, []);

  return (
    <main className="min-h-screen bg-transparent p-3 pb-28 md:p-6 md:pb-6">
      <section className="mx-auto max-w-6xl rounded-[1.5rem] border border-[#D8CFC2] bg-white/70 p-3 md:rounded-[2rem] md:p-8">
        {/* HERO MOBILE */}
        <div className="relative overflow-hidden rounded-[1.5rem] border border-[#D8CFC2] md:hidden">
          <img
            src="/images/dashboard-mobile.jpeg"
            alt="Fácil y Fit by MonyFit"
            className="h-[520px] w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/15 to-[#2E271F]/20" />

          <div className="absolute left-4 right-4 top-5">
            <p className="text-xs uppercase tracking-[0.35em] text-[#7A6F63]">
              Fácil y Fit
            </p>

            <h1 className="mt-2 brand-title text-4xl leading-none text-[#5A463B]">
              Hola {profile.name || "guerrera"} 💛
            </h1>

            <p className="mt-2 max-w-[260px] text-xs leading-relaxed text-[#7A6F63]">
              Aquí tienes tu plan personalizado en calorías y macronutrientes.
            </p>
          </div>

          <div className="absolute left-4 right-4 top-[145px] rounded-[1.25rem] border border-white/60 bg-white/80 p-4 shadow-sm backdrop-blur">
  <div className="grid grid-cols-3 gap-3">
    <div className="rounded-[1rem] bg-white/80 p-3 text-center">
      <p className="text-xl">🍗</p>
      <p className="mt-1 text-[10px] text-[#7A6F63]">Proteína</p>
      <p className="text-lg font-semibold text-[#5A463B]">
        {profile.protein || "--"}g
      </p>
    </div>

    <div className="rounded-[1rem] bg-white/80 p-3 text-center">
      <p className="text-xl">🍚</p>
      <p className="mt-1 text-[10px] text-[#7A6F63]">Carbs</p>
      <p className="text-lg font-semibold text-[#5A463B]">
        {profile.carbs || "--"}g
      </p>
    </div>

    <div className="rounded-[1rem] bg-white/80 p-3 text-center">
      <p className="text-xl">🥑</p>
      <p className="mt-1 text-[10px] text-[#7A6F63]">Grasas</p>
      <p className="text-lg font-semibold text-[#5A463B]">
        {profile.fats || "--"}g
      </p>
    </div>
  </div>

  <div className="mt-3 rounded-[1rem] bg-[#F7F4EF]/90 p-3">
    <p className="text-xs text-[#5A463B]">
      ✅ Tu plan está listo para usar con el intercambiador.
    </p>
  </div>
</div>

<div className="absolute bottom-4 left-4 right-4 rounded-[1.25rem] border border-white/60 bg-white/85 p-4 backdrop-blur">
  <div className="grid grid-cols-3 gap-2 text-center">
    <div>
      <p className="text-lg">🔥</p>
      <p className="text-[10px] text-[#7A6F63]">Calorías</p>
      <p className="text-sm font-semibold text-[#5A463B]">
        {profile.calories || "--"}
      </p>
    </div>

    <div>
      <p className="text-lg">🎯</p>
      <p className="text-[10px] text-[#7A6F63]">Objetivo</p>
      <p className="text-[11px] font-semibold leading-tight text-[#5A463B]">
        {goalLabels[profile.goal || ""] || "Personalizado"}
      </p>
    </div>

    <div>
      <p className="text-lg">⚡</p>
      <p className="text-[10px] text-[#7A6F63]">Método</p>
      <p className="text-sm font-semibold text-[#5A463B]">
        Low Carb
      </p>
    </div>
  </div>
</div>
</div>

        {/* HERO DESKTOP */}
        <div className="relative hidden overflow-hidden rounded-[2rem] border border-[#D8CFC2] md:block">
          <img
            src="/images/dashboard-hero.PNG"
            alt="Fácil y Fit by MonyFit"
            className="h-[340px] w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#2E271F]/75 via-[#2E271F]/35 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-10">
            <p className="text-xs uppercase tracking-[0.35em] text-white/80">
              Fácil y Fit
            </p>

            <h1 className="mt-2 brand-title text-7xl leading-none text-white">
              Hola {profile.name || "guerrera"} 💛
            </h1>

            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/90">
              Tus macros personalizados convertidos en comida real, porciones
              claras y decisiones más fáciles.
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-[1.5rem] border border-[#D8CFC2] bg-[#F7F4EF] p-4 md:mt-6 md:p-5">
          <p className="text-xs uppercase tracking-[0.25em] text-[#7A6F63] md:text-sm">
            Tu objetivo
          </p>

          <p className="mt-2 text-xl font-semibold text-[#5A463B] md:text-2xl">
            {goalLabels[profile.goal || ""] ||
              profile.goal ||
              "Objetivo personalizado"}
          </p>
        </div>

        <div className="mt-5 rounded-[1.5rem] border border-[#D8CFC2] bg-white p-4 md:mt-6 md:p-5">
          <p className="text-xs uppercase tracking-[0.25em] text-[#7A6F63] md:text-sm">
            Consejo de hoy
          </p>

          <p className="mt-3 text-base text-[#5A463B] md:text-lg">
            💡 {dailyTip}
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-5">
          <Link
            href="/eat-today"
            onClick={() => playInteraction()}
            className="rounded-[1.5rem] border border-[#D8CFC2] bg-[#7D8B66] p-5 text-white transition-all hover:scale-[1.01] md:rounded-[2rem] md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.25em] opacity-80 md:text-sm">
              Intercambiador
            </p>

            <h2 className="mt-3 text-2xl font-semibold md:mt-4 md:text-3xl">
              ¿Qué vas a comer hoy?
            </h2>

            <p className="mt-3 text-sm leading-relaxed opacity-90 md:mt-4 md:text-base">
              Selecciona la proteína, carbohidrato y grasa del menú, y descubre cuánto servirte.
            </p>
          </Link>

          <Link
            href="/food-library"
            onClick={() => playInteraction()}
            className="rounded-[1.5rem] border border-[#D8CFC2] bg-[#F7F4EF] p-5 transition-all hover:scale-[1.01] md:rounded-[2rem] md:p-8"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-[#7A6F63] md:text-sm">
              Guía rápida
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-[#5A463B] md:mt-4 md:text-3xl">
              Biblioteca de alimentos
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-[#7A6F63] md:mt-4 md:text-base">
              Revisa proteínas, carbohidratos, grasas y sus aportes principales.
            </p>
          </Link>
        </div>
      </section>

      <nav className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
  <div className="grid grid-cols-4 rounded-[2rem] border border-[#D8CFC2] bg-white/90 p-3 shadow-lg backdrop-blur">

    <Link
      href="/profile"
      onClick={() => playInteraction()}
      className="flex flex-col items-center gap-1 text-[#5A463B]"
    >
      <UserRound size={22} strokeWidth={2} />
      <span className="text-[11px]">Mis datos</span>
    </Link>

    <Link
      href="/eat-today"
      onClick={() => playInteraction()}
      className="flex flex-col items-center gap-1 text-[#5A463B]"
    >
      <UtensilsCrossed size={22} strokeWidth={2} />
      <span className="text-[11px]">Comer</span>
    </Link>

    <Link
      href="/food-library"
      onClick={() => playInteraction()}
      className="flex flex-col items-center gap-1 text-[#5A463B]"
    >
      <BookOpen size={22} strokeWidth={2} />
      <span className="text-[11px]">Biblioteca</span>
    </Link>

    <Link
      href="/settings"
      onClick={() => playInteraction()}
      className="flex flex-col items-center gap-1 text-[#5A463B]"
    >
      <SettingsIcon size={22} strokeWidth={2} />
      <span className="text-[11px]">Ajustes</span>
    </Link>

  </div>
</nav>
</main>
);
}