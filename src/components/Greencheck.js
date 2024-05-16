import React from "react";
import { SvgIcon } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const GreenCheckIcon = (props) => {
  return (
    <SvgIcon {...props}>
      <path fill={green[500]} d="M0 0h24v24H0V0z" />
      <path
        fill="#FFFFFF"
        d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
      />
    </SvgIcon>
  );
};

export default GreenCheckIcon;
