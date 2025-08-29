import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "KET Design - Best Interior Designers in Kolkata",
  description:
    "Experience the highest level of transparency in interior design, with complete peace of mind. Professional interior design services in Kolkata.",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body>
        <ScrollToTop />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        {/* Toast notifications provider */}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
