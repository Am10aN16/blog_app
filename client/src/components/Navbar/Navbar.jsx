// import * as React from "react";
// import {
//   AppBar,
//   Typography,
//   Box,
//   Toolbar,
//   IconButton,
//   Container,
//   MenuItem,
//   Avatar,
//   Tooltip,
//   Drawer,
//   List,
// } from "@mui/material";
// import AdbIcon from "@mui/icons-material/Adb";
// import NavPage from "../NavPage";
// import Logo from "../../assets/logo.png"

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// const ResponsiveAppBar = () => {
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const [state, setState] = React.useState({
//     right: false,
//   });

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {settings.map((setting) => (
//           <MenuItem key={setting} onClick={handleCloseUserMenu}>
//             <Typography textAlign="center">{setting}</Typography>
//           </MenuItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar
//           disableGutters
//           sx={{ display: "flex", justifyContent: "space-between !important" }}
//         >
//           {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
//           <img src={Logo} alt="" srcset="" style={{width:"80px" , height:"60px"}} />

//           <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

//           <NavPage />

//           <div>
//             {["right"].map((anchor) => (
//               <React.Fragment key={anchor}>
//                 <Tooltip title="Open settings">
//                   <IconButton
//                     onClick={toggleDrawer(anchor, true)}
//                     sx={{ p: 0 }}
//                   >
//                     <Avatar
//                       alt="Remy Sharp"
//                       src="/static/images/avatar/2.jpg"
//                     />
//                   </IconButton>
//                 </Tooltip>

//                 <Drawer
//                   anchor={anchor}
//                   open={state[anchor]}
//                   onClose={toggleDrawer(anchor, false)}
//                 >
//                   {list(anchor)}
//                 </Drawer>
//               </React.Fragment>
//             ))}
//           </div>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default ResponsiveAppBar;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
         

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

