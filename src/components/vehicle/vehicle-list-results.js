import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ReactSession } from 'react-client-session';
import axios from "axios";
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Modal
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { VehicleEdit } from '../vehicle/vehicle-edit';
import * as React from 'react';
import {deleteVehicle} from '../../API/carPetitions';


ReactSession.setStoreType("localStorage");

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  const token = ReactSession.get("token");
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

export const VehicleListResults = ({ vehicles, ...rest }) => {
  const [selectedVehicle, setSelectedVehicle] = useState();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const editVehicle = (vehicle) =>{
    setSelectedVehicle(vehicle);
    handleOpen();

  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => { setOpen(true);};
  const handleClose = () => setOpen(false);

  if(vehicles == "No cars") return <div>No hay vehiculos</div>;
  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>

                </TableCell>
                <TableCell>
                  Placa
                </TableCell>
                <TableCell>
                  Marca
                </TableCell>
                <TableCell>
                  Modelo
                </TableCell>
                <TableCell>
                  Kilometraje
                </TableCell>
                <TableCell>

                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {console.log("vehiclessss")}
              {console.log(vehicles)}
              {vehicles.slice(0, limit).map((vehicle) => (
                <TableRow
                  hover
                  key={vehicle.placa}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={"/static/images/vehicle.png"}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(vehicle.name)}
                      </Avatar>
                    </Box>
                  </TableCell>
                  <TableCell>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {vehicle.placa}
                      </Typography>
                  </TableCell>
                  <TableCell>
                    {vehicle.marca}
                  </TableCell>
                  <TableCell>
                    {vehicle.modelo}
                  </TableCell>
                  <TableCell>
                    {vehicle.kilometraje}
                  </TableCell>
                  <TableCell>
                    <IconButton aria-label="delete" onClick={() => {deleteVehicle(vehicle);}}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="edit" onClick={() => {editVehicle(vehicle);}}>
                      <EditIcon />
                    </IconButton>

                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <VehicleEdit vehicle={selectedVehicle} />
            </Box>
          </Modal>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={vehicles.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

VehicleListResults.propTypes = {
  vehicles: PropTypes.array.isRequired
};
