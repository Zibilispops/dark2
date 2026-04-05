import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import { CustomCursor } from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dark Factory — Digital Vanguard DTG",
  description: "High-fidelity garments for the digital vanguard. Limited edition DTG-printed heavyweight cotton tees from Gifu, Japan.",
  metadataBase: new URL("https://www.sdjapan.jp"),
  alternates: {
    canonical: "https://www.sdjapan.jp",
  },
  openGraph: {
    siteName: "Dark Factory",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-[50px] lg:pt-[80px] bg-black text-white">
        <div className="layout-content-wrapper flex flex-col min-h-full flex-1">
          <CustomCursor />
          <AuthProvider>
            <CartProvider>
              <Navbar />
              <div className="flex-1 flex flex-col">
                {children}
              </div>
              <Footer />
            </CartProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
