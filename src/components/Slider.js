/* eslint-disable react/style-prop-object */
import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSlider } from "../utils/handleSlider";
import * as actions from "../store/actions";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import icons from "../utils/icons";

const { IoIosArrowBack, MdNavigateNext } = icons;
var interId;
const Slider = () => {
  const { banner } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isAuto, setIsAuto] = useState(true);
  const [isHover, setHover] = useState(false);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(2);
  //  animation for banner
  useEffect(() => {
    if (isAuto) {
      interId = setInterval(() => {
        handleAnimationBanner(1);
      }, 2000);
      return () => {
        interId && clearInterval(interId);
      };
    }
  }, [min, max, isAuto]);

  useEffect(() => {
    setInterval(() => setIsAuto(true), 6000);
  }, [isAuto]);
  const handleClickBanner = (item) => {
    console.log(item);
    if (item?.type === 1) {
      // -> actions --> musicReducer (reducer)-> set curSetId (lưu vào local store)
      dispatch(actions.setCurSongId(item.encodeId));
      dispatch(actions.setPlay(true));
      // Album
    } else if (item?.type === 4) {
      const albumPath = item?.link?.split(".")[0];
      navigate(albumPath); // truyen data

      // Trực tuyến
    } else {
      dispatch(actions.playAlbum(false));
    }
  };

  const handleAnimationBanner = (step) => {
    const sliderEle = document.querySelectorAll(".slider-item");

    const list = handleSlider(min, max, sliderEle.length - 1);

    // Inner slider
    for (let i = 0; i < sliderEle.length; i++) {
      // DELETE classnames tailwind
      sliderEle[i]?.classList?.remove(
        "animate-slide-right",
        "order-last",
        "z-20"
      );
      sliderEle[i]?.classList?.remove(
        "animate-slide-left",
        "order-first",
        "z-10"
      );
      sliderEle[i]?.classList?.remove("animate-slide-left2", "order-2", "z-10");

      if (list.some((item) => item === i)) {
        sliderEle[i].style.cssText = `display : block`;
      } else {
        sliderEle[i].style.cssText = `display : none`;
      }
    }
    // Add animation
    list.forEach((item) => {
      if (item === max) {
        sliderEle[item]?.classList?.add(
          "animate-slide-right",
          "order-last",
          "z-20"
        );
      } else if (item === min) {
        sliderEle[item]?.classList?.add(
          "animate-slide-left",
          "order-first",
          "z-10"
        );
      } else {
        sliderEle[item]?.classList?.add(
          "animate-slide-left2",
          "order-2",
          "z-10"
        );
      }
    });
    if (step === 1) {
      setMin((prev) => (prev === sliderEle.length - 1 ? 0 : prev + step));
      setMax((prev) => (prev === sliderEle.length - 1 ? 0 : prev + step));
    }
    if (step === -1) {
      setMin((prev) => (prev === 0 ? sliderEle.length - 1 : prev + step));
      setMax((prev) => (prev === 0 ? sliderEle.length - 1 : prev + step));
    }
  };

  const handleBack = useCallback(
    (step) => {
      interId && clearInterval(interId);
      handleAnimationBanner(step);
      setIsAuto(false);
    },
    [min, max]
  );

  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      {isHover && (
        <Button
          icon={<IoIosArrowBack size={42} />}
          style="absolute top-[40%] rounded-full left-0 bg-[#ad96962e] z-50 text-[#fff] p-1"
          handleOnClick={() => handleBack(1)}
        />
      )}

      <div
        className=" flex flex-row w-full overflow-hidden  
       gap-5 ">
        {banner?.map((item, index) => (
          <img
            src={item.banner}
            className={`slider-item 
            flex-1 object-contain w-[316px] rounded-[12px]
            ${index <= 2 ? "block" : "hidden"}`}
            alt="slider"
            key={item.encodeId}
            onClick={() => handleClickBanner(item)}
          />
        ))}
      </div>
      {isHover && (
        <Button
          icon={<MdNavigateNext size={50} />}
          style="text-[#fff] absolute top-[40%] font-bold rounded-full right-0 bg-[#ad96962e] z-50 "
          handleOnClick={() => handleBack(-1)}
        />
      )}
    </div>
  );
};

export default Slider;
