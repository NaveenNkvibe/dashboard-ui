import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { summaryChartData } from "../../data/summaryChartData";

const SummaryLineChart = () => {
  return (
		<div className="flex w-full gap-10">
			<div className="min-w-[220px] flex flex-col justify-between items-start">
				<h3 className="text-xl font-semibold text-[#2D2D2D] mb-6">Summary</h3>

				<div>
					<p className="text-base text-[#2D2D2D] mb-2">Total Spend</p>

					<p className="text-5xl font-semibold text-[#232323] mb-4">$4,652.42</p>

					<span className="inline-flex items-center gap-1 bg-[#15BF64] text-white text-sm px-3 py-1 rounded-full mb-3">
						Increased By 20%
						<span>
							<i class="ri-arrow-right-up-long-line"></i>
						</span>
					</span>

					<p className="text-sm text-[#2D2D2D]">Compared To Last Year</p>
				</div>
			</div>

			<div className="w-px bg-gray-200"></div>

			<div className="flex-1">
				<div className="flex justify-end mb-4">
					<select className="border rounded-lg px-4 py-2 text-sm text-[#434343]">
						<option>Expense</option>
						<option>Revenue</option>
					</select>
				</div>

				<div className="h-[260px]">
					<ResponsiveContainer width="100%" height="100%">
						<LineChart data={summaryChartData}>
							<CartesianGrid vertical={false} strokeDasharray="4 4" />

							<XAxis dataKey="month" tick={{ fill: '#707070', fontSize: 12 }} axisLine={false} />

							<YAxis ticks={[0, 100, 300, 600]} tickFormatter={(v) => `$${v}`} tick={{ fill: '#707070', fontSize: 12 }} axisLine={false} />

							<Tooltip
								formatter={(value) => `$${value.toFixed(2)}`}
								contentStyle={{
									backgroundColor: '#232323',
									borderRadius: '6px',
									border: 'none',
									color: '#fff',
								}}
							/>

							<Line type="linear" dataKey="value" stroke="#7C72E2" strokeWidth={2} dot={false} activeDot={false} />
						</LineChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
  );
};

export default SummaryLineChart;
