import React from 'react';
import Spline from '@splinetool/react-spline';
import { Box } from '@mui/material';

export default function Immerse() {
  return (
    <Box sx={{position:"relative"}}>
    <Spline scene="https://prod.spline.design/AOL9cUSCQeJM3WLU/scene.splinecode" />
    </Box>
  );
}
