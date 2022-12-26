import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Sections } from "../../components";

const SearchPlayList = () => {
  const { dataSearch } = useSelector((state) => state.music);
  return (
    <div>
      <Sections
        data={dataSearch?.playlists}
        typeSection={dataSearch?.sectionId}
      />
    </div>
  );
};

export default SearchPlayList;
