import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SongPlayList } from "../../components";
import { useNavigate } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
const ZingChartWeek = () => {
  const { isListSongZingChart } = useSelector((state) => state.music);
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(1);
  const [isListSongs, setIsListSongs] = useState(false);

  useEffect(() => {
    if (isActive === 1) {
      navigate(isListSongZingChart?.vn?.link.split(".")[0]);
      setIsListSongs(isListSongZingChart.vn);
    } else if (isActive === 2) {
      navigate(isListSongZingChart?.us?.link.split(".")[0]);
      setIsListSongs(isListSongZingChart.us);
    }
    if (isActive === 3) {
      navigate(isListSongZingChart?.korea?.link.split(".")[0]);
      setIsListSongs(isListSongZingChart.korea);
    }
  }, [isActive]);

  return (
    <div className="mt-8 mx-[59px]">
      <div className="overflow-hidden">
        <h3 className="text-[32px] text-[#fff] font-bold mb-7">
          Bảng Xếp Hạng Tuần
        </h3>
        <div className="text-[26px] text-[#fff] font-bold flex gap-6 mb-7">
          <h3
            className={` ${
              isActive === 1 && "border-b-4 rounded-sm border-b-rose-300"
            } cursor-pointer pb-4`}
            onClick={() => setIsActive(1)}>
            VIỆT NAM
          </h3>
          <h3
            className={` ${
              isActive === 2 && "border-b-4 rounded-sm border-b-rose-300"
            } cursor-pointer pb-4`}
            onClick={() => setIsActive(2)}>
            US-UK
          </h3>
          <h3
            className={` ${
              isActive === 3 && "border-b-4 rounded-sm border-b-rose-300"
            } cursor-pointer pb-4`}
            onClick={() => setIsActive(3)}>
            K-POP
          </h3>
        </div>

        <div className="">
          <Scrollbars style={{ width: "100%", height: "260px" }}>
            {isListSongs &&
              isListSongs?.items?.map((item, index) => (
                <SongPlayList
                  item={item}
                  key={index}
                  index={index}
                  typeSection={isListSongs?.sectionId}
                />
              ))}
          </Scrollbars>
        </div>
      </div>
    </div>
  );
};

export default ZingChartWeek;
