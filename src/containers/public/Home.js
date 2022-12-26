import React, { useState } from "react";
// import * as apis from "../../apis";
import { Slider, Sections, NewRelease, Artists } from "../../components";
import { useSelector } from "react-redux";
import ChartSection from "./ChartSection";
import WeekChart from "./WeekChart";

const Home = ({ isScroll }) => {
  const {
    listSongAlbumEvent,
    newEveryday,
    top100,
    xone,
    liveRadio,
    newMusic,
    weekChart,
    allArtist,
  } = useSelector((state) => state.app);
  return (
    <div className={`${isScroll ? "mt-0" : "mt-7"} mx-[59px]`}>
      <div className="overflow-y-auto h-full ">
        <Slider />
      </div>
      <div>
        <Sections
          data={listSongAlbumEvent?.items}
          typeSection={listSongAlbumEvent?.title}
        />
        <Sections data={newEveryday?.items} typeSection={newEveryday?.title} />
        <NewRelease />
        <Sections data={top100?.items} typeSection={top100?.title} />
        <ChartSection />
        <WeekChart data={weekChart} />
        {/* Artist */}
        <div className="w-[1008px] flex overflow-hidden  mt-12 gap-6">
          {allArtist?.items?.map((item, index) => (
            <Artists
              key={index}
              thumbnail={item.thumbnail}
              spotlight={item.spotlight}
              totalFollow={item.totalFollow}
              name={item.name}
              link={item.alias}
              encodeId={item.id}
            />
          ))}
        </div>
        <Sections data={xone?.items} typeSection={xone?.title} />
        <Sections data={liveRadio?.items} typeSection={liveRadio?.title} />
        <Sections data={newMusic?.items} typeSection={newMusic?.title} />
      </div>
    </div>
  );
};

export default Home;
// useEffect(() => {
//   const fetchDataHome = async () => {
//     const response = await apis.getHome();
//     console.log(response);
//   };
//   fetchDataHome();
// }, []);
