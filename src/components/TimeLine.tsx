import React from "react";
interface Props {
	date: string;
	title: string;
	subtitle: string;
	icon: React.ReactNode;
	children: React.ReactNode;
}

const TimeLine: React.FC<Props> = ({ icon, date, title, subtitle, children }) => {

	return (
		<div className="relative">
			<div className="md:flex items-center md:space-x-4 mb-3">
				<div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">

					<div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
						{icon}
					</div>

					<time className="font-caveat font-medium text-sm text-orange-500 md:w-28">{date}</time>
				</div>

				<div className="text-slate-500 ml-14">
					<span className="text-slate-900 font-bold">{title}</span> {subtitle}
				</div>
			</div>

			<div className="bg-white p-4 rounded-md border-[0.05rem] border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
				{children}
			</div>
		</div>
	)
}

export default TimeLine;
