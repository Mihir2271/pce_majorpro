import React, { useState } from 'react';
import Header from './components/Header';
import MetricsOverview from './components/MetricsOverview';
import CitizenGrievancePortal from './components/CitizenGrievancePortal';
import CostDisparityAuditor from './components/CostDisparityAuditor';
import WardEquityTable from './components/WardEquityTable';
import LeakageMonitor from './components/LeakageMonitor';

export default function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <div data-theme={theme} className="min-h-screen bg-slate-950 text-slate-100 font-sans transition-colors duration-200">
      <Header theme={theme} onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />
      <main className="max-w-7xl mx-auto py-2">
        <MetricsOverview />
        <CitizenGrievancePortal />
        <CostDisparityAuditor />
        <WardEquityTable />
        <LeakageMonitor />
      </main>
    </div>
  );
}