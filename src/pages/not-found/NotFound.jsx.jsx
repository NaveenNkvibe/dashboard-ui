import React from 'react'
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
		<section className="flex flex-col items-center justify-center w-full mt-8 gap-4">
			<h1 className="text-6xl font-semibold text-[#444F8A]">404</h1>
			<h4 className="text-xl font-semibold text-[#2D2D2D]">Page Not Found</h4>
			<NavLink to="/" className="mt-6 px-6 py-2 rounded bg-[#444F8A] text-white hover:bg-[#505FAA]">
				Go to Dashboard
			</NavLink>
		</section>
  );
}

export default NotFound;
