import React from 'react';
import { Droplet, AlertTriangle, ShieldCheck } from 'lucide-react';
import ProfessorBriefing from './ProfessorBriefing';

export default function Header() {
  return (
    <header className="bg-slate-900 text-white px-6 py-4 flex flex-wrap justify-between items-center border-b border-slate-800">
      <div className="flex items-center gap-3">
        <div className="bg-blue-600 p-2 rounded-lg">
          <Droplet className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight">AquaFlow MMR</h1>
          <p className="text-xs text-slate-400">PCE Major Project • Water Scarcity & Distribution Audit</p>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-2 sm:mt-0">
        <div className="flex items-center gap-2 bg-rose-950/60 border border-rose-800 px-3 py-1.5 rounded-full text-xs text-rose-300">
          <AlertTriangle className="w-4 h-4 text-rose-400" />
          <span>Active Pipeline Ruptures: <strong>3 Critical</strong></span>
        </div>
        <div className="flex items-center gap-2 bg-emerald-950/60 border border-emerald-800 px-3 py-1.5 rounded-full text-xs text-emerald-300">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Article 21 Lifeline Audit: Active</span>
        </div>
        <ProfessorBriefing />
      </div>
    </header>
  );
}