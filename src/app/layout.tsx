import type { Metadata } from "next";
import "@/styles/global.css";
import { AppProvider } from "@/lib/app-context";
import AppShell from "@/components/chrome/AppShell";

export const metadata: Metadata = {
  title: "Studio9DN — Tropical architecture, designed to perform",
  description:
    "Studio9DN is an independent, multidisciplinary architecture practice in Lagos, Nigeria — 9 degrees north, where the world turns tropical.",
  icons: { icon: "/assets/logos/Studio9DN-Badge-Forest.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <AppShell>{children}</AppShell>
        </AppProvider>
      </body>
    </html>
  );
}
