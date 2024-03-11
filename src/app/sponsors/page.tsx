import React from 'react'
import Navigation from '../Common/Navigation'
import SponsorCard from '../Common/SponsorCard'
import { Stack } from '@mui/material'
import { sponsorData } from '../Common/data'
const Sponsors = () => {
  return (
    <>
    <Stack   alignItems="center" width="70vw" >
    <Navigation name="Sponsors" fontColor='white' bgColorClass='blueBG' />
    <Stack
    //  border="2px solid red"
     mt="20px" direction="row" gap="20px" justifyContent="center" alignItems="center" minHeight='60vh' height="auto" pb={10} flexWrap="wrap">
      {sponsorData.map((data)=>(
        <SponsorCard name={data.name} for={data.for} location={data.location} imgURL={data.imgURL}  />
      ))}

    </Stack>

    </Stack>
    </>
  )
}

export default Sponsors