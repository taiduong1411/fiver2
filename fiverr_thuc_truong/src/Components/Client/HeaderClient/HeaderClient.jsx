import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Contexts/useContext/useContext";
import {
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { PATH } from "../../../Routes/path";

const HeaderClient = () => {
  const navigate = useNavigate();
  const { currentUser, handleLogOut } = useAuth();
  console.log("currentUser: ", currentUser);
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
          sx={{ flexGrow: 1 }}
          onClick={() => {
            navigate(PATH.HOME);
          }}
        >
          <img
            src="./Image/logoFiverr.jpg"
            alt=""
            style={{ width: 100, height: 100, cursor: "pointer" }}
          />
        </Typography>

        {currentUser ? (
          <Stack
            spacing={2}
            direction={"row"}
            textAlign={"center"}
            alignItems={"center"}
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
          <Stack spacing={1} direction={"row"}>
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
