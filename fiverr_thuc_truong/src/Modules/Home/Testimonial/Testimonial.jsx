import { Box, Grid, Typography } from '@mui/material';
import Slider from 'react-slick';

const Testimonial = () => {
  const CustomNextArrow = (props) => (
    <div {...props} style={{ ...props.style, display: 'block' }} />
  );

  // Component nút chuyển lại tùy chỉnh
  const CustomPrevArrow = (props) => (
    <div {...props} style={{ ...props.style, display: 'block' }} />
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <img
                width={500}
                src="https://demo5.cybersoft.edu.vn/img/testimonial1.png"
                alt=""
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h5">
                Kay Kim, Co-Founder | <strong>rooted</strong>
              </Typography>
              <Typography variant="body1" fontSize={'28px'} sx={{ mt: 3 }}>
                <i>
                  "It's extremely exciting that Fiverr has freelancers from all
                  over the world — it broadens the talent pool. One of the best
                  things about Fiverr is that while we're sleeping, someone's
                  working."
                </i>
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <img
                width={500}
                src="https://demo5.cybersoft.edu.vn/img/testimonial1.png"
                alt=""
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <Typography variant="h5">
                Kay Kim, Co-Founder | <strong>rooted</strong>
              </Typography>
              <Typography variant="body1" fontSize={'28px'} sx={{ mt: 3 }}>
                <i>
                  "It's extremely exciting that Fiverr has freelancers from all
                  over the world — it broadens the talent pool. One of the best
                  things about Fiverr is that while we're sleeping, someone's
                  working."
                </i>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Slider>
    </div>
  );
};

export default Testimonial;
