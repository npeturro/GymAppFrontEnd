import axios from 'axios';

const baseURL = 'http://gymapp-api.ddns.net/api/';

export const GetAll = async (consulta) => {

    try {
        const response = await axios.get(`${baseURL}${consulta}`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener datos:', error);
        return null;
    }
}

export const AddRutina = async (values) => {
    try {
        const newRutine = {
            name: values.name,
            category: values.name,
            description: values.name,
            duration: values.duration,
            setExercises: [
                {
                    id: 3,
                    set: 2
                },
            ]
        };

        const response = await axios.post(`${baseURL}`, newRutine);

        return "ok";
    } catch (error) {
        console.error('Error al registrar rutina:', error);
        return "error";
    }
}

export const Delete = async (tabla, id) => {
    try {
        const response = await axios.delete(`${baseURL}/${tabla}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar datos:', error);
        throw error;
    }
};