import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextThemesProvider
          defaultTheme="dark"
          attribute="class"
          forcedTheme="dark">
          <NextUIProvider>
            <Header />
            {children}
            <Footer />
          </NextUIProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}