import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import {Navbar, Footer} from '@/components/layout/index';

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Epworth Methodist Tamil Church",
  description: "A vibrant family dedicated to following Christ and serving our city with love.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Epworth MTC",
  },
};

export const viewport: Viewport = {
  themeColor: "#F9F5ED",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
