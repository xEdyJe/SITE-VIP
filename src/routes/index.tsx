import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import heroImg from "@/assets/hero.jpg";
import businessImg from "@/assets/business.jpg";
import academyImg from "@/assets/academy.jpg";
import portraitImg from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const communities = [
  {
    id: "01",
    tag: "01 / BUSINESS",
    title: "Business Club",
    desc: "Antreprenoriat, strategie și conexiuni cu liderii pieței din România.",
    span: "md:col-span-8",
    image: businessImg,
  },
  {
    id: "02",
    tag: "02 / ECONOSOFIA",
    title: "Econosofia",
    desc: "Analiză macro, gândire critică și fundamente economice solide.",
    span: "md:col-span-4",
  },
  {
    id: "03",
    tag: "03 / INT. AFFAIRS",
    title: "International Affairs",
    desc: "Diplomație, geopolitică și viziune globală asupra lumii moderne.",
    span: "md:col-span-4",
  },
  {
    id: "04",
    tag: "04 / LEADERSHIP",
    title: "Leadership Development",
    desc: "Dezvoltare personală accelerată și managementul echipelor complexe.",
    span: "md:col-span-8",
    highlight: true,
  },
];

const departments = [
  { title: "Resurse Umane", desc: "Recrutare, motivare și dezvoltarea echipei.", icon: "users" },
  { title: "PR & Comunicare", desc: "Imaginea publică și relația cu media.", icon: "mic" },
  { title: "Marketing", desc: "Strategie de brand și campanii digitale.", icon: "target" },
  { title: "Fundraising", desc: "Parteneriate și atragerea de resurse.", icon: "handshake" },
  { title: "Evenimente", desc: "Logistică și experiențe memorabile.", icon: "calendar" },
  { title: "IT & Design", desc: "Produse digitale și identitate vizuală.", icon: "code" },
];

const stats = [
  { value: "25+", label: "Ani de impact" },
  { value: "4500+", label: "Membri formați" },
  { value: "150+", label: "Proiecte livrate" },
  { value: "60+", label: "Parteneri" },
];

const projects = [
  {
    tag: "Conferință",
    title: "VIP Summit",
    desc: "Cea mai mare conferință studențească de leadership din regiune.",
    image: academyImg,
  },
  {
    tag: "Educație",
    title: "Mentorship Program",
    desc: "6 luni de mentorat 1-la-1 cu profesioniști de top.",
    image: businessImg,
  },
  {
    tag: "Social",
    title: "Impact Weekend",
    desc: "48 de ore în care echipe rezolvă provocări reale ale comunității.",
    image: heroImg,
  },
];

const testimonials = [
  {
    name: "Andreea Popescu",
    role: "Alumni, Business Club · Promoția 2022",
    quote:
      "VIP m-a învățat că excepționalul nu e o destinație, ci un mod de a lucra în fiecare zi alături de oameni extraordinari.",
  },
  {
    name: "Bülent Duman",
    role: "Coordonator, International Affairs · Promoția 2023",
    quote:
      "Aici am găsit o comunitate care crede în potențialul meu mai mult decât credeam eu însumi. Experiența mi-a schimbat traiectoria.",
  },
  {
    name: "Maria Ionescu",
    role: "Președinte, Leadership Development · Promoția 2021",
    quote:
      "Fiecare proiect a fost o lecție de responsabilitate și curaj. VIP m-a pregătit pentru orice provocare profesională.",
  },
];

const partners = [
  "Deloitte",
  "EY",
  "PwC",
  "KPMG",
  "McKinsey",
  "Google",
  "Microsoft",
  "eMAG",
  "BCR",
  "Raiffeisen",
  "Orange",
  "Vodafone",
];

const faqs = [
  {
    q: "Cine se poate înscrie în VIP?",
    a: "Orice student din România, indiferent de universitate sau anul de studiu, care își dorește să crească alături de o comunitate de top.",
  },
  {
    q: "Cât durează procesul de recrutare?",
    a: "Aproximativ 3 săptămâni: aplicație scrisă, interviu individual și un assessment center final.",
  },
  {
    q: "Este vreo taxă de membru?",
    a: "Nu. VIP este o organizație non-profit și participarea este complet gratuită pentru membri.",
  },
  {
    q: "Cât timp trebuie să aloc săptămânal?",
    a: "În medie 6-10 ore pe săptămână, în funcție de proiectele în care ești implicat activ.",
  },
  {
    q: "Pot să mă înscriu în mai multe comunități?",
    a: "Aplici pentru comunitatea principală. Ulterior poți colabora pe proiecte transversale cu celelalte comunități.",
  },
];

function DeptIcon({ name }: { name: string }) {
  const common = "size-5 text-indigo-brand";
  switch (name) {
    case "users":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <circle cx="9" cy="8" r="3" /><circle cx="17" cy="10" r="2.5" />
          <path d="M2 20c0-3 3-5 7-5s7 2 7 5" /><path d="M15 20c0-2 2-4 5-4" />
        </svg>
      );
    case "mic":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M3 11l14-7v16L3 13z" /><path d="M17 8v8" />
        </svg>
      );
    case "target":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      );
    case "handshake":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M3 13l4-4 3 3 5-5 6 6-5 5-3-3-4 4z" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" />
        </svg>
      );
    case "code":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={common}>
          <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 6l-4 12" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-ivory text-dark">
      <SiteNav />

      {/* HERO */}
      <section className="relative flex min-h-[92svh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Peisaj atmosferic cu dealuri și ceață dimineața"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ivory/40 via-transparent to-ivory" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-32 pb-16 text-center sm:pt-40">
          <p className="animate-fade-up mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-dark/50">
            Est. 1998 · Romania
          </p>
          <h1 className="animate-clip-reveal text-balance text-4xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Modelăm viitorul <br />
            <span className="font-serif italic font-normal text-indigo-brand">elitei</span>{" "}
            românești
          </h1>
          <p className="animate-fade-up mx-auto mt-6 max-w-xl text-pretty text-base text-dark/70 [animation-delay:200ms] sm:mt-8 sm:text-lg md:text-xl">
            Cea mai influentă organizație de studenți din România. Patru comunități, un singur
            standard de excelență.
          </p>
          <div className="animate-fade-up mt-8 flex flex-col items-center justify-center gap-3 [animation-delay:400ms] sm:mt-10 sm:flex-row">
            <Link
              to="/aplica"
              className="w-full rounded-full bg-dark px-8 py-4 text-xs font-bold uppercase tracking-widest text-ivory shadow-xl shadow-dark/10 transition-all hover:bg-indigo-brand sm:w-auto"
            >
              Aplică pentru 2026
            </Link>
            <a
              href="#communities"
              className="w-full rounded-full border border-dark/10 bg-ivory/50 px-8 py-4 text-xs font-bold uppercase tracking-widest text-dark backdrop-blur-sm transition-colors hover:bg-ivory sm:w-auto"
            >
              Descoperă comunitățile
            </a>
          </div>
        </div>
      </section>

      {/* COMMUNITIES BENTO */}
      <section id="communities" className="bg-dark py-24 text-ivory md:py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="clip-reveal">
            <div className="mb-12 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 md:mb-16">
              <div className="min-w-0 max-w-xl">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-indigo-brand">
                  — Comunități
                </p>
                <h2 className="text-balance text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  Patru piloni ai{" "}
                  <span className="font-serif italic font-normal text-indigo-brand">
                    performanței
                  </span>
                  .
                </h2>
                <p className="mt-4 text-base text-ivory/60 md:mt-6 md:text-lg">
                  Fiecare comunitate este un ecosistem autonom de învățare și networking de elită.
                </p>
              </div>
              <span className="shrink-0 font-mono text-[10px] tracking-tight text-indigo-brand md:text-sm">
                ESTB. 1998
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
            {communities.map((c, idx) => (
              <ScrollReveal
                key={c.id}
                delay={idx * 150}
                animation="fade-up"
                className={c.span}
              >
                <article
                  className={`group relative flex min-h-[280px] h-full w-full flex-col justify-end overflow-hidden rounded-3xl border p-6 smooth-hover-card sm:p-8 md:min-h-[400px] ${
                    c.highlight
                      ? "border-transparent bg-indigo-brand hover:brightness-110"
                      : "border-ivory/5 bg-dark-surface hover:border-indigo-brand/50"
                  }`}
                >
                  {c.image && (
                    <div className="absolute inset-0 z-0 opacity-30">
                      <img
                        src={c.image}
                        alt=""
                        className="h-full w-full object-cover smooth-hover-image"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/60 to-transparent" />
                    </div>
                  )}
                  <div className="absolute right-6 top-6 sm:right-8 sm:top-8">
                    <span
                      className={`font-mono text-[10px] tracking-tight ${c.highlight ? "text-ivory/60" : "text-ivory/30"
                        }`}
                    >
                      {c.tag}
                    </span>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold sm:text-3xl">{c.title}</h3>
                    <p
                      className={`mt-2 max-w-sm text-sm ${c.highlight ? "text-ivory/80" : "text-ivory/50"
                        }`}
                    >
                      {c.desc}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPARTAMENTE */}
      <section id="departamente" className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="clip-reveal">
            <div className="mb-12 max-w-2xl md:mb-16">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-indigo-brand">
                — Departamente
              </p>
              <h2 className="text-balance text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
                Cum <span className="font-serif italic font-normal text-indigo-brand">funcționăm</span>.
              </h2>
              <p className="mt-4 text-base text-dark/60 md:text-lg">
                Fiecare departament este o școală în sine. Alege unde vrei să crești.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {departments.map((d, idx) => (
              <ScrollReveal
                key={d.title}
                delay={(idx % 3) * 120 + Math.floor(idx / 3) * 80}
                animation="fade-up"
              >
                <div
                  className="group h-full rounded-2xl border border-dark/5 bg-white p-6 smooth-hover-card hover:border-indigo-brand/30 hover:shadow-xl hover:shadow-indigo-brand/5 md:p-8"
                >
                  <div className="mb-6 grid size-11 place-items-center rounded-xl bg-indigo-brand/10">
                    <DeptIcon name={d.icon} />
                  </div>
                  <h3 className="text-lg font-bold md:text-xl">{d.title}</h3>
                  <p className="mt-2 text-sm text-dark/60">{d.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* NUMERE — indigo band with backdrop word */}
      <section className="relative overflow-hidden bg-indigo-brand py-20 text-ivory md:py-28">
        <span
          aria-hidden
          className="pointer-events-none absolute -top-4 left-0 select-none whitespace-nowrap font-serif text-[22vw] font-bold leading-none tracking-tighter text-ivory/10 md:-top-8"
        >
          numere
        </span>
        <div className="container relative z-10 mx-auto px-6">
          <div className="mt-24 grid grid-cols-2 gap-8 md:mt-32 md:grid-cols-4 md:gap-6">
            {stats.map((s, idx) => (
              <ScrollReveal
                key={s.label}
                delay={idx * 100}
                animation="fade-up"
                className="border-t border-ivory/20 pt-4"
              >
                <p className="font-serif text-4xl font-bold leading-none md:text-6xl lg:text-7xl">
                  {s.value}
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-ivory/70 md:text-xs">
                  {s.label}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROIECTE */}
      <section id="proiecte" className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="clip-reveal">
            <div className="mb-12 max-w-2xl md:mb-16">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-indigo-brand">
                — Proiecte
              </p>
              <h2 className="text-balance text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
                Ce construim <span className="font-serif italic font-normal text-indigo-brand">împreună</span>.
              </h2>
              <p className="mt-4 text-base text-dark/60 md:text-lg">
                Inițiative cu impact real, gândite și livrate de studenți pentru studenți.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {projects.map((p, idx) => (
              <ScrollReveal
                key={p.title}
                delay={idx * 150}
                animation="fade-up"
              >
                <article
                  className="group h-full overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-dark/5 smooth-hover-card hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover smooth-hover-image"
                      loading="lazy"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-ivory/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-brand backdrop-blur">
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-6 md:p-7">
                    <h3 className="font-serif text-xl font-bold md:text-2xl">{p.title}</h3>
                    <p className="mt-2 text-sm text-dark/60">{p.desc}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALE */}
      <section id="testimoniale" className="relative overflow-hidden bg-dark py-24 text-ivory md:py-32">
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-6 right-0 select-none whitespace-nowrap font-serif italic text-[22vw] font-bold leading-none tracking-tighter text-indigo-brand/20"
        >
          voci
        </span>
        <div className="container relative z-10 mx-auto px-6">
          <ScrollReveal animation="clip-reveal">
            <div className="mb-12 max-w-2xl md:mb-16">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-indigo-brand">
                — Testimoniale
              </p>
              <h2 className="text-balance text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
                Poveștile <span className="font-serif italic font-normal text-indigo-brand">lor</span>.
              </h2>
              <p className="mt-4 text-base text-ivory/60 md:mt-6 md:text-lg">
                Oameni reali, transformări reale. Ei au prins aripi cu VIP.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <ScrollReveal
                key={t.name}
                delay={idx * 150}
                animation="fade-up"
              >
                <figure
                  className="flex h-full flex-col justify-between rounded-3xl border border-ivory/10 bg-dark-surface p-7 smooth-hover-card md:p-8"
                >
                  <div>
                    <svg className="mb-4 size-6 text-indigo-brand" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 7h4v4H8c0 2 1 3 3 3v3c-4 0-6-2-6-6V7zm9 0h4v4h-3c0 2 1 3 3 3v3c-4 0-6-2-6-6V7z" />
                    </svg>
                    <blockquote className="font-serif text-lg italic leading-relaxed text-ivory/90 md:text-xl">
                      „{t.quote}"
                    </blockquote>
                  </div>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-ivory/10 pt-5">
                    {idx === 0 ? (
                      <img src={portraitImg} alt={t.name} className="size-11 rounded-full object-cover" loading="lazy" />
                    ) : (
                      <div className="grid size-11 place-items-center rounded-full bg-indigo-brand/20 text-sm font-bold text-indigo-brand">
                        {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold">{t.name}</p>
                      <p className="truncate text-[11px] text-ivory/50">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTENERI — infinite marquee */}
      <section id="parteneri" className="border-y border-dark/5 bg-ivory py-16 md:py-20">
        <p className="mb-10 text-center text-[10px] uppercase tracking-[0.3em] text-dark/40 md:mb-12">
          Alături de cei mai buni parteneri
        </p>
        <div
          className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
        >
          <div className="flex w-max animate-marquee gap-16 pr-16 group-hover:[animation-play-state:paused] md:gap-24 md:pr-24">
            {[...partners, ...partners].map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="font-serif text-2xl font-bold tracking-tight text-dark/40 transition-colors hover:text-indigo-brand md:text-4xl"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="intrebari" className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto max-w-3xl px-6">
          <ScrollReveal animation="clip-reveal">
            <div className="mb-12 md:mb-16">
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-indigo-brand">
                — Întrebări frecvente
              </p>
              <h2 className="text-balance text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
                Tot ce vrei <span className="font-serif italic font-normal text-indigo-brand">să știi</span>.
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {faqs.map((f, idx) => {
              const open = openFaq === idx;
              return (
                <ScrollReveal
                  key={f.q}
                  delay={idx * 80}
                  animation="fade-up"
                >
                  <div
                    className={`overflow-hidden rounded-2xl border transition-all ${
                      open ? "border-indigo-brand/30 bg-white" : "border-dark/5 bg-white/50"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(open ? null : idx)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={open}
                    >
                      <span className="text-sm font-bold md:text-base">{f.q}</span>
                      <span
                        className={`grid size-7 shrink-0 place-items-center rounded-full border border-dark/10 text-dark/60 transition-transform ${
                          open ? "rotate-45 border-indigo-brand/40 text-indigo-brand" : ""
                        }`}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3.5">
                          <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
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

      {/* FINAL CTA */}
      <section id="despre" className="bg-ivory pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-indigo-brand px-6 py-20 text-center text-ivory md:px-12 md:py-28">
            <div className="absolute -bottom-24 -left-24 size-96 rounded-full bg-ivory/10 blur-[120px]" />
            <div className="absolute -top-24 -right-24 size-96 rounded-full bg-ivory/5 blur-[120px]" />
            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-balance font-serif text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                Gata să prinzi <span className="italic">aripi</span>?
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-base text-ivory/80 md:mt-8 md:text-lg">
                Aplicațiile pentru noua generație VIP sunt deschise. Locurile sunt limitate — fă primul pas azi.
              </p>
              <div className="mt-10">
                <Link
                  to="/aplica"
                  className="inline-flex items-center gap-2 rounded-full bg-ivory px-10 py-4 text-xs font-bold uppercase tracking-widest text-indigo-brand transition-all hover:bg-dark hover:text-ivory"
                >
                  Înscrie-te acum
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
                    <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
