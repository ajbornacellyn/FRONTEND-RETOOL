import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';
import { useEffect,useState } from 'react';
import { getMaintenance } from '../../API/maintenancePetitions';
import HelpIcon from '@mui/icons-material/Help';
const orders = [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    customer: {
      name: 'Cao Yu'
    },
    createdAt: 1555016400000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    customer: {
      name: 'Alexa Richardson'
    },
    createdAt: 1554930000000,
    status: 'refunded'
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    customer: {
      name: 'Anje Keizer'
    },
    createdAt: 1554757200000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    customer: {
      name: 'Clarke Gillebert'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    customer: {
      name: 'Adam Denisov'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  }
];


export const LatestOrders = (props) => {
  const [maintenances, setMaintenances] = useState([]);
  useEffect(() => {
    getMaintenance(setMaintenances);  

  }, []);
  if(maintenances !== "Not maintenances" && maintenances !== "No cars" && maintenances.length>0){
    return (
    <Card {...props}>
      <CardHeader title="Últimos servicios" />
      <PerfectScrollbar>
        <Box sx={{ minWidth: 200 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Fecha
                </TableCell>
                <TableCell>
                  servicio


                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {maintenances.map((mantenimiento) => (
                <TableRow
                  hover
                  
                  key={mantenimiento.id}
                  

                >
                  <TableCell>
                    {mantenimiento.fecha}
                  </TableCell>
                  <TableCell>
                    {mantenimiento.servicio}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
    </Card>
  );
  
  }else{
    return <div>No hay mantenimientos registrados.</div>;
    
  }
};
