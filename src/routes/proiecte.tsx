import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";

// Import Project Logos
import codeSocietyLogo from "@/assets/2025-2026/CODE SOCIETY.png";
import sparkLogo from "@/assets/2025-2026/SPARK.png";
import sdvLogo from "@/assets/2025-2026/SDV.png";
import reelSelfLogo from "@/assets/2025-2026/REELSELF.png";
import meaLogo from "@/assets/2025-2026/MEA.png";
import leadershapeLogo from "@/assets/2025-2026/LDS.png";
import funkyLogo from "@/assets/2025-2026/FUNKY.png";
import investmentSchoolLogo from "@/assets/2025-2026/IS.png";
import studentulAnuluiLogo from "@/assets/2025-2026/STUDENTUL ANULUI.png";
import yafLogo from "@/assets/2025-2026/YAF.png";

// Import Testimonial Photos
import lauraImg from "@/assets/logouri si altele/laura_edited.jpg";
import bulentImg from "@/assets/logouri si altele/bulent.jpg";
import andreiCImg from "@/assets/logouri si altele/andrei constantin.jpg";
import mariaCImg from "@/assets/logouri si altele/Maria Chitu.png";
import beachGroupLarge from "@/assets/beach-group-large.png";

export const Route = createFileRoute("/proiecte")({
  component: ProiectePage,
});

const PROJECTS = [
  {
    title: "Code Society",
    desc: "Code Society este o inițiativă pilot care conectează tineri pasionați de tehnologie prin conferințe și workshop-uri despre AI, Cybersecurity, Web Development și Cloud & DevOps, creând un ecosistem de învățare, colaborare și dezvoltare.",
    logo: codeSocietyLogo,
    activities: ["Campanii de Tech marketing", "Editare video & design tech", "Social Media Marketing", "Performance Marketing"],
  },
  {
    title: "Young Ambasadors Forum",
    desc: "Young Ambassadors Forum aduce studenți internaționali pasionați de diplomație și afaceri globale, facilitând dezbateri, workshopuri și networking. Partenerii sprijină formarea tinerilor lideri și se aliniază cu teme internaționale relevante.",
    logo: yafLogo,
    activities: ["Contactare speakeri internaționali", "Dezbateri & Negocieri diplomatice", "Branding & Media Relations", "Logistică eveniment"],
  },
  {
    title: "Studentul Anului",
    desc: "Studentul Anului evidențiază studenți excelenți printr-o provocare reală oferită de parteneri, completată de workshop-uri și mentorat. Pentru companii, proiectul este o oportunitate de talent acquisition și consolidare a imaginii de angajatori de top.",
    logo: studentulAnuluiLogo,
    activities: ["Employer Branding", "Evaluare candidaturi", "Networking cu companii", "Gală de premiere"],
  },
  {
    title: "Spark",
    desc: "Spark este un incubator social pentru studenți, oferind cunoștințe și experiență în antreprenoriat și finanțare. Partenerii contribuie la dezvoltarea tinerilor și își consolidează imaginea de angajatori responsabili social.",
    logo: sparkLogo,
    activities: ["Social Entrepreneurship", "Pitching sessions", "Sponsorizări & Bugetare", "Workshop-uri de business"],
  },
  {
    title: "Școala de Vară",
    desc: "Școala de Vară, cu 26 de ani tradiție, pregătește studenții pentru viața adultă prin workshop-uri multidisciplinare, dezvoltare personală și competențe practice, oferind partenerilor vizibilitate și acces la tineri pregătiți.",
    logo: sdvLogo,
    activities: ["Dezvoltare personală", "Experiențe practice outdoor", "Coordonare program intensiv", "Branding de eveniment"],
  },
  {
    title: "ReelSelf",
    desc: "ReelSelf este o academie media care ajută studenții să înțeleagă impactul conținutului online și să-și dezvolte abilități digitale prin traininguri, practică și competiții. Pentru parteneri, oferă acces direct la viitori creatori și metode inovatoare de promovare.",
    logo: reelSelfLogo,
    activities: ["Content Creation", "Editare video & audio", "Digital Marketing", "Personal branding"],
  },
  {
    title: "MEA (Marketing Experience Academy)",
    desc: "MEA oferă studenților o experiență 360° în marketing, combinând 10 traininguri cu rezolvarea unui brief real sub mentorat. Pentru parteneri, proiectul este o oportunitate de talent acquisition și poziționare strategică în fața tinerelor generații.",
    logo: meaLogo,
    activities: ["Rezolvare brief-uri reale", "Training-uri cu experți", "Strategie de marketing 360", "Prezentare pitch"],
  },
  {
    title: "Leader Shape",
    desc: "Leadershape formează viitoarea generație de lideri, oferind tinerilor competențe solide și un brief real evaluat de profesioniști. Partenerii câștigă vizibilitate ca angajatori de top și susținători ai dezvoltării studenților.",
    logo: leadershapeLogo,
    activities: ["Coordonare echipe", "Gândire critică", "Managementul conflictelor", "Inteligență emoțională"],
  },
  {
    title: "Funky VIPcast",
    desc: "Funky VIPcast este un podcast de la tineri pentru tineri care are ca scop îndrumarea tinerilor care sunt în căutarea unei perspective proprii asupra vieții. Un podcast autentic și vibrant, cu invitați relevanți și discuții sincere despre generația Z, oferind tinerilor relatabilitate, iar partenerilor o oportunitate valoroasă de employer branding.",
    logo: funkyLogo,
    activities: ["Interviuri cu invitați", "Concept creativ & scenarii", "Social Media & Reels", "Sunet & Producție"],
  },
  {
    title: "Investment School",
    desc: "Cu o tradiție de 24 de ediții, Investment School este rampa de lansare pentru studenții pasionați de finanțe. În trei etape – Beginners, Advanced și IS PRO (finală tip CFA Challenge) – îmbină cunoștințe solide cu experiență practică, deschizând drumul spre o carieră accelerată și conexiuni esențiale cu lideri din domeniul financiar.",
    logo: investmentSchoolLogo,
    activities: ["Investiții & Piețe de capital", "Simulări de tranzacționare", "Evaluare portofolii", "CFA Challenge preparation"],
  }
];

const TESTIMONIALS = [
  {
    name: "Maria Chițu",
    role: "Președinte VIP 2024-2025",
    com: "Business Club",
    year: "2022",
    quote: "Pentru mine VIP înseamnă evoluție continuă și accelerată. Organizația m-a crescut într-un adult responsabil și capabil, dar cel mai important m-a înconjurat de oameni valoroși, alături de care am putut construi prietenii frumoase și proiecte de impact.",
    image: mariaCImg,
  },
  {
    name: "Laura Soroceanu",
    role: "Project Manager Young Ambassadors Forum",
    com: "International Affairs",
    year: "2022",
    quote: "Am intrat în primul an de facultate în căutarea unui loc unde să mă pot dezvolta, să pot lua inițiativă și să cunosc oameni care să mă sprijine. VIP a ieșit în calea mea, iar de atunci am tot găsit oportunități și prieteni care să mă ducă mai aproape de obiectivele mele.",
    image: lauraImg
  },
  {
    name: "Bülent Duagi",
    role: "Membru BOD",
    com: "Leadership Development",
    year: "2008",
    quote: "Pentru mine, experiența VIP a fost ceva ce mi-a schimbat major traiectoria în viață. Am avut ocazia să vin cu idei îndrăznețe și să lucrez cu colegi remarcabili la proiecte prin care am simțit că avem un impact în jurul nostru. Asta mi-a dat curaj și încredere pe mai departe, că pot iniția schimbări și pot crea un impact mare în orice context decid să mă implic.",
    image: bulentImg
  },
  {
    name: "Andrei Constantin",
    role: "Membru BOD",
    com: "International Affairs",
    year: "2018",
    quote: "VIP pentru mine a fost plasa de siguranță în timpul studenției. A fost locul în care am simțit că pot face greșeli, pot învăța și pot fi alături de oameni care împărtășesc aceleași valori ca și mine. Aici pot spune că am reușit să pun o cărămidă extrem de puternică a persoanei care sunt astăzi. Organizația mi-a oferit resurse, oportunități și suport. Iar cel mai important lucru cu care am rămas sunt oamenii care au ajuns să îmi devină prieteni!",
    image: andreiCImg
  }
];

export function ProiectePage() {
  return (
    <div className="min-h-screen bg-ivory text-dark overflow-x-hidden">
      <SiteNav />

      {/* HERO SECTION */}
      <section className="relative flex min-h-[75vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={beachGroupLarge}
            alt="Membri VIP organizând proiecte"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ivory" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center text-ivory">
          <ScrollReveal animation="fade-up">
            <span className="rounded-full bg-white/20 border border-white/30 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-ivory backdrop-blur-md">
              Activitate Practică
            </span>
          </ScrollReveal>

          <ScrollReveal animation="clip-reveal" delay={150}>
            <h1 className="mt-8 text-balance text-4xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Proiectele Noastre
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-sm text-ivory/80 sm:mt-8 sm:text-base md:text-lg">
              Proiectele VIP sunt „produsul” care reiese în urma experienței studentului VIP. Ele sunt organizate complet de la zero de către membrii nou intrați în asociație, oferindu-le șansa de a-și pune noile abilități de marketing, PR, design și business development direct în practică.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* INTRO GRID INFO */}
      <section className="bg-white py-16 md:py-24 border-t border-dark/5">
        <div className="container mx-auto px-6 max-w-5xl text-center md:text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-up">
              <h2 className="text-3xl font-extrabold text-dark tracking-tight sm:text-4xl">
                Ce se întâmplă în proiecte?
              </h2>
              <p className="mt-4 text-sm text-dark/70 leading-relaxed md:text-base">
                Proiectele VIP sunt modalitatea noastră principală de a oferi educație non-formală gratuită studenților din România. Ca membru, vei învăța cum să dezvolți campanii media, să administrezi bugete, să contractezi sponsori corporativi și speakeri de top. Această experiență practică accelerează formarea ta ca lider și te pregătește pentru o carieră de succes.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={150}>
              <div className="rounded-3xl bg-[#EBF1FF] border border-indigo-brand/10 p-8 shadow-inner text-left">
                <h3 className="font-bold text-indigo-brand text-lg mb-4">Imaginea de ansamblu:</h3>
                <p className="text-xs text-dark/80 leading-relaxed">
                  Odată ce intri în VIP, ești repartizat într-o comunitate tematică și un departament de suport. Cunoștințele teoretice obținute în prima parte a anului vor fi valorificate imediat în organizarea unuia dintre cele 10 proiecte de anvergură. Vei colabora direct cu colegi din toate departamentele și vei lucra la un proiect real, cu impact asupra mii de participanți.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* PROJECTS LIST */}
      <section className="bg-ivory py-16 md:py-24 border-t border-dark/5">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col gap-16 md:gap-24">
            {PROJECTS.map((proj, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <ScrollReveal
                  key={proj.title}
                  delay={100}
                  animation="fade-up"
                  className={`flex flex-col gap-8 md:gap-12 items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Image Column */}
                  <div className="w-full md:w-[40%] flex justify-center">
                    <div className="w-full max-w-[280px] aspect-square rounded-[2rem] bg-white border border-dark/5 p-8 flex items-center justify-center shadow-md hover:-translate-y-1.5 hover:shadow-xl hover:border-indigo-brand/20 transition-all duration-300 group cursor-pointer">
                      <img
                        src={proj.logo}
                        alt={`Logo ${proj.title}`}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Info Column */}
                  <div className="w-full md:w-[60%] text-left">
                    <h3 className="text-2xl font-black text-indigo-brand tracking-tight md:text-3xl">
                      {proj.title}
                    </h3>
                    <p className="mt-4 text-sm text-dark/80 leading-relaxed">
                      {proj.desc}
                    </p>

                    <h4 className="mt-6 font-bold text-xs uppercase tracking-wider text-dark/90 mb-3">
                      Ce o să faci aici:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {proj.activities.map((act) => (
                        <div key={act} className="flex items-center gap-2 text-xs font-semibold text-dark/70">
                          <svg
                            className="size-4 text-indigo-brand flex-shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white py-24 md:py-32 border-t border-dark/5 relative overflow-hidden">
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-6 right-0 select-none whitespace-nowrap font-serif italic text-[10vw] md:text-[16vw] font-bold leading-none tracking-tighter text-indigo-brand/5"
        >
          testimoniale
        </span>
        <div className="container relative z-10 mx-auto px-6 max-w-5xl">
          <ScrollReveal animation="clip-reveal" className="mb-16 text-center">
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-indigo-brand">— Povești reale</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              Ce spun organizatorii noștri
            </h2>
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <ScrollReveal key={t.name} delay={idx * 100} animation="fade-up">
                <div className="rounded-[2rem] bg-white border border-indigo-brand/20 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start text-left shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-xl hover:border-indigo-brand/45 hover:scale-[1.01] transition-all duration-300 cursor-pointer group">
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className="size-20 md:size-24 rounded-2xl overflow-hidden shadow-sm border border-indigo-brand/10 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center bg-indigo-brand/5 text-indigo-brand">
                      {t.image ? (
                        <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-[12px] font-extrabold uppercase tracking-wider">
                          {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                      <div>
                        <h4 className="text-base font-extrabold text-dark tracking-tight">{t.name}</h4>
                        <p className="text-[11px] font-bold text-indigo-brand/70 uppercase tracking-wider mt-0.5">{t.role}</p>
                      </div>
                      <div className="text-left sm:text-right mt-1 sm:mt-0 font-mono text-[9px] text-dark/40 uppercase">
                        Comunitate: <span className="font-bold text-indigo-brand/80">{t.com}</span> · An: <span className="font-bold text-dark/80">{t.year}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-xs text-dark/70 leading-relaxed md:text-sm font-normal italic">
                      „{t.quote}”
                    </p>
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
