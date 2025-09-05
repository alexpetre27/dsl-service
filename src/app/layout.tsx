import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SkipToContent from "./components/ui/SkipToContent";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Service Auto Premium | BMW, Mercedes, Audi, Porsche | Stație ITP Autorizată",
  description: "Service auto premium pentru mărci de top: BMW, Mercedes, Audi, Porsche. Stație ITP autorizată RAR. Diagnoză computerizată, reparații profesionale, garanție lucrări.",
  keywords: "service auto, BMW, Mercedes, Audi, Porsche, ITP, service premium, diagnoză computerizată, reparații auto",
  authors: [{ name: "Service Auto Premium" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ro_RO",
    title: "Service Auto Premium | Stație ITP Autorizată",
    description: "Service auto premium pentru mărci de top. Stație ITP autorizată RAR. Diagnoză computerizată, reparații profesionale.",
    siteName: "Service Auto Premium",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <SkipToContent />
        {children}
      </body>
    </html>
  );
}
