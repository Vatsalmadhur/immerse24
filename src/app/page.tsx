"use client"
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import NavbarComponent from "./Navbar/navbar";
import { Button } from "@nextui-org/react";
import 'tailwindcss/tailwind.css'
import { Box, Stack, Typography } from "@mui/material";
import Immerse from "./immerse";
import ImmerseIcon from "./immerseIcon";
import { About } from "./About/about";
import { Heading } from "./Common/heading";
import Event from "./event/event";
import Schedule from "@/app/Schedule/Schedule";
import Footer from "./Footer/Footer";
import { Inter, Rubik } from "next/font/google";
import { DevfolioBtn } from "./Common/devfolioBtn";

// import '../globals.css'

export default function Home() {
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
          direction="column" alignItems="start" justifyContent="center">
          <Stack width="75vw"
            //  border="2px solid black"
            className="yellowBG"
            paddingY={5}
            paddingX={10}
            borderRadius={20}
            direction="row" alignItems="center" justifyContent="space-around" flexWrap="wrap-reverse">
            <Box
            sx={{
              // border:"2px solid blue",
              width:"500px"}}
            >
              <Typography width="auto" className="rubik" fontSize="5rem" lineHeight={1.1} pb={2}>Get ready to experience</Typography>
              <Immerse />
              <Typography fontSize="2.5rem" width="60%" className="rubik" pt={2}>The annual tech-fest of GDSC MMMUT</Typography>
              <div
                className="apply-button"
                data-hackathon-slug="gdscmmmut"
                data-button-theme="light"
                style={{ height: "44px", width: "312px " }}
              > </div>
            </Box>
            <Box width="500px" height="500px"
            //  sx={{ border:"2px solid blue"}}
            ><ImmerseIcon /></Box>
          </Stack>
        </Stack>
        <Heading title="About us" />
        <About />
        <Heading title="Events" />
        <Event />
        <Heading title="Timeline" />
        <Stack  height="auto" width="100%" alignItems="center" justifyContent="center"><Schedule /></Stack>
        <Stack  height="auto" width="100%" alignItems="center" justifyContent="center"><Typography className="rubik" fontSize="2rem" textAlign="center" py={10} >See you at the event!</Typography></Stack>

      </Stack>
    </>
  );
}
