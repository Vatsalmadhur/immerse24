import { Stack, Typography } from '@mui/material'
import React from 'react'

interface props{
    name:string,
    bgColorClass:string,
    fontColor:string
}

const Navigation = (Props:props) => {
  return (
    <>
    <Stack alignItems="center" justifyContent="center" border="2px soid black" className={Props.bgColorClass} width={{xs:"250px",sm:"40vw"}} height={{xs:"80px",sm:"100px"}}borderRadius="40px" mt="50px">
        <Typography color={Props.fontColor}  fontSize={{xs:"2.5rem",sm:"4rem"}} className='rubik'>{Props.name}</Typography>
    </Stack>
    </>
  )
}

export default Navigation