"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, EnvelopeSimple, MapPin, Phone, SealCheck } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";
import { contact, contactSection, images } from "@/lib/site-content";
import MagneticButton from "@/components/ui/MagneticButton";
import SectionLabel from "@/components/ui/SectionLabel";

type FormStatus = "idle" | "submitting" | "success" | "error";

const highlights = [
  { icon: Clock, label: "Fast response", detail: "Same-week callbacks for most inquiries" },
  { icon: SealCheck, label: "Free estimates", detail: "Clear written scopes before work begins" },
  { icon: MapPin, label: "Local experts", detail: "Columbia, Howard County & Baltimore area" },
] as const;

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 700));

    const subject = encodeURIComponent(`Estimate request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `${contact.emailHref}?subject=${subject}&body=${body}`;
    setStatus("success");
    form.reset();
  };

  return (
    <section id="contact" className="section-pad bg-stone">
      <motion.div
        className="container-site"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 90, damping: 22 }}
      >
        <SectionLabel className="text-gold">{contactSection.label}</SectionLabel>
        <h2 className="text-display mt-4 text-3xl text-navy md:text-4xl">
          {contactSection.title}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-xl border border-border bg-surface p-8 shadow-sm"
            noValidate
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-navy">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="rounded-md border border-border bg-stone px-4 py-3 text-sm text-ink outline-none ring-gold/40 transition-shadow focus:ring-2"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-navy">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="rounded-md border border-border bg-stone px-4 py-3 text-sm text-ink outline-none ring-gold/40 transition-shadow focus:ring-2"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-navy">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="resize-y rounded-md border border-border bg-stone px-4 py-3 text-sm text-ink outline-none ring-gold/40 transition-shadow focus:ring-2"
              />
              <p className="text-xs text-ink-muted">{contactSection.formNote}</p>
            </div>

            {status === "error" ? (
              <p className="text-sm text-red-700" role="alert">
                {errorMessage}
              </p>
            ) : null}

            {status === "success" ? (
              <p className="text-sm font-medium text-gold-dark" role="status">
                Thank you. Your email client should open with your message ready to send.
              </p>
            ) : null}

            <MagneticButton
              type="submit"
              className="w-full"
              variant="primary"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Preparing message..." : "Send inquiry"}
            </MagneticButton>
          </motion.form>

          <div>
            <div className="relative mb-8 aspect-[16/10] overflow-hidden rounded-xl">
              <Image
                src={images.contactVisual}
                alt="Finished commercial parking lot paving"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <ul className="space-y-5">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="flex items-start gap-3">
                    <Icon size={24} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                    <div>
                      <p className="font-semibold text-navy">{item.label}</p>
                      <p className="text-sm text-ink-muted">{item.detail}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 space-y-4 border-t border-border pt-8">
              <a
                href={contact.phoneHref}
                className="flex items-center gap-3 text-navy hover:text-gold"
              >
                <Phone size={22} className="text-gold" aria-hidden />
                <span className="font-mono font-semibold">{contact.phone}</span>
              </a>
              <a
                href={contact.emailHref}
                className="flex items-center gap-3 text-ink-muted hover:text-gold"
              >
                <EnvelopeSimple size={22} className="text-gold" aria-hidden />
                {contact.email}
              </a>
              <p className="flex items-start gap-3 text-sm text-ink-muted">
                <MapPin size={22} className="mt-0.5 shrink-0 text-gold" aria-hidden />
                {contact.address.line} · Fax {contact.fax}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
