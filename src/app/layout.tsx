import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { Container } from "@mui/material";

import Footer from "@/components/Layouts/Footer";

const Header = dynamic(() => import("@/components/Layouts/Header"), {
  ssr: false,
});

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
          <main>{children}</main>
        </Container>
        <Footer />
      </body>
    </html>
  );
}
