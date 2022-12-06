import React from "react";
import Slider from "react-slick";
import "../css/carousel.css";

function MultipleKarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <h2 className="h2_hajvery mb-bottom text-start margin-left-mb">
          HAJVERY
          <br /> University <br/>BY THE <br />
          NUMBERS
        </h2>

        <Slider {...settings}>
          <div className="height d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center height-2">
              <p className="pp">5</p>
              <span className="color">Total Campuses</span>
            </div>
          </div>
          <div className="height d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center height-2">
              <p className="pp">95%</p>
              <span className="color">Employement Rate</span>
            </div>
          </div>
          <div className="height d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center height-2">
              <p className="pp">155</p>
              <span className="color">Study Abroad Programs</span>
            </div>
          </div>
          <div className="height d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center height-2">
              <p className="pp">550+</p>
              <span className="color">Faculty Members</span>
            </div>
          </div>
          <div className="height d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center height-2">
              <p className="pp">1000+</p>
              <span className="color">Research Publications</span>
            </div>
          </div>
          <div className="height d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center height-2">
              <p className="pp">26080+</p>
              <span className="color">Alumni</span>
            </div>
          </div>
          <div className="height d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center height-2">
              <p className="pp">8000+</p>
              <span className="color">Enrolled Students</span>
            </div>
          </div>
          <div className="height d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center height-2">
              <p className="pp">1:16</p>
              <span className="color">Student Teacher Ratio</span>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
export default MultipleKarousel;
