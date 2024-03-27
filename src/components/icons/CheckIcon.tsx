import React from "react";

interface Props {
  color?: string;
  width?: number;
  height?: number;
}
const CheckIcon: React.FC<Props> = ({ color = "currentColor", width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    viewBox={`0 0 ${width} ${height}`}
    className="size-5 text-indigo-700"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
)

export default CheckIcon
