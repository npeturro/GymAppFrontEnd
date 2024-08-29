import axios from "axios";
import { useEffect, useState } from "react";

const baseURL = 'http://gymapp-api.ddns.net/api/';

export const useGET = (consult) => {
    const [Data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);
    const [Error, setError] = useState(null);
  
    useEffect(() => {
      if (!consult) return;
  
      const fetchData = async () => {
        setLoading(true);
        try {
          console.log(`${baseURL}${consult}`);
          const response = await axios.get(`${baseURL}${consult}`);
  
          if (response.status < 200 || response.status >= 300) {
            throw new Error("Error en la red: " + response.statusText);
          }
  
          setData(response.data);
  
          setError(null);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      };
  
      fetchData();
    }, [consult]);
  
    return [Data, Loading, Error];
  };