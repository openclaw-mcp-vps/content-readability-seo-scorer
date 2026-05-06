import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReadabilityScore — Grade Content for SEO",
  description: "Analyze text readability with Flesch-Kincaid, SMOG and more. Get actionable SEO improvement suggestions to rank higher."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="30956f78-f7ab-4384-bd50-1ab08fa836de"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
