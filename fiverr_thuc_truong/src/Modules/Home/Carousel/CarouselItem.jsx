import { Box, Button, InputBase, Typography } from '@mui/material';
import React from 'react';
import { useMediaQuery } from '../../../hooks/useMediaQuery';

const CarouselItem = () => {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <Box
      position={'absolute'}
      top={'20%'}
      maxWidth={!matches ? 400 : 620}
      p={3}
    >
      <Typography
        variant={!matches ? 'h5' : 'h3'}
        flexWrap={'wrap'}
        color={'white'}
      >
        Find the perfect freelance services for your business
      </Typography>

      <form
        style={{
          marginTop: 30,
          marginBottom: 30,
          height: 40,
          minWidth: 500,
        }}
        className="flex"
        role="search"
      >
        <InputBase
          id="outlined-basic"
          sx={{
            bgcolor: 'white',
            height: '100%',
            width: !matches ? '40%' : '80%',
            p: 1.5,
          }}
        />

        <Button
          variant="contained"
          color="success"
          sx={{ height: '100%', borderRadius: '0' }}
          type="submit"
        >
          Search
        </Button>
      </form>

      <Box
        display={'flex'}
        color={'white'}
        alignItems={'center'}
        flexDirection={!matches ? 'column' : 'row'}
        gap={1}
      >
        <span>Popular: </span>
        <Button
          p={1}
          variant="outlined"
          sx={{
            color: 'white',
            fontSize: '14px',
            textTransform: 'capitalize',
            border: 'solid 1px white',
            ':hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          }}
          autoCapitalize
        >
          Website Design
        </Button>
        <Button
          p={1}
          variant="outlined"
          sx={{
            color: 'white',
            fontSize: '14px',
            textTransform: 'capitalize',
            border: 'solid 1px white',
            ':hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          }}
          autoCapitalize
        >
          WordPress
        </Button>
        <Button
          p={1}
          variant="outlined"
          sx={{
            color: 'white',
            fontSize: '14px',
            textTransform: 'capitalize',
            border: 'solid 1px white',
            ':hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          }}
          autoCapitalize
        >
          Logo Design
        </Button>
        <Button
          p={1}
          variant="outlined"
          sx={{
            color: 'white',
            fontSize: '14px',
            textTransform: 'capitalize',
            border: 'solid 1px white',
            ':hover': {
              backgroundColor: 'white',
              color: 'black',
            },
          }}
          autoCapitalize
        >
          Video Editing
        </Button>
      </Box>
    </Box>
  );
};

export default CarouselItem;
