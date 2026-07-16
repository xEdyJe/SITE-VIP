import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef, useCallback } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";

// Hero / Group Photos
import beachGroupLarge from "@/assets/beach-group-large.png";
import beachGroup from "@/assets/beach-group.png";
import officeGroup from "@/assets/office-group.png";

// Community Photos
import businessCommunity from "@/assets/bc grup.jpg";
import econosofiaCommunity from "@/assets/eco grup.jpg";
import iaCommunity from "@/assets/ia grup.jpg";
import ldCommunity from "@/assets/ld grup.jpg";

// Project Logos 2025-2026
import yafLogo from "@/assets/2025-2026/YAF.png";
import storyLogo from "@/assets/logouri si altele/STN NEGRU.png";
import ldsLogo from "@/assets/2025-2026/LDS.png";
import isLogo from "@/assets/2025-2026/IS.png";
import funkyLogo from "@/assets/2025-2026/FUNKY.png";
import reelSelfLogo from "@/assets/2025-2026/REELSELF.png";

// Testimonial Photos
import lauraImg from "@/assets/logouri si altele/laura_edited.jpg";
import bulentImg from "@/assets/logouri si altele/bulent.jpg";
import andreiCImg from "@/assets/logouri si altele/andrei constantin.jpg";
import mariaCImg from "@/assets/logouri si altele/Maria Chitu.png";
import cristinaImg from "@/assets/logouri si altele/Cristina Danovschi.jpeg";
import andreiSImg from "@/assets/logouri si altele/Andrei Stanescu.jpeg";

// Partner Logos (for marquee)
import bcrLogo from "@/assets/logouri si altele/BCR - logo pagina parteneri.png";
import mazarsLogo from "@/assets/logouri si altele/Mazars - logo pagina parteneri.png";
import heinekenLogo from "@/assets/logouri si altele/Heineken-Logo.png";
import leadersLogo from "@/assets/logouri si altele/LEADERS - logo pagina parteneri.png";
import danoneLogo from "@/assets/logouri si altele/Danone - logo pagina parteneri.png";
import maspexLogo from "@/assets/logouri si altele/Maspex - logo pagina parteneri.png";
import lorealLogo from "@/assets/logouri si altele/Loreal-Logo.jpg";
import woltLogo from "@/assets/logouri si altele/Wolt - logo pagina parteneri.png";
import fiveToGoLogo from "@/assets/logouri si altele/5 to go - logo pagina parteneri.png";
import socialPediaLogo from "@/assets/logouri si altele/SocialPedia - logo pagina parteneri.png";
import zfLogo from "@/assets/logouri si altele/Ziarul Financiar - logo pagina parteneri.png";
import evensysLogo from "@/assets/logouri si altele/Evensys - logo pagina parteneri.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const communities = [
  { id: "01", tag: "01 / BUSINESS", title: "Business Club", desc: "Comunitatea pasionaților de business și antreprenoriat.", span: "md:col-span-8", image: businessCommunity, route: "business-club" },
  { id: "02", tag: "02 / ECONOSOFIA", title: "Econosofia", desc: "Comunitatea pasionaților de economie și investiții.", span: "md:col-span-4", image: econosofiaCommunity, route: "econosofia" },
  { id: "03", tag: "03 / INT. AFFAIRS", title: "International Affairs", desc: "Comunitatea pasionaților de relații internaționale.", span: "md:col-span-4", image: iaCommunity, route: "international-affairs" },
  { id: "04", tag: "04 / LEADERSHIP", title: "Leadership Development", desc: "Comunitatea pasionaților de leadership și dezvoltare personală.", span: "md:col-span-8", image: ldCommunity, route: "leadership-development", highlight: true },
];

const departments = [
  { title: "Marketing", desc: "Strategii de brand, social media, campanii digitale și promovare vizuală care maximizează vizibilitatea VIP.", icon: "target", accentColor: "bg-rose-50 text-rose-500 ring-rose-100" },
  { title: "Public Relations", desc: "Promovarea imaginii organizației, relația cu presa, comunicate și parteneriate media de impact.", icon: "mic", accentColor: "bg-sky-50 text-sky-500 ring-sky-100" },
  { title: "Creative", desc: "Identitatea vizuală a brandului VIP — design grafic, producție multimedia și expresie artistică.", icon: "palette", accentColor: "bg-violet-50 text-violet-500 ring-violet-100" },
  { title: "Human Resources", desc: "Recrutare, integrarea membrilor, teambuilding-uri și crearea unei culturi organizaționale sănătoase.", icon: "users", accentColor: "bg-emerald-50 text-emerald-500 ring-emerald-100" },
  { title: "Business Development", desc: "Parteneriate corporate, sponsorizări și atragere de resurse financiare pentru proiectele organizației.", icon: "handshake", accentColor: "bg-amber-50 text-amber-500 ring-amber-100" },
];

const stats = [
  { value: 160, suffix: "+", label: "Proiecte", sub: "realizate cu succes", span: "col-span-2 md:col-span-1", big: false },
  { value: 2000, suffix: "+", label: "Alumni", sub: "conectați global", span: "col-span-2 md:col-span-2", big: true },
  { value: 25, suffix: "", label: "Ani", sub: "de impact neîntrerupt", span: "col-span-2 md:col-span-1", big: false },
  { value: 170, suffix: "+", label: "Membri activi", sub: "în prezent", span: "col-span-1 md:col-span-1", big: false },
  { value: 5000, suffix: "+", label: "Participanți", sub: "la proiectele noastre", span: "col-span-1 md:col-span-1", big: false },
];

const projects = [
  { tag: "Diplomație", title: "Young Ambassador Forum", desc: "Conferință internațională destinată tinerilor pasionați de diplomație și relații internaționale.", logo: yafLogo, route: "/proiecte" },
  { tag: "Inspirație", title: "Storytelling Night", desc: "Inspiră și educă tinerii prin povești autentice de la oameni cu experiențe remarcabile.", logo: storyLogo, route: "/proiecte" },
  { tag: "Leadership", title: "LeaderShape", desc: "Program dedicat tinerilor care vor să facă o schimbare și să devină liderii de mâine.", logo: ldsLogo, route: "/proiecte" },
  { tag: "Finanțe", title: "Investment School", desc: "Training-uri și workshop-uri gratuite despre investiții și educație financiară pentru studenți.", logo: isLogo, route: "/proiecte" },
  { tag: "Media", title: "Funky VIPCast", desc: "Podcast de la tineri pentru tineri care explorează perspective proprii asupra vieții.", logo: funkyLogo, route: "/proiecte" },
  { tag: "Content", title: "ReelSelf", desc: "Program de dezvoltare a studenților creatori de conținut — de la amatori la profesioniști.", logo: reelSelfLogo, route: "/proiecte" },
];

const testimonials = [
  { name: "Maria Chițu", role: "Președinte VIP 2024-2025", com: "Business Club", year: "2022", quote: "Pentru mine VIP înseamnă evoluție continuă și accelerată. Organizația m-a crescut într-un adult responsabil și capabil, dar cel mai important m-a înconjurat de oameni valoroși, alături de care am putut construi prietenii frumoase și proiecte de impact.", image: mariaCImg },
  { name: "Laura Soroceanu", role: "Project Manager YAF", com: "International Affairs", year: "2022", quote: "Am intrat în primul an de facultate în căutarea unui loc unde să mă pot dezvolta, să pot lua inițiativă și să cunosc oameni care să mă sprijine. VIP a ieșit în calea mea, iar de atunci am tot găsit oportunități și prieteni.", image: lauraImg },
  { name: "Bülent Duagi", role: "Membru BOD", com: "Leadership Development", year: "2008", quote: "Pentru mine, experiența VIP a fost ceva ce mi-a schimbat major traiectoria în viață. Am avut ocazia să vin cu idei îndrăznețe și să lucrez cu colegi remarcabili la proiecte prin care am simțit că avem un impact în jurul nostru.", image: bulentImg },
  { name: "Andrei Stănescu", role: "Membru BOD", com: "Leadership Development", year: "2018", quote: "Organizația Voluntari pentru Idei și Proiecte a reprezentat pentru mine un mediu în care m-am simțit sigur, ascultat și încurajat să îmi valorific abilitățile. Accentul organizației a fost mereu pus pe un proces de învățare extrem de practic, fapt ce m-a ajutat să mă dezvolt exponențial atât pe plan personal, cat și pe plan profesional.", image: andreiSImg },
  { name: "Andrei Constantin", role: "Membru BOD", com: "International Affairs", year: "2018", quote: "VIP pentru mine a fost plasa de siguranță în timpul studenției. A fost locul în care am simțit că pot face greșeli, pot învăța și pot fi alături de oameni care împărtășesc aceleași valori ca și mine.", image: andreiCImg },
  { name: "Cristina Danovschi", role: "Membră BOD", com: "Business Club", year: "2018", quote: "Îmi place să descriu VIP ca pe un loc de joacă. Mai întâi îl descoperi, faci cunoștință cu cei din jur, apoi testezi, te antrenezi, îți alegi jocurile preferate și te perfecționezi!", image: cristinaImg },
];

const partnerLogos = [
  { name: "BCR", logo: bcrLogo }, { name: "Mazars", logo: mazarsLogo },
  { name: "Heineken", logo: heinekenLogo }, { name: "Leaders", logo: leadersLogo },
  { name: "Danone", logo: danoneLogo }, { name: "Maspex", logo: maspexLogo },
  { name: "L'Oréal", logo: lorealLogo }, { name: "Wolt", logo: woltLogo },
  { name: "5 to go", logo: fiveToGoLogo }, { name: "SocialPedia", logo: socialPediaLogo },
  { name: "Ziarul Financiar", logo: zfLogo }, { name: "Evensys", logo: evensysLogo },
];

const faqs = [
  { q: "Cu ce se diferențiază VIP de alte asociații?", a: "VIP se diferențiază printr-o structură inovatoare, formată din 4 comunități în funcție de domeniile de interes ale studenților (economie, business, relații internaționale și leadership). Recrutarea se face prin intermediul unei comunități, iar apoi intri și într-un departament." },
  { q: "Care este procesul de recrutare?", a: "Mai întâi aplici prin formularul de înscriere, apoi, dacă ești acceptat, participi la un interviu, iar în final urmează perioada de probă." },
  { q: "Când mă pot înscrie în VIP?", a: "Formularul de înscriere se deschide în fiecare an în septembrie și se închide la început de octombrie." },
  { q: "Cât stai în VIP?", a: "Poți fi membru activ 2 până la 3 ani, iar titlul de 'alumn' (absolvent VIP) îl poți obține după 2 ani de activitate." },
  { q: "De ce intrăm într-un proiect?", a: "Proiectele VIP nu sunt doar modul prin care organizația contribuie în educarea altor studenți, ci și modul în care membrii practică ce au învățat în comunitate și departamente, într-un context profesional și de echipă." },
  { q: "Pot participa la mai multe comunități și departamente?", a: "Poți fi membru activ al unei singure comunități într-un an, dar poți activa în mai multe departamente, în funcție de domeniile de interes." },
];

// ── Counter Hook ──────────────────────────────
function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ── Stat Counter Card ──────────────────────────
function StatCard({ value, suffix, label, sub, big }: { value: number; suffix: string; label: string; sub: string; big: boolean }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCounter(value, 1600, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`bento-card rounded-3xl border border-white/10 bg-white/8 p-6 md:p-8 flex flex-col justify-between ${big ? "md:min-h-[200px]" : ""}`}
    >
      <div>
        <p className={`font-serif font-bold leading-none tracking-tight text-ivory ${big ? "text-6xl md:text-8xl" : "text-4xl md:text-6xl"}`}>
          {count.toLocaleString("ro-RO")}{suffix}
        </p>
        <p className={`mt-2 font-bold text-ivory ${big ? "text-lg md:text-xl" : "text-sm md:text-base"}`}>{label}</p>
      </div>
      <p className="mt-3 text-xs text-ivory/50 leading-relaxed">{sub}</p>
    </div>
  );
}

// ── 3D Tilt Card ──────────────────────────────
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -6;
    const rotY = ((x - cx) / cx) * 6;
    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(8px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    }
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  );
}

// ── Spotlight Section ──────────────────────────
function SpotlightSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty("--mouse-x", `${x}%`);
    el.style.setProperty("--mouse-y", `${y}%`);
  }, []);

  return (
    <section ref={ref} onMouseMove={handleMouseMove} className={`spotlight-container ${className}`}>
      {children}
    </section>
  );
}

// ── Dept Icon ─────────────────────────────────
function DeptIcon({ name }: { name: string }) {
  const cls = "size-5";
  const icons: Record<string, React.ReactNode> = {
    users: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls}><circle cx="9" cy="8" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M2 20c0-3 3-5 7-5s7 2 7 5"/><path d="M15 20c0-2 2-4 5-4"/></svg>,
    mic: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls}><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>,
    target: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>,
    handshake: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    palette: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls}><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>,
  };
  return <>{icons[name] ?? null}</>;
}

// ── Main Component ────────────────────────────
function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Testimonial autoplay
  useEffect(() => {
    if (isPaused) return;
    autoplayRef.current = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5500);
    return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
  }, [isPaused]);

  // Touch/swipe support for testimonials
  const touchStartX = useRef<number>(0);
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      setCurrentTestimonial(prev => diff > 0 ? (prev + 1) % testimonials.length : (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  return (
    <div className="min-h-screen bg-ivory text-dark overflow-x-hidden">
      <SiteNav />

      {/* ═══════════════════════════════════════════
          1. HERO
      ═══════════════════════════════════════════ */}
      <section className="relative flex min-h-[96svh] items-center justify-center overflow-hidden bg-dark">
        {/* Background */}
        <div className="absolute inset-x-0 top-0 -bottom-[4px] z-0">
          <img src={beachGroupLarge} alt="Membrii VIP Romania" className="h-full w-full object-cover" width={1920} height={1080} />
          {/* Gradient mesh overlay */}
          <div className="absolute inset-x-0 top-0 -bottom-[4px]" style={{
            background: "radial-gradient(ellipse at 20% 50%, oklch(0.51 0.22 275 / 25%) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, oklch(0.55 0.18 295 / 20%) 0%, transparent 40%), linear-gradient(to bottom, oklch(0.1 0.01 285 / 50%) 0%, oklch(0.15 0.01 285 / 75%) 100%)"
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-20 sm:pt-44">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-center">

            {/* Left: Headline + CTA */}
            <div className="text-ivory">

              {/* Animated word-by-word headline */}
              <div className="mb-6 text-4xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl overflow-hidden">
                {["Unde", "excepționalul"].map((word, i) => (
                  <span key={word} className="inline-block mr-[0.25em] overflow-hidden" style={{ animationDelay: `${i * 0.12}s` }}>
                    <span className="inline-block animate-word" style={{ animationDelay: `${i * 0.12}s` }}>
                      {word}
                    </span>
                  </span>
                ))}
                <br />
                <span className="inline-block overflow-hidden">
                  <span className="font-serif italic font-normal text-indigo-brand/90 inline-block animate-word" style={{ animationDelay: "0.3s" }}>
                    prinde aripi.
                  </span>
                </span>
              </div>

              <ScrollReveal animation="fade-up" delay={400}>
                <p className="mb-10 max-w-xl text-pretty text-base text-ivory/75 sm:text-lg">
                  Asociația studențească cu o structură inovativă de dezvoltare a tinerilor — 4 comunități, 5 departamente și proiecte cu impact real.
                </p>
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeiu5v_t-RCf_pfDm7pa5ohJ_aTicOy2dINeNhTrUQ0XH1MzQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnetic-btn inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-indigo-brand shadow-xl transition-all hover:shadow-indigo-brand/30 hover:scale-[1.04] active:scale-[0.97]"
                  >
                    Înscrie-te acum
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                  <a
                    href="https://formular230.ro/voluntari-pentru-idei-si-proiecte"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-8 py-4 text-xs font-bold uppercase tracking-widest text-ivory/80 backdrop-blur-sm transition-all hover:border-ivory/50 hover:text-ivory"
                  >
                    Donează 3.5%
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Glassmorphic stats card */}
            <ScrollReveal animation="fade-up" delay={600}>
              <div className="glass-card rounded-3xl p-6 text-ivory animate-float">
                <p className="mb-4 text-[9px] font-mono uppercase tracking-[0.3em] text-ivory/50">Impact organizație</p>
                <div className="space-y-4">
                  {[
                    { n: "25+", label: "Ani de impact" },
                    { n: "2000+", label: "Alumni conectați" },
                    { n: "170+", label: "Membri activi" },
                  ].map(s => (
                    <div key={s.label} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <span className="text-xs text-ivory/60">{s.label}</span>
                      <span className="font-serif text-2xl font-bold text-ivory">{s.n}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-white/10 p-3 text-center">
                  <p className="text-[10px] text-ivory/50 mb-1">Fondată în</p>
                  <p className="font-serif text-3xl font-bold text-ivory">1998</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ivory/40">
          <span className="font-mono text-[8px] uppercase tracking-widest">Scroll</span>
          <div className="scroll-indicator-track">
            <div className="scroll-indicator-dot" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. DESPRE NOI
      ═══════════════════════════════════════════ */}
      <section id="despre" className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal animation="fade-up">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-indigo-brand">— Cine suntem</p>
              <h2 className="text-balance text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
                Împreună, construim{" "}
                <span className="font-serif italic font-normal text-indigo-brand">pilonii societății de mâine.</span>
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-dark/65 sm:text-base max-w-lg">
                Voluntari pentru Idei și Proiecte este organizația non-guvernamentală și non-profit studențească cu o vechime de peste 25 de ani, care formează tinerii cu inițiativă și dorință de învățare în pilonii societății de mâine.
              </p>
              {/* Quote block */}
              <blockquote className="mt-6 border-l-2 border-indigo-brand/30 pl-4 text-sm italic text-dark/50">
                "Voluntarismul, inițiativa și impactul nu sunt doar valori — sunt acțiuni pe care le trăim în fiecare zi."
              </blockquote>
              <div className="mt-8">
                <Link
                  to="/despre-noi"
                  className="inline-flex items-center gap-2 rounded-full bg-indigo-brand px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-indigo-brand/20 transition-all hover:brightness-110 hover:scale-[1.03] active:scale-[0.97]"
                >
                  Află mai multe
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200} className="relative flex justify-center items-center">
              {/* Pilonii societății Temple Structure */}
              <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-dark/10 group select-none">
                {/* Background image with high contrast dark overlay */}
                <img 
                  src={officeGroup} 
                  alt="Membrii VIP lucrând împreună" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.35]" 
                  loading="lazy" 
                />
                
                {/* Interactive blocks container overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
                  {/* Temple construction wrapper */}
                  <div className="relative w-full h-full flex flex-col justify-end pb-4">
                    
                    {/* 1. Level 3 (Top): Beam (exceptional) */}
                    <div className="absolute top-[15%] left-[10%] right-[10%] flex justify-center">
                      <div className="bg-indigo-brand text-white font-bold uppercase text-[10px] md:text-[11px] tracking-[0.25em] px-8 py-3 rounded-lg shadow-lg border border-white/10 hover:bg-indigo-500 transition-all duration-300 transform rotate-[-4deg] cursor-default hover:scale-105 active:scale-95">
                        excepțional
                      </div>
                    </div>

                    {/* 2. Level 2: Pillars (impact, leadership) */}
                    <div className="absolute top-[28%] left-[20%] w-9 h-[100px] bg-indigo-brand rounded-lg shadow-lg border border-white/10 flex items-center justify-center hover:bg-indigo-500 transition-all duration-300 cursor-default hover:scale-105 active:scale-95">
                      <span className="transform -rotate-90 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.25em] text-white">
                        impact
                      </span>
                    </div>
                    <div className="absolute top-[28%] right-[20%] w-9 h-[100px] bg-indigo-brand rounded-lg shadow-lg border border-white/10 flex items-center justify-center hover:bg-indigo-500 transition-all duration-300 cursor-default hover:scale-105 active:scale-95">
                      <span className="transform -rotate-90 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.25em] text-white">
                        leadership
                      </span>
                    </div>

                    {/* 3. Level 1.5: Middle Beam (proiecte) */}
                    <div className="absolute top-[55%] left-[8%] right-[8%] flex justify-center">
                      <div className="w-full bg-indigo-brand text-white font-bold uppercase text-[10px] md:text-[11px] tracking-[0.25em] py-3 text-center rounded-lg shadow-lg border border-white/10 hover:bg-indigo-500 transition-all duration-300 cursor-default hover:scale-105 active:scale-95">
                        proiecte
                      </div>
                    </div>

                    {/* 4. Level 1: Bottom Pillars (actiune, comunitati, echipe) */}
                    <div className="absolute bottom-[16%] left-[12%] w-9 h-[90px] bg-indigo-brand rounded-lg shadow-lg border border-white/10 flex items-center justify-center hover:bg-indigo-500 transition-all duration-300 cursor-default hover:scale-105 active:scale-95">
                      <span className="transform -rotate-90 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.25em] text-white">
                        acțiune
                      </span>
                    </div>
                    <div className="absolute bottom-[16%] left-[45%] w-9 h-[90px] bg-indigo-brand rounded-lg shadow-lg border border-white/10 flex items-center justify-center hover:bg-indigo-500 transition-all duration-300 cursor-default hover:scale-105 active:scale-95">
                      <span className="transform -rotate-90 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.25em] text-white">
                        comunități
                      </span>
                    </div>
                    <div className="absolute bottom-[16%] right-[12%] w-9 h-[90px] bg-indigo-brand rounded-lg shadow-lg border border-white/10 flex items-center justify-center hover:bg-indigo-500 transition-all duration-300 cursor-default hover:scale-105 active:scale-95">
                      <span className="transform -rotate-90 whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.25em] text-white">
                        echipe
                      </span>
                    </div>

                    {/* 5. Level 0: Foundation (educatie) */}
                    <div className="absolute bottom-[4%] left-[5%] right-[5%] flex justify-center">
                      <div className="w-full bg-indigo-brand text-white font-bold uppercase text-[10px] md:text-[11px] tracking-[0.25em] py-3.5 text-center rounded-lg shadow-xl border border-white/10 hover:bg-indigo-500 transition-all duration-300 cursor-default hover:scale-105 active:scale-95">
                        educație
                      </div>
                    </div>

                  </div>
                </div>

                {/* Floating badge top right */}
                <div className="absolute top-4 right-4 glass-card rounded-2xl px-4 py-2.5 bg-white/10 backdrop-blur-md text-ivory shadow-lg border border-white/10 z-20">
                  <p className="font-serif text-lg font-bold text-center leading-none">25</p>
                  <p className="text-[8px] font-mono uppercase tracking-widest opacity-80 mt-0.5">ani de impact</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. COMUNITĂȚI
      ═══════════════════════════════════════════ */}
      <section id="comunitati" className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollReveal animation="clip-reveal">
            <div className="mb-12 md:mb-16">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-indigo-brand">— Comunități</p>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                <h2 className="text-balance text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl max-w-xl">
                  Cele 4 comunități care{" "}
                  <span className="font-serif italic font-normal text-indigo-brand">formează VIP</span>
                </h2>
                <p className="text-sm text-dark/55 max-w-xs">
                  Alege comunitatea care ți se potrivește — împarți pasiuni, interese și valori comune.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
            {communities.map((c, idx) => (
              <ScrollReveal key={c.id} delay={idx * 100} animation="fade-up" className={c.span}>
                <Link to={`/comunitati/${c.route}` as any} className="block w-full h-full group">
                  <article className="group relative flex min-h-[280px] h-full w-full flex-col justify-end overflow-hidden rounded-3xl p-6 sm:p-8 md:min-h-[380px] cursor-pointer transition-all duration-500 hover:scale-[1.015] hover:shadow-2xl hover:shadow-dark/20">
                    <div className="absolute inset-0 z-0">
                      <img src={c.image} alt={c.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                      <div className={`absolute inset-0 ${c.highlight ? "bg-gradient-to-t from-indigo-brand/95 via-indigo-brand/60 to-transparent" : "bg-gradient-to-t from-dark/90 via-dark/40 to-dark/5"}`} />
                    </div>
                    {/* Number tag */}
                    <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
                      <span className="font-serif text-5xl font-bold leading-none text-outline text-white/20">{c.id}</span>
                    </div>
                    {/* Tag top right */}
                    <div className="absolute right-6 top-6 sm:right-8 sm:top-8">
                      <span className="rounded-full bg-white/10 px-3 py-1 font-mono text-[9px] tracking-widest text-ivory/60 backdrop-blur-sm">{c.tag}</span>
                    </div>
                    <div className="relative z-10 text-left">
                      <h3 className="text-2xl font-bold sm:text-3xl text-white">{c.title}</h3>
                      <p className="mt-2 max-w-sm text-sm text-ivory/70">{c.desc}</p>
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-ivory/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-ivory/70 backdrop-blur-sm group-hover:bg-white/20 group-hover:text-ivory transition-all duration-300">
                        Descoperă
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. DEPARTAMENTE
      ═══════════════════════════════════════════ */}
      <section id="departamente" className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollReveal animation="clip-reveal">
            <div className="mb-12 md:mb-16 max-w-2xl">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-indigo-brand">— Departamente</p>
              <h2 className="text-balance text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
                Cele 5 departamente <span className="font-serif italic font-normal text-indigo-brand">din VIP</span>
              </h2>
              <p className="mt-4 text-base text-dark/60">
                Dezvolți competențe reale pe care le aplici în proiecte și mai departe în cariera ta.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {departments.map((d, idx) => (
              <ScrollReveal key={d.title} delay={(idx % 3) * 80} animation="fade-up">
                <div className="group h-full overflow-hidden rounded-2xl border border-dark/5 bg-ivory p-6 md:p-7 transition-all duration-400 hover:border-indigo-brand/20 hover:shadow-xl hover:shadow-indigo-brand/5 hover:-translate-y-1.5 cursor-default">
                  {/* Colored icon */}
                  <div className={`mb-5 grid size-11 place-items-center rounded-xl ring-1 ${d.accentColor}`}>
                    <DeptIcon name={d.icon} />
                  </div>
                  <h3 className="text-sm font-bold md:text-base">{d.title}</h3>
                  <p className="mt-2 text-sm text-dark/55 leading-relaxed">{d.desc}</p>
                  {/* Subtle arrow */}
                  <div className="mt-4 flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-dark/25 group-hover:text-indigo-brand transition-colors duration-300">
                    <span>Află mai mult</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={250} className="mt-10 text-center">
            <Link to="/departamente" className="inline-flex items-center gap-2 rounded-full border border-dark/12 bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-dark transition-all hover:bg-indigo-brand hover:text-white hover:border-indigo-brand hover:scale-[1.03] active:scale-[0.97]">
              Toate departamentele
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. BENTO STATS (cu counter animat)
      ═══════════════════════════════════════════ */}
      <SpotlightSection className="relative overflow-hidden bg-dark py-20 md:py-28">
        <span aria-hidden className="pointer-events-none absolute -top-6 right-0 select-none font-serif text-[20vw] font-black leading-none tracking-tighter text-ivory/[0.03]">
          impact
        </span>
        <div className="container relative z-10 mx-auto px-6 max-w-6xl">
          <ScrollReveal animation="clip-reveal" className="mb-10">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-indigo-brand">— Impact</p>
            <h2 className="text-2xl font-bold text-ivory sm:text-3xl md:text-4xl">
              Cifrele care <span className="font-serif italic font-normal text-indigo-brand">vorbesc singure</span>
            </h2>
          </ScrollReveal>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Big span cell */}
            <ScrollReveal animation="fade-up" delay={0} className="col-span-2 md:col-span-2">
              <StatCard value={2000} suffix="+" label="Alumni" sub="Conectați și care continuă să dea mai departe." big={true} />
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={80} className="col-span-1">
              <StatCard value={160} suffix="+" label="Proiecte" sub="Realizate cu succes și impact real." big={false} />
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={160} className="col-span-1">
              <StatCard value={25} suffix="" label="Ani" sub="De când VIP produce valoare." big={false} />
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={120} className="col-span-1">
              <StatCard value={170} suffix="+" label="Membri activi" sub="Care participă și se implică." big={false} />
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200} className="col-span-1 md:col-span-3">
              <StatCard value={5000} suffix="+" label="Participanți" sub="La proiectele noastre educaționale și de networking." big={false} />
            </ScrollReveal>
          </div>
        </div>
      </SpotlightSection>

      {/* ═══════════════════════════════════════════
          6. PROIECTE
      ═══════════════════════════════════════════ */}
      <section id="proiecte" className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollReveal animation="clip-reveal">
            <div className="mb-12 max-w-2xl md:mb-16">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-indigo-brand">— Proiecte</p>
              <h2 className="text-balance text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
                Proiectele <span className="font-serif italic font-normal text-indigo-brand">noastre</span>
              </h2>
              <p className="mt-4 text-base text-dark/60 max-w-lg">
                Făcute de studenți pentru studenți — modul nostru de a contribui la educație.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, idx) => (
              <ScrollReveal key={p.title} delay={idx * 70} animation="fade-up">
                <TiltCard className="h-full">
                  <Link to={p.route as any} className="block h-full group">
                    <article className="h-full overflow-hidden rounded-3xl bg-white border border-dark/5 shadow-sm">
                      {/* Logo */}
                      <div className="flex items-center justify-center p-8 bg-gradient-to-br from-[#F5F7FF] to-[#EDEEFF] border-b border-dark/4 min-h-[150px] transition-colors group-hover:from-indigo-brand/5 group-hover:to-violet-50 duration-300">
                        <img src={p.logo} alt={p.title} className="max-h-[90px] max-w-[190px] object-contain group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      </div>
                      {/* Content */}
                      <div className="p-6">
                        <span className="inline-block rounded-full bg-indigo-brand/8 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-indigo-brand mb-3">
                          {p.tag}
                        </span>
                        <h3 className="font-bold text-base text-dark">{p.title}</h3>
                        <p className="mt-2 text-sm text-dark/55 leading-relaxed line-clamp-2">{p.desc}</p>
                      </div>
                    </article>
                  </Link>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" delay={250} className="mt-10 text-center">
            <Link to="/proiecte" className="inline-flex items-center gap-2 rounded-full bg-indigo-brand px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-indigo-brand/20 transition-all hover:brightness-110 hover:scale-[1.03] active:scale-[0.97]">
              Toate proiectele
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. TESTIMONIALE (autoplay + swipe)
      ═══════════════════════════════════════════ */}
      <section
        id="testimoniale"
        className="bg-white py-24 md:py-32 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollReveal animation="clip-reveal" className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-indigo-brand">— Testimoniale</p>
              <h2 className="text-balance text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
                Ce spun <span className="font-serif italic font-normal text-indigo-brand">foștii membri</span>
              </h2>
            </div>
            {/* Navigation */}
            <div className="flex items-center gap-3">
              <button onClick={() => setCurrentTestimonial(p => (p - 1 + testimonials.length) % testimonials.length)} className="grid size-10 place-items-center rounded-full border border-dark/10 text-dark/50 transition-all hover:border-indigo-brand/40 hover:bg-indigo-brand/5 hover:text-indigo-brand" aria-label="Anterior">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4"><path d="M19 12H5M11 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <span className="font-mono text-xs text-dark/30">{currentTestimonial + 1} / {testimonials.length}</span>
              <button onClick={() => setCurrentTestimonial(p => (p + 1) % testimonials.length)} className="grid size-10 place-items-center rounded-full border border-dark/10 text-dark/50 transition-all hover:border-indigo-brand/40 hover:bg-indigo-brand/5 hover:text-indigo-brand" aria-label="Următor">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </ScrollReveal>

          {/* Card */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="select-none"
          >
            <div
              key={currentTestimonial}
              className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center overflow-hidden rounded-3xl bg-ivory border border-dark/5 p-8 md:p-12 shadow-sm animate-fade-up"
            >
              {/* Photo */}
              <div className="flex justify-center">
                <div className="size-40 md:size-52 lg:size-64 rounded-3xl overflow-hidden ring-4 ring-indigo-brand/10 flex-shrink-0 bg-indigo-brand/5 flex items-center justify-center text-indigo-brand shadow-lg">
                  {testimonials[currentTestimonial].image ? (
                    <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-serif text-4xl font-bold">{testimonials[currentTestimonial].name.split(" ").map(n => n[0]).join("").slice(0, 2)}</span>
                  )}
                </div>
              </div>

              {/* Quote */}
              <div className="text-left">
                <svg className="mb-4 size-8 text-indigo-brand/25" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 7h4v4H8c0 2 1 3 3 3v3c-4 0-6-2-6-6V7zm9 0h4v4h-3c0 2 1 3 3 3v3c-4 0-6-2-6-6V7z"/>
                </svg>
                <blockquote className="font-serif text-lg italic leading-relaxed text-dark md:text-xl">
                  „{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="mt-6 border-t border-dark/8 pt-5">
                  <p className="font-bold text-dark">{testimonials[currentTestimonial].name}</p>
                  <p className="text-sm text-dark/55 mt-0.5">{testimonials[currentTestimonial].role}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-indigo-brand/8 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-indigo-brand">{testimonials[currentTestimonial].com}</span>
                    <span className="rounded-full bg-dark/5 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-dark/40">An {testimonials[currentTestimonial].year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`rounded-full transition-all duration-400 ${i === currentTestimonial ? "w-8 h-1.5 bg-indigo-brand" : "w-1.5 h-1.5 bg-dark/15 hover:bg-dark/30"}`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Autoplay progress bar */}
          <div className="mt-3 mx-auto max-w-[200px] h-[1px] bg-dark/8 rounded-full overflow-hidden">
            {!isPaused && (
              <div
                key={`progress-${currentTestimonial}`}
                className="h-full bg-indigo-brand/40 rounded-full"
                style={{ animation: "marquee-progress 5.5s linear" }}
              />
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. PARTENERI — marquee cu logo-uri reale
      ═══════════════════════════════════════════ */}
      <section id="parteneri" className="border-y border-dark/5 bg-ivory py-16 md:py-20">
        <div className="container mx-auto px-6 mb-10 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-dark/35">
            Nu suntem singuri în această călătorie
          </p>
          <p className="mt-1 text-sm text-dark/50">
            Alături de partenerii noștri, transformăm viziunea în realitate.
          </p>
        </div>
        <div className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-12 pr-12 group-hover:[animation-play-state:paused] md:gap-16 md:pr-16">
            {[...partnerLogos, ...partnerLogos].map((p, i) => (
              <div key={`${p.name}-${i}`} className="flex h-16 w-32 flex-shrink-0 items-center justify-center opacity-40 grayscale transition-all duration-400 hover:opacity-100 hover:grayscale-0">
                <img src={p.logo} alt={p.name} className="max-h-10 max-w-[110px] object-contain" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link to="/parteneri" className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-indigo-brand transition-all hover:gap-2.5 duration-300">
            Toți partenerii noștri
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. FAQ
      ═══════════════════════════════════════════ */}
      <section id="intrebari" className="bg-white py-24 md:py-32">
        <div className="container mx-auto max-w-3xl px-6">
          <ScrollReveal animation="clip-reveal" className="mb-12 md:mb-16">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-indigo-brand">— Curiozități frecvente</p>
            <h2 className="text-balance text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
              Tot ce vrei <span className="font-serif italic font-normal text-indigo-brand">să știi</span>.
            </h2>
          </ScrollReveal>

          <div className="space-y-2.5">
            {faqs.map((f, idx) => {
              const open = openFaq === idx;
              return (
                <ScrollReveal key={f.q} delay={idx * 55} animation="fade-up">
                  <div className={`overflow-hidden rounded-2xl border transition-all duration-300 ${open ? "border-indigo-brand/25 bg-gradient-to-br from-[#F5F7FF] to-white" : "border-dark/5 bg-ivory/60 hover:border-dark/10"}`}>
                    <button
                      onClick={() => setOpenFaq(open ? null : idx)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={open}
                    >
                      <span className="text-sm font-bold md:text-base">{f.q}</span>
                      <span className={`grid size-7 shrink-0 place-items-center rounded-full border transition-all duration-300 ${open ? "rotate-45 border-indigo-brand/30 bg-indigo-brand/8 text-indigo-brand" : "border-dark/10 text-dark/40"}`}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="size-3.5"><path d="M12 5v14M5 12h14" strokeLinecap="round"/></svg>
                      </span>
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-sm leading-relaxed text-dark/60">{f.a}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          10. FINAL CTA
      ═══════════════════════════════════════════ */}
      <SpotlightSection className="bg-ivory pb-24 md:pb-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-indigo-brand px-6 py-20 text-center text-ivory md:px-12 md:py-28">
            {/* Background */}
            <div className="absolute inset-0 z-0 opacity-10">
              <img src={beachGroup} alt="" className="h-full w-full object-cover" loading="lazy" />
            </div>
            {/* Gradient orbs */}
            <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-violet-500/20 blur-[100px]" />
            <div className="absolute -top-32 -right-32 size-80 rounded-full bg-indigo-300/15 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ivory/50 mb-5">— Susține misiunea noastră</p>
              <h2 className="text-balance font-serif text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                Fii parte din<br/>
                <span className="italic">generația VIP</span>.
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-base text-ivory/75 md:mt-8 md:text-lg">
                Prin redirecționarea a 3.5% din impozitul pe venit, susții proiectele noastre educaționale fără niciun cost suplimentar.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://formular230.ro/voluntari-pentru-idei-si-proiecte"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-ivory px-10 py-4 text-xs font-bold uppercase tracking-widest text-indigo-brand shadow-xl transition-all hover:bg-dark hover:text-ivory hover:scale-[1.04] active:scale-[0.97]"
                >
                  Donează 3.5%
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4"><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </a>
                <Link to="/aplica" className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-10 py-4 text-xs font-bold uppercase tracking-widest text-ivory/85 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-ivory">
                  Înscrie-te!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SpotlightSection>

      <SiteFooter />
    </div>
  );
}
