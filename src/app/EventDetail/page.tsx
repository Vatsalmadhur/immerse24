import React from "react";
import Navigation from "../Common/Navigation";
import EventCard from "../Common/EventCard";
import { Box, Stack } from "@mui/material";
import { eventDetails } from "../Common/data";
export default function about(){
    return(
        <>
        <Stack justifyContent="center" alignItems="center">
        <Box sx={{marginBottom:{xs:"30px",sm:"0"}}}><Navigation name="Events" fontColor="white" bgColorClass="lgtGreenBG"/></Box>

        {eventDetails.map((item)=>(
            <EventCard data={item} />
        ))}


        </Stack>

        </>
    )

}