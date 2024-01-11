import { Favorite } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import { Avatar, Box, Divider, Grid, IconButton } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getJobByTypeDetails } from '../../API/jobAPI';
import FilterBar from './Filter/FilterBar';

function ListJob() {
  let { id } = useParams();

  const {
    isLoading,
    error,
    data: jobItems = [],
  } = useQuery({
    queryKey: ['job-details', id],
    queryFn: () => getJobByTypeDetails(id),
  });

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <Box sx={{ mt: 20, mx: 10 }}>
      <FilterBar />

      <Grid container spacing={3}>
        {!isLoading &&
          jobItems.map((item) => (
            <Grid key={item.id} item xs={12} md={3}>
              <Card sx={{ flexGrow: 1 }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image={item.congViec.hinhAnh}
                  title="green iguana"
                />
                <CardContent>
                  <Box
                    display={'flex'}
                    justifyContent={'left'}
                    alignItems={'center'}
                    gap={2}
                  >
                    <Box>
                      <Avatar
                        alt={item.congViec.nguoiTao}
                        src={item.congViec.hinhAnh}
                      />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" component="div">
                        {item.congViec.nguoiTao}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography variant="body2" color="text.secondary">
                    {item.congViec.tenCongViec}
                  </Typography>

                  <Box display={'flex'}>
                    <StarIcon style={{ color: '#ffbe5b' }} />
                    <Typography>
                      <span style={{ color: '#ffbe5b', fontWeight: 'bold' }}>
                        {item.congViec.saoCongViec}
                      </span>
                      <span> ({item.congViec.danhGia})</span>
                    </Typography>
                  </Box>
                </CardContent>
                <Divider />
                <CardActions
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <IconButton
                    aria-label="add to favorites"
                    sx={{ ':hover': { color: 'red ' } }}
                  >
                    <Favorite />
                  </IconButton>
                  <Box display={'inline-block'}>
                    <Typography variant="body1">
                      Starting At
                      <strong> US${item.congViec.giaTien}</strong>
                    </Typography>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default ListJob;
