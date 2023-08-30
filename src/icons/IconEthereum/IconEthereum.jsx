/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const IconEthereum = ({ className }) => {
  return (
    <svg
      className={`icon-ethereum ${className}`}
      fill="none"
      height="150"
      viewBox="0 0 150 150"
      width="150"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" filter="url(#filter0_d_8758_23288)">
        <circle className="circle" cx="75" cy="75" fill="url(#paint0_linear_8758_23288)" r="28" />
        <path
          className="path"
          d="M74.922 58.2L74.6992 58.9566V80.9094L74.922 81.1316L85.112 75.1082L74.922 58.2Z"
          fill="#10151A"
        />
        <path className="path" d="M74.9208 58.2L64.7305 75.1082L74.9208 81.1316V70.4764V58.2Z" fill="#10151A" />
        <path
          className="path"
          d="M74.9224 83.0609L74.7969 83.214V91.0339L74.9224 91.4004L85.1187 77.0406L74.9224 83.0609Z"
          fill="#10151A"
        />
        <path className="path" d="M74.9208 91.4004V83.0609L64.7305 77.0406L74.9208 91.4004Z" fill="#10151A" />
        <path className="path" d="M74.9219 81.1316L85.1119 75.1082L74.9219 70.4763V81.1316Z" fill="#10151A" />
        <path className="path" d="M64.7305 75.1082L74.9208 81.1316V70.4763L64.7305 75.1082Z" fill="#10151A" />
      </g>
      <defs className="defs">
        <filter
          className="filter"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
          height="150"
          id="filter0_d_8758_23288"
          width="150"
          x="0"
          y="0"
        >
          <feFlood className="fe-flood" floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            className="fe-color-matrix"
            in="SourceAlpha"
            result="hardAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset className="fe-offset" />
          <feGaussianBlur className="fe-gaussian-blur" stdDeviation="23.5" />
          <feComposite className="fe-composite" in2="hardAlpha" operator="out" />
          <feColorMatrix
            className="fe-color-matrix"
            type="matrix"
            values="0 0 0 0 0.384314 0 0 0 0 0.494118 0 0 0 0 0.917647 0 0 0 0.3 0"
          />
          <feBlend className="fe-blend" in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_8758_23288" />
          <feBlend
            className="fe-blend"
            in="SourceGraphic"
            in2="effect1_dropShadow_8758_23288"
            mode="normal"
            result="shape"
          />
        </filter>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_8758_23288"
          x1="75"
          x2="75"
          y1="47"
          y2="103"
        >
          <stop className="stop" stopColor="#7993F9" />
          <stop className="stop" offset="1" stopColor="#627EEA" />
        </linearGradient>
      </defs>
    </svg>
  );
};
