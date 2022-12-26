import React, { memo, useState } from "react";
import * as actions from "../store/actions";
import { useDispatch } from "react-redux";
import moment from "moment";
import "moment/locale/vi";
import icons from "../utils/icons";

const SongItems = ({
  thumbnail,
  title,
  artistsNames,
  releaseDate,
  encodeId,
  percent,
}) => {
  const dispatch = useDispatch();
  const { BsPlayCircle } = icons;
  const [hoverSong, setHoverSong] = useState(false);
  const handleSong = (songId) => {
    dispatch(actions.setCurSongId(songId));
    dispatch(actions.setPlay(true));
    dispatch(actions.playAlbum(true));
    dispatch(
      actions.setSongRecent({ thumbnail, title, artistsNames, encodeId })
    );
  };
  return (
    <div
      className={`h-20 text-[14px] text-[#fff] flex items-center justify-between gap-2 p-[6px] bg-slate-300 leading-[21px] rounded text-left mb-2   ${
        hoverSong ? "bg-[#fff7f773] z-10" : "bg-transparent"
      }} `}
      onDoubleClick={() => handleSong(encodeId)}
      onMouseEnter={() => setHoverSong(true)}
      onMouseLeave={() => setHoverSong(false)}>
      <div className="flex items-center gap-3 cursor-pointer  ">
        <div className="relative">
          <img src={thumbnail} alt="img song" className="w-[60px] rounded " />
          {hoverSong ? (
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#60535396] flex items-center justify-center  rounded   z-50">
              <span>
                <BsPlayCircle size={30} />
              </span>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div>
          <h3 className="">
            {title?.length > 25 ? `${title.slice(0, 25)}...` : title}
          </h3>
          <h4 className="">{artistsNames}</h4>
          <p>{releaseDate && moment(releaseDate * 1000).fromNow()}</p>
        </div>
      </div>
      <div className="text-right"> {percent && <span>{percent}%</span>}</div>
    </div>
  );
};

export default memo(SongItems);
