const Navbar = () => {
	return (
		<nav className="w-full bg-transparent">
			<div className="mx-auto mt-[18px] flex h-[64px] w-full max-w-[1572px] items-center justify-between rounded-[10px] border border-[#E7E7E7] bg-white px-[24px] py-[12px] backdrop-blur-md shadow-[4px_0px_16px_0px_#0000000D]">
				<div className="flex items-center gap-2 w-[360px]">
					<input type="text" placeholder="Search here..." className="w-full bg-transparent outline-none text-sm" />
				</div>

				<div className="flex items-center gap-4">
					<i className="ri-add-line text-xl cursor-pointer" />
					<i className="ri-notification-3-line text-xl cursor-pointer" />
					<div className="h-[24px] w-0.5 bg-[#D9D9D9]"></div>
					<i className="ri-account-circle-fill text-4xl text-gray-300 cursor-pointer" />
					<i className="ri-arrow-down-s-line text-4xl text-[#ACACAC] cursor-pointer" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
