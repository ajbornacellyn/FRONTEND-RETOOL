import { useState } from 'react';
import { ReactSession } from 'react-client-session';
import axios from "axios";
ReactSession.setStoreType("localStorage");
import { useEffect } from 'react';
import {createMaintenance} from '../../API/maintenancePetitions';
import {deleteMaintenance} from '../../API/maintenancePetitions';
import {getVehicles} from '../../API/carPetitions';
import Router from 'next/router';

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

const estados = [
  {
    value: 'En proceso',
    label: 'En proceso'
  },
  {
    value: 'Finalizado',
    label: 'Finalizado'
  },
  {
    value: 'Aplazado',
    label: 'Aplazado'
  }
];
const servicios = [
  {
    value: 'Mantenimiento periódico',
    label: 'Mantenimiento periódico',
  },
  {
    value: 'Cambio de aceite',
    label: 'Cambio de aceite'
  },
  {
    value: 'Cambio de neumáticos',
    label: 'Cambio de neumáticos'
  },
  {
    value: 'Cambio de batería',
    label: 'Cambio de batería'
  },
  {
    value: 'Cambio de frenos',
    label: 'Cambio de frenos'
  },
  {
    value: 'Cambio de amortiguadores',
    label: 'Cambio de amortiguadores'
  },
  {
    value: 'Cambio de embrague',
    label: 'Cambio de embrague'
  },
  {
    value: 'Cambio de correa de Bujias',
    label: 'Cambio de correa de Bujias'
  },
  {
    value: 'Motor',
    label: 'Motor'
  },
  {
    value: 'Liquido de frenos',
    label: 'Liquido de frenos'
  },
  {
    value: 'Actualización de kilometraje',
    label: 'Actualización de kilometraje'
  },
];



export const MaintenanceCreate = (props) => {

  const token = localStorage.getItem('Token');
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
      getVehicles(setVehicles)
  }, []);
  

  const [values, setValues] = useState({
    placa:"",
    fecha:"",
    servicio:"",
    descripcion:"",
    estado:"",
    kilometraje:"",
    costo:"",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };


  const handleSubmit = (e) =>{
    e.preventDefault();
    createMaintenance(values);
};

console.log(vehicles);
if (vehicles === "No cars") {
    return (
      <div>
        <h1>No hay vehiculos registrados, por favor registre su vehiculo</h1>
      </div>
    );
} else {
  const vehicle ={placa: '', marca: '', modelo: '', anio: '', kilometraje: '', estado: ''};
  vehicles.push(vehicle);
  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"

      {...props}
    >
      <Card>
        <CardHeader
          subheader=""
          title="Crear Mantenimiento"
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
                label="Estado"
                name="estado"
                value={values.descripcion}
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                variant="outlined"
              >
                {estados.map((option) => (
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
                label="Descripcion"
                name="descripcion"
                value={values.descripcion}
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
                label="Fecha"
                name="fecha"
                value={values.fecha}
                onChange={handleChange}
                type="date"
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
                label="Servicio"
                name="servicio"
                value={values.servicio}
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                variant="outlined"
              >
                {servicios.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    icon={option.icon}
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
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Costo"
                name="costo"
                value={values.costo}
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
  }
};
