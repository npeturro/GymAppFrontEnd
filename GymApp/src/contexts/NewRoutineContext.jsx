import { createContext, useState, useContext } from 'react';
import { toast } from 'sonner'
const NewRoutineContext = createContext();

export const NewRoutineProvider = ({ children }) => {
  const [NewRoutine, setNewRoutine] = useState([]);

  const addExerciseToNewRoutine = (exercise) => {
    if(NewRoutine.some(e => e.ID === exercise.ID)){
      toast.warning('El ejercicio ya se encuentra en la rutina.')
      return;
    } if(NewRoutine.filter(e => e.category == exercise.category).length > 3){
      toast.warning('No se pueden agregar más de 3 ejercicios de la misma categoría por rutina.')
      return;
    } if(NewRoutine.filter(e => e.machine !== null || e.machine !== '').length > 5){
      toast.warning('No se pueden agregar más de 5 ejercicios con uso de máquina por rutina.')
      return;
    }
    else{
      toast.success('El ejercicio agregado correctamente a la rutina')
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
