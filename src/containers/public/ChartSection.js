import React, { memo, useState, useEffect, useRef } from "react";
import bgSection from "../../assets/images/bg-section.jpg";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { useSelector } from "react-redux";
import Chart from "chart.js/auto";
import SongItems from "../../components/SongItems";
import icons from "../../utils/icons";
import _ from "lodash";
const ChartSection = ({ typeChart }) => {
  Chart.register(CategoryScale);
  const { BsPlayCircle } = icons;
  const { chartSection, rank } = useSelector((state) => state.app);
  const LineRef = useRef();
  const [data, setData] = useState(null);
  const [selected, setSelected] = useState(null);

  const [tooltip, setTooltip] = useState([
    {
      top: 0,
      left: 0,
      opacity: 0,
    },
  ]);

  const options = {
    responsive: true,
    pointRadius: 1,
    aspectRadio: 5,
    scales: {
      y: {
        ticks: { display: false },
        gird: { drawTicks: false, color: "#ccc" },
        min: chartSection?.minScore,
        max: chartSection?.maxScore,
      },
      x: {
        ticks: { color: "white" },
        gird: { color: "transparent" },
      },
    },
    plugins: {
      legend: false,
      tooltip: {
        enabled: false, // inner default toolkit
        external: (context) => {
          const tooltipModel = context.tooltip;
          if (!LineRef || !LineRef.current) return;
          if (tooltipModel.opacity === 0) {
            if (tooltip.opacity !== 0)
              setTooltip((prev) => ({ ...prev, opacity: 0 }));
            return;
          }

          const counters = [];
          for (let i = 0; i < 3; i++) {
            counters.push({
              data: chartSection?.items[Object.keys(chartSection?.items)[i]]
                ?.filter((item) => +item.hour % 2 === 0)
                ?.map((item) => item.counter),
              encodeId: Object.keys(chartSection?.items)[i],
            });
          }
          // console.log(counters);
          const numberToolkit = +tooltipModel.body[0]?.lines[0]?.replace(
            ",",
            ""
          );
          const rs = counters.find((i) =>
            i.data.some((number) => number === numberToolkit)
          );
          // console.log(rs);
          setSelected(rs.encodeId);
          const newTooltipData = {
            opacity: 1,
            left: tooltipModel.caretX,
            right: tooltipModel.caretY,
          };
          if (!_.isEqual(tooltip, newTooltipData)) setTooltip(newTooltipData);
        },
      },
    },
    hover: {
      mode: "dataset",
      intersect: false,
    },
  };

  // console.log(tooltip);

  useEffect(() => {
    const labels = chartSection?.times
      ?.filter((item) => +item.hour % 2 === 0)
      ?.map((item) => `${item.hour}:00`);
    const datasets = [];
    if (chartSection?.items) {
      for (let i = 0; i < 3; i++) {
        datasets.push({
          data: chartSection?.items[Object.keys(chartSection?.items)[i]]
            ?.filter((item) => +item.hour % 2 === 0)
            ?.map((item) => item.counter),
          borderColor:
            i === 0
              ? "rgba(53, 162, 235, 0.5)"
              : i === 1
              ? "#9de5c7"
              : "#eda184c7",
          pointBorderColor:
            i === 0
              ? "rgba(53, 162, 235, 0.5)"
              : i === 1
              ? "#9de5c7"
              : "#eda184c7",
          pointBorderRadius: 5,
          tension: 0.2,
          borderWidth: 2,
          backgroundColor: "white ",
          pointHoverRadius: 5,
        });
      }
      setData({ labels, datasets });
    }
    // console.log(datasets, labels);
  }, [chartSection]);
  // console.log(chartSection);
  return (
    <div className="relative mt-[12px]">
      {typeChart ? (
        <div className="w-[1008px] h-[414px] "></div>
      ) : (
        <img
          src={bgSection}
          alt="img chart"
          className="w-[1008px] h-[414px] object-cover rounded-md"
        />
      )}
      <div className="absolute top-0 z-10 left-[59px] right-[59px] bottom-0 bg-[#534e5473] rounded-md "></div>
      <div className="absolute top-0 z-20  left-[59px] right-[59px] bottom-0 mx-2 flex flex-col justify-center">
        <h3 className=" text-3xl text-[#fff] font-bold mb-5 px-[14px] hover:text-[pink] flex items-center cursor-pointer">
          #Zingchart{" "}
          <span className="bg-[#fff] text-[pink] rounded-full ml-1">
            <BsPlayCircle />
          </span>
        </h3>
        <div className="flex gap-4 ">
          {typeChart ? (
            <></>
          ) : (
            <div className="flex-4 px-[14px] w-full">
              {rank
                ?.filter((i, index) => index < 3)
                ?.map((item, index) => (
                  <SongItems
                    key={index}
                    thumbnail={item.thumbnail}
                    title={item.title}
                    encodeId={item.encodeId}
                    order={index + 1}
                    artistsNames={item.artistsNames}
                    percent={Math.round(
                      (item.score / chartSection?.totalScore) * 100
                    )}
                  />
                ))}
              <div className="px-5 py-[6px] text-[14px] leading-[21px] text-center text-[#fff] font-[500] border border-[#f7b0c078] rounded-xl w-[119px] mx-auto cursor-pointer hover:bg-[#edced591]  ">
                Xem thêm
              </div>
            </div>
          )}

          <div className="relative flex-6 text-[#fff] font-semibold  px-[14px] h-full">
            <div
              className="tooltip"
              style={{
                position: "absolute",
                left: tooltip.left,
                right: tooltip.right,
                opacity: tooltip.opacity,
              }}>
              <SongItems
                thumbnail={
                  rank?.find((item) => item.encodeId === selected)?.thumbnail
                }
                title={rank?.find((item) => item.encodeId === selected)?.title}
                encodeId={
                  rank?.find((item) => item.encodeId === selected)?.encodeId
                }
                artistsNames={
                  rank?.find((item) => item.encodeId === selected)?.artistsNames
                }
                key={1}
              />
            </div>
            {data && (
              <span className={`${typeChart && "h-[330px] w-full"}`}>
                <Line data={data} options={options} ref={LineRef} />
              </span>
            )}
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(ChartSection);
