import React from "react";
import { ThreeCircles } from "react-loader-spinner";
const Loading = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "40%",
        left: "40%",
      }}>
      <ThreeCircles
        height="100"
        width="100"
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
};
export default Loading;
