import { ArrowRight, Target } from "lucide-react";

export default function MissionSheet() {
  return (
    <section className="w-full px-gutter py-space-3xl bg-surface relative flex items-center justify-center">
      <div className="max-w-4xl w-full bg-surface-canvas p-8 sm:p-14 rounded border-2 border-border-dark shadow-[6px_6px_0px_#000000] rotate-[-0.75deg] hover:rotate-0 transition-transform duration-300 relative">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 mb-space-sm">
            <span className="material-symbols-outlined text-brand-blue text-[32px]"><Target /></span>
            <span className="font-label-mono-bold text-sm tracking-widest text-ink uppercase">
              THE PLAYBOOK
            </span>
          </div>
          <h3 className="font-headline-editorial-lg text-3xl sm:text-5xl text-ink mt-2 mb-space-md leading-tight max-w-2xl">
            Turning raw campus curiosity into real-world craft—helping{" "}
            <span className="bg-brand-lime px-2 py-0.5 border-2 border-border-dark text-ink font-semibold">
              everyday students
            </span>{" "}
            level up into Pros who ship projects that actually matter.
          </h3>
          <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-lg mx-auto mb-space-lg">
            No boring lectures or paper certificates—just peer-led jams, active campus HQs, and OGs who show you how to build from scratch.
          </p>
          <a
            className="inline-flex items-center gap-2 font-label-mono-bold text-xs text-ink uppercase tracking-wider underline underline-offset-4 decoration-2 hover:text-brand-blue"
            href="#action-plan"
          >
            <span>SEE HOW WE ROLL</span>
            <span className="material-symbols-outlined text-[18px]"><ArrowRight /></span>
          </a>
        </div>
      </div>
    </section>
  );
}
