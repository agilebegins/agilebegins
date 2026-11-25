export default function Ticker() {
  const text =
    "DON'T FLY SOLO ✦ BE KIND ✦ SKILLS PAY THE BILLS ✦ CODING IS A SUPERPOWER ✦ OPEN SOURCE EVERYTHING ✦ BUILD IN PUBLIC ✦";
  return (
    <div className="w-full bg-brand-lime border-y-2 border-border-dark py-2.5 overflow-hidden select-none">
      <div className="animate-marquee whitespace-nowrap font-ticker-text text-ink uppercase tracking-widest text-xs sm:text-sm font-bold flex items-center gap-8">
        {[0, 1, 2].map((copy) => (
          <span key={copy} aria-hidden={copy > 0}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}