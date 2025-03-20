import type { Metadata } from "next";
import "./globals.css";

import Cursor from "@/components/cursor";

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
    <html lang="en" className="cursor-none w-full min-h-dvh">
      <body className={`antialiased`}>
        <div className="hidden lg:block">
          <Cursor />
        </div>
        {children}
      </body>
    </html>
  );
}
