import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  VipDepartmentsStructure,
  MarketingIcon,
  PublicRelationsIcon,
  CreativeIcon,
  HumanResourcesIcon,
  BusinessDevelopmentIcon,
} from "@/components/vip-departments-structure";

// Standard Assets
import officeGroup from "@/assets/office-group.png";
import portraitImg from "@/assets/portrait.jpg";

export const Route = createFileRoute("/departamente")({
  head: () => ({
    meta: [
      { title: "Departamente — VIP Romania" },
      {
        name: "description",
        content:
          "Descoperă cele 5 departamente funcționale din VIP Romania: Marketing, Public Relations, Creative, Human Resources și Business Development.",
      },
      { property: "og:title", content: "Departamente — VIP Romania" },
      {
        property: "og:description",
        content: "Află mai multe despre cum funcționăm și unde poți să crești în cadrul VIP Romania.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: DepartamentePage,
});

// --- DEPARTMENTS DATASET ---

const DEPARTMENTS_DATA = {
  marketing: {
    id: "marketing",
    title: "Marketing",
    icon: "marketing",
    desc: "Strategie de brand, social media, campanii digitale și promovare vizuală.",
    detailDesc:
      "Aici ne ocupăm de crearea și gestionarea strategiilor eficiente de social media, dezvoltând campanii inovative de digital marketing. Înveți să utilizezi instrumente precum Meta Ads, sa creezi strategii de comunicare și promovare unice și să implementezi tactici care maximizează impactul mesajului transmis.",
    activities: ["Campanii", "Social Media Marketing", "Editare video", "Performance Marketing"],
    illustration: MarketingIcon,
    testimonials: [
      {
        name: "Ema Grigorcea",
        role: "Manager Marketing 2024-2025",
        quote:
          "Departamentul de Marketing m-a ajutat enorm să mă dezvolt atât personal, cât și profesional. Aici am descoperit cât de creativ și dinamic este acest domeniu și cum pot transforma idei în realitate. Ca manager de marketing, cea mai mare realizare pentru mine este să știu că pot inspira încredere în echipă și în ideile lor. Marketingul nu e doar despre promovare, ci și despre construirea unor relații autentice și de încredere cu oamenii, fie că e vorba de echipă sau de public.",
        imageFile: "ema-grigorcea.jpg",
      },
      {
        name: "Cristian Cojocăriță",
        role: "Manager Marketing 2022-2023",
        quote:
          "Departamentul de Marketing m-a învățat că ideile bune sunt amplificate de o strategie bună. De la postări pe social media, la email marketing și paid ads, în VIP ai șansa să îți formezi mai mult decât o bază despre marketing, care te poate ajuta să te angajezi în domeniu, sau să folosești skilluri în orice proiect pe viitor.",
        imageFile: "cristian-cojocarita.jpg",
      },
      {
        name: "Alin Enache",
        role: "Marketing Officer \"GoodToGo\" 2023-2024",
        quote:
          "Dacă aș scrie despre cât de mult îmi place Marketing-ul, probabil aș vorbi despre partea psihologică — că îți arată cum funcționează lumea; sau despre creativitate, sau valoarea sa ca unealtă de afaceri. Dar nu voi spune asta. Voi spune că întrupez marketing-ul. Sunt un marketer și o spun cu mândrie, pentru că nu e doar despre vânzări, metrici și cifre, nici măcar despre a împacheta frumos un produs sau o firmă. Ca marketer, sunt un agent al schimbării — trag să îmbunătățesc viețile oamenilor pe care îi servesc, și asta prin îmbunătățirea mea proprie și a ceea ce ofer. Trăiesc după asta. Și n-aș vrea să fie altfel.",
        imageFile: "alin-enache.jpg",
      },
    ],
  },
  "public-relations": {
    id: "public-relations",
    title: "Public Relations",
    icon: "pr",
    desc: "Imaginea publică, relația cu presa, comunicate și parteneriate media.",
    detailDesc:
      "Vei fi introdus în domeniul de relații publice, unde vei învăța metode eficiente de comunicare în extern și cum să păstrezi o imagine publică pozitivă prin organizare de evenimente și crearea unui lanț de parteneri media.",
    activities: [
      "Organizare de evenimente",
      "Copywriting & Content Writing",
      "Menținerea unei reputații pozitive în extern",
      "Parteneriate media",
    ],
    illustration: PublicRelationsIcon,
    testimonials: [
      {
        name: "Maria Pîrvu",
        role: "PR Manager 2023-2024",
        quote:
          "Departamentul Public Relations a fost locul perfect în care am putut să dobândesc cunoștințe noi și să descopăr ce înseamnă cu adevărat industria comunicării. De la event planning, public speaking, copywriting, campanii și până la crisis management, am acumulat experiențe esențiale pentru cariera mea.",
        imageFile: "maria-pirvu.jpg",
      },
      {
        name: "Lorena Radu",
        role: "PR Officer Storytelling Night 2023-2024",
        quote:
          "Departamentul de PR a fost o surpriză incredibilă pentru mine, m-a ajutat să mă regăsesc și să îmi descopăr potențialul imens pe care îl am în acest domeniu. Mi-a dat oportunitatea de a învăța practic cum să am o exprimare și o structură cât mai corectă în copywriting și content writing, dar mai ales cum să organizez evenimente de la A la Z. Acesta mi-a deschis orizonturi noi și a reușit să mă dezvolte într-o persoană mult mai deschisă, comunicativă și pasionată de ceea ce face.",
        imageFile: "lorena-radu.jpg",
      },
      {
        name: "Daria Roman",
        role: "PR Manager 2021-2022",
        quote:
          "Pentru mine PR-ul a fost o călătorie despre oameni, despre comunitate și despre importanța lui în organizație. Mi-am dorit să conturez o comunitate de durată cu oameni care erau curioși să descopere mai multe despre PR într-un context fun. Dacă ar fi să sumarizez experiența mea în trei cuvinte ar fi: inspirație, conectare și progres.",
        imageFile: "daria-roman.jpg",
      },
      {
        name: "Alexandra Scutaru",
        role: "PR",
        quote:
          "VIP-ul m-a ajutat să văd ce înseamnă cu adevărat PR-ul. Este mai mult decât ce știam eu până atunci, și anume scrisul de copy-uri pentru postări. PR înseamnă organizare de evenimente (partea mea favorită), comunicare de criză, content writing, copywriting și multe altele pe care ai ocazia să le descoperi prin VIP! Dă-i o șansă, ieși din zona ta de confort și implică-te! You can do this. 🫶",
        imageFile: "alexandra-scutaru.jpg",
      },
      {
        name: "Cosmina Dobre",
        role: "PR Officer \"Marketing Experience Academy\" 2023-2024",
        quote:
          "Pentru mine faptul că m-am axat pe departamentul de PR a fost cea mai bună alegere, mi s-a părut unul complex, care mi-a oferit oportunitatea de a mă dezvolta pe foarte multe planuri. Am învățat să fiu mai coerentă în exprimare, să mă adaptez publicului țintă și tone of voice-ului ales prin partea de copywriting, dar și să trec peste teama de a interacționa cu persoane noi, într-un cadru profesional prin contactări. Faptul că echipa a fost așa lovely și mediul de învățare din cadrul trainingurilor a fost foarte friendly a contribuit mult la întreaga experiență.",
        imageFile: "cosmina-dobre.jpg",
      },
    ],
  },
  creative: {
    id: "creative",
    title: "Creative",
    icon: "creative",
    desc: "Design grafic premium, dezvoltare de website-uri și producție multimedia.",
    detailDesc:
      "Aici ne concentrăm pe arta storytelling-ului prin branding, dezvoltând povești vizuale care dau viață identității unei organizații. Înveți să utilizezi diverse programe de editare foto și design grafic, explorând instrumente esențiale.",
    activities: ["Branding", "Campanii", "Editare foto", "Creative Direction"],
    illustration: CreativeIcon,
    testimonials: [
      {
        name: "Teodora Petcu",
        role: "Creative",
        quote:
          "Pentru mine, VIP este locul în care latura mea creativă a prins curaj. Deși nu aveam experiență multă în design, echipa din departamentul de Creative m-a susținut și îndrumat spre a-mi exprima ideile și a le transforma în realitate.",
        imageFile: "teodora-petcu.jpg",
      },
      {
        name: "Ana Popescu",
        role: "Creative",
        quote:
          "VIP pentru mine a fost plasa de siguranță în timpul studenției. A fost locul în care am simțit că pot face greseli, pot învăța și pot fi alături de oameni care împărtășesc aceleași valori ca și mine. Aici pot spune că am reușit să pun o cărămidă extrem de puternică a persoanei care sunt astăzi. Organizația mi-a oferit resurse, oportunități și suport. Iar cel mai important lucru cu care am rămas sunt oamenii care au ajuns să îmi devină prieteni!",
        imageFile: "ana-popescu.jpg",
      },
      {
        name: "Vlăduț-Nicolae Andrei",
        role: "Creative",
        quote:
          "Departamentul de Creative este locul unde poți învăța cum să aduci ideile la realitate, cum să faci cele mai atractive vizualuri și unde poți colabora strâns cu celelalte persoane cel puțin la fel de pasionate ca și tine. \"Creativity is intelligence having fun\"",
        imageFile: "vladut-andrei.jpg",
        borderCircle: "border-4 border-[#C1183E]",
      },
    ],
  },
  "human-resources": {
    id: "human-resources",
    title: "Human Resources",
    icon: "hr",
    desc: "Recrutare, integrarea noilor membri, teambuilding-uri și dezvoltarea echipei.",
    detailDesc:
      "Aici vei învăța care sunt etapele unei recrutări de succes, atât în ONG-uri, cât și în cele mai mari companii, strategii de employer branding și cum sunt acestea folosite de angajatori, evaluarea performanței prin tehnici de livrare de feedback, crearea unui CV perfect și cultura organizațională din medii corporate.",
    activities: ["Recrutare & Selecție", "Employer Branding", "Evaluare Performanță"],
    illustration: HumanResourcesIcon,
    testimonials: [
      {
        name: "Hîrștioaga Patricia",
        role: "Manager 2023-2024",
        quote:
          "Postura de manager HR în cadrul VIP a fost o provocare, dar și o oportunitate de descoperire și dezvoltare a propriei persoane. De la coordonarea unor procese complexe până la simpla interacțiune cu oamenii, toate acestea m-au dezvoltat la nivel profesional cât și personal, completându-mi studenția în cel mai frumos mod posibil",
        imageFile: "hirstioaga-patricia.jpg",
      },
      {
        name: "Alexandru Ghiță",
        role: "HR Officer, HR Becoming 2024",
        quote:
          "Experiența mea în departamentul de HR și de HR driver a fost una care mi-a schimbat percepția asupra relațiilor umane. Pentru mine, HR-ul este cu și despre oameni, unde te poți cunoaște mai bine pe sine, dar și pe cei din jur, iar tu ai șansa să fii cel ce dezvoltă motivația și reușita echipelor din care faci parte! Aceasta este o oportunitate pe care nu o mai întâlnești!",
        imageFile: "alexandru-ghita.jpg",
      },
    ],
  },
  "business-development": {
    id: "business-development",
    title: "Business Development",
    icon: "bd",
    desc: "Parteneriate comerciale, sponsorizări corporate și atragere de resurse financiare.",
    detailDesc:
      "Aici vei învăța să cercetezi piața și să dezvolți relații cu companiile cheie, dobândind abilități de comunicare, strategie, negociere și persuasiune, ieșind constant din zona de confort.",
    activities: ["Parteneriate", "Networking valoros", "Dezvoltarea relațiilor de business", "Gândire strategică"],
    illustration: BusinessDevelopmentIcon,
    testimonials: [
      {
        name: "Anna Filip",
        role: "Manager 2024-2025",
        quote:
          "Experiența mea în cadrul departamentului de Business Development a fost, fără îndoială, una transformatoare. Participarea la diverse activități mi-a oferit nu doar o bază teoretică solidă, ci și experiențe practice esențiale care mi-au consolidat încrederea și competențele. Prin implicarea activă și dorința de a valorifica cunoștințele acumulate, am ajuns, un an mai târziu, să preiau rolul de Manager al departamentului. Această poziție a fost o etapă fundamentală în dezvoltarea mea, contribuind totodata în mod activ la succesul și creșterea organizației.",
        imageFile: "anna-filip.jpg",
      },
      {
        name: "Daria Glonțeanu",
        role: "Manager 2023-2024",
        quote:
          "Business Development pentru mine este mai mult decat un spatiu de invatare si dezvoltare accelerata, este locul care te aduce mai aproape de oportunitati reale si conecteaza studentii cu jucatorii mari de pe piata, fiind “motorul” organizatiei. BD a fost singurul departament care mi-a oferit acces la un pachet esential de skill-uri si cunostinte, care m-a scos din zona de confort si care mi-a dat sansa de a ma apropia semnificativ de versiunea mea ideala.",
        imageFile: "daria-glonteanu.jpg",
      },
      {
        name: "Andreea Boangher",
        role: "Manager 2022-2023",
        quote:
          "Experienta din departamentul de Business Development mi-a schimbat viata. Am pornit la acest drum cu conceptia “vanzarile nu sunt pentru mine”, ca mai apoi sa realizez ca devin pe zi ce trece din ce in ce mai pasionata de acest domeniu. Acest lucru s-a datorat numeroaselor activitati la care am participat, care mi-au construit si consolidat atat o baza teoretica, dar mai ales una practica. Astfel, din dorinta de a valorifica si de a da mai departe informatiile si cunostintele acumulate, am devenit un an mai tarziu managerul departamentului, etapa din viata mea care m-a ajutat mult in formarea mea ca om.",
        imageFile: "andreea-boangher.jpg",
      },
    ],
  },
};

type DeptKey = keyof typeof DEPARTMENTS_DATA;

// Placeholder component for testimonial avatars
function TestimonialAvatar({ name, imageFile }: { name: string; imageFile: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !imageFile) {
    return (
      <div className="w-full h-full bg-indigo-brand/10 text-indigo-brand p-2 flex flex-col items-center justify-center text-center select-none">
        <span className="text-[10px] font-extrabold uppercase tracking-wider">Poză</span>
        <span className="text-[8px] font-mono opacity-85 mt-1 break-all select-all font-semibold">
          {imageFile}
        </span>
      </div>
    );
  }

  return (
    <img
      src={`/src/assets/${imageFile}`}
      alt={name}
      className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-500"
      onError={() => setHasError(true)}
    />
  );
}

function DepartamentePage() {
  const [activeDept, setActiveDept] = useState<string>("marketing");
  const currentDept = DEPARTMENTS_DATA[activeDept as DeptKey] || DEPARTMENTS_DATA.marketing;
  const Illustration = currentDept.illustration;

  return (
    <div className="min-h-screen bg-ivory text-dark overflow-x-hidden">
      <SiteNav />

      {/* HERO SECTION */}
      <section className="relative bg-ivory pt-36 pb-16 md:pt-48 md:pb-24">
        <div className="container mx-auto px-6 text-left max-w-5xl">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Cele 5 departamente <br className="hidden sm:inline" />
              din VIP
            </h1>
            <p className="mt-8 text-sm text-dark/70 leading-relaxed md:text-base max-w-3xl">
              Credem că oamenii excepționali pot face o schimbare în societate și de aceea investim în tinerii cu potențial. Pe parcursul celor 16 ani de existență pe piața ONG-urilor, VIP și-a propus să formeze pilonii societății de mâine.
            </p>
            <div className="mt-8">
              <Link
                to="/aplica"
                className="rounded-full bg-indigo-brand px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-indigo-brand/95 hover:scale-[1.03] shadow-md shadow-indigo-brand/10 inline-flex items-center"
              >
                Înscrie-te
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* THEORY AND PRACTICE SECTION */}
      <section className="bg-white py-20 md:py-28 border-y border-dark/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
            {/* Left stacked text */}
            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
              <ScrollReveal animation="fade-up">
                <h2 className="text-4xl sm:text-5xl font-black text-indigo-brand leading-[1.08] tracking-tight">
                  Îmbinăm <br />
                  teoria și <br />
                  <span className="font-serif italic font-normal text-indigo-brand">practica</span>
                </h2>
              </ScrollReveal>
            </div>

            {/* Center Image */}
            <div className="lg:col-span-4 flex justify-center">
              <ScrollReveal animation="scale-up" className="w-full max-w-xs aspect-[3/4] overflow-hidden rounded-[2rem] shadow-xl border border-dark/5">
                <img
                  src={officeGroup}
                  alt="Membri VIP cooperând"
                  className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700 ease-out"
                />
              </ScrollReveal>
            </div>

            {/* Right text description */}
            <div className="lg:col-span-4 flex flex-col justify-center text-center lg:text-left">
              <ScrollReveal animation="fade-up">
                <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-brand mb-4">
                  Ce se întâmplă în departamente?
                </h3>
                <p className="text-sm text-dark/70 leading-relaxed md:text-base">
                  În cele cinci departamente, membrii VIP au oportunitatea de a învăța alături de profesioniști, aprofundând cunoștințe teoretice și practice specifice unor domenii diverse, precum marketing, business development, resurse umane, relații publice și creative. Ulterior, aceștia aplică ceea ce au învățat atât în cadrul proiectelor VIP, cât și în dezvoltarea carierei lor profesionale.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW DIAGRAM SECTION */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <ScrollReveal animation="fade-up" className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl text-dark">
              Cum arată imaginea de ansamblu a proiectelor?
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up">
            <VipDepartmentsStructure activeDeptId={activeDept} onSelectDept={setActiveDept} />
          </ScrollReveal>
        </div>
      </section>

      {/* ACTIVE DEPARTMENT DETAIL CONTAINER */}
      <section className="bg-white py-12 md:py-16 border-t border-dark/5">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Detail card */}
          <ScrollReveal animation="fade-up">
            <div className="rounded-[2.5rem] bg-[#EBF1FF] border border-indigo-brand/10 p-8 md:p-12 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left Column info */}
              <div className="text-left">
                <h2 className="text-3xl font-extrabold text-indigo-brand tracking-tight sm:text-4xl">
                  {currentDept.title}
                </h2>
                <p className="mt-4 text-sm text-dark/80 leading-relaxed">
                  {currentDept.detailDesc}
                </p>

                <h3 className="mt-8 font-bold text-xs uppercase tracking-wider text-dark/90 mb-4">
                  Ce o să faci aici:
                </h3>

                {/* Checkmarks list */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {currentDept.activities.map((act) => (
                    <div key={act} className="flex items-center gap-2.5 text-xs font-semibold text-dark/70">
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

              {/* Right Column illustration box */}
              <div className="flex justify-center md:justify-end h-full">
                <div className="w-full max-w-[280px] aspect-[4/3] md:aspect-auto md:h-full md:min-h-[260px] rounded-3xl bg-indigo-brand/[0.04] border border-indigo-brand/5 flex items-center justify-center relative overflow-hidden p-6 shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-brand/[0.06] to-transparent pointer-events-none" />
                  <Illustration className="size-36 md:size-44 z-10 drop-shadow-md transition-transform duration-500 hover:scale-105" />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Testimonials List */}
          <div className="mt-16 md:mt-24 space-y-6">
            {currentDept.testimonials.map((t, idx) => (
              <ScrollReveal
                key={t.name}
                delay={idx * 100}
                animation="fade-up"
              >
                <div className="rounded-3xl bg-[#EBF1FF]/40 border border-indigo-brand/5 p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start text-left hover:shadow-md transition-shadow">
                  {/* Portrait circle/square */}
                  <div className="flex-shrink-0 mx-auto md:mx-0">
                    <div className={`size-20 md:size-24 rounded-2xl overflow-hidden shadow-sm ${t.borderCircle || "border border-dark/10"}`}>
                      <TestimonialAvatar name={t.name} imageFile={t.imageFile} />
                    </div>
                  </div>

                  {/* Citat & info */}
                  <div className="flex-1">
                    <h4 className="text-base font-extrabold text-dark tracking-tight">
                      {t.name}
                    </h4>
                    <p className="text-[11px] font-bold text-indigo-brand/70 uppercase tracking-wider mt-0.5">
                      {t.role}
                    </p>
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
