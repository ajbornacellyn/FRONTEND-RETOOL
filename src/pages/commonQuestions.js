import Head from 'next/head';
import { Card, CardHeader, Divider, CardContent, Grid,Box, Container, Typography } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { SettingsNotifications } from '../components/settings/settings-notifications';
import { SettingsPassword } from '../components/settings/settings-password';

const Page = () => (
  <>
    <Head>
      <title>
        Preguntas frecuentes
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
         Preguntas frecuentes
        </Typography>
        <Box sx={{ pt: 3 }}>
        <Card>
      <CardHeader
        subheader="Conozca un poco mas a Retool"
        title="Preguntas sobre Retool "
      />
      <Divider />
      <CardContent>
      <Box>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h6"
              sx={{ py: 2 }}
            >
              Preguntas sobre la herramienta
            </Typography>
            </Box>
            <Box>

            <Typography
              color="textPrimary"
              gutterBottom
              variant="subtitle1"
              sx={{ py: 2 }}
            >
              ¿Como puedo guardar los datos de Mis autos?
            </Typography>
            </Box>
            <Box>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="string"
              sx={{ py: 2 }}
            >
              Para utilizar almacenar los datos correspondientes a sus autos, el usuario debe dirigirse a la pestaña de Mis autos. Una vez aqui, presione el boton de crear vehiculo, introduzca la informacion sobre su vehiculo y confirme el proceso
            </Typography>
            </Box>
            <Box>

            <Typography
              color="textPrimary"
              gutterBottom
              variant="subtitle1"
              sx={{ py: 2 }}
            >
              ¿Puedo cambiar la informacion almacenada de Mis autos?
            </Typography>
            </Box>
            <Box>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="string"
              sx={{ py: 2 }}
            >
              Para modificar los datos correspondientes a los autos del usuario, este debe dirigirse a la pestaña de Mis autos. Una vez aqui, presione el boton con el simbolo de un lapiz, modifique la informacion sobre su vehiculo y confirme el proceso
            </Typography>
            </Box>

            <Box>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h6"
              sx={{ py: 2 }}
            >
              Preguntas sobre el equipo de Retool
            </Typography>
            </Box>
            <Box>

            <Typography
              color="textPrimary"
              gutterBottom
              variant="subtitle1"
              sx={{ py: 2 }}
            >
              ¿Cual es su mision?
            </Typography>
            </Box>
            <Box>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="string"
              sx={{ py: 2 }}
            >
              App para llevar un registro de los mantenimientos del vehículo. Se creará una encuesta para que el usuario diga qué datos necesita en la app. La app busca que las personas puedan tener su vehículo en un estado óptimo mediante los mantenimientos necesarios. Para esto se necesitará una vista, un modelo y un controlador. Esto se verifica por medio de la reducción de accidentes ocasionados por fallas del vehículo
            </Typography>
            </Box>
            <Box>

            <Typography
              color="textPrimary"
              gutterBottom
              variant="subtitle1"
              sx={{ py: 2 }}
            >
              ¿Cual es su vision?
            </Typography>
            </Box>
            <Box>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="string"
              sx={{ py: 2 }}
            >
              En el 2027 podamos ayudarle a todos los usuarios de vehículo automovilísticos particulares con placas registradas en Bogotá por medio del aplicativo en el que podrán llevar un registro de los mantenimientos realizados al vehículo. Se creará una encuesta para que el usuario diga qué datos necesita en la app. La app busca que las personas con placas registradas en Bogotá puedan tener su vehículo en un estado óptimo mediante los mantenimientos necesarios. Para esto se necesitará una vista, un modelo y un controlador. Esto se verifica por medio de la reducción de accidentes ocasionados por fallas del vehículo en el 2027
            </Typography>
            </Box>
            <Box>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="subtitle1"
              sx={{ py: 2 }}
            >
              ¿Cuales son sus valores?
            </Typography>
            </Box>
            <Box>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="string"
              sx={{ py: 2 }}
            >
              o Honestidad:  Se espera que todos los miembros del grupo tengan la honestidad para comunicarse con los integrantes e informarles en caso de que no pueda realizar una de sus partes asignadas
              o Respeto: Se espera que todos los integrantes del grupo respeten las opiniones de los demás miembros
              o Responsabilidad: Se espera que todos los integrantes del grupo cumplan con lo que se comprometieron a realizar.
              o Solidaridad: Se espera que todos los integrantes del grupo tengan un sentimiento de unidad basada en la meta del equipo
              o Empatía: Se espera que todos los integrantes del grupo tengan la capacidad de ponerse en los zapatos del otro en caso de que alguien posea algún tipo de problema importante que le impida realizar su parte
              o Comunicación: Se espera que todos los integrantes del grupo tengan la capacidad de comunicarse con los otros integrantes
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
