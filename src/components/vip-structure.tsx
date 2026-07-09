import { Link } from "@tanstack/react-router";

interface VipStructureProps {
  activeCommunityId: "business-club" | "econosofia" | "international-affairs" | "leadership-development";
}

export function VipStructure({ activeCommunityId }: VipStructureProps) {
  const communities = [
    { id: "business-club", label: "Business Club", logo: "🔥" },
    { id: "econosofia", label: "Econosofia", logo: "📈" },
    { id: "international-affairs", label: "International Affairs", logo: "🌐" },
    { id: "leadership-development", label: "Leadership Development", logo: "🤝" },
  ];

  const departments = [
    { label: "Marketing", logo: "📢" },
    { label: "Public Relations", logo: "🤝" },
    { label: "Creative & IT", logo: "🎨" },
    { label: "Human Resources", logo: "👥" },
    { label: "Business Development", logo: "💰" },
  ];

  const projects = [
    { label: "Leader Shape", logo: "⛰️" },
    { label: "Young Leaders Forum", logo: "🎙️" },
    { label: "Reel Self", logo: "🎬" },
    { label: "Funky VIPcast", logo: "📻" },
    { label: "Investment School", logo: "🏫" },
  ];

  // Helper to determine the opacity class
  const getOpacityClass = (id: string) => {
    return id === activeCommunityId ? "opacity-100 scale-[1.02]" : "opacity-35 hover:opacity-75 grayscale hover:grayscale-0";
  };

  // Helper for border color based on active community
  const getBorderColor = () => {
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
      <div className="flex flex-col items-center gap-10">
        
        {/* Level 1: NGO */}
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center rounded-2xl border border-dark/10 bg-white px-8 py-3 shadow-sm">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-dark/40">Organizație</span>
            <span className="font-serif text-xl font-bold italic text-indigo-brand">vip.</span>
          </div>
          
          {/* Connector Line down from NGO */}
          <div className="h-6 w-px bg-dark/10" />
        </div>

        {/* Level 2: Comunități */}
        <div className="w-full">
          <div className="grid grid-cols-[100px_1fr] items-center gap-4 border-y border-dark/5 py-8 md:grid-cols-[150px_1fr]">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-dark/50">Comunități</span>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {communities.map((c) => (
                <Link
                  key={c.id}
                  to={`/comunitati/${c.id}`}
                  className={`flex items-center gap-2 rounded-xl border p-3.5 transition-all duration-300 ${getOpacityClass(c.id)} ${getBgClass(c.id)}`}
                >
                  <span className="text-base">{c.logo}</span>
                  <span className="text-xs font-bold uppercase tracking-wider">{c.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Level 3: Departamente */}
        <div className="w-full">
          <div className="grid grid-cols-[100px_1fr] items-center gap-4 border-b border-dark/5 pb-8 md:grid-cols-[150px_1fr]">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-dark/50">Departamente</span>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {departments.map((d) => (
                <div
                  key={d.label}
                  className="flex items-center gap-2 rounded-xl border border-dark/5 bg-white/70 px-3.5 py-3 text-dark/40 opacity-40 transition-opacity hover:opacity-80"
                >
                  <span className="text-sm">{d.logo}</span>
                  <span className="truncate text-[10px] font-bold uppercase tracking-wider">{d.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Level 4: Proiecte */}
        <div className="w-full">
          <div className="grid grid-cols-[100px_1fr] items-center gap-4 md:grid-cols-[150px_1fr]">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-dark/50">Proiecte</span>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {projects.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-2 rounded-xl border border-dark/5 bg-white/70 px-3.5 py-3 text-dark/40 opacity-40 transition-opacity hover:opacity-80"
                >
                  <span className="text-sm">{p.logo}</span>
                  <span className="truncate text-[10px] font-bold uppercase tracking-wider">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
