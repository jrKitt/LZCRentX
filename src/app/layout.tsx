import type { Metadata } from "next";
import { Athiti } from 'next/font/google'
import "./globals.css";
const athiti = Athiti({
  subsets: ["thai", "latin"], 
  weight: ["400", "700"], 
  display: "swap",
});


export const metadata: Metadata = {
  title: "LZCRental",
  description: "LZCRental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="retro">
      <body
        className={`${athiti.className} `} 
      >
        {children}
      </body>
    </html>
  );
}