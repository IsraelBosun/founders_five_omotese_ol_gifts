import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import MobileNav from "@/components/layout/MobileNav";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "O'L Gifts & Souvenirs — Meaningful, Memorable, Magnificent",
  description:
    "Bespoke gifting studio based in Lagos. We curate, customize, and craft thoughtful gifts and souvenirs for every occasion. Nationwide delivery.",
  keywords: "gifts, souvenirs, bespoke gifts, Lagos, Nigeria, customized gifts, corporate gifts, wedding souvenirs",
  openGraph: {
    title: "O'L Gifts & Souvenirs",
    description: "Gifts worth remembering. Wrapped with intention.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ol-text">
        <AnnouncementBar />
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileNav />
        <WhatsAppButton />
      </body>
    </html>
  );
}
