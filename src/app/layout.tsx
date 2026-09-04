import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import AnalyticsConsent from "@/components/AnalyticsConsent";
import "./globals.css";
import "./revive-v2.css";

const display = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], weight: ["500","600","700"] });
const body = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400","500","600","700"] });
const mono = JetBrains_Mono({ variable: "--font-jbmono", subsets: ["latin"], weight: ["400","500","700"] });

export const metadata: Metadata = {
  title: "Revive MCA | Business support for MCA payment pressure",
  description: "Confidential business-focused support for owners evaluating merchant cash advance payment pressure and next-step options.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}>{children}<AnalyticsConsent gaId={process.env.NEXT_PUBLIC_GA_ID} metaPixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID} /></body></html>;
}
