import React from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <Box>
          <img className="img-carousel" src="./Image/1.png" alt="..." />
        </Box>
        <Box>
          <img src="./Image/2.png" alt="..." />
        </Box>
        <Box>
          <img src="./Image/3.png" alt="..." />
        </Box>
        <Box>
          <img src="./Image/4.png" alt="..." />
        </Box>
        <Box>
          <img src="./Image/5.png" alt="..." />
        </Box>
        <Box>
          <img src="./Image/6.png" alt="..." />
        </Box>
      </Slider>
    </Box>
  );
};

export default Carousel;
