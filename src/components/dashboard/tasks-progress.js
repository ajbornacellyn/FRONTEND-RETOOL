import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export const TasksProgress = (props) => {
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
    var kilCurrent = Mantenimientos[Mantenimientos.length-1].kilometraje;
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
            Kilometraje actual
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            {kilCurrent}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'warning.main',
              height: 56,
              width: 56
            }}
          >
            <InsertChartIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{ pt: 3 }}>
        <LinearProgress
          value={75.5}
          variant="determinate"
        />
      </Box>
    </CardContent>
  </Card>
  );
};
