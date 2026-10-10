import { howItWorks } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function HowItWorks() {
  return (
    <section className="bg-navy-950 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          dark
          eyebrow="How It Works"
          title="From Dream to Departure in Four Steps"
        />

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* Desktop connector line */}
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-sunset-500/60 via-lagoon-400/60 to-sunset-500/60 md:block"
            aria-hidden="true"
          />
          {howItWorks.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.12} className="relative">
              <li className="flex flex-row gap-5 md:flex-col md:items-center md:text-center">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sunset-500 to-sunset-600 font-display text-lg font-bold text-white shadow-glow ring-4 ring-navy-950">
                  {s.step}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white md:mt-6">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{s.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
