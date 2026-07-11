import logoVip from "@/assets/logo vip.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-dark/5 bg-ivory py-12 text-dark/40">
      <div className="container mx-auto grid grid-cols-1 items-center gap-6 px-6 md:grid-cols-3">
        <div className="flex flex-col gap-2">
          <img src={logoVip} alt="VIP Romania" className="h-5 w-auto object-contain self-start" />
          <p className="text-[10px] uppercase tracking-[0.2em]">
            Voluntari pentru Idei și Proiecte
          </p>
        </div>
        <div className="flex justify-center gap-8 text-[10px] font-semibold uppercase tracking-widest">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-indigo-brand"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-indigo-brand"
          >
            Instagram
          </a>
          <a href="mailto:contact@vipromania.ro" className="transition-colors hover:text-indigo-brand">
            Contact
          </a>
        </div>
        <p className="text-center text-[10px] uppercase tracking-widest md:text-right">
          © {new Date().getFullYear()} VIP Romania
        </p>
      </div>
    </footer>
  );
}
