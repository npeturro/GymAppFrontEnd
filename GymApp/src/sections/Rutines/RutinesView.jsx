import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ExerciseCard from "../NewRutine/ExerciseCard";
import { toast } from "sonner";
import AddExercise from "../NewRutine/AddExercise";
import { GetAll } from "../../components/fetch";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const RutinesView = () => {

    const [exercises, setExercises] = useState([])

    useEffect(() => {
        const fetchDatos = async () => {
            const datos = await GetAll("Exercise");
            setExercises(datos || "");
        }
        fetchDatos();
    }, [])

    const location = useLocation();
    const { state } = location;
    const navigate = useNavigate();

    const [rutine, setRutine] = useState(state.rutine);
    const [formValues, setFormValues] = useState(state.rutine);
    const [errors, setErrors] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [ExercisesRoutine, setNewRoutine] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filterExercise, setFilterExercise] = useState([]);

    useEffect(() => {
        const fetchRoutineExercises = async () => {
          setIsLoading(true);
          await new Promise(resolve => setTimeout(resolve, 1000));
          setNewRoutine(rutine.setExercises);
          setIsLoading(false);
        };
      
        fetchRoutineExercises();
      }, []);

    useEffect(() => {
        // Filtra los ejercicios basados en ExercisesRoutine
        const updatedFilterExercises = exercises
            .map((exercise) => {
                // Encuentra el ejercicio correspondiente en ExercisesRoutine
                const routineExercise = ExercisesRoutine.find((e) => e.idExercise === exercise.id);

                if (routineExercise) {
                    // Devuelve el ejercicio con el set correspondiente
                    return {
                        ...exercise,
                        set: routineExercise.set
                    };
                }
                return null;
            })
            .filter((exercise) => exercise !== null); // Elimina los ejercicios que no coinciden

        // Actualiza el estado con los ejercicios y el set correspondiente
        setFilterExercise(updatedFilterExercises);
    }, [ExercisesRoutine, exercises]); // Ejecutar el efecto cuando ExercisesRoutine o exercises cambian


    const validate = () => {
        const newErrors = {};
        if (!formValues.name) newErrors.name = "El nombre es obligatorio";
        if (!formValues.description)
            newErrors.description = "La descripción es obligatoria";
        //if (!formValues.duration) newErrors.duration = "La duración es obligatoria";
        //if (!formValues.difficulty)
            //newErrors.difficulty = "La dificultad es obligatoria";
        if (filterExercise.length < 3)
            newErrors.setExercises = "Debe agregar al menos 3 ejercicios";
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSave = async () => {
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            const updatedRutine = {
                ...formValues,
                setExercises: ExercisesRoutine,
            };
            setRutine(updatedRutine);
            setIsEditing(false);
            
            const datosPut = {
                id: updatedRutine.id,
                name: updatedRutine.name,
                description: updatedRutine.description,
                duration: 0,
                difficulty: 0,
                setExercises: filterExercise.map(e => (
                    {
                        id: e.id,
                        idRoutine: updatedRutine.id,
                        idExercise: e.id,
                        set: e.set
                    }
                )),
            }
            
            try {
                const response = await axios.put(`http://gymapp-api.ddns.net/api/Routine/${updatedRutine.id}`, datosPut)
                console.log('Respuesta del servidor:', response.data);
                setRutine(updatedRutine);
                setIsEditing(false);
                toast.success("Rutina guardada con éxito");
            } catch (error) {
                toast.error('Error al querer agregar la nueva rutina')
                console.error('Error al enviar los datos:', error);
            }
        }

    };

    const handleCancel = () => {
        setFormValues(rutine);
        setNewRoutine(rutine.setExercises);
        setIsEditing(false);
        setErrors({});
    };

    const handleDelete = () => {
        toast.success("Rutina eliminada con éxito");
        navigate("/rutines");
    };

    return (
        <>
            <div className="w-full h-full flex relative w-200 item-center justify-start">
                <button
                    className="fixed bottom-[50%] left-5 bg-gray-100"
                    onClick={() => navigate("/rutines")}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M15 6l-6 6l6 6" />
                    </svg>
                </button>
            </div>
            <div className="bg-gray-100 p-2">
                <div className="max-w-5xl mx-auto p-4 min-h-screen flex flex-col rounded-lg shadow-md bg-slate-700">
                    <div className="bg-slate-800 p-4 flex items-center justify-between">
                        {isEditing ? (
                            <>
                                <input
                                    className="text-lg font-bold text-orange-500 uppercase bg-transparent border-b-2 border-orange-500 focus:outline-none"
                                    name="name"
                                    value={formValues.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <p className="text-red-500">{errors.name}</p>}
                            </>
                        ) : (
                            <h3 className="text-lg font-bold text-orange-500 uppercase">
                                {rutine.name}
                            </h3>
                        )}
                    </div>

                    <div className="flex-grow p-6 text-white">

                        <hr className="mt-2" />

                        <p className="font-semibold text-white">Descripción</p>
                        {isEditing ? (
                            <>
                                <textarea
                                    className="mb-4 p-2 text-black w-full border-2 border-gray-300 rounded"
                                    name="description"
                                    value={formValues.description}
                                    onChange={handleChange}
                                />
                                {errors.description && (
                                    <p className="text-red-500">{errors.description}</p>
                                )}
                            </>
                        ) : (
                            <p className="mb-4 text-white">{rutine.description}</p>
                        )}

                        <hr className="mt-2" />

                        <p className="font-semibold text-white">Duración</p>
                        {isEditing ? (
                            <>
                                <input
                                    type="number"
                                    className="mb-4 p-2 text-black w-full border-2 border-gray-300 rounded"
                                    name="duration"
                                    value={formValues.duration}
                                    onChange={handleChange}
                                />
                                {errors.duration && (
                                    <p className="text-red-500">{errors.duration}</p>
                                )}
                            </>
                        ) : (
                            <p className="mb-4 text-white">{rutine.duration} minutos</p>
                        )}

                        <hr className="mt-2" />

                        <p className="font-semibold text-white">Dificultad</p>
                        {isEditing ? (
                            <>
                                <input
                                    type="number"
                                    className="mb-4 p-2 text-black w-full border-2 border-gray-300 rounded"
                                    name="difficulty"
                                    value={formValues.difficulty}
                                    onChange={handleChange}
                                />
                                {errors.difficulty && (
                                    <p className="text-red-500">{errors.difficulty}</p>
                                )}
                            </>
                        ) : (
                            <p className="mb-4 text-white">{rutine.difficulty}</p>
                        )}

                        <hr className="mt-2" />

                        <p className="font-semibold text-white">Ejercicios</p>
                        <div className="flex flex-wrap justify-center">
                            {isLoading ? <CircularProgress color="inherit" /> : filterExercise.map((exercise) => (
                                <AddExercise
                                    key={exercise.id}
                                    exercise={exercise}
                                    setNewRoutine={setFilterExercise}
                                    view={isEditing}
                                />
                            ))}
                        </div>
                        {/*Señor Peturro esta vvalidacion no se va cuando ya editas*/}
                        {errors.setExercises && (
                            <p className="text-red-500">{errors.setExercises}</p>
                        )}
                        {isEditing && (
                            <>
                                <h3 className="text-xl text-white font-semibold mb-4">
                                    Agregar ejercicios
                                </h3>
                                <div className="flex flex-wrap gap-6 justify-center">
                                    {exercises.map((exercise) => (
                                        <ExerciseCard
                                            key={exercise.id}
                                            exercise={exercise}
                                            setNewRoutine={setFilterExercise}
                                            ExercisesNewRoutine={filterExercise}
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
