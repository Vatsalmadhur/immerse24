"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';


const drawerWidth = 240;
const navItems = [{ name: "Events", route: "/eventdetail" }, { name: "Sponsors", route: "/sponsors" }, { name: "Contact Us", route: "/contact" }];


export default function DrawerAppBar() {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };


  const drawer = (
    <Box className="yellowBG" onClick={handleDrawerToggle}  sx={{ textAlign: 'center',height:"100vh" }}>
      <Box sx={{paddingY:2}}><Link href='/'><img src="./logo2.png" alt="iMMERSE" width="200px" height="auto" /></Link></Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <Link href={item.route}> <Typography variant='h6' color='black' className='rubik' sx={{textDecoration:"none"}}> {item.name}</Typography></Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box sx={{ display: 'flex', alignItems: "center" }}>
      <CssBaseline />
      <AppBar component="nav" className='yellowBG' sx={{ display: 'flex', alignItems: "center" }}  >
        <Toolbar sx={{ width: { xs: "100vw", md: "75vw" }, display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
          <Link href='/'><img src="./logo2.png" alt="iMMERSE" width="200px" height="auto" /></Link>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Link href={item.route}>
                <Button >
                  <Typography className='rubik' color="#000" fontSize="1.1rem">{item.name}</Typography>
                </Button>
              </Link>
            ))}
          </Box>
          <IconButton
            // color="#000"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: 'none' },
              color:'black'
              // position:"absolute",right:"0",top:"10px"
            }}
          >
            <MenuIcon />
          </IconButton>



        </Toolbar>

      </AppBar>
      <nav>
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}