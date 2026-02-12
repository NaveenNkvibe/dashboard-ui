import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';

const MainLayout = () => {
	const [isOpen, setIsOpen] = useState(true); // Boolean values to toggle sidebar open/close state

	return (
		<div className="flex">
			<Sidebar isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
			<div className={`bg-[#E7E7E7] min-h-screen flex-1 overflow-x-hidden transition-all duration-300 p-8 ${isOpen ? 'md:ml-64' : 'ml-16'}`}>
				{/* <div className="flex-1 bg-[#E7E7E7] min-h-screen"> */}
				<Navbar />
				<main className="py-6 px-0">
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default MainLayout;
