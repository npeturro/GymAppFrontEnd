import { useState } from "react";
import RutinesModal from "./RutinesModal";

const RutinesCard = ({ rutines }) => {
    const [open, setOpen] = useState(false);
    const [selectedRutine, setSelectedRutine] = useState(null);

    const handleOpen = (rutine) => {
        setSelectedRutine(rutine);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    return (
        <>
            <div className="bg-gray-100 w-full min-h-screen flex flex-col items-center">
                {rutines.map((rutine) => (
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
                                onClick={() => handleOpen(rutine)}
                            >
                                VER MÁS
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {open && <RutinesModal rutine={selectedRutine} handleClose={handleClose} />}
        </>
    );
};

export default RutinesCard;



