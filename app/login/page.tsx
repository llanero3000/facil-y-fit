"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-transparent flex items-center justify-center p-6">
      <section className="w-full max-w-xl rounded-[2rem] border border-[#D8CFC2] bg-white/70 p-10 shadow-sm">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#7A6F63]">
            Fácil y Fit
          </p>

          <h1 className="mt-4 brand-title text-5xl text-[#5A463B]">
            Bienvenida 💛
          </h1>

          <p className="mt-4 text-[#7A6F63] leading-relaxed">
            Ingresa con el correo que utilizaste para adquirir tu desafío Fácil
            y Fit.
          </p>
        </div>

        <div className="mt-10 grid gap-5">
          <div>
            <label className="text-sm text-[#7A6F63]">
              Correo electrónico
            </label>
            <input
              type="email"
              placeholder="monica@email.com"
              className="mt-2 w-full rounded-[1.5rem] border border-[#D8CFC2] bg-white px-5 py-4 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-[#7A6F63]">
              Contraseña temporal
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-[1.5rem] border border-[#D8CFC2] bg-white px-5 py-4 outline-none"
            />
          </div>

          <Link
            href="/change-password"
            className="mt-4 rounded-full bg-[#5A463B] px-8 py-4 text-center text-white transition-all hover:opacity-90"
          >
            Ingresar
          </Link>
        </div>
      </section>
    </main>
  );
}