import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { VipStructure } from "@/components/vip-structure";

// Assets
import beachGroupLarge from "@/assets/beach-group-large.png";
import beachGroup from "@/assets/beach-group.png";
import officeGroup from "@/assets/office-group.png";

// BEX Members Images
import ericImg from "@/assets/BEX 2025/Eric.jpg";
import anduImg from "@/assets/BEX 2025/Andu Nacu.JPG";
import annaImg from "@/assets/VIP/anna_edited.jpg";
import ioanImg from "@/assets/BEX 2025/Ioan Danciu.jpg";
import andreiImg from "@/assets/BEX 2025/Andrei Radu.jpg";
import rebeccaImg from "@/assets/BEX 2025/Rebecca.jpg";
import victorImg from "@/assets/BEX 2025/Victor Luncasu.jpg";
import anastasiaImg from "@/assets/BEX 2025/SIA.jpg";
import gabiImg from "@/assets/BEX 2025/gabi.jpg";
import mateiImg from "@/assets/BEX 2025/Matei Negru.jpg";
import saraImg from "@/assets/BEX 2025/Sara Teodorescu.JPEG";
import ralucaImg from "@/assets/BEX 2025/Raluca Ciobanu.jpg";

export const Route = createFileRoute("/despre-noi")({
  component: DespreNoiPage,
});

const TEAM_MEMBERS = [
  { name: "Eric Coșulea", role: "Președinte", email: "eric.cosulea@vipromania.ro", image: ericImg },
  { name: "Andu Nacu", role: "Vicepreședinte", email: "andu.nacu@vipromania.ro", image: anduImg },
  { name: "Anna Filip", role: "Cenzor", email: "anna.filip@vipromania.ro", image: annaImg },
  { name: "Ioan Danciu", role: "Manager Business Club", email: "ioan.nicolae@vipromania.ro", image: ioanImg },
  { name: "Andrei Radu", role: "Manager Econosofia", email: "radu.andrei@vipromania.ro", image: andreiImg },
  { name: "Rebecca Boloi", role: "Manager International Affairs", email: "rebecca.boloi@vipromania.ro", image: rebeccaImg },
  { name: "Victor Luncașu", role: "Manager Leadership Development", email: "victor.luncasu@vipromania.ro", image: victorImg },
  { name: "Anastasia Munteanu", role: "Manager Business Development", email: "anastasia.munteanu@vipromania.ro", image: anastasiaImg },
  { name: "Gabriel Iorga", role: "Manager Creative", email: "gabriel.iorga@vipromania.ro", image: gabiImg },
  { name: "Matei Negru", role: "Manager Human Resources", email: "matei.negru@vipromania.ro", image: mateiImg },
  { name: "Sara Teodorescu", role: "Manager Marketing", email: "sara.teodorescu@vipromania.ro", image: saraImg },
  { name: "Raluca Ciobanu", role: "Manager Public Relations", email: "raluca.ciobanu@vipromania.ro", image: ralucaImg },
];

const VALUES = [
  {
    title: "Profesionalism",
    desc: "Standardele înalte și angajamentul față de excepțional ne definesc activitatea.",
    icon: (
      <svg className="w-8 h-8 text-indigo-brand transition-transform group-hover:scale-110 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Leadership",
    desc: "Inspirăm schimbarea prin exemplu și sprijinim dezvoltarea personală și profesională.",
    icon: (
      <svg className="w-8 h-8 text-indigo-brand transition-transform group-hover:scale-110 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Inițiativă",
    desc: "Încurajăm ideile noi și acțiunile proactive care fac diferența.",
    icon: (
      <svg className="w-8 h-8 text-indigo-brand transition-transform group-hover:scale-110 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12z" />
      </svg>
    ),
  },
  {
    title: "Spirit de echipă",
    desc: "Colaborăm deschis și ne susținem reciproc pentru a atinge obiective comune.",
    icon: (
      <svg className="w-8 h-8 text-indigo-brand transition-transform group-hover:scale-110 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197" />
      </svg>
    ),
  },
  {
    title: "Etică",
    desc: "Respectăm principiile morale, transparența deciziilor și responsabilitatea față de oameni și mediu.",
    icon: (
      <svg className="w-8 h-8 text-indigo-brand transition-transform group-hover:scale-110 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

const TIMELINE = [
  {
    year: "1998",
    title: "Apariția proiectelor naționale VIP",
    desc: "Au fost lansate inițiative cu tradiție precum „Școala de Vară a secolului 21” și competiția „Studentul Anului”.",
  },
  {
    year: "1999",
    title: "Primele cluburi & primul proiect ASE în țară",
    desc: "S-au pus bazele primelor cluburi profesionale: Econosofia și Business Club, aducând abordări noi în mediul studențesc.",
  },
  {
    year: "2001 - 2005",
    title: "Noi proiecte în București",
    desc: "S-au lansat proiecte educaționale valoroase: Investment School, Economics through a Macrofying Glass și programul practic Good to Go.",
  },
  {
    year: "2005",
    title: "Înființarea departamentului Relații Externe (REX)",
    desc: "Organizația a creat primele departamente interne de suport din nevoia de structurare și coordonare a proiectelor naționale.",
  },
  {
    year: "2011",
    title: "VIP se împarte în 4 comunități",
    desc: "Cluburile de studiu se transformă în comunități specifice. Se lansează Leadership Development și International Affairs (continuatoare a departamentului REX).",
  },
  {
    year: "2020",
    title: "Creșterea și dezvoltarea organizației",
    desc: "VIP continuă proiectele sale de tradiție și inițiază noi evenimente adaptate timpurilor moderne, continuând să transforme potențialul tinerilor în excepțional.",
  },
  {
    year: "2022",
    title: "Revenirea 100% în offline după Pandemie",
    desc: "Asociația revine în totalitate la activitățile, conferințele și bootcamp-urile fizice, reînnodând conexiunile directe dintre membri.",
  },
  {
    year: "2023",
    title: "Sărbătorirea a 25 de ani de activitate",
    desc: "Un moment de retrospectivă și aniversare a unei comunități extinse ce numără sute de alumni și zeci de proiecte cu impact național.",
  },
];

function TeamAvatar({ name, image }: { name: string; image?: string }) {
  const [hasError, setHasError] = useState(false);
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);

  if (hasError || !image) {
    return (
      <div className="w-full h-full bg-indigo-brand/5 text-indigo-brand flex flex-col items-center justify-center text-center select-none font-serif italic text-lg border border-indigo-brand/10 transition-all duration-300 group-hover:bg-indigo-brand/10">
        <span>{initials}</span>
      </div>
    );
  }

  return (
    <img
      src={image}
      alt={name}
      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
      onError={() => setHasError(true)}
    />
  );
}

function DespreNoiPage() {
  return (
    <div className="min-h-screen bg-ivory text-dark overflow-x-hidden">
      <SiteNav />

      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={beachGroupLarge}
            alt="Voluntari pentru Idei si Proiecte"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ivory" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center text-ivory">
          <ScrollReveal animation="fade-up">
            <span className="rounded-full bg-white/20 border border-white/30 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-ivory backdrop-blur-md">
              Despre Noi
            </span>
          </ScrollReveal>

          <ScrollReveal animation="clip-reveal" delay={150}>
            <h1 className="mt-8 text-balance text-4xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Voluntari pentru Idei și Proiecte
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <p className="mt-8 text-pretty text-base font-normal leading-relaxed text-ivory/80 md:text-lg lg:text-xl max-w-3xl mx-auto">
              Credem că oamenii excepționali pot face o schimbare în societate și de aceea investim în tinerii cu potențial. Pe parcursul celor 27 ani de existență pe piața ONG-urilor, VIP și-a propus să formeze pilonii societății de mâine.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={450}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeiu5v_t-RCf_pfDm7pa5ohJ_aTicOy2dINeNhTrUQ0XH1MzQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-indigo-brand px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:brightness-110 shadow-lg shadow-indigo-brand/20 active:scale-[0.98]"
              >
                Înscrie-te
              </a>
              <a
                href="https://formular230.ro/voluntari-pentru-idei-si-proiecte"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-white/20 backdrop-blur-md active:scale-[0.98]"
              >
                Donează 3.5%
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. STRUCTURA ORGANIZATIONALA */}
      <section className="relative bg-ivory py-20 md:py-28 overflow-hidden border-b border-dark/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollReveal animation="clip-reveal" className="mb-12 text-center">
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-indigo-brand">— Arhitectura Noastră</p>
            <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Structura organizațională
            </h2>
            <p className="mt-4 text-sm text-dark/60 leading-relaxed md:text-base max-w-2xl mx-auto">
              VIP are o structură organizată pe trei piloni: 4 comunități, 5 departamente și 6 proiecte.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="rounded-3xl border border-indigo-brand/10 bg-[#EBF1FF]/20 p-4 md:p-8 backdrop-blur-sm">
              <VipStructure />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. MISIUNE & VIZIUNE */}
      <section className="relative bg-white py-24 md:py-32 overflow-hidden border-b border-dark/5">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Mission Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal animation="fade-up">
              <div className="overflow-hidden rounded-3xl shadow-md border border-dark/5">
                <img
                  src={officeGroup}
                  alt="Misiunea VIP"
                  className="h-full w-full object-cover aspect-[4/3] hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={150}>
              <div className="text-left">
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-indigo-brand mb-4">— Misiunea Noastră</p>
                <blockquote className="font-serif italic font-medium text-2xl md:text-3xl text-indigo-brand leading-relaxed">
                  „Organizația își rezervă misiunea de a transforma potențialul în excepțional, investind în tinerii care își doresc contexte de dezvoltare, atât profesionale, cât și personale.”
                </blockquote>
              </div>
            </ScrollReveal>
          </div>

          {/* Vision Block */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center mt-24 md:mt-32">
            <ScrollReveal animation="fade-up" className="order-2 md:order-1">
              <div className="text-left">
                <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-indigo-brand mb-4">— Viziunea Noastră</p>
                <blockquote className="font-serif italic font-medium text-2xl md:text-3xl text-indigo-brand leading-relaxed">
                  „Viziunea VIP: Credem că oamenii excepționali pot face o schimbare în societate.”
                </blockquote>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={150} className="order-1 md:order-2">
              <div className="overflow-hidden rounded-3xl shadow-md border border-dark/5">
                <img
                  src={beachGroup}
                  alt="Viziunea VIP"
                  className="h-full w-full object-cover aspect-[4/3] hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. SETUL DE VALORI */}
      <section className="relative bg-ivory py-24 md:py-32 overflow-hidden border-b border-dark/5">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <ScrollReveal animation="clip-reveal" className="mb-16">
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-indigo-brand">— Busola Noastră</p>
            <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Setul de valori care ne ghidează în orice decizie
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
            {VALUES.map((val, idx) => (
              <ScrollReveal
                key={val.title}
                delay={idx * 100}
                animation="fade-up"
              >
                <div className="group flex h-full flex-col justify-start rounded-3xl border border-white/60 bg-white/40 p-6 md:p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.03)] backdrop-blur-md hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.08)] hover:bg-white/60 transition-all duration-300">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-indigo-brand/5 group-hover:bg-indigo-brand/10 transition-colors duration-300">
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-dark mb-3">
                    {val.title}
                  </h3>
                  <p className="text-xs text-dark/60 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. POVESTEA NOASTRA (TIMELINE) */}
      <section className="relative bg-white py-24 md:py-32 overflow-hidden border-b border-dark/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal animation="clip-reveal" className="mb-16 text-center">
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-indigo-brand">— Istoric</p>
            <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Povestea noastră
            </h2>
          </ScrollReveal>

          <div className="relative border-l border-indigo-brand/20 ml-4 md:ml-6 space-y-12">
            {TIMELINE.map((step, idx) => (
              <ScrollReveal
                key={step.year + idx}
                delay={idx * 75}
                animation="fade-up"
              >
                <div className="relative pl-8 md:pl-10 text-left">
                  {/* Timeline point */}
                  <span className="absolute -left-[9px] top-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full border border-indigo-brand bg-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-brand animate-pulse" />
                  </span>
                  
                  {/* Timeline content */}
                  <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-4">
                    <span className="font-mono text-2xl font-black tracking-tight text-indigo-brand leading-none">
                      {step.year}
                    </span>
                    <h3 className="text-lg font-bold text-dark tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs md:text-sm text-dark/60 leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ECHIPA DIN SPATE */}
      <section className="relative bg-ivory py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl text-center">
          <ScrollReveal animation="clip-reveal" className="mb-16">
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-indigo-brand">— Conducerea VIP</p>
            <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Echipa din spate
            </h2>
            <p className="mt-4 text-sm text-dark/60 leading-relaxed md:text-base max-w-2xl mx-auto">
              Biroul executiv din VIP este format din 12 persoane: președinte, vicepreședinte, cenzor, 4 manageri de comunitate & 5 manageri de departament.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {TEAM_MEMBERS.map((member, idx) => (
              <ScrollReveal
                key={member.name}
                delay={idx * 50}
                animation="fade-up"
              >
                <div className="group flex h-full flex-col justify-start rounded-3xl border border-white/60 bg-white/40 p-4 hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] hover:bg-white/60 transition-all duration-300">
                  {/* Avatar wrapper */}
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-indigo-brand/5 shadow-inner">
                    <TeamAvatar name={member.name} image={member.image} />
                  </div>

                  {/* Text details */}
                  <div className="mt-4 text-left px-1">
                    <h3 className="font-bold text-sm tracking-tight text-dark">
                      {member.name}
                    </h3>
                    <p className="text-[10px] font-bold text-indigo-brand/70 uppercase tracking-wider mt-0.5">
                      {member.role}
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      className="mt-3 block text-[10px] text-dark/40 hover:text-indigo-brand transition-colors font-mono underline decoration-dotted"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
