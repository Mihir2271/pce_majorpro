import React from 'react';
import Header from './components/Header';
import MetricsOverview from './components/MetricsOverview';
import CitizenGrievancePortal from './components/CitizenGrievancePortal';
import CostDisparityAuditor from './components/CostDisparityAuditor';
import WardEquityTable from './components/WardEquityTable';
import LeakageMonitor from './components/LeakageMonitor';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      <Header />
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