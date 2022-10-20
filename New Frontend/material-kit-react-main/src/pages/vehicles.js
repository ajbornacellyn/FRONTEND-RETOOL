import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { VehicleListResults } from '../components/vehicle/vehicle-list-results';
import { VehicleListToolbar } from '../components/vehicle/vehicle-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import axios from "axios";
import { ReactSession } from 'react-client-session';
ReactSession.setStoreType("localStorage");

var vehicles = [];
axios
.get("http://localhost:8000/car/", {
})
.then((res) => {
  console.log(res);
  vehicles = res.data;
})
.catch((err) => {});

const Page = () => {
  
  if (!ReactSession.get("token")){
    window.location.replace("/Auth");
  } else {

    return(
    <>
      <Head>
        <title>
          Vehículos
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <VehicleListToolbar />
          <Box sx={{ mt: 3 }}>
            <VehicleListResults vehicles={vehicles} />
          </Box>
        </Container>
      </Box>
    </>
    );
  };
};
Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
export default Page;
