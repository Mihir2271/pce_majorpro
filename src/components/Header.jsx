import React from 'react';
import { Droplet, AlertTriangle, ShieldCheck, Moon, Sun } from 'lucide-react';
import ProfessorBriefing from './ProfessorBriefing';

export default function Header({ theme, onToggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <header className={`px-6 py-4 flex flex-wrap justify-between items-center border-b transition-colors duration-200 ${isDark ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'}`}>
      <div className="flex items-center gap-3">
        <div className="bg-blue-600 p-2 rounded-lg">
          <Droplet className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight">AquaFlow MMR</h1>
          <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>PCE Major Project • Water Scarcity & Distribution Audit</p>
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
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-md border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400 ${isDark ? 'border-slate-700 bg-slate-800 text-amber-300 hover:bg-slate-700' : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-100'}`}
        >
          {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
        </button>
        <ProfessorBriefing />
      </div>
    </header>
  );
}