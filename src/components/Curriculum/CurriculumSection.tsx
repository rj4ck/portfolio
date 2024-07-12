import React from "react";
import { Fragment } from "react";

interface Props {
  title: string;
  content?: string;
  children?: React.ReactNode;
}

const CurriculumSection: React.FC<Props> = ({ title, content, children }) => {
  return (
    <div className="mb-4">
      <p className="text-xl font-semibold uppercase border-b-2 border-black">{ title }</p>
      {content && <p className="pt-1 text-sm">{content}</p>}
      {children && <Fragment>{children}</Fragment>}
    </div>
  )
}

export default CurriculumSection;
