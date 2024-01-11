import { Box } from '@mui/material';
import Carousel from './Carousel';
import Content from './Content/Content';
import JobTypeMenu from './JobTypeMenu';
import Services from './Services';

const Home = () => {
  return (
    <Box>
      <JobTypeMenu />
      <Carousel />
      <Services />
      <Content />
    </Box>
  );
};

export default Home;
