import React from "react";

type Skills = {
  title: string;
  years: string;
}
interface Props {
  title: string;
  skills: Skills[]
}
const Skills: React.FC<Props> = ({ title, skills = []}) => {
  return (
    <div className="divide-y divide-gray-300 rounded-xl border border-gray-300 shadow-sm">
      <div className="p-6">
        <p className="text-xl font-bold text-gray-600 sm:text-2xl">{title}</p>

        <ul className="space-y-1 sm:mt-4">
          {skills.map((skill) => (
            <li className="flex justify-between items-center gap-1">
              <span className="text-gray-600">{skill.title}</span>
              <span className="text-[1rem] text-gray-400">{skill.years}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Skills
