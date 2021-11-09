import React from "react";
import classes from "./CustomButton.module.css";

export const ButtonCommon = ({ children, btnSize, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={`${classes.common_button} ${className} ${
        btnSize === "lg"
          ? classes.button_lg
          : btnSize === "sm" && classes.button_sm
      }`}
    >
      {children}
    </button>
  );
};

const Button = () => {
  return <div></div>;
};

export default Button;
