
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactLenis } from 'lenis/react'

const geistSans = Geist({
  variable: "--font-geist-sans",  
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Welcome | VIV AI",
  description: "Welcome to VIV AI, your all-in-one AI platform for productivity and business scaling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/v3.png" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <ReactLenis root/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
