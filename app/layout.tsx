import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Breathe",
  description: "In. And out.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-indigo-100 text-indigo-900 dark:bg-indigo-900 dark:text-indigo-100`}
      >
        {children}
      </body>
    </html>
  );
}
