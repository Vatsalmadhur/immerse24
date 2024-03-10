"use client"
import React from "react";
import 'tailwindcss/tailwind.css'
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { About } from "./About/about";
import Event from "./event/event";
import Schedule from "@/app/Schedule/Schedule";
import Home from "./Home/Home";

export default function App() {

  return (
    <>
      <Stack width="75vw"
        //  border="2px solid red"
        direction="column" alignItems="start">
        <Home/>
        <About />
        <Event />
        <Stack  height="auto" width="100%" alignItems="center" justifyContent="center"><Schedule /></Stack>
        <Stack  height="auto" width="100%" alignItems="center" justifyContent="center"><Typography className="rubik" fontSize="2rem" textAlign="center" py={10} >See you at the event!</Typography></Stack>

      </Stack>
    </>
  );
}
