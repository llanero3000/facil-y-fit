import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fácil y Fit by MonyFit",
  description: "Comida real, porciones claras y nutrición fácil.",

  icons: {
    icon: "/icon-192.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${cormorant.variable} ${manrope.variable} bg-[#F7F4EF] antialiased`}
      >
        <div
          className="fixed inset-0 z-0 opacity-[0.35] pointer-events-none"
          style={{
            backgroundImage: "url('/images/app-background.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
          }}
        />

        <div className="relative z-10">
  <SplashScreen />
  {children}
</div>
      </body>
    </html>
  );
}