import Head from 'next/head';
import { Card, CardHeader, Divider, CardContent, Grid,Box, Container, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { SettingsNotifications } from '../components/settings/settings-notifications';
import { SettingsPassword } from '../components/settings/settings-password';

const Page = () => (
  <>
    <Head>
      <title>
        Informacion de contacto
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
         Informacion de contacto
        </Typography>
        <Box sx={{ pt: 3 }}>
        <Card>
      <CardHeader
        subheader="Horarios de atencion de 1pm a 8pm todos los dias"
        title="Contactenos"
      />
      <Divider />
      <CardContent>
      <Box>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h6"
            >
              Correos electronicos
            </Typography>
            </Box>
            <Box>

            <Typography
              color="textPrimary"
              gutterBottom
              variant="string"
            >
              ccuaspa@unal.edu.co
            </Typography>
            </Box>
            <Box>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="string"
            >

              ajbornacellyn@unal.edu.co
            </Typography>
            </Box>
            <Box>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="string"
            >

              baaponter@unal.edu.co

            </Typography>
            </Box>
            <Box>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="string"
            >
              cgomezfe@unal.edu.co
            </Typography>
            </Box>
            
      </CardContent>
      <Divider />
      
    </Card>
        </Box>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
