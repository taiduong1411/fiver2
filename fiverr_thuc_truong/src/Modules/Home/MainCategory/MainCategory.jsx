import { Box, Divider, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const icons = [
  'business.png',
  'graphics-design.png',
  'lifestyle.png',
  'music-audio.png',
  'online-marketing.png',
  'programming.png',
  'video-animation.png',
  'writing-translation.png',
];

const MainCategory = () => {
  return (
    <div className="container">
      <Typography variant="h4">Explore the marketplace</Typography>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={14}
        flexWrap={'wrap'}
        mt={8}
      >
        {icons.map((item, index) => (
          <Link
            key={index}
            to={'jobs/' + index}
            style={{ textDecoration: 'none', color: 'GrayText' }}
          >
            <Box textAlign={'center'}>
              <img src={'./Image/main-category/' + item} alt={item} />
              <Divider sx={{ scale: 0.5, ':hover': { scale: 1 } }} />
              <Typography>Graphics & Design</Typography>
            </Box>
          </Link>
        ))}
      </Box>
    </div>
  );
};

export default MainCategory;
