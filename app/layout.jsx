import Header from "@/components/Header";
import "../styles/global.css";

import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import styles from "./styles.module.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Next.js | Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.className}>
      <body className={styles.container}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
