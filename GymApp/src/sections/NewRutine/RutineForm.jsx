import ExerciseCard from "./ExerciseCard";
import AddExercise from "./AddExercise";
import { useNewRoutine } from "../../contexts/NewRoutineContext";
import { useForm } from "react-hook-form";

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

const RutineForm = () => {
  const { NewRoutine } = useNewRoutine();
  
  const { register, handleSubmit, formState: {errors}} = useForm()
  
  const onSubmit = (data) => {
    
    console.log(data)
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className="p-10 rounded-lg shadow-md bg-slate-800">
        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2">
            Nombre de la Rutina
          </label>
          <input
            type="text"
            {...register('RoutineName', {
                required: true,
                minLength: 5,
                maxLength: 50,
  
            })}
            placeholder="Ingresa el nombre de la rutina"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.RoutineName && "focus:ring-red-500"}`}
          />
          {errors.RoutineName?.type === 'required' && <span className="text-red-500 text-sm font-semibold">El nombre de la rutina es requerido</span>}
          {errors.RoutineName?.type === 'maxLength' && <span className="text-red-500 text-sm font-semibold">El nombre de la rutina no puede superar los 50 caracteres</span>}
          {errors.RoutineName?.type === 'minLength' && <span className="text-red-500 text-sm font-semibold">El nombre de la rutina tiene que tener como minimo 5 caracteres</span>}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-sm font-bold mb-2">
            Descripción
          </label>
          <textarea
            {...register('RoutineDescription',{
                required: true,
                minLength: 10,
                maxLength: 200,
            })}

            placeholder="Describe la rutina"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.RoutineDescription && "focus:ring-red-500"}`}
            rows="4"
          />
          {errors.RoutineDescription?.type === 'required' && <span className="text-red-500 text-sm font-semibold">La descripcion de la rutina es requerida</span>}
          {errors.RoutineDescription?.type === 'maxLength' && <span className="text-red-500 text-sm font-semibold">La descripcion de la rutina no puede superar los 200 caracteres</span>}
          {errors.RoutineDescription?.type === 'minLength' && <span className="text-red-500 text-sm font-semibold">La descripcion de la rutina tiene que tener como minimo 10 caracteres</span>}
        </div>

        <hr className="mb-2 mt-8" />

        <div className="mb-4">
          <h3 className="text-xl text-white font-semibold mb-2">Ejercicios agregados</h3>

          <div className="flex flex-wrap gap- justify-center">
            {NewRoutine.map((exercise) => (
              <AddExercise key={exercise.id} exercise={exercise} />
            ))}
          </div>
        </div>
        <hr className="mb-2 mt-8" />

        <h3 className="text-xl text-white font-semibold mb-4">Lista de Ejercicios</h3>
        <div className="flex flex-wrap gap-6 justify-center">
          {exercises.map((exercise) => (
            <ExerciseCard key={exercise.id} exercise={exercise} />
          ))}
        </div>

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
