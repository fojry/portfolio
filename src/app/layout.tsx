import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fajry Radiant — Visual Designer & Creative Editor",
  description:
    "The creative portfolio of Fajry Radiant Adithya — visual storytelling, motion design, video editing, and creative production.",
  openGraph: {
    title: "Fajry Radiant — Portfolio",
    description:
      "Visual Communication Design graduate blending narrative storytelling, video production, and motion design.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
