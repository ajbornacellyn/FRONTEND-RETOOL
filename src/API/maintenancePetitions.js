import axios from "axios";
import Router from 'next/router';

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


export const getMaintenance = async (state) => {
    const res = await axios.get("https://django-retool-production.up.railway.app/maintenance/", {
    });
    state(res.data);
}

export const createMaintenance = async (maintenance) => {
    axios.post("https://django-retool-production.up.railway.app/maintenance/", {
          placa: maintenance.placa,
          descripcion: maintenance.descripcion,
          estado: maintenance.estado,
          servicio: maintenance.servicio,
          fecha: maintenance.fecha,
          kilometraje: maintenance.kilometraje,
          costo: maintenance.costo,
      }
    ).then((res) => {
        if (res.data.message === "Maintenance already exists"){
            alert("Maintenance already exists");
        }else{
            alert("Maintenance created");
            Router.reload();
        }
    }
)
}

export const deleteMaintenance = async (maintenance) => {
    axios
      .delete("http://127.0.0.1:8000/maintenance/", {
        data: {"id": maintenance}
    }).then((res) => {
        if (res.data.message === "Maintenance deleted"){
            alert("Maintenance deleted");
            Router.reload();
        }else{
            alert("Maintenance not deleted");
        }
    }
)
}

export const editMaintenance = async (maintenance) => {
    axios
        .post("https://django-retool-production.up.railway.app/edit_car/", {
            placa: values.placa,
            marca: values.marca,
            modelo: values.linea,
            año: values.modelo,
            combustible: values.combustible,
            kilometraje: values.kilometraje,
        })
    }




