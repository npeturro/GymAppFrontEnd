import { createContext, useState, useContext } from 'react';
import {toast} from "sonner"
import PropTypes from "prop-types";

const NewRoutineContext = createContext();

export const NewRoutineProvider = ({ children }) => {
  
  const [NewRoutine, setNewRoutine] = useState([]);

  const addExerciseToNewRoutine = (exercise) => {

    // Check if the exercise is already in the routine
    if(NewRoutine.some(e => e.id === exercise.id)){
      toast.warning('El ejercicio ya se encuentra en la rutina.');
      return;
    }

    // Check if more than 3 exercises from the same category are added
    const categoryExercisesCount = NewRoutine.filter(e => e.category === exercise.category).length;
    if(categoryExercisesCount >= 3){
      toast.warning('No se pueden agregar más de 3 ejercicios de la misma categoría por rutina.');
      return;
    }

    // Check if more than 5 exercises with machines are added
    const machineExercisesCount = NewRoutine.filter(e => e.machine !== null).length;
    if(exercise.machine !== null && machineExercisesCount >= 5){
        toast.warning('No se pueden agregar más de 5 ejercicios con uso de máquina por rutina.');
        return;
    }

    // Add the exercise to the routine
    toast.success('El ejercicio agregado correctamente a la rutina');
    setNewRoutine((prevRoutine) => [...prevRoutine, exercise]);
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

NewRoutineProvider.propTypes = {
  children: PropTypes.node
};

export const useNewRoutine = () => {
  return useContext(NewRoutineContext);
};
