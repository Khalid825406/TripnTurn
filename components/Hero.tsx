"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarDays, Compass, MapPin, Search, Users } from "lucide-react";

const floatingCards = [
  {
    image: "/images/destination-vietnam.jpg",
    alt: "Ha Long Bay, Vietnam",
    title: "Vietnam Getaways",
    sub: "Karsts, bays & island beaches",
  },
  {
    image: "/images/package-rajasthan.jpg",
    alt: "Lake Palace, Udaipur",
    title: "Royal Rajasthan",
    sub: "Palaces, forts & festivals",
  },
  {
    image: "/images/destination-thailand.jpg",
    alt: "Thai island beach",
    title: "Thailand Islands",
    sub: "Turquoise shores & street food",
  },
];

const destinationOptions = [
  "Vietnam",
  "Rajasthan",
  "Goa",
  "Kashmir",
  "Dubai",
  "Thailand",
  "Somewhere else — surprise me",
];

export default function Hero() {
  const reduce = useReducedMotion();
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [travellers, setTravellers] = useState(2);

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    // Homepage prototype: the search card navigates to the packages
    // section. Later this can deep-link to a filtered packages page.
    router.push("#packages");
  };

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950">
      {/* Background */}
      <Image
        src="/images/hero.jpg"
        alt="Snow-capped Himalayan mountains behind a calm turquoise lake with a shikara boat"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/70 to-navy-950/25" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-navy-950/40" aria-hidden="true" />

      {/* Content */}
      <div className="container-x relative z-10 grid items-center gap-12 pb-28 pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="eyebrow"
          >
            <Compass className="h-4 w-4" aria-hidden="true" />
            Your Journey, Our Passion
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
            className="mt-5 max-w-2xl font-display text-4xl font-bold leading-[1.12] text-white sm:text-5xl lg:text-6xl"
          >
            Discover the World,{" "}
            <span className="bg-gradient-to-r from-sunset-400 via-sunset-500 to-lagoon-400 bg-clip-text text-transparent">
              One Unforgettable Journey
            </span>{" "}
            at a Time.
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
          >
            From relaxing beach escapes to exciting international adventures, we make every
            holiday seamless, memorable and uniquely yours.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.46 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#packages" className="btn-primary">
              Explore Holiday Packages
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-secondary">
              Plan My Trip
            </a>
          </motion.div>
        </div>

        {/* Floating destination cards */}
        <div className="relative hidden h-[480px] lg:block" aria-hidden="true">
          {floatingCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={reduce ? false : { opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
              className={`glass absolute w-64 overflow-hidden rounded-2xl p-3 shadow-card animate-floaty ${
                i === 0 ? "right-8 top-4" : i === 1 ? "right-44 top-44" : "right-4 bottom-4"
              }`}
              style={{ animationDelay: `${i * 1.4}s` }}
            >
              <div className="relative h-32 w-full overflow-hidden rounded-xl">
                <Image src={card.image} alt="" fill sizes="256px" className="object-cover" />
              </div>
              <div className="px-1.5 pb-1 pt-3">
                <p className="text-sm font-semibold text-white">{card.title}</p>
                <p className="mt-0.5 text-xs text-white/70">{card.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Travel search card */}
      <motion.form
        onSubmit={onSearch}
        initial={reduce ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="container-x absolute inset-x-0 bottom-6 z-20 hidden md:block"
        aria-label="Search holiday packages"
      >
        <div className="glass grid grid-cols-4 items-end gap-4 rounded-3xl p-5 shadow-card">
          <label className="flex flex-col gap-1.5">
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-lagoon-300">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> Destination
            </span>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-navy-950/50 px-4 py-3 text-sm text-white outline-none transition focus:border-lagoon-400"
            >
              <option value="">Where to?</option>
              {destinationOptions.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-lagoon-300">
              <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" /> Travel Date
            </span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-xl border border-white/20 bg-navy-950/50 px-4 py-3 text-sm text-white outline-none transition [color-scheme:dark] focus:border-lagoon-400"
            />
          </label>
          <label className="flex flex-col gap-1.5">
            <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-lagoon-300">
              <Users className="h-3.5 w-3.5" aria-hidden="true" /> Travellers
            </span>
            <input
              type="number"
              min={1}
              max={60}
              value={travellers}
              onChange={(e) => setTravellers(Number(e.target.value))}
              className="w-full rounded-xl border border-white/20 bg-navy-950/50 px-4 py-3 text-sm text-white outline-none transition focus:border-lagoon-400"
            />
          </label>
          <button type="submit" className="btn-primary w-full">
            <Search className="h-4 w-4" aria-hidden="true" />
            Search Packages
          </button>
        </div>
      </motion.form>
    </section>
  );
}
