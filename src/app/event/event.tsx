import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme, width, height }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#faa500',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  width: `${width}px`, 
  height: `${height}px`, 
  margin: '0 auto',
}));

export default function Events() {
  return (
    <Grid container spacing={0}>
      {[...Array(9)].map((_, index) => {
        // Customize sizes for the first and last items
        let size = { width: 100, height: 100 }; // Default size
        if (index === 0) {
          size = { width: 100, height: 100 }; // First item size
        } else if (index === 1 || index === 3 || index === 5 || index === 7) {
          size = { width: 200, height: 200 }; // Last item size
        }

        return (
          <Grid item xs={4} key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
            <Item {...size}>  </Item>
          </Grid>
        );
      })}
    </Grid>
  );
}

