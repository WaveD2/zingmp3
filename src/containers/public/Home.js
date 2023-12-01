import React, { useState, useEffect } from "react";
import { Slider, NewRelease, Artists, Sections } from "../../components";

import { useSelector } from "react-redux";
import ChartSection from "./ChartSection";
import WeekChart from "./WeekChart";
import Loading from "../../components/Loading";
import { Fragment } from "react";

// const Section = React.lazy(() => import("../../components/Section/Sections"));

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
    isLoading,
  } = useSelector((state) => {
    console.log("state.app", state.app);
    return state.app;
  });

  const [isLoadingHome, setIsLoadingHome] = useState(isLoading);

  useEffect(() => {
    const idTimeLoading = setTimeout(() => {
      setIsLoadingHome(true);
    }, 3000);

    return () => {
      clearTimeout(idTimeLoading);
    };
  }, [isLoadingHome]);

  return (
    <div className={`${isScroll ? "mt-0" : "mt-7"} mx-[59px]`}>
      {isLoadingHome ? (
        <Fragment>
          <div className="overflow-y-auto h-full ">
            <Slider />
          </div>

          <div>
            {/* <Sections
            data={listSongAlbumEvent?.items}
            typeSection={listSongAlbumEvent?.title}
          />
          <Sections data={newEveryday?.items} typeSection={newEveryday?.title} /> */}

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

            {/* <Sections data={xone?.items} typeSection={xone?.title} /> */}
            <Sections data={liveRadio?.items} typeSection={liveRadio?.title} />
            <Sections data={newMusic?.items} typeSection={newMusic?.title} />
          </div>
        </Fragment>
      ) : (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-media flex items-center justify-center h-full w-full">
          <Loading />
        </div>
      )}
    </div>
  );
};

export default Home;
