import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";

// Category 1: Parteneri Financiari
import bcrLogo from "@/assets/logouri si altele/BCR - logo pagina parteneri.png";
import mazarsLogo from "@/assets/logouri si altele/Mazars - logo pagina parteneri.png";
import heinekenLogo from "@/assets/logouri si altele/Heineken-Logo.png";

// Category 2: Parteneri Strategici
import leadersLogo from "@/assets/logouri si altele/LEADERS - logo pagina parteneri.png";
import spacesLogo from "@/assets/logouri si altele/Spaces - logo pagina parteneri.png";
import betahausLogo from "@/assets/logouri si altele/Betahaus - logo pagina parteneri.png";
import coworkperativaLogo from "@/assets/logouri si altele/Coworkperativa - logo pagina parteneri.png";
import mindspaceLogo from "@/assets/logouri si altele/Mindspace - logo pagina parteneri.png";
import v7Logo from "@/assets/logouri si altele/v7 - logo pagina parteneri.png";
import geycLogo from "@/assets/logouri si altele/Geyc - logo pagina parteneri.png";
import undeLucramLogo from "@/assets/logouri si altele/Unde Lucrăm - logo pagina parteneri.png";
import hipoLogo from "@/assets/logouri si altele/hipo.png";
import aSpacesLogo from "@/assets/logouri si altele/aSpaces - logo pagina parteneri.png";

// Category 3: Parteneri In-kind
import lensaLogo from "@/assets/logouri si altele/Lensa - logo pagina parteneri.png";
import sneakerLogo from "@/assets/logouri si altele/Sneaker Industry - logo pagina parteneri.png";
import pepsicoLogo from "@/assets/logouri si altele/Pepsico - logo pagina parteneri.png";
import maspexLogo from "@/assets/logouri si altele/Maspex - logo pagina parteneri.png";
import danoneLogo from "@/assets/logouri si altele/Danone - logo pagina parteneri.png";
import artesanaLogo from "@/assets/logouri si altele/Artesana - logo pagina parteneri.png";
import sloopLogo from "@/assets/logouri si altele/Sloop - logo pagina parteneri.png";
import berlinerLogo from "@/assets/logouri si altele/Berliner Donuts - logo pagina parteneri.png";
import cerealCrunchLogo from "@/assets/logouri si altele/Cereal Crunch - logo pagina parteneri.png";
import lorealLogo from "@/assets/logouri si altele/Loreal-Logo.jpg";
import fiveToGoLogo from "@/assets/logouri si altele/5 to go - logo pagina parteneri.png";
import boutiqueLogo from "@/assets/logouri si altele/Boutique Cadeaux - logo pagina parteneri.png";

// Category 4: Parteneri Logistici
import laFantanaLogo from "@/assets/logouri si altele/La Fantana - logo pagina parteneri.png";
import woltLogo from "@/assets/logouri si altele/Wolt - logo pagina parteneri.png";
import tazzLogo from "@/assets/logouri si altele/Tazz by Emag.png";
import vmaxLogo from "@/assets/logouri si altele/VMax - logo pagina parteneri.png";
import trueSocialLogo from "@/assets/logouri si altele/True Social Club - logo pagina parteneri.png";
import belugaLogo from "@/assets/logouri si altele/Beluga - logo pagina parteneri.png";
import gildaLogo from "@/assets/logouri si altele/Gilda - logo pagina parteneri.png";
import altfelLogo from "@/assets/logouri si altele/Altfel - logo pagina parteneri.png";
import ursusLogo from "@/assets/logouri si altele/Ursus - logo pagina parteneri.png";
import trendLogo from "@/assets/logouri si altele/Trend - logo pagina parteneri.png";
import fwdPrintLogo from "@/assets/logouri si altele/FWDPrint - logo pagina parteneri.jpg";

// Category 5: Parteneri Media
import zfLogo from "@/assets/logouri si altele/Ziarul Financiar - logo pagina parteneri.png";
import prAwardsLogo from "@/assets/logouri si altele/Romanian PR Awards - logo pagina parteneri.png";
import socialPediaLogo from "@/assets/logouri si altele/SocialPedia - logo pagina parteneri.png";
import evensysLogo from "@/assets/logouri si altele/Evensys - logo pagina parteneri.png";
import voluntxLogo from "@/assets/logouri si altele/VOLUNTX - Pagina parteneri site.png";
import youthCentreLogo from "@/assets/logouri si altele/Youth Centre - logo pagina parteneri.png";

export const Route = createFileRoute("/parteneri")({
  component: ParteneriPage,
});

const PARTNERS_CATEGORIES = [
  {
    title: "Parteneri Financiari",
    subtitle: "Companii care susțin financiar inițiativele și proiectele noastre educaționale.",
    list: [
      { name: "BCR", logo: bcrLogo },
      { name: "Mazars", logo: mazarsLogo },
      { name: "Heineken", logo: heinekenLogo }
    ]
  },
  {
    title: "Parteneri Strategici",
    subtitle: "Organizații și spații de coworking care ne oferă consultanță și context de lucru.",
    list: [
      { name: "Leaders", logo: leadersLogo },
      { name: "Spaces", logo: spacesLogo },
      { name: "Betahaus", logo: betahausLogo },
      { name: "Coworkperativa", logo: coworkperativaLogo },
      { name: "Mindspace", logo: mindspaceLogo },
      { name: "V7 Startup Studio", logo: v7Logo },
      { name: "Geyc", logo: geycLogo },
      { name: "Unde Lucrăm", logo: undeLucramLogo },
      { name: "Hipo", logo: hipoLogo },
      { name: "aSpaces", logo: aSpacesLogo }
    ]
  },
  {
    title: "Parteneri In-kind",
    subtitle: "Parteneri care contribuie prin produse, servicii sau resurse materiale dedicate membrilor.",
    list: [
      { name: "Lensa", logo: lensaLogo },
      { name: "Sneaker Industry", logo: sneakerLogo },
      { name: "PepsiCo", logo: pepsicoLogo },
      { name: "Maspex", logo: maspexLogo },
      { name: "Danone", logo: danoneLogo },
      { name: "Artesana", logo: artesanaLogo },
      { name: "Sloop", logo: sloopLogo },
      { name: "Berliner Donuts", logo: berlinerLogo },
      { name: "Cereal Crunch", logo: cerealCrunchLogo },
      { name: "L'Oréal", logo: lorealLogo },
      { name: "5 to go", logo: fiveToGoLogo },
      { name: "Boutique Cadeaux", logo: boutiqueLogo }
    ]
  },
  {
    title: "Parteneri Logistici",
    subtitle: "Parteneri care asigură infrastructura, livrarea, transportul și locațiile evenimentelor noastre.",
    list: [
      { name: "La Fântâna", logo: laFantanaLogo },
      { name: "Wolt", logo: woltLogo },
      { name: "Tazz", logo: tazzLogo },
      { name: "VMax", logo: vmaxLogo },
      { name: "True Social Club", logo: trueSocialLogo },
      { name: "Beluga", logo: belugaLogo },
      { name: "Gilda", logo: gildaLogo },
      { name: "Altfel", logo: altfelLogo },
      { name: "Ursus", logo: ursusLogo },
      { name: "Trend", logo: trendLogo },
      { name: "FWDPrint", logo: fwdPrintLogo }
    ]
  },
  {
    title: "Parteneri Media",
    subtitle: "Canale de presă și comunicare care promovează campaniile și evenimentele noastre în spațiul public.",
    list: [
      { name: "Ziarul Financiar", logo: zfLogo },
      { name: "Romanian PR Awards", logo: prAwardsLogo },
      { name: "SocialPedia", logo: socialPediaLogo },
      { name: "Evensys", logo: evensysLogo },
      { name: "VoluntX", logo: voluntxLogo },
      { name: "Youth Centre", logo: youthCentreLogo }
    ]
  }
];

export function ParteneriPage() {
  return (
    <div className="min-h-screen bg-ivory text-dark overflow-x-hidden">
      <SiteNav />

      {/* HERO SECTION */}
      <section className="relative bg-ivory pt-36 pb-16 md:pt-48 md:pb-24 overflow-hidden">
        {/* Animated fluid mesh circles behind */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-indigo-brand/5 blur-3xl" />
        <div className="absolute bottom-10 right-10 size-80 rounded-full bg-[#EBF1FF] blur-3xl" />

        <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
          <ScrollReveal animation="fade-up">
            <span className="rounded-full bg-indigo-brand/10 text-indigo-brand px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest">
              Colaborări
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="clip-reveal" delay={150}>
            <h1 className="mt-8 text-balance text-4xl font-extrabold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-dark">
              Partenerii Noștri
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <p className="mx-auto mt-8 max-w-2xl text-pretty text-sm leading-relaxed text-dark/70 sm:text-base md:text-lg">
              Credem că oamenii excepționali pot face o schimbare în societate și de aceea investim în tinerii cu potențial. Pe parcursul celor 27 ani de existență pe piața ONG-urilor, VIP și-a propus să formeze pilonii societății de mâine prin sprijinul oferit de parteneri de elită.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CATEGORIES SECTIONS */}
      {PARTNERS_CATEGORIES.map((cat, catIdx) => (
        <section
          key={cat.title}
          className={`py-16 md:py-24 border-t border-dark/5 ${
            catIdx % 2 === 0 ? "bg-white" : "bg-ivory/30"
          }`}
        >
          <div className="container mx-auto px-6 max-w-6xl">
            {/* Category Header */}
            <ScrollReveal animation="clip-reveal" className="mb-12 text-left">
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-indigo-brand">
                — {cat.title}
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-dark sm:text-3xl">
                {cat.title}
              </h2>
              <p className="mt-2 text-xs text-dark/60 max-w-xl">
                {cat.subtitle}
              </p>
            </ScrollReveal>

            {/* Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {cat.list.map((p, idx) => (
                <ScrollReveal
                  key={p.name}
                  delay={idx * 40}
                  animation="fade-up"
                  className="group relative aspect-video rounded-3xl border border-indigo-brand/10 bg-white p-5 flex items-center justify-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-indigo-brand/25 cursor-pointer shadow-sm"
                >
                  <img
                    src={p.logo}
                    alt={`Logo ${p.name}`}
                    className="max-w-full max-h-full object-contain filter group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA SECTION */}
      <section className="bg-ivory py-16 md:py-20 border-t border-dark/5">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <ScrollReveal animation="fade-up">
            <h2 className="text-2xl font-bold tracking-tight text-dark sm:text-3xl">
              Vrei să fii partenerul nostru?
            </h2>
            <p className="mt-4 text-sm text-dark/60 leading-relaxed">
              Hai să construim împreună proiecte de succes și să investim în viitoarea generație de lideri și profesioniști ai României.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:contact@vipromania.ro"
                className="rounded-full bg-indigo-brand px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-indigo-brand/95 hover:scale-[1.03] shadow-md shadow-indigo-brand/10 inline-flex items-center justify-center"
              >
                Devino Partener
              </a>
              <Link
                to="/aplica"
                className="rounded-full border border-dark/15 bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-dark transition-all hover:bg-ivory hover:scale-[1.03] inline-flex items-center justify-center"
              >
                Înscrie-te în VIP
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
