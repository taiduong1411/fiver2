import { Grid, List, ListItem, Typography } from '@mui/material';
import React from 'react';

const FooterClient = () => {
  return (
    <div className="container">
      <footer className="footer">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">Caroutes</Typography>
            <List>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              {/* Thêm các mục khác nếu cần */}
            </List>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6">About</Typography>
            <List>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              {/* Thêm các mục khác nếu cần */}
            </List>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6">Support</Typography>
            <List>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              {/* Thêm các mục khác nếu cần */}
            </List>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Typography variant="h6">Communlty</Typography>
            <List>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              {/* Thêm các mục khác nếu cần */}
            </List>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6">More From Fiverr</Typography>
            <List>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              {/* Thêm các mục khác nếu cần */}
            </List>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
};

export default FooterClient;
