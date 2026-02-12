import React from 'react'

const DashboardWidget = ({ chart, title, amount, icon }) => {
    return (
        <div className='flex sm:flex-row flex-col justify-between h-auto items-center bg-white p-[20px] gap-8 rounded-2xl shadow-[0px_4px_25px_0px_#0000000D]'>
            <img src={`${icon} w-[60px] h-[60px]`} alt="Widget Icon" />
            <div className='flex flex-col justify-between items-start'>
                <p className="text-[#2D2D2D] text-sm font-semibold">{title}</p>
                <p className="text-[#2D2D2D] text-[28px] font-medium">{amount}</p>
            </div>
            <img src={`${chart} w-[140px] h-[60px]`} alt="Widget Chart" />
        </div>
    )
}

export default DashboardWidget
