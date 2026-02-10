import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { expensesData } from "../../data/expensesData"; // Data for the chart values

const COLORS = ["#D07A16", "#E0E0E0"]; // Pie Chart value colors

const ExpensesChart = () => {
  return (
    <div className="flex flex-col items-center w-full">

      <h3 className="text-xl font-semibold text-[#2D2D2D] self-start mb-6">
        Expenses
      </h3>

      <div className="relative w-full h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={expensesData}
              startAngle={180}
              endAngle={0}
              innerRadius={70}
              outerRadius={90}
              paddingAngle={0}
              cornerRadius={6}
              dataKey="value"
            >
              {expensesData.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-semibold text-[#232323]">
            {`${expensesData[0].value}%`}
          </span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-4xl font-semibold text-[#232323]">
          82.5k
        </p>
        <p className="text-sm text-[#707070] mt-1">
          $21k Expenses More Than
          <br />
          Last Month
        </p>
      </div>
    </div>
  );
};

export default ExpensesChart;
