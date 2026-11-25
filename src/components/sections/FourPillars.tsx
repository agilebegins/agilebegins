import { Terminal, Users, Megaphone, Rocket } from "lucide-react";

const PILLAR_ICONS: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  terminal: Terminal,
  group: Users,
  campaign: Megaphone,
  rocket_launch: Rocket,
};

export default function FourPillars() {
  const pillars = [
    {
      number: "01",
      chip: "LEARN",
      chipColor: "bg-brand-lime text-ink",
      title: "Hands-On Learning",
      description:
        "Forget passive lectures and theory-heavy slides. We learn by breaking things, pairing up in late-night jams, and turning raw curiosity into working code from day one.",
      footer: "PEER JAMS",
      icon: "terminal",
    },
    {
      number: "02",
      chip: "CREW",
      chipColor: "bg-brand-blue-light text-brand-blue",
      title: "Peer Ecosystem",
      description:
        "The real edge comes from who you build with. We connect hungry Pros across campus HQs so nobody has to figure things out alone—every win is shared with the squad.",
      footer: "CAMPUS HQS",
      icon: "group",
    },
    {
      number: "03",
      chip: "OG CULTURE",
      chipColor: "bg-brand-lime text-ink",
      title: "Build In Public",
      description:
        "No gatekeeping and no hiding half-baked work. Pros share their progress openly, OGs unblock juniors in real time, and everyone levels up faster by showing their craft.",
      footer: "OPEN DROPS",
      icon: "campaign",
    },
    {
      number: "04",
      chip: "SHIP",
      chipColor: "bg-brand-blue text-white",
      title: "Beyond The Resume",
      description:
        "Landing a job is just the baseline. We push students to solve real-world problems, launch side projects that actually get users, and build things that outlast college.",
      footer: "REAL-WORLD SCALE",
      icon: "rocket_launch",
    },
  ];

  return (
    <section className="w-full px-gutter py-space-3xl bg-surface-container-low border-b-2 border-border-dark relative" id="four-pillars">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
          <div>
            <span className="font-label-mono-bold text-xs text-brand-blue uppercase tracking-widest block mb-2">
              HOW WE OPERATE
            </span>
            <h2 className="font-headline-editorial-lg text-4xl sm:text-5xl text-ink italic">
              Our four pillars that guide us
            </h2>
          </div>
          <div className="font-label-mono-sm text-xs text-on-surface-variant max-w-xs uppercase">
            Building a crew where real skills beat paper certificates.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {pillars.map((pillar) => {
            const Icon = PILLAR_ICONS[pillar.icon];
            return (
              <div
                key={pillar.number}
                className="group relative bg-surface-canvas p-6 rounded border-2 border-border-dark shadow-[4px_4px_0px_#000000] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000000] transition-all flex flex-col justify-between"
              >
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-space-md border-b-2 border-border-dark pb-3">
                    <span className="font-display-hero text-3xl text-ink">
                      {pillar.number}
                    </span>
                    <span className={`${pillar.chipColor} px-2.5 py-0.5 rounded border border-border-dark font-label-mono-bold text-[11px] uppercase`}>
                      {pillar.chip}
                    </span>
                  </div>
                  <h3 className="font-headline-ui-lg text-lg text-ink font-bold uppercase mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t-2 border-border-dark flex items-center justify-between text-on-surface-variant group-hover:text-ink">
                  <span className="font-label-mono-bold text-[11px] uppercase">
                    {pillar.footer}
                  </span>
                  {Icon && <Icon size={18} strokeWidth={2} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
