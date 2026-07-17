import { Link } from "@tanstack/react-router";
import logoVip from "@/assets/logo vip.png";
import logoVipDark from "@/assets/logo dark mode vip nou.png";

// Community Logos
import bcTreeLogo from "@/assets/logouri si altele/LOGO BC PT TREE.png";
import ecoTreeLogo from "@/assets/ECONOSOFIA/LOGO ECO PT TREE.png";
import iaTreeLogo from "@/assets/IA/LOGO IA PT TREE.png";
import ldTreeLogo from "@/assets/logouri si altele/LOGO LD PT TREE.png";

// Department Logos
import mktLogo from "@/assets/logouri si altele/mkt.svg";
import prLogo from "@/assets/logouri si altele/pr.svg";
import crtLogo from "@/assets/logouri si altele/crt.svg";
import hrLogo from "@/assets/logouri si altele/hr.svg";
import bdLogo from "@/assets/logouri si altele/bd.svg";

// Project Logos
import yafLogo from "@/assets/2025-2026/YAF.png";
import ldsLogo from "@/assets/2025-2026/LDS.png";
import isLogo from "@/assets/2025-2026/IS.png";
import funkyLogo from "@/assets/2025-2026/FUNKY.png";
import reelSelfLogo from "@/assets/2025-2026/REELSELF.png";

interface VipStructureProps {
  activeCommunityId?: "business-club" | "econosofia" | "international-affairs" | "leadership-development";
}

export function VipStructure({ activeCommunityId }: VipStructureProps) {
  const communities = [
    { id: "business-club", label: "Business Club", logo: bcTreeLogo },
    { id: "econosofia", label: "Econosofia", logo: ecoTreeLogo },
    { id: "international-affairs", label: "International Affairs", logo: iaTreeLogo },
    { id: "leadership-development", label: "Leadership Development", logo: ldTreeLogo },
  ];

  const departments = [
    { label: "Marketing", logo: mktLogo },
    { label: "Public Relations", logo: prLogo },
    { label: "Creative", logo: crtLogo },
    { label: "Human Resources", logo: hrLogo },
    { label: "Business Development", logo: bdLogo },
  ];

  const projects = [
    { label: "Leader Shape", logo: ldsLogo },
    { label: "Young Leaders Forum", logo: yafLogo },
    { label: "Reel Self", logo: reelSelfLogo },
    { label: "Funky VIPcast", logo: funkyLogo },
    { label: "Investment School", logo: isLogo },
  ];

  // Helper to determine the opacity class
  const getOpacityClass = (id: string) => {
    if (!activeCommunityId) return "opacity-100 hover:scale-[1.03] shadow-md shadow-dark/[0.02]";
    return id === activeCommunityId ? "opacity-100 scale-[1.03]" : "opacity-35 hover:opacity-75 grayscale hover:grayscale-0";
  };

  // Helper for border color based on active community
  const getBorderColor = () => {
    if (!activeCommunityId) return "border-indigo-brand/20 shadow-xl shadow-indigo-brand/[0.02]";
    switch (activeCommunityId) {
      case "business-club":
        return "border-orange-600/30";
      case "econosofia":
        return "border-sky-600/30";
      case "international-affairs":
        return "border-indigo-600/30";
      case "leadership-development":
        return "border-emerald-600/30";
      default:
        return "border-dark/5";
    }
  };

  // Helper for background color highlight
  const getBgClass = (id: string) => {
    if (!activeCommunityId) {
      switch (id) {
        case "business-club":
          return "bg-orange-600 text-white border-transparent hover:bg-orange-700";
        case "econosofia":
          return "bg-sky-600 text-white border-transparent hover:bg-sky-700";
        case "international-affairs":
          return "bg-indigo-600 text-white border-transparent hover:bg-indigo-700";
        case "leadership-development":
          return "bg-emerald-600 text-white border-transparent hover:bg-emerald-700";
      }
    }
    if (id !== activeCommunityId) return "bg-white/50 border-dark/5 text-dark/70";
    switch (id) {
      case "business-club":
        return "bg-orange-600 text-white border-transparent shadow-lg shadow-orange-600/25";
      case "econosofia":
        return "bg-sky-600 text-white border-transparent shadow-lg shadow-sky-600/25";
      case "international-affairs":
        return "bg-indigo-600 text-white border-transparent shadow-lg shadow-indigo-600/25";
      case "leadership-development":
        return "bg-emerald-600 text-white border-transparent shadow-lg shadow-emerald-600/25";
    }
  };

  return (
    <div className={`w-full rounded-[2.5rem] border ${getBorderColor()} bg-white/40 p-6 md:p-12 backdrop-blur-sm`}>
      {/* Hierarchy Container */}
      <div className="flex flex-col items-center gap-12">

        {/* Level 1: NGO */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center rounded-2xl border border-dark/10 bg-white px-12 py-4.5 shadow-md hover:scale-[1.02] transition-transform duration-300">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-dark/40">Organizație</span>
            <img src={logoVip} alt="VIP Romania" className="h-10 w-auto object-contain mt-1.5 dark:hidden" />
            <img src={logoVipDark} alt="VIP Romania" className="h-10 w-auto object-contain mt-1.5 hidden dark:block" />
          </div>

          {/* Connector Line down from NGO */}
          <div className="h-8 w-px bg-dark/10" />
        </div>

        {/* Level 2: Comunități */}
        <div className="w-full">
          <div className="grid grid-cols-[100px_1fr] items-center gap-6 border-y border-dark/5 py-10 md:grid-cols-[180px_1fr]">
            <span className="font-mono text-[11px] md:text-xs font-black uppercase tracking-[0.25em] text-dark/50">Comunități</span>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {communities.map((c) => (
                <Link
                  key={c.id}
                  to={`/comunitati/${c.id}` as any}
                  className={`flex items-center gap-2.5 rounded-xl border p-4.5 md:p-5 transition-all duration-300 ${getOpacityClass(c.id)} ${getBgClass(c.id)}`}
                >
                  {(() => {
                    const isWhite = !activeCommunityId || c.id === activeCommunityId;
                    return (
                      <img
                        src={c.logo}
                        alt={c.label}
                        className={`size-6 md:size-7 object-contain transition-all duration-300 ${isWhite ? "brightness-0 invert" : "opacity-60 group-hover:opacity-100"
                          }`}
                      />
                    );
                  })()}
                  <span className="text-xs md:text-sm font-bold uppercase tracking-wider">{c.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Level 3: Departamente */}
        <div className="w-full">
          <div className="grid grid-cols-[100px_1fr] items-center gap-6 border-b border-dark/5 pb-10 md:grid-cols-[180px_1fr]">
            <span className="font-mono text-[11px] md:text-xs font-black uppercase tracking-[0.25em] text-dark/50">Departamente</span>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {departments.map((d) => (
                <div
                  key={d.label}
                  className="flex items-center gap-2.5 rounded-xl border border-dark/5 bg-white/70 p-4 md:p-4.5 text-dark/70 hover:text-dark hover:bg-white hover:scale-[1.02] shadow-sm hover:shadow duration-300 transition-all cursor-default"
                >
                  <img src={d.logo} alt={d.label} className="size-5 md:size-6 object-contain" />
                  <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider">{d.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Level 4: Proiecte */}
        <div className="w-full">
          <div className="grid grid-cols-[100px_1fr] items-center gap-6 md:grid-cols-[180px_1fr]">
            <span className="font-mono text-[11px] md:text-xs font-black uppercase tracking-[0.25em] text-dark/50">Proiecte</span>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {projects.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-2.5 rounded-xl border border-dark/5 bg-white/70 p-4 md:p-4.5 text-dark/70 hover:text-dark hover:bg-white hover:scale-[1.02] shadow-sm hover:shadow duration-300 transition-all cursor-default"
                >
                  <img src={p.logo} alt={p.label} className="size-5 md:size-6 object-contain" />
                  <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
