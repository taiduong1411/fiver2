import { Search as SearchIcon } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Avatar,
  Box,
  Button,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getListJobByName } from '../../../API/jobAPI';
import { useAuth } from '../../../Contexts/useContext/useContext';
import { PATH } from '../../../Routes/path';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from '../SearchBar/SearchBar';

const HeaderClient = () => {
  const [search, setSearch] = useState('');

  const { isLoading, data: jobs = [] } = useQuery({
    queryKey: ['jobs', search],
    queryFn: () => getListJobByName(search),
  });
  const handleSearch = (e) => setSearch(e.target.value);
  const navigate = useNavigate();

  const handleAfterSearch = () => {
    setSearch('');
  };

  const { currentUser, handleLogOut } = useAuth();
  console.log('currentUser: ', currentUser);
  return (
    <Box className="header-container" sx={{ flexGrow: 1 }}>
      <Toolbar className="header-toolbar">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ display: { xs: 'none', sm: 'block' } }}
          onClick={() => {
            navigate(PATH.HOME);
          }}
        >
          <img
            src="./Image/logoFiverr.jpg"
            alt=""
            style={{ width: 100, cursor: 'pointer' }}
          />
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            value={search || ''}
            onChange={handleSearch}
            inputProps={{ 'aria-label': 'search' }}
          />

          <Box position={'absolute'} minWidth={400} bgcolor={'white'}>
            {isLoading ? (
              <p>Loading</p>
            ) : (
              jobs.map((job) => (
                <Link
                  key={job.id}
                  to={'jobs/' + job.id}
                  onClick={handleAfterSearch}
                  style={{ textDecoration: 'none' }}
                >
                  <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                      <Avatar alt="Remy Sharp" src={job.congViec.hinhAnh} />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Brunch this weekend?"
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {job.congViec.tenCongViec}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </Link>
              ))
            )}
          </Box>
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        {currentUser ? (
          <Stack
            spacing={2}
            direction={'row'}
            textAlign={'center'}
            alignItems={'center'}
          >
            <Typography>{currentUser.user.name}</Typography>
            <Button
              size="large"
              variant="text"
              onClick={() => {
                handleLogOut();
                // navigate(PATH.SIGNIN);
              }}
            >
              LOG OUT
            </Button>
          </Stack>
        ) : (
          <Stack spacing={1} direction={'row'}>
            <Button
              variant="outlined"
              onClick={() => {
                navigate(PATH.SIGNUP);
              }}
            >
              Sign Up
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                navigate(PATH.SIGNIN);
              }}
            >
              Sign In
            </Button>
          </Stack>
        )}
      </Toolbar>
    </Box>
  );
};

export default HeaderClient;
