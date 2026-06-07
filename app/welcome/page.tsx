"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function WelcomePage() {
  const [name, setName] = useState("guerrera");

  useEffect(() => {
    const storedProfile = localStorage.getItem("macrofit-profile");

    if (storedProfile) {
      const profile = JSON.parse(storedProfile);
      setName(profile.name || "guerrera");
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#F7F4EF] flex items-center justify-center p-6">
      <section className="w-full max-w-3xl rounded-[2rem] border border-[#D8CFC2] bg-white/70 p-10 md:p-14 text-center shadow-sm">
        <p className="text-xs uppercase tracking-[0.35em] text-[#7A6F63]">
          Fácil y Fit
        </p>

        <h1 className="mt-6 brand-title text-6xl md:text-8xl text-[#5A463B] leading-none">
          Hola {name}! 💛
        </h1>

        <p className="mt-8 text-[#7A6F63] leading-relaxed text-lg max-w-2xl mx-auto">
          Vamos con toda a lograr ese objetivo. Descubre las porciones,
          intercambios y platos que tu coach Mony preparó para ti.
        </p>

        <Link
          href="/"
          className="mt-10 inline-block rounded-full bg-[#5A463B] px-10 py-4 text-white transition-all hover:opacity-90"
        >
          Entrar a mi app
        </Link>
      </section>
    </main>
  );
}