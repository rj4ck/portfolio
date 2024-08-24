import React from "react";
import CodexIcon from "./icons/CodexIcon.tsx";
import ClinpaysIcon from "./icons/ClinpaysIcon.tsx";
import ProjectList from "./ProjectList.tsx";
import TimeLine from "./TimeLine.tsx";

interface Props {
	showTimeline?: boolean;
}

const RecentWorks: React.FC<Props> = ({ showTimeline }) => {
	return (
		<div className={`space-y-8 relative ${!showTimeline ? "" : "before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent"}`}>
			<TimeLine showTimeline={showTimeline} startDate={"02/2022"} endDate={"01/2024"} location={"San Pedro Sula, Honduras"} date={'Feb 1, 2022'} title={"Code ÉXITOS"} subtitle={"Software developer"} icon={<CodexIcon />}>
				<ProjectList
					showTimeline={showTimeline}
					title={"Frontend development"}
					tags={["ReactJS", "React Native", "VueJS"]}
					details={[
						"Led the development of interactive and efficient user interfaces using React Native, ReactJS and VueJS, ensuring a fluid and engaging user experience."
					]} />
				<ProjectList
					showTimeline={showTimeline}
					title={"Backend development"}
					tags={["NestJS", "GraphQL", "Flesk", "Python", "AWS", "Lambda", "API Gateway"]}
					details={[
						"Efficiently integrated AWS, leveraging Lambda and API Gateway capabilities to achieve a flexible and highly available ",
						"Implemented robust and scalable backend solutions using microservers with AWS Lambda and API Gateway, leveraging cloud infrastructure for efficiency and scalability.",
            "Developed and maintained servers using Python, taking advantage of its versatility and effectiveness in implementing business logic.",
            "Contributed to the development of services using NestJS, ensuring a robust and modular architecture for backend applications."
					]} />
				<ProjectList
					showTimeline={showTimeline}
					title={"Project Collaboration"}
					details={[
						"Implemented development best practices to ensure application optimization and performance, improving efficiency and user experience.",
						"Worked closely with cross-functional teams to ensure effective integration of frontend and backend components, ensuring consistency and effectiveness of the final product"
					]} />
			</TimeLine>


			<TimeLine showTimeline={showTimeline} startDate={"11/2014"} endDate={"02/2024"} location={"San Pedro Sula, Honduras"} date={'Nov 14, 2014'} title={"Clinpays"} subtitle={"Lead Developer"} icon={<ClinpaysIcon />}>
				<ProjectList
					showTimeline={showTimeline}
					title={"Development and Maintenance Management"}
					tags={["strategic", "coordination", "maintenance"]}
					details={[
						"Supervision and coordination of new developments, ensuring their alignment with the company's strategic objectives.",
						"Implementation and monitoring of preventive and corrective maintenance to guarantee the stability and efficiency of the systems."
					]} />
				<ProjectList
					showTimeline={showTimeline}
					title={"Server Management"}
					tags={["servers"]}
					details={[
						"Responsible for the comprehensive management of CLINPAYS servers, as well as servers associated with additional projects",
						"Implementation of security and optimization measures to ensure a robust and reliable server environment."
					]} />
				<ProjectList
					showTimeline={showTimeline}
					title={"Frontend development"}
					tags={["design", "implementation"]}
					details={[
						"Active collaboration as part of the payments API development team, contributing to the design, implementation and continuous improvement of this essential interface.",
					]} />
				<ProjectList
					showTimeline={showTimeline}
					title={"Backend development"}
					tags={["connections", "API", "orchestrator", "implementation"]}
					details={[
						"Active collaboration as part of the payments API development team, contributing to the design, implementation and continuous improvement of this essential interface.",
						"Lead the development and implementation of a collections orchestrator, establishing effective connections with banks and electronic wallets.",
					]} />
			</TimeLine>


		</div>
	);
};

export default RecentWorks;
