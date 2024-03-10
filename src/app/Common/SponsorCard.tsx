import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import { CardContent } from '@mui/material';

export default function SponsorCard() {
  return (
    <Card sx={{height:"400px"}}>
    <CardMedia
      component="img"
      height="200"
      image="https://via.placeholder.com/400x200"
      alt="Placeholder"
    />
    <CardContent>
      <Typography variant="h5" component="div">
        Title of the Card
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Some description or content of the card.
      </Typography>
    </CardContent>
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 16px' }}>
      <div>
        <IconButton aria-label="location">
          <LocationOnIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </div>
    </div>
  </Card>
  );
};
