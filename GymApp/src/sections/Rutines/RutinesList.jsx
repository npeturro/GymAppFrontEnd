import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RutinesCard from "./RutinesCard";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import { useGET } from "../../components/useGET";

const RutinesList = ({ rutines, RoutineLoading }) => {
  const [searchRutine, setSearchRutine] = useState("");
  const navigate = useNavigate();
  const [Exercises, ExercisesLoading, ExerciseError] = useGET('Exercise');

  const filteredRutine = rutines.filter((rutine) =>
    rutine.name.toLowerCase().includes(searchRutine.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchRutine(e.target.value);
  };

  const handleView = (rutine) => {
    navigate("/rutines/view", { state: { rutine } });
  };

  // Check for machine exercises
  const hasMachineExercise = (setExercises) => {
    return setExercises.some((setExercise) => {
      const exercise = Exercises.find((ex) => ex.id === setExercise.idExercise);
      return exercise && exercise.machine !== null;
    });
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen flex flex-col items-center">
      {/* Buscador */}
      <div className="mb-4 w-full max-w-3xl my-4">
        <input
          type="text"
          placeholder="Buscar rutina por nombre"
          className="p-2 w-full border-2 border-gray-300 rounded"
          value={searchRutine}
          onChange={handleSearch}
        />
      </div>

      {RoutineLoading ? (
  <div className="w-full max-w-3xl">
    <LinearProgress />
  </div>
) : (
  <>
    {filteredRutine.length > 0 ? (
      <div className="flex flex-col-reverse w-full max-w-3xl">
        {filteredRutine.map((rutine) => (
          <RutinesCard
            key={rutine.id}
            rutine={rutine}
            handleView={handleView}
            hasMachineExercise={hasMachineExercise(rutine.setExercises)}
          />
        ))}
      </div>
    ) : (
      <p className="text-center text-gray-900">
        No hay rutinas disponibles.
      </p>
    )}
  </>
)}

    </div>
  );
};

RutinesList.propTypes = {
  rutines: PropTypes.array.isRequired,
  RoutineLoading: PropTypes.bool.isRequired,
};

export default RutinesList;
