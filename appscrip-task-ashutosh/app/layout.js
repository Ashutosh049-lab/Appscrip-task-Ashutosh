import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/header.css";
import "../styles/toolbar.css";
import "../styles/filters.css";
import "../styles/product-grid.css";
import "../styles/product-card.css";
import "../styles/footer.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shop Products | Minimal Store",
  description:
    "Discover our curated selection of minimal products, from bags to shoes and accessories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
