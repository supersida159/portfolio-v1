import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TransistionProvider from "@/components/transistionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "The Best animated portfolio page",
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
