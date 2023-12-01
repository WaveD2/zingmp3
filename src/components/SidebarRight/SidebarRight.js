/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import icons from "../../utils/icons";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SongBarRight from "./SongBarRight";
import { apiGetDetailPlaylist } from "../../apis";
import { Scrollbars } from "react-custom-scrollbars-2";

const { FiMoreHorizontal, RiDeleteBin3Line } = icons;

const SidebarRight = () => {
  const { title, id } = useParams();
  const [isActive, setIsActive] = useState(true);
  const [listSong, setListSong] = useState(null);
  const { curSongData, curSongId, songsRecent, isPlayListAlbum } = useSelector(
    (state) => {
      console.log("state.music", state.music);

      return state.music;
    }
  );

  useEffect(() => {
    // const fetchGetDetailPlaylist = async () => {
    //   const response = await apiGetDetailPlaylist(id);
    //   setListSong(response?.data?.data);
    // };
    // listSong ? fetchGetDetailPlaylist() : setListSong(isPlayListAlbum);
    setListSong(isPlayListAlbum);
  }, [curSongId]);
  return (
    <div className="flex flex-col">
      <div className="h-[70px] flex-none py-[14px] px-2 flex items-center justify-between  text-[#fff] ">
        <div
          className="
         bg-[#6e3898] rounded-full
        text-xs font-medium leading-[18px]">
          <div className=" relative flex m-1 cursor-pointer">
            <h6
              className="px-2 py-[6px] z-10"
              onClick={() => setIsActive(true)}>
              Danh Sách Phát
            </h6>
            <h6
              className="px-2 py-[6px] z-10"
              onClick={() => setIsActive(false)}>
              Nghe gần đây{" "}
            </h6>
            <span
              className={`absolute top-0 h-full rounded-full bg-[#9a74b7] ${
                isActive ? "left-[1px] w-[106px] " : "right-[1px] w-[94px]"
              }`}></span>
          </div>
        </div>

        <span className="p-2 flex items-center justify-center rounded-full bg-[#6e3898] cursor-pointer">
          <RiDeleteBin3Line size={18} />
        </span>
        <span className="p-2 flex items-center justify-center rounded-full bg-[#6e3898] cursor-pointer">
          <FiMoreHorizontal size={18} />
        </span>
      </div>
      {isActive ? (
        <div className="w-full flex-col flex">
          <Scrollbars style={{ width: "100%", height: "1200px" }}>
            <SongBarRight
              thumbnail={curSongData?.thumbnail}
              title={curSongData?.title}
              artists={curSongData?.artistsNames}
              id={curSongData?.encodeId}
              dataListSongAlbum={listSong}
              isActive={isActive}
            />
          </Scrollbars>
        </div>
      ) : (
        <div className="w-full flex-col flex">
          <Scrollbars style={{ width: "100%", height: "1200px" }}>
            <SongBarRight dataListSongAlbum={songsRecent} />
          </Scrollbars>
        </div>
      )}
    </div>
  );
};

export default SidebarRight;
