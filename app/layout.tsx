import { ThemeProvider } from "../components/ThemeProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salimeh | Frontend Developer & UI Specialist",
  description: "Portfolio of Salimeh, a Frontend Developer specialized in React, Next.js, and TypeScript based in Germany.",
  keywords: ["Frontend Developer", "React Developer", "Next.js", "Web Developer", "Salimeh Portfolio"],
  authors: [{ name: "Salimeh" }],
  openGraph: {
    title: "Salimeh | Frontend Developer Portfolio",
    description: "Explore selected works and frontend projects by Salimeh.",
    type: "website",
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