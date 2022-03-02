import React from "react";
import Slider from "react-slick";
import { useLocation } from 'react-router-dom';

const Prev = ({ className, style, onClick }) => {
  const { pathname } = useLocation();
  return (
    <div
      className={`${className} arrow-custom-circle -left-8 p-7`}
      style={{
        ...style,
        background:
        pathname === '/'
        ? "center no-repeat #F8F1F1 url('https://img.icons8.com/material-rounded/24/11698E/chevron-left.png')"
        : "center no-repeat #11698E url('https://img.icons8.com/material-rounded/24/F8F1F1/chevron-left.png')"
        }}
        onClick={onClick}
        >
    </div>
  );
};

const Next = ({ className, style, onClick }) => {
  const { pathname } = useLocation();
  return (
    <div
      className={`${className} arrow-custom-circle -right-8 p-7`}
      style={{
        ...style,
        background:
        pathname === '/'
        ? "center no-repeat #F8F1F1 url('https://img.icons8.com/material-rounded/24/11698E/chevron-right.png')"
        : "center no-repeat #11698E url('https://img.icons8.com/material-rounded/24/F8F1F1/chevron-right.png')"
        }}
      onClick={onClick}
    >
    </div>
  );
};

const ProductSlider = ({ departments, itemClick, className, title }) => {
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
  const blueElement = {
    backgroundColor: "#11698E",
    color: "#FFF",
  };
  const whiteElement = {
    backgroundColor: "#FFF",
    color: "#000",
  };
  const { pathname } = useLocation();

    return (
        <div className={`${className} px-8`}>
      {title && (
        <div className="w-full pb-4 flex justify-center md:justify-start items-end">
          <p className="text-4xl">{title}</p>
        </div>
      )}
      <Slider {...settings}>
        {departments.map((department) => (
          <div className="p-1" key={`slider-item-${department.id}`}>
            <div
              className="block mx-2 w-auto hover-scale--min overflow-hidden rounded-lg shadow-slider cursor-pointer"
              onClick={(e) => itemClick(e, department.id)}
            >
              <div
                style={pathname === "/" ? whiteElement : blueElement}
                className="flex flex-col flex-1 justify-between py-4 px-10"
              >
                <div className="flex-1">
                  <div className="block text-center">
                    <span className="text-xl font-bold leading-7">
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
