/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Group = ({
  className,
  group = "https://generation-sessions.s3.amazonaws.com/f91844933eaf98d5c15a30448387189b/img/group-5547-8.svg",
}) => {
  return <img className={`group ${className}`} alt="Group" src={group} />;
};

Group.propTypes = {
  group: PropTypes.string,
};
