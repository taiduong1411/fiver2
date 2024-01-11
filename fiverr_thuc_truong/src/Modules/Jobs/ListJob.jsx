import { Box, Grid, Pagination, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { getJobByTypeDetails } from '../../API/jobAPI';
import Spinning from '../../Components/Client/Spinning/Spinning';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useHeaderStore } from '../../store/useHeaderStore';
import JobTypeMenu from '../Home/JobTypeMenu/JobTypeMenu';
import FilterBar from './Filter/FilterBar';
import JobCard from './JobCard/JobCard';

function ListJob() {
  const media = useMediaQuery('(min-width: 768px)');
  const { sticky, setSticky, searchQuery } = useHeaderStore();
  if (!sticky) {
    setSticky();
  }
  let { id } = useParams();

  const { isLoading, data: jobItems = [] } = useQuery({
    queryKey: ['jobs', id],
    queryFn: () => getJobByTypeDetails(id),
  });
  if (isLoading) {
    return <Spinning />;
  }

  return (
    <>
      {media && <JobTypeMenu fixed={false} />}

      <Box sx={{ mt: 15, mx: 5 }}>
        {searchQuery && (
          <Typography variant="h4" my={5}>
            Results for {searchQuery}
          </Typography>
        )}
        <FilterBar />
        <Typography variant="subtitle1" my={5}>
          {jobItems.length} services available
        </Typography>
        <Grid container spacing={3}>
          {!isLoading &&
            jobItems.map((item) => (
              <Grid key={item.id} item xs={12} md={3}>
                <Link to={''} style={{ textDecoration: 'none' }}>
                  <JobCard congViec={item.congViec} />
                </Link>
              </Grid>
            ))}
        </Grid>
        <Box width={'100%'} my={10} display={'flex'} justifyContent={'center'}>
          <Pagination count={5} />
        </Box>
      </Box>
    </>
  );
}

export default ListJob;
