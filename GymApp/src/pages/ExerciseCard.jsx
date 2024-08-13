import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff0a0a",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

//Este objeto se uso de prueba hasta tener los datos desde el BackEnd,
//una vez optenidos esos datos borrar esto y trar los datos por props
const exercise = {
  title: "Leg Extension",
  difficulty: 2,
  category: "Quadriceps",
  description: "Strengthens quadriceps muscles, improves knee stability and flexibility.",
  image: "https://hips.hearstapps.com/hmg-prod/images/strong-young-man-doing-legs-exercise-in-the-gym-royalty-free-image-517308282-1560456961.jpg",
};

const RatingFire = () => {
  return (
    <StyledRating
    className="font-black"
      name="customized-color"
      defaultValue={exercise.difficulty}
      getLabelText={(value) => `${value} Flame${value !== 1 ? "s" : ""}`}
      precision={1}
      readOnly
      icon={<FitnessCenterRoundedIcon fontSize="inherit"/> }
      emptyIcon={
        <FitnessCenterRoundedIcon fontSize="inherit" style={{ opacity: 0.7 }} />
      }
      max={3}
    />
  );
};

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

const ExerciseCard = (/*{exercise}*/) => {

  const [Series, setSeries] = useState(1);
  return (
    <div className="bg-gray-100 w-full min-h-[100vh] flex justify-center items-center">
      <div className="h-[380px] w-[250px] bg-slate-700 rounded-xl shadow-2xl shadow-slate-950 overflow-hidden text-white">
        <div className="w-full flex justify-end">
          <div className="bg-yellow-400 p-3 h-8 flex items-center justify-end rounded-es-2xl">
            <div className="flex p-2 text-3xl">
               <RatingFire/>             
            </div>
          </div>
        </div>

        <div className="p-3">
          <h3 className="text-lg font-bold text-[#F97316] uppercase">
            
              {exercise.title}
          </h3>
          <HtmlTooltip
              title={
                <React.Fragment>
                  <h4 className="font-bold uppercase text-[12px]">{exercise.title}</h4>
                  <p className="text-[12px]">{exercise.description}</p>
                </React.Fragment>
              }>
          <img
            src={exercise.image}
            alt=""
            className="h-[120px] w-full object-cover rounded-md my-1 cursor-help"
          />
          </HtmlTooltip>

          <h4 className="font-bold text-md">{exercise.category}</h4>
          <div className="my-3 bg-white min-h-[1px]"></div>

          <div className="text-black flex-col">
            <div className="flex justify-between  mb-1">
              <label className="text-white font-semibold text-md mr-1">
                Repetitions:{" "}
              </label>
              <select className="rounded-xl p-1 bg-orange-500 font-bold text-white">
                <option value="">10</option>
              </select>
            </div>
            <div className="flex justify-between">
              <label className="text-white font-semibold text-md mr-1">
                Series:{" "}
              </label>
              <select value={Series} onChange={(e) => setSeries(e.target.value)}  className="rounded-xl p-1 bg-orange-500 font-bold text-white" >
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="8">8</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-full h-14 rounded-t-3xl bg-yellow-400 flex justify-center items-center">
          <button className="bg-slate-700 text-white py-1 px-5 rounded-full font-semibold hover:bg-slate-600 active:bg-slate-500">
            Add to Routine
          </button>
        </div>
      </div>
    </div>
  );
};

ExerciseCard.propTypes = {
    exercise: PropTypes.object.isRequired,

};

export default ExerciseCard;
