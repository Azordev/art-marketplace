import React from "react";

const Pagination = () => {
	return (
		<div className="flex flex-col items-center xl:items-start my-12 justify-center">
			<div className="flex text-gray-700">
				<div className="h-12 w-12 mr-1 flex justify-center items-center rounded-full cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<div className="flex h-12 text-2xl font-bold rounded-full space-x-8">
					<div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full bg-black text-white">
						1
					</div>
					<div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full">
						2
					</div>
					<div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
						3
					</div>
					<div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
						4
					</div>
					<div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
						5
					</div>
					<div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full ">
						6
					</div>
					<div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
						...
					</div>
				</div>
				<div className="h-12 w-12 ml-1 flex justify-center items-center rounded-full cursor-pointer">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Pagination;
