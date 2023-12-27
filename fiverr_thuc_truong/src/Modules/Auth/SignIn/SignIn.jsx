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

const SignIn = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "all",
  });

  const { mutate: handleSignin } = useMutation({
    mutationFn: (values) => signInAPI(values),
    onSuccess: () => {},
  });

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
