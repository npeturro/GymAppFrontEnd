import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import { useNewRoutine } from "../../contexts/NewRoutineContext";
import MachineIconMini from "../../assets/MachineIconMini";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff0a0a",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const ExerciseCard = ({ exercise, setNewRoutine, ExercisesNewRoutine }) => {
  const [Series, setSeries] = useState(1);
  const { addExerciseToNewRoutine } = useNewRoutine();

  const handleAddExercise = (e) => {
    e.preventDefault();
    addExerciseToNewRoutine({ ...exercise, set: Series }, ExercisesNewRoutine, setNewRoutine);
  };

  return (
    <div className="h-[280px] w-[200px] bg-slate-700 rounded-xl shadow-lg shadow-slate-950 overflow-hidden text-white">
      <div className="w-full flex justify-end">
        <div className="bg-yellow-400 p-2 h-6 flex items-center justify-end rounded-es-2xl">
          <div className="flex p-1 text-xl">
            <StyledRating
              className="font-black"
              name="customized-color"
              defaultValue={exercise.difficulty}
              getLabelText={(value) =>
                `${value} Flame${value !== 1 ? "s" : ""}`
              }
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

      <div className="p-2">
        <h3 className="text-sm font-bold text-[#F97316] uppercase">
          {exercise.name}
        </h3>
        <HtmlTooltip
          name={
            <React.Fragment>
              <h4 className="font-bold uppercase text-[10px]">
                {exercise.name}
              </h4>
              <p className="text-[10px]">{exercise.description}</p>
            </React.Fragment>
          }>
          <img
            src={exercise.imageUrl}
            alt=""
            className="h-[75px] w-full object-cover rounded-md my-1 cursor-help"
          />
        </HtmlTooltip>
        <div className="flex justify-between items-center">

          <h4 className="font-bold text-xs">{exercise.category}</h4>

         {exercise.machine && <MachineIconMini />}
        </div>
        <div className="my-1 bg-white min-h-[1px]"></div>

        <div className="text-black flex-col">
          <div className="flex justify-between mb-1">
            <label className="text-white font-semibold text-xs mr-1">
              Repeticiones:{" "}
            </label>
            <select className="rounded-xl p-1 bg-orange-500 font-bold text-white">
              <option value="">10</option>
            </select>
          </div>
          <div className="flex justify-between">
            <label className="text-white font-semibold text-xs mr-1">
              Series:{" "}
            </label>
            <select
              value={Series}
              onChange={(e) => setSeries(e.target.value)}
              className="rounded-xl p-1 bg-orange-500 font-bold text-white">
              <option value="1">1</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="8">8</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
      </div>

      <div className="w-full h-12 rounded-t-3xl bg-yellow-400 flex justify-center items-center">
        <button
          onClick={handleAddExercise}
          className="bg-slate-700 text-white py-1 px-3 rounded-full font-semibold hover:bg-slate-600 active:bg-slate-500">
          Añadir a la rutina
        </button>
      </div>
    </div>
  );
};

ExerciseCard.propTypes = {
  exercise: PropTypes.object.isRequired,
  setNewRoutine: PropTypes.func.isRequired,
  ExercisesNewRoutine: PropTypes.array.isRequired,
};

export default ExerciseCard;
