import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";
import NavbarComponent from "./Navbar/navbar";
import { Box } from "@mui/material";
import Footer from "./Footer/Footer";

// const rubik= Rubik({subsets:["latin"],variable:'--font-rubik'})
export const metadata: Metadata = {
  title: "Immerse",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    >
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap')
        </style>
        <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
      </head>
      <body
      // className={rubik.variable}
      >
        <Providers>
          <NavbarComponent />
          <Box sx={{ width: "100vw", height: "auto", minHeight: "90vh", display: "flex", justifyContent: "center",
          //  border: "2px solid red",
           marginTop: "65px" }}>
            {children}
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
