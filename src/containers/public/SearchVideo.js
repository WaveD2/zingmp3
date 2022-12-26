import React from "react";
import { useSelector } from "react-redux";
import Video from "./Video";
const SearchVideo = () => {
  const { dataSearch } = useSelector((state) => state.music);
  return (
    <div className="py-5">
      <h3 className="text-[20px] text-[#fff] font-bold mt-[14px]">MV</h3>
      <div className="py-5 flex gap-5 items-center flex-wrap  ">
        {dataSearch?.videos?.map((item, index) => (
          <Video
            key={index}
            encodeId={item.encodeId}
            title={item.title}
            artistsNames={item.artistsNames}
            duration={item.duration}
            link={item.link}
            thumbnail={item?.artist?.thumbnail}
            thumbnailM={item?.thumbnailM}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchVideo;
