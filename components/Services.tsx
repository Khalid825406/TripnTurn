import { Car, Globe2, Heart, Hotel, Map, Plane } from "lucide-react";
import { services } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const iconMap = {
  map: Map,
  globe: Globe2,
  hotel: Hotel,
  plane: Plane,
  car: Car,
  heart: Heart,
};

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Do"
          title="Every Part of Your Trip, Taken Care Of"
          subtitle="One team for the whole journey — so you can focus on the memories."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.1} className="h-full">
                <div className="card-lift group relative h-full overflow-hidden rounded-3xl border border-navy/10 bg-white p-8">
                  <div
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lagoon-100/60 blur-2xl transition-all duration-500 group-hover:bg-sunset-100"
                    aria-hidden="true"
                  />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="relative mt-6 font-display text-lg font-bold text-navy">{s.title}</h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-navy/60">{s.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
