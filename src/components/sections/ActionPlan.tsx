"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

export default function ActionPlan() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const scrolled = -rect.top;
      const clamped = Math.max(0, Math.min(1, scrolled / scrollableDistance));
      setProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      number: "01",
      title: "Learn & Jam",
      description:
        "Jump into peer-led jams, late-night build sessions, and hands-on sprints guided by OGs who have already shipped.",
      shadow: "shadow-[4px_4px_0px_#D6FF00]",
      hover: "hover:bg-brand-lime",
      label: "UPCOMING JAMS",
    },
    {
      number: "02",
      title: "Build & Ship",
      description:
        "Turn raw weekend ideas into working apps, tools, and hardware through intense campus showdowns and build sprints.",
      shadow: "shadow-[4px_4px_0px_#2F1BFF]",
      hover: "hover:bg-brand-blue-light",
      label: "STUDENT DROPS",
    },
    {
      number: "03",
      title: "Crew & Connect",
      description:
        "Hang out with sharp engineers, founders, and fellow Pros across campus HQs—no awkward networking, just real talk.",
      shadow: "shadow-[4px_4px_0px_#D6FF00]",
      hover: "hover:bg-brand-lime",
      label: "CAMPUS HQS",
    },
    {
      number: "04",
      title: "Level Up",
      description:
        "Sharpen your stack with zero-fluff playbooks, open-source bounties, and real-world gigs shared inside the crew.",
      shadow: "shadow-[4px_4px_0px_#2F1BFF]",
      hover: "hover:bg-brand-blue-light",
      label: "PLAYBOOKS",
    },
    {
      number: "05",
      title: "Flex & Launch",
      description:
        "Demo your half-baked prototypes or finished drops in front of the whole crew and get recognized as a Pro.",
      shadow: "shadow-[4px_4px_0px_#D6FF00]",
      hover: "hover:bg-brand-lime",
      label: "DEMO DAYS",
    },
  ];

  const activeCount = Math.min(
    steps.length,
    Math.floor(progress * (steps.length + 0.6))
  );

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-ink text-white border-y-2 border-border-dark lg:h-[260vh]"
      id="action-plan"
    >
      {/* Sticky Pinned Viewport on Desktop */}
      <div className="lg:sticky lg:top-0 lg:h-screen w-full flex flex-col justify-center py-space-2xl px-gutter overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-space-xl">
          {/* Header */}
          <div className="text-center flex flex-col items-center">
            <span className="font-label-mono-bold text-xs text-brand-lime uppercase tracking-widest mb-2">
              HOW WE MAKE IT HAPPEN
            </span>
            <h2 className="font-headline-editorial-lg text-4xl sm:text-5xl text-white italic">
              The Game Plan
            </h2>
          </div>

          {/* 5-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-md">
            {steps.map((step, index) => {
              const isRevealed = index < activeCount;

              return (
                <div
                  key={step.number}
                  className={`bg-surface-canvas text-ink p-6 rounded border-2 border-border-dark ${step.shadow} flex flex-col justify-between transition-all duration-500 ease-out ${
                    isRevealed
                      ? `lg:opacity-100 lg:translate-y-0 lg:rotate-0 lg:scale-100 hover:-translate-y-1.5 ${step.hover} group cursor-pointer`
                      : `lg:opacity-15 lg:translate-y-16 lg:rotate-3 lg:scale-95 lg:pointer-events-none max-lg:hover:-translate-y-1.5 max-lg:${step.hover} max-lg:group`
                  }`}
                >
                  <div>
                    <div className="font-display-hero text-4xl text-brand-blue leading-none mb-3 group-hover:text-ink transition-colors">
                      {step.number}
                    </div>
                    <h3 className="font-headline-ui-sm text-base font-bold uppercase mb-2 group-hover:text-ink transition-colors">
                      {step.title}
                    </h3>
                    <p className="font-body-md text-sm text-on-surface-variant group-hover:text-ink transition-colors">
                      {step.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t-2 border-border-dark flex items-center justify-between font-label-mono-bold text-[11px] uppercase">
                    <span>{step.label}</span>
                    <ExternalLink
                      size={16}
                      strokeWidth={2}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
