import Head from 'next/head';
import NextLink from 'next/link';
import Router from 'next/router';
import { Box, Container, Typography, TextField, Button} from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { SettingsNotifications } from '../components/settings/settings-notifications';
import { SettingsPassword } from '../components/settings/settings-password';

import React, { useState } from 'react'


const NewPassword = () => {
  const [isSignup, seIsSignup] = useState(false);
  const [isLogged, setIsLogged] = useState(true);
  const [inputs, setInputs] = useState({
    name:"",
    email:"",
    password:"",
    password2:"",
  });
  const handleChange = (e) => {
    setInputs((prevState)=> ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(inputs);
    console.log(isSignup);
    console.log(isLogged);
    if (!isSignup){
      axios
            .post("https://django-retool-production.up.railway.app/login/", {
                username: inputs.email,
                password: inputs.password,
                password2: inputs.password2,
            })
            .then((res) => {
              console.log(res.data);
              if (res.data){
                ReactSession.set("user", res.data);
                window.location.reload();
              }else{
                ReactSession.set("user", "");
              };
            })
            .catch((err) => {});
    }else{
      axios
            .post("https://django-retool-production.up.railway.app/register/", {
                first_name: inputs.name,
                email: inputs.email,
                password: inputs.password,
                password2: inputs.password2,
            })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {});
    };
  };
  const resetState = () => {
    setIsSignup(!isSignup);
    setInputs({name:"",
    email:"",
    password:"",
    password2:"",})
  };
  return (
    <>
    <Head>
      <title>
        Recuperar contraseña
      </title>
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
            name="password"
            value={inputs.password}
            type={"password"}
            label="Nueva contraseña"
            margin="normal"
            style={{ width: "100%" }}
            placeholder="contraseña"
          />

          <TextField
            fullWidth
            onChange={handleChange}
            name="password2"
            value={inputs.password2}
            type={"password"}
            label="Repita la nueva contraseña"
            margin="normal"
            style={{ width: "100%" }}
            placeholder="contraseña"
          />

          <Box sx={{ py: 2 }}>
          <NextLink
            href="/Auth"
            passHref
          >
            <Button
              color="primary"
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Cambiar contraseña
            </Button>
          </NextLink>
          </Box>
        </form>
        </Container>
      </Box>
    </>

  );
};

export default NewPassword
