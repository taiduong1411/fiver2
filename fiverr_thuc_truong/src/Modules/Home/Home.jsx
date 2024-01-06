import { Box } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";
import HeaderBottom from "./HeaderBottom";

const Home = () => {
  return (
    <Box>
      <HeaderBottom />
      <Carousel />
    </Box>
  );
};

export default Home;
