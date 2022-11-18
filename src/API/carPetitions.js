import axios from "axios";
import Router from "next/router";

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('Token');
        config.headers.Authorization = `Token ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const getVehicles = async (state) => {
    const res = await axios.get("http://localhost:8000/car/", {
    });
    state(res.data);
}

export const deleteVehicle = async (vehicle) => {
    axios
      .delete("http://127.0.0.1:8000/car/", {
        data: {"placa": vehicle.placa}
    }).then((res) => {
        if (res.data.message === "Car deleted"){
            alert("Car deleted");
            Router.reload();
        }else{
            alert("Car not deleted");
        }
    }
)
}

export const createVehicle = async (vehicle) => {
    axios
      .post("http://localhost:8000/car/", {
          placa: vehicle.placa,
          marca: vehicle.marca,
          modelo: vehicle.modelo,
          motor: vehicle.motor,
          combustible: vehicle.combustible,
          kilometraje: vehicle.kilometraje,}       
        ).then((res) => {
            if (res.data.message === "Car already exists"){
                alert("Car already exists");
            }else{
                alert("Car created");
                Router.reload();
            }
        }
    )
}

export const editVehicle = async (placa, vehicle) => {
    axios
    .put("http://127.0.0.1:8000/car/"+placa+"/", {
        placa: vehicle.placa,
        marca: vehicle.marca,
        modelo: vehicle.modelo,
        combustible: vehicle.combustible,
        kilometraje: vehicle.kilometraje,
    })

}
