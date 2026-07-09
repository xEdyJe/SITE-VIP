import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { VipStructure } from "@/components/vip-structure";

// Import assets
import heroImg from "@/assets/hero.jpg";
import businessImg from "@/assets/business.jpg";
import academyImg from "@/assets/academy.jpg";
import portraitImg from "@/assets/portrait.jpg";
import econosofiaImg from "@/assets/econosofia.jpg";
import internationalAffairsImg from "@/assets/international-affairs.jpg";
import leadershipImg from "@/assets/leadership.jpg";

// Communities Data Map
const COMMUNITIES_DATA = {
  "business-club": {
    id: "business-club",
    title: "Business Club",
    tag: "BC",
    description: "Comunitatea din VIP în care studenții ambițioși învață să devină antreprenori de succes.",
    image: businessImg,
    accentClass: "text-orange-600",
    bgClass: "bg-orange-600",
    borderClass: "border-orange-600/30",
    focusBorderClass: "focus:border-orange-600",
    accentLight: "bg-orange-600/5",
    hoverBg: "hover:bg-orange-700",
    shadowClass: "shadow-orange-600/20",
    badgeBg: "bg-orange-100 text-orange-700",
    mission: "Misiunea Business Club este să inspire și să dezvolte tinerii pasionați de antreprenoriat, oferindu-le contextul ideal pentru a-și transforma ideile în realitate. Promovăm inovația, colaborarea și dezvoltarea continuă prin mentorat, workshop-uri și networking de top.",
    learnings: [
      { title: "Mindset", desc: "În Business Club, îți dezvolți abilitățile de leadership și îți construiești o mentalitate orientată spre succes. Aici înveți să gândești strategic, să îți depășești limitele și să îți transformi viziunea în realitate.", logo: "🧠" },
      { title: "Generare și validare", desc: "De la inspirație la execuție – înveți să identifici probleme reale, să generezi soluții creative și să îți validezi ideile rapid. Fiecare concept este o șansă de a construi ceva cu impact, iar noi te ghidăm să reușești.", logo: "💡" },
      { title: "Creșterea business-ului", desc: "Să folosești tehnologia, să înțelegi aspectele legale și financiare, și să atragi resursele necesare pentru a-ți scala ideea. Indiferent dacă ești la început sau cauți să crești, aici înveți să-ți dezvolți afacerea cu încredere.", logo: "📈" }
    ],
    stats: [
      { value: "20", text: "Proiecte realizate cu succes și impact real." },
      { value: "200+", text: "Alumni conectați și care continuă sa ne ajute in drumul antreprenorial." },
      { value: "50", text: "Membri activi care participă și se implică." },
      { value: "500", text: "Participanți in cadrul proiectelor care impartasesc spiritul antreprenorial." },
      { value: "26", text: "Ani de cand Business Club a fost infiintat si a inceput sa ajute tinerii pasionati de antreprenoriat." }
    ],
    testimonials: [
      { name: "Alin Enache", role: "Project Manager ReelSelf", year: "2023", quote: "Business Club a fost si este cea mai transformativa experienta din viata mea. Mi-a pus in fata oameni absolut minunati si like-minded, m-a invatat sa comunic eficient si sa am curaj - iar asta o spune cineva care a fost inchis in sine marea majoritate a vietii. Aici am invatat lucruri pe care nici o carte, curs sau seminar nu mi le puteau arata vreodata." },
      { name: "Irina Zota", role: "Founder Izzie Publishing", year: "2022", quote: "Business Club a fost o experienta incredibila pentru mine. Am descoperit o comunitate dinamica, plina de oameni pasionați și motivați, care m-au inspirat să-mi duc ideile la un alt nivel. Sprijinul și oportunitățile oferite aici sunt cu adevărat valoroase, iar mediul te provoacă constant să crești." }
    ],
    ctaText: "Investește în viitorul liderilor de business din România."
  },
  "econosofia": {
    id: "econosofia",
    title: "Econosofia",
    tag: "ECO",
    description: "Analiză macroeconomică, dezbateri financiare și fundamente economice solide pentru minți curioase.",
    image: econosofiaImg,
    accentClass: "text-sky-600",
    bgClass: "bg-sky-600",
    borderClass: "border-sky-600/30",
    focusBorderClass: "focus:border-sky-600",
    accentLight: "bg-sky-600/5",
    hoverBg: "hover:bg-sky-700",
    shadowClass: "shadow-sky-600/20",
    badgeBg: "bg-sky-100 text-sky-700",
    mission: "Misiunea Econosofia este de a aduce claritate în fenomenele economice complexe, educând studenții să gândească analitic, critic și argumentat. De la macroeconomie la politici publice, oferim resurse intelectuale de elită.",
    learnings: [
      { title: "Analiză macro", desc: "Înveți să înțelegi indicatorii economici globali, politicile monetare și fiscale, și cum influențează acestea piețele internaționale și viața de zi cu zi.", logo: "📊" },
      { title: "Gândire critică", desc: "Dezvolți capacitatea de a demonta mituri economice populare și de a evalua bazat pe date concrete deciziile guvernamentale și corporative globale.", logo: "🔍" },
      { title: "Cercetare și publicistică", desc: "Înveți să scrii analize de calitate, să structurezi studii economice și să prezinți argumentat concluzii în fața specialiștilor din industrie.", logo: "✍️" }
    ],
    stats: [
      { value: "15", text: "Proiecte de analiză macroeconomică publicate." },
      { value: "150+", text: "Alumni care lucrează în bănci centrale, consultanță și instituții financiare." },
      { value: "45", text: "Membri activi pasionați de teoria și practica economică." },
      { value: "300", text: "Participanți la workshop-urile deschise de economie." },
      { value: "22", text: "Ani de excelență academică și promovare a economiei sănătoase." }
    ],
    testimonials: [
      { name: "Bogdan Marin", role: "Economist, BNR", year: "2021", quote: "Econosofia mi-a oferit structura mentală necesară pentru a înțelege cum funcționează de fapt mecanismele financiare. Discuțiile noastre din comunitate erau de o calitate rară în spațiul academic românesc." },
      { name: "Ioana Vlad", role: "Equity Analyst, London", year: "2020", quote: "Comunitatea în care am învățat să pun întrebări economice incomode. Aici am dobândit rigurozitatea analitică care m-a ajutat să îmi lansez cariera în banking la Londra." }
    ],
    ctaText: "Investește în viitorul analiștilor economici din România."
  },
  "international-affairs": {
    id: "international-affairs",
    title: "International Affairs",
    tag: "IA",
    description: "Diplomație, geopolitică și viziune globală asupra lumii moderne pentru viitorii lideri globali.",
    image: internationalAffairsImg,
    accentClass: "text-indigo-600",
    bgClass: "bg-indigo-600",
    borderClass: "border-indigo-600/30",
    focusBorderClass: "focus:border-indigo-600",
    accentLight: "bg-indigo-600/5",
    hoverBg: "hover:bg-indigo-700",
    shadowClass: "shadow-indigo-600/20",
    badgeBg: "bg-indigo-100 text-indigo-700",
    mission: "Misiunea International Affairs este să formeze o generație de tineri conectați global, capabili să decodifice tensiunile geopolitice și să navigheze cu diplomație în mediul internațional public și privat.",
    learnings: [
      { title: "Negociere", desc: "Depășești bariere de comunicare, înveți tehnici avansate de negociere bilaterală și strategii de soluționare a conflictelor diplomatice.", logo: "🤝" },
      { title: "Analiză geopolitică", desc: "Dobândești o înțelegere profundă a relațiilor internaționale, a zonelor de conflict și a tendințelor de securitate din întreaga lume.", logo: "🌍" },
      { title: "Global mindset", desc: "Construiești o perspectivă globală, multiculturală, esențială pentru a activa în organizații transnaționale sau în diplomație.", logo: "🗺️" }
    ],
    stats: [
      { value: "18", text: "Simulări de summit-uri internaționale și dezbateri politice." },
      { value: "180+", text: "Alumni care lucrează în diplomație, think-tank-uri sau corporații globale." },
      { value: "40", text: "Membri activi antrenați în studii diplomatice." },
      { value: "400", text: "Participanți anual la modelul nostru de conferință diplomatică." },
      { value: "24", text: "Ani de formare a spiritului critic global și a dialogului constructiv." }
    ],
    testimonials: [
      { name: "Radu Sandu", role: "Consilier Politic, Bruxelles", year: "2022", quote: "International Affairs m-a ajutat să trec de la simplul interes pentru știri globale la analiza structurală a deciziilor luate de marile puteri. A fost primul meu pas către Uniunea Europeană." },
      { name: "Elena Stoica", role: "Analist de Securitate", year: "2021", quote: "Dezbaterile tensionate și simulările de crize geopolitice m-au învățat să îmi păstrez calmul și să găsesc soluții sub presiune. O comunitate de mentori excepționali." }
    ],
    ctaText: "Investește în viitorul liderilor geopolitici din România."
  },
  "leadership-development": {
    id: "leadership-development",
    title: "Leadership Development",
    tag: "LD",
    description: "Dezvoltare personală accelerată, inteligență emoțională și managementul echipelor complexe.",
    image: leadershipImg,
    accentClass: "text-emerald-600",
    bgClass: "bg-emerald-600",
    borderClass: "border-emerald-600/30",
    focusBorderClass: "focus:border-emerald-600",
    accentLight: "bg-emerald-600/5",
    hoverBg: "hover:bg-emerald-700",
    shadowClass: "shadow-emerald-600/20",
    badgeBg: "bg-emerald-100 text-emerald-700",
    mission: "Misiunea Leadership Development este să descopere și să cultive potențialul maxim din fiecare student, oferind instrumente practice de autocunoaștere, public speaking, comunicare asertivă și management de proiect.",
    learnings: [
      { title: "Inteligență emoțională", desc: "Învățați să vă înțelegeți emoțiile, să empatizați cu membrii echipei și să creați un climat de siguranță psihologică propice performanței.", logo: "❤️" },
      { title: "Management de echipă", desc: "Dobândești strategii clare de coordonare a proiectelor complexe, delegare eficientă, motivare a voluntarilor și management de conflict.", logo: "👥" },
      { title: "Public speaking", desc: "Îți perfecționezi discursul, prezența scenică și capacitatea de a livra mesaje cu impact ridicat în fața unor audiențe mari.", logo: "🎤" }
    ],
    stats: [
      { value: "25", text: "Programe intensive de mentorship și leadership derulate." },
      { value: "250+", text: "Alumni care conduc echipe în mari companii sau își dezvoltă propriile proiecte." },
      { value: "55", text: "Membri activi care își dezvoltă potențialul de lider." },
      { value: "600", text: "Studenți care au participat la bootcamp-urile noastre de dezvoltare personală." },
      { value: "20", text: "Ani de inspirație și transformare personală pentru membrii noștri." }
    ],
    testimonials: [
      { name: "Mihai Stoian", role: "HR Manager, Corporate", year: "2022", quote: "BOOTCAMP-ul și sesiunile din LD m-au forțat să ies din zona de confort. Am învățat cum să fiu un lider pe care oamenii vor să îl urmeze, nu doar un manager." },
      { name: "Corina Matei", role: "Co-Founder & Coach", year: "2020", quote: "Leadership Development a fost exact catalizatorul de care aveam nevoie. Am descoperit ce înseamnă responsabilitatea, vulnerabilitatea în echipă și cum să construiesc comunități." }
    ],
    ctaText: "Investește în viitorul liderilor autentici din România."
  }
};

export const Route = createFileRoute("/comunitati/$id")({
  component: CommunityPage,
});

function CommunityPage() {
  const { id } = Route.useParams();
  const data = COMMUNITIES_DATA[id as keyof typeof COMMUNITIES_DATA];

  if (!data) {
    throw notFound();
  }

  // Gallery images mockup using existing project pictures
  const galleryImages = [
    { src: businessImg, alt: "Mentorship session" },
    { src: academyImg, alt: "Team presentation" },
    { src: heroImg, alt: "Outdoor teambuilding" },
    { src: portraitImg, alt: "Networking gathering" }
  ];

  return (
    <div className="min-h-screen bg-ivory text-dark">
      <SiteNav />

      {/* 1. HERO SECTION */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={data.image}
            alt={data.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/65" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ivory" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center text-ivory">
          <ScrollReveal animation="clip-reveal">
            <span className={`rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest ${data.badgeBg}`}>
              Comunitate · {data.tag}
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="clip-reveal" delay={150}>
            <h1 className="mt-8 text-balance text-4xl font-bold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              {data.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base text-ivory/80 sm:mt-8 sm:text-lg md:text-xl">
              {data.description}
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={450}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/aplica"
                search={{ community: data.title }}
                className={`w-full rounded-full ${data.bgClass} px-8 py-4 text-xs font-bold uppercase tracking-widest text-ivory shadow-xl ${data.shadowClass} transition-all duration-300 hover:brightness-110 sm:w-auto`}
              >
                Înscrie-te
              </Link>
              <a
                href="#donatie"
                className="w-full rounded-full border border-ivory/30 bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-widest text-ivory transition-colors hover:bg-ivory hover:text-dark sm:w-auto"
              >
                Donează 3.5%
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. INTERACTIVE ORGANIZATIONAL TREE CHART */}
      <section className="bg-ivory py-16 md:py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="clip-reveal" className="mb-12 text-center">
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-dark/50">Organizare internă</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              Un ONG de la studenți, <span className="font-serif italic font-normal text-indigo-brand">pentru studenți</span>.
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={150}>
            <VipStructure activeCommunityId={data.id as any} />
          </ScrollReveal>
        </div>
      </section>

      {/* 3. MISSION SECTION */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <ScrollReveal animation="fade-up">
              <h3 className={`font-serif text-2xl font-bold leading-relaxed italic md:text-3xl lg:text-4xl ${data.accentClass}`}>
                {data.mission}
              </h3>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200} className="relative overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src={data.image}
                alt="Community life"
                className="w-full object-cover aspect-[4/3] smooth-hover-image"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. CE INVEȚI SECTION */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="clip-reveal" className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              Ce înveți în <span className="font-serif italic font-normal text-indigo-brand">{data.title}</span>?
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {data.learnings.map((l, idx) => (
              <ScrollReveal
                key={l.title}
                delay={idx * 150}
                animation="fade-up"
                className="group flex flex-col items-center rounded-3xl border border-dark/5 bg-white p-8 text-center smooth-hover-card"
              >
                <div className={`mb-6 grid size-16 place-items-center rounded-2xl ${data.accentLight} text-3xl`}>
                  {l.logo}
                </div>
                <h3 className="text-lg font-bold text-dark md:text-xl">{l.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-dark/60">{l.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GALLERY SECTION */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal animation="clip-reveal" className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              {data.title} în acțiune
            </h2>
            <p className="mt-4 text-sm text-dark/60 leading-relaxed">
              De la sesiuni de mentorat și workshop-uri pline de inspirație, până la momente de relaxare și distracție alături de colegi. Vezi mai jos cum arată parcursul nostru!
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {galleryImages.map((img, idx) => (
              <ScrollReveal
                key={idx}
                delay={idx * 100}
                animation="fade-up"
                className="group relative aspect-square overflow-hidden rounded-2xl shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover smooth-hover-image"
                  loading="lazy"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. NUMBERS SECTION */}
      <section className={`relative overflow-hidden ${data.bgClass} py-24 text-ivory md:py-32`}>
        <span
          aria-hidden
          className="pointer-events-none absolute -top-4 left-0 select-none whitespace-nowrap font-serif text-[22vw] font-bold leading-none tracking-tighter text-white/5 md:-top-8"
        >
          numere
        </span>
        <div className="container relative z-10 mx-auto max-w-3xl px-6">
          <div className="mt-8 flex flex-col gap-6">
            {data.stats.map((s, idx) => (
              <ScrollReveal
                key={idx}
                delay={idx * 80}
                animation="fade-up"
                className="flex flex-col gap-3 border-t border-white/20 pt-6 sm:flex-row sm:items-start"
              >
                <span className="font-serif text-5xl font-bold leading-none min-w-[120px] md:text-6xl">
                  {s.value}
                </span>
                <span className="mt-2 text-sm text-white/80 leading-relaxed sm:mt-1">
                  {s.text}
                </span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS SECTION */}
      <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-6 right-0 select-none whitespace-nowrap font-serif italic text-[22vw] font-bold leading-none tracking-tighter text-dark/5"
        >
          testimoniale
        </span>
        
        <div className="container relative z-10 mx-auto px-6">
          <ScrollReveal animation="clip-reveal" className="mb-16 text-center">
            <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-dark/50">— Experiențe reale</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              Ce spun absolvenții noștri
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {data.testimonials.map((t, idx) => (
              <ScrollReveal
                key={t.name}
                delay={idx * 150}
                animation="fade-up"
              >
                <div className={`flex flex-col md:flex-row gap-6 rounded-3xl ${data.bgClass} p-8 text-white shadow-xl ${data.shadowClass} smooth-hover-card h-full`}>
                  {/* Avatar/Portrait Mock */}
                  <div className="size-16 shrink-0 rounded-2xl bg-white/25 flex items-center justify-center font-bold text-xl text-white">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-mono uppercase tracking-widest text-white/60">
                        Absolvent · Promotie {t.year}
                      </span>
                      <p className="mt-3 text-sm leading-relaxed text-white/90">
                        „{t.quote}”
                      </p>
                    </div>
                    <div className="mt-6 border-t border-white/10 pt-4">
                      <p className="text-sm font-bold">{t.name}</p>
                      <p className="text-[10px] text-white/60">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" className="mt-16 text-center">
            <Link
              to="/aplica"
              search={{ community: data.title }}
              className={`inline-flex rounded-full ${data.bgClass} px-8 py-4 text-xs font-bold uppercase tracking-widest text-ivory transition-all hover:brightness-110 shadow-lg ${data.shadowClass}`}
            >
              Înscrie-te în {data.title}
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. CTA DONATION BANNER */}
      <section id="donatie" className={`border-t border-white/10 ${data.bgClass} py-16 text-white`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-12">
            <ScrollReveal animation="fade-up" className="max-w-xl">
              <h2 className="text-balance text-2xl font-serif font-bold italic md:text-3xl lg:text-4xl">
                {data.ctaText}
              </h2>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={150}>
              <a
                href="https://vipromania.ro/doneaza"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-white bg-transparent px-10 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-dark whitespace-nowrap"
              >
                Donează 3.5%
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
