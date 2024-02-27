import Link from 'next/link';
import React from 'react';

function Navbar() {
	return (
		<div className="flex place-content-center place-items-center bg-[#212731] w-screen py-2 ">
			{/* this is the navbar */}
			<nav className="flex gap-16">
				{/* this is the search box */}
				<div className="flex place-items-center bg-white px-3 py-2 rounded-lg cursor-text ">
					<img src="/images/search.png" alt="" className="h-4 w-4" />
					<input
						type="text"
						name="search"
						className="ml-2 rounded-md  text-gray-700 leading-tight focus:outline-none "
					/>
				</div>
				<Link className="text-white mt-1 font-light" href="#">
					Categories
				</Link>
				<Link className="text-white mt-1 font-light" href="#">
					Website Builders
				</Link>
				<Link className="text-white mt-1 font-light" href="#">
					Today&#39;s deals
				</Link>
			</nav>
		</div>
	);
}

export default Navbar;
