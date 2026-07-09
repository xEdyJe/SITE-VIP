import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

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
        content: "Patru comunități, un singur standard de excelență. Aplică pentru cohorta viitoare.",
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

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
