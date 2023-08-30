/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const SixteenIcChevron16 = ({ color = "#717A8C", className }) => {
  return (
    <svg
      className={`sixteen-ic-chevron-16 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6.5 13L10.5 8L6.5 3"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M6.03148 13.5857C5.70803 13.3269 5.65559 12.8549 5.91435 12.5315L9.53953 8L5.91435 3.46852C5.65559 3.14507 5.70803 2.67311 6.03148 2.41435C6.35493 2.15559 6.82689 2.20803 7.08565 2.53148L11.0857 7.53148C11.3048 7.80539 11.3048 8.19461 11.0857 8.46852L7.08565 13.4685C6.82689 13.792 6.35493 13.8444 6.03148 13.5857Z"
        fill={color}
        fillRule="evenodd"
      />
    </svg>
  );
};

SixteenIcChevron16.propTypes = {
  color: PropTypes.string,
};
