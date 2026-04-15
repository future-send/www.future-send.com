import { Roboto_Condensed, Bebas_Neue } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/NavBar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto-condensed",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"], // Bebas Neue supporta solo un peso (400)
  variable: "--font-bebas-neue",
});

export const metadata = {
  title: "Cris Delli Zotti | Portfolio",
  description: "UX/UI Designer & Full-Stack Developer specialized in modern, conversion-focused websites.",
  openGraph: {
    title: "Cris Delli Zotti | Portfolio",
    description: "UX/UI Designer & Full-Stack Developer specialized in modern, conversion-focused websites.",
    images: [
      {
        url: "https://www.crisdellizotti.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-neutral-400 ">
        <Hero />
        <NavBar />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
