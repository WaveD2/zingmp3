import React from "react";
import { useSelector } from "react-redux";
import { handleNumber } from "../../utils/handleSlider";
import { Artists, Sections, SongPlayList } from "../../components";
import { useNavigate } from "react-router-dom";
import Video from "./Video";
const SearchAll = () => {
  const navigate = useNavigate();
  const { dataSearch, isLoading } = useSelector((state) => state.music);
  console.log(isLoading);
  let isActiveSearch = dataSearch?.top?.objectType === "artist";
  return (
    <div className="mt-2 relative">
      <div className="py-5">
        <div className="mb-4 font-bold text-xl text-[#fff]">Nổi bật</div>
        <div className="flex gap-5">
          {isActiveSearch ? (
            <>
              {dataSearch?.artists
                ?.filter((item, index) => index < 3)
                .map((item, index) => (
                  <div
                    className="flex items-center w-1/3 p-[10px] bg-[#4b206e] rounded-md"
                    key={index}>
                    <div
                      className="flex items-center gap-3"
                      onClick={() => navigate(item?.link)}>
                      <img
                        src={item?.thumbnail}
                        alt="img"
                        className="w-[84px] h-[84px] object-cover rounded-md"
                      />
                      <div className="flex flex-col ">
                        <p className="text-[12px] leading-[18px] text-[#ccc]">
                          Nghệ sĩ
                        </p>
                        <h3 className="text-[14px] leading-[20px] font-bold text-[#fff]">
                          {item?.name}
                        </h3>
                        <p className="text-[12px] leading-[18px] text-[#ccc]">
                          <span>
                            {handleNumber(item?.totalFollow) + " quan tâm"}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </>
          ) : (
            <>
              {dataSearch?.songs
                ?.filter((item, index) => index < 3)
                .map((item, index) => (
                  <div
                    className="flex items-center w-1/3 p-[10px] bg-[#4b206e] rounded-md"
                    key={index}>
                    <div className="flex items-center gap-3">
                      <img
                        src={item?.thumbnail}
                        alt="img"
                        className="w-[84px] h-[84px] object-cover rounded-md"
                      />
                      <div className="flex flex-col ">
                        <p className="text-[12px] leading-[18px] text-[#ccc]">
                          Bài hát
                        </p>
                        <h3 className="text-[14px] leading-[20px] font-bold text-[#fff]">
                          {item?.title}
                        </h3>
                        <p className="text-[12px] leading-[18px] text-[#ccc]">
                          {item?.artistsNames}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </>
          )}
        </div>
      </div>

      {/* Song */}
      <div className="py-5 ">
        <div className="flex justify-between mb-4">
          <span className="text-[20px] text-[#fff] font-bold">Bài hát</span>
          <span className="text-[14px] text-[#ccc]">Tất cả</span>
        </div>
        <div className="flex flex-wrap">
          {dataSearch?.songs
            ?.filter((items, index) => index < 6)
            .map((item, i) => (
              <SongPlayList
                item={item}
                key={i}
                typeSection={dataSearch?.sectionId}
              />
            ))}
        </div>
      </div>

      {/* Playlist */}
      <div className="py-5 h-[302px] overflow-hidden">
        <Sections
          data={dataSearch?.playlists}
          typeSection={dataSearch?.sectionId}
        />
      </div>

      {/* MV */}
      <div className="py-5 overflow-hidden">
        <h3 className="text-[20px] text-[#fff] font-bold mt-[14px]">MV</h3>
        <div className="py-5 flex gap-5 items-center ">
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

      {/* Artists */}
      <div>
        <h3 className="text-[20px] text-[#fff] font-bold my-[14px]">
          Nghệ Sĩ Tham Gia
        </h3>
        <div className="py-5 flex gap-5 items-center ">
          {dataSearch?.artists
            ?.filter((items, index) => index < 4)
            .map((item, i) => (
              <Artists
                thumbnail={item?.thumbnail}
                totalFollow={item?.totalFollow}
                typeAlbum={dataSearch?.sectionId}
                name={item?.name}
                link={item?.alias}
                key={i}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchAll;
