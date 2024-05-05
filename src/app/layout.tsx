import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container } from "@mui/material";

import Footer from "@/components/Layouts/Footer";
import Header from "@/components/Layouts/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MangaVerse",
  description: "MangaVerse is a manga reader website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Container maxWidth="lg">
          <main className="min-h-screen">{children}</main>
        </Container>
        <Footer />
      </body>
    </html>
  );
}
