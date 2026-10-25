import React, { useState } from 'react';
import { BadgeCheck, Clock3, MapPin, Send, ThumbsUp } from 'lucide-react';

const defectTypes = [
  'Pipe Burst',
  'Contaminated / Muddy Water',
  'Zero Pressure',
  'Tanker Extortion'
];

const locations = ['Kalyan', 'Kurla', 'Govandi', 'Thane', 'Chembur'];
const urgencyLevels = ['Moderate', 'High', 'Critical'];

const initialComplaints = [
  {
    id: 'AF-2048',
    type: 'Contaminated / Muddy Water',
    location: 'Govandi',
    urgency: 'Critical',
    details: 'Water has been brown and visibly cloudy since the morning supply.',
    time: '8 min ago',
    upvotes: 18,
    verifications: 7,
    voted: false,
    verified: false
  },
  {
    id: 'AF-2047',
    type: 'Zero Pressure',
    location: 'Kurla',
    urgency: 'High',
    details: 'No water reaching upper floors for the last two scheduled supply windows.',
    time: '21 min ago',
    upvotes: 12,
    verifications: 4,
    voted: false,
    verified: false
  },
  {
    id: 'AF-2046',
    type: 'Pipe Burst',
    location: 'Kalyan',
    urgency: 'Moderate',
    details: 'Water is pooling near the junction beside the community clinic.',
    time: '36 min ago',
    upvotes: 9,
    verifications: 3,
    voted: false,
    verified: false
  }
];

const urgencyStyles = {
  Critical: 'border-rose-500 bg-rose-950/70 text-rose-200',
  High: 'border-amber-500 bg-amber-950/60 text-amber-200',
  Moderate: 'border-teal-500 bg-teal-950/60 text-teal-200'
};

export default function CitizenGrievancePortal() {
  const [complaints, setComplaints] = useState(initialComplaints);
  const [defectType, setDefectType] = useState('');
  const [location, setLocation] = useState('');
  const [urgency, setUrgency] = useState('Moderate');
  const [details, setDetails] = useState('');

  const submitComplaint = (event) => {
    event.preventDefault();
    const complaint = {
      id: `AF-${Date.now().toString().slice(-4)}`,
      type: defectType,
      location,
      urgency,
      details: details.trim() || 'No additional details provided.',
      time: 'Just now',
      upvotes: 0,
      verifications: 0,
      voted: false,
      verified: false
    };

    setComplaints((current) => [complaint, ...current]);
    setDefectType('');
    setLocation('');
    setUrgency('Moderate');
    setDetails('');
  };

  const toggleSupport = (id, field, countField) => {
    setComplaints((current) => current.map((complaint) => {
      if (complaint.id !== id) return complaint;
      const wasActive = complaint[field];
      return {
        ...complaint,
        [field]: !wasActive,
        [countField]: complaint[countField] + (wasActive ? -1 : 1)
      };
    }));
  };

  return (
    <section className="px-6 pb-6" aria-labelledby="grievance-heading">
      <div className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800/90">
        <div className="flex flex-wrap items-end justify-between gap-3 border-b border-slate-700 px-5 py-4">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase text-teal-300">Community water desk</p>
            <h2 id="grievance-heading" className="text-lg font-bold text-white">Citizen grievances & live reports</h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-400" />
            </span>
            {complaints.length} reports in the community feed
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,0.8fr)_minmax(0,1.2fr)]">
          <form onSubmit={submitComplaint} className="border-b border-slate-700 p-5 lg:border-b-0 lg:border-r">
            <h3 className="mb-4 text-sm font-semibold text-white">Log a water issue</h3>

            <label className="mb-1.5 block text-xs font-medium text-slate-300" htmlFor="defect-type">Issue type</label>
            <select
              id="defect-type"
              required
              value={defectType}
              onChange={(event) => setDefectType(event.target.value)}
              className="mb-4 w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2.5 text-sm text-white outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
            >
              <option value="" disabled>Select an issue</option>
              {defectTypes.map((type) => <option key={type} value={type}>{type}</option>)}
            </select>

            <label className="mb-1.5 block text-xs font-medium text-slate-300" htmlFor="issue-location">Area</label>
            <select
              id="issue-location"
              required
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              className="mb-4 w-full rounded-md border border-slate-600 bg-slate-900 px-3 py-2.5 text-sm text-white outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
            >
              <option value="" disabled>Select an area</option>
              {locations.map((area) => <option key={area} value={area}>{area}</option>)}
            </select>

            <fieldset className="mb-4">
              <legend className="mb-2 text-xs font-medium text-slate-300">Urgency</legend>
              <div className="grid grid-cols-3 gap-2">
                {urgencyLevels.map((level) => (
                  <button
                    key={level}
                    type="button"
                    aria-pressed={urgency === level}
                    onClick={() => setUrgency(level)}
                    className={`rounded-md border px-2 py-2 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300 ${urgency === level ? urgencyStyles[level] : 'border-slate-600 bg-slate-900 text-slate-400 hover:border-slate-500 hover:text-slate-200'}`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </fieldset>

            <label className="mb-1.5 block text-xs font-medium text-slate-300" htmlFor="issue-details">What happened? <span className="font-normal text-slate-500">(optional)</span></label>
            <textarea
              id="issue-details"
              rows="3"
              maxLength="240"
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              placeholder="Add a short description or nearby landmark"
              className="mb-4 w-full resize-y rounded-md border border-slate-600 bg-slate-900 px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-teal-400 focus:ring-1 focus:ring-teal-400"
            />

            <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-md bg-teal-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300">
              <Send className="h-4 w-4" aria-hidden="true" />
              Submit report
            </button>
          </form>

          <div className="p-5">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-white">Reports from residents</h3>
              <span className="text-xs text-slate-400">Newest first</span>
            </div>
            <div className="space-y-3">
              {complaints.map((complaint) => (
                <article key={complaint.id} className="rounded-lg border border-slate-700 bg-slate-900/70 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs text-slate-400">{complaint.id}</span>
                      <span className={`rounded border px-2 py-0.5 text-[11px] font-semibold ${urgencyStyles[complaint.urgency]}`}>
                        {complaint.urgency}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-400"><Clock3 className="h-3.5 w-3.5" aria-hidden="true" />{complaint.time}</span>
                  </div>
                  <h4 className="mt-2 text-sm font-semibold text-white">{complaint.type}</h4>
                  <p className="mt-1 inline-flex items-center gap-1 text-xs text-slate-400"><MapPin className="h-3.5 w-3.5" aria-hidden="true" />{complaint.location}</p>
                  <p className="mt-2 text-sm leading-5 text-slate-300">{complaint.details}</p>
                  <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-700 pt-3">
                    <span className="rounded bg-amber-950/70 px-2 py-1 text-[11px] font-medium text-amber-200">Under Municipal Review</span>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        aria-pressed={complaint.voted}
                        onClick={() => toggleSupport(complaint.id, 'voted', 'upvotes')}
                        className={`inline-flex items-center gap-1.5 rounded px-2 py-1 text-xs transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300 ${complaint.voted ? 'bg-teal-950 text-teal-200' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
                      >
                        <ThumbsUp className="h-3.5 w-3.5" aria-hidden="true" />
                        Support {complaint.upvotes}
                      </button>
                      <button
                        type="button"
                        aria-pressed={complaint.verified}
                        onClick={() => toggleSupport(complaint.id, 'verified', 'verifications')}
                        className={`inline-flex items-center gap-1.5 rounded px-2 py-1 text-xs transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300 ${complaint.verified ? 'bg-sky-950 text-sky-200' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}
                      >
                        <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                        Verify {complaint.verifications}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}