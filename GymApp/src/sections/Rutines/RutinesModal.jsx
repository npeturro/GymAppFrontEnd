import React from "react";

const RutinesModal = ({ rutine, handleClose }) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-slate-700 w-[400px] md:w-[600px] rounded-xl shadow-2xl shadow-slate-950 overflow-hidden text-white flex flex-col">
                <div className="bg-gray-800 p-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-orange-500 uppercase">{rutine.title}</h3>
                </div>

                <div className="p-6">
                    <p className="text-gray-300 font-semibold">Descripción:</p>
                    <p className="text-gray-300 mb-4">{rutine.description}</p>

                    <p className="text-gray-300 font-semibold">Duración:</p>
                    <p className="text-gray-300 mb-4">{rutine.duration} minutos</p>

                    <p className="text-gray-300 font-semibold">Dificultad:</p>
                    <p className="text-gray-300 mb-4">{rutine.difficulty}</p>

                    <p className="text-gray-300 font-semibold">Ejercicios:</p>
                    <ul className="list-disc pl-5">
                        {rutine.exercices.map((exercise) => (
                            <li key={exercise.id} className="mb-2">
                                <p className="text-gray-300 font-bold">{exercise.title}</p>
                                <p className="text-gray-300">{exercise.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-gray-800 p-4 flex justify-end">
                    <button
                        className="bg-yellow-400 text-gray-800 py-2 px-4 rounded-full font-semibold cursor-pointer border-none mr-2"
                        onClick={handleClose}
                    >
                        Editar
                    </button>
                    <button
                        className="bg-gray-600 text-white py-2 px-4 rounded-full font-semibold cursor-pointer border-none"
                        onClick={handleClose}
                    >
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RutinesModal;
 