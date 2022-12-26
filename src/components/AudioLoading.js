import React, { memo } from "react";
import { Audio } from "react-loader-spinner";

const AudioLoading = () => {
  return (
    <Audio
      height="30"
      width="30"
      color="white"
      ariaLabel="audio-loading"
      wrapperClass="wrapper-class"
      wrapperStyle={{}}
      visible={true}
    />
  );
};

export default memo(AudioLoading);
