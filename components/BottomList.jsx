import React from 'react';

function BottomList() {
	return (
		<section className="bg-white p-2 my-4 rounded-xl">
			<div className="flex place-content-center mb-6">
				<img className="w-[60%]" src="/images/image.png" alt="" />
			</div>
			<div className="flex px-4 gap-2 mb-2">
				<h3 className="bg-[#F2F4F7] px-2 py-1 rounded-lg">20% Off</h3>
				<h3 className="bg-[#F2F4F7] px-2 py-1 rounded-lg">
					Limited time
				</h3>
			</div>
			<center>
				<h1 className="font-semibold text-lg ">Webbuilder 1</h1>
			</center>
			<div className=" px-4 mb-2 ">
				<h3 className="font-normal text-lg">
					Computer Modern clasic with wix support
				</h3>
			</div>
			<div className="px-4 flex gap-4 place-items-end mb-2">
				<h1 className="text-[#5C6874] text-xl">&#36;39.96</h1>
				<h3 className="text-[#9FA9B3]">&#36;49.96</h3>
				<h3 className="text-[#EF4C5D]">(20% Off)</h3>
			</div>
			<center>
				<button className="px-4 text-white bg-[#1B88F4] rounded-lg w-[90%] py-2 mb-2">
					View Deal
				</button>
			</center>
		</section>
	);
}

export default BottomList;
