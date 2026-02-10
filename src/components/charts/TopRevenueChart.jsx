import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import { topRevenueData } from "../../data/topRevenueData"; // Data for the chart values

const TopRevenueChart = () => {
  return (
    <div className="w-full h-full">

      <h3 className="text-xl font-semibold text-[#2D2D2D] mb-6">
        Top Revenue
      </h3>

      <div className="w-full h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={topRevenueData}
              dataKey="value"
              innerRadius={70}
              outerRadius={110}
              paddingAngle={1}
              cornerRadius={6}
            >
              {topRevenueData.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-wrap justify-start gap-x-9 gap-y-4 mt-6">
        {topRevenueData.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="text-sm text-[#2D2D2D]">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRevenueChart;
