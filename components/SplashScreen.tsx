"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F7F4EF]">
      <div className="text-center">
        <h1 className="brand-title text-6xl text-[#5A463B]">
          Fácil <span className="text-[#6E7A5A]">y Fit</span>
        </h1>

        <p className="mt-3 text-sm uppercase tracking-[0.35em] text-[#7A6F63]">
          by MonyFit
        </p>

        <div className="mx-auto mt-8 h-1 w-24 overflow-hidden rounded-full bg-[#D8CFC2]">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-[#6E7A5A]" />
        </div>
      </div>
    </div>
  );
}