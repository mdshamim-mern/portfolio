import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; 
import WhatsAppButton from "../components/WhatsAppButton";
import ViewTracker from "../components/ui/ViewTracker";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Md Shamim",
  description: "Portfolio of Md Shamim, a passionate Full Stack Web Developer specializing in the MERN stack.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        
        <ViewTracker />

        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <WhatsAppButton />
        
        <Footer />
      </body>
    </html>
  );
}