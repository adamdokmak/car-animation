import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import React, { ReactNode } from "react";
import LenisProvider from "@/app/LenisProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Animation",
  description: "Created by Adam Dokmak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <LenisProvider>
        <body className={`${poppins.className} no-scrollbar bg-[#ECEDEE]`}>
          <Nav />
          {children}
          <Footer />
        </body>
      </LenisProvider>
    </html>
  );
}
