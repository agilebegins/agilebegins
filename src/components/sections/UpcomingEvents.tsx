import {
  ArrowRight,
  Calendar,
  Compass,
  Bot,
  FolderGit2,
  GitBranch,
  FileText,
  Briefcase,
} from "lucide-react";

type JamEvent = {
  date: string;
  icon: "compass" | "ai" | "portfolio" | "git" | "resume" | "linkedin";
  title: string;
  badge?: "COMPLETED" | "UPCOMING" | "COMING SOON";
  variant: "lime" | "blue";
};

const iconMap: Record<
  JamEvent["icon"],
  React.ComponentType<{ size?: number; strokeWidth?: number }>
> = {
  compass: Compass,
  ai: Bot,
  portfolio: FolderGit2,
  git: GitBranch,
  resume: FileText,
  linkedin: Briefcase,
};

const events: JamEvent[] = [
  {
    date: "001 • 90 MINUTES",
    icon: "compass",
    title: "What I Wish I Knew in 2nd Year",
    badge: "COMPLETED",
    variant: "lime",
  },
  {
    date: "002 • DEC 12 • 7:00 PM",
    icon: "ai",
    title: "How Pros deal with AI?",
    badge: "UPCOMING",
    variant: "blue",
  },
  {
    date: "003 • COMING SOON",
    icon: "portfolio",
    title: "Build Your First Portfolio",
    variant: "lime",
  },
  {
    date: "004 • COMING SOON",
    icon: "git",
    title: "Git & GitHub for Students",
    variant: "blue",
  },
  {
    date: "005 • COMING SOON",
    icon: "resume",
    title: "Resume That Gets Interviews",
    variant: "lime",
  },
  {
    date: "006 • COMING SOON",
    icon: "linkedin",
    title: "LinkedIn That Gets Noticed",
    variant: "blue",
  },
];

export default function UpcomingEvents() {
  return (
    <section
      className="w-full px-gutter py-space-3xl bg-surface-container-low border-b-2 border-border-dark"
      id="events"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-space-xl">
        <div className="flex items-center justify-between border-b-2 border-border-dark pb-4">
          <div>
            <span className="bg-brand-lime px-2 py-0.5 rounded border border-border-dark font-label-mono-bold text-xs uppercase text-ink">
              WHAT’S HAPPENING
            </span>
            <h2 className="font-display-hero text-4xl sm:text-5xl text-ink uppercase mt-2">
              Jams & Sessions
            </h2>
          </div>
          <a
            className="hidden sm:inline-flex items-center gap-1 bg-surface-canvas font-label-mono-bold text-xs px-4 py-2 border-2 border-border-dark shadow-[3px_3px_0px_#000000] hover:bg-brand-lime uppercase transition-all"
            href="#"
          >
            <span>VIEW CALENDAR</span>
            <span className="material-symbols-outlined text-[18px]">
              <Calendar />
            </span>
          </a>
        </div>

        <div className="flex flex-col divide-y-2 divide-border-dark border-2 border-border-dark rounded overflow-hidden bg-surface-canvas shadow-[4px_4px_0px_#000000]">
          {events.map((event) => {
            const lime = event.variant === "lime";
            const Icon = iconMap[event.icon];
            return (
              <a
                key={event.title}
                href="#"
                className="relative overflow-hidden p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group"
              >
                {/* Vertical center-outward expanding hover fill */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-0 origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-out z-0 ${
                    lime ? "bg-[#F3FCB8]" : "bg-brand-blue-light"
                  }`}
                />

                <div className="relative z-10 flex items-center gap-4">
                  <span
                    className={`w-8 h-8 rounded flex items-center justify-center border-2 border-border-dark shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                      lime
                        ? "bg-brand-blue-light text-brand-blue"
                        : "bg-brand-lime text-ink"
                    }`}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                    <span className="font-label-mono-bold text-xs uppercase text-brand-blue">
                      {event.date}
                    </span>
                    <span className="font-headline-ui-sm text-base font-bold text-ink">
                      {event.title}
                    </span>
                    {event.badge === "COMPLETED" && (
                      <span className="inline-block w-fit bg-ink text-brand-lime px-2 py-0.5 rounded border border-border-dark font-label-mono-bold text-[10px] uppercase">
                        COMPLETED
                      </span>
                    )}
                    {event.badge === "UPCOMING" && (
                      <span className="inline-block w-fit bg-brand-lime text-ink px-2 py-0.5 rounded border border-border-dark font-label-mono-bold text-[10px] uppercase">
                        UPCOMING
                      </span>
                    )}
                  </div>
                </div>

                <span className="relative z-10 self-end sm:self-auto text-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                  <ArrowRight size={18} strokeWidth={2} />
                </span>
              </a>
            );
          })}
        </div>

        <div className="sm:hidden flex justify-center">
          <a
            className="w-full text-center bg-brand-lime font-label-mono-bold text-xs py-3 border-2 border-border-dark shadow-[3px_3px_0px_#000000] uppercase"
            href="#"
          >
            VIEW ALL JAMS (06)
          </a>
        </div>
      </div>
    </section>
  );
}
