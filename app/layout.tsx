import type { Metadata } from "next";
import "./globals.css";

import Cursor from "@/components/cursor";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Fahmi Dhika",
  description: "Build & Develop by Fahmi Dhika",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="cursor-none">
      <head>
        <link rel="icon" type="image/png" href="/logo.svg" />
      </head>
      <body className="antialiased overflow-x-hidden min-h-dvh">
        <div className="hidden lg:block">
          <Cursor />
        </div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
