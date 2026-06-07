"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getAppSettings,
  saveAppSettings,
  syncBackgroundMusic,
  playInteraction,
} from "@/lib/app-sound";

export default function SettingsPage() {
  const [tapSound, setTapSound] = useState(true);
  const [backgroundMusic, setBackgroundMusic] = useState(false);
  const [vibration, setVibration] = useState(true);

  useEffect(() => {
    const settings = getAppSettings();

    setTapSound(settings.tapSound);
    setBackgroundMusic(settings.backgroundMusic);
    setVibration(settings.vibration);
  }, []);

  function updateSettings(
    nextTap: boolean,
    nextMusic: boolean,
    nextVibration: boolean
  ) {
    saveAppSettings({
      tapSound: nextTap,
      backgroundMusic: nextMusic,
      vibration: nextVibration,
    });

    syncBackgroundMusic();
  }

  return (
    <main className="min-h-screen bg-transparent p-3 md:p-6">
      <div className="mb-6">
        <Link
          href="/dashboard"
  onClick={() => playInteraction()}
          className="inline-flex rounded-full border border- bg-transparent px-5 py-3 text-[#5A463B]"
        >
          ← Volver
        </Link>
      </div>

      <section className="mx-auto max-w-3xl rounded-[2rem] border border-transparent bg-white/70 p-6 md:p-10">
        <p className="text-xs uppercase tracking-[0.35em] text-[#7A6F63]">
          Fácil y Fit
        </p>

        <h1 className="mt-4 brand-title text-5xl text-[#5A463B]">
          Ajustes
        </h1>

        <div className="mt-8 space-y-4">
          <div className="rounded-[1.5rem] border border-[#D8CFC2] bg-[#F7F4EF] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#5A463B]">
                  🔊 Sonidos de interacción
                </p>

                <p className="text-sm text-[#7A6F63]">
                  Reproduce sonidos al tocar botones.
                </p>
              </div>

              <input
                type="checkbox"
                checked={tapSound}
                onChange={(e) => {
                  const value = e.target.checked;

                  setTapSound(value);

                  updateSettings(
                    value,
                    backgroundMusic,
                    vibration
                  );
                }}
              />
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-[#D8CFC2] bg-[#F7F4EF] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#5A463B]">
                  🎵 Música de fondo
                </p>

                <p className="text-sm text-[#7A6F63]">
                  Música suave mientras usas la app.
                </p>
              </div>

              <input
                type="checkbox"
                checked={backgroundMusic}
                onChange={(e) => {
                  const value = e.target.checked;

                  setBackgroundMusic(value);

                  updateSettings(
                    tapSound,
                    value,
                    vibration
                  );
                }}
              />
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-[#D8CFC2] bg-[#F7F4EF] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#5A463B]">
                  📳 Vibración suave
                </p>

                <p className="text-sm text-[#7A6F63]">
                  Vibración ligera al interactuar.
                </p>
              </div>

              <input
                type="checkbox"
                checked={vibration}
                onChange={(e) => {
                  const value = e.target.checked;

                  setVibration(value);

                  updateSettings(
                    tapSound,
                    backgroundMusic,
                    value
                  );
                }}
              />
            </div>
          </div>

          
        </div>
      </section>
    </main>
  );
}