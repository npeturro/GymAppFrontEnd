import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import { IconButton } from "@mui/material";
import { useNewRoutine } from "../../contexts/NewRoutineContext";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff0a0a",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const AddExercise = ({ exercise, setNewRoutine, view = true }) => {

  const { removeExerciseToNewRoutine } = useNewRoutine();

  return (
    <div className="relative h-[200px] w-[160px]">
      <img src={exercise.imageUrl} alt="" className="h-full w-full object-cover" />
      <div className="absolute inset-0 flex flex-col items-center bg-black/50 opacity-0 transition-opacity duration-300 hover:opacity-100">
        {
          view && (
            <div className="flex w-full justify-end p-1">
              <IconButton aria-label="delete" color="error" onClick={() => removeExerciseToNewRoutine(exercise, setNewRoutine)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ff0000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-x">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 6l-12 12" />
                  <path d="M6 6l12 12" />
                </svg>
              </IconButton>
            </div>
          )
        }

        <h4 className="font-bold text-white">{exercise.name}</h4>
        <p className="font-semibold text-yellow-400">
          SERIES: {exercise.series}
        </p>
        <div className="mt-4 flex gap-3">
          <StyledRating
            className="font-black"
            name="customized-color"
            defaultValue={exercise.difficulty}
            getLabelText={(value) => `${value} Flame${value !== 1 ? "s" : ""}`}
            precision={1}
            readOnly
            icon={<FitnessCenterRoundedIcon fontSize="inherit" />}
            emptyIcon={
              <FitnessCenterRoundedIcon
                fontSize="inherit"
                style={{ opacity: 0.7 }}
              />
            }
            max={3}
          />
        </div>
      </div>
    </div>
  );
};

AddExercise.propTypes = {
  exercise: PropTypes.object.isRequired,
  setNewRoutine: PropTypes.func.isRequired,
  view: PropTypes.bool,
};

export default AddExercise;