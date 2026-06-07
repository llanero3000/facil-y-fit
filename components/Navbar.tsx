import Link from "next/link";

const links = [
  {
    href: "/",
    label: "Inicio",
  },
  {
    href: "/onboarding",
    label: "Macros",
  },
  {
    href: "/food-library",
    label: "Biblioteca",
  },
  {
    href: "/swaps",
    label: "Intercambios",
  },
  {
    href: "/eat-today",
    label: "Arma tu plato",
  },
  {
  href: "/recipes",
  label: "Menús",
},
];

export default function Navbar() {
  return (
    <nav className="mb-10 flex flex-wrap items-center justify-between gap-4">
      <Link
        href="/"
        className="brand-title text-3xl text-[#5A463B]"
      >
        Fácil y Fit
      </Link>

      <div className="flex flex-wrap gap-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full border border-[#D8CFC2] px-4 py-2 text-sm text-[#5A463B] hover:bg-[#E8E1D4] transition-all"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}