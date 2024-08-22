import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import ExerciseCard from "../NewRutine/ExerciseCard";
import { toast } from "sonner"
import 'react-toastify/dist/ReactToastify.css';
import AddExercise from "../NewRutine/AddExercise";
import { useNavigate } from "react-router-dom";

const exercises = [
    {
        id: 1,
        title: "Leg Extension",
        difficulty: 2,
        category: "Quadriceps",
        description:
            "Strengthens quadriceps muscles, improves knee stability and flexibility.",
        image:
            "https://hips.hearstapps.com/hmg-prod/images/strong-young-man-doing-legs-exercise-in-the-gym-royalty-free-image-517308282-1560456961.jpg",
        machine: "Leg Extension Machine",
    },
    {
        id: 2,
        title: "Squats",
        difficulty: 3,
        category: "Legs",
        description:
            "Targets quads, hamstrings, glutes, and core. Improves strength and stability.",
        image:
            "https://www.dir.cat/blog/wp-content/uploads/2019/05/video-tutorial-air-squat.jpg",
        machine: null,
    },
    {
        id: 3,
        title: "Bench Press",
        difficulty: 3,
        category: "Chest",
        description:
            "Builds chest strength and mass, also engages triceps and shoulders.",
        image:
            "https://blogscdn.thehut.net/app/uploads/sites/478/2021/06/shutterstock_336330497opt_hero_1624870682.jpg",
        machine: "Bench Press Machine",
    },
    {
        id: 4,
        title: "Deadlift",
        difficulty: 3,
        category: "Back",
        description:
            "Strengthens back, glutes, hamstrings, and core. Enhances overall power.",
        image:
            "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2023/04/Beginner-Deadlift-Workout.jpg?fit=1894%2C1337&ssl=1",
        machine: null,
    },
    {
        id: 5,
        title: "Bicep Curl",
        difficulty: 1,
        category: "Arms",
        description:
            "Isolates and strengthens biceps. Can be done with dumbbells or a barbell.",
        image:
            "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2018/01/Barbell-Biceps-Curl-Bodybuilder-1109.jpg?quality=86&strip=all",
        machine: "Bicep Curl Machine",
    },
    {
        id: 6,
        title: "Tricep Dips",
        difficulty: 2,
        category: "Arms",
        description:
            "Targets triceps and shoulders, can be performed on parallel bars or a bench.",
        image:
            "https://www.220triathlon.com/wp-content/uploads/sites/4/2020/05/10529-27bf444.jpg?w=700",
        machine: "Parallel Bars",
    },
    {
        id: 7,
        title: "Pull-Ups",
        difficulty: 3,
        category: "Back",
        description:
            "Strengthens upper back, shoulders, and arms. Requires bodyweight pulling strength.",
        image:
            "https://ironbullstrength.com/cdn/shop/articles/how-to-do-pull-ups-for-a-bigger-and-shredded-back.webp?v=1692300888",
        machine: null,
    },
    {
        id: 8,
        title: "Lunges",
        difficulty: 2,
        category: "Legs",
        description:
            "Works quads, hamstrings, glutes, and improves balance and stability.",
        image:
            "https://hips.hearstapps.com/hmg-prod/images/muscular-man-training-his-legs-doing-lunges-with-royalty-free-image-1677586874.jpg",
        machine: null,
    },
    {
        id: 9,
        title: "Shoulder Press",
        difficulty: 2,
        category: "Shoulders",
        description:
            "Builds shoulder strength and mass, can be done with dumbbells or a barbell.",
        image:
            "https://barbend.com/wp-content/uploads/2023/04/Barbend.com-A-person-doing-a-shoulder-press.jpg",
        machine: "Shoulder Press Machine",
    },
    {
        id: 10,
        title: "Plank",
        difficulty: 1,
        category: "Core",
        description:
            "Engages core muscles, helps improve stability and strength.",
        image:
            "https://hips.hearstapps.com/hmg-prod/images/hdm119918mh15842-1545237096.png",
        machine: null,
    },
];

const RutinesView = (props) => {
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

    const handleEditExercise = (id, updatedExercise) => {
        setFormValues({
            ...formValues,
            exercices: formValues.exercices.map(exercise =>
                exercise.id === id ? updatedExercise : exercise
            )
        });
    };

    const handleAddExercise = (newExercise) => {
        setFormValues({
            ...formValues,
            exercices: [...formValues.exercices, newExercise]
        });
    };

    const handleDeleteExercise = (id) => {
        setFormValues({
            ...formValues,
            exercices: formValues.exercices.filter(exercise => exercise.id !== id)
        });
    };

    const handleDelete = () => {
        toast.success('Rutina eliminada con éxito');
        console.log(formValues);
    }

    const navigate = useNavigate()

    return (
        <>
            <div className='w-full h-full flex relative w-200 item-center justify-start'>
                <button className='fixed bottom-[50%] left-5 bg-gray-100' onClick={() => navigate('/rutines')}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg></button>
            </div>
            <div className="bg-gray-100 p-2">
                <div className="max-w-5xl mx-auto p-4 min-h-screen flex flex-col rounded-lg shadow-md bg-slate-700">
                    <div className="bg-slate-800 p-4 flex items-center justify-between">
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

                    <div className="flex-grow p-6 text-white">
                        <p className="font-semibold">Categoria</p>
                        {isEditing ? (
                            <input
                                type="text"
                                className="mb-4 p-2 text-black w-full border-2 border-gray-300 rounded"
                                name="category"
                                value={formValues.category}
                                onChange={handleChange}
                            />
                        ) : (
                            <p className="mb-4 text-white">{rutine.category}</p>
                        )}

                        <hr className="mt-2" />

                        <p className="font-semibold text-white">Descripción</p>
                        {isEditing ? (
                            <textarea
                                className="mb-4 p-2 text-black w-full border-2 border-gray-300 rounded"
                                name="description"
                                value={formValues.description}
                                onChange={handleChange}
                            />
                        ) : (
                            <p className="mb-4 text-white">{rutine.description}</p>
                        )}
                        <hr className="mt-2" />
                        <p className="font-semibold text-white">Duración</p>
                        {isEditing ? (
                            <input
                                type="number"
                                className="mb-4 p-2 text-black w-full border-2 border-gray-300 rounded"
                                name="duration"
                                value={formValues.duration}
                                onChange={handleChange}
                            />
                        ) : (
                            <p className="mb-4 text-white">{rutine.duration} minutos</p>
                        )}
                        <hr className="mt-2" />
                        <p className="font-semibold text-white">Dificultad</p>
                        {isEditing ? (
                            <input
                                className="mb-4 p-2 text-black w-full border-2 border-gray-300 rounded"
                                name="difficulty"
                                value={formValues.difficulty}
                                onChange={handleChange}
                            />
                        ) : (
                            <p className="mb-4 text-white">{rutine.difficulty}</p>
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
                        <hr className="mt-2" />
                        <p className="font-semibold text-white">Ejercicios</p>
                        <div className="flex flex-wrap gap-8 justify-center">
                            {formValues.exercices.map((exercise) => (
                                <AddExercise
                                    key={exercise.id}
                                    exercise={exercise}
                                    onEdit={handleEditExercise}
                                    onDelete={handleDeleteExercise}
                                />
                            ))}
                        </div>
                        {isEditing && (
                            <>
                                <h3 className="text-xl text-white font-semibold mb-4">Agregar ejercicios</h3>
                                <div className="flex flex-wrap gap-6 justify-center">
                                    {exercises.map((exercise) => (
                                        <ExerciseCard
                                            key={exercise.id}
                                            exercise={exercise}
                                            onAdd={() => handleAddExercise(exercise)}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                    <div className="p-4 flex justify-end mt-auto">
                        {isEditing ? (
                            <>
                                <button
                                    className="bg-yellow-400 text-gray-800 py-2 px-4 rounded-full font-semibold cursor-pointer border-none mr-2"
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
                </div>
            </div>
        </>
    );
};

export default RutinesView;