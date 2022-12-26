import React from "react";

const WeekChart = ({ data }) => {
  return (
    <div className="flex gap-3 mt-12">
      {data?.map((item, index) => (
        <div className="w-1/3 " key={index}>
          <img
            src={item.banner}
            alt="img chart"
            className="w-full rounded-lg h-[95px]"
          />
        </div>
      ))}
    </div>
  );
};

export default WeekChart;
