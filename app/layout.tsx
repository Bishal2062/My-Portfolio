import type { Metadata } from "next";
import "./globals.css";
import "./sections.css";

export const metadata: Metadata = {
  title: "Bishal Regmi | Software, Cybersecurity & AI Systems",
  description: "Computer Science student at Kent State University building across software, cybersecurity, infrastructure, and AI-assisted analytics.",
  openGraph: { title: "Bishal Regmi | Software, Cybersecurity & AI Systems", description: "Early-career engineer building across software, security, infrastructure, and AI-assisted analytics.", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Bishal Regmi — Software, Cybersecurity, AI, Infrastructure" }] },
  twitter: { card: "summary_large_image", title: "Bishal Regmi | Software, Cybersecurity & AI Systems", description: "Early-career engineer building across software, security, infrastructure, and AI-assisted analytics.", images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"><head><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Person",name:"Bishal Regmi",url:"https://github.com/Bishal2062",sameAs:["https://github.com/Bishal2062"],alumniOf:{"@type":"CollegeOrUniversity",name:"Kent State University"},knowsAbout:["Software Engineering","Cybersecurity","Network Operations","AI-assisted analytics"]})}} /></head>
      <body>{children}</body>
    </html>
  );
}
