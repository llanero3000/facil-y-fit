"use client";

import Link from "next/link";

export default function ChangePasswordPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EF] flex items-center justify-center p-6">
      <section className="w-full max-w-xl rounded-[2rem] border border-[#D8CFC2] bg-white/70 p-10 shadow-sm">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-[#7A6F63]">
            Fácil y Fit
          </p>

          <h1 className="mt-4 brand-title text-5xl text-[#5A463B]">
            Cambia tu clave 🔐
          </h1>

          <p className="mt-4 text-[#7A6F63] leading-relaxed">
            Por seguridad, debes crear una nueva contraseña para activar tu
            cuenta.
          </p>
        </div>

        <div className="mt-10 grid gap-5">
          <div>
            <label className="text-sm text-[#7A6F63]">
              Nueva contraseña
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-[1.5rem] border border-[#D8CFC2] bg-white px-5 py-4 outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-[#7A6F63]">
              Confirmar contraseña
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-[1.5rem] border border-[#D8CFC2] bg-white px-5 py-4 outline-none"
            />
          </div>

          <Link
            href="/onboarding"
            className="mt-4 rounded-full bg-[#5A463B] px-8 py-4 text-center text-white transition-all hover:opacity-90"
          >
            Continuar
          </Link>
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-[#D8CFC2] bg-[#F7F4EF] p-5">
          <p className="text-sm text-[#7A6F63] leading-relaxed">
            Esta contraseña quedará asociada a tu cuenta del desafío Fácil y
            Fit.
          </p>
        </div>
      </section>
    </main>
  );
}