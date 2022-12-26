import React, { memo } from "react";

const Button = ({ text, style, icon, handleOnClick }) => {
  return (
    <button
      type="button"
      className={style ? style : "py-1 px-4 rounded-lg border"}
      onClick={handleOnClick}>
      {text && <span>{text}</span>}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default memo(Button);
