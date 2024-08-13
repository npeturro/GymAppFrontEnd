import { createContext, useState, useContext } from 'react';

const NewRoutineContext = createContext();

export const NewRoutineProvider = ({ children }) => {
  const [NewRoutine, setNewRoutine] = useState([]);

  const addExerciseToNewRoutine = (exercise) => {
    if(NewRoutine.some(e => e.ID === exercise.ID)){
      alert('El ejercicio ya se encuentra en la rutina.');
      return;
    }else{
      alert('El ejercicio agregado correctamente a la rutina');
      setNewRoutine((prevRoutine) => [...prevRoutine, exercise]);
    }
  };

  const value = {
    NewRoutine,
    addExerciseToNewRoutine,
  };

  return (
    <NewRoutineContext.Provider value={value}>
      {children}
    </NewRoutineContext.Provider>
  );
};

export const useNewRoutine = () => {
  return useContext(NewRoutineContext);
};
