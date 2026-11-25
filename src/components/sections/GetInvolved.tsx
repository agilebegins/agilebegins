import { ExternalLink } from "lucide-react";

export default function GetInvolved() {
  const rows = [
    {
      number: "#01",
      numberColor: "text-ink",
      title: "SHIP DROPS & BUILD IN PUBLIC",
      description:
        "Team up with fellow Pros, contribute to open-source repos, and learn real-world git, web, and hardware craft by shipping.",
      base: "bg-surface-container-low",
      hover: "hover:bg-brand-lime",
      href: "#",
    },
    {
      number: "#02",
      numberColor: "text-brand-blue",
      title: "OPEN A CAMPUS HQ",
      description:
        "Launch an official crew base at your college, bring curious students together, and run local build sessions with our playbooks.",
      base: "bg-surface-canvas",
      hover: "hover:bg-brand-blue-light",
      href: "#",
    },
    {
      number: "#03",
      numberColor: "text-ink",
      title: "PULL UP TO A JAM",
      description:
        "Join peer-led sessions on full-stack apps, AI tools, and hardware—zero boring lectures, just OGs helping you build from scratch.",
      base: "bg-surface-container-low",
      hover: "hover:bg-brand-lime",
      href: "#events",
    },
  ];

  return (
    <section
      className="w-full py-space-3xl px-gutter border-y-2 border-border-dark relative"
      id="get-involved"
      style={{
        backgroundColor: "#ECEEF3",
        backgroundImage:
          "radial-gradient(#111111 0.75px, transparent 0.75px), radial-gradient(#111111 0.75px, #ECEEF3 0.75px)",
        backgroundSize: "28px 28px",
        backgroundPosition: "0 0, 14px 14px",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-surface-canvas border-2 border-border-dark rounded p-6 sm:p-10 shadow-[6px_6px_0px_#000000] relative">
          <div className="flex items-center justify-between border-b-2 border-border-dark pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-brand-lime border border-border-dark" />
              <span className="font-label-mono-bold text-xs uppercase tracking-wider">
                PULL UP. BUILD LOUD.
              </span>
            </div>
            <span className="font-label-mono-bold text-[11px] bg-brand-blue text-white px-2 py-0.5 rounded border border-border-dark uppercase">
              JOIN THE CREW
            </span>
          </div>
          <h2 className="font-display-hero text-4xl sm:text-5xl text-ink uppercase tracking-tight mb-8">
            GET INVOLVED
          </h2>
          <div className="flex flex-col gap-4">
            {rows.map((row) => (
              <a
                key={row.number}
                href={row.href}
                className={`group block p-5 rounded border-2 border-border-dark ${row.base} ${row.hover} transition-all shadow-[3px_3px_0px_#000000] hover:shadow-[5px_5px_0px_#000000]`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className={`font-display-hero text-2xl ${row.numberColor}`}>
                      {row.number}
                    </span>
                    <div>
                      <h3 className="font-headline-ui-lg text-base font-bold uppercase group-hover:text-ink">
                        {row.title}
                      </h3>
                      <p className="font-body-md text-sm text-on-surface-variant group-hover:text-ink mt-1">
                        {row.description}
                      </p>
                    </div>
                  </div>
                  <ExternalLink size={24} strokeWidth={2} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
