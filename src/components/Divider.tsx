import React from "react";

interface Props {
	margin?: number;
}

const Divider: React.FC<Props> = ({ margin = 4}) => {
	return (
		<div className={`my-${margin} sm:my-${margin + 2} lg:my-${margin + 4} border-t border-neutral-100`} />
	)
}

export default Divider
