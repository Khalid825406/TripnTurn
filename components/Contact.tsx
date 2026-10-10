"use client";

import { FormEvent, useState } from "react";
import {
  CalendarDays,
  Instagram,
  Loader2,
  MapPin,
  MessageCircle,
  Navigation,
  Send,
  Users,
} from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/config";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

type FormState = {
  name: string;
  phone: string;
  email: string;
  destination: string;
  travelDate: string;
  travellers: string;
  message: string;
};

const initial: FormState = {
  name: "",
  phone: "",
  email: "",
  destination: "",
  travelDate: "",
  travellers: "2",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (form.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[+]?[0-9\s-]{10,15}$/.test(form.phone.trim()))
    errors.phone = "Please enter a valid phone number (10–15 digits).";
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!form.destination.trim()) errors.destination = "Please tell us your destination.";
  const t = Number(form.travellers);
  if (!Number.isFinite(t) || t < 1 || t > 60)
    errors.travellers = "Travellers must be between 1 and 60.";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // FRONTEND PROTOTYPE: there is no backend yet. We simulate a send so
    // the UX (validation, loading, success feedback) can be tested.
    // TODO: POST to /api/enquiry (or a CRM webhook) once a backend exists.
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 900));
    setStatus("sent");
    setForm(initial);
  };

  const wa = whatsappLink(`Hi ${siteConfig.name}! I want to plan a trip.`);
  const inputCls =
    "w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-sm text-navy outline-none transition placeholder:text-navy/35 focus:border-lagoon-500 focus:ring-2 focus:ring-lagoon-400/25";
  const errCls = "mt-1 text-xs font-medium text-red-600";

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let&rsquo;s Plan Something Beautiful Together"
          subtitle="Tell us about your dream trip — we will take it from there."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info panel */}
          <Reveal>
            <div className="flex h-full flex-col gap-6 rounded-3xl bg-navy-950 p-8 text-white sm:p-10">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lagoon-300">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold">Visit Us</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">
                    203, Apple Square Building, Near Matrubhumi School,
                    <br />
                    Dabholi Char Rasta, Surat, Gujarat 395004
                  </p>
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-sunset-400 transition hover:text-sunset-500"
                  >
                    <Navigation className="h-4 w-4" aria-hidden="true" />
                    Get directions on Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lagoon-300">
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold">Follow Along</h3>
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-medium text-white/80 transition hover:text-lagoon-300"
                  >
                    {siteConfig.instagramHandle}
                  </a>
                  <p className="mt-1 text-sm text-white/50">Fresh packages and travel reels.</p>
                </div>
              </div>

              {wa ? (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-auto w-full"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              ) : (
                <div className="mt-auto rounded-2xl border border-white/15 bg-white/5 p-4 text-sm text-white/60">
                  WhatsApp and phone contact details are being added shortly — the enquiry form
                  is the fastest way to reach us right now.
                </div>
              )}
            </div>
          </Reveal>

          {/* Form panel */}
          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-navy/10 bg-navy-50/50 p-8 sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy">
                    Name <span className="text-sunset-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Your full name"
                    className={inputCls}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name ? <p className={errCls} role="alert">{errors.name}</p> : null}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy">
                    Phone Number <span className="text-sunset-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="+91 …"
                    className={inputCls}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone ? <p className={errCls} role="alert">{errors.phone}</p> : null}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="you@example.com"
                    className={inputCls}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email ? <p className={errCls} role="alert">{errors.email}</p> : null}
                </div>
                <div>
                  <label htmlFor="destination" className="mb-1.5 block text-sm font-semibold text-navy">
                    Destination <span className="text-sunset-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="destination"
                    type="text"
                    value={form.destination}
                    onChange={set("destination")}
                    placeholder="e.g. Vietnam, Rajasthan…"
                    className={inputCls}
                    aria-invalid={!!errors.destination}
                  />
                  {errors.destination ? (
                    <p className={errCls} role="alert">{errors.destination}</p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="travelDate" className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-navy">
                    <CalendarDays className="h-4 w-4 text-sunset-500" aria-hidden="true" />
                    Travel Date
                  </label>
                  <input
                    id="travelDate"
                    type="date"
                    value={form.travelDate}
                    onChange={set("travelDate")}
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="travellers" className="mb-1.5 flex items-center gap-1.5 text-sm font-semibold text-navy">
                    <Users className="h-4 w-4 text-sunset-500" aria-hidden="true" />
                    Number of Travellers
                  </label>
                  <input
                    id="travellers"
                    type="number"
                    min={1}
                    max={60}
                    value={form.travellers}
                    onChange={set("travellers")}
                    className={inputCls}
                    aria-invalid={!!errors.travellers}
                  />
                  {errors.travellers ? (
                    <p className={errCls} role="alert">{errors.travellers}</p>
                  ) : null}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us about your dream trip — dates, style, must-sees…"
                    className={`${inputCls} resize-none`}
                  />
                </div>
              </div>

              {status === "sent" ? (
                <div
                  role="status"
                  className="mt-6 rounded-2xl border border-lagoon-500/40 bg-lagoon-100/60 p-4 text-sm font-medium text-lagoon-600"
                >
                  Thank you! Your enquiry has been noted. This is a frontend prototype — connect a
                  backend to deliver enquiries to the team.
                </div>
              ) : null}

              <button type="submit" disabled={status === "sending"} className="btn-primary mt-7 w-full disabled:opacity-70">
                {status === "sending" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Send Enquiry
                  </>
                )}
              </button>
              <p className="mt-3 text-center text-xs text-navy/45">
                Frontend prototype — enquiries are not yet delivered to a server.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
