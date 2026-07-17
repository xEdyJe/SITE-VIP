declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: any;
    _fbq: any;
  }
}

const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID || "";
const pixelId = import.meta.env.VITE_FACEBOOK_PIXEL_ID || "";

export function initAnalytics() {
  if (typeof window === "undefined") return;

  // 1. Google Analytics 4
  if (gaId && !window.gtag) {
    const gaScript = document.createElement("script");
    gaScript.async = true;
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", gaId);
    console.log("[Analytics] GA4 Initialized:", gaId);
  }

  // 2. Facebook Pixel
  if (pixelId && !window.fbq) {
    const fbScript = document.createElement("script");
    fbScript.async = true;
    fbScript.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(fbScript);

    const queue: any[] = [];
    window.fbq = function fbq() {
      if (window.fbq.callMethod) {
        window.fbq.callMethod.apply(window.fbq, arguments as any);
      } else {
        window.fbq.queue.push(arguments as any);
      }
    };
    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = "2.0";
    window.fbq.queue = queue;

    window.fbq("init", pixelId);
    window.fbq("track", "PageView");
    console.log("[Analytics] Facebook Pixel Initialized:", pixelId);
  }
}

export function trackStep(stepNumber: number, stepName: string) {
  if (typeof window === "undefined") return;

  // Track in GA4
  if (window.gtag) {
    window.gtag("event", "form_step", {
      step_number: stepNumber,
      step_name: stepName,
    });
  }

  // Track in Facebook Pixel
  if (window.fbq) {
    window.fbq("trackCustom", `FormStep${stepNumber}`, { step_name: stepName });
  }

  console.log(`[Analytics] Tracked Step ${stepNumber}: ${stepName}`);
}

export function trackSubmission() {
  if (typeof window === "undefined") return;

  // Track in GA4
  if (window.gtag) {
    window.gtag("event", "generate_lead", {
      event_category: "recruitment",
      event_label: "VIP Application Submitted",
    });
  }

  // Track Lead in Facebook Pixel
  if (window.fbq) {
    window.fbq("track", "Lead", {
      content_name: "VIP Recruitment Form",
      status: "Submitted",
    });
  }

  console.log("[Analytics] Tracked Submission Success");
}
