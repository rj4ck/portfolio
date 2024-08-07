import React from "react";
import Divider from "./Divider.tsx";

interface ProjectListProps {
	title: string;
	showTimeline?: boolean;
	tags?: string[];
	details: string[];
}

const ProjectList: React.FC<ProjectListProps> = ({ showTimeline, tags = [], title, details = [] }) => {

	const highlightTags = (detail: string) => {
		const words = detail.split(' ');

		return words.map((word: string, index: number) => {

			const highlightTag = tags.includes(word);

			if (highlightTag) {
				return <span key={index} className={"text-orange-400"}> {word} </span>;
			}

			const splitWords = word.split(',');

			if (splitWords.length > 1) {
				for (let i = 0; i < splitWords.length; i++) {
					if (tags.includes(splitWords[i])) {
						return <span key={index} className={"text-orange-400"}>{splitWords.join(', ')}</span>;
					}
				}
			}

			return `${word} `;
		});
	}

	return (
		<div className="mb-2">
			{showTimeline && <h3 className="text-sm font-bold">{title}</h3>}
			<ul className="list-disc ml-6 text-sm">
				{details.map((detail) => (
					<li>{highlightTags(detail)}</li>
				))}
			</ul>

			<Divider margin={3} />
		</div>
	);
};

export default ProjectList
