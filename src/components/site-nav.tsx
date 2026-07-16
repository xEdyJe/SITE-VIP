import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import logoVip from "@/assets/logo negru vip.png";

const communitiesDropdown = [
  { label: "Business Club", href: "/comunitati/business-club" },
  { label: "Econosofia", href: "/comunitati/econosofia" },
  { label: "International Affairs", href: "/comunitati/international-affairs" },
  { label: "Leadership Development", href: "/comunitati/leadership-development" },
];

const links = [
  { label: "Despre Noi", href: "/despre-noi" },
  { label: "Departamente", href: "/departamente" },
  { label: "Proiecte", href: "/proiecte" },
  { label: "Parteneri", href: "/parteneri" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  // Scroll detection for nav appearance
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  useEffect(() => {
    if (!dropdownOpen) return;
    const closeDropdown = () => setDropdownOpen(false);
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, [dropdownOpen]);

  const isActive = (href: string) => pathname === href;
  const isCommActive = communitiesDropdown.some(c => pathname.startsWith(c.href));

  return (
    <>
      {/* ── Scroll Progress Bar ── */}
      <ScrollProgressBar />

      <nav
        className={`fixed top-3 left-1/2 z-50 w-full max-w-4xl -translate-x-1/2 px-4 transition-all duration-500 sm:top-5 ${
          scrolled ? "top-2 sm:top-3" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between gap-3 rounded-full px-5 py-2.5 transition-all duration-500 ${
            scrolled
              ? "border border-white/50 bg-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.1)] backdrop-blur-xl"
              : "border border-white/30 bg-white/20 shadow-[0_4px_24px_rgba(0,0,0,0.04)] backdrop-blur-lg"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="pl-1 flex items-center" aria-label="VIP Romania — acasă">
            <img src={logoVip} alt="VIP Romania" className="h-9 md:h-11 w-auto object-contain shrink-0 transition-all duration-300" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-5 text-xs font-bold uppercase tracking-widest text-dark/60 md:flex">
            {/* Communities Dropdown */}
            <div className="relative py-2">
              <button
                onClick={(e) => { e.stopPropagation(); setDropdownOpen(!dropdownOpen); }}
                className={`nav-link-underline flex items-center gap-1 cursor-pointer transition-colors hover:text-indigo-brand text-xs font-bold uppercase tracking-widest whitespace-nowrap ${
                  isCommActive ? "text-indigo-brand active" : "text-dark/60"
                }`}
              >
                Comunități
                <svg
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  className={`size-3 transition-transform duration-300 ${dropdownOpen ? "rotate-180 text-indigo-brand" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Dropdown */}
              <div className={`absolute top-full left-1/2 z-50 pt-3 w-56 -translate-x-1/2 transition-all duration-200 origin-top ${
                dropdownOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
              }`}>
                <div className="rounded-2xl border border-dark/5 bg-white/95 p-2 shadow-xl shadow-dark/10 backdrop-blur-md">
                  {communitiesDropdown.map((c) => (
                    <Link
                      key={c.href}
                      to={c.href}
                      className={`flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-left text-xs font-bold uppercase tracking-wider transition-all hover:bg-indigo-brand/8 hover:text-indigo-brand ${
                        pathname === c.href ? "text-indigo-brand bg-indigo-brand/5" : "text-dark/80"
                      }`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      <span className="size-1.5 rounded-full bg-current opacity-50" />
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`nav-link-underline transition-colors hover:text-indigo-brand whitespace-nowrap ${
                  isActive(l.href) ? "text-indigo-brand active" : "text-dark/60"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2">
            <Link
              to="/aplica"
              className="hidden rounded-full bg-dark px-5 py-2 text-xs font-bold uppercase tracking-wider text-ivory transition-all hover:bg-indigo-brand hover:scale-[1.03] active:scale-[0.97] sm:inline-flex"
            >
              Aplică
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid size-9 place-items-center rounded-full bg-dark text-ivory md:hidden transition-colors hover:bg-indigo-brand"
              aria-label="Meniu"
              aria-expanded={open}
            >
              <span className="relative block h-3 w-4">
                <span className={`absolute left-0 top-0 h-px w-full bg-current transition-all duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`} />
                <span className={`absolute left-0 top-1.5 h-px w-full bg-current transition-all duration-200 ${open ? "opacity-0 scale-x-0" : ""}`} />
                <span className={`absolute left-0 top-3 h-px w-full bg-current transition-all duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile menu overlay ── */}
      <div className={`fixed inset-0 z-40 transition-all duration-400 md:hidden ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-ivory/95 backdrop-blur-xl" />

        <div className="relative flex h-full flex-col items-center justify-center gap-5 px-6 text-center overflow-y-auto pt-24 pb-12">
          <Link to="/" onClick={() => setOpen(false)} className="text-2xl font-bold tracking-tight text-dark hover:text-indigo-brand transition-colors">
            Acasă
          </Link>

          <div className="h-px w-16 bg-dark/10" />

          {/* Mobile Communities */}
          <div className="flex flex-col items-center gap-2.5">
            <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-dark/35">— Comunități —</span>
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

          <div className="h-px w-16 bg-dark/10" />

          {/* Mobile Nav Links */}
          <div className="flex flex-col items-center gap-2.5">
            <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-dark/35">— Pagini —</span>
            {links.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="text-xl font-bold tracking-tight text-dark hover:text-indigo-brand transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <Link
            to="/aplica"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex rounded-full bg-indigo-brand px-8 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-indigo-brand/20"
          >
            Aplică acum
          </Link>
        </div>
      </div>
    </>
  );
}

// ── Scroll Progress Bar Component ──
function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress / 100})`;
      }
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return <div ref={barRef} className="scroll-progress-bar" aria-hidden />;
}
