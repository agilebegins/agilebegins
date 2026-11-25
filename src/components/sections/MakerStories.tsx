import { ArrowRight, ArrowUpCircle } from "lucide-react";

const story1 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBwUqcqQdyuHBR2gSGrhs_G7w0pgLdyIkK4o0DsQwEDgG6d77ENJvRCRMLL3XHH2lpPd6uOU5Swnd9hztdXbFnvUj2OGItPejGUob2F-gVnthlThbTPff7BP0sbt-I_r4pl-pvWh9qMW_UYm1TbjrY2zlZBN_55GTjWHVrLH9viCLP6ooUi6g9NTQxWrMB_Uv1l17Qnsb1nCWEyAJuKOKB2LaM9qJ28IIoccKczCdE";
const story2 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAxjKVPzAtntzfDfND3DaBMa0Xnj67ORys2Tw7vrsKy0__AzNrDzJoSIN1pOIH_p5wIuWr5blHEmD3G0XNIB1ei9fz-7ir-aCXbuZ2QePu7MeJDdofe03Zl2YcdTuPDSFEp9FeMUEE5ERQdJMP-gAnAWqHCZ26luDzj7bua7fcbbjsbex6dMBJ5t7YF2wVwRMlKjeRM93_knqpcTKHuQWX4cJKdo_-iLYbBJsytrUE";
const story3 =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCPxfiWiouq10i27vT4fM_Kvl5gHTyhlPtUt9VE6fgz-7F0LSgT-al4EY4KfNwo6g4PnlHzLGlNU0otUeqlzDVsxZdBYzPWPF5tdFWv7vsJvkwAT6d5bHxFRZQPcQRzOZZNGrCDRvWEdT0FlYSv30dK72UQQ9OaMjuFw8zqnSumnm6ZYQdm01r8dxhrj9K-r6PwhCZefj1ky8YmnQ_n7iy_BiDV_wivl9hHtz7xdOU";

const stories = [
  {
    image: story1,
    badge: "LEARNING STORY",
    badgeColor: "bg-brand-blue text-white",
    category: "GROWING THROUGH IMPACT",
    name: "Ryyan Safar",
    quote:
      "“I started with zero hardware knowledge. By following hands-on community workshops and peer reviews, we shipped our first IoT soil sensing cluster.”",
  },
  {
    image: story2,
    badge: "HARDWARE DISPATCH",
    badgeColor: "bg-brand-lime text-ink",
    category: "GROWING THROUGH IMPACT",
    name: "Alosh Denny",
    quote:
      "“The sheer curiosity that led to designing custom silicon. AgileBegins provided the mentors who demystified FPGA logic synthesis for us.”",
  },
  {
    image: story3,
    badge: "COMMUNITY TALE",
    badgeColor: "bg-brand-blue text-white",
    category: "GROWING THROUGH IMPACT",
    name: "Abhijith T",
    quote:
      "“Built it the night before an ML exam! The rush of solving practical problems with fellow makers beats textbook rote learning any day.”",
  },
];

export default function MakerStories() {
  return (
    <section className="w-full px-gutter py-space-3xl bg-surface border-b-2 border-border-dark">
      <div className="max-w-7xl mx-auto flex flex-col gap-space-2xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="inline-block bg-ink text-white font-label-mono-bold text-xs px-3 py-1 rounded border border-border-dark uppercase tracking-wider mb-2">
              VOICES OF AGILEBEGINS
            </span>
            <h2 className="font-headline-editorial-lg text-4xl sm:text-5xl text-ink">
              Stories from the community
            </h2>
          </div>
          <a className="font-label-mono-bold text-xs uppercase tracking-wider underline underline-offset-4 decoration-2 hover:text-brand-blue flex items-center gap-1" href="#">
            <span>READ ALL DISPATCHES</span>
            <ArrowRight size={16} strokeWidth={2} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {stories.map((story) => (
            <article
              key={story.name}
              className="bg-surface-canvas rounded border-2 border-border-dark shadow-[4px_4px_0px_#000000] p-4 flex flex-col justify-between hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000000] transition-all"
            >
              <div>
                <div className="w-full h-56 rounded border-2 border-border-dark overflow-hidden mb-4 relative">
                  <img className="w-full h-full object-cover" src={story.image} alt={story.name} />
                  <span
                    className={`absolute top-2 right-2 font-label-mono-bold text-[10px] px-2 py-0.5 rounded border border-border-dark uppercase ${story.badgeColor}`}
                  >
                    {story.badge}
                  </span>
                </div>
                <span className="font-label-mono-bold text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1">
                  GROWING THROUGH IMPACT
                </span>
                <h3 className="font-headline-ui-lg text-base font-bold text-ink uppercase mb-2">
                  {story.name}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant">
                  {story.quote}
                </p>
              </div>
              <div className="mt-6 pt-3 border-t-2 border-border-dark flex items-center justify-between text-on-surface-variant font-label-mono-bold text-[11px]">
                <span>BY FEMINA ROBY</span>
                <ArrowUpCircle size={16} strokeWidth={2} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}