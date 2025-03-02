import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TransistionProvider from "@/components/transistionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TungDev Portfolio", 
  description: "Portfolio for TungDev as Golang Developer"
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransistionProvider>{children}</TransistionProvider>
      </body>
    </html>
  );
}