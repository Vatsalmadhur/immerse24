import React from "react";
import Navigation from "../Common/Navigation";
import EventCard from "../Common/EventCard";
import { Box, Stack } from "@mui/material";
export default function about(){
    return(
        <>
        <Stack justifyContent="center" alignItems="center">
        <Box sx={{marginBottom:{xs:"30px",sm:"0"}}}><Navigation name="Events"/></Box>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
        <EventCard/>


        </Stack>

        </>
    )

}