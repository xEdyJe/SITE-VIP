import { Link } from "@tanstack/react-router";
import logoVip from "@/assets/logo vip.png";

// --- CUSTOM ILLUSTRATIONS FOR DEPARTMENTS ---

export function MarketingIcon({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      {/* Background glow circle */}
      <circle cx="50" cy="50" r="40" fill="#EBF1FF" />
      {/* Wrench (Blue) */}
      <path
        d="M28 65 L40 53 M33 70 L45 58"
        stroke="#5121DE"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M26 62 C22 58 20 52 22 47 C23 44 26 42 29 44 C32 45 32 49 35 49 C37 49 39 46 38 43 C37 39 33 38 35 34 C37 30 43 28 47 32 L53 38 M26 62 L32 68"
        stroke="#5121DE"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Pencil (Dark) */}
      <path
        d="M72 28 L42 58 L38 62 L42 58 Z"
        fill="#1A1A1A"
        stroke="#1A1A1A"
        strokeWidth="1.5"
      />
      <path
        d="M42 58 L72 28 L76 32 L46 62 L38 62 L42 58 Z"
        stroke="#1A1A1A"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M38 62 L41 59 L43 61 Z" fill="#5121DE" />
      {/* Hand/Glove (Blue Accent) */}
      <path
        d="M44 48 C44 48 48 42 52 46 C56 50 50 56 50 56 M49 53 C49 53 54 48 57 51 C60 54 54 60 54 60 M53 58 C53 58 59 54 61 57 C63 60 57 66 57 66"
        stroke="#5121DE"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M48 68 C45 64 42 62 42 62 C42 62 48 54 55 60 C62 66 58 72 58 72 C58 72 52 72 48 68 Z"
        fill="#5121DE"
        stroke="#5121DE"
        strokeWidth="2"
      />
    </svg>
  );
}

export function PublicRelationsIcon({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      {/* Background glow circle */}
      <circle cx="50" cy="50" r="40" fill="#EBF1FF" />
      {/* Left Hand */}
      <path
        d="M25 45 C32 45 37 40 43 45 C46 47 48 50 52 48 C55 46 53 43 51 41 C47 38 41 38 35 34 C31 31 25 35 25 40"
        stroke="#1A1A1A"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M25 40 L20 48 L22 55 L32 55 L38 52"
        stroke="#1A1A1A"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Right Hand / Handshake overlap */}
      <path
        d="M75 40 C68 40 63 45 57 40 C54 38 52 35 48 37 C45 39 47 42 49 44 C53 47 59 47 65 51 C69 54 75 50 75 45"
        stroke="#5121DE"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="#5121DE"
        fillOpacity="0.1"
      />
      <path
        d="M75 45 L80 37 L78 30 L68 30 L62 33"
        stroke="#5121DE"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Shaking Fingers details */}
      <path
        d="M45 46 C48 49 53 49 55 46 M47 50 C50 53 55 53 57 50 M50 54 C53 57 58 57 60 54 M53 58 C56 61 61 61 63 58"
        stroke="#1A1A1A"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CreativeIcon({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      {/* Background glow circle */}
      <circle cx="50" cy="50" r="40" fill="#EBF1FF" />
      {/* Abstract 3D blocks composition */}
      {/* Top Triangle */}
      <polygon
        points="50,15 65,35 35,35"
        stroke="#5121DE"
        strokeWidth="3.5"
        fill="#5121DE"
        strokeLinejoin="round"
      />
      {/* Middle Square */}
      <rect
        x="40"
        y="42"
        width="20"
        height="20"
        stroke="#1A1A1A"
        strokeWidth="3.5"
        fill="#1A1A1A"
        fillOpacity="0.1"
        strokeLinejoin="round"
      />
      {/* Cylinder left leaning */}
      <path
        d="M32 50 L40 68 C42 72 38 76 34 74 L26 56 C24 52 28 48 32 50 Z"
        stroke="#1A1A1A"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Cylinder right leaning */}
      <path
        d="M68 50 L60 68 C58 72 62 76 66 74 L74 56 C76 52 72 48 68 50 Z"
        stroke="#1A1A1A"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Semi circle / Arch */}
      <path
        d="M38 52 C38 42 62 42 62 52"
        stroke="#5121DE"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Base horizontal cylinder/block */}
      <rect
        x="25"
        y="78"
        width="50"
        height="7"
        rx="3.5"
        stroke="#1A1A1A"
        strokeWidth="3.5"
        fill="#5121DE"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HumanResourcesIcon({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      {/* Background glow circle */}
      <circle cx="50" cy="50" r="40" fill="#EBF1FF" />
      {/* Magnifying Glass */}
      <circle
        cx="45"
        cy="45"
        r="18"
        stroke="#5121DE"
        strokeWidth="4"
        fill="#5121DE"
        fillOpacity="0.05"
      />
      <path
        d="M58 58 L78 78"
        stroke="#1A1A1A"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      {/* Person Profile inside */}
      <circle cx="45" cy="40" r="6" stroke="#1A1A1A" strokeWidth="3" />
      <path
        d="M34 53 C34 48 38 46 45 46 C52 46 56 48 56 53"
        stroke="#1A1A1A"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BusinessDevelopmentIcon({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className}>
      {/* Background glow circle */}
      <circle cx="50" cy="50" r="40" fill="#EBF1FF" />
      {/* Coins / Gears stack */}
      {/* Gear 1 (Top Left) */}
      <circle cx="38" cy="38" r="10" stroke="#5121DE" strokeWidth="3" />
      <path d="M38 25 L38 31 M38 45 L38 51 M25 38 L31 38 M45 38 L51 38" stroke="#5121DE" strokeWidth="2.5" />
      {/* Gear 2 (Bottom Right) */}
      <circle cx="62" cy="62" r="12" stroke="#1A1A1A" strokeWidth="3.5" />
      <path d="M62 46 L62 52 M62 72 L62 78 M46 62 L52 62 M72 62 L78 62" stroke="#1A1A1A" strokeWidth="2.5" />
      {/* Interconnecting gear lines */}
      <path d="M46 46 L54 54" stroke="#5121DE" strokeWidth="3" strokeDasharray="2 2" />
      {/* Coins/Bars represent business scale */}
      <rect x="25" y="65" width="10" height="12" rx="1" stroke="#1A1A1A" strokeWidth="2.5" fill="#5121DE" />
      <rect x="70" y="25" width="10" height="18" rx="1" stroke="#5121DE" strokeWidth="2.5" />
    </svg>
  );
}

// --- GENERAL MINI-ICONS FOR NGO & COMMUNITIES ---

function VipLogo() {
  return <img src={logoVip} alt="VIP Romania" className="h-8 w-auto object-contain" />;
}

function CommunityIcon({ name, className = "size-4" }: { name: string; className?: string }) {
  switch (name) {
    case "business-club":
      return <span className={className}>🔥</span>;
    case "econosofia":
      return <span className={className}>📈</span>;
    case "international-affairs":
      return <span className={className}>🌐</span>;
    case "leadership-development":
      return <span className={className}>🤝</span>;
    default:
      return <span className={className}>💎</span>;
  }
}

function ProjectIcon({ name, className = "size-4" }: { name: string; className?: string }) {
  switch (name) {
    case "Leader Shape":
      return <span className={className}>⛰️</span>;
    case "Focus Forum":
      return <span className={className}>🎙️</span>;
    case "REEL SELF":
      return <span className={className}>🎬</span>;
    case "Funky VIPcast":
      return <span className={className}>📻</span>;
    case "Investment School":
      return <span className={className}>🏫</span>;
    default:
      return <span className={className}>🚀</span>;
  }
}

interface VipDepartmentsStructureProps {
  activeDeptId: string;
  onSelectDept: (id: string) => void;
}

export function VipDepartmentsStructure({ activeDeptId, onSelectDept }: VipDepartmentsStructureProps) {
  const communities = [
    { id: "business-club", label: "Business Club" },
    { id: "econosofia", label: "Econosofia" },
    { id: "international-affairs", label: "International Affairs" },
    { id: "leadership-development", label: "Leadership Dev." },
  ];

  const departments = [
    { id: "marketing", label: "Marketing", icon: MarketingIcon },
    { id: "public-relations", label: "Public Relations", icon: PublicRelationsIcon },
    { id: "creative", label: "Creative", icon: CreativeIcon },
    { id: "human-resources", label: "Human Resources", icon: HumanResourcesIcon },
    { id: "business-development", label: "Business Dev.", icon: BusinessDevelopmentIcon },
  ];

  const projects = [
    { label: "Leader Shape" },
    { label: "Focus Forum" },
    { label: "REEL SELF" },
    { label: "Funky VIPcast" },
    { label: "Investment School" },
  ];

  return (
    <div className="w-full rounded-[2.5rem] border border-indigo-brand/20 bg-white/40 p-6 md:p-12 backdrop-blur-sm shadow-xl shadow-indigo-brand/[0.02]">
      {/* Desktop Blueprint Grid layout */}
      <div className="hidden lg:grid grid-cols-[200px_1fr] gap-8 relative">
        
        {/* LEFT COLUMN: Vertical Labels */}
        <div className="flex flex-col justify-between py-6 text-left border-r border-dark/5 pr-4 select-none">
          <div className="h-[68px] flex items-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-dark/30">VIP ONG</span>
          </div>
          <div className="h-[72px] flex items-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-dark/30">Comunități</span>
          </div>
          <div className="h-[124px] flex items-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-indigo-brand font-black">
              → Departamente
            </span>
          </div>
          <div className="h-[72px] flex items-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-dark/30">Proiecte</span>
          </div>
        </div>

        {/* RIGHT COLUMN: The Interactive Tree Hierarchy */}
        <div className="flex flex-col items-center gap-8 relative">
          
          {/* Level 1: NGO */}
          <div className="z-10 flex flex-col items-center">
            <div className="flex flex-col items-center rounded-2xl border border-dark/5 bg-white px-12 py-4 shadow-md opacity-60 hover:scale-[1.02] transition-transform duration-300">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-dark/40">Organizație</span>
              <div className="h-10 flex items-center mt-1.5">
                <VipLogo />
              </div>
            </div>
            
            {/* Connector Line 1: NGO to Comunități */}
            <div className="h-8 w-px bg-indigo-brand/20" />
          </div>

          {/* Level 2: Comunități (Row of 4) */}
          <div className="w-full relative z-10">
            {/* Horizontal bracket line */}
            <div className="absolute top-0 left-[12.5%] right-[12.5%] h-px bg-indigo-brand/20" />
            
            {/* Vertical ticks */}
            <div className="grid grid-cols-4 w-full">
              {communities.map((c, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-px h-3 bg-indigo-brand/20" />
                </div>
              ))}
            </div>

            {/* Community Cards */}
            <div className="grid grid-cols-4 gap-4 mt-1">
              {communities.map((c) => (
                <div
                  key={c.id}
                  className="flex items-center justify-center gap-3 rounded-xl border border-dark/5 bg-white/70 p-4 md:p-4.5 text-dark/40 opacity-45 select-none"
                >
                  <CommunityIcon name={c.id} className="size-6 shrink-0" />
                  <span className="text-[11px] md:text-xs font-bold uppercase tracking-wider">{c.label}</span>
                </div>
              ))}
            </div>

            {/* Connector Line 2: Comunități to Departamente */}
            <div className="flex flex-col items-center mt-4">
              <div className="h-8 w-px bg-indigo-brand/20" />
            </div>
          </div>

          {/* Level 3: Departamente (Row of 5) - ACTIVE LEVEL */}
          <div className="w-full relative z-20">
            {/* Horizontal bracket line */}
            <div className="absolute top-0 left-[10%] right-[10%] h-px bg-indigo-brand" />
            
            {/* Vertical ticks */}
            <div className="grid grid-cols-5 w-full">
              {departments.map((d) => (
                <div key={d.id} className="flex flex-col items-center">
                  <div className={`w-px h-3 ${activeDeptId === d.id ? "bg-indigo-brand w-[2px]" : "bg-indigo-brand/35"}`} />
                </div>
              ))}
            </div>

            {/* Department Buttons Container (White wrapper with blue outline as shown in mockup) */}
            <div className="mt-1 rounded-3xl border border-indigo-brand bg-white p-4.5 shadow-lg shadow-indigo-brand/5">
              <div className="grid grid-cols-5 gap-4">
                {departments.map((d) => {
                  const Icon = d.icon;
                  const isActive = activeDeptId === d.id;
                  return (
                    <button
                      key={d.id}
                      onClick={() => onSelectDept(d.id)}
                      className={`flex flex-col items-center justify-center gap-3.5 rounded-2xl py-4.5 px-3 transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-indigo-brand/5 border border-indigo-brand/20 scale-[1.03] ring-1 ring-indigo-brand/10"
                          : "bg-transparent border border-transparent hover:bg-dark/[0.02]"
                      }`}
                    >
                      <Icon className={`size-11 transition-transform duration-300 ${isActive ? "scale-110 drop-shadow-sm" : "opacity-80"}`} />
                      <span className={`text-[11px] md:text-xs font-black uppercase tracking-wider text-center ${
                        isActive ? "text-indigo-brand" : "text-dark/70"
                      }`}>
                        {d.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Connector Line 3: Departamente to Proiecte */}
            <div className="flex flex-col items-center mt-4">
              <div className="h-8 w-px bg-indigo-brand/20" />
            </div>
          </div>

          {/* Level 4: Proiecte (Row of 5) */}
          <div className="w-full relative z-10">
            {/* Horizontal bracket line */}
            <div className="absolute top-0 left-[10%] right-[10%] h-px bg-indigo-brand/20" />
            
            {/* Vertical ticks */}
            <div className="grid grid-cols-5 w-full">
              {projects.map((p, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-px h-3 bg-indigo-brand/20" />
                </div>
              ))}
            </div>

            {/* Project Cards */}
            <div className="grid grid-cols-5 gap-3 mt-1">
              {projects.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center justify-center gap-3 rounded-xl border border-dark/5 bg-white/70 p-4 md:p-4.5 text-dark/40 opacity-45 select-none"
                >
                  <ProjectIcon name={p.label} className="size-6 shrink-0" />
                  <span className="truncate text-[10px] md:text-[11px] font-bold uppercase tracking-wider">{p.label}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* Mobile-friendly layout */}
      <div className="lg:hidden flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-dark/5 pb-4">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-indigo-brand">
            Alege Departamentul:
          </span>
          <span className="text-[10px] bg-indigo-brand/10 text-indigo-brand px-3 py-1 rounded-full font-bold uppercase">
            Activ
          </span>
        </div>

        {/* Horizontal scroll list of department buttons for easy finger tapping */}
        <div className="flex gap-3 overflow-x-auto pb-3 -mx-2 px-2 scrollbar-none snap-x">
          {departments.map((d) => {
            const Icon = d.icon;
            const isActive = activeDeptId === d.id;
            return (
              <button
                key={d.id}
                onClick={() => onSelectDept(d.id)}
                className={`flex-shrink-0 flex items-center gap-3 rounded-2xl border px-4 py-3 snap-center transition-all ${
                  isActive
                    ? "bg-indigo-brand text-white border-transparent shadow-lg shadow-indigo-brand/20 scale-[1.02]"
                    : "bg-white border-dark/5 text-dark/70 hover:bg-dark/[0.01]"
                }`}
              >
                <div className={`p-1 rounded-lg ${isActive ? "bg-white/20" : "bg-indigo-brand/10"}`}>
                  <Icon className="size-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider">{d.label}</span>
              </button>
            );
          })}
        </div>

        <div className="text-center bg-white/30 rounded-2xl p-4 border border-dark/5">
          <p className="text-[11px] text-dark/50 leading-relaxed">
            Diagrama ierarhică completă a asociației (ONG → Comunități → Departamente → Proiecte) este disponibilă în versiunea desktop a site-ului.
          </p>
        </div>
      </div>

    </div>
  );
}
