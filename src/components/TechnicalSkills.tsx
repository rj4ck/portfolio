import React from "react";

type TechnicalSkills = {
  title: string;
  years: string;
}
interface Props {
  title: string;
  skills: TechnicalSkills[]
}
const TechnicalSkills: React.FC<Props> = ({ title, skills = []}) => {
  return (
    <div className="rounded-md border-[0.05rem] shadow-md">
      <div className="p-6">
        <p className="font-medium sm:text-lg">{title || "TEST"}</p>

        <ul className="space-y-1 sm:mt-4">
          {skills.map((skill) => (
            <li className="flex text-sm justify-between items-center gap-1">
              <span className="text-gray-600">{skill.title}</span>
              <span className="text-gray-400">{skill.years}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TechnicalSkills
