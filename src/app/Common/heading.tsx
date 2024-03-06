import React from 'react'
import { Box, Typography } from '@mui/material'
import '../globals.css'

interface Props{
title:String
}
export const Heading = (props:Props) => {
  return (
    <Box width="100%" display="flex" alignItems="center" paddingY="20px">
    <Box className="blueBrdr" width="auto" minWidth="250px" height="75px"  borderRight="5px solid " borderLeft="5px solid " display="flex" alignItems="center" justifyContent="start"><Typography variant='h3'>{props.title}</Typography></Box>
    <Box className="blueBrdr" width="70%"   borderBottom="3px solid " ></Box>
    <Box className="redBrdr" width="150px"   borderBottom="3px solid" ></Box>
    <Box className="greenBrdr" width="100px"   borderBottom="3px solid" ></Box>
    <Box className="yellowBrdr" width="75px"   borderBottom="3px solid" ></Box>
</Box>
  )
}
