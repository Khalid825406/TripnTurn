import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/config";
import Reveal from "./Reveal";

export default function FinalCTA() {
  const wa = whatsappLink(
    `Hi ${siteConfig.name}! I want to plan my next holiday and would love some help.`
  );

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <Image
        src="/images/destination-thailand.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-navy-950/80" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(4,13,26,0.55)_100%)]"
        aria-hidden="true"
      />

      <Reveal className="container-x relative z-10 text-center">
        <p className="eyebrow justify-center">
          <span className="h-px w-8 bg-sunset-500" aria-hidden="true" />
          Begin Today
          <span className="h-px w-8 bg-sunset-500" aria-hidden="true" />
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Your Next Great Adventure Starts Here.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
          Tell us what you have in mind, and let&rsquo;s plan a holiday worth remembering.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="btn-primary">
            Plan Your Holiday
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          {wa ? (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          ) : (
            <a href="#contact" className="btn-secondary" title="WhatsApp number coming soon — use the enquiry form">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          )}
        </div>
      </Reveal>
    </section>
  );
}
