import React from "react";

export default function PersonIcon(props) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 20 20"
      height="26px"
      width="26px"
      xmlns="http://www.w3.org/2000/svg"
      style={{ color: `${props?.color}` }}
    >
      <path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
