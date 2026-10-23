import { ThemeProvider } from "../components/ThemeProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salimeh Miranipour | Frontend Developer",
  description:
    "Frontend Developer in Berlin with 4 years of experience building React dashboards, single-page applications and reusable UI components.",
  keywords: [
    "Frontend Developer",
    "React",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Salimeh Miranipour",
    "Berlin",
  ],
  authors: [{ name: "Salimeh Miranipour" }],
  verification: {
    google: "tMUB1uKpvwALP5YBH7BtDgLxrpRmjYT8XQ-hxv8Zai0",
  },
  openGraph: {
    title: "Salimeh Miranipour | Frontend Developer",
    description:
      "Frontend Developer in Berlin with 4 years of experience building React dashboards, single-page applications and reusable UI components.",
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