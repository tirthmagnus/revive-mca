"use client";
import { useState } from "react";
import Header from "@/components/Header";
import SiteHome from "@/components/SiteHome";
import LeadForm from "@/components/LeadForm";
import ChatWidget from "@/components/ChatWidget";
import SiteFooter from "@/components/SiteFooter";
import { LeadModalProvider } from "@/components/LeadModalContext";

function HomeContent() {
 const [prefill, setPrefill] = useState<{balanceRange?:string; numberOfMcas?:string}>({});
 return <main><Header/><SiteHome onContinue={(balanceRange, numberOfMcas)=>{setPrefill({balanceRange,numberOfMcas}); setTimeout(()=>document.getElementById("apply")?.scrollIntoView({behavior:"smooth",block:"start"}),50);}}/><section id="intake" className="intake-section"><div className="site-wrap intake-grid"><div className="intake-copy"><span className="eyebrow">Private intake</span><h2>Two required details. A clearer first conversation.</h2><p>Name and phone are the only required contact fields. Everything else is optional and simply gives the team context before they call.</p><div className="trust-list"><span>Business-purpose inquiry</span><span>No enrollment by submitting</span><span>No guaranteed outcome</span></div></div><LeadForm prefillBalanceRange={prefill.balanceRange} prefillNumberOfMcas={prefill.numberOfMcas}/></div></section><SiteFooter/><ChatWidget/></main>;
}
export default function Home(){return <LeadModalProvider><HomeContent/></LeadModalProvider>;}
