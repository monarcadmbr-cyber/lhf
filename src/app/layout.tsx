import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Providers é client component — OK
import Providers from "./providers";

// LayoutClient também é client component — deve ficar DENTRO do body
import LayoutClient from "@/components/LayoutClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LHF26",
  description: "Painel oficial da liga LHF26",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-white`}
      >
        {/* Providers precisa envolver tudo que usa contexto */}
        <Providers>
          {/* LayoutClient controla navegação, login etc */}
          <LayoutClient>{children}</LayoutClient>
        </Providers>
      </body>
    </html>
  );
}
