import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { destinations } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Destinations() {
  return (
    <section id="destinations" className="bg-navy-50/60 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Popular Destinations"
          title="Places That Stay With You"
          subtitle="From royal cities to island shores — start dreaming, and we will handle the details."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d, i) => (
            <Reveal key={d.name} delay={(i % 3) * 0.1}>
              <a
                href="#contact"
                aria-label={`Explore ${d.name}`}
                className="group relative block h-[380px] overflow-hidden rounded-3xl shadow-card"
              >
                <Image
                  src={d.image}
                  alt={d.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-navy-950/10 transition-opacity duration-500 group-hover:via-navy-950/45"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lagoon-300">
                    {d.tagline}
                  </p>
                  <h3 className="mt-1.5 font-display text-2xl font-bold text-white">{d.name}</h3>
                  <p className="mt-2 max-w-[95%] text-sm leading-relaxed text-white/75">
                    {d.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sunset-400 transition-colors group-hover:text-sunset-500">
                    Explore Destination
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
