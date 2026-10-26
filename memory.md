# Project Memory: AquaFlow India - Urban Water Monitoring Prototype

## Status
- Active Milestone: MILESTONE_5_COMPLETE
- Current Phase: Project Complete

---

## Milestone Roadmap

### [x] MILESTONE_1: System Shell & Executive Health Dashboard
- Setup layout: Sidebar/Header navigation (Mumbai/MMR).
- 4 High-level metric KPI cards (Potable Inflow, Supply Duration, NRW Loss, Tanker Surcharge).

### [x] MILESTONE_2: Interactive Citizen Grievance Portal & Live Reports Feed
- Add an interactive form where citizens can log water issues:
  - Select Defect Type (Pipe Burst, Contaminated/Muddy Water, Zero Pressure, Tanker Extortion).
  - Geotag location selector (Kalyan, Kurla, Govandi, Thane, Chembur).
  - Urgency level toggle (Critical, High, Moderate).
- Live Citizen Complaints Feed with real-time "Upvote / Verify" and "Status: Under Municipal Review".

### [x] MILESTONE_3: Tanker Mafia vs. Article 21 Cost Disparity Auditor
- Interactive cost calculator comparing:
  - Subsidized BMC lifeline water cost (₹5 per 1,000L).
  - Informal private tanker extortion rates (₹80 - ₹160 per 1,000L).
- Display calculated monthly burden on low-income families and legal violation badge under Article 21.

### [x] MILESTONE_4: Professor Presentation Modal (PCE Ethics & Engineering)
- Add a floating button on the top right: "🎓 Professor Briefing / Ethics Audit".
- Clicking opens a slide-out drawer or modal detailing:
  - Problem Statement & Survey data (50 households).
  - Constitutional Mandate (Article 21 - Subhash Kumar v. State of Bihar).
  - CPHEEO 135 LPCD benchmark compliance.
  - Software & IoT engineering architecture.

### [x] MILESTONE_5: Light & Dark Mode Theme Toggle
- Add a Sun / Moon toggle button in the Header next to "Professor Briefing / Ethics Audit".
- Implement stateful theme switching:
  - Dark Mode: Slate-950 background, Slate-800/900 cards, Slate-100 text.
  - Light Mode: Clean civic white / Slate-50 background, Crisp white cards with Slate-200 borders, Slate-900 high-contrast text.
  - Smooth transitions across all components (Metrics cards, Grievance desk, Ward equity table, Cost auditor).
- Added an accessible Sun/Moon theme toggle, retaining the existing dark mode as the default.
- Added light-theme styles for dashboard cards, tables, form controls, status indicators, and the professor briefing drawer.
- Theme switching updates the full application and transitions colors smoothly.