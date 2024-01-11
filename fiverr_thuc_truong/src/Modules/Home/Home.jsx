import { Box } from '@mui/material';
import Carousel from './Carousel';
import Content from './Content/Content';
import JobTypeMenu from './JobTypeMenu';
import MainCategory from './MainCategory/MainCategory';
import Services from './Services';

const Home = () => {
  return (
    <Box>
      <JobTypeMenu />
      <Carousel />
      <Services />
      <Content />
      <MainCategory />
    </Box>
  );
};

export default Home;
