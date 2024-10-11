import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuLeft from "@/components/conteners/MenuLeft";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dx-app | ทดลอง",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <div className="desktop:flex desktop:flex-row desktop:px-60 pt-2">
          <div className="lebtop border rounded-2xl w-2/6 h-6/6 p-2 mr-3 bg-white desktop:drop-shadow-lg">
            <MenuLeft />
          </div>
          <div> {children}</div>
        </div>

        <Footer />
      </body>
    </html>
  );
}
