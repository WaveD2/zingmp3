import React from "react";
import moment from "moment";
import icons from "../utils/icons";
import * as actions from "../store/actions";
import { useDispatch } from "react-redux";

const { FiMusic } = icons;

const SongPlayList = ({ item, typeSection, sectionType, index }) => {
  const dispatch = useDispatch();
  const handlePlayMusicList = (encodeId, thumbnail, title, artistsNames) => {
    // setThumbnailM(thumbnailM);
    dispatch(actions.setCurSongId(encodeId));
    dispatch(actions.setPlay(true));
    dispatch(actions.playAlbum(true));
    dispatch(
      actions.setSongRecent({ thumbnail, title, artistsNames, encodeId })
    );
  };
  return (
    <div
      className={`flex items-center border-b border-y-violet-500 text-inFoPlayList text-[14px] leading-[18px] gap-2
      cursor-pointer hover:bg-[#76567c66] ${
        typeSection === "search" || sectionType === "song"
          ? " w-1/2 "
          : " w-full"
      } `}
      onClick={() =>
        handlePlayMusicList(
          item?.encodeId,
          item?.thumbnailM,
          item?.thumbnail,
          item?.title,
          item?.artistsNames
        )
      }>
      <div
        className={`flex items-center gap-2  py-2  cursor-pointer ${
          sectionType === "song" ? "w-5/6" : "w-3/6"
        } `}>
        <div
          className={
            sectionType === "song "
              ? "flex gap-7 w-[260px] items-center"
              : "flex gap-7 items-center "
          }>
          {sectionType === "RTChart" || typeSection === "cZCW" ? (
            <span className="font-black text-[32px] leading-8 w-8">
              {index + 1}
            </span>
          ) : (
            <FiMusic className="ml-2 text-xl" />
          )}
          <img
            src={item?.thumbnail}
            alt="img"
            className="w-[50px] h-[50px] object-cover rounded-sm"
          />
          <div className="">
            <h3 className="text-[14px]">
              {sectionType === "song"
                ? `${item?.title.slice(0, 20)}...`
                : item?.title.length > 30
                ? `${item?.title.slice(0, 30)}...`
                : item?.title}
            </h3>
          </div>
        </div>
      </div>
      <span
        href="#"
        className={`flex-auto ${
          typeSection === "search" || sectionType === "song" ? "w-0" : "w-2/6"
        } `}>
        {sectionType === "song"
          ? ""
          : item?.album?.title
          ? item?.album?.title
          : item?.title}
      </span>
      <span className="w-1/6 text-right  mr-3">
        {moment.utc(item?.duration * 1000).format("mm:ss")}
      </span>
    </div>
  );
};

export default SongPlayList;
