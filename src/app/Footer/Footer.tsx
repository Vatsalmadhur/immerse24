import React from 'react';
import { Container, Typography, IconButton, Stack, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FC = () => {
  const footerStyle: React.CSSProperties = {
    backgroundColor: '#f4f4f4',
    padding: '24px 0',
    marginTop: 'auto',
  };

  return (
    <footer style={footerStyle}>
      <Container maxWidth="lg">
        <Stack direction="column" spacing={2} justifyContent="center" alignItems="center">
          <Stack spacing={1} justifyContent="center" alignItems="center">
            <img src="/logo2.png" alt="" width="250px" />
            <Typography fontSize="1.5rem" color="textSecondary">
              Google Developer Student Club-MMMUT
            </Typography>
          </Stack>
          <Stack spacing={1} direction="row" alignItems="center">
            {/* <Typography variant="h6" color="primary">
              Social Links
            </Typography> */}
            <Stack direction="row" spacing={1}>
              <IconButton href="https://www.facebook.com/gdscmmmut" target='blank'  color="inherit">
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://twitter.com/dscmmmut" target='blank'  color="inherit">
                <TwitterIcon />
              </IconButton>
              <IconButton href="https://in.linkedin.com/company/dscmmmut" target='blank'  color="inherit">
                <LinkedInIcon />
              </IconButton>
              <IconButton href="https://www.instagram.com/gdscmmmut/" target='blank' color="inherit">
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
        <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '16px' }}>
          {'© '}
          {new Date().getFullYear()}
          {' iMMERSE. All rights reserved.'}
        </Typography>
        <Typography align='center' >Made with ❤️ by <Link href="https://github.com/Vatsalmadhur">developerVatsal</Link></Typography>
      </Container>
    </footer>
  );
};

export default Footer;
