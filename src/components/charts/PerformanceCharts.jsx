import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { performanceOverviewData } from "../../data/performanceChartData"; // Data for the chart values

const PerformanceOverview = () => {
  return (
		<div className="w-full">
			<div className="mb-6">
				<h3 className="text-xl font-semibold text-[#2D2D2D] mb-4">Performance Overview</h3>

				<div className="flex items-center gap-6 text-sm text-[#2D2D2D] mb-4">
					<span className="flex items-center gap-2">
						<span className="w-3 h-3 rounded-full bg-[#15BF64]" />
						Total Revenue
					</span>
					<div className="w-0.5 h-4 bg-[#D9D9D9]"></div>
					<span className="flex items-center gap-2">
						<span className="w-3 h-3 rounded-full bg-[#E87C6F]" />
						Total Expenses
					</span>
					<div className="w-0.5 h-4 bg-[#D9D9D9]"></div>
					<span className="flex items-center gap-2">
						<span className="w-3 h-3 rounded-full bg-[#333663]" />
						Profit
					</span>
					<div className="w-0.5 h-4 bg-[#D9D9D9]"></div>
					<span className="underline cursor-pointer">All</span>
				</div>
			</div>

			<div className="h-[320px]">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={performanceOverviewData} barGap={0} barCategoryGap={20}>
						<CartesianGrid strokeDasharray="4 4" vertical={false} />

						<XAxis dataKey="month" tick={{ fill: '#707070', fontSize: 12 }} axisLine={false} />

						<YAxis tickFormatter={(v) => `$${v}K`} tick={{ fill: '#707070', fontSize: 12 }} axisLine={false} />

						<Tooltip
							formatter={(value) => `$${value}K`}
							contentStyle={{
								backgroundColor: '#232323',
								border: 'none',
								borderRadius: '6px',
								color: '#fff',
							}}
						/>

						<Bar dataKey="revenue" fill="#15BF64" radius={[2, 2, 0, 0]} />
						<Bar dataKey="expenses" fill="#E87C6F" radius={[2, 2, 0, 0]} />
						<Bar dataKey="profit" fill="#333663" radius={[2, 2, 0, 0]} />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
  );
};

export default PerformanceOverview;
