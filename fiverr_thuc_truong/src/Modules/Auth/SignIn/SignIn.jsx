import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import { signInAPI } from "../../../API/userAPI";
import { useAuth } from "../../../Contexts/useContext/useContext";
import { Navigate, useNavigate } from "react-router-dom";
import { PATH } from "../../../Routes/path";

const SignIn = () => {
  const { handleSignIn: handleSignInContext, currentUser } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const { mutate: handleSignin } = useMutation({
    mutationFn: (values) => signInAPI(values),
    onSuccess: (values) => {
      handleSignInContext(values);
      if (values.role === "USER") navigate(PATH.HOME);

      if (values.role === "ADMIN") navigate(PATH.ADMIN);
    },
    onError: () => {
      alert("Account does not exist");
    },
  });

  // if (currentUser) {
  //   return <Navigate to={PATH.HOME} />;
  // }

  const onSubmit = (formValue) => {
    handleSignin(formValue);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" textAlign={"center"} mb={2}>
        Login
      </Typography>

      <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item md={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3}>
              <TextField label="Email" fullWidth mb={3} {...register("email")}>
                Email
              </TextField>
              <TextField
                mb={3}
                label="Password"
                fullWidth
                type="password"
                {...register("password")}
              >
                Password
              </TextField>
              <Button type="submit" variant="contained">
                Đăng nhập
              </Button>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignIn;
