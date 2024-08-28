import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import WhatshotIcon from '@mui/icons-material/Whatshot';
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#ff0a0a",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
});

const RutinesCard = ({ rutine, handleView, hasMachineExercise }) => {

  console.log(rutine)

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
                <svg
                  fill="#f97316"
                  height="30px"
                  width="30px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 503.607 503.607"
                  xmlSpace="preserve">
                  <g transform="translate(1 1)">
                    <g>
                      <g stroke="#f97316" strokeWidth="10">
                        <path
                          d="M473.229,53.557c-5.043,0-9.833,1.346-14.028,3.687c-3.865-11.742-15.081-20.474-27.939-20.474
                                c-15.948,0-29.377,13.43-29.377,29.377v12.59H99.721v-12.59c0-15.948-13.43-29.377-29.377-29.377
                                c-12.858,0-24.074,8.733-27.939,20.474c-4.195-2.341-8.984-3.687-14.028-3.687C12.429,53.557-1,66.987-1,82.934v41.967
                                c0,15.948,13.43,29.377,29.377,29.377c5.043,0,9.833-1.346,14.028-3.687c3.865,11.742,15.081,20.474,27.939,20.474
                                c15.948,0,29.377-13.43,29.377-29.377v-12.59h16.787v25.18c0,5.036,3.357,8.393,8.393,8.393h8.393v293.771
                                c0,5.036,3.357,8.393,8.393,8.393c4.197,0,8.393-3.357,8.393-8.393V162.672h8.393c4.197,0,8.393-3.357,8.393-8.393v-25.18
                                h167.869v25.18c0,5.036,3.357,8.393,8.393,8.393h8.393v293.771c0,5.036,3.357,8.393,8.393,8.393c4.197,0,8.393-3.357,8.393-8.393
                                V162.672h8.393c4.197,0,8.393-3.357,8.393-8.393v-25.18h16.787v12.59c0,15.948,13.43,29.377,29.377,29.377
                                c12.858,0,24.074-8.733,27.939-20.474c4.195,2.341,8.984,3.687,14.028,3.687c15.948,0,29.377-13.43,29.377-29.377V82.934
                                C502.607,66.987,489.177,53.557,473.229,53.557z M28.377,137.492c-6.715,0-12.59-5.875-12.59-12.59V82.934
                                c0-6.715,5.875-12.59,12.59-12.59s12.59,5.875,12.59,12.59v41.967C40.967,131.616,35.092,137.492,28.377,137.492z
                                M82.934,141.689c0,6.715-5.875,12.59-12.59,12.59c-6.715,0-12.59-5.875-12.59-12.59v-16.787V82.934V66.148
                                c0-6.715,5.875-12.59,12.59-12.59c6.715,0,12.59,5.875,12.59,12.59v20.984v33.574V141.689z M150.082,145.885h-16.787v-16.787
                                h16.787V145.885z M368.311,145.885h-16.787v-16.787h16.787V145.885z M376.705,112.311h-33.574H158.475h-33.574h-25.18V95.525
                                h302.164v16.787H376.705z M443.852,141.689c0,6.715-5.875,12.59-12.59,12.59c-6.715,0-12.59-5.875-12.59-12.59v-20.984V87.131
                                V66.148c0-6.715,5.875-12.59,12.59-12.59c6.715,0,12.59,5.875,12.59,12.59v16.787v41.967V141.689z M485.82,124.902
                                c0,6.715-5.875,12.59-12.59,12.59c-6.715,0-12.59-5.875-12.59-12.59V82.934c0-6.715,5.875-12.59,12.59-12.59
                                c6.715,0,12.59,5.875,12.59,12.59V124.902z"
                        />
                        <path
                          d="M309.557,288.574H192.049c-14.269,0-25.18,10.911-25.18,25.18c0,11.302,6.849,20.492,16.787,23.827v118.862
                                c0,5.036,3.357,8.393,8.393,8.393s8.393-3.357,8.393-8.393V338.934h100.721v117.508c0,5.036,3.357,8.393,8.393,8.393
                                c4.197,0,8.393-3.357,8.393-8.393V337.472c9.578-3.427,16.787-12.542,16.787-23.718
                                C334.738,299.485,323.826,288.574,309.557,288.574z M309.557,322.147H192.049c-5.036,0-8.393-3.357-8.393-8.393
                                s3.357-8.393,8.393-8.393h117.508c5.036,0,8.393,3.357,8.393,8.393S314.593,322.147,309.557,322.147z"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
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
};

export default RutinesCard;
