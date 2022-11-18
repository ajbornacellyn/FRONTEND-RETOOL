import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export const TotalCustomers = (props) => {

  const token = localStorage.getItem('Token');
    const [Mantenimientos, setMaintenances] = useState([]);
    useEffect(() => {
        axios
      .get("http://localhost:8000/maintenance/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
      if (res.data !== "No maintenances"){
        setMaintenances(res.data);};
    })

    }, []);
    if(Mantenimientos !== "Not maintenances" && Mantenimientos !== "No cars" && Mantenimientos.length>0){
        var total = Mantenimientos.length;
        var LastMantDate = Mantenimientos.map((item) => item.id)
        var LastMantDate = LastMantDate[LastMantDate.length-1]

        var service = Mantenimientos.map((item) => item.servicio)
        var service = service[service.length-1]
    }

  return (
  <Card {...props}>
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            TOTAL de Mantenimientos
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {total}
            
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <PeopleIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <ArrowUpwardIcon color="success" />
        <Typography
          variant="body2"
          sx={{
            mr: 1
          }}
        >
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          último mantenimiento: {LastMantDate} Servicio: {service}

        </Typography>
      </Box>
    </CardContent>
  </Card>
);
};
