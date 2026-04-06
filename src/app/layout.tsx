import "./globals.css";
import ClientLayout from "./ClientLayout";
import Navbar from "../app/Component/layout/Navbar"
import Footer from "../app/Component/layout/Footer"
import { Unbounded, Sora } from "next/font/google";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Renovation Company Canada | Best Remodeling & Interior Design",
  description:
    "Renovation services including kitchens, bathrooms, basements, flooring, painting and full home remodeling.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${unbounded.variable} ${sora.variable}`}>
      <body className="font-sora antialiased bg-white text-black">
        <ClientLayout>
          <Navbar/>
          {children}
          <Footer/>
        </ClientLayout>
      </body>
    </html>
  );
}
