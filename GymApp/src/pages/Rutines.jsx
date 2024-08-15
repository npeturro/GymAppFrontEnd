import RutinesCard from "../sections/Rutines/RutinesCard";
const Rutines = () => {
    const rutines = [
        {
            id: 1,
            title: "Biceps",
            difficulty: 3,
            category: "Legs",
            description: "Targets quads, hamstrings, glutes, and core. Improves strength and stability.",
            duration: "50",
            exercices: [
                {
                    id: 1,
                    title: "Squats",
                    difficulty: 3,
                    category: "Legs",
                    description: "Targets quads, hamstrings, glutes, and core. Improves strength and stability.",
                },
                {
                    id: 2,
                    title: "Lunges",
                    difficulty: 2,
                    category: "Legs",
                    description: "Strengthens quads, hamstrings, and glutes. Enhances balance and coordination.",
                },
            ],
        },
        {
            id: 2,
            title: "Chest Workout",
            difficulty: 4,
            category: "Upper Body",
            description: "Focuses on the chest muscles. Builds strength and muscle mass in the upper body.",
            duration: "45",
            exercices: [
                {
                    id: 1,
                    title: "Bench Press",
                    difficulty: 4,
                    category: "Upper Body",
                    description: "Targets the chest, shoulders, and triceps. Great for building upper body strength.",
                },
                {
                    id: 2,
                    title: "Push-Ups",
                    difficulty: 3,
                    category: "Upper Body",
                    description: "Strengthens the chest, shoulders, and triceps. Can be modified to increase difficulty.",
                },
                {
                    id: 3,
                    title: "Dumbbell Flyes",
                    difficulty: 3,
                    category: "Upper Body",
                    description: "Focuses on the chest muscles. Helps in expanding the chest and improving muscle definition.",
                }
            ],
        },
        {
            id: 3,
            title: "Back Workout",
            difficulty: 4,
            category: "Upper Body",
            description: "Strengthens the back muscles. Improves posture and overall back strength.",
            duration: "50",
            exercices: [
                {
                    id: 1,
                    title: "Pull-Ups",
                    difficulty: 4,
                    category: "Upper Body",
                    description: "Targets the upper back, biceps, and shoulders. Effective for building upper body strength.",
                },
                {
                    id: 2,
                    title: "Rows",
                    difficulty: 3,
                    category: "Upper Body",
                    description: "Strengthens the middle back and improves posture. Can be done with dumbbells or barbells.",
                },
                {
                    id: 3,
                    title: "Lat Pulldowns",
                    difficulty: 3,
                    category: "Upper Body",
                    description: "Focuses on the latissimus dorsi muscles in the back. Helps in building a V-shaped torso.",
                }
            ],
        },
        {
            id: 4,
            title: "Core Workout",
            difficulty: 3,
            category: "Core",
            description: "Engages the core muscles. Improves core strength and stability.",
            duration: "30",
            exercices: [
                {
                    id: 1,
                    title: "Planks",
                    difficulty: 2,
                    category: "Core",
                    description: "Strengthens the entire core. Improves stability and endurance.",
                },
                {
                    id: 2,
                    title: "Russian Twists",
                    difficulty: 3,
                    category: "Core",
                    description: "Targets the obliques and improves rotational strength.",
                },
            ],
        },
    ];


    return (

        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-6">
            <h1 className="text-4xl font-bold text-gray-800 mb-10">Listado de rutinas</h1>
            <RutinesCard rutines={rutines} />
        </div>

    );
};

export default Rutines;