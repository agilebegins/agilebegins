import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import { MorphingText } from "@/components/ui/morphing-text";

const MORPH_TEXTS = [
  "404",
  "LOST?",
  "WRONG HQ",
  "NO DROP",
  "404",
];

export default function NotFound() {
  return (
    <main
      className="min-h-screen w-full px-gutter py-space-3xl flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundColor: "#ECEEF3",
        backgroundImage:
          "radial-gradient(#111111 0.75px, transparent 0.75px), radial-gradient(#111111 0.75px, #ECEEF3 0.75px)",
        backgroundSize: "28px 28px",
        backgroundPosition: "0 0, 14px 14px",
      }}
    >
      <div className="max-w-2xl w-full bg-surface-canvas border-2 border-border-dark rounded p-8 sm:p-14 shadow-[8px_8px_0px_#000000] relative text-center">
        {/* Top-left floating sticker */}
        <span className="inline-block bg-brand-lime text-ink px-3 py-1 rounded border-2 border-border-dark shadow-[3px_3px_0px_#000000] font-label-mono-bold text-xs uppercase -rotate-3 mb-6">
          DEAD END • OFF THE MAP
        </span>

        {/* Magic UI Morphing Text */}
        <div className="my-2 text-ink">
          <MorphingText
            texts={MORPH_TEXTS}
            className="font-display-hero uppercase text-6xl sm:text-8xl text-ink h-20 sm:h-28"
          />
        </div>

        <h1 className="font-headline-editorial-lg text-2xl sm:text-4xl text-ink italic mt-4 mb-3">
          Even Pros take a wrong turn sometimes.
        </h1>

        <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-md mx-auto mb-8">
          This page doesn&apos;t exist, got shipped somewhere else, or never made it out of a late-night jam.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-lime text-ink font-label-mono-bold text-xs px-6 py-3.5 rounded border-2 border-border-dark shadow-[4px_4px_0px_#000000] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000000] transition-all uppercase"
          >
            <ArrowLeft size={16} strokeWidth={2.5} />
            <span>BACK TO BASE</span>
          </Link>

          <Link
            href="/#events"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-blue text-white font-label-mono-bold text-xs px-6 py-3.5 rounded border-2 border-border-dark shadow-[4px_4px_0px_#000000] hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_#000000] transition-all uppercase"
          >
            <Compass size={16} strokeWidth={2.5} />
            <span>EXPLORE JAMS</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
