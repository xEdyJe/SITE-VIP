import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, useRef, type ReactNode } from "react";
import Lenis from "lenis";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-dark/40">Eroare 404</p>
        <h1 className="mt-6 text-5xl font-bold tracking-tight text-dark">
          Pagina nu <span className="font-serif italic font-normal text-indigo-brand">există</span>
        </h1>
        <p className="mt-4 text-sm text-dark/60">
          Ai ajuns pe un drum care nu duce nicăieri. Hai înapoi la origine.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-dark px-6 py-3 text-xs font-bold uppercase tracking-widest text-ivory transition-colors hover:bg-indigo-brand"
          >
            Înapoi acasă
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold tracking-tight text-dark">
          Ceva nu <span className="font-serif italic font-normal text-indigo-brand">a mers</span>
        </h1>
        <p className="mt-3 text-sm text-dark/60">
          Am întâmpinat o problemă la încărcare. Poți reîncerca sau te întorci acasă.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-dark px-6 py-3 text-xs font-bold uppercase tracking-widest text-ivory transition-colors hover:bg-indigo-brand"
          >
            Reîncearcă
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-dark/10 bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-widest text-dark transition-colors hover:bg-dark/5"
          >
            Acasă
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "VIP Romania — Unde excepționalul prinde aripi" },
      {
        name: "description",
        content:
          "VIP Romania este comunitatea studenților ambițioși care modelează viitorul elitei românești prin patru piloni: Business, Econosofia, International Affairs și Leadership.",
      },
      { name: "author", content: "VIP Romania" },
      { property: "og:title", content: "VIP Romania — Unde excepționalul prinde aripi" },
      {
        property: "og:description",
        content:
          "Cea mai influentă organizație de studenți din România. Patru comunități, un singur standard de excelență.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ro_RO" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "VIP Romania — Unde excepționalul prinde aripi" },
      {
        name: "twitter:description",
        content: "Patru comunități, un singur standard de excelență. Aplică pentru seria viitoare.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ro">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const barRef = useRef<HTMLDivElement>(null);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const [curtainState, setCurtainState] = useState<"idle" | "closing" | "opening">("idle");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${progress / 100})`;
      }
      
      const pastThreshold = window.scrollY > 400;
      setShowBackToTop((prev) => (prev !== pastThreshold ? pastThreshold : prev));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Start transition wipe (closing the curtain)
    setCurtainState("closing");

    // After 450ms, open the curtain (sliding it out at the top) and scroll to top
    const t1 = setTimeout(() => {
      setCurtainState("opening");
      window.scrollTo(0, 0);
    }, 450);

    // After 900ms, reset curtain position to idle (instantly, below screen)
    const t2 = setTimeout(() => {
      setCurtainState("idle");
    }, 900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname]);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div 
        ref={barRef}
        className="fixed top-0 left-0 z-50 h-1 bg-indigo-brand w-full origin-left will-change-transform transition-transform duration-75"
        style={{ transform: 'scaleX(0)' }}
      />
      
      {/* Curtain Transition Overlay */}
      <div className={`curtain-overlay curtain-${curtainState}`} />

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 z-40 flex size-12 cursor-pointer items-center justify-center rounded-full bg-indigo-brand text-white shadow-lg shadow-indigo-brand/35 transition-all duration-300 hover:bg-indigo-600 hover:scale-110 active:scale-95 ${
          showBackToTop ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-75 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="size-5"
        >
          <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <Outlet />
    </QueryClientProvider>
  );
}
