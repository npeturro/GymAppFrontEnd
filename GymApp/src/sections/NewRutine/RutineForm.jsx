import ExerciseCard from "./ExerciseCard";
import AddExercise from "./AddExercise";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { GetAll } from "../../components/fetch";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate } from "react-router-dom";

const RutineForm = () => {
  const navigate = useNavigate();
  
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDatos = async () => {
      setIsLoading(true);
      const datos = await GetAll("Exercise");
      setExercises(datos);
      setIsLoading(false);
    };
    fetchDatos();
  }, []);

  const [ExercisesNewRoutine, setNewRoutine] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const exercisesErrorRef = useRef(null);

  useEffect(() => {
    if (hasSubmitted) {
      if (ExercisesNewRoutine.length < 3) {
        exercisesErrorRef.current.scrollIntoView({ behavior: "smooth" });
        setError("ExercisesNewRoutine", {
          type: "manual",
          message: "Debes agregar al menos 3 ejercicios a la rutina",
        });
      } else {
        clearErrors("ExercisesNewRoutine");
      }
    }
  }, [ExercisesNewRoutine, setError, clearErrors, hasSubmitted]);

  const onSubmit = async (data) => {
    setHasSubmitted(true);

    if (ExercisesNewRoutine.length < 3) {
      setError("ExercisesNewRoutine", {
        type: "manual",
        message: "Debes agregar al menos 3 ejercicios a la rutina",
      });
      return;
    }

    try {
      const response = await axios.post(
        "http://gymapp-api.ddns.net/api/Routine",
        {
          name: data.RoutineName,
          description: data.RoutineDescription,
          exerciseList: ExercisesNewRoutine.map((e) => ({
            idExercise: e.id,
            set: e.series,
          })),
        }
      );
      toast.success("Rutina creada con exito");
      const rutine = response.data;
      navigate('/rutines/view', { state: { rutine } })
    } catch (error) {
      toast.error("Error al querer agregar la nueva rutina");
      console.error("Error al enviar los datos:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-10 rounded-lg shadow-md bg-slate-800 xl:min-w-[1000px]">
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2">
            Nombre de la Rutina
          </label>
          <input
            type="text"
            {...register("RoutineName", {
              required: true,
              minLength: 5,
              maxLength: 50,
            })}
            placeholder="Ingresa el nombre de la rutina"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.RoutineName && "focus:ring-red-500"
            }`}
          />
          {errors.RoutineName?.type === "required" && (
            <span className="text-red-500 text-sm font-semibold">
              El nombre de la rutina es requerido
            </span>
          )}
          {errors.RoutineName?.type === "maxLength" && (
            <span className="text-red-500 text-sm font-semibold">
              El nombre de la rutina no puede superar los 50 caracteres
            </span>
          )}
          {errors.RoutineName?.type === "minLength" && (
            <span className="text-red-500 text-sm font-semibold">
              El nombre de la rutina tiene que tener como minimo 5 caracteres
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2">
            Descripción
          </label>
          <textarea
            {...register("RoutineDescription", {
              required: true,
              minLength: 10,
              maxLength: 200,
            })}
            placeholder="Describe la rutina"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.RoutineDescription && "focus:ring-red-500"
            }`}
            rows="4"
          />
          {errors.RoutineDescription?.type === "required" && (
            <span className="text-red-500 text-sm font-semibold">
              La descripcion de la rutina es requerida
            </span>
          )}
          {errors.RoutineDescription?.type === "maxLength" && (
            <span className="text-red-500 text-sm font-semibold">
              La descripcion de la rutina no puede superar los 200 caracteres
            </span>
          )}
          {errors.RoutineDescription?.type === "minLength" && (
            <span className="text-red-500 text-sm font-semibold">
              La descripcion de la rutina tiene que tener como minimo 10
              caracteres
            </span>
          )}
        </div>

        <hr className="mb-2 mt-8" />

        <div className="mb-4">
          <h3
            className="text-xl text-white font-semibold mb-2"
            ref={exercisesErrorRef}>
            Ejercicios agregados
          </h3>
          {errors.ExercisesNewRoutine && (
            <span className="text-red-500 text-sm font-semibold">
              Debes agregar al menos 3 ejercicios a la rutina
            </span>
          )}

          <div className="flex flex-wrap gap- justify-center">
            {ExercisesNewRoutine.length < 1 ? (
              <div
                className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 w-full text-center"
                role="alert">
                <p>No hay ejercicios agregados</p>
              </div>
            ) : (
              ExercisesNewRoutine.map((exercise) => (
                <AddExercise
                  key={exercise.id}
                  exercise={exercise}
                  setNewRoutine={setNewRoutine}
                />
              ))
            )}
          </div>
        </div>
        <hr className="mb-2 mt-8" />

        <h3 className="text-xl text-white font-semibold mb-4">
          Lista de Ejercicios
        </h3>
        {isLoading ? (
          <LinearProgress color="inherit" />
        ) : (
          <div className="flex flex-wrap gap-6 justify-center">
            {exercises.map((exercise) => (
              <ExerciseCard
                key={exercise.id}
                exercise={exercise}
                setNewRoutine={setNewRoutine}
                ExercisesNewRoutine={ExercisesNewRoutine}
              />
            ))}
          </div>
        )}
        <button
          type="submit"
          className="mt-6 w-full px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-400 active:bg-orange-300">
          Crear Rutina
        </button>
      </form>
    </div>
  );
};

export default RutineForm;
