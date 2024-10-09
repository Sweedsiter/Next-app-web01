"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

function AutoSlick() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 6000,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container w-full">
      <Slider {...settings}>
        <div className=" p-1 flex flex-col justify-center">
          <div className="duration-300 border p-3 hover:bg-slate-900 hover:text-slate-100 desktop:bg-slate-100">
            <Image
              src="/boo02.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <span className="flex flex-col pt-3">
              <h1>Name Company</h1>
              <div>Details Coments</div>
            </span>
          </div>
        </div>
        <div className=" p-1 flex flex-col justify-center">
          <div className="duration-300 border p-3 hover:bg-slate-900 hover:text-slate-100 desktop:bg-slate-100">
            <Image
              src="/boo02.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <span className="flex flex-col pt-3">
              <h1>Name Company</h1>
              <div>Details Coments</div>
            </span>
          </div>
        </div>
        <div className=" p-1 flex flex-col justify-center">
          <div className="duration-300 border p-3 hover:bg-slate-900 hover:text-slate-100 desktop:bg-slate-100">
            <Image
              src="/boss01.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <span className="flex flex-col pt-3">
              <h1>Name Company</h1>
              <div>Details Coments</div>
            </span>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default AutoSlick;
