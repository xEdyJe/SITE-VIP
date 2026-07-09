import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const aplicaSearchSchema = z.object({
  community: z.string().optional(),
});

export const Route = createFileRoute("/aplica")({
  validateSearch: aplicaSearchSchema,
  head: () => ({
    meta: [
      { title: "Aplică — VIP Romania" },
      {
        name: "description",
        content:
          "Depune aplicația pentru noua serie VIP Romania. Alătură-te celei mai influente comunități de studenți din România.",
      },
      { property: "og:title", content: "Aplică — VIP Romania" },
      {
        property: "og:description",
        content:
          "Formularul de admitere pentru VIP Romania. Business, Econosofia, International Affairs, Leadership.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: AplicaPage,
});

const communities = [
  "Business Club",
  "Econosofia",
  "International Affairs",
  "Leadership Development",
] as const;

const applicationSchema = z.object({
  fullName: z.string().trim().min(2, "Numele trebuie să aibă minim 2 caractere").max(100),
  email: z.string().trim().email("Adresă de email invalidă").max(255),
  phone: z.string().trim().min(6, "Număr de telefon invalid").max(30),
  university: z.string().trim().min(2, "Introdu universitatea").max(150),
  year: z.string().trim().min(1, "Alege anul").max(20),
  community: z.enum(communities, { message: "Alege o comunitate" }),
  motivation: z
    .string()
    .trim()
    .min(30, "Motivația trebuie să aibă minim 30 de caractere")
    .max(1500, "Maxim 1500 caractere"),
});

type FieldErrors = Partial<Record<keyof z.infer<typeof applicationSchema>, string>>;

function AplicaPage() {
  const { community } = Route.useSearch();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const normalizeStr = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

  const initialCommunity = community 
    ? communities.find((c) => normalizeStr(c) === normalizeStr(community)) || null
    : null;

  const [activeSelection, setActiveSelection] = useState<string | null>(initialCommunity);
  const [pulseItem, setPulseItem] = useState<string | null>(null);

  const handleSelect = (c: string) => {
    setActiveSelection(c);
    setPulseItem(c);
    setTimeout(() => {
      setPulseItem((prev) => (prev === c ? null : prev));
    }, 500);
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = applicationSchema.safeParse(raw);
    if (!parsed.success) {
      const fe: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FieldErrors;
        if (!fe[key]) fe[key] = issue.message;
      }
      setErrors(fe);
      return;
    }
    setErrors({});
    setSubmitting(true);
    // Placeholder: în producție trimitem prin server function către DB / email.
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-ivory text-dark">
        <SiteNav />
        <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-32 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-indigo-brand">
            Confirmare
          </p>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Aplicația ta a <span className="font-serif italic font-normal text-indigo-brand">plecat</span>.
          </h1>
          <p className="mt-6 max-w-md text-base text-dark/60 md:text-lg">
            Te vom contacta pe email în maxim 7 zile cu următorii pași. Verifică și folder-ul de
            spam.
          </p>
          <Link
            to="/"
            className="mt-10 inline-flex rounded-full bg-dark px-8 py-4 text-xs font-bold uppercase tracking-widest text-ivory transition-colors hover:bg-indigo-brand"
          >
            Înapoi acasă
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory text-dark">
      <SiteNav />

      <main className="mx-auto max-w-5xl px-6 pb-24 pt-32 sm:pt-40">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-indigo-brand">
            Seria 2026 · Aplicare
          </p>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Fă pasul către{" "}
            <span className="font-serif italic font-normal text-indigo-brand">excelență</span>.
          </h1>
          <p className="mt-6 text-base text-dark/60 md:text-lg">
            Completează formularul de mai jos. Toate câmpurile sunt obligatorii. Timp estimat: 4-6
            minute.
          </p>
        </header>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-14 max-w-2xl rounded-[2rem] border border-dark/5 bg-white p-6 shadow-sm sm:p-10 md:p-12"
        >
          <div className="space-y-6">
            <Field label="Nume complet" name="fullName" error={errors.fullName} placeholder="Andrei Ionescu" />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field
                label="Email"
                name="email"
                type="email"
                error={errors.email}
                placeholder="nume@stud.ase.ro"
              />
              <Field
                label="Telefon"
                name="phone"
                type="tel"
                error={errors.phone}
                placeholder="+40 7XX XXX XXX"
              />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field
                label="Universitate"
                name="university"
                error={errors.university}
                placeholder="ASE, UB, Politehnica..."
              />
              <div className="space-y-2">
                <Label>An de studiu</Label>
                <select
                  name="year"
                  defaultValue=""
                  className="w-full appearance-none rounded-xl border border-dark/10 bg-ivory/50 px-4 py-3 text-sm outline-none transition-all focus:border-indigo-brand focus:ring-2 focus:ring-indigo-brand/20"
                >
                  <option value="" disabled>
                    Alege...
                  </option>
                  <option>Licență, anul 1</option>
                  <option>Licență, anul 2</option>
                  <option>Licență, anul 3</option>
                  <option>Master, anul 1</option>
                  <option>Master, anul 2</option>
                  <option>Altul</option>
                </select>
                {errors.year && <ErrorText>{errors.year}</ErrorText>}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Comunitate preferată</Label>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {communities.map((c) => {
                  const isChecked = activeSelection === c;
                  const isPulsing = pulseItem === c;
                  return (
                    <label
                      key={c}
                      className={`relative flex cursor-pointer items-center gap-4 rounded-2xl border px-5 py-4 text-sm transition-all duration-300 hover:border-indigo-brand/40 hover:bg-white/80 active:scale-[0.97] select-none ${
                        isChecked
                          ? "border-indigo-brand bg-indigo-brand/5 shadow-md shadow-indigo-brand/5"
                          : "border-dark/10 bg-ivory/50"
                      } ${isPulsing ? "animate-satisfying-click" : ""}`}
                    >
                      <input
                        type="radio"
                        name="community"
                        value={c}
                        checked={isChecked}
                        onChange={() => handleSelect(c)}
                        className="sr-only"
                      />
                      
                      {/* Custom satisfying indicator dot */}
                      <div className={`flex size-5 shrink-0 items-center justify-center rounded-full border-2 bg-white transition-all duration-300 ${
                        isChecked ? "border-indigo-brand scale-105" : "border-dark/20"
                      }`}>
                        <div className={`size-2.5 rounded-full bg-indigo-brand transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${
                          isChecked ? "scale-100" : "scale-0"
                        }`} />
                      </div>

                      <span className={`truncate font-bold uppercase tracking-wider transition-colors ${
                        isChecked ? "text-indigo-brand" : "text-dark/70"
                      }`}>
                        {c}
                      </span>
                    </label>
                  );
                })}
              </div>
              {errors.community && <ErrorText>{errors.community}</ErrorText>}
            </div>

            <div className="space-y-2">
              <Label>De ce vrei să te alături VIP?</Label>
              <textarea
                name="motivation"
                rows={6}
                maxLength={1500}
                placeholder="Spune-ne pe scurt ce te motivează, ce ai făcut până acum și ce vrei să construiești în cadrul VIP..."
                className="w-full resize-none rounded-xl border border-dark/10 bg-ivory/50 px-4 py-3 text-sm outline-none transition-all focus:border-indigo-brand focus:ring-2 focus:ring-indigo-brand/20"
              />
              {errors.motivation && <ErrorText>{errors.motivation}</ErrorText>}
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-8 w-full rounded-full bg-dark py-4 text-xs font-bold uppercase tracking-widest text-ivory transition-all hover:bg-indigo-brand disabled:opacity-60"
          >
            {submitting ? "Se trimite..." : "Trimite aplicația"}
          </button>

          <p className="mt-4 text-center text-[10px] uppercase tracking-widest text-dark/40">
            Prin trimitere, ești de acord cu procesarea datelor pentru procesul de recrutare.
          </p>
        </form>
      </main>

      <SiteFooter />
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-dark/50">
      {children}
    </label>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-red-600">{children}</p>;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-dark/10 bg-ivory/50 px-4 py-3 text-sm outline-none transition-all placeholder:text-dark/30 focus:border-indigo-brand focus:ring-2 focus:ring-indigo-brand/20"
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}
