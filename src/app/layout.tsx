import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const clashDisplay = localFont({
  src: "./fonts/ClashDisplay-Regular.woff",
  variable: "--font-clash-display"
});

export const metadata: Metadata = {
  title: "Veend | Instant Credit for Everyone",
  description:
    "Veend is a platform that offers instant loans to anyone in Nigeria.",
  keywords: "veend, loans, instant loans, nigeria, credit, online loans"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${clashDisplay.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
