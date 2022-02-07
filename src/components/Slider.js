import React from "react";
import Slider from "react-slick";

const Prev = (props) => {
	const { className, style, onClick } = props;
  return (
    <div
      className={`${className} arrow-custom-circle`}
      style={{
        ...style,
        display: "block",
        background:
          "no-repeat center white url('https://img.icons8.com/material-rounded/24/000000/chevron-left.png')",
      }}
      onClick={onClick}
    />
  );
};
const Next = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} arrow-custom-circle`}
      style={{
        ...style,
        display: "block",
        background:
          "no-repeat center white url('https://img.icons8.com/material-rounded/24/000000/chevron-right.png')",
      }}
      onClick={onClick}
    />
  );
};

const ProductSlider = ({ data, categories, itemClick, className, title }) => {
	const settings = {
		className: "px-2 xl:px-10",
		dots: false,
    rows: 1,
    slidesToShow: 3,
		slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Prev />,
    speed: 600,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
	};

	return (
    <div className={`${className} px-8`}>
			{title && (
				<div className="w-full pb-4 flex justify-center md:justify-start items-end">
					<p className="text-4xl text-white">{title}</p>
				</div>
			)}
			<Slider {...settings}>
				{data.map((item) => (
					<div className="p-1" key={item}>
						<div
							className="block mx-2 w-auto hover-scale--min overflow-hidden rounded-lg shadow-slider cursor-pointer"
							onClick={(e) => itemClick(e, item.id, categories)}
						>
							<div className="flex flex-col flex-1 justify-between py-4 px-10 bg-white">
								<div className="flex-1">
									<div className="block text-center">
										<span className="text-xl font-normal leading-7 text-black">
											{item.name}
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
