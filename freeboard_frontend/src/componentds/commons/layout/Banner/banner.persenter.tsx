import { Banner, Img } from "./banner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default function BannerUI() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // cssEase: "linear",
  };

  return (
    <>
      <Banner>
        <Slider {...settings}>
          <div>
            <Img src={"/images/slider/slider_1.png"} />
          </div>
          <div>
            <Img src={"/images/slider/slider_2.png"} />
          </div>
          <div>
            <Img src={"/images/slider/slider_3.png"} />
          </div>
          <div>
            <Img src={"/images/slider/slider_4.png"} />
          </div>
          <div>
            <Img src={"/images/slider/slider_5.png"} />
          </div>
          <div>
            <Img src={"/images/slider/slider_6.png"} />
          </div>
        </Slider>
      </Banner>
    </>
  );
}
