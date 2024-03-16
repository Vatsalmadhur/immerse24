import {
  Box,
  Stack,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

interface props {
  imgURL: string;
  content: string;
  linkTo: string;
  eventName:string
}


const EventCard = ({data}:{data:props})=> {
  return (
    <Stack minHeight="360px" alignItems="center" justifyContent="end" my={5}>
      <Box
        className="lgtGreenBG"
        sx={{
          width: { xl: "60vw", lg: "70vw", md: "80vw", sm: "90vw", xs: "90vw" },
          height: "auto",
          borderRadius: "10px",
          display: "flex",
          direction: "row",
          justifyContent: "space-around ",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <CardMedia
          image={data.imgURL}
          sx={{
            height: { xs: "250px", md: "300px" },
            width: { xs: "250px", md: "300px" },
            border: "2px solid",
            position: "relative",
            bottom: { xs: "50px", sm: "100px", md: "50px" },
            borderRadius: "10px",
          }}
          className="greenBrdr"
        ></CardMedia>
        <CardContent
          sx={{
            width: { xs: "90vw", sm: "40vw" },
            minWidth: "300px",
            height: "auto",
          }}
        >
          <Typography color="white">{data.content}</Typography>
          {/* <Link href={`/eventdetail/${data.eventName}`}>
            {" "}
            <Button
              variant="contained"
              size="medium"
              color="primary"
              sx={{ mt: "10px" }}
            >
              Details
              <Box sx={{ height: "26px" }}>
                <KeyboardDoubleArrowRightIcon />
              </Box>
            </Button>
          </Link> */}
        </CardContent>
      </Box>
    </Stack>
  );
};

export default EventCard;
