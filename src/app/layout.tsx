import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";

const syne = Syne({ 
  subsets: ["latin"],
  variable: "--font-syne",
  display: 'swap',
});

const manrope = Manrope({ 
  subsets: ["latin"],
  variable: "--font-manrope",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Vryce - Design, Creativity & Branding",
  description: "Graphic design, branding, and copywriting agency based in Miami.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${manrope.variable} font-manrope bg-brand-dark text-brand-white antialiased selection:bg-brand-violet selection:text-brand-white`}
      >
        {children}
      </body>
    </html>
  );
}
