import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const poppinsFont = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Landing | BryantDev",
  description: "Landing page for demostration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <link rel="icon" href="/icon.png" />
      </Head>
      <body
        className={`${poppinsFont.className}`}
      >
        {children}
      </body>
    </html>
  );
}
