import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anzel Acharya",
  description: "Anzel is a frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} bg-gray-100 text-gray-950 relative pt-28 sm:pt-36`} //:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 dark
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
