import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Navbars from "../../Components/navbar";
import Footer from "../../Components/Footer";
const Convocation = () => {
  const swiperSliderImg = [
    {
      src: "https://www.hup.edu.pk/wp-content/uploads/2021/02/2016-300x200.jpg",
    },
    {
      src: "https://www.hup.edu.pk/wp-content/uploads/2021/02/2019-300x200.jpg",
    },
    {
      src: "https://www.hup.edu.pk/wp-content/uploads/2021/02/2016-300x200.jpg",
    },
    {
      src: "https://www.hup.edu.pk/wp-content/uploads/2021/02/2015-300x199.jpg",
    },
    {
      src: "https://www.hup.edu.pk/wp-content/uploads/2021/02/2016-300x200.jpg",
    },
  ];
  const readerBox = [
    {
      title: "Charter and Accreditations",
      description:
        "NOTICE: Any items returned with pet hair or smoke smell will NOT be accepted and will be returned to the customer.",
    },
    {
      title: "Facts & Figures",
      description:
        "Hajvery University (HU) is a leading university in Pakistan that is committed to international excellence through the creation of world-changing research and high-quality, inspirational teaching",
    },
    {
      title: "International Partner Universities",
      description:
        "Hajvery University(HU) has signed bilateral agreements with over 80+ Partner Universities across Asia, Europe, Middle East and America. Our students have the opportunity to Study Abroad at any destination of their choice",
    },
  ];

  return (
    <>
    <div className="bg-white">
      <div>
        <Navbars />
      </div>
      <div className="bgImg">
        <img
          src="https://www.hup.edu.pk/wp-content/uploads/2021/08/Convocation.jpg"
          alt=""
        />
      </div>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-5 d-flex flex-column justify-content-center">
            <h2 className="h1 text-start heading-text">Convocation Ceremony</h2>
            <p className="blog-text line-height">
              Convocation is a very special event that brings together graduates
              and members of the Hajvery University (HU) community. For
              graduating students, it is a time to celebrate their
              accomplishments in front of family and friends. And for members of
              the University community, it is a time to celebrate the efforts of
              students they have supported during their studies at the Hajvery
              University (HU).
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="img-fluid"
              src="https://www.hup.edu.pk/wp-content/uploads/2020/11/con-cermony.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <h2 className="tex-center heading-text">Pervious Convocations Held</h2>
      <div className="hu-convocation-section my-5">
        <video
          loop="loop"
          autoplay="autoplay"
          muted="muted"
          height="800"
          controls
        >
          <source
            src="./images/videoplayback.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {swiperSliderImg.map((item) => (
            <SwiperSlide>
              <img className="img-fluid" src={item.src} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container-fluid my-5 bg-row-grey d-flex flex-column align-items-center justify-content-center">
        <div className="row my-5 d-flex justify-content-center">
          <h2 className="text-center heading-text my-5">Our Gallery</h2>

          <div className="col-md-2">
            <img
              className="img-fluid"
              src="https://www.hup.edu.pk/wp-content/uploads/2021/02/Our-Gallery_01.jpg"
              alt=""
            />
          </div>
          <div className="col-md-2">
            <img
              className="img-fluid img-lg-height"
              src="https://www.hup.edu.pk/wp-content/uploads/2021/02/Our-Gallery_02.jpg"
              alt=""
            />
          </div>
          <div className="col-md-2">
            <img
              className="img-fluid"
              src="https://www.hup.edu.pk/wp-content/uploads/2021/02/Our-Gallery_03.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="row my-5 d-flex justify-content-center">
          <div className="col-md-2">
            <img
              className="img-fluid"
              src="https://www.hup.edu.pk/wp-content/uploads/2021/02/Our-Gallery_04-scaled.jpg"
              alt=""
            />
          </div>
          <div className="col-md-2"></div>
          <div className="col-md-2">
            <img
              className="img-fluid"
              src="https://www.hup.edu.pk/wp-content/uploads/2021/02/Our-Gallery_05-scaled.jpg"
              alt=""
            />
          </div>
        </div>

        <div>
          <button className="btn-btn-see-more my-5">See More</button>
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          <div className="col-md-5 d-flex flex-column justify-content-center">
            <h2 className="h1 text-start heading-text">Convocation News</h2>
            <p className="blog-text line-height">
              HU convocations are held at regular intervals to celebrate the
              academic excellence of its graduates, lauded the efforts of the
              students who achieved their degrees through hard work and
              perseverance. HU is committed to continuing to produce the best
              Engineers, Entrepreneurs, Fashion Designers, Producers, Anchors,
              Pharmacists, Economists, Software Engineers, and a host of other
              Professionals, thus contributing towards the nation-building of
              Pakistan.
            </p>
          </div>
          <div className="col-md-5">
            <img
              className="img-fluid"
              src="https://www.hup.edu.pk/wp-content/uploads/2020/12/cov-2019.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="container-fluid bg-row-grey">
        <div className="row d-flex justify-content-center my-5">
          <h2 className="my-5 heading-text">HU At a Glance</h2>

          {readerBox.map((item) => (
            <div className="col-md-2 box-shadow-column bg-white mx-4 my-5 p-4">
              <h2 className="blog-text font-weight-bold my-3">{item.title}</h2>
              <div className="description-text-box">
                <p className="blog-text my-5 ">{item.description}</p>
              </div>
              <div className="d-flex justify-content-center my-4">
                <button className="btn-btn-see-more d-flex">
                  <p>Read More</p>
                  <span>
                    <i class="bi bi-stop"></i>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      <div>
        
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Convocation;
