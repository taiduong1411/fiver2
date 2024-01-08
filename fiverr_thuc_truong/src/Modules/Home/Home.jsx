import { Box } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";
import JobTypeMenu from "./JobTypeMenu";

const Home = () => {
  return (
    <Box>
      <JobTypeMenu />
      <Carousel />
    </Box>
  );
};

export default Home;
