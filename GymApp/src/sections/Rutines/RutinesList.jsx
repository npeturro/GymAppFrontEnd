import { useState } from "react";
import RutinesModal from "./RutinesView";
import { useNavigate } from "react-router-dom";
import RutinesCard from "./RutinesCard";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";

const RutinesList = ({ rutines, isLoading }) => {
  const [open, setOpen] = useState(false);
  const [selectedRutine, setSelectedRutine] = useState(null);
  const navigate = useNavigate();

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
              filteredRutine.map((rutine) => (
                <RutinesCard
                  key={rutine.id}
                  rutine={rutine}
                  handleView={handleView}
                />
              ))
            ) : (
              <p className="text-center text-gray-900">
                No hay ejercicios disponibles.
              </p>
            )}
          </>
        )}
      </div>

      {open && (
        <RutinesModal rutine={selectedRutine} handleClose={handleClose} />
      )}
    </>
  );
};

RutinesList.propTypes = {
  rutines: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default RutinesList;
