import { Box } from "@mui/material";
import React from "react";
import Carousel from "./Carousel";
import JobTypeMenu from "./JobTypeMenu";
import Services from "./Services";

const Home = () => {
  return (
    <Box>
      <JobTypeMenu />
      <Carousel />
      <Services />
    </Box>
  );
};

export default Home;
