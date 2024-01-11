import { Box, useMediaQuery } from '@mui/material';
import Carousel from './Carousel';
import Content from './Content/Content';
import JobTypeMenu from './JobTypeMenu';
import MainCategory from './MainCategory/MainCategory';
import Services from './Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
  const media = useMediaQuery('(min-width: 768px)');
  return (
    <Box>
      {media && <JobTypeMenu />}
      <Carousel />
      <Services />
      <Content />
      <Testimonial />
      <MainCategory />
    </Box>
  );
};

export default Home;
