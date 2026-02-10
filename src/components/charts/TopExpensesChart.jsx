import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { topExpensesData, totalExpenses } from "../../data/topExpensesData"; // Data for the chart values

const TopExpensesChart = () => {
  return (
		<div className="w-full h-full">
			<h3 className="text-xl font-semibold text-[#2D2D2D] mb-6">Top Expenses</h3>

			<div className="relative w-full h-[220px]">
				<ResponsiveContainer width="100%" height="100%">
					<PieChart>
						<Pie data={topExpensesData} startAngle={180} endAngle={0} innerRadius={90} outerRadius={110} paddingAngle={1} cornerRadius={6} dataKey="value">
							{topExpensesData.map((entry, index) => (
								<Cell key={index} fill={entry.color} />
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>

				<div className="absolute inset-0 flex flex-col justify-start items-center mt-12">
					<span className="text-sm text-[#2D2D2D]">Total Expenses</span>
					<span className="text-4xl font-semibold text-[#232323]">${totalExpenses.toLocaleString()}</span>
				</div>
			</div>

			<div className="border-t my-6 border-[#D9D9D9]"></div>

			<div className="flex justify-between items-start gap-6 flex-wrap">
				{topExpensesData.map((item) => (
					<div key={item.name} className="flex items-start gap-3">
						<span className="w-3 h-3 rounded-full mt-1" style={{ backgroundColor: item.color }}></span>

						<div>
							<p className="text-sm text-[#2D2D2D]">
								{item.name} ({item.value}%)
							</p>
							<p className="text-lg font-semibold text-[#232323]">${item.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
						</div>
					</div>
				))}
			</div>
		</div>
  );
};

export default TopExpensesChart;
