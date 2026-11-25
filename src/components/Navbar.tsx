import Link from "next/link";
import { User } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Workshops", href: "#events" },
  { label: "Our Purpose", href: "#four-pillars" },
  { label: "College Groups", href: "#get-involved" },
  { label: "For Students", href: "#action-plan" },
];

const tickerText =
  "✦ BY STUDENTS, FOR STUDENTS ✦ ZERO SYLLABUS • PURE HUSTLE ✦ PROS AT WORK ✦ OGS IN CHARGE ✦ PEER JAMS & CAMPUS HQS ✦ BUILD IN PUBLIC ✦ SHIP REAL DROPS ✦";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-xl border-b-2 border-border-dark">
            <div className="w-full overflow-hidden bg-ink text-white/80 border-b-2 border-border-dark py-1 flex items-center select-none group">
        <div className="flex w-max animate-marquee [animation-duration:45s] group-hover:[animation-play-state:paused]">
          <div className="flex shrink-0 items-center gap-6 pr-6 whitespace-nowrap font-label-mono-sm text-[11px] tracking-widest">
            <span>{tickerText}</span>
            <span>{tickerText}</span>
          </div>
          <div
            aria-hidden="true"
            className="flex shrink-0 items-center gap-6 pr-6 whitespace-nowrap font-label-mono-sm text-[11px] tracking-widest"
          >
            <span>{tickerText}</span>
            <span>{tickerText}</span>
          </div>
        </div>
      </div>

      <div className="h-20 w-full px-gutter flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="#" className="flex items-center gap-2.5 group" aria-label="AgileBegins home">
              <Image
                src="/logos/main-icon.png"
                alt="AgileBegins"
                width={32}
                height={32}
                className="h-8 w-8"
              />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-display-hero text-2xl tracking-wide text-ink uppercase leading-none">
                  AGILEBEGINS
                </span>
                
              </div>
              <span className="font-label-mono-sm text-[10px] text-on-surface-variant tracking-wider uppercase">
                ARCHITECTING OPEN PRO CULTURE
              </span>
            </div>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-space-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded transition-all font-body-md text-body-md text-on-surface-variant hover:text-ink hover:bg-surface-container-high"
              aria-current={link.href === "#" ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-space-md">
          <Link
            href="#get-involved"
            className="inline-flex items-center justify-center bg-brand-lime text-ink font-label-mono-bold text-xs px-5 py-2.5 rounded border-2 border-border-dark shadow-[4px_4px_0px_#000000] hover:bg-brand-blue hover:text-white hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000000] transition-all uppercase"
          >
            JOIN DISCORD
          </Link>
          <div className="w-8 h-8 rounded bg-brand-blue text-white flex items-center justify-center border-2 border-border-dark shadow-[2px_2px_0px_#000000]">
            <User size={18} strokeWidth={2} />
          </div>
        </div>
      </div>
    </header>
  );
}
