import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { PERSONAL } from "@/lib/data";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nayemulsaheb.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${PERSONAL.name} — ${PERSONAL.role}`,
    template: `%s | ${PERSONAL.name}`,
  },
  description:
    "Frontend-focused Software Engineer building performant, pixel-perfect web applications. Open to new opportunities.",
  keywords: [
    "Nayemul Saheb",
    "Software Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: PERSONAL.name, url: siteUrl }],
  creator: PERSONAL.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: `${PERSONAL.name} — ${PERSONAL.role}`,
    description:
      "Frontend-focused Software Engineer building performant, pixel-perfect web applications.",
    siteName: `${PERSONAL.name} Portfolio`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${PERSONAL.name} — ${PERSONAL.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL.name} — ${PERSONAL.role}`,
    description: "Frontend-focused Software Engineer. React, Next.js, TypeScript.",
    creator: "@nayemulsaheb",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={`${syne.variable} ${jetbrainsMono.variable}`}>
      <head>
        {gaId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaId}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "rgba(11,16,37,0.95)",
              color: "#00f5ff",
              border: "1px solid rgba(0,196,204,0.4)",
              backdropFilter: "blur(20px)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.8rem",
              letterSpacing: "0.06em",
              boxShadow: "0 0 30px rgba(0,245,255,0.12)",
            },
            success: {
              iconTheme: { primary: "#00ff88", secondary: "#040610" },
            },
            error: {
              iconTheme: { primary: "#ff2d78", secondary: "#040610" },
            },
          }}
        />
      </body>
    </html>
  );
}
