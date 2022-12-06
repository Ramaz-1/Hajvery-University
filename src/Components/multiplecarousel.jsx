import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Itemkarousel() {
  const sliderText = [
    {
      title: "HU DEBATING SOCIETY",
      img: "./images/3cccf699.jpg",
    },
    {
      title: "HU PHOTOGRAPHERS SOCIETY",
      img: "./images/27c1d151.jpg",
    },
    {
      title: "HU DEBATING SOCIETY",
      img: "./images/3c90f58f.jpg",
    },
    {
      title: "HU DRAMATICS SOCIETY",
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/11/ebdf79c0.jpg",
    },

    {
      title: "HU PHOTOGRAPHERS SOCIETY",
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/11/b4bd061c.jpg",
    },
    {
      title: "HU GAMES SOCIETY",
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/11/3cccf699.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    loop: true,

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
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    breakpoint: {
      breakpoint: { max: 1368, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Carousel className="carouselPosition" responsive={responsive}>
        {sliderText.map((item) => (
          <div className="mx-1 position-relative itemKarousel-height">
            <img className="img-brightness" src={item.img} alt="" />
            <div className="position-to-absolute">
              <p className="text-start">{item.title}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}
export default Itemkarousel;
