import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "San Diego Asian American Sports Club (SDAASC)",
  description: "A 501(c)(3) nonprofit organization dedicated to strengthening our community through sports, culture, leadership, and service.",
  icons: {
    icon: [
      { url: "/images/sdaasc-logo.png", type: "image/png" },
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/images/sdaasc-logo.png",
    apple: "/images/sdaasc-logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/sdaasc-logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/images/sdaasc-logo.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
