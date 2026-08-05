import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "San Diego Asian American Sports Club",
  description: "Community, culture, sport, and service.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
