import React from 'react';
import Link from 'next/link';
function Footer() {
	return (
		<div className="flex  place-content-center gap-36 pt-14 pb-24 bg-[#212731] w-screen ">
			<div className=" grid gap-1">
				<Link href="#" className="text-xl text-white font-light">
					CATEGORIES
				</Link>
				<Link href="#" className="text-[#8C929A] font-light">
					Web Builder
				</Link>
				<Link href="#" className="text-[#8C929A] font-light">
					Hosting
				</Link>
				<Link href="#" className="text-[#8C929A] font-light">
					Data Center
				</Link>
				<Link href="#" className="text-[#8C929A] font-light">
					Robotic-Automation
				</Link>
			</div>
			<div className="grid gap-1">
				<Link href="#" className="text-xl text-white font-light">
					CONTACT
				</Link>
				<Link href="#" className="text-[#8C929A] font-light">
					Contact
				</Link>
				<Link href="#" className="text-[#8C929A] font-light">
					Privacy Policy
				</Link>
				<Link href="#" className="text-[#8C929A] font-light">
					Terms Of Service
				</Link>
				<Link href="#" className="text-[#8C929A] font-light">
					Categories
				</Link>
				<Link href="#" className="text-[#8C929A] font-light">
					About
				</Link>
			</div>
			<div className="mt-12 ml-16 px-12">
				<select
					id="country"
					name="country"
					className="bg-transparent focus:outline-none text-[#8C929A] font-light"
				>
					<option value="us">United States</option>
					<option value="india">India</option>
					<option value="england">England</option>
					<option value="japan">Japan</option>
				</select>
			</div>
		</div>
	);
}

export default Footer;
