import React, { useState, useEffect } from "react";
import icons from "../../utils/icons";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions";
const { BsFillHeartFill, FiMoreHorizontal } = icons;

const SongBarRight = ({
  thumbnail,
  title,
  artists,
  encodeId,
  dataListSongAlbum,
  isActive,
}) => {
  // console.log(dataListSongAlbum);
  const dispatch = useDispatch();
  const [isHover, setIsHover] = useState(false);

  let listSong = dataListSongAlbum?.song?.items || dataListSongAlbum;
  const handleSong = (idSong) => {
    dispatch(actions.setCurSongId(idSong));
    dispatch(actions.setSongRecent({ thumbnail, title, artists, encodeId }));
    dispatch(actions.setPlay(true));
    dispatch(actions.setPlayListAlbum(listSong));
  };

  return (
    <div className="p-2 mb-[90px]">
      {isActive && (
        <div className="flex flex-col ">
          <div
            className="flex items-center justify-between h-auto relative  bg-[#f3a4b1]
         text-[#fff] rounded-md  px-2
          hover:bg-[#b38ecf]  "
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            <div className="flex items-center gap-2 text-[14px] cursor-pointer h-[56px] ">
              <div className="relative">
                <img
                  src={thumbnail}
                  alt="img song"
                  className="w-[40px] rounded "
                />
              </div>
              <div>
                <h3 className=" font-semibold ">
                  {isHover && title?.length > 20
                    ? `${title?.slice(0, 20)}...`
                    : title}
                </h3>
                <h4 className="">{artists}</h4>
              </div>
            </div>
            {isHover && (
              <div className="flex-end flex gap-3">
                <span className=" cursor-pointer">
                  <BsFillHeartFill />
                </span>
                <span className=" cursor-pointer">
                  <FiMoreHorizontal />
                </span>
              </div>
            )}
          </div>
          <div>
            <p className="font-bold">Tiếp Theo</p>
            <p>
              <span className="text-[#ccc]"> Từ playlist</span>{" "}
              <span className="text-[pink] font-bold ">
                {dataListSongAlbum?.title?.slice(0, 30)}...
              </span>
            </p>
          </div>
        </div>
      )}
      {/* ------------LIST SONG ----------- */}

      <div className="flex flex-col text-[14px] text-[#fff]">
        {listSong &&
          listSong?.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between h-auto relative   
            opacity-70 text-[#fff]  rounded-md  px-2
          hover:bg-[#b38ecf] hover:opacity-100 "
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              onClick={() => handleSong(item.encodeId)}>
              <div className="flex items-center gap-2 text-[14px] cursor-pointer h-[56px] ">
                <div className="relative">
                  <img
                    src={item?.thumbnail}
                    alt="img song"
                    className="w-[40px] rounded "
                  />
                </div>
                <div>
                  <h3 className=" font-semibold ">
                    {isActive
                      ? isActive && item?.title?.length > 20
                        ? `${item?.title?.slice(0, 20)}...`
                        : item?.title
                      : ""}
                  </h3>
                  <h4>
                    {isHover && item?.artistsNames?.length > 20
                      ? `${item?.artistsNames?.slice(0, 20)}...`
                      : item?.artistsNames}
                  </h4>
                </div>
              </div>
              {isHover && (
                <div className="flex-end flex gap-3">
                  <span className=" cursor-pointer">
                    <BsFillHeartFill />
                  </span>
                  <span className=" cursor-pointer">
                    <FiMoreHorizontal />
                  </span>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SongBarRight;
