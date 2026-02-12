import { NavLink, useLocation } from 'react-router-dom';
import { sidebarData } from '../../data/sidebarData';
import { useState } from 'react';

const Sidebar = ({ isOpen, toggle }) => {

	const location = useLocation();// get current url
	const [openMenus, setOpenMenus] = useState({}) // Boolean for menu/submenu toggle state

	const handleToggle = (name) => {
		setOpenMenus((prev) => ({
			...prev,
			[name]: !prev[name],
		}));
	}; // Update openMenu data

	const isChildActive = (children) => {
		return children?.some((child) => {
			if (child.children) {
				return isChildActive(child.children);
			}
			return location.pathname === child.link;
		});
	}; // Checks if menu contain the current active route

	const renderMenuItems = (items, level = 0) => {
		return items.map((item) => {
			const hasChildren = item.children && item.children.length > 0;
			const isActive = location.pathname === item.link;
			const childActive = isChildActive(item.children);
			const isExpanded = openMenus[item.name];

			const baseClasses = `flex items-center justify-between p-2 rounded transition-all duration-200
		${isActive || childActive ? 'bg-[linear-gradient(90deg,#444F8A_0%,#505FAA_100%)] text-white' : 'text-[#2D2D2D] hover:bg-[#d5d6d8]'}`;

			return (
				<div key={item.name}>
					<NavLink
						to={item.link || '#'}
						className={baseClasses}
						style={{ paddingLeft: `${level * 16 + 16}px` }}
						onClick={(e) => {
							if (hasChildren) {
								e.preventDefault();
								handleToggle(item.name);
							}
						}}
					>
						<div className="flex items-center gap-2">
							{item.icon && level === 0 && <i className={`${item.icon} text-lg`} />}
							{isOpen && <span className="text-sm">{item.name}</span>}
						</div>

						{hasChildren && isOpen && <i className={`ri-arrow-down-s-line transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />}
					</NavLink>

					{hasChildren && isExpanded && isOpen && <div className="mt-1 space-y-1">{renderMenuItems(item.children, level + 1)}</div>}
				</div>
			);
		});
	};


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
					{renderMenuItems(sidebarData)}
				</section>
				{isOpen && (
					<div className="flex flex-col gap-2 mt-3 mx-4">
						<div className="flex flex-col justify-between items-start gap-2 rounded-[10px] p-2 bg-[linear-gradient(0deg,rgba(255,255,255,0.76)_0%,rgba(255,255,255,0.78)_100%)]">
							<button className="flex justify-start gap-2 text-sm text-[#232323] p-2 cursor-pointer w-full hover:bg-[#F2F3F5]">
								<i className="ri-questionnaire-line text-xl" />
								<span className="text-sm">Help</span>
							</button>
							<button className="flex justify-start gap-2 text-sm text-[#232323] p-2 cursor-pointer w-full hover:bg-[#F2F3F5]">
								<i className="ri-settings-2-line text-xl" />
								<span className="text-sm">Settings</span>
							</button>
						</div>
						<div className="flex flex-col justify-center items-start gap-2 rounded-[10px] p-2 bg-[linear-gradient(0deg,rgba(255,255,255,0.76)_0%,rgba(255,255,255,0.78)_100%)]">
							<button className="flex justify-start gap-2 text-sm text-[#232323] p-2 cursor-pointer w-full hover:bg-[#F2F3F5]">
								<i className="ri-logout-box-line text-xl" />
								<span className="text-sm">Logout</span>
							</button>
						</div>
					</div>
				)}
			</div>
		</aside>
	);
};

export default Sidebar;
