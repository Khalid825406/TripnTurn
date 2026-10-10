"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-navy-900/90 shadow-lg shadow-navy-950/30 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-x flex h-20 items-center justify-between"
        aria-label="Main navigation"
      >
        <Link href="#home" className="relative z-10 flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="overflow-hidden rounded-xl bg-navy-950/60 p-1 ring-1 ring-white/15">
            <Image
              src="/images/logo.png"
              alt="TripnTurn Holidays logo"
              width={150}
              height={64}
              priority
              className="h-12 w-auto object-contain"
            />
          </span>
          <span className="hidden flex-col leading-tight xl:flex">
            <span className="font-display text-lg font-bold text-white">{siteConfig.name}</span>
            <span className="text-[11px] tracking-wide text-lagoon-300">{siteConfig.tagline}</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative text-sm font-medium text-white/85 transition-colors hover:text-white"
              >
                {link.label}
                <span
                  className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-gradient-to-r from-sunset-500 to-lagoon-400 transition-all duration-300 group-hover:w-full"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link href="#contact" className="btn-primary hidden !px-6 !py-2.5 md:inline-flex">
            Plan Your Trip
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-drawer"
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-navy-900/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={reduce ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-white/90 transition hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <li className="mt-3">
                <Link href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Plan Your Trip
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
