import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import Engicon from "@/images/Engicon.png";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eng Yaqin",
  description: "Eng Yaqin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="w-full flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <Image src={Engicon} alt="Engyaqin Logo" width={24} height={24} />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-800">Engyaqin</span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href="/hizmetler" className="text-gray-700 hover:text-orange-500 font-medium">Hizmetler</a>
            <a href="/garaj" className="text-gray-700 hover:text-orange-500 font-medium">Garaj</a>
            <a href="/teklif-al" className="text-gray-700 hover:text-orange-500 font-medium">Teklif Al</a>
            <a href="/iletisim" className="text-gray-700 hover:text-orange-500 font-medium">İletişim</a>
            <a href="/hizmet-ver" className="mr-2 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 font-semibold transition">Hizmet Ver</a>
            <a href="/giris" className="px-4 py-2 border-2 border-orange-500 text-orange-500 rounded font-semibold transition bg-transparent hover:bg-orange-500 hover:text-white">Giriş Yap →</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
