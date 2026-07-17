import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { z } from "zod";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { supabase } from "@/lib/supabase";
import { initAnalytics, trackStep, trackSubmission } from "@/lib/analytics";

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

const departments = [
  "Marketing",
  "Public Relations",
  "Creative",
  "Human Resources",
  "Business Development",
] as const;

// ── Specific Questions Mapping ──
const communityQuestions = {
  "Business Club": [
    { key: "q1", label: "Ce idee de business sau proiect comercial te pasionează în acest moment?" },
    { key: "q2", label: "Ai avut vreo experiență antreprenorială anterioară (chiar și un mic proiect personal)?" },
  ],
  "Econosofia": [
    { key: "q1", label: "Care este ultima carte citită sau articol economic care ți-a atras atenția și de ce?" },
    { key: "q2", label: "Ce arie a economiei sau politicilor publice te interesează cel mai mult?" },
  ],
  "International Affairs": [
    { key: "q1", label: "Cum crezi că influențează globalizarea oportunitățile studenților români?" },
    { key: "q2", label: "Ai participat la proiecte internaționale sau programe de voluntariat global (Erasmus, etc.)?" },
  ],
  "Leadership Development": [
    { key: "q1", label: "Descrie o situație în care ai coordonat o echipă sau ai luat o inițiativă importantă." },
    { key: "q2", label: "Care este cea mai mare provocare pe care ai depășit-o lucrând în grup?" },
  ],
} as const;

const steps = [
  { id: 1, name: "Contact" },
  { id: 2, name: "Opțiuni" },
  { id: 3, name: "Specifice" },
  { id: 4, name: "Eseu" },
];

// Custom canvas particle confetti system
function fireConfetti() {
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.inset = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "99999";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d")!;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const colors = ["#3daee5", "#f97316", "#a855f7", "#10b981", "#ff3366", "#ffd700"];
  const particles: any[] = [];

  for (let i = 0; i < 150; i++) {
    particles.push({
      x: width / 2,
      y: height + 20,
      vx: (Math.random() - 0.5) * 16,
      vy: -Math.random() * 20 - 12,
      size: Math.random() * 8 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rSpeed: (Math.random() - 0.5) * 12,
      opacity: 1.2,
      gravity: 0.35,
    });
  }

  function update() {
    ctx.clearRect(0, 0, width, height);

    let active = false;
    for (let p of particles) {
      if (p.opacity <= 0) continue;
      active = true;

      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.rSpeed;
      p.opacity -= 0.012;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, Math.min(1, p.opacity));
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    }

    if (active) {
      requestAnimationFrame(update);
    } else {
      canvas.remove();
    }
  }

  requestAnimationFrame(update);
}

function AplicaPage() {
  const { community } = Route.useSearch();

  // ── Auth states ──
  const [user, setUser] = useState<any>(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [useLocalStorageFallback, setUseLocalStorageFallback] = useState(false);

  // ── Check submission state ──
  const [hasSubmittedBefore, setHasSubmittedBefore] = useState(false);
  const [checkingSubmission, setCheckingSubmission] = useState(false);

  // ── Form & Wizard states ──
  const [activeStep, setActiveStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  // Autosave status state
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  // Trigger Confetti on successful submission
  useEffect(() => {
    if (submitted) {
      fireConfetti();
    }
  }, [submitted]);

  // Clear "saved" autosave status after 2 seconds
  useEffect(() => {
    if (saveStatus === "saved") {
      const t = setTimeout(() => setSaveStatus("idle"), 2000);
      return () => clearTimeout(t);
    }
  }, [saveStatus]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    year: "",
    profile: "",
    community: "",
    department: "",
    motivation: "",
    communityQ1: "",
    communityQ2: "",
  });

  // Anti-spam honeypot
  const [honeypot, setHoneypot] = useState("");

  // UTM Parameters
  const [utmParams, setUtmParams] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
  });

  // Track initial community search param
  const normalizeStr = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const initialCommunity = community 
    ? communities.find((c) => normalizeStr(c) === normalizeStr(community)) || ""
    : "";

  // ── Initialize Analytics & UTMs ──
  useEffect(() => {
    initAnalytics();

    const params = new URLSearchParams(window.location.search);
    setUtmParams({
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
    });

    if (initialCommunity) {
      setFormData(prev => ({ ...prev, community: initialCommunity }));
    }
  }, [initialCommunity]);

  // ── Supabase Auth listener ──
  useEffect(() => {
    const isMock = supabase.auth.constructor.name === "GoTrueClient" && 
      (supabase.auth as any).url?.includes("placeholder.supabase.co");

    if (isMock) {
      setUseLocalStorageFallback(true);
      setLoadingUser(false);
      return;
    }

    // Check if we're on an OAuth callback (PKCE sends ?code= as a query param)
    const url = new URL(window.location.href);
    const oauthCode = url.searchParams.get("code");

    // Subscribe to auth changes — fires when PKCE exchange completes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        setFormData(prev => ({
          ...prev,
          email: session.user.email || prev.email,
          fullName: session.user.user_metadata?.full_name || prev.fullName,
        }));
        // Remove ?code= from the URL bar after successful login
        window.history.replaceState({}, "", window.location.pathname);
      }
      setLoadingUser(false);
    });

    if (oauthCode) {
      // Explicitly exchange the PKCE authorization code for a session.
      // This is more reliable than relying on detectSessionInUrl with TanStack Router.
      supabase.auth.exchangeCodeForSession(oauthCode).catch((err) => {
        console.error("[Auth] PKCE code exchange failed:", err?.message ?? err);
        setLoadingUser(false); // Show login screen on failure
      });
    } else {
      // No OAuth callback — check for an existing persisted session
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (!session) {
          setLoadingUser(false); // No session → show login
        }
        // If session exists, onAuthStateChange fires and handles it
      });
    }

    return () => subscription.unsubscribe();
  }, []);

  // ── Check if user has already submitted ──
  useEffect(() => {
    if (useLocalStorageFallback) {
      const savedSubmission = localStorage.getItem("vip_form_submitted");
      if (savedSubmission) setHasSubmittedBefore(true);
      return;
    }

    if (!user?.email) {
      setHasSubmittedBefore(false);
      return;
    }

    const checkPreviousSubmission = async () => {
      setCheckingSubmission(true);
      try {
        const { data, error } = await supabase
          .from("applications")
          .select("id")
          .eq("email", user.email)
          .maybeSingle();

        if (data) {
          setHasSubmittedBefore(true);
        } else {
          setHasSubmittedBefore(false);
        }
      } catch (err) {
        console.error("Error checking submission status:", err);
      } finally {
        setCheckingSubmission(false);
      }
    };

    checkPreviousSubmission();
  }, [user?.email, useLocalStorageFallback]);

  // ── Load Draft on Auth ──
  useEffect(() => {
    if (useLocalStorageFallback) {
      const localDraft = localStorage.getItem("vip_form_draft");
      if (localDraft) {
        try {
          const parsed = JSON.parse(localDraft);
          setActiveStep(parsed.current_step || 1);
          setFormData(prev => ({ ...prev, ...parsed.form_data }));
          console.log("[Local Draft] Loaded draft successfully.");
        } catch (e) {
          console.error("Error reading local draft:", e);
        }
      }
      return;
    }

    if (!user?.id) return;

    const loadDraft = async () => {
      try {
        const { data, error } = await supabase
          .from("drafts")
          .select("current_step, form_data")
          .eq("user_id", user.id)
          .maybeSingle();

        if (data) {
          setActiveStep(data.current_step || 1);
          setFormData(prev => ({
            ...prev,
            ...data.form_data,
            email: user.email || prev.email,
          }));
          console.log("[DB Draft] Loaded draft successfully.");
        }
      } catch (err) {
        console.error("Error loading draft from Supabase:", err);
      }
    };

    loadDraft();
  }, [user?.id, useLocalStorageFallback]);

  // ── Debounced Draft Auto-save ──
  useEffect(() => {
    if (hasSubmittedBefore) return;

    const saveDraft = async () => {
      setSaveStatus("saving");
      if (useLocalStorageFallback) {
        localStorage.setItem(
          "vip_form_draft",
          JSON.stringify({ current_step: activeStep, form_data: formData })
        );
        setTimeout(() => setSaveStatus("saved"), 350);
        return;
      }

      if (!user?.id) {
        setSaveStatus("idle");
        return;
      }

      try {
        const { error } = await supabase.from("drafts").upsert(
          {
            user_id: user.id,
            email: user.email,
            current_step: activeStep,
            form_data: formData,
          },
          { onConflict: "user_id" }
        );
        if (error) {
          setSaveStatus("error");
        } else {
          setSaveStatus("saved");
        }
      } catch (err) {
        console.error("Error auto-saving draft:", err);
        setSaveStatus("error");
      }
    };

    const timer = setTimeout(saveDraft, 1500);
    return () => clearTimeout(timer);
  }, [formData, activeStep, user?.id, useLocalStorageFallback, hasSubmittedBefore]);

  // ── Analytics step hook ──
  useEffect(() => {
    const stepName = steps.find(s => s.id === activeStep)?.name || "Necunoscut";
    trackStep(activeStep, stepName);
  }, [activeStep]);

  // ── Auth handlers ──
  const handleGoogleLogin = async () => {
    if (useLocalStorageFallback) {
      setUser({
        id: "local-user-id",
        email: "test.student@gmail.com",
        user_metadata: { full_name: "Student VIP" },
      });
      setFormData(prev => ({
        ...prev,
        email: "test.student@gmail.com",
        fullName: "Student VIP",
      }));
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          // With PKCE flow, Supabase will redirect back with ?code=... instead of #access_token=...
          // The SDK automatically exchanges the code for a session via detectSessionInUrl.
          redirectTo: window.location.origin + "/aplica",
          queryParams: {
            access_type: "offline",
            prompt: "select_account",
          },
        },
      });
      if (error) throw error;
    } catch (err: any) {
      alert("Autentificarea Google a eșuat. Puteți încerca în mod local.");
      console.error("Google login error:", err.message);
      setUseLocalStorageFallback(true);
    }
  };

  const handleLogout = async () => {
    if (useLocalStorageFallback) {
      setUser(null);
      return;
    }
    await supabase.auth.signOut();
  };

  // ── Input changes handler ──
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // ── Step Navigation transition validation ──
  const handleNext = () => {
    if (activeStep === 2) {
      // Step 2 blocking validation: Community & Department MUST be selected to generate Step 3 specific questions!
      const step2Errors: Record<string, string> = {};
      if (!formData.community) {
        step2Errors.community = "Alegerea comunității preferate este obligatorie pentru a genera întrebările de la pasul următor.";
      }
      if (!formData.department) {
        step2Errors.department = "Alegerea departamentului preferat este obligatorie pentru a genera întrebările de la pasul următor.";
      }

      if (Object.keys(step2Errors).length > 0) {
        setErrors(step2Errors);
        return;
      }
    }

    setErrors({});
    setActiveStep(prev => Math.min(prev + 1, 4));
  };

  const handlePrev = () => {
    setActiveStep(prev => Math.max(prev - 1, 1));
  };

  // ── Final Global Validation Check ──
  const validateAll = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Step 1: Contact Checks
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Numele complet este obligatoriu.";
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 6) {
      newErrors.phone = "Numărul de telefon este obligatoriu.";
    }

    // Step 2: Options Checks
    if (!formData.university.trim()) {
      newErrors.university = "Introdu universitatea.";
    }
    if (!formData.year.trim()) {
      newErrors.year = "Alege anul de studiu.";
    }
    if (!formData.profile.trim()) {
      newErrors.profile = "Introdu specializarea / facultatea.";
    }
    if (!formData.community) {
      newErrors.community = "Alegerea comunității este obligatorie.";
    }
    if (!formData.department) {
      newErrors.department = "Alegerea departamentului este obligatorie.";
    }

    // Step 3: Specific Questions Checks
    if (formData.community) {
      if (!formData.communityQ1.trim() || formData.communityQ1.trim().length < 15) {
        newErrors.communityQ1 = "Răspunsul la prima întrebare specifică este prea scurt (minim 15 caractere).";
      }
      if (!formData.communityQ2.trim() || formData.communityQ2.trim().length < 15) {
        newErrors.communityQ2 = "Răspunsul la a doua întrebare specifică este prea scurt (minim 15 caractere).";
      }
    }

    // Step 4: Motivation Check
    if (!formData.motivation.trim() || formData.motivation.trim().length < 30) {
      newErrors.motivation = "Eseul motivațional este obligatoriu (minim 30 de caractere).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Determine which steps have errors
  const getStepsWithErrors = (): number[] => {
    const errorKeys = Object.keys(errors);
    const stepsWithErrors: number[] = [];
    if (errorKeys.some(key => ["fullName", "phone"].includes(key))) {
      stepsWithErrors.push(1);
    }
    if (errorKeys.some(key => ["university", "year", "profile", "community", "department"].includes(key))) {
      stepsWithErrors.push(2);
    }
    if (errorKeys.some(key => ["communityQ1", "communityQ2"].includes(key))) {
      stepsWithErrors.push(3);
    }
    if (errorKeys.some(key => ["motivation"].includes(key))) {
      stepsWithErrors.push(4);
    }
    return stepsWithErrors;
  };

  const stepsWithErrors = getStepsWithErrors();

  // ── Submit application ──
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot check
    if (honeypot !== "") {
      console.warn("Spam bot detected via honeypot.");
      setSubmitted(true);
      return;
    }

    // 2. Perform global validation
    if (!validateAll()) {
      // Find the first step that contains errors and navigate to it!
      const firstStepWithErrors = getStepsWithErrors()[0];
      if (firstStepWithErrors) {
        setActiveStep(firstStepWithErrors);
      }
      return;
    }

    setSubmitting(true);

    try {
      if (useLocalStorageFallback) {
        localStorage.setItem("vip_form_submitted", "true");
        localStorage.removeItem("vip_form_draft");
      } else if (user) {
        const communityAnswers = {
          q1: formData.communityQ1,
          q2: formData.communityQ2,
        };

        // Insert application into database
        const { error: insertError } = await supabase.from("applications").insert({
          user_id: user.id,
          email: formData.email,
          full_name: formData.fullName,
          phone: formData.phone,
          university: formData.university,
          year_of_study: formData.year,
          profile: formData.profile,
          community: formData.community,
          department: formData.department,
          motivation: formData.motivation,
          community_answers: communityAnswers,
          department_answers: {},
          ...utmParams
        });

        if (insertError) throw insertError;

        // Delete draft from DB since application is submitted successfully
        await supabase.from("drafts").delete().eq("user_id", user.id);
      }

      // Track analytics submission
      trackSubmission();
      setSubmitted(true);
    } catch (err: any) {
      console.error("Submission failed:", err.message);
      alert("Trimiterea a eșuat. Vă rugăm să reîncercați.");
    } finally {
      setSubmitting(false);
    }
  };

  // ── Render repeat applicant screen ──
  if (hasSubmittedBefore) {
    return (
      <div className="min-h-screen bg-ivory text-dark flex flex-col justify-between">
        <SiteNav />
        <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 py-32 text-center">
          <div className="size-20 rounded-full bg-indigo-brand/10 text-indigo-brand flex items-center justify-center text-4xl mb-8 animate-float">
            💖
          </div>
          <h1 className="text-2xl font-bold leading-snug text-dark sm:text-3xl">
            Wait, tu ai mai fost pe aici!
          </h1>
          <p className="mt-6 text-sm text-dark/70 leading-relaxed md:text-base">
            Așa de excited ești că vrei să mai aplici o dată? Te înțelegem :) dar te rugăm să mai ai puțină răbdare! Îți urăm mult succes mai departe!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center">
            <Link
              to="/"
              className="inline-flex rounded-full bg-dark px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-ivory transition-all hover:bg-indigo-brand hover:scale-105 active:scale-95"
            >
              Înapoi acasă
            </Link>
            <button
              onClick={handleLogout}
              className="text-xs font-bold uppercase tracking-widest text-dark/45 hover:text-dark transition-colors cursor-pointer"
            >
              Deconectează contul ({user?.email})
            </button>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  // ── Render success screen ──
  if (submitted) {
    return (
      <div className="min-h-screen bg-ivory text-dark">
        <SiteNav />
        <main className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-32 text-center">
          {/* Emoji heart */}
          <div className="mb-6 text-6xl animate-fade-up select-none">🎉</div>

          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-indigo-brand animate-fade-up">
            Confirmat!
          </p>
          <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl animate-fade-up">
            Îți mulțumim pentru{" "}
            <span className="font-serif italic font-normal text-indigo-brand">completare</span>.
          </h1>
          <p className="mt-6 max-w-md text-base text-dark/60 md:text-lg animate-fade-up leading-relaxed">
            Formularul tău a ajuns în siguranță la noi. 🙌<br />
            Echipa noastră va reveni cu detalii după terminarea perioadei de înscriere.<br />
            <span className="mt-3 inline-block text-sm text-dark/45">Între timp, poți explora mai mult despre comunitățile și proiectele noastre.</span>
          </p>
          {user && (
            <button
              onClick={handleLogout}
              className="mt-6 text-xs font-bold uppercase tracking-widest text-dark/35 hover:text-dark transition-colors cursor-pointer"
            >
              Deconectare ({user.email})
            </button>
          )}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/comunitati/$id"
              params={{ id: "business-club" }}
              className="inline-flex rounded-full border border-dark/10 bg-white px-6 py-3 text-xs font-bold uppercase tracking-widest text-dark transition-all hover:border-indigo-brand/40 hover:text-indigo-brand hover:scale-105 active:scale-95 shadow-sm"
            >
              Explorează Comunitățile
            </Link>
            <Link
              to="/"
              className="inline-flex rounded-full bg-dark px-8 py-4 text-xs font-bold uppercase tracking-widest text-ivory transition-colors hover:bg-indigo-brand hover:scale-105 active:scale-95"
            >
              Înapoi acasă
            </Link>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  // ── Render entry login screen ──
  if (!user && !loadingUser) {
    return (
      <div className="min-h-screen bg-ivory text-dark flex flex-col justify-between">
        <SiteNav />
        <main className="mx-auto max-w-2xl px-6 pb-24 pt-32 sm:pt-40 text-center flex-1 flex flex-col justify-center">
          <header className="mx-auto max-w-md text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-indigo-brand">
              Seria 2026 · Recrutări
            </p>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
              Pregătit de{" "}
              <span className="font-serif italic font-normal text-indigo-brand">înscriere</span>?
            </h1>
            <p className="mt-6 text-sm text-dark/60 leading-relaxed sm:text-base">
              Pentru a-ți asigura auto-salvarea progresului în timp real și posibilitatea de a continua completarea formularului de pe orice dispozitiv, te rugăm să te conectezi.
            </p>
          </header>

          <div className="mx-auto mt-10 w-full max-w-sm rounded-[2rem] border border-dark/5 bg-white p-8 shadow-sm flex flex-col items-center">
            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 rounded-xl border border-dark/15 bg-white hover:bg-ivory/30 px-6 py-4 text-xs font-bold uppercase tracking-widest text-dark transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-sm"
            >
              <svg viewBox="0 0 24 24" className="size-5 shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
              </svg>
              Conectare cu Google
            </button>

            {useLocalStorageFallback && (
              <p className="mt-4 text-[10px] font-mono text-emerald-600 font-bold uppercase tracking-wider">
                ✓ Modul offline activat
              </p>
            )}

            <div className="mt-6 flex flex-col gap-2 w-full text-center">
              <span className="text-[10px] text-dark/45 font-mono uppercase tracking-widest">
                Timp de completare estimat: 5 min
              </span>
              <button 
                onClick={() => setUseLocalStorageFallback(true)}
                className="text-[9px] font-bold text-indigo-brand/60 hover:text-indigo-brand uppercase tracking-wider cursor-pointer mt-2 underline"
              >
                Nu doresc salvarea online (utilizează browser local)
              </button>
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  // ── Render loading screen ──
  if (loadingUser || checkingSubmission) {
    return (
      <div className="min-h-screen bg-ivory text-dark flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="size-10 border-4 border-indigo-brand/20 border-t-indigo-brand rounded-full animate-spin" />
          <p className="text-xs font-mono uppercase tracking-widest text-dark/40">Se încarcă contul...</p>
        </div>
      </div>
    );
  }

  // Dynamic question mappings based on Step 2 options
  const activeCommunityQs = formData.community ? communityQuestions[formData.community as keyof typeof communityQuestions] : [];

  return (
    <div className="min-h-screen bg-ivory text-dark">
      <SiteNav />

      <main className="mx-auto max-w-5xl px-6 pb-24 pt-32 sm:pt-40">
        <header className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-indigo-brand">
              Seria 2026 · Formular
            </span>
            <span className="text-dark/20">•</span>
            <span className="text-[9px] font-bold uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 flex items-center gap-1.5 animate-pulse">
              <span className="size-1.5 bg-emerald-500 rounded-full" /> Progres auto-salvat
            </span>
          </div>
          <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            Aplicare la <span className="font-serif italic font-normal text-indigo-brand">VIP Romania</span>.
          </h1>
          <div className="mt-4 flex items-center justify-center gap-3 text-xs text-dark/45 font-mono uppercase">
            <span>Conectat ca: {user.email}</span>
            <span>•</span>
            <button onClick={handleLogout} className="text-indigo-brand hover:underline font-bold cursor-pointer">
              Deconectare
            </button>
          </div>
        </header>

        {/* Wizard progress tracker */}
        <div className="mx-auto mt-12 max-w-lg">
          <div className="relative flex items-center justify-between">
            {/* Connection Line */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-dark/10 -translate-y-1/2 -z-10" />
            <div 
              className="absolute left-0 top-1/2 h-0.5 bg-indigo-brand -translate-y-1/2 -z-10 transition-all duration-500 ease-out" 
              style={{ width: `${((activeStep - 1) / 3) * 100}%` }}
            />

            {steps.map((s) => {
              const isCompleted = activeStep > s.id;
              const isActive = activeStep === s.id;
              const hasStepError = stepsWithErrors.includes(s.id);
              return (
                <div key={s.id} className="flex flex-col items-center">
                  <div className={`size-8 rounded-full flex items-center justify-center text-xs font-bold border transition-all duration-500 ${
                    hasStepError
                      ? "bg-red-500 text-white border-red-500 shadow-md shadow-red-500/20"
                      : isCompleted 
                        ? "bg-indigo-brand text-white border-indigo-brand" 
                        : isActive 
                          ? "bg-white text-indigo-brand border-indigo-brand ring-4 ring-indigo-brand/20" 
                          : "bg-white text-dark/40 border-dark/10"
                  }`}>
                    {hasStepError ? "!" : isCompleted ? "✓" : s.id}
                  </div>
                  <span className={`text-[9px] font-bold uppercase tracking-wider mt-2 transition-colors duration-300 ${
                    hasStepError 
                      ? "text-red-500" 
                      : isActive 
                        ? "text-indigo-brand" 
                        : "text-dark/40"
                  }`}>
                    {s.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Form Container */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mx-auto mt-12 max-w-xl rounded-[2rem] border border-dark/5 bg-white p-6 shadow-sm sm:p-10 md:p-12 relative"
        >
          {/* Honeypot field (invisible to users) */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="website_url"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="space-y-6">
            {/* STEP 1: Personal Contact details */}
            {activeStep === 1 && (
              <div className="space-y-6 animate-fade-up">
                <div className="border-b border-dark/5 pb-4 mb-4">
                  <h3 className="font-serif text-lg font-bold text-dark italic">Informații de Contact</h3>
                  <p className="text-[11px] text-dark/40 uppercase tracking-widest mt-1">Pasul 1 din 4 · Poate fi continuat mai târziu</p>
                </div>
                <Field
                  label="Nume complet"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  error={errors.fullName}
                  placeholder="Andrei Ionescu"
                />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Email</Label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      disabled
                      className="w-full rounded-xl border border-dark/10 bg-ivory/30 px-4 py-3 text-sm text-dark/50 outline-none cursor-not-allowed"
                    />
                    <p className="text-[9px] text-dark/45">Email pre-furnizat de Google.</p>
                  </div>
                  <Field
                    label="Telefon"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    error={errors.phone}
                    placeholder="+40 7XX XXX XXX"
                  />
                </div>
              </div>
            )}

            {/* STEP 2: Options & Education */}
            {activeStep === 2 && (
              <div className="space-y-6 animate-fade-up">
                <div className="border-b border-dark/5 pb-4 mb-4">
                  <h3 className="font-serif text-lg font-bold text-dark italic">Opțiuni și Parcurs Academic</h3>
                  <p className="text-[11px] text-dark/40 uppercase tracking-widest mt-1">Pasul 2 din 4 · Alegerile sunt obligatorii</p>
                </div>
                
                <Field
                  label="Universitate"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  error={errors.university}
                  placeholder="ASE, UB, Politehnica..."
                />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>An de studiu</Label>
                    <select
                      name="year"
                      value={formData.year}
                      onChange={handleInputChange}
                      className={`w-full appearance-none rounded-xl border bg-ivory/50 px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-indigo-brand/20 cursor-pointer ${
                        errors.year ? "border-red-500" : "border-dark/10"
                      }`}
                    >
                      <option value="" disabled>Alege...</option>
                      <option value="Licență, anul 1">Licență, anul 1</option>
                      <option value="Licență, anul 2">Licență, anul 2</option>
                      <option value="Licență, anul 3">Licență, anul 3</option>
                      <option value="Master, anul 1">Master, anul 1</option>
                      <option value="Master, anul 2">Master, anul 2</option>
                      <option value="Altul">Altul</option>
                    </select>
                    {errors.year && <ErrorText>{errors.year}</ErrorText>}
                  </div>
                  <Field
                    label="Profil / Facultate"
                    name="profile"
                    value={formData.profile}
                    onChange={handleInputChange}
                    error={errors.profile}
                    placeholder="Finanțe, Informatică, Marketing..."
                  />
                </div>

                {/* Community Selection (Blocking) */}
                <div className="space-y-2 pt-2">
                  <Label>Comunitate preferată * (Obligatoriu)</Label>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {communities.map((c) => {
                      const isChecked = formData.community === c;
                      return (
                        <label
                          key={c}
                          className={`relative flex cursor-pointer items-center gap-4 rounded-2xl border px-5 py-4 text-sm transition-all duration-300 hover:border-indigo-brand/40 hover:bg-white/80 active:scale-[0.97] select-none ${
                            isChecked
                              ? "border-indigo-brand bg-indigo-brand/5 shadow-md shadow-indigo-brand/5"
                              : errors.community 
                                ? "border-red-300 bg-red-50/10" 
                                : "border-dark/10 bg-ivory/50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="community"
                            value={c}
                            checked={isChecked}
                            onChange={(e) => setFormData(prev => ({ ...prev, community: e.target.value }))}
                            className="sr-only"
                          />
                          <div className={`flex size-5 shrink-0 items-center justify-center rounded-full border-2 bg-white transition-all duration-300 ${
                            isChecked ? "border-indigo-brand scale-105" : "border-dark/20"
                          }`}>
                            <div className={`size-2.5 rounded-full bg-indigo-brand transition-transform duration-500 ${
                              isChecked ? "scale-100" : "scale-0"
                            }`} />
                          </div>
                          <span className={`whitespace-normal break-words font-bold uppercase tracking-wider transition-colors ${
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

                {/* Department Selection (Blocking) */}
                <div className="space-y-2 pt-2">
                  <Label>Departament preferat * (Obligatoriu)</Label>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {departments.map((d) => {
                      const isChecked = formData.department === d;
                      return (
                        <label
                          key={d}
                          className={`relative flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-xs transition-all duration-300 hover:border-indigo-brand/40 hover:bg-white/80 active:scale-[0.97] select-none ${
                            isChecked
                              ? "border-indigo-brand bg-indigo-brand/5 shadow-md shadow-indigo-brand/5"
                              : errors.department 
                                ? "border-red-300 bg-red-50/10" 
                                : "border-dark/10 bg-ivory/50"
                          }`}
                        >
                          <input
                            type="radio"
                            name="department"
                            value={d}
                            checked={isChecked}
                            onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
                            className="sr-only"
                          />
                          <div className={`flex size-4 shrink-0 items-center justify-center rounded-full border-2 bg-white transition-all duration-300 ${
                            isChecked ? "border-indigo-brand scale-105" : "border-dark/20"
                          }`}>
                            <div className={`size-2 rounded-full bg-indigo-brand transition-transform duration-500 ${
                              isChecked ? "scale-100" : "scale-0"
                            }`} />
                          </div>
                          <span className={`whitespace-normal break-words font-bold uppercase tracking-wider transition-colors ${
                            isChecked ? "text-indigo-brand" : "text-dark/70"
                          }`}>
                            {d}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                  {errors.department && <ErrorText>{errors.department}</ErrorText>}
                </div>
              </div>
            )}

            {/* STEP 3: Specific Dynamic Questions */}
            {activeStep === 3 && (
              <div className="space-y-6 animate-fade-up">
                <div className="border-b border-dark/5 pb-4 mb-4">
                  <h3 className="font-serif text-lg font-bold text-dark italic">Întrebări Specifice</h3>
                  <p className="text-[11px] text-dark/40 uppercase tracking-widest mt-1">Pasul 3 din 4 · Generat dinamic pentru alegerile tale</p>
                </div>

                {/* Community specific questions */}
                {activeCommunityQs.length > 0 && (
                  <div className="space-y-6">
                    <h4 className="font-bold text-xs uppercase tracking-widest text-indigo-brand border-l-2 border-indigo-brand pl-3">
                      Comunitate: {formData.community}
                    </h4>
                    {activeCommunityQs.map((q, idx) => {
                      const name = idx === 0 ? "communityQ1" : "communityQ2";
                      const error = errors[name];
                      const val = idx === 0 ? formData.communityQ1 : formData.communityQ2;
                      return (
                        <div key={q.key} className="space-y-2">
                          <Label>{q.label}</Label>
                          <textarea
                            name={name}
                            value={val}
                            onChange={handleInputChange}
                            rows={3}
                            placeholder="Introdu răspunsul tău (minim 15 caractere)..."
                            className={`w-full resize-none rounded-xl border bg-ivory/50 px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-indigo-brand/20 ${
                              error ? "border-red-500 focus:border-red-500" : "border-dark/10 focus:border-indigo-brand"
                            }`}
                          />
                          {error && <ErrorText>{error}</ErrorText>}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* STEP 4: Motivation & Final Submission */}
            {activeStep === 4 && (
              <div className="space-y-6 animate-fade-up">
                <div className="border-b border-dark/5 pb-4 mb-4">
                  <h3 className="font-serif text-lg font-bold text-dark italic">Motivație și Eseu</h3>
                  <p className="text-[11px] text-dark/40 uppercase tracking-widest mt-1">Pasul 4 din 4 · Eseu motivațional final</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <Label>De ce vrei să te alături VIP?</Label>
                    <span className="text-[9px] font-mono text-dark/40">
                      {formData.motivation.length} / 1500 caractere
                    </span>
                  </div>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={6}
                    maxLength={1500}
                    placeholder="Spune-ne pe scurt ce te motivează, ce ai făcut până acum și ce vrei să construiești în cadrul VIP..."
                    className={`w-full resize-none rounded-xl border bg-ivory/50 px-4 py-3 text-sm outline-none transition-all focus:ring-2 focus:ring-indigo-brand/20 ${
                      errors.motivation ? "border-red-500 focus:border-red-500" : "border-dark/10 focus:border-indigo-brand"
                    }`}
                  />
                  {errors.motivation && <ErrorText>{errors.motivation}</ErrorText>}
                </div>

                {/* Final validation error summary */}
                {Object.keys(errors).length > 0 && (
                  <div className="rounded-2xl border border-red-200 bg-red-50/50 p-4.5 text-xs text-red-600 animate-fade-up">
                    <p className="font-bold uppercase tracking-wider mb-2">Există erori sau întrebări necompletate în formular:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      {Object.entries(errors).map(([key, msg]) => (
                        <li key={key}>{msg}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex gap-4">
            {activeStep > 1 && (
              <button
                type="button"
                onClick={handlePrev}
                className="flex-1 rounded-full border border-dark/15 hover:border-dark py-4 text-xs font-bold uppercase tracking-widest text-dark transition-all duration-300 active:scale-95 cursor-pointer text-center"
              >
                Înapoi
              </button>
            )}

            {activeStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 rounded-full bg-dark hover:bg-indigo-brand py-4 text-xs font-bold uppercase tracking-widest text-ivory transition-all duration-300 active:scale-95 cursor-pointer text-center"
              >
                Continuă
              </button>
            ) : (
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 rounded-full bg-indigo-brand hover:bg-indigo-700 py-4 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 active:scale-95 cursor-pointer text-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Se trimite..." : "Trimite aplicația"}
              </button>
            )}
          </div>

          <p className="mt-6 text-center text-[9px] uppercase tracking-widest text-dark/35">
            Prin trimitere, ești de acord cu stocarea datelor pentru procesul de admitere VIP.
          </p>
        </form>
      </main>

      {/* Floating Autosave Status Toast */}
      {user && !hasSubmittedBefore && (
        <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-dark/10 bg-white/90 px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider text-dark shadow-xl backdrop-blur-md transition-all duration-300 dark:border-white/10 dark:bg-dark-surface/90 dark:text-ivory ${
          saveStatus !== "idle" ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
        }`}>
          {saveStatus === "saving" && (
            <>
              <svg className="animate-spin size-3.5 text-indigo-brand" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Se salvează...</span>
            </>
          )}
          {saveStatus === "saved" && (
            <>
              <span className="relative flex size-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-600 dark:text-emerald-400">Progres salvat</span>
            </>
          )}
          {saveStatus === "error" && (
            <>
              <span className="size-2 rounded-full bg-rose-500 shrink-0" />
              <span className="text-rose-600 dark:text-rose-400">Eroare salvare</span>
            </>
          )}
        </div>
      )}

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
  return <p className="text-xs text-red-600 font-bold mt-1">{children}</p>;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border bg-ivory/50 px-4 py-3 text-sm outline-none transition-all placeholder:text-dark/30 focus:ring-2 focus:ring-indigo-brand/20 ${
          error ? "border-red-500 focus:border-red-500" : "border-dark/10 focus:border-indigo-brand"
        }`}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}
