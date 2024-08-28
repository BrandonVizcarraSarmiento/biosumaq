import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/clientes/navbar";
import Footer from "@/components/clientes/footer";
import Redes from "@/components/clientes/redes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BioSumaq",
  description: "Somos una empresa de alimentos a base de pescado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Redes />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
