import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * PLACEHOLDER SECTION — per the project brief, no real customer names,
 * photos, reviews or ratings have been fabricated. Swap these cards for
 * verified testimonials before going live, or remove the section.
 */
const placeholders = [
  {
    quote:
      "“Placeholder text — a verified traveller review about their Vietnam island holiday will appear here soon.”",
  },
  {
    quote:
      "“Placeholder text — a verified family review about their Rajasthan heritage trip will appear here soon.”",
  },
  {
    quote:
      "“Placeholder text — a verified couple's review about their honeymoon planning experience will appear here soon.”",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-navy-50/60 py-20 sm:py-28" aria-label="Customer testimonials (placeholders)">
      <div className="container-x">
        <SectionHeading
          eyebrow="Traveller Stories"
          title="Memories Our Travellers Take Home"
          subtitle="Authentic reviews will appear here as verified traveller stories are collected."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {placeholders.map((p, i) => (
            <Reveal key={i} delay={i * 0.1} className="h-full">
              <figure className="card-lift relative flex h-full flex-col rounded-3xl border-2 border-dashed border-navy/20 bg-white/70 p-8">
                <Quote className="h-8 w-8 text-sunset-500/70" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-sm italic leading-relaxed text-navy/55">
                  {p.quote}
                </blockquote>
                <figcaption className="mt-6">
                  <span className="inline-flex items-center rounded-full bg-navy/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy/45">
                    Placeholder — awaiting verified review
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
