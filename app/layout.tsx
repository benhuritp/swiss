import type { Metadata } from "next";
import { IBM_Plex_Sans , Space_Grotesk } from "next/font/google";
import "normalize.css"
import "./globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--ibm-plex-sans",
  weight: ["300","400","500"],
  subsets: ["latin"],
});


const spaceGrotesk = Space_Grotesk({
  variable: "--space-grotesk",
  weight: ["400" , "700"],
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Swiss",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <div className="wrapper overflow-hidden">

          <Header />
          {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
