import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Biosumaq",
  description: "Productos pre formados a base de pescado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
      <NextTopLoader color="#000" />
        {children}

      </body>
    </html>
  );
}
