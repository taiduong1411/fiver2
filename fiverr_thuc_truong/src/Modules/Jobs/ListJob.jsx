import { Box, Grid } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import { getJobByTypeDetails } from '../../API/jobAPI';
import Spinning from '../../Components/Client/Spinning/Spinning';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import JobTypeMenu from '../Home/JobTypeMenu/JobTypeMenu';
import FilterBar from './Filter/FilterBar';
import JobCard from './JobCard/JobCard';

function ListJob() {
  const media = useMediaQuery('(min-width: 768px)');

  const header = document.querySelector('.header-section');
  header.classList.add('is-sticky');

  let { id } = useParams();

  const { isLoading, data: jobItems = [] } = useQuery({
    queryKey: ['job-details', id],
    queryFn: () => getJobByTypeDetails(id),
  });

  if (isLoading) {
    return <Spinning />;
  }

  return (
    <>
      {media && <JobTypeMenu />}

      <Box sx={{ mt: 25, mx: 5 }}>
        <FilterBar />

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
      </Box>
    </>
  );
}

export default ListJob;
