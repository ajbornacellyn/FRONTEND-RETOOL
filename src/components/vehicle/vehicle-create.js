import { useState } from 'react';
import { ReactSession } from 'react-client-session';
import axios from "axios";
import {createVehicle} from '../../API/carPetitions';
import {getVehicles} from '../../API/carPetitions';
import { useEffect } from 'react';
import Router from 'next/router';
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

const marcas = [
  {
    value: 'audi',
    label: 'Audi'
  },
  {
    value: 'bmw',
    label: 'BMW'
  },
  {
    value: 'chevrolet',
    label: 'Chevrolet'
  },
  {
    value: 'dodge',
    label: 'Dodge'
  },
  {
    value: 'fiat',
    label: 'Fiat'
  },
  {
    value: 'ford',
    label: 'Ford'
  },
  {
    value: 'honda',
    label: 'Honda'
  },
  {
    value: 'jeep',
    label: 'Jeep'
  },
  {
    value: 'mazda',
    label: 'Mazda'
  },
  {
    value: 'nissan',
    label: 'Nissan'
  },
  {
    value: 'peugeot',
    label: 'Peugeot'
  },
  {
    value: 'seat',
    label: 'SEAT'
  },
  {
    value: 'suzuki',
    label: 'Suzuki'
  },
  {
    value: 'toyota',
    label: 'Toyota'
  },
  {
    value: 'volkswagen',
    label: 'Volkswagen'
  },
  {
    value: 'volvo',
    label: 'Volvo'
  }
];

const combustibles = [
  {
    value: 'gasolina',
    label: 'Gasolina'
  },
  {
    value: 'acpm',
    label: 'ACPM'
  },
  {
    value: 'gasolina-extra',
    label: 'Gasolina Extra'
  }
];

export const VehicleCreate = (props) => {
  const [values, setValues] = useState({
    placa:"",
    marca:"",
    linea:"",
    modelo:"",
    combustible:"",
    kilometraje:"",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };


  const handleSubmit = (e) =>{
    e.preventDefault();
    createVehicle(values)

  }

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      {...props}
    >
      <Card>
        <CardHeader
          subheader=""
          title="Crear Vehículo"
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
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Marca"
                name="marca"
                value={values.marca}
                onChange={handleChange}
                select
                SelectProps={{ native: true }}
                variant="outlined"
                required
              >
                {marcas.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
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
                label="Línea"
                name="linea"
                value={values.linea}
                onChange={handleChange}
                variant="outlined"
                required
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField required
                fullWidth
                label="Modelo"
                name="modelo"
                value={values.modelo}
                onChange={handleChange}
                type="number"
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Combustible"
                name="combustible"
                value={values.combustible}
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                variant="outlined"
              >
                {combustibles.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
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
            Crear
          </Button>
        </Box>
      </Card>
    </form>
  );
};
