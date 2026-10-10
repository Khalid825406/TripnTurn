import { Plane, Building2, Users, Route } from "lucide-react";
import Reveal from "./Reveal";

const highlights = [
  {
    icon: Plane,
    title: "Domestic & International Travel",
    text: "Holidays across India and around the world.",
  },
  {
    icon: Building2,
    title: "Hotel & Flight Assistance",
    text: "Stays and flights arranged with your itinerary.",
  },
  {
    icon: Users,
    title: "Family & Group Holidays",
    text: "Thoughtful plans for every kind of traveller.",
  },
  {
    icon: Route,
    title: "Personalised Travel Planning",
    text: "Routes shaped around your pace and interests.",
  },
];

export default function TrustBar() {
  return (
    <section aria-label="Why travellers trust us" className="relative z-10 -mt-2 bg-white">
      <div className="container-x py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.08}>
              <div className="card-lift group flex h-full items-start gap-4 rounded-2xl border border-navy/10 bg-white p-6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 text-lagoon-300 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <h.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-navy sm:text-base">{h.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy/60">{h.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
