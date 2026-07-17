import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/politica-de-confidentialitate")({
  head: () => ({
    meta: [
      { title: "Politica de Confidențialitate — VIP Romania" },
      {
        name: "description",
        content:
          "Politica de confidențialitate a Asociației VIP Romania. Află cum colectăm, utilizăm și protejăm datele tale personale.",
      },
      { property: "og:title", content: "Politica de Confidențialitate — VIP Romania" },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: PoliticaPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-3 text-xl font-bold tracking-tight text-dark sm:text-2xl">{title}</h2>
      <div className="space-y-3 text-base leading-relaxed text-dark/70">{children}</div>
    </section>
  );
}

function PoliticaPage() {
  return (
    <div className="min-h-screen bg-ivory text-dark">
      <SiteNav />

      {/* Hero */}
      <header className="border-b border-dark/8 bg-white pt-32 pb-12">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-indigo-brand">
            Legalitate &amp; Transparență
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Politica de{" "}
            <span className="font-serif italic font-normal text-indigo-brand">
              Confidențialitate
            </span>
          </h1>
          <p className="mt-4 text-sm text-dark/50">Ultima actualizare: Iulie 2025</p>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-16">
        <Section title="1. Cine suntem">
          <p>
            Voluntari pentru Idei și Proiecte (VIP Romania) este o asociație studențească
            nonprofit cu sediul în România. Ne puteți contacta la{" "}
            <a
              href="mailto:contact@vipromania.ro"
              className="text-indigo-brand hover:underline"
            >
              contact@vipromania.ro
            </a>
            .
          </p>
          <p>
            Această politică de confidențialitate explică modul în care colectăm, utilizăm,
            stocăm și protejăm datele dvs. personale în conformitate cu Regulamentul General
            privind Protecția Datelor (GDPR) — Regulamentul (UE) 2016/679.
          </p>
        </Section>

        <Section title="2. Ce date colectăm">
          <p>Colectăm următoarele categorii de date personale:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong>Date de identificare:</strong> nume și prenume, adresă de email.
            </li>
            <li>
              <strong>Date academice:</strong> facultate, specializare, an de studiu, medie
              academică.
            </li>
            <li>
              <strong>Date de preferință:</strong> comunitatea și departamentul preferat în
              cadrul VIP.
            </li>
            <li>
              <strong>Date de autentificare:</strong> dacă vă conectați prin Google, primim
              adresa de email și numele din contul Google.
            </li>
            <li>
              <strong>Date de utilizare:</strong> informații tehnice anonimizate despre modul
              în care utilizați site-ul (prin Google Analytics, dacă este activat).
            </li>
          </ul>
        </Section>

        <Section title="3. De ce colectăm aceste date">
          <p>Datele dvs. sunt utilizate exclusiv în scopurile enumerate mai jos:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>Procesarea candidaturii dvs. pentru admiterea în asociația VIP Romania.</li>
            <li>
              Contactarea dvs. în legătură cu rezultatele procesului de selecție și cu
              activitățile asociației.
            </li>
            <li>Auto-salvarea progresului în completarea formularului de candidatură.</li>
            <li>Îmbunătățirea experienței pe site-ul nostru.</li>
          </ul>
          <p>
            <strong>Temeiul legal</strong> pentru prelucrarea datelor este consimțământul
            dvs. explicit, acordat în momentul trimiterii formularului de candidatură
            (Art. 6(1)(a) GDPR).
          </p>
        </Section>

        <Section title="4. Cum stocăm datele">
          <p>
            Datele colectate prin formularul de candidatură sunt stocate în siguranță prin
            intermediul platformei{" "}
            <a
              href="https://supabase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-brand hover:underline"
            >
              Supabase
            </a>
            , care respectă standardele GDPR și stochează datele pe servere din Uniunea
            Europeană.
          </p>
          <p>
            Datele sunt păstrate pe durata necesară procesului de selecție și maximum 12 luni
            după încheierea acestuia.
          </p>
        </Section>

        <Section title="5. Cu cine partajăm datele">
          <p>
            VIP Romania nu vinde, nu închiriază și nu transferă datele dvs. personale către
            terțe părți în scop comercial.
          </p>
          <p>Putem partaja datele doar cu:</p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              Membrii echipei interne VIP implicați în procesul de selecție (acces
              restricționat).
            </li>
            <li>
              Furnizori de servicii tehnice (Supabase, Vercel, Google) care ne ajută să
              operăm platforma, în baza contractelor de prelucrare a datelor.
            </li>
          </ul>
        </Section>

        <Section title="6. Drepturile dvs.">
          <p>
            Conform GDPR, aveți următoarele drepturi cu privire la datele dvs. personale:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong>Dreptul de acces</strong> — puteți solicita o copie a datelor pe care
              le deținem despre dvs.
            </li>
            <li>
              <strong>Dreptul la rectificare</strong> — puteți solicita corectarea datelor
              inexacte.
            </li>
            <li>
              <strong>Dreptul la ștergere</strong> — puteți solicita ștergerea datelor dvs.
              (în limitele obligațiilor legale).
            </li>
            <li>
              <strong>Dreptul la portabilitate</strong> — puteți solicita datele dvs. într-un
              format structurat, utilizat în mod curent.
            </li>
            <li>
              <strong>Dreptul de a retrage consimțământul</strong> — în orice moment, fără a
              afecta legalitatea prelucrării anterioare.
            </li>
            <li>
              <strong>Dreptul de a depune o plângere</strong> — la Autoritatea Națională de
              Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).
            </li>
          </ul>
          <p>
            Pentru exercitarea oricăruia dintre aceste drepturi, ne puteți contacta la{" "}
            <a
              href="mailto:contact@vipromania.ro"
              className="text-indigo-brand hover:underline"
            >
              contact@vipromania.ro
            </a>
            .
          </p>
        </Section>

        <Section title="7. Cookie-uri">
          <p>
            Site-ul nostru poate folosi cookie-uri tehnice strict necesare pentru
            funcționarea autentificării și salvarea preferințelor dvs. (ex. tema
            întunecată/luminoasă). Nu folosim cookie-uri de urmărire sau publicitate fără
            consimțământul dvs. explicit.
          </p>
        </Section>

        <Section title="8. Modificări ale politicii">
          <p>
            Ne rezervăm dreptul de a actualiza această politică de confidențialitate. Orice
            modificare semnificativă va fi comunicată prin intermediul site-ului. Versiunea
            curentă este întotdeauna disponibilă la această adresă.
          </p>
        </Section>

        <Section title="9. Contact">
          <p>
            Pentru orice întrebări sau solicitări legate de datele dvs. personale, ne puteți
            contacta:
          </p>
          <ul className="ml-5 list-disc space-y-1.5">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact@vipromania.ro"
                className="text-indigo-brand hover:underline"
              >
                contact@vipromania.ro
              </a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.vipromania.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-brand hover:underline"
              >
                www.vipromania.ro
              </a>
            </li>
          </ul>
        </Section>

        <div className="mt-12 border-t border-dark/8 pt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-dark/50 transition-colors hover:text-indigo-brand"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
              <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Înapoi la pagina principală
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
