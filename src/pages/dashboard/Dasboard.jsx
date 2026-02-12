import DashboardSection from "../../components/cards/DashboardSection";
import ExpensesChart from "../../components/charts/ExpensesChart";
import PerformanceOverview from "../../components/charts/PerformanceCharts";
import SummaryLineChart from "../../components/charts/SummaryLineChart";
import TopExpensesChart from "../../components/charts/TopExpensesChart";
import TopRevenueChart from "../../components/charts/TopRevenueChart";
import DashboardWidget from "../../components/widgets/DashboardWidget";
import { dashboardCards, dashboardWidgets } from "../../data/dashboardData";

const Dashboard = () => {
	return (
		<div className="flex flex-col items-start justify-center h-full">
			<h1 className="text-[#232323] text-2xl font-semibold pb-2">Dashboard</h1>
			<section className="flex justify-start items-center w-full gap-8 mb-8 flex-wrap">
				{dashboardCards &&
					dashboardCards.map((card, index) => {
						return <DashboardSection key={card.id} icon={card.icon} title={card.title} />;
					})}
			</section>

			<section className="flex justify-start items-center w-full gap-8 mb-8 flex-wrap">
				{dashboardWidgets &&
					dashboardWidgets.map((widget, index) => {
						return <DashboardWidget key={widget.id} icon={widget.icon} title={widget.title} amount={widget.amount} />;
					})}
			</section>

			<section className="graph-container flex flex-col justify-start items-center gap-8 w-full mb-8">
				<div className="performance-graph bg-white w-full py-[32px] px-[16px] sm:px-[35px] rounded-2xl shadow-[0px_4px_25px_0px_#0000000D]">
					<PerformanceOverview />
				</div>
				<div className="flex flex-col lg:flex-row justify-center items-center gap-8 w-full h-auto w-full">
					<div className="flex justify-center items-center rounded-3xl bg-white flex-1 py-[32px] px-[16px] sm:px-[35px] w-full">
						<TopExpensesChart />
					</div>
					<div className="flex justify-center items-center rounded-3xl bg-white flex-1 py-[32px] px-[16px] sm:px-[35px] w-full">
						<TopRevenueChart />
					</div>
				</div>
				<div className="flex flex-col justify-center items-center gap-8 w-full h-auto lg:flex-row w-full">
					<div className="flex justify-center items-center rounded-3xl bg-white flex-[4] py-[32px] px-[16px] sm:px-[35px] w-full">
						<SummaryLineChart />
					</div>
					<div className="flex justify-center items-center rounded-3xl bg-white flex-1 py-[32px] px-[16px] sm:px-[35px] w-full">
						<ExpensesChart />
					</div>
				</div>
			</section>
		</div>
	);
};

export default Dashboard;
