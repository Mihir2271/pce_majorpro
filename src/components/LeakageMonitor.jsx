import React, { useState } from 'react';
import { AlertCircle, Wrench, CheckCircle2 } from 'lucide-react';

export default function LeakageMonitor() {
  const [leaks, setLeaks] = useState([
    { id: "LK-101", location: "Kurla Harbour Line Embankment", lossRate: "4,200 L/hr", status: "Active Rupture", pressureDrop: "-42 psi" },
    { id: "LK-102", location: "Bhandup Water Works Trunk Aqueduct", lossRate: "1,800 L/hr", status: "Active Rupture", pressureDrop: "-18 psi" },
    { id: "LK-103", location: "Govandi Station Link Road", lossRate: "950 L/hr", status: "Active Rupture", pressureDrop: "-12 psi" }
  ]);

  const isolateValve = (id) => {
    setLeaks(leaks.map(l => l.id === id ? { ...l, status: "Isolated / Repair Crew Dispatched", lossRate: "0 L/hr" } : l));
  };

  return (
    <div className="p-6 pt-0">
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-5">
        <h2 className="text-lg font-bold text-white mb-1">IoT Acoustic Pipe Burst Telemetry (SCADA DMA Feed)</h2>
        <p className="text-xs text-slate-400 mb-4">Real-time pressure drop sensors identifying municipal non-revenue pipeline loss.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {leaks.map(l => (
            <div key={l.id} className="bg-slate-900/80 border border-slate-700 p-4 rounded-lg flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono text-slate-400">{l.id}</span>
                  <span className={`text-xs px-2 py-0.5 rounded ${l.status.includes("Active") ? "bg-rose-900/80 text-rose-300 animate-pulse" : "bg-emerald-900/80 text-emerald-300"}`}>
                    {l.status}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-white">{l.location}</h4>
                <div className="mt-3 flex justify-between text-xs text-slate-300">
                  <span>Water Loss: <strong>{l.lossRate}</strong></span>
                  <span>Sensor Head: <strong className="text-rose-400">{l.pressureDrop}</strong></span>
                </div>
              </div>
              <button
                onClick={() => isolateValve(l.id)}
                disabled={l.status.includes("Isolated")}
                className={`mt-4 w-full flex items-center justify-center gap-1.5 text-xs py-2 rounded-lg font-medium transition ${
                  l.status.includes("Isolated") ? "bg-emerald-900/50 text-emerald-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500 text-white"
                }`}
              >
                {l.status.includes("Isolated") ? <><CheckCircle2 className="w-3.5 h-3.5" /> Valve Closed</> : <><Wrench className="w-3.5 h-3.5" /> Trigger SCADA Isolation</>}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}