import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import ExerciseCard from "../NewRutine/ExerciseCard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RutinesView = () => {
    const location = useLocation();
    const { state } = location;
    const [rutine, setRutine] = useState(state.rutine);
    const [formValues, setFormValues] = useState(state.rutine);
    const [isEditing, setIsEditing] = useState(false);

    // Buscador
    const [searchRutine, setSearchRutine] = useState("");

    const filteredRutine = formValues.exercices.filter((exercise) =>
        exercise.name.toLowerCase().includes(searchRutine.toLowerCase())
    );

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSave = () => {
        setRutine(formValues);
        setIsEditing(false);

        toast.success('Rutina editada con éxito');
        console.log(formValues);
    };

    const handleCancel = () => {
        setFormValues(rutine);
        setIsEditing(false);
    };

    // const handleEditExercise = (id, updatedExercise) => {
    //     setFormValues({
    //         ...formValues,
    //         exercices: formValues.exercices.map(exercise =>
    //             exercise.id === id ? updatedExercise : exercise
    //         )
    //     });
    // };

    const handleDelete = () => {
        toast.success('Rutina eliminada con éxito');
        console.log(formValues);
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 p-6">
            <div className="bg-slate-700 p-4 flex items-center justify-between">
                {isEditing ? (
                    <input
                        className="text-lg font-bold text-orange-500 uppercase bg-transparent border-b-2 border-orange-500 focus:outline-none"
                        name="title"
                        value={formValues.title}
                        onChange={handleChange}
                    />
                ) : (
                    <h3 className="text-lg font-bold text-orange-500 uppercase">{rutine.title}</h3>
                )}
            </div>

            <div className="flex-grow p-6">

                <p className="font-semibold">Categoria:</p>
                {isEditing ? (
                    <input
                        type="text"
                        className="mb-4 p-2 w-full border-2 border-gray-300 rounded"
                        name="category"
                        value={formValues.category}
                        onChange={handleChange}
                    />
                ) : (
                    <p className="mb-4">{rutine.category}</p>
                )}

                <p className="font-semibold">Descripción:</p>
                {isEditing ? (
                    <textarea
                        className="mb-4 p-2 w-full border-2 border-gray-300 rounded"
                        name="description"
                        value={formValues.description}
                        onChange={handleChange}
                    />
                ) : (
                    <p className="mb-4">{rutine.description}</p>
                )}

                <p className="font-semibold">Duración:</p>
                {isEditing ? (
                    <input
                        type="number"
                        className="mb-4 p-2 w-full border-2 border-gray-300 rounded"
                        name="duration"
                        value={formValues.duration}
                        onChange={handleChange}
                    />
                ) : (
                    <p className="mb-4">{rutine.duration} minutos</p>
                )}

                <p className="font-semibold">Dificultad:</p>
                {isEditing ? (
                    <input
                        className="mb-4 p-2 w-full border-2 border-gray-300 rounded"
                        name="difficulty"
                        value={formValues.difficulty}
                        onChange={handleChange}
                    />
                ) : (
                    <p className="mb-4">{rutine.difficulty}</p>
                )}

                {/* BUSCADOR */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Buscar ejercicio por nombre"
                        className="p-2 w-full border-2 border-gray-300 rounded"
                        value={searchRutine}
                        onChange={(e) => setSearchRutine(e.target.value)}
                    />
                </div>

                <div className='flex flex-wrap gap-8 justify-center'>
                    {filteredRutine.map((exercise) => (
                        <ExerciseCard
                            key={exercise.id}
                            exercise={exercise}
                            isEditing={isEditing}
                            onEdit={(updatedExercise) => handleEditExercise(exercise.id, updatedExercise)}
                        />
                    ))}
                </div>

                <p className="font-semibold">Ejercicios:</p>
                <div className='flex flex-wrap gap-8 justify-center'>
                    {formValues.exercices.map((exercise) => (
                        <ExerciseCard
                            key={exercise.id}
                            exercise={exercise}
                            isEditing={isEditing}
                            onEdit={(updatedExercise) => handleEditExercise(exercise.id, updatedExercise)}
                        />
                    ))}
                </div>
            </div>

            <div className="p-4 flex justify-end mt-auto">
                {isEditing ? (
                    <>
                        <button
                            className="bg-green-400 text-gray-800 py-2 px-4 rounded-full font-semibold cursor-pointer border-none mr-2"
                            onClick={handleSave}
                        >
                            Guardar
                        </button>
                        <button
                            className="bg-gray-400 text-gray-800 py-2 px-4 rounded-full font-semibold cursor-pointer border-none mr-2"
                            onClick={handleCancel}
                        >
                            Cancelar
                        </button>
                    </>
                ) : (
                    <button
                        className="bg-yellow-400 text-gray-800 py-2 px-4 rounded-full font-semibold cursor-pointer border-none mr-2"
                        onClick={() => setIsEditing(true)}
                    >
                        Editar
                    </button>
                )}
                <button
                    className="bg-gray-600 text-white py-2 px-4 rounded-full font-semibold cursor-pointer border-none"
                    onClick={handleDelete}
                >
                    Eliminar
                </button>
            </div>
            <ToastContainer />
        </div>

    );
};

export default RutinesView;
