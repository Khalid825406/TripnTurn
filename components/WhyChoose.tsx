import Image from "next/image";
import { Sparkles } from "lucide-react";
import { whyChoose } from "@/lib/data";
import Reveal from "./Reveal";

export default function WhyChoose() {
  return (
    <section id="about" className="overflow-hidden bg-navy-50/60 py-20 sm:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* Image side */}
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-card">
            <Image
              src="/images/why-choose.jpg"
              alt="Turquoise coastline with palm trees seen from above"
              width={800}
              height={1000}
              className="h-[420px] w-full object-cover sm:h-[520px]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" aria-hidden="true" />
            <div className="glass absolute bottom-6 left-6 right-6 rounded-2xl p-5 sm:right-auto sm:max-w-xs">
              <p className="font-display text-lg font-bold text-white">Turn Every Trip Into a Beautiful Memory</p>
              <p className="mt-1 text-sm text-white/75">That is the promise behind every itinerary we craft.</p>
            </div>
          </div>
          {/* Decorative ring */}
          <div
            className="absolute -left-8 -top-8 -z-10 h-40 w-40 rounded-full border-[10px] border-lagoon-400/30"
            aria-hidden="true"
          />
        </Reveal>

        {/* Benefits side */}
        <div>
          <Reveal>
            <span className="eyebrow">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Why Choose TripnTurn Holidays?
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Travel That Feels Effortless, From the First Call Onwards
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-navy/70">
              We are a Surat-based travel team that plans holidays the way we would plan our own —
              personally, carefully, and with plenty of room for wonder.
            </p>
          </Reveal>

          <div className="mt-9 space-y-4">
            {whyChoose.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08}>
                <div className="card-lift flex items-start gap-4 rounded-2xl border border-navy/10 bg-white p-5">
                  <span
                    className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sunset-50 text-sm font-bold text-sunset-600 ring-1 ring-sunset-500/30"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy/60">{b.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
