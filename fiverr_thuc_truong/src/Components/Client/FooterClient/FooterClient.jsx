import React from "react";
import { Grid, Typography, List, ListItem } from "@mui/material";

const FooterClient = () => {
  return (
    <div>
      <footer className="footer">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Caroutes</Typography>
            <List>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              {/* Thêm các mục khác nếu cần */}
            </List>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">About</Typography>
            <List>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              {/* Thêm các mục khác nếu cần */}
            </List>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Support</Typography>
            <List>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              {/* Thêm các mục khác nếu cần */}
            </List>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">Communlty</Typography>
            <List>
              <ListItem>Item 1</ListItem>
              <ListItem>Item 2</ListItem>
              {/* Thêm các mục khác nếu cần */}
            </List>
          </Grid>
          <Grid item xs={12} sm={4}>
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
