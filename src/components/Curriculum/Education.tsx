import React from "react";
import { Fragment } from "react";
import Divider from "../Divider.tsx";

interface Props {
  title: string;
  school: string;
  startDate: string;
  endDate?: string;
  location: string;
}

const Education: React.FC<Props> = ({ title, school, startDate, endDate, location }) => {
  return (
    <div className="education-item">
      <p className="text-sm font-bold">{title}</p>
      <p className="text-sm text-orange-400">{school}</p>
      <div>
        <span className="mr-6">
          <i className="fa-solid fa-calendar-days text-[10px] text-sm" /> {startDate} - {endDate ?? "Present"}
        </span>
        <span>
          <i className="fa-solid fa-location-dot text-[10px] text-sm" /> {location}
        </span>
      </div>

      <Divider margin={1} />
    </div>
  )
}

export default Education;
