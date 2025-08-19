import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "500", "600"],
});
export const metadata: Metadata = {
  title: "Movies | Series | TV",
  description:
    "Application where you can see information and trailers of the latest movies, series and TV",
  keywords: ["Movies", "Series", "Tv", "Search", "App"],
  authors: { name: "Dariomvg", url: "https://github.com/dariomvg" },
  robots: "index, follow",
  icons: {
    icon: "/icon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <Header />
        {children}
        </body>
    </html>
  );
}
