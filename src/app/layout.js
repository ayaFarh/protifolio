import { Geist, Geist_Mono, Lato, Lora } from "next/font/google";
import "./globals.css";
import Navbar from "./_Component/Navbar";
import Footer from "./_Component/Footer";
import Arrow from "./_Component/Arrow";
import { AnimatePresence } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], 
  variable: "--font-lato",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

export const metadata = {
  title: "Aya Farh",
  description: "Aya Farh Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${geistSans.variable} ${geistMono.variable} ${lato.variable} ${lora.variable}`}
    >
      <body className="antialiased relative">
        <Navbar />

        <main className="min-h-screen">{children}</main>

        <AnimatePresence>
          <Arrow />
        </AnimatePresence>

        <Footer />
      </body>
    </html>
  );
}
