import React from 'react'

const DashboardSection = ({icon, title}) => {
  return (
		<div className="flex justify-between items-center py-[7px] px-4 gap-2 rounded-lg h-[50px] bg-transparent text-[#707070] hover:text-[#FCFCFC] hover:bg-[linear-gradient(90deg,#7692FE_0%,#8268FF_100%)]">
			<i className={`${icon} w-[21px]`}></i>
			<p className="text-base font-semibold whitespace-nowrap">{title}</p>
		</div>
  );
}

export default DashboardSection
