import React, { useState } from "react";
import "./home.css";
import Navbars from "../../Components/navbar";
import Carousel from "react-bootstrap/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MultipleKarousel from "../../Components/carousel";
import Itemkarousel from "../../Components/multiplecarousel";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./home.scss";
import { Tab, Tabs, AppBar } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import ScrollButton from "../../Components/scrollBtn";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
const StaticImg = [
  {
    img: "./images/Faculty-of-Business-Administration_2022 (1).jpg",
  },
  {
    img: "./images/Faculty-of-Computer-Sciences.jpg",
  },
  {
    img: "./images/Faculty-of-Commerce.jpg",
  },
  {
    img: "./images/Faculty-of-Fashion-Textile-Design.jpg",
  },
];
const departmentImg = [
  {
    img: "./images/Faculty-o-f-Pharmacy_01.jpg",
  },
  {
    img: "./images/Faculty-of-Humanities-Social-Sciences_01.jpg",
  },
  {
    img: "./images/Faculty-o-fLanguages-Literature_01.jpg",
  },
  {
    img: "./images/Faculty-o-f-Law_01.jpg",
  },
  {
    img: "./images/Faculty-of-Engineering_01.jpg",
  },
  {
    img: "./images/Faculty-of-Allied-Health-Sciences_01.jpg",
  },
];
const partnerUniversities = [
  {
    img: "./images/01-1.jpg",
  },
  {
    img: "./images/02.jpg",
  },
  {
    img: "./images/03.jpg",
  },
  {
    img: "./images/04.jpg",
  },
  {
    img: "./images/05.jpg",
  },
  {
    img: "./images/06.jpg",
  },
  {
    img: "./images/07.jpg",
  },
  {
    img: "./images/08.jpg",
  },
  {
    img: "./images/09.jpg",
  },
  {
    img: "./images/10.jpg",
  },
];
const govermentDepart = [
  {
    img: "./images/hec.png",
  },
  {
    img: "./images/pec.png",
  },
  {
    img: "./images/bise.png",
  },
  {
    img: "./images/TURKEY-150x150.jpg",
  },
  {
    img: "./images/gop.png",
  },
  {
    img: "./images/gop.png",
  },
];
const inline_style = {
  indicatorColor: "red",
};
function Home() {
  const navigate=useNavigate()
  let indicatorColor = "red";
  const [value, setValue] = useState(0);
  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 3,
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

  const handleTabs = (e, val) => {
    console.log(val);
    setValue(val);
  };
const viewMore=()=>{
  navigate("/view-more")
}
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const blogPageSingleEvent=()=>{
navigate("/blo")

}
  const TabPanel = (props) => {
    const { children, value, index } = props;
    return <div>{value === index && <h1>{children}</h1>}</div>;
  };
  return (
    <>
      <div className="wrapper">
        <div>
          <Navbars />
        </div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/hajveri banner.jpg"
              alt="First slide"
            />
            {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/banner 2.jpg"
              alt="Second slide"
            />

            {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/Web-Banner-Hum-Hain-Mustaqbil-ka-Pakistan_SKP_02.jpg"
              alt="Third slide"
            />

            {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/banner4.jpg"
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="container">
          <div className="row mb-hide">
            <div className="col d-flex justify-content-center mb-hide">
              <div className="d-flex justify-content-between center-lines">
                <div className="border_bottom"></div>
                <div className="border_bottom"></div>
              </div>
            </div>
          </div>
          <h1 className="text-center mt-5 mb-hide font-weight-bold">
            News & Events
          </h1>
          <p className="text-center mt-3 p_tag mb-hide h2">
            See what’s unique about Hajvery & our 
            <small className="text-secondary mb-hide">community</small> in
            Lahore and beyond
          </p>

            <Tabs 
            className="hide"
              value={value}
              onChange={handleTabs}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#921123",
                
                },
              }}
            >
              <Tab label="News">News</Tab>
              <Tab label="Campus News">Campus News</Tab>
              <Tab label="Events">Events</Tab>
            </Tabs>
        
          <TabPanel value={value} index={0}>
            <div className="row d-flex flex-wrap border-appear mb-hide mt-4">
              <div className="col-xsm-6 col-sm-6 col-md-3 my-3">
                <div className="row_images">
                  <img
                    src="./images/Imran-Khan-pakistan-1-601x600-1-660x500.jpg"
                    alt=""
                  />
                </div>
                <p className="img_title">
                  PRIME MINISTER IMRAN KHAN GAVE AN IMPASSIONED SPEECH AT THE HU
                </p>
              </div>
              <div className="col-xsm-6 col-sm-6 col-md-3 my-3">
                <div className="row_images">
                  <img src="./images/IMG_9963-660x500.jpg" alt="" />
                </div>
                <p className="img_title">
                  PRIME MINISTER IMRAN KHAN GAVE AN IMPASSIONED SPEECH AT THE HU
                </p>
              </div>
              <div className="col-xsm-6 col-sm-6 col-md-3 my-3">
                <div className="row_images">
                  <img
                    src="./images/HU-Sports-Gala_1920-x-1080_05-e1657885458484-660x500.jpg"
                    alt=""
                  />
                </div>
                <p className="img_title">
                  PRIME MINISTER IMRAN KHAN GAVE AN IMPASSIONED SPEECH AT THE HU
                </p>
              </div>
              <div className="col-xsm-6 col-sm-6 col-md-3 my-3">
                <div className="row_images">
                  <img
                    src="./images/Health-ConferencePost_26-660x500.jpg"
                    alt=""
                  />
                </div>
                <p className="img_title">
                  PRIME MINISTER IMRAN KHAN GAVE AN IMPASSIONED SPEECH AT THE HU
                </p>
              </div>
              <div className="col-xsm-6 col-sm-6 col-md-3 my-3">
                <div className="row_images">
                  <img src="./images/mm.jpeg" alt="" />
                </div>
                <p className="img_title">
                  PRIME MINISTER IMRAN KHAN GAVE AN IMPASSIONED SPEECH AT THE HU
                </p>
              </div>
              <div className="col-xsm-6 col-sm-6 col-md-3 my-3">
                <div className="row_images">
                  <img src="./images/TedX2-1-660x500.jpg" alt="" />
                </div>
                <p className="img_title">
                  PRIME MINISTER IMRAN KHAN GAVE AN IMPASSIONED SPEECH AT THE HU
                </p>
              </div>
              <div className="col-xsm-6 col-sm-6 col-md-3 my-3">
                <div className="row_images">
                  <img src="./images/Purple-day-660x500.jpg" alt="" />
                </div>
                <p className="img_title">
                  PRIME MINISTER IMRAN KHAN GAVE AN IMPASSIONED SPEECH AT THE HU
                </p>
              </div>
              <div className="col-xsm-6 col-sm-6 col-md-3 my-3">
                <div className="row_images">
                  <img
                    src="./images/pharmacy-projects-hajvery-university-660x500.jpg"
                    alt=""
                  />
                </div>
                <p className="img_title">
                  PRIME MINISTER IMRAN KHAN GAVE AN IMPASSIONED SPEECH AT THE HU
                </p>
              </div>
              <button className="viewMore m-3" onClick={()=>viewMore()}>View More</button>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
          <div className="row d-flex flex-wrap border-appear mb-hide mt-4">
              <div className="col-xsm-6 col-sm-6 col-md-3 my-3">
                <div className="row_images">
                  <img
                    src="./images/Imran-Khan-pakistan-1-601x600-1-660x500.jpg"
                    alt=""
                  />
                </div>
                <p className="img_title">
                  PRIME MINISTER IMRAN KHAN GAVE AN IMPASSIONED SPEECH AT THE HU
                </p>
              </div>
              <div className="col-xsm-6 col-sm-6 col-md-3 my-3">
                <div className="row_images">
                  <img src="./images/IMG_9963-660x500.jpg" alt="" />
                </div>
                <p className="img_title">
                  PRIME MINISTER IMRAN KHAN GAVE AN IMPASSIONED SPEECH AT THE HU
                </p>
              </div>
              <div className="col-xsm-6 col-sm-6 col-md-3 my-3">
                <div className="row_images">
                  <img
                    src="./images/HU-Sports-Gala_1920-x-1080_05-e1657885458484-660x500.jpg"
                    alt=""
                  />
                </div>
                <p className="img_title">
                  PRIME MINISTER IMRAN KHAN GAVE AN IMPASSIONED SPEECH AT THE HU
                </p>
              </div>
              <div className="col-xsm-6 col-sm-6 col-md-3 my-3">
                <div className="row_images">
                  <img
                    src="./images/Health-ConferencePost_26-660x500.jpg"
                    alt=""
                  />
                </div>
                <p className="img_title">
                  PRIME MINISTER IMRAN KHAN GAVE AN IMPASSIONED SPEECH AT THE HU
                </p>
              </div>
              <div className="col-xsm-6 col-sm-6 col-md-3 my-3">
                <div className="row_images">
                  <img src="./images/mm.jpeg" alt="" />
                </div>
                <p className="img_title">
                  PRIME MINISTER IMRAN KHAN GAVE AN IMPASSIONED SPEECH AT THE HU
                </p>
              </div>
              <div className="col-xsm-6 col-sm-6 col-md-3 my-3">
                <div className="row_images">
                  <img src="./images/TedX2-1-660x500.jpg" alt="" />
                </div>
                <p className="img_title">
                  PRIME MINISTER IMRAN KHAN GAVE AN IMPASSIONED SPEECH AT THE HU
                </p>
              </div>
              <div className="col-xsm-6 col-sm-6 col-md-3 my-3">
                <div className="row_images">
                  <img src="./images/Purple-day-660x500.jpg" alt="" />
                </div>
                <p className="img_title">
                  PRIME MINISTER IMRAN KHAN GAVE AN IMPASSIONED SPEECH AT THE HU
                </p>
              </div>
              <div className="col-xsm-6 col-sm-6 col-md-3 my-3">
                <div className="row_images">
                  <img
                    src="./images/pharmacy-projects-hajvery-university-660x500.jpg"
                    alt=""
                  />
                </div>
                <p className="img_title">
                  PRIME MINISTER IMRAN KHAN GAVE AN IMPASSIONED SPEECH AT THE HU
                </p>
              </div>
              <button className="viewMore m-3" onClick={()=>viewMore()}>View More</button>
            </div>          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="container-fluid">
              <div className="row row-box-shadow mt-4">
                <div className="col-md-6 d-flex align-items-center my-2">
                  <div className="bg-maroorn p-2 px-3">
                    <p className="h4 white text-center">
                      06
                      <br />
                      JAN
                    </p>
                  </div>
                  <div className="mx-2">
                    <p className="h5 blue">
                      Sports Gala At University Lahore Main Campus 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
        </div>

        <div className="col d-flex justify-content-center padding-left">
          <div className="d-flex justify-content-between center-lines">
            <div className="border_bottom"></div>
            <div className="border_bottom"></div>
          </div>
        </div>

        <h1 className="text-center my-5 font-weight-bold font-heading mb-font-size">
          What Sets Us Apart
        </h1>
        <div className="autum_img position-relative">
          <img src="./images/Autrum_01-1.jpg" alt="" />
          <div className="carouselPosition">
            <MultipleKarousel />
          </div>
        </div>

        <div className="col d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex justify-content-between center-lines">
            <div className="border_bottom"></div>
            <div className="border_bottom"></div>
          </div>

          <div className="container text-center">
            <h3 className="bold mt-5 hajvery-text-font">Degree Programs</h3>
            <p className="mt-2 blog-text thin ">
              ONE UNIVERSITY ENDLESS POSSIBILITIES
            </p>
            <p className="mt-2 mb-text-pdding blog-text">
              At HU, we offer an array of academic options for just about every
              interest. Check out our 60+ degree program, Award-winning faculty,
              <br />
              and ground breaking research. You’ll quickly discover all there is
              to experience and get inspired by at one of the Pakistan’s largest
              <br />
              University.
            </p>
          </div>

          <div className="container-fluid">
            <div className="row">
              {StaticImg.map((items) => (
                <div className="col-md-6 my-2">
                  <img className="img-fluid width" src={items.img} alt="" />
                </div>
              ))}
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              {departmentImg.map((items) => (
                <div className="col-md-4 mt-2 departmentImg">
                  <img src={items.img} alt="" />
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-center">
              <div className="d-flex justify-content-between center-lines">
                <div className="border_bottom"></div>
                <div className="border_bottom"></div>
              </div>
            </div>
            <h3 className="bold mt-3 text-center mt-5 font-heading my-5 mb-font-size">
              Campus Life
            </h3>

            <div className="bannerImg my-3 position-relative">
              <img
                src="./images/WhatsApp Image 2022-11-22 at 3.51.03 AM.jpeg"
                alt=""
              />
              <div className="postion-to-carousel">
<Itemkarousel/>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <div className="d-flex justify-content-between center-lines">
                <div className="border_bottom"></div>
                <div className="border_bottom"></div>
              </div>
            </div>
            <h3 className="bold mt-3 text-center mt-5 font-heading my-5 mb-font-size">
              Multimedia
            </h3>
            <div className="multiedia-bg position-relative">
              <img
                className="w-100 multimedia-img"
                src="https://www.hup.edu.pk/wp-content/uploads/2022/07/Untitled-design-1.jpg?id=16653"
                alt=""
              />

              <div className="postion-center-animation">
                <div
                  class="step animation-size bg-transparent d-flex justify-content-center align-items-center border-white"
                  onClick={() => setModalShow(true)}
                >
                  <span className="bibi-Play">
                    <i className="bi bi-play-fill"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <div className="d-flex justify-content-between center-lines">
                <div className="border_bottom"></div>
                <div className="border_bottom"></div>
              </div>
            </div>
            <h3 className="bold mt-5 text-center mt-2 font-heading mb-font-size mb-4">
              Partner Universities
            </h3>
            <div className="row d-flex flex-wrap justify-content-center">
              {partnerUniversities.map((items) => (
                <div className="col-md-2 mx-2 my-2 d-flex justify-content-center">
                  <img src={items.img} alt="" />
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-center">
              <div className="d-flex justify-content-between center-lines">
                <div className="border_bottom"></div>
                <div className="border_bottom"></div>
              </div>
            </div>
            <h3 className="bold mt-5 text-center mt-2 fonts-heading mb-font-size">
              Globally Accredited
            </h3>
            <div className="row d-flex justify-content-center my-3">
              {govermentDepart.map((items) => (
                <div className="col-md-1 mx-3 d-flex justify-content-center mx-3 my-2">
                  <img src={items.img} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="postion-to-scroll-button">
          <div>
            <ScrollButton />
          </div>
        </div>
      </div>
      {/* ////////////////////////////////////////////// */}
     
      {/* /////////// */}
      <div className="footer">
        <Footer />
      </div>
      {/* ////// centered-modal*/}

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div>
            <iframe
              width="w-100"
              height="800"
              src="https://www.youtube.com/embed/gvyjY-lpqCY?autoplay=1&controls=1&enablejsapi=1&hd=1&iv_load_policy=3&loop=0&modestbranding=1&rel=0&vq=hd1080"
            ></iframe>
          </div>
        </Modal.Body>
      </Modal>
      <Offcanvas show={show} onHide={handleClose} placement={"top"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      {/* //////////// */}
    </>
  );
}
export default Home;
