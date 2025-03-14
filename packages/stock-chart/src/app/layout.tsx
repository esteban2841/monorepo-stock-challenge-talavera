import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { StockProvider } from "@/context";
import { SideBarMenuModal } from "@/molecules";


const geistSans = localFont({
  src: "../../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Finance pro",
  description: "An easy platform to invest in the stock market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StockProvider>
        <body className={`${geistSans.variable} ${geistMono.variable} flex w-full flex-col relative`}>
          <SideBarMenuModal></SideBarMenuModal>

            {children}
        </body>
      </StockProvider>
    </html>
  );
}
