import axios from 'axios';

const baseURL = '';

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
            title: values.title,
            category: values.title,
            description: values.title,
            duration: values.duration,
            exercices: [
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