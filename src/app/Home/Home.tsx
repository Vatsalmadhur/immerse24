import React from 'react'
import { Stack,Box,Typography,useMediaQuery,useTheme} from '@mui/material'
import ImmerseLogo from '../Common/immerseLogo'
import ImmerseLogoPhone from '../Common/immerseLogoPhone'
import ImmerseText from "../Common/immerseText";
import ImmerseTextPhone from '../Common/immerseTextPhone'
import RegisterBtn from '../Common/RegisterBtn';
const Home = () => {
    const theme=useTheme()
  const screenSize=useMediaQuery('(min-width:600px)')
  return (
    <Stack width="75vw" minHeight="90vh" height="auto"
          //  border="2px solid green"
          direction="column" alignItems="center" justifyContent="center">
          <Stack width={{xs:"95vw",sm:"75vw"}}
             border="2px solid black"
            className="yellowBG"
            paddingY={{xs:4,sm:5}}
            paddingX={{xl:10,lg:6,xs:2}}
            borderRadius={{xs:10,sm:20}}
            direction="row" alignItems="center" justifyContent={{xs:'center',sm:"space-evenly"}} flexWrap="wrap-reverse">
            <Box
            sx={{
              // border:"2px solid blue",
              // minWidth:"500px",
              width:{xs:'100%',sm:"60vw",lg:"30vw"}}}
            >
              <Typography width="auto" className="rubik" fontSize={{xs:'4rem',sm:"3rem",lg:'4rem',xl:"4rem"}} lineHeight={1.1} pb={2}>Embark on a thrilling Tech-Odyssey  at</Typography>
              <Box> {screenSize ? <ImmerseText/> : <ImmerseTextPhone/>} </Box>
              <Typography fontSize="2rem" width="auto" className="rubik" pt={2}>GDSC MMMUT's annual tech extravaganza!</Typography>
            <RegisterBtn/>
            </Box>
            <Box
             sx={{
              // border:"2px solid blue",
              display:{sm:'block'}}}
            > {screenSize ? <ImmerseLogo/> : <ImmerseLogoPhone/>} </Box>
          </Stack>
        </Stack>
  )
}

export default Home