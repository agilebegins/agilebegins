export default function ImpactBanner() {
  return (
    <section className="w-full bg-surface-container py-space-3xl px-gutter relative overflow-hidden">
      <div className="max-w-5xl mx-auto bg-surface-canvas p-8 md:p-14 rounded border-2 border-border-dark shadow-[6px_6px_0px_#000000] rotate-[0.5deg] hover:rotate-0 transition-transform duration-300 relative">
        
        {/* Single Floating Corner Sticker — Top Left */}
        <span className="hidden sm:inline-block absolute -top-4 left-6 bg-brand-blue text-white px-3 py-1 rounded border-2 border-border-dark shadow-[3px_3px_0px_#000000] font-label-mono-bold text-xs uppercase -rotate-6">
          STUDENT-LED
        </span>

        {/* Main Statement — Tight Line Height & Natural Punctuation Spacing */}
        <div className="text-center font-display-hero text-3xl sm:text-5xl md:text-6xl uppercase text-ink leading-[1.15]">
          A STUDENT-RUN CREW BUILT AROUND{" "}
          <span className="relative inline-block bg-brand-lime px-3 py-0.5 rounded border-2 border-border-dark -rotate-2 mx-1">
            PEER JAMS
            <span className="absolute -top-3 -left-2 bg-ink text-brand-lime px-1.5 py-0.5 rounded border border-border-dark font-label-mono-bold text-[9px] leading-none tracking-wider -rotate-12 shadow-[1.5px_1.5px_0px_#000000]">
              PROS
            </span>
          </span>
          ,{" "}
          <span className="relative inline-block bg-brand-blue text-white px-3 py-0.5 rounded border-2 border-border-dark rotate-2 mx-1">
            CAMPUS HQS
            <span className="absolute -top-3 -right-2 bg-brand-lime text-ink px-1.5 py-0.5 rounded-full border border-border-dark font-label-mono-bold text-[9px] leading-none tracking-wider rotate-12 shadow-[1.5px_1.5px_0px_#000000]">
              OGS
            </span>
          </span>
          , AND{" "}
          <span className="relative inline-block bg-brand-blue-light text-brand-blue px-3 py-0.5 rounded border-2 border-border-dark -rotate-1 mx-1">
            REAL DROPS
            <span className="absolute -bottom-2.5 -right-2 bg-brand-blue text-white px-1.5 py-0.5 rounded border border-border-dark font-label-mono-bold text-[9px] leading-none tracking-wider rotate-6 shadow-[1.5px_1.5px_0px_#000000]">
              SHIPPED
            </span>
          </span>
          .
        </div>
      </div>
    </section>
  );
}
