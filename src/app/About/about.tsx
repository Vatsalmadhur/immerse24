import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Heading } from '../Common/heading'

export const About = () => {
  return (
   <Stack width="100%" height="auto" alignItems="center" marginY={5} >
        <Heading title="About" />
    <Typography variant='h6'>
    GDSC is a Google Developers program for university students, designed to help them build their mobile and web development skills and knowledge. It is open to any student, ranging from novice developers who are just starting, to advanced developers who want to further their skills. It is intended to be a space for students to learn and collaborate as they solve mobile and web development problems.
Google Developer Student Clubs (DSC) are community groups for students from any academic background in their undergraduate or graduate term. By joining a DSC, students build their professional and personal networks, get access to Google developer resources, and work together to build solutions for local problems in a peer-to-peer learning environment.
</Typography>
<Typography variant='h6' pt={2}>
      Dive into the pulse-pounding excitement at IMMERSE : Where tech dreams become reality! 🌟 Brace yourself for a mind-bending journey through the cutting-edge, the extraordinary, and the downright awesome. Get ready to ride the wave of innovation, unleash your creativity, and make waves that'll ripple through eternity. Join us at Immerse and make your mark on the future!</Typography>
   </Stack>
  )
}
