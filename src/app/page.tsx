"use client"
import Image from "next/image";
import styles from "./page.module.css";
import NavbarComponent from "./Navbar/navbar";
import { Button } from "@nextui-org/react";
import 'tailwindcss/tailwind.css'
import { Box, Stack, Typography } from "@mui/material";
import Immerse from "./immerse";
import ImmerseIcon from "./immerseIcon";
import { About } from "./About/about";

// import '../globals.css'

export default function Home() {
  return (
    <>
      <Stack width="75vw" border="2px solid red" direction="column" alignItems="start">
        <Stack width="75vw" height="90vh" border="2px solid green" direction="column" alignItems="start" justifyContent="center">
          <Stack width="75vw" border="2px solid blue" direction="row" alignItems="start" justifyContent="center">
            <Box>
            <Typography variant="h1" width="50%"  >Get ready to experience</Typography>
            <Immerse />
            <Typography variant="h3" width="50%">The annual technical event by-GDSC MMMUT</Typography>
            </Box>
            <Box width="500px" height="500px"><ImmerseIcon/></Box>
          </Stack>

        </Stack>
        <About/>
      </Stack>

    </>
  );
}
