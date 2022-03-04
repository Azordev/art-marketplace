import React from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "./Arrows";

const fontColor = {
	blueElement: {
		backgroundColor: "#11698E",
		color: "#FFF",	
	},
	whiteElement: {
		backgroundColor: "#F8F1F1",
		color: "#000",
	}
};
const arrowColor = {
	blueElement: {
		backgroundColor: "#F8F1F1",
		color: "#11698E",
	},
	whiteElement: {
		backgroundColor: "#11698E",
		color: "#F8F1F1",
	},
};

const Prev = ({ className, style, onClick, home }) => {
	return (
		<div
			className={`${className} arrow-custom-circle`}
			style={{
				...style,
				...(home ? arrowColor.blueElement : arrowColor.whiteElement),
			}}
			onClick={onClick}
		>
			<ArrowLeft />
		</div>
	);
};
const Next = ({ className, style, onClick, home }) => {
	return (
		<div
			className={`${className} arrow-custom-circle`}
			style={{
				...style,
				...(home ? arrowColor.blueElement : arrowColor.whiteElement),
			}}
			onClick={onClick}
		>
			<ArrowRight />
		</div>
	);
};

const ProductSlider = ({
	data,
	departments,
	itemClick,
	className,
	title,
	home,
}) => {
	const settings = {
		className: "px-2 xl:px-10",
		dots: false,
		rows: 1,
		slidesToShow: 3,
		slidesToScroll: 1,
		nextArrow: <Next home={home} />,
		prevArrow: <Prev home={home} />,
		speed: 600,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<div className={`${className} px-8`}>
			{title && (
				<div className="w-full pb-4 flex justify-center md:justify-start items-end">
					<p className={`text-4xl mt-4 ${home && "text-white"}`}>{title}</p>
				</div>
			)}
			<Slider {...settings}>
				{departments.map((department, index) => (
					<div className="p-1" key={`slider-item-${index}`}>
						<div
							className="block mx-2 w-auto hover-scale--min overflow-hidden rounded-lg shadow-slider cursor-pointer"
							onClick={(e) => itemClick(e, department.id)}
						>
							<div
								style={home ? fontColor.whiteElement : fontColor.blueElement}
								className="flex flex-col flex-1 justify-between py-4 px-10"
							>
								<div className="flex-1">
									<div className="block text-center">
										<span className="text-xl leading-7 text-slider">
											{department.es}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default ProductSlider;
