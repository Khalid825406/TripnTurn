import Image from "next/image";
import { ArrowRight, BadgeCheck, Clock, MapPin, MessageCircle } from "lucide-react";
import { packages } from "@/lib/data";
import { siteConfig, whatsappLink } from "@/lib/config";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function EnquireButton({ pkgName }: { pkgName: string }) {
  const link = whatsappLink(`Hi ${siteConfig.name}! I would like to enquire about the “${pkgName}” package.`);
  if (!link) {
    // WhatsApp number not configured yet — keep the CTA visible but point to the enquiry form.
    return (
      <a
        href="#contact"
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-navy/15 px-5 py-3 text-sm font-semibold text-navy transition hover:border-lagoon-500 hover:text-lagoon-600"
        title="WhatsApp number coming soon — use the enquiry form for now"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Enquire Now
      </a>
    );
  }
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-navy/15 px-5 py-3 text-sm font-semibold text-navy transition hover:border-lagoon-500 hover:text-lagoon-600"
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      Enquire on WhatsApp
    </a>
  );
}

export default function Packages() {
  return (
    <section id="packages" className="bg-navy-950 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          dark
          eyebrow="Featured Holiday Packages"
          title="Curated Journeys, Crafted With Care"
          subtitle="Inspired by the trips our travellers love most — each itinerary is personalised before you book."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.slug} delay={i * 0.12} className="h-full">
              <article className="card-lift flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-card">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" aria-hidden="true" />
                  {pkg.badge ? (
                    <span className="absolute left-4 top-4 rounded-full bg-sunset-500 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-glow">
                      {pkg.badge}
                    </span>
                  ) : null}
                  <span className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    {pkg.duration}
                  </span>
                  <span className="absolute bottom-4 right-4 rounded-full bg-navy-950/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-lagoon-300 backdrop-blur-md">
                    {pkg.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold text-navy">{pkg.name}</h3>
                  <p className="mt-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sunset-600">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {pkg.itinerary}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-navy/65">{pkg.summary}</p>

                  <ul className="mt-4 space-y-2">
                    {pkg.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-navy/80">
                        <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-lagoon-500" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {pkg.indicativePrice ? (
                    <div className="mt-4 rounded-2xl border border-gold/40 bg-gold-soft/40 p-4">
                      <p className="text-sm font-bold text-navy">
                        Indicative: <span className="text-sunset-600">{pkg.indicativePrice}</span>
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-navy/60">{pkg.priceNote}</p>
                    </div>
                  ) : null}

                  <div className="mt-6 flex gap-3 pt-2">
                    <a
                      href="#contact"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
                    >
                      View Package
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <EnquireButton pkgName={pkg.name} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a href="#contact" className="btn-primary">
            View All Holiday Packages
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <p className="mt-3 text-xs text-white/50">
            A full packages page can be connected here in a future phase.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
