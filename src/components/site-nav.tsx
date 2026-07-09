import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { label: "Comunități", href: "#communities" },
  { label: "Departamente", href: "#departamente" },
  { label: "Proiecte", href: "#proiecte" },
  { label: "Testimoniale", href: "#testimoniale" },
  { label: "Întrebări", href: "#intrebari" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <nav className="fixed top-4 left-1/2 z-50 w-full max-w-3xl -translate-x-1/2 px-4 sm:top-6">
        <div className="flex items-center justify-between gap-3 rounded-full border border-dark/5 bg-ivory/80 px-4 py-2 shadow-sm ring-1 ring-black/5 backdrop-blur-md">
          <Link
            to="/"
            className="pl-1 text-lg font-bold uppercase tracking-tighter text-dark"
            aria-label="VIP Romania — acasă"
          >
            vip.
          </Link>

          <div className="hidden items-center gap-6 text-xs font-medium uppercase tracking-widest text-dark/60 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-indigo-brand">
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/aplica"
              className="hidden rounded-full bg-dark px-5 py-2 text-xs font-bold uppercase tracking-wider text-ivory transition-colors hover:bg-indigo-brand sm:inline-flex"
            >
              Aplică
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid size-9 place-items-center rounded-full bg-dark text-ivory md:hidden"
              aria-label="Meniu"
              aria-expanded={open}
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 top-0 h-px w-full bg-current transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-px w-full bg-current transition-opacity ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`absolute left-0 top-3 h-px w-full bg-current transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ivory transition-opacity md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 px-6 text-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-3xl font-bold tracking-tight text-dark"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/aplica"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex rounded-full bg-dark px-8 py-4 text-xs font-bold uppercase tracking-widest text-ivory"
          >
            Aplică acum
          </Link>
        </div>
      </div>
    </>
  );
}
