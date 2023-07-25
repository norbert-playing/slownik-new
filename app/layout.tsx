// "use client";
import { SessionProvider } from "next-auth/react";
import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Angielski dla Krzysia",
  description: "app for krzys",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {/* <SessionProvider>{children}</SessionProvider> */}
        {children}
      </body>
    </html>
  );
}
