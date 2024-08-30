import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ExerciseCard from "../NewRutine/ExerciseCard";
import { toast } from "sonner";
import AddExercise from "../NewRutine/AddExercise";
import { GetAll, Delete } from "../../components/fetch";
import axios from "axios";
import { CircularProgress, LinearProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useGET } from "../../components/useGET";

const RutinesView = () => {
  const [Exercises, ExercisesLoading, ExerciseError] = useGET("Exercise");

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
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setNewRoutine(rutine.setExercises);
      setIsLoading(false);
    };

    fetchRoutineExercises();
  }, []);

  useEffect(() => {
    // Filtra los ejercicios basados en ExercisesRoutine
    const updatedFilterExercises = Exercises.map((exercise) => {
      // Encuentra el ejercicio correspondiente en ExercisesRoutine
      const routineExercise = ExercisesRoutine.find(
        (e) => e.idExercise === exercise.id
      );

      if (routineExercise) {
        // Devuelve el ejercicio con el set correspondiente
        return {
          ...exercise,
          set: routineExercise.set,
        };
      }
      return null;
    }).filter((exercise) => exercise !== null); // Elimina los ejercicios que no coinciden

    // Actualiza el estado con los ejercicios y el set correspondiente
    setFilterExercise(updatedFilterExercises);
  }, [ExercisesRoutine, Exercises]); // Ejecutar el efecto cuando ExercisesRoutine o exercises cambian

  const validate = () => {
    const newErrors = {};
    if (!formValues.name) newErrors.name = "El nombre es obligatorio";
    if (!formValues.description)
      newErrors.description = "La descripción es obligatoria";
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
        setExercises: filterExercise.map((e) => ({
          id: e.id,
          idRoutine: updatedRutine.id,
          idExercise: e.id,
          set: e.set,
        })),
      };

      try {
        const response = await axios.put(
          `http://gymapp-api.ddns.net/api/Routine/${updatedRutine.id}`,
          datosPut
        );
        console.log("Respuesta del servidor:", response.data);
        setRutine(updatedRutine);
        setIsEditing(false);
        toast.success("Rutina guardada con éxito");
        setErrors({});
        // navigate("/rutines");
      } catch (error) {
        toast.error("Error al querer agregar la nueva rutina");
        console.error("Error al enviar los datos:", error);
      }
    }
  };

  const handleCancel = () => {
    setFormValues(rutine);
    setNewRoutine(rutine.setExercises);
    setIsEditing(false);
    setErrors({});
  };

  const handleDelete = async () => {
    console.log(rutine.id);
    // navigate("/rutines");
    try {
      await Delete("Routine", rutine.id);
      toast.success("Rutina eliminada con éxito");
      navigate("/rutines");
    } catch (error) {
      console.error("Error eliminando la rutina:", error);
      toast.error(
        "Hubo un error al eliminar la rutina. Por favor, intenta de nuevo."
      );
    }
  };

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#ff0a0a",
    },
    "& .MuiRating-iconHover": {
      color: "#ff3d47",
    },
  });

  return (
    <>
      <div className="w-full h-full flex relative w-200 item-center justify-start">
        <button
          className="fixed bottom-[50%] left-5 bg-gray-100 text-black"
          onClick={() => navigate("/rutines")}>
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 6l-6 6l6 6" />
          </svg>
        </button>
      </div>
      <div className="bg-gray-100 p-2">
        <div className="max-w-5xl mx-auto p-6 min-h-screen flex flex-col rounded-lg shadow-lg bg-gradient-to-br from-gray-800 to-slate-700">
          <div className="bg-slate-900 p-6 rounded-t-lg flex items-center justify-between">
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
              <h3 className="text-2xl font-bold text-orange-500 uppercase">
                {rutine.name}
              </h3>
            )}
          </div>

          <div className="flex-grow p-6 text-white space-y-4">
            <hr className="border-gray-600" />

            <p className="font-semibold text-orange-400">Descripción</p>
            {isEditing ? (
              <>
                <textarea
                  className="mb-4 p-2 bg-white text-black w-full border-2 border-gray-300 rounded"
                  name="description"
                  value={formValues.description}
                  onChange={handleChange}
                />
                {errors.description && (
                  <p className="text-red-500">{errors.description}</p>
                )}
              </>
            ) : (
              <p className="text-gray-300 bg-gradient-to-r from-slate-800 to-gray-700 p-4 rounded-md border-l-4 border-orange-500">
                {rutine.description}
              </p>
            )}

            <hr className="border-gray-600" />

            <p className="font-semibold text-orange-400">Duración</p>
            {isEditing ? (
              <>
                <input
                  type="number"
                  className="mb-4 p-2 bg-white text-black w-full border-2 border-gray-300 rounded"
                  name="duration"
                  value={formValues.duration}
                  onChange={handleChange}
                  disabled
                />
                {errors.duration && (
                  <p className="text-red-500">{errors.duration}</p>
                )}
              </>
            ) : (
              <p className="text-white text-xl  font-bold">
                {rutine.duration >= 60
                  ? `${Math.floor(rutine.duration / 60)} h ${
                      rutine.duration % 60
                    } min`
                  : `${rutine.duration} min`}
              </p>
            )}

            <hr className="border-gray-600" />

            <p className="font-semibold text-orange-400">Dificultad</p>
            {isEditing ? (
              <>
                <input
                  type="number"
                  className="mb-4 p-2 bg-white text-black w-full border-2 border-gray-300 rounded"
                  name="difficulty"
                  value={formValues.difficulty}
                  onChange={handleChange}
                  disabled
                />
                {errors.difficulty && (
                  <p className="text-red-500">{errors.difficulty}</p>
                )}
              </>
            ) : (
              <div className="flex text-xl ml-2">
                <StyledRating
                  className="font-black"
                  name="customized-color"
                  defaultValue={rutine.difficulty}
                  getLabelText={(value) =>
                    `${value} Flame${value !== 1 ? "s" : ""}`
                  }
                  precision={1}
                  readOnly
                  icon={<WhatshotIcon fontSize="inherit" />}
                  emptyIcon={
                    <WhatshotIcon fontSize="inherit" style={{ opacity: 0.7 }} />
                  }
                  max={3}
                />
              </div>
            )}

            <hr className="border-gray-600" />

            <p className="font-semibold text-orange-400">Ejercicios</p>
            <div className="flex flex-wrap justify-center pt-4">
              {isLoading ? (
                <CircularProgress color="inherit" />
              ) : (
                filterExercise.map((exercise) => (
                  <AddExercise
                    key={exercise.id}
                    exercise={exercise}
                    setNewRoutine={setFilterExercise}
                    view={isEditing}
                  />
                ))
              )}
            </div>
            {errors.setExercises && (
              <p className="text-red-500">{errors.setExercises}</p>
            )}
            {isEditing && (
              <>
                <h3 className="text-xl text-white font-semibold mb-4">
                  Agregar ejercicios
                </h3>
                {ExercisesLoading ? (
                  <LinearProgress color="inherit" />
                ) : (
                  <div className="flex flex-wrap gap-6 justify-center">
                    {Exercises.map((exercise) => (
                      <ExerciseCard
                        key={exercise.id}
                        exercise={exercise}
                        setNewRoutine={setFilterExercise}
                        ExercisesNewRoutine={filterExercise}
                      />
                    ))}
                    {ExerciseError && (
                      <div className="text-red-500 text-center text-sm mb-4">
                        Hubo un error al cargar los ejercicios
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>

          <div className="p-4 flex justify-end mt-auto">
            {isEditing ? (
              <>
                <button
                  className="bg-yellow-400 text-gray-800 py-2 px-4 rounded-full font-semibold cursor-pointer border-none mr-2"
                  onClick={handleSave}>
                  Guardar
                </button>
                <button
                  className="bg-gray-400 text-gray-800 py-2 px-4 rounded-full font-semibold cursor-pointer border-none mr-2"
                  onClick={handleCancel}>
                  Cancelar
                </button>
              </>
            ) : (
              <button
                className="bg-yellow-400 text-gray-800 py-2 px-4 rounded-full font-semibold cursor-pointer border-none mr-2"
                onClick={() => setIsEditing(true)}>
                Editar
              </button>
            )}
            <button
              className="bg-gray-600 text-white py-2 px-4 rounded-full font-semibold cursor-pointer border-none"
              onClick={handleDelete}>
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RutinesView;
