import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Envobyte - Innovative IT Solutions for Your Business",
  description: "Envobyte offers cutting-edge IT solutions to help businesses bring ideas to life. We specialize in affordable web development, app development, and digital transformation services. Let us help you grow and succeed in the digital world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >  <Header></Header>
        {children}
        

      </body>
    </html>
  );
}
