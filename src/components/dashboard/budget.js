import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


export const Budget = ({props, ...React }) => {

    const token = localStorage.getItem('Token');
    const [Mantenimientos, setMaintenances] = useState([]);
    useEffect(() => {
        axios
      .get("https://django-retool-production.up.railway.app/maintenance/", {
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
        var total = 0;
        var LastCost = Mantenimientos[Mantenimientos.length-1].costo;
        Mantenimientos.forEach((item) => {
            total += item.costo
        })
    }

  return (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
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
            Costo total
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            ${total}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ArrowDownwardIcon color="error" />
        <Typography
          color="error"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          ${LastCost}
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Costo último mant...
        </Typography>
      </Box>
    </CardContent>
  </Card>
  );
};
