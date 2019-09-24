import React from "react";

import classes from "./Button.module.css";

//className contains an array of strings
const button = props => (
  <button
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
