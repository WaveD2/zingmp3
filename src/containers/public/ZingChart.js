import React, { useEffect, useState } from "react";
import ChartSection from "./ChartSection";
import { apiGetChart } from "../../apis";
import { SongPlayList } from "../../components";
import Weekrank from "./Weekrank";
const ZingChart = () => {
  const [dataChart, setDataChart] = useState(null);
  const [topSongs, setTopSongs] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      const res = await apiGetChart();
      setDataChart(res);
    };
    fetch();
  }, []);

  useEffect(() => {
    setTopSongs(
      dataChart?.data?.data?.RTChart?.items?.filter((item, index) => index < 10)
    );
  }, [dataChart]);
  const handlePlayListSong = (e) => {
    setTopSongs(dataChart?.data?.data?.RTChart?.items);
    e.target.style.display = "none";
  };
  return (
    <div className=" mx-[59px] mt-5">
      <div>
        <ChartSection typeChart={dataChart?.data?.data?.RTChart?.sectionType} />
      </div>
      <div className="mt-8">
        <div className="mb-4">
          {topSongs?.map((item, index) => (
            <div className="flex " key={index}>
              <SongPlayList
                item={item}
                sectionType={dataChart?.data?.data?.RTChart?.sectionType}
                key={index}
                index={index}
              />
            </div>
          ))}
        </div>
        <button
          className="block mx-auto w-[200px] mt-5 py-4 bg-overlay rounded-3xl text-xl font-bold leading-5 text-[#fff] hover:bg-[#fdfdfd3d]"
          onClick={(e) => handlePlayListSong(e)}>
          Xem top 100
        </button>
      </div>
      <Weekrank />
    </div>
  );
};

export default ZingChart;
