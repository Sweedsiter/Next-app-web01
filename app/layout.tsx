import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuLeft from "@/components/conteners/MenuLeft";
import Transition from "@/components/conteners/Transition";
import ScrollTop from "@/components/conteners/ScrollTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dx-app | Resume",
  description: "CV,Resume,Dx,Dxemb,Dxebm,Dx-emb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body className={inter.className}>
        <div className="sticky top-0 z-10">
          <Navbar />
        </div>
        <div className="fixed bottom-3 right-3 desktop:bottom-20 desktop:mr-40  z-50">
          <ScrollTop />
        </div>
        <div className="desktop:flex desktop:flex-row desktop:px-10 monitor:px-80 pt-2 relative">
          <div className="lebtop border rounded-2xl w-3/6  pb-6  p-2 mr-3 bg-white desktop:drop-shadow-lg ">
            <MenuLeft />
          </div>
          <Transition> {children} </Transition>
        </div>
        <Footer />
      </body>
    </html>
  );
}
