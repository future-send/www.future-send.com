import { Roboto_Condensed, Bebas_Neue } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/NavBar";

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
  title: {
    template: "%s | Cris Delli-Zotti",
    default: "Cris Delli-Zotti | UX/UI Designer - Full-Stack Developer",
  },

  description: "Cris Delli-Zotti | UX/UI Designer - Full-Stack Developer",
  applicationName: "UX/UI Designer - Full-Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-neutral-900 text-neutral-400">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
