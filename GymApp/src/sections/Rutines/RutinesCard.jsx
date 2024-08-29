import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import MachineIcon from "../../assets/MachineIcon";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff0a0a",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const RutinesCard = ({ rutine, handleView, hasMachineExercise }) => {

  return (
    <div className="w-full max-w-3xl mb-4 bg-slate-700 rounded-xl shadow-lg shadow-slate-950 overflow-hidden text-white flex flex-col">
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-orange-500 uppercase">
            {rutine.name}
          </h3>
          <div className="flex items-center">
            {
              hasMachineExercise && (
                <MachineIcon/>
              )
            }
            <button
              className="ml-4 bg-gray-800 text-white py-2 px-5 rounded-full font-semibold cursor-pointer border-none"
              onClick={() => handleView(rutine)}>
              VER MÁS
            </button>
          </div>
        </div>

        <div className="my-3 border-b border-yellow-400 border-[1px]"></div>

        <div className="flex justify-center items-center mt-4 space-x-10">
          <div className="bg-gray-300 text-gray-800 flex justify-center items-center py-2 px-4 font-semibold w-52 text-center border-b-4 border-gray-500 rounded-tl-lg rounded-bl-lg border-r-4 border-l-0 shadow-md">
            Dificultad: <div className="flex text-xl ml-2">
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
                <WhatshotIcon
                  fontSize="inherit"
                  style={{ opacity: 0.7 }}
                />
              }
              max={3}
            />
          </div>
          </div>
          <div className="bg-gray-300 text-gray-800 py-2 px-4 font-semibold w-52 text-center ml-2 border-b-4 border-gray-500 rounded-tr-lg rounded-br-lg border-l-4 border-t-0 shadow-md">
            Duración: {rutine.duration >= 60 ? `${Math.floor(rutine.duration / 60)} h ${rutine.duration % 60} min` : `${rutine.duration} min`}
          </div>
        </div>

      </div>
    </div>
  );
};

RutinesCard.propTypes = {
  rutine: PropTypes.object.isRequired,
  handleView: PropTypes.func.isRequired,
  hasMachineExercise: PropTypes.bool
};

export default RutinesCard;
