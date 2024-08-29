import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RutinesCard from "./RutinesCard";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import { GetAll } from "../../components/fetch";

const RutinesList = ({ rutines, isLoading }) => {
  const [open, setOpen] = useState(false);
  const [selectedRutine, setSelectedRutine] = useState(null);
  const navigate = useNavigate();
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchDatos = async () => {
      const datos = await GetAll("Exercise");
      setExercises(datos);
    };
    fetchDatos();
  }, []);

  // Buscador
  const [searchRutine, setSearchRutine] = useState("");

  const filteredRutine = rutines.filter((rutine) =>
    rutine.name.toLowerCase().includes(searchRutine.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchRutine(e.target.value);
  };

  const handleView = (rutine) => {
    setSelectedRutine(rutine);
    navigate("/rutines/view", { state: { rutine } });
  };

  const handleClose = () => setOpen(false);


  return (
    <>
      <div className="bg-gray-100 w-full min-h-screen flex flex-col items-center">
        {/* BUSCADOR */}
        <div className="mb-4 w-full max-w-3xl my-4">
          <input
            type="text"
            placeholder="Buscar ejercicio por nombre"
            className="p-2 w-full border-2 border-gray-300 rounded"
            value={searchRutine}
            onChange={handleSearch}
          />
        </div>

        {isLoading ? (
          <div className="w-full max-w-3xl">
            <LinearProgress />
          </div>
        ) : (
          <>
            {filteredRutine.length > 0 ? (
              filteredRutine.map((rutine) => {
                const hasMachineExercise = rutine.setExercises.some(
                  (setExercise) => {
                    const exercise = exercises.find(
                      (ex) => ex.id === setExercise.idExercise
                    );
                    return exercise && exercise.machine !== null;
                  }
                );

                return (
                  <RutinesCard
                    key={rutine.id}
                    rutine={rutine}
                    handleView={handleView}
                    hasMachineExercise={hasMachineExercise}
                  />
                );
              })
            ) : (
              <p className="text-center text-gray-900">
                No hay ejercicios disponibles.
              </p>
            )}
          </>
        )}
      </div>
    </>
  );
};

RutinesList.propTypes = {
  rutines: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default RutinesList;
