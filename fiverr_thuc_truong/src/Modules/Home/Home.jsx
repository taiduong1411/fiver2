import { Box } from '@mui/material';
import Carousel from './Carousel';
import Content from './Content/Content';
import JobTypeMenu from './JobTypeMenu';
import MainCategory from './MainCategory/MainCategory';
import Services from './Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
  return (
    <Box>
      <JobTypeMenu />
      <Carousel />
      <Services />
      <Content />
      <Testimonial />
      <MainCategory />
    </Box>
  );
};

export default Home;
