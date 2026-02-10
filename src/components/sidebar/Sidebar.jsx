import { NavLink } from 'react-router-dom';
import { sidebarData } from '../../data/sidebarData';
import { useState } from 'react';

const Sidebar = ({ isOpen, toggle }) => {

	const [isMenuOpen, setIsMenuOpen] =useState(false) // Boolean values to toggle sub menu open/close state

	return (
		<aside className={`fixed top-0 left-0 z-50 bg-[#E7E7E7] h-screen transition-all duration-300 shadow-[4px_0px_16px_0px_#0000000D] ${isOpen ? 'w-64' : 'w-16'}`}>
			<div className="flex items-center justify-between p-4 mb-14">
				{isOpen && <span className="font-light text-lg text-[#232323]">Finbook Global</span>}
				<button onClick={toggle} className="text-xl text-[#232323]">
					<i className="ri-menu-line"></i>
				</button>
			</div>

			<div className="flex flex-col h-full justify-start gap-10">
				<section className="px-4 space-y-2">
					{sidebarData.map((item) => (
						<div key={item.name}>
							<NavLink to={item.link || '#'} className={({ isActive }) => `flex items-center justify-between gap-3 p-2 rounded transition-colors duration-200 ${isActive ? 'bg-[linear-gradient(90deg,#444F8A_0%,#505FAA_100%)] text-white' : 'bg-transparent text-[#2D2D2D] hover:bg-[#d5d6d8] hover:text-white'}`}>
								<div className="flex justify-start gap-2">
									<i className={`${item.icon} text-lg`} />
									{isOpen && <span>{item.name}</span>}
								</div>
								{item.submenu && isOpen && <i className="ri-arrow-down-s-line transition-transform duration-200" />}
							</NavLink>

							{item.submenu && isOpen && isMenuOpen && (
								<div className="ml-8 mt-1 space-y-1">
									{item.submenu.map((sub) => (
										<NavLink key={sub.name} to={sub.link} className={({ isActive }) => `block p-2 text-sm rounded hover:bg-[#444F8A] ${isActive ? 'bg-[linear-gradient(90deg,#444F8A_0%,#505FAA_100%)] text-white' : 'bg-transparent text-[#2D2D2D] hover:bg-[#d5d6d8] hover:text-white'}`}>
											{sub.name}
										</NavLink>
									))}
								</div>
							)}
						</div>
					))}
				</section>
				{isOpen && (
					<div className="flex flex-col gap-2 mt-4">
						<div className="flex flex-col justify-between items-start gap-2 rounded-[10px] p-2 bg-[linear-gradient(0deg,rgba(255,255,255,0.76)_0%,rgba(255,255,255,0.78)_100%)]">
							<button className="flex justify-start gap-2 text-xl text-[#232323] p-2 cursor-pointer w-full hover:bg-[#F2F3F5]">
								<i className="ri-questionnaire-line" />
								<span>Help</span>
							</button>
							<button className="flex justify-start gap-2 text-xl text-[#232323] p-2 cursor-pointer w-full hover:bg-[#F2F3F5]">
								<i className="ri-settings-2-line" />
								<span>Settings</span>
							</button>
						</div>
						<div className="flex flex-col justify-center items-start gap-2 rounded-[10px] p-2 bg-[linear-gradient(0deg,rgba(255,255,255,0.76)_0%,rgba(255,255,255,0.78)_100%)]">
							<button className="flex justify-start gap-2 text-xl text-[#232323] p-2 cursor-pointer w-full hover:bg-[#F2F3F5]">
								<i className="ri-logout-box-line" />
								<span>Logout</span>
							</button>
						</div>
					</div>
				)}
			</div>
		</aside>
	);
};

export default Sidebar;
