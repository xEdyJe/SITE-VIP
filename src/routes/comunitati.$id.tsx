import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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

// New Community Group Backgrounds
import bcGrupImg from "@/assets/bc grup.jpg";
import ecoGrupImg from "@/assets/eco grup.jpg";
import iaGrupImg from "@/assets/ia grup.jpg";
import ldGrupImg from "@/assets/ld grup.jpg";

// Testimonial Portraits
import alinImg from "@/assets/alin-enache.jpg";
import andreeaImg from "@/assets/andreea-boangher.jpg";
import annaImg from "@/assets/anna-filip.jpg";
import alexandraImg from "@/assets/alexandra-scutaru.jpg";
import patriciaImg from "@/assets/hirstioaga-patricia.jpg";
import dariaGImg from "@/assets/daria-glonteanu.jpg";
import madalinTonitaImg from "@/assets/Madalin Tonita.jpg";
import andraIngridImg from "@/assets/Andra-Ingrid.jpg";
import alinCopindeanuImg from "@/assets/Alin-Copindeanu.jpg";
import biancaDascaluImg from "@/assets/Bianca-Dascalu.jpg";
import andraCImg from "@/assets/logouri si altele/Andra Cernamorit.jpg";
import anaAImg from "@/assets/logouri si altele/Ana Arnautu.jpeg";
import alinaOImg from "@/assets/logouri si altele/Alina Olteanu LD.jpg";
import alexLImg from "@/assets/logouri si altele/Alex Lazar LD.jpg";

// Econosofia Testimonial Portraits
import dragosImg from "@/assets/ECONOSOFIA/1724959039628.jpg";
import tomaImg from "@/assets/ECONOSOFIA/1657207715807.jpg";
import robertImg from "@/assets/ECONOSOFIA/1704743643667.jpg";

// IA Testimonial Portraits
import andreeaNImg from "@/assets/IA/Poza alumn IA Andreea Negoita.JPG";
import dianaDImg from "@/assets/IA/diana dragos alumn ia.jpg";
import iulianRImg from "@/assets/IA/iulian raceala alumn ia (1).jpg";

// Gallery Highlights BC
import bcGal1 from "@/assets/Business Club/BC Poza de grup.jpg";
import bcGal2 from "@/assets/Business Club/BC Poza de grup 2.jpg";
import bcGal3 from "@/assets/Business Club/Bc meeting.jpg";
import bcGal4 from "@/assets/Business Club/BC cafeluta.jpg";
import bcGal5 from "@/assets/Business Club/BC Laser tag.jpg";
import bcGal6 from "@/assets/Business Club/Bc pe strada.jpg";
import bcGal7 from "@/assets/Business Club/Bc la munte.jpg";
import bcGal8 from "@/assets/Business Club/Bc team.jpg";
import bcGal9 from "@/assets/Business Club/Bc la tenis.jpg";
import bcGal10 from "@/assets/Business Club/BC Summit.jpg";
import bcGal11 from "@/assets/Business Club/BC URA.jpg";
import bcGal12 from "@/assets/Business Club/Bc la caimatei prezentare.jpg";

// Gallery Highlights ECO
import ecoGal1 from "@/assets/ECONOSOFIA/EMG DAY 1-150.png";
import ecoGal2 from "@/assets/ECONOSOFIA/EMG DAY 1-71.png";
import ecoGal3 from "@/assets/ECONOSOFIA/EMG DAY 1-94.png";
import ecoGal4 from "@/assets/ECONOSOFIA/EMG DAY 5-36.png";
import ecoGal5 from "@/assets/ECONOSOFIA/408e49c0-f3d1-4e7f-b849-d4df9cc4b51c.JPG";
import ecoGal6 from "@/assets/ECONOSOFIA/40bc4c83-05d2-439b-b144-b004e81f04fa.JPG";
import ecoGal7 from "@/assets/ECONOSOFIA/8f9be698-c4e2-4d08-b0df-ffa6638995f0.JPG";
import ecoGal8 from "@/assets/ECONOSOFIA/EMG DAY 1-58.png";
import ecoGal9 from "@/assets/ECONOSOFIA/SC_09984.jpg";
import ecoGal10 from "@/assets/ECONOSOFIA/d03a1f3f-e74a-4778-bf73-13facaaebf37.JPG";
import ecoGal11 from "@/assets/ECONOSOFIA/f7a5c172-325d-4cbc-9676-cf1d23ed5a1c.JPG";
import ecoGal12 from "@/assets/ECONOSOFIA/40bc4c83-05d2-439b-b144-b004e81f04fa_edited.jpg";

// Gallery Highlights IA
import iaGal1 from "@/assets/IA/WhatsApp Image 2024-11-21 at 21.25.16.jpeg";
import iaGal2 from "@/assets/IA/IMG-20240511-WA0141.jpeg";
import iaGal3 from "@/assets/IA/bce007cf-e5da-4006-945c-0628e34c3b8a.jpg";
import iaGal4 from "@/assets/IA/111942de-2f15-470f-bdbf-4aec97c37115.jpg";
import iaGal5 from "@/assets/IA/20221129_114956.jpeg";
import iaGal6 from "@/assets/IA/3ac60d7a-10b2-4c6e-86c9-fc8eb93a8696.jpg";
import iaGal7 from "@/assets/IA/538d3070-b969-4528-955b-d653f0fc0777.JPG";
import iaGal8 from "@/assets/IA/Copy of IMG_0708.jpeg";
import iaGal9 from "@/assets/IA/IMG-20221129-WA0086.jpg";
import iaGal10 from "@/assets/IA/IMG_8682.jpg";
import iaGal11 from "@/assets/IA/YAF 2024 -DR-199.png";
import iaGal12 from "@/assets/IA/YAF 2024 -DR-284.png";

// Gallery Highlights LD
import ldGal1 from "@/assets/Departament-poza-grup-1.jpg";
import ldGal2 from "@/assets/leadership.jpg";
import ldGal3 from "@/assets/academy.jpg";
import ldGal4 from "@/assets/beach-group.png";

// Communities Data Map
const COMMUNITIES_DATA = {
  "business-club": {
    id: "business-club",
    title: "Business Club",
    tag: "BC",
    description: "Comunitatea din VIP în care studenții ambițioși învață să devină antreprenori de succes.",
    image: bcGrupImg,
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
    gallery: [
      { src: bcGal1, alt: "Poza de grup Business Club" },
      { src: bcGal2, alt: "Poza de grup 2 Business Club" },
      { src: bcGal3, alt: "Meeting Business Club" },
      { src: bcGal4, alt: "Cafeluta Business Club" },
      { src: bcGal5, alt: "Laser tag Business Club" },
      { src: bcGal6, alt: "Pe strada Business Club" },
      { src: bcGal7, alt: "La munte Business Club" },
      { src: bcGal8, alt: "Echipa Business Club" },
      { src: bcGal9, alt: "Tenis Business Club" },
      { src: bcGal10, alt: "Summit Business Club" },
      { src: bcGal11, alt: "Ura Business Club" },
      { src: bcGal12, alt: "Prezentare Business Club" }
    ],
    stats: [
      { value: "20", text: "Proiecte realizate cu succes și impact real." },
      { value: "200+", text: "Alumni conectați și care continuă sa ne ajute in drumul antreprenorial." },
      { value: "50", text: "Membri activi care participă și se implică." },
      { value: "500", text: "Participanți in cadrul proiectelor care impartasesc spiritul antreprenorial." },
      { value: "26", text: "Ani de cand Business Club a fost infiintat si a inceput sa ajute tinerii pasionati de antreprenoriat." }
    ],
    testimonials: [
      {
        name: "Andra Ingrid Munteanu",
        role: "Co-Founder 2Social",
        year: "2023",
        quote: "Experiența Business Club a fost esențială pentru mine, oferindu-mi nu doar o comunitate cu aceleași aspirații, ci și baza pentru parcursul meu în lumea bussiness-ului. Mi-am creat conexiuni, am legat prietenii frumoase și am găsit parteneri alături de care am construit primul meu business.",
        image: andraIngridImg
      },
      {
        name: "Alin Copîndeanu",
        role: "Founder Tudor Personal Tailor",
        year: "2008",
        quote: "Pe termen scurt in business club inveti in mod practic sa organizezi proiecte, interacționezi cu antreprenori (multi alumni) si ai parte de discutii smart. Pe termen lung se genereaza oportunitati la care nici nu te gandesti.",
        image: alinCopindeanuImg
      },
      {
        name: "Bianca Dascalu",
        role: "Marketing Officer",
        year: "2023",
        quote: "Cel mai important lucru pe care l-am învățat după un an in Business Club a fost cat de valuate sunt oamenii. Am dat peste oameni însetați de cunoaștere, dornici să evolueze în fiecare zi. Mereu am fost încurajată să îmi urmez ideile și nu m-am simțit niciodată descurajată. Am învățat să cer ajutorul atunci când am o problemă, pentru ca mereu va fi cineva care ma va ajuta. ",
        image: biancaDascaluImg
      },
      {
        name: "Madalin Tonita",
        role: "Business Development Officer",
        year: "2023",
        quote: "Business Club a reprezentat mediul în care am avut ocazia să mă dezvolt și să învăț enorm. Este o experiență care depășește cu mult orice așteptări, de la oamenii pe care îi cunoști până la oportunitățile și networking-ul de care ai parte. Sunt recunoscător că am putut să mă înconjor și să evoluez alături de tineri atât de pasionați și valoroși. Business Club e cu siguranță locul care ajută la modelarea viitoarei generații de oameni de succes.",
        image: madalinTonitaImg
      },
      {
        name: "Alin Enache",
        role: "Project Manager ReelSelf",
        year: "2023",
        quote: "Business Club a fost si este cea mai transformativa experienta din viata mea. Mi-a pus in fata oameni absolut minunati si like-minded, m-a invatat sa comunic eficient si sa am curaj - iar asta o spune cineva care a fost inchis in sine marea majoritate a vietii. Aici am invatat lucruri pe care nici o carte, curs sau seminar nu mi le puteau arata vreodata. M-a luat de mânuță si mi-a aratat cum functioneaza atat lumea afacerilor cat si in general.",
        image: alinImg
      }
    ],
    ctaText: "Investește în viitorul liderilor de business din România.",
    faq: [
      { q: "Este necesar să am o idee de afacere gata formată?", a: "Nu, în Business Club te ajutăm să generezi și să validezi idei de la zero. Căutăm tineri motivați să învețe și să colaboreze." },
      { q: "Ce tip de proiecte organizează Business Club?", a: "Organizăm evenimente de antreprenoriat, ateliere de pitch, întâlniri cu investitori și simulări de afaceri, oferind membrilor experiențe practice în business." },
      { q: "Cine poate deveni membru și care sunt criteriile?", a: "Recrutările noastre se adresează studenților pasionați de antreprenoriat. Apreciem inițiativa, curiozitatea și dorința de implicare." }
    ]
  },
  "econosofia": {
    id: "econosofia",
    title: "Econosofia",
    tag: "ECO",
    description: "Comunitatea VIP unde studenții pasionați și curioși află totul despre economie de la experți din domeniu.",
    image: ecoGrupImg,
    accentClass: "text-sky-600",
    bgClass: "bg-sky-600",
    borderClass: "border-sky-600/30",
    focusBorderClass: "focus:border-sky-600",
    accentLight: "bg-sky-600/5",
    hoverBg: "hover:bg-sky-700",
    shadowClass: "shadow-sky-600/20",
    badgeBg: "bg-sky-100 text-sky-700",
    mission: "Misiunea Econosofia este să ofere resurse variate și actualizate în macroeconomie și piețe de capital, construind astfel un mediu unde fiecare membru se simte valorizat și motivat să contribuie la dezvoltarea colectivă.",
    learnings: [
      { title: "Gândire critică", desc: "În cadrul TRADING GAME vei putea lua decizii atât singur cât și în echipă pentru a-ți pune bazele unei strategii de a investi.", logo: "🔍" },
      { title: "Piețe de Capital", desc: "Studii despre funcționarea piețelor financiare, instrumentele financiare și cum se fac investițiile în acțiuni, obligațiuni și alte active.", logo: "📊" },
      { title: "Useful Insights", desc: "Ai ocazia de a interacționa cu experți care au cariere în domeniul economic și poți primi sfaturi direct de la ei.", logo: "💡" }
    ],
    gallery: [
      { src: ecoGal1, alt: "Economosofia Seminar" },
      { src: ecoGal2, alt: "Econosofia EMG Day" },
      { src: ecoGal3, alt: "Economosofia Prezentare" },
      { src: ecoGal4, alt: "Economosofia Trading Game" },
      { src: ecoGal5, alt: "Econosofia Workshop" },
      { src: ecoGal6, alt: "Econosofia Q&A" },
      { src: ecoGal7, alt: "Econosofia Discussion" },
      { src: ecoGal8, alt: "Econosofia Networking" },
      { src: ecoGal9, alt: "Econosofia Group" },
      { src: ecoGal10, alt: "Econosofia Panel" },
      { src: ecoGal11, alt: "Econosofia Presentation" },
      { src: ecoGal12, alt: "Econosofia Special" }
    ],
    stats: [
      { value: "30", text: "Proiecte realizate cu succes și impact real." },
      { value: "400", text: "Peste 400 de alumni, care duc mai departe povestea ECONOSOFIA." },
      { value: "30", text: "Membrii activi care participă și se implică." },
      { value: "3000+", text: "Participanți in cadrul proiectelor." },
      { value: "24", text: "Ani de când VIP a fost înființat și a început să producă valoare." }
    ],
    testimonials: [
      {
        name: "Dragoș Bărbulescu",
        role: "Institutional Equity Sales",
        year: "2022",
        quote: "VIP și Econosofia pentru mine, dar mai ales pentru cariera mea, au reprezentat cel mai bun lucru în care m-am putut implica. Mi-a fost stârnit interesul pentru investiții, atat prin training-urile oferite, cât și prin întâlnirea cu cei mai importanți oameni din domeniu. Totodată, am legat prietenii cu oameni de calitate, ce împărtășesc aceleași interese cu mine. La fiecare eveniment formal legat de investiții mă incanta faptul că mă întâlnesc cu foști colegi din Econosofia, împreună cu care odată eram doar niște studenți la început de drum.",
        image: dragosImg
      },
      {
        name: "Mocanu Toma",
        role: "Junior Corporate Dealer",
        year: "2023",
        quote: "A fost o experiență foarte bazată în care am avut norocul să cunosc foarte multe persoane cu interese foarte apropiate de ale mele și cu care ulterior m-am împrietenit. De asemenea prin speakerii aduși de econosofia am învățat foarte mult despre macroeconomie și despre cum funcționează băncile. Ulterior mi-am găsit și un loc de muncă în domeniu unde pregătirea din eco a fost motivul pentru care am fost angajat.",
        image: tomaImg
      },
      {
        name: "Robert Topa",
        role: "Student",
        year: "2025",
        quote: "Recunosc că aveam așteptări doar pe plan profesional, dar, când am intrat în comunitate și am început să ies cu ceilalți colegi, am observat că pot crea legături adevărate. Am realizat repede că sunt înconjurat de persoane care au aceleași pasiuni ca și mine. În ceea ce privește training-urile, pot spune că am fost impresionat de temele abordate, cum ar fi cele de Investment Banking și Private Equity.",
        image: robertImg
      }
    ],
    ctaText: "Investește în viitorul analiștilor economici din România.",
    faq: [
      { q: "Trebuie să fiu student la ASE sau la o facultate cu profil economic?", a: "Nu, primim studenți de la orice facultate! Cel mai important lucru este pasiunea ta pentru economie, piețe de capital sau finanțe." },
      { q: "Ce este Trading Game?", a: "Trading Game este un simulator interactiv de investiții dezvoltat în comunitate, unde membrii învață să tranzacționeze acțiuni și să dezvolte strategii de portofoliu." },
      { q: "Cum mă ajută Econosofia în carieră?", a: "Prin traininguri pe macroeconomie, private equity și interacțiuni directe cu experți din domeniu, mulți dintre alumni își găsesc joburi în sistemul bancar și consultanță." }
    ]
  },
  "international-affairs": {
    id: "international-affairs",
    title: "International Affairs",
    tag: "IA",
    description: "Comunitatea din VIP unde studenții pasionați de relațiile internaționale învață să înțeleagă politica globală și să devină lideri în diplomație.",
    image: iaGrupImg,
    accentClass: "text-indigo-600",
    bgClass: "bg-indigo-600",
    borderClass: "border-indigo-600/30",
    focusBorderClass: "focus:border-indigo-600",
    accentLight: "bg-indigo-600/5",
    hoverBg: "hover:bg-indigo-700",
    shadowClass: "shadow-indigo-600/20",
    badgeBg: "bg-indigo-100 text-indigo-700",
    mission: "Misiunea International Affairs este de a genera o schimbare pozitivă în societate, oferindu-le studenților mediul de învățare pentru o înțelegere profundă a mecanismelor politicii globale și sprijinindu-i în dezvoltarea abilităților esențiale pentru a contribui activ și semnificativ la transformarea lumii.",
    learnings: [
      { title: "Conexiuni valoroase cu experți", desc: "Ai șansa de a interacționa și de a construi relații profesionale cu experți în diplomație.", logo: "🤝" },
      { title: "Dezvoltare în relații internaționale", desc: "Poți aprofunda înțelegerea fenomenelor globale, a politicilor internaționale și a relațiilor diplomatice prin trainingurile organizate.", logo: "🌍" },
      { title: "Activități practice", desc: "Workshop-urile de dezbatere și negociere te ajută să îți îmbunătățești abilitățile de convingere și soluționare a conflictelor.", logo: "🗣️" }
    ],
    gallery: [
      { src: iaGal1, alt: "Negociere IA" },
      { src: iaGal2, alt: "Summit International Affairs" },
      { src: iaGal3, alt: "Workshop diplomatic" },
      { src: iaGal4, alt: "Teambuilding IA" },
      { src: iaGal5, alt: "Conference IA" },
      { src: iaGal6, alt: "Debate IA" },
      { src: iaGal7, alt: "Diplomacy Game IA" },
      { src: iaGal8, alt: "Presentation IA" },
      { src: iaGal9, alt: "Activity IA" },
      { src: iaGal10, alt: "Meeting IA" },
      { src: iaGal11, alt: "Project IA" },
      { src: iaGal12, alt: "Group IA" }
    ],
    stats: [
      { value: "30+", text: "Proiecte realizate cu succes și impact real." },
      { value: "200", text: "Peste 200 de alumni, conectați și care duc mai departe povestea INTERNATIONAL AFFAIRS." },
      { value: "55", text: "Membri activi care participă și se implică." },
      { value: "500+", text: "Participanți in cadrul proiectelor." },
      { value: "24", text: "Ani de când VIP a fost înființat și a început să producă valoare." }
    ],
    testimonials: [
      {
        name: "Andreea Negoiță",
        role: "Alumn IA, fost manager International Affairs",
        year: "2023",
        quote: "Dacă ar fi să mulțumesc comunității International Affairs pentru ceva, ar fi pentru că am avut în jurul meu oameni puternici și ambițioși, pasionați de aceleași domenii ca și mine pentru că mi-a dat forță și inspirație să devin cea mai bună versiune a mea. International Affairs a reprezentat pentru mine desăvârșirea experienței de voluntar și punctul culminant al implicării active în mediul civic. Numeroasele momente care mi-au confirmat că mă aflu în locul potrivit, alături de oportunitatea de a produce o schimbare reală în societate m-au convins că IA = excepțional.",
        image: andreeaNImg
      },
      {
        name: "Diana Dragoș",
        role: "Alumn IA, fost manager International Affairs",
        year: "2022",
        quote: "VIP și International Affairs au fost cea mai bună experiență complementară din timpul facultății! Am găsit tineri ambițioși alături de care am format o comunitate de studenți cu pasiuni comune. Experiența a contat foarte mult pentru primul loc de muncă, așa m-am putut diferenția față de alți candidați. VIP și International Affairs reprezintă în continuare o familie și sunt în continuare alături de generațiile actuale pentru că mi-am dat seama că oamenii de calitate din jurul nostru sunt cei care ne motivează și ne ajută să ne dezvoltăm cel mai tare.",
        image: dianaDImg
      },
      {
        name: "Iulian Răceală",
        role: "Alumn IA, fost manager International Affairs",
        year: "2023",
        quote: "Nu îmi imaginam că studenția mea va fi așa. Așa plină de experiențe grozave, de oameni frumoși, de aventură - și asta doar datorită International Affairs. Pentru mine, această comunitate a însemnat ACASĂ timp de 2 ani. Este greu de pus ce am simțit în cuvinte. Au fost 2 ani în care mi-am făcut prieteni pe viață, 2 ani în care am învățat PRIN PRACTICĂ cât în 10 (fapt ce mi-a oferit acces la piața muncii extrem de ușor), 2 ani ce încă îmi definesc prezentul. Am avut oportunitatea să organizez proiecte relevante, să fiu LIDER și să coordonez o echipă la doar 21 de ani și să am un impact real în comunitate. Pe scurt, să intru în VIP și în International Affairs a fost cea mai bună alegere pe care am putut s-o fac. Mulțumesc, comunitatea IA, pentru tot!",
        image: iulianRImg
      }
    ],
    ctaText: "Investește în viitorul liderilor geopolitici din România.",
    faq: [
      { q: "Este necesar să am experiență în relații internaționale pentru a deveni membru?", a: "Nu este necesar să ai experiență în relații internaționale, însă sunt necesare cunoștințe de bază în acest domeniu. Comunitatea noastră este un loc unde poți învăța și să îți dezvolți abilitățile, indiferent de nivelul de pregătire inițial." },
      { q: "Este Comunitatea International Affairs afiliată unei ideologii sau partide politice?", a: "Comunitatea International Affairs nu este afiliată niciunei ideologii politice sau partide politice. Scopul nostru este să promovăm discuții academice și obiective despre relațiile internaționale, diplomație și probleme globale, într-un mediu deschis, respectuos și independent de orice afiliere politică." },
      { q: "Ce beneficii oferă comunitatea studenților pasionați de relații internaționale?", a: "Comunitatea International Affairs oferă studenților pasionați de relații internaționale oportunități de a-și construi o rețea profesională, de a participa la evenimente și de a colabora cu experți din domeniu. Prin workshopuri, sesiuni de formare și proiecte, membrii își dezvoltă abilități esențiale în diplomație, negociere și gândire critică." },
      { q: "Cine poate deveni membru și cum mă pot înscrie?", a: "Recrutarea are loc la începutul fiecărui an universitar și este destinată exclusiv studenților." },
      { q: "Cum pot afla mai multe despre evenimentele voastre viitoare?", a: "Poți afla despre evenimentele organizate de International Affairs urmărindu-ne pe paginile noastre oficiale de social media: Instagram (internationalaffairs.ro), Facebook (International Affairs) și LinkedIn (International Affairs)." }
    ]
  },
  "leadership-development": {
    id: "leadership-development",
    title: "Leadership Development",
    tag: "LD",
    description: "Comunitatea VIP unde studenții empatici și curioși învață să conducă echipe și să devină lideri de succes.",
    image: ldGrupImg,
    accentClass: "text-emerald-600",
    bgClass: "bg-emerald-600",
    borderClass: "border-emerald-600/30",
    focusBorderClass: "focus:border-emerald-600",
    accentLight: "bg-emerald-600/5",
    hoverBg: "hover:bg-emerald-700",
    shadowClass: "shadow-emerald-600/20",
    badgeBg: "bg-emerald-100 text-emerald-700",
    mission: "Misiunea Leadership Development este să formeze tineri cu inteligență emoțională, abilități de conducere, spirit de echipă, gândire critică și gândire strategică, pentru a putea conduce organizații către performanță.",
    learnings: [
      { title: "Inteligență emoțională", desc: "Vei învăța ce sunt emoțiile, cum apar și cum le poți gestiona.", logo: "❤️" },
      { title: "Comunicare", desc: "Vei învăța cum să comunici eficient într-o echipă, care sunt stilurile de comunicare și cum să rezolvi conflicte.", logo: "🗣️" },
      { title: "Abilități de conducere", desc: "Vei învăța care sunt stilurile de leadership, cum oferi/primești feedback și cum să-i inspiri pe ceilalți din jurul tău.", logo: "👥" }
    ],
    gallery: [
      { src: ldGal1, alt: "Teambuilding LD" },
      { src: ldGal2, alt: "Activitate in aer liber LD" },
      { src: ldGal3, alt: "Workshop Leadership Development" },
      { src: ldGal4, alt: "Prezentare proiect LD" },
      { src: ldGal1, alt: "Teambuilding LD 2" },
      { src: ldGal2, alt: "Activitate in aer liber LD 2" },
      { src: ldGal3, alt: "Workshop Leadership Development 2" },
      { src: ldGal4, alt: "Prezentare proiect LD 2" },
      { src: ldGal1, alt: "Teambuilding LD 3" },
      { src: ldGal2, alt: "Activitate in aer liber LD 3" },
      { src: ldGal3, alt: "Workshop Leadership Development 3" },
      { src: ldGal4, alt: "Prezentare proiect LD 3" }
    ],
    stats: [
      { value: "12+", text: "Ani de activitate în care formăm lideri." },
      { value: "10+", text: "Proiecte realizate cu succes și impact real." },
      { value: "500+", text: "Participanți în cadrul proiectelor." },
      { value: "200+", text: "Alumni LD care inspiră mai departe alți oameni." },
      { value: "24", text: "Ani de când VIP a fost înființat și a început să producă valoare." }
    ],
    testimonials: [
      {
        name: "Andra Cernamoriț",
        role: "Alumn LD",
        year: "2022",
        quote: "Implicarea în comunitatea Leadership Development a fost cea mai bună decizie pe care am putut să o iau ca student, ajungând să fie o experiență transformațională. Am crescut atât ca persoană, cât și ca lider, înconjurată tot timpul de oameni implicați, ambițioși și susținători.",
        image: andraCImg
      },
      {
        name: "Ana Arnăutu",
        role: "Alumn LD",
        year: "2021",
        quote: "Leadership Development m-a ghidat în cele mai frumoase și semnificative experiențe din studenție. Aici am construit o bună parte din competențele pe care le dețin, am învățat să fiu lider pentru echipe performante și am acumulat cunoștințe unice. Dar cel mai important dintre toate, am învățat să fiu aproape de oameni, să-i susțin și să-i îndrum atunci când aveau nevoie.",
        image: anaAImg
      },
      {
        name: "Alina Olteanu",
        role: "Alumn LD",
        year: "2021",
        quote: "Leadership Development este locul pe care l-am cautat foarte mult timp. Am învățat să conduc cu empatie, să colaborez eficient și să dezvolt abilități de comunicare. Experiența a fost extrem de benefică, oferindu-mi oportunități de creștere personală și profesională, construind relații valoroase și pregătindu-mă pentru viitoarele provocări de leadership. Am simțit un sentiment puternic de apartenență și susținere, care m-a motivat constant să mă autodepăşesc.",
        image: alinaOImg
      },
      {
        name: "Alex Lazăr",
        role: "Alumn LD",
        year: "2022",
        quote: "Comunitatea Leadership Development a jucat un rol esențial în evoluția mea, ajutându-mă să îmi formez viziuni mai clare și să înțeleg cu adevărat importanța lucrului în echipă. Experiențele acumulate m-au învățat să văd dincolo de propriile limite și mi-au permis să îmi perfecționez abilitățile de coordonare a echipelor și de luare a deciziilor, astfel intărindu-mi încrederea în abilitățile mele de lider.",
        image: alexLImg
      }
    ],
    ctaText: "Susține viitorii tineri excepționali din România.",
    faq: [
      { q: "Despre ce sunt trainingurile din Leadership Development?", a: "Trainingurile din cadrul comunității sunt despre inteligență emoțională, gândire critică, gândire strategică, leadership personal sau gestionarea stresului. Practic, despre competențele de bază ale unui lider." },
      { q: "Cum mă pot înscrie în Leadership Development?", a: "Pentru a te înscrie în LD, trebuie să fii student în București și să completezi formularul de înscriere. Acesta este deschis, de obicei, la începutul fiecărui an universitar." },
      { q: "Este necesar să am experiență în leadership pentru a deveni membru?", a: "Nu! Poți intra în comunitatea noastră și dacă nu ai deloc experiență în conducerea unei echipe." }
    ]
  }
};

export const Route = createFileRoute("/comunitati/$id")({
  component: CommunityPage,
});

function TestimonialImage({ name, image, imageFile }: { name: string; image?: string; imageFile?: string }) {
  const [hasError, setHasError] = useState(false);
  const initials = name.split(" ").map((n) => n[0]).join("").slice(0, 2);

  if (image && !hasError) {
    return (
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover"
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <div className="absolute inset-0 bg-white/20 flex flex-col items-center justify-center text-center p-4">
      <span className="text-2xl font-extrabold tracking-wider text-white opacity-85 select-none">{initials}</span>
      <span className="text-[7px] font-mono opacity-65 mt-2 break-all select-all font-semibold select-none">
        {imageFile || "Fără poză"}
      </span>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`rounded-2xl border border-dark/5 bg-ivory/30 transition-all duration-300 ${isOpen ? "shadow-md bg-white border-indigo-brand/10" : "hover:bg-ivory/50"
        }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none"
      >
        <span className="font-bold text-dark text-base pr-4">{q}</span>
        <svg
          className={`w-5 h-5 text-dark/40 transition-transform duration-300 shrink-0 ${isOpen ? "transform rotate-180 text-indigo-brand" : ""
            }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-[300px] border-t border-dark/5" : "max-h-0"
          }`}
      >
        <div className="p-6 text-sm text-dark/70 leading-relaxed bg-white/50">
          {a}
        </div>
      </div>
    </div>
  );
}

function CommunityPage() {
  const { id } = Route.useParams();
  const data = COMMUNITIES_DATA[id as keyof typeof COMMUNITIES_DATA];

  if (!data) {
    throw notFound();
  }

  const galleryImages = data.gallery;

  const row1Images = galleryImages.filter((_, i) => i % 2 === 0);
  const row2Images = galleryImages.filter((_, i) => i % 2 !== 0);

  const [activePage, setActivePage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const getGlowColor = () => {
    switch (id) {
      case "business-club": return "rgba(249, 115, 22, 0.22)";
      case "econosofia": return "rgba(61, 174, 229, 0.22)";
      case "international-affairs": return "rgba(168, 85, 247, 0.22)";
      case "leadership-development": return "rgba(16, 185, 129, 0.22)";
      default: return "rgba(61, 174, 229, 0.22)";
    }
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActivePage(prev => (prev === 0 ? 1 : 0));
    }, 3800);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div className="min-h-screen bg-ivory text-dark overflow-x-hidden">
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
          {/* Brand spotlight glow */}
          <div
            className="absolute inset-0 mix-blend-screen"
            style={{ backgroundImage: `radial-gradient(circle at center, ${getGlowColor()}, transparent 65%)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ivory" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-32 text-center text-ivory">
          <ScrollReveal animation="fade-up">
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
        <div className="container mx-auto px-6 max-w-6xl">
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

          <div
            className="flex flex-col gap-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] py-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Row 1: slides left */}
            <div className="overflow-hidden">
              <div
                className="flex w-max gap-6 transition-transform duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] pr-6"
                style={{ transform: activePage === 0 ? 'translateX(0)' : 'translateX(calc(-50% - 12px))' }}
              >
                {row1Images.map((img, idx) => (
                  <div
                    key={`r1-${idx}`}
                    className="w-[75vw] sm:w-[42vw] md:w-[28vw] aspect-[4/3] rounded-2xl overflow-hidden shadow-md flex-shrink-0 relative group/card"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: slides right */}
            <div className="overflow-hidden">
              <div
                className="flex w-max gap-6 transition-transform duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] pr-6"
                style={{ transform: activePage === 0 ? 'translateX(calc(-50% - 12px))' : 'translateX(0)' }}
              >
                {row2Images.map((img, idx) => (
                  <div
                    key={`r2-${idx}`}
                    className="w-[75vw] sm:w-[42vw] md:w-[28vw] aspect-[4/3] rounded-2xl overflow-hidden shadow-md flex-shrink-0 relative group/card"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NUMBERS SECTION */}
      <section className={`relative overflow-hidden ${data.bgClass} py-24 text-ivory md:py-32`}>
        <span
          aria-hidden
          className="pointer-events-none absolute -top-4 left-0 select-none whitespace-nowrap font-serif text-[15vw] md:text-[22vw] font-bold leading-none tracking-tighter text-white/5 md:-top-8"
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
          className={`pointer-events-none absolute -bottom-6 right-0 select-none whitespace-nowrap font-serif italic text-[10vw] md:text-[16vw] font-bold leading-none tracking-tighter ${id === "business-club"
            ? "text-orange-600/10"
            : id === "econosofia"
              ? "text-sky-600/10"
              : id === "international-affairs"
                ? "text-indigo-600/10"
                : id === "leadership-development"
                  ? "text-emerald-600/10"
                  : "text-dark/5"
            }`}
        >
          testimoniale
        </span>

        <div className="container relative z-10 mx-auto px-6 max-w-6xl">
          <ScrollReveal animation="clip-reveal" className="mb-16 text-center">
            <p className={`font-mono text-[9px] uppercase tracking-[0.25em] ${data.accentClass}`}>— Experiențe reale</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              Ce spun foștii membrii
            </h2>
          </ScrollReveal>

          {/* Horizontal Scroll wrapper */}
          <div className="relative -mx-6 px-6 overflow-x-auto scrollbar-none snap-x snap-mandatory flex gap-6 pb-8 pt-4">
            {data.testimonials.map((t, idx) => (
              <ScrollReveal
                key={t.name}
                delay={idx * 100}
                animation="fade-up"
                className="snap-center"
              >
                <div
                  className={`w-[320px] sm:w-[460px] md:w-[480px] shrink-0 aspect-[16/11] sm:aspect-[1.65] rounded-[2rem] overflow-hidden ${data.bgClass} text-white shadow-xl ${data.shadowClass} flex border border-white/10 hover:scale-[1.01] transition-transform duration-300`}
                >
                  {/* Left side: Photo */}
                  <div className="w-[35%] shrink-0 h-full relative bg-dark/25 border-r border-white/10">
                    <TestimonialImage name={t.name} image={(t as any).image} imageFile={(t as any).imageFile} />
                  </div>

                  {/* Right side: Details */}
                  <div className="w-[65%] p-5 md:p-6 flex flex-col justify-between text-left">
                    <div>
                      <h4 className="text-sm sm:text-base font-extrabold text-white tracking-tight leading-tight">
                        {t.name}
                      </h4>
                      <p className="text-[10px] text-white/70 font-semibold tracking-wide mt-1 truncate">
                        {t.role}
                      </p>
                      <p className="mt-3 text-[11px] sm:text-xs text-white/90 leading-relaxed italic line-clamp-4 sm:line-clamp-5 font-serif">
                        „{t.quote}”
                      </p>
                    </div>

                    <div className="flex justify-between border-t border-white/15 pt-3 text-[9px] font-mono tracking-wider text-white/50 uppercase">
                      <div>
                        <span className="block text-[7px] text-white/40 leading-none">Comunitate</span>
                        <span className="font-bold text-white/80">{data.title}</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-[7px] text-white/40 leading-none">An</span>
                        <span className="font-bold text-white/80">{t.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade-up" className="mt-12 text-center">
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

      {/* 9. FAQ SECTION */}
      <section className="bg-white py-24 md:py-32 border-t border-dark/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <ScrollReveal animation="clip-reveal" className="mb-16 text-center">
            <p className={`font-mono text-[9px] uppercase tracking-[0.25em] ${data.accentClass}`}>— Răspunsuri la întrebări</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              Curiozități frecvente
            </h2>
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            {data.faq.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 80} animation="fade-up">
                <FaqItem q={item.q} a={item.a} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
