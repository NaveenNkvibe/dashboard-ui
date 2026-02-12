import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import { useRef } from 'react';

const MainLayout = () => {
	const [isOpen, setIsOpen] = useState(true); // Boolean values to toggle sidebar open/close state
	const sidebarRef = useRef(null);

	useEffect(() => {
		function handleClickOutside(event) {
			if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		} // Checks clicks outside of sidebar

		document.addEventListener('mousedown', handleClickOutside); // Event listener to check clicks anywhere on the page

		return () => {
			document.removeEventListener('mousedown', handleClickOutside); // clean up function
		};
	}, [isOpen]);

	return (
		<div className="flex">
			<div ref={sidebarRef}>
				<Sidebar isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
			</div>
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
