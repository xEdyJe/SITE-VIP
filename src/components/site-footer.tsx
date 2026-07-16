import { Link } from "@tanstack/react-router";
import logoVip from "@/assets/logo negru vip.png";

const footerLinks = {
  "Organizație": [
    { label: "Despre Noi", href: "/despre-noi" },
    { label: "Departamente", href: "/departamente" },
    { label: "Proiecte", href: "/proiecte" },
    { label: "Parteneri", href: "/parteneri" },
  ],
  "Comunități": [
    { label: "Business Club", href: "/comunitati/business-club" },
    { label: "Econosofia", href: "/comunitati/econosofia" },
    { label: "International Affairs", href: "/comunitati/international-affairs" },
    { label: "Leadership Development", href: "/comunitati/leadership-development" },
  ],
  "Contact": [
    { label: "contact@vipromania.ro", href: "mailto:contact@vipromania.ro" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/vip-romania/" },
    { label: "Instagram", href: "https://www.instagram.com/vip.romania/" },
    { label: "Facebook", href: "https://www.facebook.com/ViproMania/" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ivory border-t border-dark/5">
      {/* Big watermark text */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pointer-events-none select-none overflow-hidden">
        <span className="footer-big-text" aria-hidden>VIP</span>
      </div>

      {/* Main footer content */}
      <div className="container relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-10">
        {/* Top: logo + tagline */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Link to="/" aria-label="VIP Romania">
              <img src={logoVip} alt="VIP Romania" className="h-12 w-auto object-contain mb-3" />
            </Link>
            <p className="text-xs text-dark/40 font-mono tracking-[0.2em] uppercase max-w-xs">
              Voluntari pentru Idei și Proiecte — Est. 1998
            </p>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeiu5v_t-RCf_pfDm7pa5ohJ_aTicOy2dINeNhTrUQ0XH1MzQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start md:self-end rounded-full bg-indigo-brand px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-indigo-brand/20 transition-all hover:brightness-110 active:scale-[0.98]"
          >
            Înscrie-te acum
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.3em] text-dark/35">
                {category}
              </p>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.href}>
                    {l.href.startsWith("http") || l.href.startsWith("mailto") ? (
                      <a
                        href={l.href}
                        target={l.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-dark/50 hover:text-indigo-brand transition-colors duration-200 font-medium"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        to={l.href}
                        className="text-sm text-dark/50 hover:text-indigo-brand transition-colors duration-200 font-medium"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-dark/5 pt-6 text-[10px] text-dark/30 uppercase tracking-widest font-mono">
          <span>© {new Date().getFullYear()} VIP Romania. Toate drepturile rezervate.</span>
          <div className="flex items-center gap-4">
            <a
              href="https://formular230.ro/voluntari-pentru-idei-si-proiecte"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-brand transition-colors"
            >
              Donează 3.5%
            </a>
            <span className="text-dark/15">·</span>
            <span>Est. 1998</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
