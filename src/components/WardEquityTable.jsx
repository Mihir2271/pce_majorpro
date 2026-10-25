import React, { useState } from 'react';

const wardData = [
  { ward: "Ward A (South Mumbai / Colaba)", lpcd: 210, norm: 135, costPerMonth: "₹180", status: "Surplus" },
  { ward: "Ward M-East (Govandi / Mankhurd Slums)", lpcd: 42, norm: 135, costPerMonth: "₹1,450 (Private Tankers)", status: "Critical Deficit" },
  { ward: "Ward L (Kurla Pipeline Belt)", lpcd: 85, norm: 135, costPerMonth: "₹650", status: "High Stress" },
  { ward: "Kalyan-Dombivli Peripheral Sector", lpcd: 55, norm: 135, costPerMonth: "₹1,100 (Borewell Tankers)", status: "Critical Deficit" },
  { ward: "Thane West Urban Belt", lpcd: 120, norm: 135, costPerMonth: "₹340", status: "Moderate" }
];

export default function WardEquityTable() {
  const [filter, setFilter] = useState("ALL");
  const filtered = filter === "ALL" ? wardData : wardData.filter(w => w.status.includes(filter));

  return (
    <div className="p-6 pt-0">
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
          <div>
            <h2 className="text-lg font-bold text-white">Ward-Level Distribution Equity Audit (CPHEEO Norm: 135 LPCD)</h2>
            <p className="text-xs text-slate-400">Distributive inequality and constitutional right to water data.</p>
          </div>
          <div className="flex gap-2">
            {["ALL", "Critical Deficit", "High Stress", "Surplus"].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition ${
                  filter === f ? "bg-blue-600 border-blue-500 text-white" : "bg-slate-700 text-slate-300 border-slate-600 hover:bg-slate-600"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-900/60 text-xs uppercase text-slate-400 border-b border-slate-700">
              <tr>
                <th className="py-3 px-4">Municipal Ward</th>
                <th className="py-3 px-4">Per Capita Supply (LPCD)</th>
                <th className="py-3 px-4">CPHEEO Compliance</th>
                <th className="py-3 px-4">Monthly Water Expense</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((w, idx) => (
                <tr key={idx} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                  <td className="py-3 px-4 font-medium text-white">{w.ward}</td>
                  <td className="py-3 px-4 font-semibold">{w.lpcd} LPCD</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded text-xs ${w.lpcd >= 135 ? "bg-emerald-950 text-emerald-400" : "bg-rose-950 text-rose-400"}`}>
                      {w.lpcd >= 135 ? "Compliant" : `Deficit (-${135 - w.lpcd} LPCD)`}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-mono">{w.costPerMonth}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                      w.status === "Critical Deficit" ? "bg-rose-900/70 text-rose-300 border border-rose-700" :
                      w.status === "High Stress" ? "bg-amber-900/70 text-amber-300 border border-amber-700" :
                      "bg-emerald-900/70 text-emerald-300 border border-emerald-700"
                    }`}>
                      {w.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}