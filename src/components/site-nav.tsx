import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const communitiesDropdown = [
  { label: "Business Club", href: "/comunitati/business-club" },
  { label: "Econosofia", href: "/comunitati/econosofia" },
  { label: "International Affairs", href: "/comunitati/international-affairs" },
  { label: "Leadership Development", href: "/comunitati/leadership-development" },
];

const links = [
  { label: "Departamente", href: "/#departamente" },
  { label: "Proiecte", href: "/#proiecte" },
  { label: "Testimoniale", href: "/#testimoniale" },
  { label: "Întrebări", href: "/#intrebari" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!dropdownOpen) return;
    const closeDropdown = () => setDropdownOpen(false);
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, [dropdownOpen]);

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
            {/* Communities Dropdown Wrapper */}
            <div className="relative py-2">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdownOpen(!dropdownOpen);
                }}
                className="flex items-center gap-1 cursor-pointer transition-colors hover:text-indigo-brand text-xs font-bold uppercase tracking-widest text-dark/60"
              >
                Comunități
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  className={`size-3 transition-transform duration-300 ${dropdownOpen ? "rotate-180 text-indigo-brand" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 z-50 pt-2 w-56 -translate-x-1/2 animate-fade-up duration-200">
                  <div className="rounded-2xl border border-dark/5 bg-white/95 p-2 shadow-lg backdrop-blur-md">
                    {communitiesDropdown.map((c) => (
                      <Link
                        key={c.href}
                        to={c.href}
                        className="block rounded-xl px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wider text-dark/80 transition-colors hover:bg-indigo-brand/5 hover:text-indigo-brand"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

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
        className={`fixed inset-0 z-40 bg-ivory transition-all duration-300 md:hidden ${
          open ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-4"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6 px-6 text-center overflow-y-auto pt-24 pb-12">
          <Link to="/" onClick={() => setOpen(false)} className="text-2xl font-bold tracking-tight text-dark">
            Acasă
          </Link>

          {/* Mobile Comunitati list directly visible */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-dark/40">— Comunități —</span>
            <div className="flex flex-col items-center gap-2.5">
              {communitiesDropdown.map((c) => (
                <Link
                  key={c.href}
                  to={c.href}
                  onClick={() => setOpen(false)}
                  className="text-xl font-bold text-dark hover:text-indigo-brand transition-colors"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-dark/40">— Navigare —</span>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-xl font-bold tracking-tight text-dark hover:text-indigo-brand transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

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
