import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";
import CallNow from "@/components/CallNow";

export const metadata: Metadata = {
  title: "Southern Shine | East Tennessee Cleaning Crew",
  description:
    "Neighbor-built cleaning startup serving Oak Ridge, Knoxville, Powell, and nearby communities with hardworking, respectful crews.",
  openGraph: {
    title: "Southern Shine Cleaning Co.",
    description:
      "Startup cleaning crew from East Tennessee delivering house, office, and car detailing with neighborly care and transparent pricing.",
    url: "https://asouthernglow.com",
    siteName: "Southern Shine",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body">
        {children}
        <CallNow />
        <Analytics />
      </body>
    </html>
  );
}
