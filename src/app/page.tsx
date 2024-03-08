"use client"
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import NavbarComponent from "./Navbar/navbar";
import { Button } from "@nextui-org/react";
import 'tailwindcss/tailwind.css'
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import ImmerseText from "./Common/immerseText";
import ImmerseTextPhone from './Common/immerseTextPhone'
import ImmerseLogo from "./Common/immerseLogo";
import ImmerseLogoPhone from "./Common/immerseLogoPhone"
import { About } from "./About/about";
import { Heading } from "./Common/heading";
import Event from "./event/event";
import Schedule from "@/app/Schedule/Schedule";
import Footer from "./Footer/Footer";
import { Inter, Rubik } from "next/font/google";
import { DevfolioBtn } from "./Common/devfolioBtn";
import { useTheme } from "@emotion/react";

// import '../globals.css'

export default function Home() {
  const theme=useTheme()
  const screenSize=useMediaQuery('(min-width:600px)')
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <>
      <Stack width="75vw"
        //  border="2px solid red"
        direction="column" alignItems="start">
        <Stack width="75vw" minHeight="90vh" height="auto"
          //  border="2px solid green"
          direction="column" alignItems="center" justifyContent="center">
          <Stack width={{xs:"95vw",sm:"75vw"}}
             border="2px solid black"
            className="yellowBG"
            paddingY={{xs:4,sm:5}}
            paddingX={{xl:10,lg:6,xs:2}}
            borderRadius={20}
            direction="row" alignItems="center" justifyContent={{xs:'center',sm:"space-evenly"}} flexWrap="wrap-reverse">
            <Box
            sx={{
              // border:"2px solid blue",
              // minWidth:"500px",
              width:{xs:'100%',sm:"60vw",lg:"30vw"}}}
            >
              <Typography width="auto" className="rubik" fontSize={{xs:'4rem',sm:"3rem",lg:'4rem',xl:"5rem"}} lineHeight={1.1} pb={2}>Get ready to experience</Typography>
              <Box> {screenSize ? <ImmerseText/> : <ImmerseTextPhone/>} </Box>
              <Typography fontSize="2.5rem" width="60%" className="rubik" pt={2}>The annual tech-fest of GDSC MMMUT</Typography>
              <div
                className="apply-button"
                data-hackathon-slug="gdscmmmut"
                data-button-theme="light"
                style={{ height: "44px", width: "312px " }}
              > </div>
            </Box>
            <Box
             sx={{
              // border:"2px solid blue",
              display:{sm:'block'}}}
            > {screenSize ? <ImmerseLogo/> : <ImmerseLogoPhone/>} </Box>
          </Stack>
        </Stack>
        <About />
        <Event />
        <Stack  height="auto" width="100%" alignItems="center" justifyContent="center"><Schedule /></Stack>
        <Stack  height="auto" width="100%" alignItems="center" justifyContent="center"><Typography className="rubik" fontSize="2rem" textAlign="center" py={10} >See you at the event!</Typography></Stack>

      </Stack>
    </>
  );
}
