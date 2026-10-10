import Image from "next/image";
import { Instagram } from "lucide-react";
import { inspirationTiles } from "@/lib/data";
import { siteConfig } from "@/lib/config";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Inspiration() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Travel Inspiration"
          title="A Little Inspiration for Your Next Adventure"
          subtitle="Scenes from the journeys we plan — follow along for fresh routes, reels and holiday ideas."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {inspirationTiles.map((tile, i) => (
            <Reveal key={tile.label + i} delay={(i % 6) * 0.06}>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${tile.label} — view on Instagram`}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl shadow-md"
              >
                <Image
                  src={tile.image}
                  alt={tile.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />
                <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-sm font-semibold text-white">{tile.label}</p>
                  <p className="mt-0.5 text-xs text-white/70">{tile.sub}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-navy"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Follow {siteConfig.instagramHandle}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
