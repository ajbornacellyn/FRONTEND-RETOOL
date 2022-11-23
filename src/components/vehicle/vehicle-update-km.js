import { useState } from 'react';
import { ReactSession } from 'react-client-session';
import axios from "axios";
import {updateVehicleKm} from '../../API/carPetitions';
import { useEffect } from 'react';
import Router from 'next/router';
import {getVehicles} from '../../API/carPetitions';
ReactSession.setStoreType("localStorage");

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import { set } from 'date-fns';


export const VehicleUpdateKm = (props) => {

  const [vehicles, setVehicles] = useState([]);

  //getVehicles(setVehicles);

  console.log(vehicles);
  useEffect(() => {
    getVehicles(setVehicles);
    }, []);
  
  const [values, setValues] = useState({
    placa:"",
    kilometraje:""
  });
  
  try{
    if (values.placa == "") {
      values.placa = vehicles[0].placa;
      values.kilometraje = vehicles[0].kilometraje;
    }
  } catch (error) {
    console.log(error);
  };

  const handleChange = (event) => {

    try{
      if (event.target.name == "placa" & values.plca != event.target.value){
        values.kilometraje = vehicles.find(v => v.placa == event.target.value).kilometraje;
      };
    } catch (error) {
      values.kilometraje = "";
    };

    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  
  };


  const handleSubmit = (e) =>{
    e.preventDefault();
    updateVehicleKm(values);
    //fetchData();
    console.log(values);
    console.log(values.placa);
    console.log(values.kilometraje);

  }

  if(vehicles == "No cars") return <div>No hay vehiculos</div>;

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      {...props}
    >
      <Card>
        <CardHeader
          subheader=""
          title="Actualizar Kilometraje"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Placa"
                name="placa"
                value={values.placa}
                required
                select
                variant="outlined"
                onChange={handleChange}
                SelectProps={{ native: true }}
              >
                {vehicles.map((option) => (
                  <option
                    key={option.placa}
                    value={option.placa}
                  >
                    {option.placa}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Kilometraje"
                name="kilometraje"
                value={values.kilometraje}
                onChange={handleChange}
                type="number"
                required
                variant="outlined"
              />

            </Grid>
            </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            type="submit"
            color="primary"
            variant="contained"
          >
            Guardar
          </Button>
        </Box>
      </Card>
    </form>
  );
};
