import Image from "next/image";
import Link from "next/link";
import { Instagram, MapPin } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/config";
import { destinations, services } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <Link href="#home" className="inline-flex items-center gap-3">
            <span className="overflow-hidden rounded-xl bg-white p-1.5 ring-1 ring-white/20">
              <Image
                src="/images/logo.png"
                alt="TripnTurn Holidays logo"
                width={140}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            {siteConfig.name} crafts seamless domestic and international holidays — packages,
            hotels, flights and transfers, planned around you. {siteConfig.tagline}.
          </p>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/85 transition hover:border-lagoon-400 hover:text-lagoon-300"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            {siteConfig.instagramHandle}
          </a>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer quick links">
          <h3 className="text-sm font-bold uppercase tracking-wider text-lagoon-300">Explore</h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-white/65 transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Destinations */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-lagoon-300">Destinations</h3>
          <ul className="mt-4 space-y-2.5">
            {destinations.slice(0, 6).map((d) => (
              <li key={d.name}>
                <a href="#destinations" className="text-sm text-white/65 transition hover:text-white">
                  {d.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services + contact */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-lagoon-300">Services</h3>
          <ul className="mt-4 space-y-2.5">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <a href="#services" className="text-sm text-white/65 transition hover:text-white">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-start gap-2 text-sm leading-relaxed text-white/65">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sunset-400" aria-hidden="true" />
            {siteConfig.address}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/50">
            {/* Placeholder links for future pages */}
            <span className="cursor-pointer transition hover:text-white" title="Coming soon">
              Privacy Policy
            </span>
            <span className="cursor-pointer transition hover:text-white" title="Coming soon">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
