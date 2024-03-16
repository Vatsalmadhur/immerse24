import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CodeIcon from '@mui/icons-material/Code';
import { Box, Link } from '@mui/material';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function registerBtn() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}

      >
        Register
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple >
          <Link href='https://forms.gle/PjQNaMomvQxvodYQ9'>
        <CodeIcon/>
          Web dev workshop
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
        <Link href='https://forms.gle/9Bfb6uoYrhqffuALA'>
        <CodeIcon/>
          UI/UX workshop(only MMMUT)
          </Link>
        </MenuItem>
        {/* <Divider sx={{ my: 0.5 }} /> */}
        <MenuItem onClick={handleClose} disableRipple>
          <Link href='https://forms.gle/7ZemnVx5MraauyKB7'>
          <CodeIcon/>
          HackBlitz
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
        <CodeIcon/>
          AI/ML Speaker Session
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <Link href='https://docs.google.com/forms/d/e/1FAIpQLScIu5ytpikTJyoJwZ9oF8O6l-Qjtl2UH38E_Qm7KQtCALTyBQ/viewform'>
        <CodeIcon/>
          Project Exhibition
          </Link>
        </MenuItem> <MenuItem onClick={handleClose} disableRipple>
        <CodeIcon/>
         Informls(only MMMUT)
        </MenuItem> <MenuItem onClick={handleClose} disableRipple>
        <CodeIcon/>
         Workshop by Skillmafia
        </MenuItem>
      </StyledMenu>
    </Box>
  );
}