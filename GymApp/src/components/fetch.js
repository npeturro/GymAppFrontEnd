import axios from 'axios';
import { useEffect, useState } from 'react';

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

export const Delete = async (tabla, id) => {
    try {
        const response = await axios.delete(`${baseURL}${tabla}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error al eliminar datos:', error);
        throw error;
    }
};

