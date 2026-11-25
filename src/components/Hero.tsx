import Link from "next/link";
import { ArrowDown, Share2, School, Star } from "lucide-react";

const campusImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCXgrEqgbOXwz9EEtMwMnQY_IZH-mCQyxkl-EdD3VX_yTTZY0tcfVvrrIy8IW7ZBjIURor4O8OXMjIjUv4nH1sNz5vdsYwzPf4iPKvv9K5xbcOn0l6n-ESP01rnbJaB80L_ZlNCqEZUQu7pnugKWW5krOoKIpwabbGkL58Ijwfk0Imgt0NOZEUUoItrFJDatRxAHpkCong_gecgE45b3v9EbpIxPukwheq4U3uIjAQ";
const makerImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDNefvc_zK3xwiokhyaBQKtr-tzBZXM3TwablFt45SlmlCRPppJD27zUZIyPqZSuQJ1G6aN2auRbBMCSc-jPwE731IIZ4GvRAuj1wqxUUN_39rFA8_2isJ1Ea0RRMxxxMajyO3ehUszTzJii1ScWstM_XMQV4hAzO-rWMCgogloqhGP-G0FLDNDwmHMMPbf5Lu-PQCdu2dlSYU7KBxwMJA-DBJV6tisDd5YcbJgugw";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden px-gutter pb-space-3xl pt-space-xl bg-surface">
      {/* Ambient dots grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000000 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        {/* Top sticker chip index */}
        <div className="flex items-center gap-space-sm mb-space-lg flex-wrap justify-center">
          <span className="inline-block bg-brand-lime text-ink font-label-mono-bold text-xs px-3 py-1 rounded shadow-[3px_3px_0px_#000000] border-2 border-border-dark uppercase rotate-[-2deg]">
            STUDENT MAKER COLLECTIVE
          </span>
          <span className="inline-block bg-brand-blue text-white font-label-mono-bold text-xs px-3 py-1 rounded shadow-[3px_3px_0px_#000000] border-2 border-border-dark uppercase rotate-[2deg]">
            100% OPEN SOURCE ✦ PEER LED
          </span>
        </div>

        <div className="relative w-full max-w-5xl my-space-sm flex flex-col items-center">
          {/* Floating left stamp: Campus of the month */}
          <div className="hidden xl:block absolute -left-10 top-4 w-60 bg-surface-canvas p-4 rounded border-2 border-border-dark shadow-[4px_4px_0px_#000000] rotate-[-2.5deg] hover:rotate-0 transition-transform duration-200 text-left z-20">
            <div className="flex items-center justify-between border-b-2 border-border-dark pb-2 mb-2">
              <span className="font-label-mono-bold text-xs uppercase text-brand-blue">
                Campus / Sep
              </span>
              <School size={16} strokeWidth={2} />
            </div>
            <p className="font-headline-ui-sm text-sm font-bold leading-tight text-ink">
              Sree Buddha College of Eng.
            </p>
            <p className="font-label-mono-sm text-[11px] text-on-surface-variant mt-1">
              Pattoor • 420+ Makers Active
            </p>
            <div className="mt-3 w-full h-18 bg-surface-container-high rounded overflow-hidden border-2 border-border-dark">
              <img
                className="w-full h-full object-cover"
                src={campusImage}
                alt="Campus technology lab"
              />
            </div>
          </div>

          {/* Floating right stamp: Maker of the month */}
          <div className="hidden xl:block absolute -right-10 top-10 w-64 bg-surface-canvas p-4 rounded border-2 border-border-dark shadow-[4px_4px_0px_#000000] rotate-[2deg] hover:rotate-0 transition-transform duration-200 text-left z-20">
            <div className="flex items-center justify-between border-b-2 border-border-dark pb-2 mb-2">
              <span className="font-label-mono-bold text-xs uppercase text-brand-blue">
                Maker / Sep
              </span>
              <Star size={16} strokeWidth={2} />
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded border-2 border-border-dark overflow-hidden shrink-0 shadow-[2px_2px_0px_#000000]">
                <img
                  className="w-full h-full object-cover"
                  src={makerImage}
                  alt="Maker of the month"
                />
              </div>
              <div>
                <p className="font-headline-ui-sm text-sm font-bold text-ink leading-none">
                  Ryyan Safar
                </p>
                <p className="font-label-mono-sm text-[11px] text-brand-lime-dark font-bold mt-1">
                  “I hope this works”
                </p>
              </div>
            </div>
            <span className="inline-block bg-brand-lime text-ink font-label-mono-bold text-[10px] px-2 py-0.5 rounded border border-border-dark uppercase">
              3D Biosensor Rig
            </span>
          </div>
          {/* Hero headline */}
          <h1 className="font-display-hero text-6xl sm:text-8xl md:text-9xl text-ink  tracking-tight leading-none text-center select-none flex flex-col items-center">
            <span className="tracking-tight">BUILT</span>
            <span className="flex items-center gap-2 -my-2 sm:-my-4">
              <span className="inline-flex items-center justify-center font-yesteryear text-5xl sm:text-7xl md:text-8xl text-brand-blue px-3 py-0.5 bg-brand-blue-light rounded border-2 border-border-dark -rotate-3">
                for
              </span>
              <span className="text-white drop-shadow-[4px_4px_0px_#000000] [-webkit-text-stroke:2.5px_#000000]">
                PROS
              </span>
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="font-body-lg text-base sm:text-lg text-ink max-w-2xl mx-auto mt-space-md mb-space-sm font-medium">
          AgileBegins is a student-run crew of coders, designers, and
          builders—turning raw curiosity into real-world projects without the
          boring lecture fluff.
        </p>

        {/* Legal micro badge */}
        <p className="font-label-mono-sm text-xs text-on-surface-variant max-w-xl mx-auto uppercase tracking-wide">
          HANDS-ON JAMS, OPEN SOURCE DROPS, AND CAMPUS HQS RUN BY PROS.
        </p>

        {/* CTA cluster */}
        <div className="flex flex-wrap items-center justify-center gap-space-md mt-space-xl">
          <Link
            href="#events"
            className="inline-flex items-center justify-center gap-2 bg-brand-lime text-ink font-label-mono-bold text-sm px-8 py-3.5 rounded border-2 border-border-dark shadow-[4px_4px_0px_#000000] hover:bg-brand-blue hover:text-white hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000000] transition-all uppercase"
          >
            <span>Explore Workshops</span>
            <ArrowDown size={20} strokeWidth={2} />
          </Link>
          <Link
            href="#get-involved"
            className="inline-flex items-center justify-center gap-2 bg-surface-canvas text-ink font-label-mono-bold text-sm px-8 py-3.5 rounded border-2 border-border-dark shadow-[4px_4px_0px_#000000] hover:bg-surface-container-high hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000000] transition-all uppercase"
          >
            <span>Join The Discord</span>
            <Share2 size={20} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
