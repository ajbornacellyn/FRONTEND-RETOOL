import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { MaintenanceListResults } from '../components/maintenance/maintenance-list-results';
import { MaintenanceListToolbar } from '../components/maintenance/maintenance-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {getMaintenance}  from '../API/maintenancePetitions';


const Page = () => {
  
  const [maintenances, setMaintenances] = useState([]);
  useEffect(() => {
    getMaintenance(setMaintenances);  

  }, []);
    return(
    <>
      <Head>
        <title>
          Mantenimientos
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
          <MaintenanceListToolbar />
          <Box sx={{ mt: 3 }}>
            <MaintenanceListResults maintenances={maintenances} />
          </Box>
        </Container>
      </Box>
    </>
    );
  };

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
export default Page;
