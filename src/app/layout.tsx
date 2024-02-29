import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Header from "./layoutComponents/Header/Header";
import Footer from "./layoutComponents/Footer/Footer";
import "./globals.css";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoppy",
  description: "Amazing gold treasures",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <body className={dmsans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
