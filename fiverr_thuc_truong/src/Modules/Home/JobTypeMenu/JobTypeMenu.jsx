// JobTypeMenu.jsx
import React, { useState } from "react";
import { Box, Button, Grid, MenuItem } from "@mui/material";
import { QueryClient, useQuery } from "@tanstack/react-query";
import { getJobTypeMenuAPI } from "../../../API/jobAPI";

const JobTypeMenu = () => {
  const { data: dataJobTypeMenu = [] } = useQuery({
    queryKey: ["job-type-menu"],
    queryFn: getJobTypeMenuAPI,
  });

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleButtonHover = (item) => {
    setHoveredItem(item);
  };

  return (
    <div className="jobTypeMenu">
      <Grid container spacing={2}>
        {dataJobTypeMenu.map((item) => (
          <Grid
            className="buttonJobTypeMenu"
            item
            key={item.id}
            onMouseEnter={() => handleButtonHover(item.dsNhomChiTietLoai)}
            // onMouseLeave={() => handleButtonHover(null)}
          >
            <Button>{item.tenLoaiCongViec}</Button>
            {hoveredItem === item.dsNhomChiTietLoai && (
              <Box className="menuItemJobType">
                {item.dsNhomChiTietLoai.map((group) => (
                  <div key={group.id}>
                    <h4>{group.tenNhom}</h4>
                    <ul>
                      {group.dsChiTietLoai.map((detail) => (
                        <MenuItem key={detail.id}>{detail.tenChiTiet}</MenuItem>
                      ))}
                    </ul>
                  </div>
                ))}
              </Box>
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default JobTypeMenu;
