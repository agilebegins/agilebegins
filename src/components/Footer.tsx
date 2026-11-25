export default function Footer() {
  return (
    <footer className="w-full bg-ink text-white border-t-2 border-border-dark pt-space-3xl pb-space-2xl px-gutter">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-space-xl">
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-4 h-4 bg-brand-lime border border-border-dark rotate-45" />
              <span className="font-display-hero text-2xl uppercase tracking-wider text-white">
                AGILEBEGINS
              </span>
            </div>
            <p className="font-body-md text-sm text-surface-container-high max-w-md">
              An open student-led collective fostering hands-on engineering, creative coding, and community workshops.
            </p>
            <div className="flex items-center gap-space-sm pt-space-xs flex-wrap">
              <span className="font-label-mono-bold text-[10px] px-2.5 py-1 bg-brand-blue text-white uppercase rounded border border-surface-canvas">
                STUDENT LED
              </span>
              <span className="font-label-mono-bold text-[10px] px-2.5 py-1 bg-brand-lime text-ink uppercase rounded border border-border-dark">
                OPEN SOURCE
              </span>
            </div>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-space-sm">
            <span className="font-label-mono-bold text-xs text-brand-lime uppercase tracking-widest">
              Navigation
            </span>
            <nav className="flex flex-col gap-space-xs font-body-md text-sm">
              <a className="text-surface-container-high hover:text-brand-lime transition-colors" href="#">
                Home
              </a>
              <a className="text-surface-container-high hover:text-brand-lime transition-colors" href="#events">
                Workshops
              </a>
              <a className="text-surface-container-high hover:text-brand-lime transition-colors" href="#four-pillars">
                Our Purpose
              </a>
              <a className="text-surface-container-high hover:text-brand-lime transition-colors" href="#get-involved">
                College Groups
              </a>
              <a className="text-surface-container-high hover:text-brand-lime transition-colors" href="#action-plan">
                For Students
              </a>
            </nav>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-space-sm">
            <span className="font-label-mono-bold text-xs text-brand-lime uppercase tracking-widest">
              Community & Legal
            </span>
            <nav className="flex flex-col gap-space-xs font-body-md text-sm">
              <a className="text-surface-container-high hover:text-brand-lime transition-colors" href="#get-involved">
                Contact
              </a>
              <a className="text-surface-container-high hover:text-brand-lime transition-colors" href="#">
                Privacy Policy
              </a>
              <a className="text-surface-container-high hover:text-brand-lime transition-colors" href="#">
                Terms of Use
              </a>
              <a className="text-surface-container-high hover:text-brand-lime transition-colors" href="#">
                Community Guidelines
              </a>
            </nav>
          </div>
        </div>
        <div className="border-t border-white/20 pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md font-label-mono-sm text-xs text-surface-container-high">
          <div>© 2026 AgileBegins. Built by students, for students.</div>
          <div className="flex items-center gap-space-lg">
            <a className="hover:text-brand-lime transition-colors" href="#">
              DISCORD
            </a>
            <a className="hover:text-brand-lime transition-colors" href="#">
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}