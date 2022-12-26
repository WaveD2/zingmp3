import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import icons from "../../utils/icons";

const { BsFillHeartFill, FiMoreHorizontal, BsPlayCircle } = icons;

const SectionItem = ({
  thumbnail,
  link,
  title,
  sortDescription,
  index,
  data,
}) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  const handleHover = () => {
    setIsHover(true);
  };
  const handleLeave = () => {
    setIsHover(false);
  };
  return (
    <>
      <div
        className="flex flex-col w-[180px] "
        onClick={() => {
          navigate(link?.split(".")[0], { state: { playAlbum: false } });
        }}>
        <div
          className="overflow-hidden rounded-lg relative"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}>
          {isHover && (
            <div
              className="absolute top-0 bottom-0 left-0 right-0 bg-bgSection z-10 text-[#fff] flex items-center justify-around 
            cursor-pointer
            ">
              <span>
                <BsFillHeartFill size={22} />
              </span>
              <span
                className=""
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(link?.split(".")[0], {
                    state: { playAlbum: true },
                  });
                }}>
                <BsPlayCircle size={50} />
              </span>
              <span>
                <FiMoreHorizontal size={22} />
              </span>
            </div>
          )}
          <img
            src={thumbnail}
            alt=""
            className="w-full rounded-lg hover:animate-rotate-imgSection"
          />
        </div>
        <h4 className="text-[#fff] my-1 text-[14px] leading-5  text-left">
          {title}
        </h4>
        {data?.sectionId === "h100" ? (
          <span className="text-titlePlayList text-[12px] leading-4  text-left ">
            {data?.items[index]?.artists?.map((item, i) => (
              <span key={i}>{item.name?.slice(0, 40)}, </span>
            ))}
            ,...
          </span>
        ) : (
          <p className="text-titlePlayList text-[12px] leading-4  text-left">
            {sortDescription?.length > 40
              ? `${sortDescription?.slice(0, 40)}...`
              : sortDescription}
          </p>
        )}
      </div>
    </>
  );
};

export default SectionItem;
