"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { SITE_NAME } from "@/lib/site";
import { trackLead } from "@/lib/analytics";

export default function InlineLeadCapture({
  title = "Start with your name and phone.",
  button = "Request my private review",
  compact = false,
}: {
  title?: string;
  button?: string;
  compact?: boolean;
}) {
  const [firstName, setFirstName] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(e: FormEvent) {
    e.preventDefault();
    setMessage("");
    if (firstName.trim().length < 2) return setMessage("Please add your name.");
    if (!/^[0-9+()\-.\s]{7,20}$/.test(phone.trim())) return setMessage("Please enter a complete phone number.");
    if (!consent) return setMessage("Please confirm permission for our team to contact you.");
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          phone,
          businessName: "",
          consentToContact: true,
          source: "quick_modal",
          landingPage: window.location.href,
          companyWebsite: "",
        }),
      });
      if (!res.ok) throw new Error("Unable to save your request right now.");
      trackLead("quick_modal");
      setStatus("done");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Please try again.");
    }
  }

  if (status === "done") {
    return (
      <div className={`inline-lead inline-lead-success ${compact ? "is-compact" : ""}`}>
        <CheckCircle2 />
        <div>
          <strong>Request received.</strong>
          <p>Thanks, {firstName}. A team member will review your information and reach out at {phone}.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`inline-lead ${compact ? "is-compact" : ""}`}>
      <div className="inline-lead-head">
        <ShieldCheck />
        <div><strong>{title}</strong><span>Name and phone are the only required details.</span></div>
      </div>
      <div className="inline-lead-fields">
        <label><span>Name</span><input value={firstName} onChange={(e)=>setFirstName(e.target.value)} autoComplete="name" /></label>
        <label><span>Phone</span><input value={phone} onChange={(e)=>setPhone(e.target.value)} autoComplete="tel" inputMode="tel" /></label>
      </div>
      <label className="inline-consent"><input type="checkbox" checked={consent} onChange={(e)=>setConsent(e.target.checked)} /><span>I agree that {SITE_NAME} may call or text me about this business inquiry. Consent is not a condition of purchase. Message/data rates may apply.</span></label>
      {message && <div className="inline-error">{message}</div>}
      <button disabled={status === "sending"} type="submit">{status === "sending" ? "Submitting…" : button}<ArrowRight /></button>
    </form>
  );
}
