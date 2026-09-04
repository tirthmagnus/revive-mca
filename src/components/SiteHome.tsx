"use client";

import { ArrowRight, BookOpenText, Check, FileSearch, Layers3, MessagesSquare, Quote, ShieldCheck, TrendingDown } from "lucide-react";
import InlineLeadCapture from "./InlineLeadCapture";
import { useLeadModal } from "./LeadModalContext";

const reviews = [
  { name: "Restaurant owner", role: "Hospitality · sample review", image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800", quote: "The conversation was direct and practical. I could explain the payment pressure without feeling pushed into another decision." },
  { name: "Operations owner", role: "Transportation · sample review", image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800", quote: "They focused on the actual operating problem first, not a flashy percentage or promise." },
  { name: "Practice owner", role: "Healthcare · sample review", image: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800", quote: "I left the first review with a clearer list of questions and a better sense of what to prepare next." },
];

const steps = [
  ["01", "Describe the pressure", "Tell us what the withdrawals are doing to the operating day."],
  ["02", "Map the obligations", "Organize active positions, cadence, balances, and immediate priorities."],
  ["03", "Review realistic paths", "Compare options and tradeoffs without a generic savings promise."],
  ["04", "Move with a plan", "If you choose to proceed, keep the communication and next steps organized."],
];

export default function SiteHome({ onContinue: _onContinue }: { onContinue: (a:string,b:string)=>void }) {
  const openLead = useLeadModal();
  return <>
    <section id="top" className="rv2-hero">
      <div className="rv2-hero-bg" />
      <div className="site-wrap rv2-hero-grid">
        <div className="rv2-copy">
          <span className="rv2-kicker">Business pressure deserves a business response.</span>
          <h1>Reclaim room to run your business.</h1>
          <p>Revive MCA helps owners organize merchant cash advance pressure, understand the operating impact, and prepare for a more informed conversation about next steps.</p>
          <div className="rv2-actions">
            <button onClick={openLead}>Speak with a specialist <ArrowRight /></button>
            <a href="#rv2-process">See the process</a>
          </div>
          <div className="rv2-proof">
            <span><ShieldCheck /> Confidential intake</span>
            <span><Check /> Business-purpose focus</span>
            <span><Check /> No outcome guarantees</span>
          </div>
        </div>
        <div className="rv2-form-wrap">
          <InlineLeadCapture title="Get a free, confidential review" button="Request my review" />
        </div>
      </div>
      <div className="site-wrap rv2-signal-row">
        <div><strong>Daily pressure</strong><span>Understand what is being squeezed first.</span></div>
        <div><strong>Stacked positions</strong><span>Look at the combined burden, not isolated payments.</span></div>
        <div><strong>Operating priorities</strong><span>Keep payroll, inventory, rent, and vendors visible.</span></div>
        <div><strong>Clear next step</strong><span>Move from reaction to an organized review.</span></div>
      </div>
    </section>

    <section id="solutions" className="rv2-solutions">
      <div className="site-wrap">
        <div className="rv2-editorial-head">
          <span>WHAT OWNERS ARE TRYING TO SOLVE</span>
          <h2>Fix the pressure point before it starts running the company.</h2>
        </div>
        <div className="rv2-editorial-grid">
          <article className="rv2-feature"><TrendingDown/><small>01</small><h3>Payment pressure</h3><p>Daily or weekly withdrawals are competing with payroll, inventory, taxes, rent, and vendor commitments.</p></article>
          <article><Layers3/><small>02</small><h3>Stacked advances</h3><p>Several positions are drawing from the same revenue, making the real weekly burden harder to see.</p></article>
          <article><MessagesSquare/><small>03</small><h3>Collection activity</h3><p>Calls, notices, and escalation are taking attention away from operating the business.</p></article>
          <article><FileSearch/><small>04</small><h3>Agreement questions</h3><p>Owners need a clearer view of documents, payment mechanics, and what questions to ask next.</p></article>
        </div>
      </div>
    </section>

    <section id="rv2-process" className="rv2-process">
      <div className="site-wrap rv2-process-layout">
        <div className="rv2-process-intro"><span>HOW IT WORKS</span><h2>A visible path from pressure to a decision.</h2><p>The experience is intentionally simple on mobile: understand the issue, share only what is necessary, then let a real person take the conversation forward.</p></div>
        <div className="rv2-rail">{steps.map((s)=><article key={s[0]}><span>{s[0]}</span><div><h3>{s[1]}</h3><p>{s[2]}</p></div></article>)}</div>
      </div>
    </section>

    <section id="stories" className="rv2-stories">
      <div className="site-wrap">
        <div className="rv2-section-title"><span>BUSINESS-OWNER PERSPECTIVE</span><h2>Trust should feel human.</h2><p>Staging review layouts below are placeholders and should be replaced with client-approved testimonials before production.</p></div>
        <div className="rv2-review-grid">{reviews.map((r)=><article key={r.name}><img src={r.image} alt="Business owner"/><div><Quote/><p>“{r.quote}”</p><strong>{r.name}</strong><span>{r.role}</span></div></article>)}</div>
      </div>
    </section>

    <section className="rv2-insights">
      <div className="site-wrap rv2-insight-card"><BookOpenText/><div><span>INSIGHTS & RESOURCES</span><h2>Useful answers before the sales conversation.</h2><p>Educational content builds search visibility and gives skeptical visitors a reason to trust the brand before they share contact information.</p></div><a href="/insights">Explore resources <ArrowRight/></a></div>
    </section>
  </>;
}
