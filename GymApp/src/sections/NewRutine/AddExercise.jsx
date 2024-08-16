import PropTypes from "prop-types";

const AddExercise = ({ exercise }) => {

    return (

        <div className="relative h-[200px] w-[160px]">
            <img src={exercise.image} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center bg-black/50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <div className="flex w-full justify-end p-1">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <h4 className="font-semibold text-white">{exercise.title}</h4>
                <p className="text-justif w-full p-1 text-sm text-white">{exercise.description}</p>

                <div className="mt-4 flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-barbell">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M2 12h1" />
                        <path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2" />
                        <path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
                        <path d="M9 12h6" />
                        <path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z" />
                        <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2" />
                        <path d="M22 12h-1" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

AddExercise.propTypes = {
    exercise: PropTypes.object.isRequired,
  
  };

export default AddExercise;