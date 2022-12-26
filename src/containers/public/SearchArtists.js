import React from "react";
import { useSelector } from "react-redux";
import { Artists } from "../../components";
const SearchArtists = () => {
  const { dataSearch } = useSelector((state) => state.music);
  return (
    <div>
      <h3 className="text-[20px] text-[#fff] font-bold my-[14px]">
        Nghệ Sĩ Tham Gia
      </h3>
      <div className="py-5 flex gap-5 items-center ">
        {dataSearch?.artists?.map((item, index) => (
          <Artists
            key={index}
            thumbnail={item.thumbnail}
            thumbnailM={item.thumbnailM}
            totalFollow={item.totalFollow}
            name={item.name}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchArtists;
