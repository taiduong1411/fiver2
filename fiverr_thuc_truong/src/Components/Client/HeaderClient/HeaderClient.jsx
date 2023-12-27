// // import * as React from "react";
// // import {
// //   AppBar,
// //   Box,
// //   Toolbar,
// //   IconButton,
// //   Typography,
// //   Menu,
// //   Container,
// //   Avatar,
// //   Button,
// //   Tooltip,
// //   MenuItem,
// //   Stack,
// // } from "@mui/material";

// // import AdbIcon from "@mui/icons-material/Adb";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import { useNavigate } from "react-router-dom";
// // // import logoFiverr from "./Image/logo0-fiverr.jpg";

// // const pages = ["Products", "Pricing", "Blog"];
// // const settings = ["Profile", "Account", "Dashboard", "Logout"];

// // const navigate = useNavigate();

// // const HeaderClient = () => {
// //   const [anchorElNav, setAnchorElNav] = React.useState(null);
// //   const [anchorElUser, setAnchorElUser] = React.useState(null);
// //   const handleOpenNavMenu = (event) => {
// //     setAnchorElNav(event.currentTarget);
// //   };
// //   const handleOpenUserMenu = (event) => {
// //     setAnchorElUser(event.currentTarget);
// //   };

// //   const handleCloseNavMenu = () => {
// //     setAnchorElNav(null);
// //   };

// //   const handleCloseUserMenu = () => {
// //     setAnchorElUser(null);
// //   };
// //   return (
// //     <Box>
// //       <AppBar position="static">
// //         <Container maxWidth="xl">
// //           <Toolbar disableGutters>
// //             <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
// //             {/* LOGO */}
// //             <Typography
// //               variant="h6"
// //               noWrap
// //               component="a"
// //               href="#app-bar-with-responsive-menu"
// //               sx={{
// //                 mr: 2,
// //                 display: { xs: "none", md: "flex" },
// //                 fontFamily: "monospace",
// //                 fontWeight: 700,
// //                 letterSpacing: ".3rem",
// //                 color: "inherit",
// //                 textDecoration: "none",
// //               }}
// //             >
// //               LOGO
// //             </Typography>
// //             {/* Menu Mobile */}
// //             <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
// //               <IconButton
// //                 size="large"
// //                 aria-label="account of current user"
// //                 aria-controls="menu-appbar"
// //                 aria-haspopup="true"
// //                 onClick={handleOpenNavMenu}
// //                 color="inherit"
// //               >
// //                 <MenuIcon />
// //               </IconButton>
// //               <Menu
// //                 id="menu-appbar"
// //                 anchorEl={anchorElNav}
// //                 anchorOrigin={{
// //                   vertical: "bottom",
// //                   horizontal: "left",
// //                 }}
// //                 keepMounted
// //                 transformOrigin={{
// //                   vertical: "top",
// //                   horizontal: "left",
// //                 }}
// //                 open={Boolean(anchorElNav)}
// //                 onClose={handleCloseNavMenu}
// //                 sx={{
// //                   display: { xs: "block", md: "none" },
// //                 }}
// //               >
// //                 {pages.map((page) => (
// //                   <MenuItem key={page} onClick={handleCloseNavMenu}>
// //                     <Typography textAlign="center">{page}</Typography>
// //                   </MenuItem>
// //                 ))}
// //               </Menu>
// //             </Box>

// //             <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

// //             {/* LOGO MOBILE */}
// //             <Typography
// //               variant="h5"
// //               noWrap
// //               component="a"
// //               href="#app-bar-with-responsive-menu"
// //               sx={{
// //                 mr: 2,
// //                 display: { xs: "flex", md: "none" },
// //                 flexGrow: 1,
// //                 fontFamily: "monospace",
// //                 fontWeight: 700,
// //                 letterSpacing: ".3rem",
// //                 color: "inherit",
// //                 textDecoration: "none",
// //               }}
// //             >
// //               LOGO
// //             </Typography>

// //             {/* MENU CLIENT */}
// //             <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
// //               {pages.map((page) => (
// //                 <Button
// //                   key={page}
// //                   onClick={handleCloseNavMenu}
// //                   sx={{ my: 2, color: "white", display: "block" }}
// //                 >
// //                   {page}
// //                 </Button>
// //               ))}
// //             </Box>

// //             {/* OPEN SETTING */}
// //             <Box sx={{ flexGrow: 0 }}>
// //               <Tooltip title="Open settings">
// //                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
// //                   <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
// //                 </IconButton>
// //               </Tooltip>
// //               <Menu
// //                 sx={{ mt: "45px" }}
// //                 id="menu-appbar"
// //                 anchorEl={anchorElUser}
// //                 anchorOrigin={{
// //                   vertical: "top",
// //                   horizontal: "right",
// //                 }}
// //                 keepMounted
// //                 transformOrigin={{
// //                   vertical: "top",
// //                   horizontal: "right",
// //                 }}
// //                 open={Boolean(anchorElUser)}
// //                 onClose={handleCloseUserMenu}
// //               >
// //                 {settings.map((setting) => (
// //                   <MenuItem key={setting} onClick={handleCloseUserMenu}>
// //                     <Typography textAlign="center">{setting}</Typography>
// //                   </MenuItem>
// //                 ))}
// //               </Menu>
// //             </Box>
// //           </Toolbar>
// //         </Container>
// //       </AppBar>
// //     </Box>
// //   );
// // };

// // export default HeaderClient;
// import { Button, Stack } from "@mui/material";
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { PATH } from "../../../Routes/path";

// const navigate = useNavigate();

// const HeaderClient = () => {
//   return (
//     <div>
//       <Stack spacing={1} direction={"row"}>
//         <Button
//           variant="outlined"
//           onClick={() => {
//             navigate(PATH.SIGNUP);
//           }}
//         >
//           Sign Up
//         </Button>
//         <Button
//           variant="contained"
//           onClick={() => {
//             navigate(PATH.SIGNIN);
//           }}
//         >
//           Sign In
//         </Button>
//       </Stack>
//     </div>
//   );
// };

// export default HeaderClient;
import React from "react";

const HeaderClient = () => {
  return <div>HeaderClient</div>;
};

export default HeaderClient;
