import Head from "next/head";
import NextLink from "next/link";
import Router from "next/router";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";
import { SettingsNotifications } from "../components/settings/settings-notifications";
import { SettingsPassword } from "../components/settings/settings-password";

import React, { useState } from "react";


const ResetPassword = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [isLogged, setIsLogged] = useState(true);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    console.log(isSignup);
    console.log(isLogged);
    if (!isSignup) {
      axios
        .post("http://localhost:8000/login/", {
          username: inputs.email,
          password: inputs.password,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            ReactSession.set("user", res.data);
            window.location.reload();
          } else {
            ReactSession.set("user", "");
          }
        })
        .catch((err) => {});
    } else {
      axios
        .post("http://localhost:8000/register/", {
          first_name: inputs.name,
          email: inputs.email,
          password: inputs.password,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {});
    }
  };
  const resetState = () => {
    setIsSignup(!isSignup);
    setInputs({ name: "", email: "", password: "" });
  };
  return (
    <>
      <Head>
        <title>Recuperar contraseña</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
                >
                Recuperacion de contraseña
              </Typography>
              </Box>

              <TextField
                fullWidth
                onChange={handleChange}
                name="email"
                type={"email"}
                value={inputs.email}
                label="Introduzca el correo electronico de su cuenta"
                margin="normal"
                style={{ width: "100%" }}
                placeholder="Email"
              />
              <Box sx={{ py: 2 }}>
              <NextLink href="/newPassword" passHref>
                <Button
                  color="primary"
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Enviar correo
                </Button>
              </NextLink>
              </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default ResetPassword;
