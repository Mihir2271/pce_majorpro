import React from 'react';
import { Activity, Clock, AlertOctagon, TrendingUp } from 'lucide-react';

export default function MetricsOverview() {
  const cards = [
    { title: "Daily Potable Inflow", val: "3,850 MLD", sub: "Tansa, Bhatsa, Vaitarna lakes", icon: Activity, color: "text-blue-400" },
    { title: "Avg Supply Duration", val: "2.4 hrs/day", sub: "Severe disparity (Colaba vs Govandi)", icon: Clock, color: "text-amber-400" },
    { title: "Estimated NRW Physical Loss", val: "44.2%", sub: "Leaking British-era cast iron mains", icon: AlertOctagon, color: "text-rose-400" },
    { title: "Tanker Mafia Surcharge", val: "+280%", sub: "Low-income slums paying ₹1,200/wk", icon: TrendingUp, color: "text-purple-400" }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      {cards.map((c, i) => {
        const Icon = c.icon;
        return (
          <div key={i} className="bg-slate-800/80 border border-slate-700 p-5 rounded-xl">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs text-slate-400 font-medium uppercase">{c.title}</p>
                <h3 className="text-2xl font-bold text-white mt-1">{c.val}</h3>
              </div>
              <div className={`p-2.5 rounded-lg bg-slate-700/50 ${c.color}`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-3 pt-3 border-t border-slate-700/60">{c.sub}</p>
          </div>
        );
      })}
    </div>
  );
}