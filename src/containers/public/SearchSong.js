import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SongPlayList } from "../../components";
import * as actions from "../../store/actions";
const SearchSong = () => {
  const dispatch = useDispatch();
  const { dataSearch, isListSongSearch } = useSelector((state) => state.music);
  useEffect(() => {
    dispatch(actions.getSearchSongs(dataSearch?.top?.id));
  }, [dataSearch]);
  return (
    <>
      {isListSongSearch?.items?.map((item, index) => (
        <SongPlayList item={item} key={index} />
      ))}
    </>
  );
};

export default SearchSong;
