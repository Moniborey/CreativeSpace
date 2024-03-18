import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Creative Space",
  description: "We design and develop website to your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/logocreativespaceV1.png'/>
      </head>
      <body className="w-screen overflow-x-hidden ">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
