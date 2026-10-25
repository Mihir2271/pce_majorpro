import React, { useEffect, useRef, useState } from 'react';
import { Cpu, Droplet, GraduationCap, Radio, Scale, ShieldCheck, Users, X } from 'lucide-react';

export default function ProfessorBriefing() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const closeRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        return;
      }

      if (event.key !== 'Tab') return;
      const focusable = panelRef.current?.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])');
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 rounded-md border border-teal-600 bg-teal-950/70 px-3 py-2 text-xs font-semibold text-teal-100 transition hover:border-teal-400 hover:bg-teal-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
      >
        <GraduationCap className="h-4 w-4" aria-hidden="true" />
        <span>Professor Briefing / Ethics Audit</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-slate-950/75 backdrop-blur-[2px]"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsOpen(false);
          }}
        >
          <aside
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="briefing-title"
            className="flex h-full w-full max-w-2xl flex-col border-l border-slate-700 bg-slate-900 text-slate-100 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-700 px-5 py-5 sm:px-7">
              <div>
                <p className="mb-1 text-xs font-semibold uppercase text-teal-300">PCE major project · Ethics review</p>
                <h2 id="briefing-title" className="text-xl font-bold text-white">Professor briefing</h2>
                <p className="mt-1 text-sm text-slate-400">Water access, distribution equity, and engineering accountability</p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close professor briefing"
                className="rounded-md p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-5 sm:px-7">
              <section className="border-b border-slate-700 pb-5" aria-labelledby="problem-heading">
                <div className="mb-3 flex items-center gap-2">
                  <Users className="h-4 w-4 text-teal-300" aria-hidden="true" />
                  <h3 id="problem-heading" className="text-sm font-semibold text-white">Problem statement & field context</h3>
                </div>
                <p className="text-sm leading-6 text-slate-300">
                  Uneven supply duration, network losses, and dependence on private tankers can make safe water less affordable for low-income communities across the Mumbai Metropolitan Region. AquaFlow brings reported service issues, ward-level supply indicators, and a household cost model into one audit view.
                </p>
                <div className="mt-4 flex items-start gap-3 border-l-2 border-teal-500 pl-3">
                  <span className="shrink-0 font-mono text-lg font-bold text-teal-200">50</span>
                  <p className="text-xs leading-5 text-slate-400">Households in the project survey sample. Raw response counts and sampling methodology are not represented in this prototype, so no survey percentages are inferred here.</p>
                </div>
              </section>

              <section className="border-b border-slate-700 py-5" aria-labelledby="mandate-heading">
                <div className="mb-3 flex items-center gap-2">
                  <Scale className="h-4 w-4 text-amber-300" aria-hidden="true" />
                  <h3 id="mandate-heading" className="text-sm font-semibold text-white">Constitutional mandate</h3>
                </div>
                <p className="text-sm font-semibold text-amber-100">Article 21 · Subhash Kumar v. State of Bihar</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  The Supreme Court connected the right to life with the right to enjoy pollution-free water and air. This project uses that principle as an engineering and equity lens for monitoring access and affordability, not as a determination that a particular agency or person has violated the law.
                </p>
              </section>

              <section className="border-b border-slate-700 py-5" aria-labelledby="benchmark-heading">
                <div className="mb-3 flex items-center gap-2">
                  <Droplet className="h-4 w-4 text-sky-300" aria-hidden="true" />
                  <h3 id="benchmark-heading" className="text-sm font-semibold text-white">Service benchmark</h3>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-mono text-2xl font-bold text-sky-200">135 LPCD</span>
                  <span className="text-sm text-slate-300">CPHEEO urban service-level benchmark</span>
                </div>
                <p className="mt-2 text-xs leading-5 text-slate-400">The dashboard compares reported ward supply with this reference value. A modeled or reported shortfall is an audit signal; it does not by itself establish delivered volume, service quality, or regulatory non-compliance.</p>
              </section>

              <section className="border-b border-slate-700 py-5" aria-labelledby="architecture-heading">
                <div className="mb-3 flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                  <h3 id="architecture-heading" className="text-sm font-semibold text-white">Software & IoT architecture</h3>
                </div>
                <ol className="space-y-3">
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-teal-200">1</span>
                    <div><p className="text-sm font-medium text-slate-200">Citizen-facing React dashboard</p><p className="mt-0.5 text-xs leading-5 text-slate-400">Grievance capture, community validation controls, ward indicators, and an interactive household cost model.</p></div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-teal-200">2</span>
                    <div><p className="text-sm font-medium text-slate-200">Municipal monitoring layer</p><p className="mt-0.5 text-xs leading-5 text-slate-400">Proposed pressure and acoustic IoT sensors feed SCADA/DMA monitoring to help flag abnormal pressure drops and possible leakage.</p></div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-teal-200">3</span>
                    <div><p className="text-sm font-medium text-slate-200">Decision support & response</p><p className="mt-0.5 text-xs leading-5 text-slate-400">Operators review reports, correlate telemetry, prioritize inspection, and record a municipal response.</p></div>
                  </li>
                </ol>
                <div className="mt-4 flex items-start gap-2 rounded-md bg-slate-800/80 p-3 text-xs leading-5 text-slate-400">
                  <Radio className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" aria-hidden="true" />
                  <span>Current build is a front-end prototype: reports and telemetry examples are local/demo state; no live SCADA or municipal backend is connected.</span>
                </div>
              </section>

              <section className="pt-5" aria-labelledby="ethics-heading">
                <div className="mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                  <h3 id="ethics-heading" className="text-sm font-semibold text-white">Ethics & limitations</h3>
                </div>
                <ul className="space-y-2 text-xs leading-5 text-slate-400">
                  <li>Protect household identity and precise location before collecting or sharing reports.</li>
                  <li>Treat crowdsourced reports as unverified until corroborated by residents or field staff.</li>
                  <li>Publish survey methods and source data before presenting sample findings as representative.</li>
                  <li>Use cost comparisons to surface affordability risk, not to label every private supply transaction as extortion.</li>
                </ul>
              </section>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}