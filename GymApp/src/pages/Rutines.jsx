import { useEffect, useState } from "react";
import RutinesList from "../sections/Rutines/RutinesList";
import { useNavigate } from "react-router-dom";
import { GetAll } from "../components/fetch";
const Rutines = () => {

    const rutines = [
        {
            id: 1,
            name: "Biceps",
            difficulty: 3,
            description: "Targets quads, hamstrings, glutes, and core. Improves strength and stability.",
            duration: "50",
            setExercises: [
                {
                    id: 1,
                    name: "Leg Extension",
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
                    name: "Squats",
                    difficulty: 3,
                    category: "Legs",
                    description:
                        "Targets quads, hamstrings, glutes, and core. Improves strength and stability.",
                    image:
                        "https://www.dir.cat/blog/wp-content/uploads/2019/05/video-tutorial-air-squat.jpg",
                    machine: null,
                },
            ],
        },
        {
            id: 2,
            name: "Chest Workout",
            difficulty: 4,
            description: "Focuses on the chest muscles. Builds strength and muscle mass in the upper body.",
            duration: "45",
            setExercises: [
                {
                    id: 3,
                    name: "Bench Press",
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
                    name: "Deadlift",
                    difficulty: 3,
                    category: "Back",
                    description:
                        "Strengthens back, glutes, hamstrings, and core. Enhances overall power.",
                    image:
                        "https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2023/04/Beginner-Deadlift-Workout.jpg?fit=1894%2C1337&ssl=1",
                    machine: null,
                },
            ],
        },
        {
            id: 3,
            name: "Back Workout",
            difficulty: 4,
            description: "Strengthens the back muscles. Improves posture and overall back strength.",
            duration: "50",
            setExercises: [
                {
                    id: 5,
                    name: "Bicep Curl",
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
                    name: "Tricep Dips",
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
                    name: "Pull-Ups",
                    difficulty: 3,
                    category: "Back",
                    description:
                        "Strengthens upper back, shoulders, and arms. Requires bodyweight pulling strength.",
                    image:
                        "https://ironbullstrength.com/cdn/shop/articles/how-to-do-pull-ups-for-a-bigger-and-shredded-back.webp?v=1692300888",
                    machine: null,
                },
            ],
        },
        {
            id: 4,
            name: "Core Workout",
            difficulty: 3,
            description: "Engages the core muscles. Improves core strength and stability.",
            duration: "30",
            setExercises: [
                {
                    id: 1,
                    name: "Planks",
                    difficulty: 2,
                    category: "Core",
                    description: "Strengthens the entire core. Improves stability and endurance.",
                },
                {
                    id: 2,
                    name: "Russian Twists",
                    difficulty: 3,
                    category: "Core",
                    description: "Targets the obliques and improves rotational strength.",
                },
            ],
        },
    ];

    const [routine, setRoutine] = useState([])

    useEffect(()=> {
        const fetchDatos = async () => {
            const datos = await GetAll("Routine");
            setRoutine(datos || "");
        }
        fetchDatos();
    }, [])


    const navigate = useNavigate()

    return (
        <>
            <div className='w-full h-full flex relative w-200 item-center justify-start'>
                <button className='fixed bottom-[50%] left-5 bg-gray-100' onClick={() => navigate('/')}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg></button>
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Listado de rutinas</h1>
                <RutinesList rutines={routine} />
            </div>
        </>
    );
};

export default Rutines;