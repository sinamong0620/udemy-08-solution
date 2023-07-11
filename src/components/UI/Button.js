import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
    //만일 type속성에 딱히 뭐가 지정되어있지 않다면 대안으로 button속성이 됨. || OR연산자 기억
  );
};
export default Button;
