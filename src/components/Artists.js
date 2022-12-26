import React, { useState } from "react";
import icons from "../utils/icons";
import { Link } from "react-router-dom";
const { RiUserAddLine, BsShuffle } = icons;
const Artists = ({
  thumbnail,
  totalFollow,
  name,
  link,
  typeAlbum,
  sectionType,
}) => {
  const [isHover, setIsHover] = useState(false);
  const handleHover = () => {
    setIsHover(true);
  };
  const handleLeave = () => {
    setIsHover(false);
  };
  return (
    <>
      <div
        className="flex flex-col items-center relative "
        onMouseMove={handleHover}
        onMouseOut={handleLeave}>
        <div className="overflow-hidden ">
          <Link>
            <div
              className={` overflow-hidden ${
                typeAlbum
                  ? "rounded-full h-[214px]"
                  : sectionType
                  ? "rounded-full"
                  : "rounded-lg"
              }`}>
              <img
                src={thumbnail}
                alt=""
                className={` object-cover
                 ${
                   typeAlbum
                     ? "rounded-full h-[214px]"
                     : sectionType
                     ? "rounded-full"
                     : "rounded-lg w-[120px] max-w-none h-[144px] "
                 }
                    ${isHover && "animate-rotate-imgSection rounded-lg"} 
                `}
              />
            </div>
          </Link>
          {isHover && (
            <Link
              className={`absolute top-0 left-0 right-0 bottom-0 bg-overlay z-50 flex justify-center items-center cursor-pointer ${
                typeAlbum
                  ? "rounded-full h-[214px]"
                  : sectionType
                  ? "rounded-full h-[192px] "
                  : "rounded-sm h-[144px] "
              }`}
              to={link}>
              <span className="text-[#fff] p-2 border border-b-white rounded-full">
                <BsShuffle size={30} />
              </span>
            </Link>
          )}
          <h4 className="text-[#fff] mt-2 text-[14px] leading-5 text-center">
            {name}
          </h4>
        </div>
        {sectionType || typeAlbum ? (
          <div>
            <p className="text-titlePlayList text-[12px] leading-4 text-center">
              {`${Math.round(totalFollow / 1000)}K quan tâm`}
            </p>
            <button className="flex items-center justify-center py-1 bg-[#e48494] rounded-3xl gap-2 my-2 text-[#fcf5f5] w-[140px]">
              <span>
                <RiUserAddLine />
              </span>
              <span> Quan tâm</span>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Artists;
