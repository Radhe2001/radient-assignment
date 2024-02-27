'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import ItemList from './ItemList';
import BottomList from './BottomList';
function Body() {
	const [array, setArray] = useState([1, 2, 3]);
	return (
		<section className="w-[70vw] mb-2">
			{/* This is the heading of the webpage */}
			<h1 className="text-4xl py-4">Best Website builders in the US</h1>
			{/* This is for the div whose olny top and bottom border is visible */}
			<div className="flex gap-8 border-t-2 border-b-2 py-2">
				<div className="flex place-items-center gap-2 font-light text-[#717A86]">
					<img src="/images/check.png" className="h-5 w-5" />
					<h2>Last Updated - February 22, 2020</h2>
				</div>
				<div className="flex place-items-center gap-2 font-light text-[#717A86]">
					<img src="/images/info.png" className="h-5 w-5" />
					<h2>Advertising Disclosure</h2>
				</div>
				<select
					id="top"
					name="top"
					className="bg-transparent focus:outline-none text-[#8C929A] font-light ml-auto"
				>
					<option value="top">Top Relevant</option>
				</select>
			</div>
			<div className="flex gap-12 text-[#717A86] font-light mt-4 h-[5vh]">
				<Link
					href="#"
					className="py-1 px-3 hover:border-[2px] hover:border-[#8C929A] rounded-md"
				>
					Tools
				</Link>
				<Link
					href="#"
					className="py-1 px-3 hover:border-[2px] hover:border-[#8C929A] rounded-md"
				>
					AWS Builder
				</Link>
				<Link
					href="#"
					className="py-1 px-3 hover:border-[2px] hover:border-[#8C929A] rounded-md"
				>
					Start Build
				</Link>
				<Link
					href="#"
					className="py-1 px-3 hover:border-[2px] hover:border-[#8C929A] rounded-md"
				>
					Build Supplies
				</Link>
				<Link
					href="#"
					className="py-1 px-3 hover:border-[2px] hover:border-[#8C929A] rounded-md"
				>
					Tooling
				</Link>
				<Link
					href="#"
					className="py-1 px-3 hover:border-[2px] hover:border-[#8C929A] rounded-md"
				>
					BlueHosting
				</Link>
			</div>
			<div className="flex gap-3">
				<Link href="#" className="font-light text-[#717A86]">
					Home &nbsp;&nbsp;{'>'}
				</Link>
				<Link href="#" className="font-light text-[#717A86]">
					Hosting for all &nbsp;&nbsp;{'>'}
				</Link>
				<Link href="#" className="font-light text-[#717A86]">
					Hosting &nbsp;&nbsp;{'>'}
				</Link>
				<Link href="#" className="font-light text-[#717A86]">
					Hosting6 &nbsp;&nbsp;{'>'}
				</Link>
				<Link href="#" className="font-light text-[#717A86]">
					Hosting5 &nbsp;&nbsp;
				</Link>
			</div>

			<div className="mt-12 ">
				<ItemList />
			</div>
			<h1 className="text-4xl py-2">Related deals you might like for </h1>
			<div className="grid grid-cols-3 gap-6">
				{array.map((item, index) => {
					return (
						<div className="" key={index}>
							<BottomList />
						</div>
					);
				})}
			</div>
			<div className="flex place-items-center mt-2 mb-4">
				<h1 className="w-[40%] text-4xl py-2 text-[#5C6874]">
					Sign up and exclusive special deals
				</h1>
				<div className="flex ml-auto h-10 ">
					<input
						className="bg-white rounded-l-lg"
						type="text"
						name="text"
						id="text"
					/>
					<button className="bg-[#1B88F4] font-light text-white px-3 rounded-r-lg">
						Sign Up
					</button>
				</div>
			</div>
		</section>
	);
}

export default Body;
