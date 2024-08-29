import { createContext, useContext, useState } from 'react';
import { GetAll } from '../components/fetch';


const DataFetchContext = createContext();

export const useDataFetch = () => useContext(DataFetchContext);

export const DataFetchProvider = ({ children }) => {
  const [Exercise, setExercise] = useState(null);
  const [Routine, setRoutine] = useState(null);
  const [LoadingExercise, setLoadingExercise] = useState(false);
  const [LoadingRoutine, setLoadingRoutine] = useState(false);
  const [ErrorExercise, setErrorExercise] = useState(null);
  const [ErrorRoutine, setErrorRoutine] = useState(null);

  const fetchExercise = async () => {
    setLoadingExercise(true);
    try {
      const result = await GetAll(consulta);
      setExercise(result);
      setErrorExercise(null);
    } catch (err) {
      setErrorExercise(err);
    } finally {
      setLoadingExercise(false);
    }
  };

  const fetchRoutine = async (consulta) => {
    setLoadingRoutine(true);
    try {
      const result = await GetAll(consulta);
      setRoutine(result);
      setErrorRoutine(null);
    } catch (err) {
      setErrorRoutine(err);
    } finally {
      setLoadingRoutine(false);
    }
  };

  return (
    <DataFetchContext.Provider value={{ 
      Exercise, LoadingExercise, ErrorExercise, fetchExercise, 
      Routine, LoadingRoutine, ErrorRoutine, fetchRoutine 
    }}>
      {children}
    </DataFetchContext.Provider>
  );
};
