/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Loader1 = ({ color = "white", className }) => {
  return (
    <svg
      className={`loader-1 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_9750_5347)">
        <path
          className="path"
          d="M8 1C8 0.447715 7.55056 -0.00644569 7.00258 0.0624095C5.58532 0.240494 4.235 0.79584 3.09674 1.67876C1.69389 2.76693 0.692864 4.29084 0.251335 6.01048C-0.190194 7.73012 -0.0471414 9.54778 0.657963 11.1772C1.36307 12.8066 2.59016 14.1551 4.14597 15.0105C5.70178 15.8658 7.49791 16.1792 9.25147 15.9015C11.005 15.6238 12.6164 14.7706 13.8317 13.4764C15.0471 12.1822 15.7974 10.5204 15.9645 8.75287C16.1001 7.31872 15.8454 5.88104 15.2364 4.58898C15.0009 4.08941 14.3766 3.95329 13.9103 4.24921V4.24921C13.444 4.54514 13.3147 5.16109 13.5291 5.67003C13.912 6.57868 14.0671 7.57279 13.9734 8.56465C13.8481 9.89031 13.2853 11.1366 12.3738 12.1073C11.4623 13.078 10.2538 13.7178 8.93861 13.9261C7.62343 14.1344 6.27634 13.8993 5.10948 13.2578C3.94262 12.6164 3.0223 11.6049 2.49347 10.3829C1.96464 9.16084 1.85735 7.79759 2.1885 6.50786C2.51965 5.21813 3.27041 4.0752 4.32256 3.25907C5.10978 2.64844 6.03224 2.24672 7.0046 2.08314C7.54923 1.99151 8 1.55228 8 1V1Z"
          fill={color}
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_9750_5347">
          <rect className="rect" fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

Loader1.propTypes = {
  color: PropTypes.string,
};
