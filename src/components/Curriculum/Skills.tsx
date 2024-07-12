import React from "react";
import { Fragment } from "react";

const options = [
  "ReactJS",
  "React Native",
  "AstroJS",
  "QwikJS",
  "VueJS",
  "ExpressJS",
  "NextJS",
  "NestJS",
  "MongoDB",
  "GraphQL",
  "TypeScript",
  "AWS Services",
  "Scrum",
]

const Skills: React.FC = () => {
  return (
    <div className="flex flex-wrap">
      {options.map((option, index) => (<div className={"m-1 border-b-2 mx-2 text-sm"} key={index}>{option}</div>))}
    </div>
  )
}

export default Skills;
