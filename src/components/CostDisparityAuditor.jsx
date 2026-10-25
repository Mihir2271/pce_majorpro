import React, { useState } from 'react';
import { Droplet, ShieldCheck, TrendingUp, Users } from 'lucide-react';

const LITRES_PER_PERSON_PER_DAY = 135;
const DAYS_PER_MONTH = 30;
const BMC_RATE_PER_KL = 5;

const formatRupees = (amount) => new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0
}).format(amount);

export default function CostDisparityAuditor() {
  const [householdSize, setHouseholdSize] = useState(5);
  const [tankerRate, setTankerRate] = useState(120);

  const monthlyVolume = householdSize * LITRES_PER_PERSON_PER_DAY * DAYS_PER_MONTH;
  const thousandLitres = monthlyVolume / 1000;
  const bmcCost = thousandLitres * BMC_RATE_PER_KL;
  const tankerCost = thousandLitres * tankerRate;
  const excessCost = tankerCost - bmcCost;
  const costMultiple = tankerRate / BMC_RATE_PER_KL;

  return (
    <section className="px-6 pb-6" aria-labelledby="cost-auditor-heading">
      <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/90">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-slate-700 px-5 py-4">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase text-amber-300">Household affordability audit</p>
            <h2 id="cost-auditor-heading" className="text-lg font-bold text-white">Tanker cost disparity</h2>
          </div>
          <span className="rounded border border-amber-700 bg-amber-950/60 px-2.5 py-1 text-xs font-semibold text-amber-200">
            BMC lifeline rate: ₹5 / 1,000L
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(260px,0.8fr)_minmax(0,1.2fr)]">
          <div className="border-b border-slate-700 p-5 lg:border-b-0 lg:border-r">
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-white">
              <Users className="h-4 w-4 text-teal-300" aria-hidden="true" />
              Household assumptions
            </div>

            <label htmlFor="household-size" className="mb-2 block text-xs font-medium text-slate-300">People in household</label>
            <div className="mb-5 flex items-center gap-3">
              <input
                id="household-size"
                type="number"
                min="1"
                max="15"
                step="1"
                value={householdSize}
                onChange={(event) => setHouseholdSize(Math.min(15, Math.max(1, Number(event.target.value) || 1)))}
                className="w-24 rounded-md border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-white outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
              />
              <span className="text-xs text-slate-400">people</span>
            </div>

            <div className="mb-5 rounded-md border border-slate-700 bg-slate-900/70 px-3 py-2.5">
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="text-slate-400">Daily water benchmark</span>
                <span className="font-semibold text-slate-200">{LITRES_PER_PERSON_PER_DAY} L/person</span>
              </div>
              <div className="mt-1 flex items-center justify-between gap-2 text-xs">
                <span className="text-slate-400">Monthly volume</span>
                <span className="font-mono font-semibold text-teal-200">{monthlyVolume.toLocaleString('en-IN')} L</span>
              </div>
            </div>

            <div className="mb-2 flex items-center justify-between gap-3">
              <label htmlFor="tanker-rate" className="text-xs font-medium text-slate-300">Private tanker rate</label>
              <span className="font-mono text-sm font-bold text-amber-200">₹{tankerRate} / 1,000L</span>
            </div>
            <input
              id="tanker-rate"
              type="range"
              min="80"
              max="160"
              step="5"
              value={tankerRate}
              onChange={(event) => setTankerRate(Number(event.target.value))}
              aria-valuetext={`₹${tankerRate} per 1,000 litres`}
              className="h-2 w-full cursor-pointer accent-amber-400"
            />
            <div className="mt-1 flex justify-between text-[11px] text-slate-500"><span>₹80</span><span>₹120</span><span>₹160</span></div>
          </div>

          <div className="p-5">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-teal-800/80 bg-teal-950/30 p-4">
                <div className="flex items-center gap-2 text-xs font-medium text-teal-200">
                  <Droplet className="h-4 w-4" aria-hidden="true" />
                  BMC subsidized supply
                </div>
                <p className="mt-3 text-2xl font-bold text-white">{formatRupees(bmcCost)}</p>
                <p className="mt-1 text-xs text-slate-400">estimated monthly cost</p>
              </div>
              <div className="rounded-lg border border-amber-800/80 bg-amber-950/30 p-4">
                <div className="flex items-center gap-2 text-xs font-medium text-amber-200">
                  <TrendingUp className="h-4 w-4" aria-hidden="true" />
                  Private tanker supply
                </div>
                <p className="mt-3 text-2xl font-bold text-white">{formatRupees(tankerCost)}</p>
                <p className="mt-1 text-xs text-slate-400">estimated monthly household spend</p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-rose-800/80 bg-rose-950/30 p-4">
              <div>
                <p className="text-xs font-medium text-rose-200">Additional monthly burden</p>
                <p className="mt-1 text-2xl font-bold text-white">{formatRupees(excessCost)}</p>
                <p className="mt-1 text-xs text-slate-400">Tanker costs {costMultiple}x the BMC lifeline rate</p>
              </div>
              <div className="flex items-center gap-2 rounded-md border border-rose-700 bg-rose-950/80 px-3 py-2 text-xs font-semibold text-rose-200">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                Potential Article 21 concern
              </div>
            </div>

            <p className="mt-3 text-[11px] leading-4 text-slate-500">
              Estimate uses the CPHEEO 135 LPCD benchmark and a 30-day month. Actual household use and tanker prices vary; the Article 21 indicator is an equity flag, not a legal determination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}