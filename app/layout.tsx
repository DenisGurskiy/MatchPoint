import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MatchPoint",
  description: "Service for booking sports grounds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <div className="w-full mx-auto flex justify-center max-w-[1200px]">
          {children}
        </div>
      </body>
    </html>
  );
}
