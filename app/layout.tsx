import { ThemeProvider } from "../components/ThemeProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salimeh Miranipour | Frontend Developer & UI Specialist",
  description: "Portfolio of Salimeh Miranipour, a Frontend Developer specialized in React, Next.js, and TypeScript based in Germany.",
  keywords: ["Frontend Developer", "React Developer", "Next.js", "Web Developer", "Salimeh Miranipour Portfolio"],
  authors: [{ name: "Salimeh Miranipour" }],
  verification: {
    google: "tMUB1uKpvwALP5YBH7BtDgLxrpRmjYT8XQ-hxv8Zai0",
  },
  openGraph: {
    title: "Salimeh Miranipour | Frontend Developer Portfolio",
    description: "Explore selected works and frontend projects by Salimeh Miranipour.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}