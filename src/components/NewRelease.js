import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SongItems from "./SongItems";
import * as actions from "../store/actions";

const NewRelease = () => {
  const dispatch = useDispatch();
  const { newRelease } = useSelector((state) => state.app);
  const [isActive, setIsActive] = useState(2);
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    if (isActive === 0) {
      setSongs(newRelease?.items?.vPop);
    } else if (isActive === 1) {
      setSongs(newRelease?.items?.others);
    } else if (isActive === 2) {
      setSongs(newRelease?.items?.all);
    }
  }, [isActive, newRelease]);
  const handleSongAlbum = (songs) => {
    dispatch(actions.setPlayListAlbum(songs));
  };
  return (
    <div className="mt-12 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-5 font-bold">{newRelease?.title}</h3>
        <span className="text-xs ">TẤT CẢ</span>
      </div>
      <div className="flex item-center gap-2">
        <button
          type="button"
          className={`py-1 px-4 rounded-lg border border-t-gray-50 text-xs text-[#fff] ${
            isActive === 2 && "border-none bg-[#ed2b91]"
          }`}
          onClick={() => setIsActive(2)}>
          TẤT CẢ
        </button>
        <button
          type="button"
          className={`py-1 px-4 rounded-lg border border-t-gray-50 text-xs text-[#fff] ${
            isActive === 0 && "border-none bg-[#ed2b91]"
          }`}
          onClick={() => setIsActive(0)}>
          VIỆT NAM
        </button>
        <button
          type="button"
          className={`py-1 px-4 rounded-lg border border-t-gray-50 text-xs text-[#fff] ${
            isActive === 1 && "border-none bg-[#ed2b91]"
          }`}
          onClick={() => setIsActive(1)}>
          QUỐC TẾ
        </button>
      </div>
      <div
        className=" grid grid-rows-3 grid-cols-3 gap-2 cursor-pointer   "
        onDoubleClick={() => handleSongAlbum(songs)}>
        {songs
          ?.filter((item, index) => index < 12)
          ?.map((item, index) => (
            <SongItems
              thumbnail={item.thumbnail}
              title={item.title}
              artistsNames={item.artistsNames}
              releaseDate={item.releaseDate}
              key={index}
              encodeId={item.encodeId}
            />
          ))}
      </div>
    </div>
  );
};

export default NewRelease;
