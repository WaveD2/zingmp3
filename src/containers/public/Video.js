import React, { useState } from "react";
import moment from "moment";
import icons from "../../utils/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";

const { BsPlayCircle } = icons;
const Video = ({
  encodeId,
  title,
  artistsNames,
  thumbnailM,
  duration,
  link,
  thumbnail,
}) => {
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  const handleVideoClip = (e) => {
    e.preventdefault();
    // const videoClipPath = link.split(".")[0];
    navigate(link);
    dispatch(actions.setIsVideo(true));
  };
  return (
    <div>
      <div className="flex flex-col gap-2">
        <div
          className="w-[318px] relative overflow-hidden  rounded-lg"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={(e) => handleVideoClip(e)}>
          {isHover && (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-overlay z-50 flex justify-center items-center cursor-pointer">
              <BsPlayCircle size={50} className="text-[#fff]" />
            </div>
          )}
          <img
            src={thumbnailM}
            alt="audio"
            className={`w-full object-cover ${
              isHover && "animate-rotate-imgSection"
            }`}
          />
          <div className="absolute bottom-1 right-1 bg-[#262622] text-[#fff] rounded-md px-1">
            <span className="text-xs">
              {moment.utc(duration * 1000).format("mm:ss")}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <img
            src={thumbnail}
            alt="img"
            className="w-[40px] object-cover rounded-full"
          />
          <div className="flex flex-col">
            <h3 className="text-[14px] font-bold text-[#ccc]">
              {title?.length > 20 ? `${title?.slice(0, 30)}...` : title}
            </h3>
            <h4 className="text-xs text-[#ebabdc]">{artistsNames}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
