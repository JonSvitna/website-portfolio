'use client';

import { motion, useInView } from "framer-motion";
import { FormEvent, useRef, useState } from "react";
import { SITE } from "./site";

type Tab = (typeof SITE.reserve.tabs)[number]["id"];

export function ReserveForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [tab, setTab] = useState<Tab>("one-way");
  const [occasion, setOccasion] = useState(SITE.reserve.occasions[0]);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    time: "",
    name: "",
    phone: "",
  });

  const update = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setForm({ pickup: "", dropoff: "", date: "", time: "", name: "", phone: "" });
  };

  return (
    <section id="reserve" ref={ref} className="border-t border-ink/10 bg-paper py-16 text-ink md:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 md:grid-cols-2 md:gap-14 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.34em] text-champagne-dim">Reserve</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:mt-4 md:text-4xl lg:text-5xl">
            Your comfort, your time — same thread from quote to curb.
          </h2>
          <p className="mt-5 max-w-[52ch] text-slate-600 md:mt-6">
            Call or text {SITE.phoneDisplay} for the fastest answer. If you prefer, send pickup, timing, and occasion here — {SITE.driver} confirms personally, usually within an hour for new requests.
          </p>
          <ul className="mt-10 space-y-4 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
            <li className="flex gap-3 border-l border-champagne/60 pl-4">01 — Pickup, timing, dress code for the cabin.</li>
            <li className="flex gap-3 border-l border-champagne/60 pl-4">02 — Direct line to {SITE.driver}; same driver end to end.</li>
            <li className="flex gap-3 border-l border-champagne/60 pl-4">03 — {SITE.vehicle} staged early; cabin reset between legs.</li>
          </ul>
          <p className="mt-10 text-sm text-slate-600">
            <span className="font-semibold text-ink">Coverage:</span> {SITE.coverage.join(" · ")}.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[2rem] border border-slate-200/90 bg-white p-6 shadow-[0_30px_90px_-48px_rgba(15,23,42,0.45)] md:p-10"
        >
          {!submitted ? (
            <>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="flex min-h-[52px] w-full items-center justify-center rounded-2xl border border-champagne/50 bg-ink px-5 py-4 text-center text-sm font-semibold text-paper shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform active:scale-[0.98] hover:bg-slate-900"
              >
                Call or text · {SITE.phoneDisplay}
              </a>
              <div className="my-6 flex items-center gap-3" aria-hidden>
                <span className="h-px flex-1 bg-slate-200" />
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">Or send details</span>
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <form onSubmit={submit} className="flex flex-col gap-6">
                <div className="flex flex-wrap gap-2">
                  {SITE.reserve.tabs.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTab(t.id)}
                      className={`rounded-full px-4 py-2 text-xs font-medium transition-transform active:scale-[0.98] ${
                        tab === t.id
                          ? "bg-ink text-paper"
                          : "border border-slate-200 bg-paper text-slate-700 hover:border-slate-300"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                <div className="grid gap-2">
                  <label className="text-xs font-medium text-slate-700" htmlFor="pickup">Pickup</label>
                  <input
                    id="pickup" required value={form.pickup}
                    onChange={(e) => update("pickup", e.target.value)}
                    placeholder="Street, neighborhood, or venue"
                    className="rounded-xl border border-slate-200 bg-paper px-4 py-3 text-sm outline-none ring-0 transition-shadow focus:border-champagne/60 focus:shadow-[inset_0_0_0_1px_rgba(201,169,98,0.35)]"
                  />
                </div>

                <div className="grid gap-2">
                  <label className="text-xs font-medium text-slate-700" htmlFor="dropoff">
                    {tab === "by-hour" ? "Drop-off (optional)" : "Drop-off"}
                  </label>
                  <input
                    id="dropoff" required={tab !== "by-hour"} value={form.dropoff}
                    onChange={(e) => update("dropoff", e.target.value)}
                    placeholder="Address, airport code, or hotel"
                    className="rounded-xl border border-slate-200 bg-paper px-4 py-3 text-sm outline-none focus:border-champagne/60 focus:shadow-[inset_0_0_0_1px_rgba(201,169,98,0.35)]"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <label className="text-xs font-medium text-slate-700" htmlFor="date">Date</label>
                    <input id="date" type="date" required value={form.date} onChange={(e) => update("date", e.target.value)} className="rounded-xl border border-slate-200 bg-paper px-4 py-3 text-sm outline-none focus:border-champagne/60" />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-xs font-medium text-slate-700" htmlFor="time">Pickup time</label>
                    <input id="time" type="time" required value={form.time} onChange={(e) => update("time", e.target.value)} className="rounded-xl border border-slate-200 bg-paper px-4 py-3 text-sm outline-none focus:border-champagne/60" />
                  </div>
                </div>

                <div className="grid gap-2">
                  <span className="text-xs font-medium text-slate-700">Occasion</span>
                  <div className="flex flex-wrap gap-2">
                    {SITE.reserve.occasions.map((o) => (
                      <button
                        key={o} type="button" onClick={() => setOccasion(o)}
                        className={`rounded-full px-3 py-1.5 text-[11px] font-medium transition-transform active:scale-[0.98] ${
                          occasion === o ? "bg-champagne/20 text-ink ring-1 ring-champagne/40" : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
                        }`}
                      >
                        {o}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <label className="text-xs font-medium text-slate-700" htmlFor="name">Your name</label>
                    <input id="name" required value={form.name} onChange={(e) => update("name", e.target.value)} className="rounded-xl border border-slate-200 bg-paper px-4 py-3 text-sm outline-none focus:border-champagne/60" />
                  </div>
                  <div className="grid gap-2">
                    <label className="text-xs font-medium text-slate-700" htmlFor="phone">Mobile</label>
                    <input id="phone" type="tel" required value={form.phone} onChange={(e) => update("phone", e.target.value)} className="rounded-xl border border-slate-200 bg-paper px-4 py-3 text-sm outline-none focus:border-champagne/60" />
                  </div>
                </div>

                <button type="submit" className="mt-2 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition-transform active:scale-[0.98] hover:bg-slate-900">
                  Send details
                  <span className="font-mono text-xs">→</span>
                </button>
                <p className="text-center text-[11px] text-slate-500">
                  Prefer to talk it through?{" "}
                  <a className="font-medium text-ink underline-offset-2 hover:underline" href={`tel:${SITE.phoneTel}`}>Tap to call</a>
                </p>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-start gap-4 py-2">
              <div className="rounded-full border border-champagne/40 bg-champagne/10 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.24em] text-champagne-dim">
                Request logged
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">On his desk now.</h3>
              <p className="max-w-[48ch] text-sm leading-relaxed text-slate-600">
                {SITE.driver} will reply personally. For a live booking, connect this form to your CRM or SMS provider.
              </p>
              <dl className="mt-4 w-full space-y-2 border-t border-slate-200 pt-6 text-sm text-slate-700">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Pickup</dt>
                  <dd className="text-right font-medium">{form.pickup || "—"}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Drop-off</dt>
                  <dd className="text-right font-medium">{form.dropoff || "—"}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">When</dt>
                  <dd className="text-right font-medium">{form.date} · {form.time}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-500">Occasion</dt>
                  <dd className="text-right font-medium">{occasion}</dd>
                </div>
              </dl>
              <button type="button" onClick={reset} className="mt-4 rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-ink transition-transform active:scale-[0.98] hover:border-slate-400">
                Plan another
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
