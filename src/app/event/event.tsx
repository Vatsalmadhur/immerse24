import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Heading } from '../Common/heading';
import { Stack,Box, useMediaQuery, Button } from '@mui/material';
import Link from 'next/link';
import { adjustedData } from '../Common/data';


export default function  Events() {
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border:"2px solid",
    borderRadius:"15px"
    // width:"200px",
    // height:"200px"
  }));
  const matches=useMediaQuery('(max-width:600px)');

  return (
    <>
    <Stack width="100%" height="auto" alignItems="center" marginY={5}
    //  border= "2px solid red"
     >
    <Heading title="Events" />
    <Stack width={{xl:"32vw",lg:"50vw",sm:"100% "}} height="auto"
    //  border= "2px solid red"
      >
    <Grid container rowSpacing={2} columnSpacing={0}>
      {adjustedData.map((item, index) => (
        <Grid container xs={matches?12:4} key={index} style={!item.show ? { width: 0,
         height: 0,
         overflow: 'hidden', padding: 0 } : {}}justifyContent="center"  >

          <Box  width="200px" height="200px" display="flex" alignItems="center" justifyContent="center">
          {item.show && (
            <Item style={{ backgroundImage: `url(${item.image})`,
            width: index==0 || index==8 ? 100:200,
            height: index==0 || index==8 ? 100:200,
            }} className='greenBrdr'>
              <Box  width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
              {index==4 ? <Link href='/eventdetail'><Button variant='outlined'>View all events</Button></Link> :""}
              </Box>

            </Item>

          )}
          </Box>
        </Grid>
      ))}
    </Grid>
    </Stack>

    </Stack>
    </>
  );
}

