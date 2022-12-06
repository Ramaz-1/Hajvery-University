import React, { useState } from "react";
import Navbars from "../../Components/navbar";
import Carousel from "react-bootstrap/Carousel";
import "./faculty.scss";
import Slider from "react-slick";
import Footer from "../../Components/Footer";
function Faculty() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const settings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
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
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const slickContainer = [
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/PHEC_2022-01-300x300.png",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/PHEC_2022-01-300x300.png",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/HEC_2022-01-300x300.png",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/PEC_2022-01-300x300.png",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/PEC_2022-01-300x300.png",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/BISE-LOGO_01-01-300x300.png",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/BISE-LOGO_01-01-300x300.png",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/PCP_2022-01-300x300.png",
    },
  ];
  return (
    <>
    <div className="wrapper">
      <div>
        <Navbars />
      </div>

      <div className="bgImg">
        <img
          src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Faculty-of-Business-Admisnistration.jpg"
          alt=""
        />
      </div>

      <div className="container-fluid">
        <div className="row my-2">
          <div className="col-md-3 border-right-hr p-3">
            <div className="line-maroon"></div>
          </div>
          <div className="col-md-8">
            <h2 className="text-start maroon heading-text">Degree Programs</h2>
            <p className="blog-text line-height">
              HU is Top Ranking inter-disciplinary Research and Teaching
              University offering 65+ Degree Programs From Bachelors’ to
              Doctorate level. HU is one of the most accessible and affordable
              Universities. Our students get unprecedented support from our
              staff and renowned faculty. Our curriculum is industry-driven, and
              our Professors are well-known for their experience and dedication
              in helping their students succeed. We prepare our students with
              hands-on experience, specialized internships & mentoring programs.
              View Our <strong className="maroon">Prospectus</strong>.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex flex-column align-items-center my-3">
            <div className="faculty-pics outline-yellow-border">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2022/01/ADP-business-administration_01.jpg"
                alt=""
              />
            </div>
            <h2 className="heading-text maroon my-4">ADP Business</h2>

            <div className="learn-more-btn animation-learn-more my-4">
              <p className="blog-text">Learn More</p>
            </div>
          </div>

          <div className="col-md-4 d-flex flex-column align-items-center my-3">
            <div className="faculty-pics outline-yellow-border">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2022/01/ADP-business-administration_01.jpg"
                alt=""
              />
            </div>
            <h2 className="heading-text maroon my-4">ADP Business</h2>

            <div className="learn-more-btn animation-learn-more my-4">
              <p className="blog-text">Learn More</p>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center my-3">
            <div className="faculty-pics outline-yellow-border">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2022/01/ADP-business-administration_01.jpg"
                alt=""
              />
            </div>
            <h2 className="heading-text maroon my-4">ADP Business</h2>

            <div className="learn-more-btn animation-learn-more my-4">
              <p className="blog-text">Learn More</p>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center my-3">
            <div className="faculty-pics outline-yellow-border">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2022/01/ADP-business-administration_01.jpg"
                alt=""
              />
            </div>
            <h2 className="heading-text maroon my-4">ADP Business</h2>

            <div className="learn-more-btn animation-learn-more my-4">
              <p className="blog-text">Learn More</p>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center my-3">
            <div className="faculty-pics outline-yellow-border">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2022/01/ADP-business-administration_01.jpg"
                alt=""
              />
            </div>
            <h2 className="heading-text maroon my-4">ADP Business</h2>

            <div className="learn-more-btn animation-learn-more my-4">
              <p className="blog-text">Learn More</p>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center my-3">
            <div className="faculty-pics outline-yellow-border">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2022/01/ADP-business-administration_01.jpg"
                alt=""
              />
            </div>
            <h2 className="heading-text maroon my-4">ADP Business</h2>

            <div className="learn-more-btn animation-learn-more my-4">
              <p className="blog-text">Learn More</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 border-right-hr p-3">
            <div className="line-maroon"></div>
          </div>
          <div className="col-md-8 p-3">
            <h2 className="text-start maroon faculty-font">
              The Vision & Mission
            </h2>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <p className="blog-text font-weight-bold">
              One University Endless Possibilities
            </p>
            <p className="heading-text maroon faculty-font">The Vision</p>
            <p className="line-height blog-text my-3">
              HU is committed to imparting knowledge & cultivating an Ummah of
              enlightened minds. We believe education is the liberating force
              that allows an individual to live a worthwhile life of personal
              satisfaction & be of service as a human being & a citizen
            </p>
            <img
              className="img-fluid"
              src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Vision.jpg"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid"
              src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Mission.jpg"
              alt=""
            />
            <p className="blog-text font-weight-bold my-2">
              One University Endless Possibilities
            </p>
            <p className="heading-text maroon faculty-font">The Vision</p>
            <p className="line-height blog-text my-3">
              HU is committed to imparting knowledge & cultivating an Ummah of
              enlightened minds. We believe education is the liberating force
              that allows an individual to live a worthwhile life of personal
              satisfaction & be of service as a human being & a citizen
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 border-right-hr p-3">
            <div className="line-maroon"></div>
          </div>
          <div className="col-md-8 p-3">
            <h2 className="text-start maroon faculty-font">OUR CAMPUSES</h2>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 ">
            <p className="blog-text line-height text-center">
              HU has the most modern and state-of-the-art campuses located in
              Lahore, Multan, and Sheikhupura. The University Campuses are
              equipped with the most modern and latest gadgets to raise the
              teaching standards and to come at par with the International
              Educational Norms. HU guarantees the highest academic standards on
              all its Campuses. Our dedicated faculty travel between campuses or
              deliver simultaneously, multi-campus lectures by means of
              video-conferencing.
            </p>
            <div className="d-flex justify-content-center">
              <div className="learn-more-btn animation-learn-more my-4">
                <p className="blog-text">View Campuses</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Main_Campus.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Sheikhupura_Campus.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2021/12/EURO-CAMPUS.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="my-5 position-relative">
        <video
          loop="loop"
          autoplay="autoplay"
          muted="muted"
          height="500"
          controls
        >
          <source
            src="https://www.hup.edu.pk/wp-content/uploads/2022/01/video-4-partner-university.mp4"
            type="video/mp4"
          />
        </video>
        <div className="position-world-class">
          <h2 className="mb-h2-font">
            <span className="maroon">WORLDWIDE</span> AND{" "}
            <span className="white">WORLD-CLASS</span>
          </h2>
          <p className="text-center white blog-text">
            70+ Programs , 15+ Countries PARTNER UNIVERSITIES
          </p>

          <div className="d-flex justify-content-center">
            <div className="learn-more-btn animation-learn-more my-4">
              <p className="blog-text">Partner Universities</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 border-right-hr p-3">
            <div className="line-maroon"></div>
          </div>
          <div className="col-md-8 p-3">
            <h2 className="text-start maroon faculty-font">
              Charter, Reputation, And Accreditation
            </h2>
          </div>

          <div className="col-md-12">
            <p className="line-height blog-text">
              Hajvery University (HU) has been granted Charter by Govt. of
              Punjab(Pb. Ord. LIX of 2002) as an Autonomous Degree Awarding
              University. Our Degrees are accredited by the Higher Education
              Commission (HEC), Pharmacy Council of Pakistan (PCP), Pakistan
              Engineering Council(PEC), and all other relevant accreditation
              bodies. HU has evolvedinto a premier institution of higher
              learning in the country.Recognized by the Higher Education
              Commission (HEC) as a “W4” Category(highest rank) university.
            </p>
          </div>
        </div>
      </div>
<div>
<div className="container-fluid height-slick-carousel">
        <div className="position-relative">
          <div className="position-mini-carousel d-flex justify-content-center">
            <Slider {...settings}>
              {slickContainer.map((items) => (
                <div className="my-5 career-opportunities-img">
                  <img className="" src={items.img} alt="" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
</div>
<div className="container-fluid my-5">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-md-3">
            <h2 className="h1 maroon">Question?</h2>
          </div>
          <div className="col-md-7 widthImg img">
            <img src="./images/I-love-Hajvery.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="container-fluid my-5">
        <div className="row d-flex justify-content-around">
          <div className="col-md-3 animation-box my-3">
            <div className="text">
              <h2 className="text-center h3">TOP NOTCH FACULTY</h2>
            </div>
          </div>
          <div className="col-md-4 animation-box my-3">
            <div className="text">
              <h2 className="text-center h3">FEE STRUCTURE</h2>
            </div>
          </div>
          <div className="col-md-3 animation-box my-3">
            <div className="text">
              <h2 className="text-center h3">APPLY NOW</h2>
            </div>
          </div>
        </div>
      </div>

</div>
<div className="footer">
<Footer/>
</div>
    </>
  );
}

export default Faculty;
