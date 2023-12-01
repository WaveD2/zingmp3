import React, { useEffect, useState } from "react";
import { Loading, SongPlayList } from "../../components";
import { apiGetNewSong } from "../../apis";

export const SongNew = () => {
  const [topSongs, setTopSongs] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      const res = await apiGetNewSong();
      setTopSongs(res?.data?.data);
      setIsLoading(false);
    };
    setIsLoading(true);
    fetch();
  }, []);

  return topSongs?.items.length > 0 && !isLoading ? (
    <div className=" mx-[59px] mt-5">
      <div className="mb-5 text-[32px] leading-8 font-black  text-[#fff]">
        {topSongs?.title}
      </div>

      <div className="mt-8">
        <div className="mb-4">
          {topSongs?.items?.map((item, index) => (
            <div className="flex " key={index}>
              <SongPlayList
                item={item}
                key={index}
                index={index}
                sectionType={"RTChart"}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};
