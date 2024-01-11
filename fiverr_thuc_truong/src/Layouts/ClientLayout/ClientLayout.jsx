import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import HeaderClient from "../../Components/Client/HeaderClient";
import FooterClient from "../../Components/Client/FooterClient";

const ClientLayout = () => {
  return (
    <Box>
      <HeaderClient />
      <Outlet />
      {/* <FooterClient /> */}
    </Box>
  );
};

export default ClientLayout;
