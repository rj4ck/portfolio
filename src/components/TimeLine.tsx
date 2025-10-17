import React from "react";
interface Props {
	date: string;
	title: string;
	subtitle: string;
	startDate?: string;
	endDate?: string;
	location: string;
	icon: React.ReactNode;
	children: React.ReactNode;
	showTimeline?: boolean;
}

const TimeLine: React.FC<Props> = ({ icon, date, title, subtitle, children, showTimeline = true, startDate, endDate, location }) => {

	return (
		<div className="relative mb-0 pb-0">
			<div className="md:flex items-center md:space-x-4 mb-0">
				{showTimeline && <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">

          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
						{icon}
          </div>

          <time className="font-caveat font-medium text-sm text-orange-500 md:w-28">{date}</time>
        </div>}


				<div className={` ${!showTimeline ? '' : 'ml-14'}`}>
					<p className={'text-xl'}>{subtitle}</p>
					<p className={'text-orange-400'}>{title}</p>
					{!showTimeline &&
            <div>
							<span className="mr-6">
								<i className="fa-solid fa-calendar-days text-[10px]" /> {startDate} - {endDate ?? "Present"}
							</span>
              <span>
								<i className="fa-solid fa-location-dot text-[10px]" /> {location}
							</span>
            </div>
					}
				</div>
			</div>

			<div
				className={`p-2 ${!showTimeline ? '' : 'bg-white text-slate-500 p-2 rounded-md border-[0.05rem] border-slate-200 shadow ml-14 md:ml-44'}`}>
				{children}
			</div>
		</div>
	)
}

export default TimeLine;
