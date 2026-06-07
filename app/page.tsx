"use client";

import { useState } from "react";
import Link from "next/link";
import { playInteraction } from "@/lib/app-sound";

export default function Home() {
  const [tapCount, setTapCount] = useState(0);

  function handleSecretTap() {
    const nextTapCount = tapCount + 1;

    if (nextTapCount >= 5) {
      localStorage.clear();
      alert("Modo desarrollador activado. Perfil reiniciado.");
      window.location.href = "/registro";
      return;
    }

    setTapCount(nextTapCount);

    setTimeout(() => {
      setTapCount(0);
    }, 3000);
  }

  return (
    <main className="min-h-screen bg-transparent p-3 md:p-6">
      <section className="mx-auto max-w-6xl overflow-hidden rounded-[1.5rem] border border-[#D8CFC2] bg-white/70 md:rounded-[2rem]">
        <div className="grid md:min-h-[640px] md:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[360px] md:order-2 md:min-h-full">
            <img
              src="/images/home-hero.png"
              alt="Fácil y Fit by MonyFit"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#2E271F]/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#2E271F]/15" />

            <div className="absolute bottom-4 left-4 right-4 rounded-[1.25rem] border border-white/30 bg-white/80 p-4 backdrop-blur md:bottom-6 md:left-6 md:right-6 md:rounded-[1.5rem] md:p-5">
              <p className="text-xs uppercase tracking-[0.25em] text-[#7A6F63] md:text-sm">
                Comida real
              </p>

              <p className="mt-2 text-xl font-semibold text-[#5A463B] md:text-2xl">
                Porciones claras para tu mejor versión.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-5 md:p-14">
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#7A6F63] md:mb-8 md:tracking-[0.45em]">
              Fuerte · Saludable · Real
            </p>

            <h1
              onClick={handleSecretTap}
              className="brand-title cursor-pointer text-5xl leading-none text-[#5A463B] md:text-9xl"
            >
              Fácil <span className="text-[#6E7A5A]">y Fit</span>
            </h1>

            <p className="mt-3 text-base text-[#6E7A5A] md:mt-4 md:text-xl">
              by MonyFit
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#7A6F63] md:mt-8 md:text-lg">
              Convierte tus macros en comida real, porciones claras y platos
              fáciles de aplicar en tu día a día.
            </p>

            <div className="mt-8 grid gap-3 md:mt-10 md:flex md:flex-wrap">
              <Link
  href="/registro"
  onClick={() => playInteraction()}
                className="mony-button w-full px-8 py-4 text-center text-base font-medium md:w-auto md:px-10"
              >
                Crear mi perfil
              </Link>

              <Link
                href="/dashboard"
  onClick={() => playInteraction()}
                className="w-full rounded-full border border-[#D8CFC2] px-8 py-4 text-center text-[#5A463B] transition-all hover:bg-[#E8E1D4] md:w-auto md:px-10"
              >
                Ya tengo mi perfil
              </Link>
            </div>

            <div className="mt-10 grid gap-3 md:mt-14 md:grid-cols-3 md:gap-4">
              {[
                {
                  label: "Porciones reales",
                  title: "Aprende cuánto comer",
                  text: "Traduce tus macros en cantidades fáciles de servir.",
                },
                {
                  label: "Intercambiador",
                  title: "¿Qué vas a comer hoy?",
                  text: "Elige tus ingredientes y descubre tus porciones.",
                },
                {
                  label: "Método MonyFit",
                  title: "Hábitos sostenibles",
                  text: "Construye platos reales sin dietas extremas.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.25rem] border border-[#D8CFC2] bg-[#F7F4EF] p-4 md:rounded-[1.5rem] md:p-5"
                >
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#7A6F63] md:text-xs">
                    {item.label}
                  </p>

                  <h3 className="mt-2 text-lg font-semibold text-[#5A463B] md:mt-3 md:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#7A6F63] md:mt-3">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}