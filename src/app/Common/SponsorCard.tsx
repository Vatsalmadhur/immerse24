import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { CardContent } from '@mui/material';
import Link from 'next/link';


interface props{
  name:string,
  for:string,
  location:string,
  imgURL:string
}
export default function SponsorCard(Props:props) {
  return (
    <Card className='blueBrdr' sx={{height:"400px",border:"2px solid",width:"350px"}}>
    <CardMedia><img src={Props.imgURL} alt="" width={350} height={200} /></CardMedia>
    <CardContent sx={{textAlign:"center"}}>
      <Typography variant="h4" component="div" className='rubik'>
        {Props.name}
      </Typography>
      <Typography variant="body1" color="#4285f4" className='rubik'>
      {Props.for}
      </Typography>
    </CardContent>
    <div style={{ display: 'flex', justifyContent: 'center', padding: '0 16px'}}>
      <div>
          <Link href={Props.location}>
        <IconButton aria-label="location" >
          <LocationOnIcon sx={{width:"40px",height:"40px"}} />
        </IconButton>
          </Link>
    </div>
    </div>

  </Card>
  );
};
