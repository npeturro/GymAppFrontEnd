import { useState } from "react";
import RutinesModal from "./RutinesView";
import { useNavigate } from "react-router-dom";

const RutinesCard = ({ rutines }) => {

    const [open, setOpen] = useState(false);
    const [selectedRutine, setSelectedRutine] = useState(null);
    const navigate = useNavigate();

    // Buscador
    const [searchRutine, setSearchRutine] = useState("");

    const filteredRutine = rutines.filter((rutine) =>
        rutine.title.toLowerCase().includes(searchRutine.toLowerCase())
    );

    const handleSearch = (e) => {
        setSearchRutine(e.target.value);
    };

    const handleView = (rutine) => {
        setSelectedRutine(rutine);
        navigate('/rutines/view', { state: { rutine } })
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

                {/* <div className='flex flex-wrap gap-8 justify-center'>
                    {filteredRutine.map((exercise) => (
                        <ExerciseCard
                            key={exercise.id}
                            exercise={exercise}
                            isEditing={isEditing}
                            onEdit={(updatedExercise) => handleEditExercise(exercise.id, updatedExercise)}
                        />
                    ))}
                </div> */}

                {filteredRutine.length > 0 ? (
                    
                        filteredRutine.map((rutine) => (
                            <div
                                key={rutine.id}
                                className="w-full max-w-3xl mb-4 bg-slate-700 rounded-xl shadow-2xl shadow-slate-950 overflow-hidden text-white flex flex-col"
                            >
                                <div className="p-3">
                                    <h3 className="text-lg font-bold text-orange-500 uppercase">{rutine.title}</h3>
                                    <div className="my-3 bg-white min-h-[1px]"></div>
                                    <p className="text-gray-300">Dificultad: {rutine.difficulty}</p>
                                    <p className="text-gray-300">Categoria: {rutine.category}</p>
                                    <p className="text-gray-300">Duración: {rutine.duration} min</p>
                                </div>

                                <div className="w-full h-14 rounded-t-3xl bg-yellow-400 flex justify-center items-center">
                                    <button
                                        className="bg-gray-800 text-white py-2 px-5 rounded-full font-semibold cursor-pointer border-none"
                                        onClick={() => handleView(rutine)}
                                    >
                                        VER MÁS
                                    </button>
                                </div>
                            </div>
                        ))
                    
                ) : (
                    <p className="text-center text-gray-900">No hay ejercicios disponibles.</p>
                )

                }
            </div>


            {open && <RutinesModal rutine={selectedRutine} handleClose={handleClose} />}
        </>
    );
};

export default RutinesCard;



