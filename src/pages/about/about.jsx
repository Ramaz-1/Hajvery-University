import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbars from "../../Components/navbar";
import "../about/about.css";
import Footer from "../../Components/Footer";
import ScrollButton from "../../Components/scrollBtn";

function About() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  function readMore() {
    navigate("/blogreader");
  }
  function readMoreTwo() {
    navigate("/blogPageTwo");
  }
  const rowArray = [
    {
      img: "./images/c2558664.jpg",
      heading: "HEC Recognized Top Ranking",
      title:
        "Hajvery University (HU) is an autonomous Government-Chartered university. Approved by the Higher Education Commission of Pakistan (HEC), Punjab Higher Education Commission (PHEC) and accredited by Pharmacy Council of Pakistan, Pakistan Engineering Council, Council of Higher Education Turkey and the European Commission.",
    },
    {
      img: "./images/5f7506ea-460x338.jpg",
      heading: "Partner Universities",
      title:
        "We are proud of our 70+ International Partner University that offers an enriching life experience for our students. We believe in broadening the vision and horizons of our students through invigorating exchange programs with numerous educational institutes across the globe.",
    },
    {
      img: "./images/e2352059.jpg",
      heading: "HEC Recognized Top Ranking",
      title:
        "We promote the corporate interaction of our students to equip them with industry exposure and to harness their thought leadership process. Our Centre of Entrepreneurship & Leadership (CEL) acts as a platform to bridge the gap between academia and the corporate world. We not only believe in developing creative thinkers but also engaged citizens.",
    },
    {
      img: "./images/6578bcfa.jpg",
      heading: "HEC Recognized Top Ranking",
      title:
        "At Hajvery University, we value talent, and we take pride in academic camaraderie. We offer a variety of scholarships at the undergraduate and postgraduate level as well as awards in recognition for outstanding academic achievements and leadership qualities.",
    },
  ];
  const gotoAcademics = () => {
    navigate("/academics");
  };
  return (
    <>
      <div className="wrapper">
        <div>
          <Navbars />
        </div>
        <div className="aboutImg">
          <img src="./images/about.jpg" alt="" />
        </div>
        <div className="container-fluid">
          <div className="row d-flex justify-content-around mbpadding align-items-center">
            <div className="col-md-3 border-top mb-hide"></div>
            <div className="col-md-4 bg-maroorn p-2">
              <h2 className="h4 white">One University Endless<br/> Possibilties</h2>
            </div>
            <div className="col-md-3 border-top mb-hide"></div>
          </div>
          <div className="text-box">
            <p className="h5 text-center mb-font">
              One of the leading universities in Pakistan pioneering in
              research, Hajvery University has an age-old tradition of breaking
              boundaries. Fostering the culture of questioning, learning and
              unlearning, we transform ideas into enterprises that not only
              create value but also make the world a better place
            </p>
          </div>
          <div className="row d-flex justify-content-center my-5">
            <div className="col-md-2 border-right d-flex flex-column align-items-center my-2 justify-content-around">
              <div>
                <img src="./images/university.png" alt="" />
              </div>
              <p className="text-maroon maroon h1">5</p>
              <p className="mt-3  text-center mb-font-size h5">Campuses</p>
            </div>
            <div className="col-md-3 border-right  d-flex flex-column align-items-center my-2 justify-content-around">
              <div>
                <img src="./images/003-collaboration.png" alt="" />
              </div>
              <p className="text-maroon maroon h1 ">95%</p>
              <p className="mt-3 text-center mb-font-size h5">
                Employment Rate
              </p>
            </div>
            <div className="col-md-3 border-right  d-flex flex-column align-items-center my-2 justify-content-around">
              <div>
                <img
                  src="./images/graduation_hat2-removebg-preview.png"
                  alt=""
                />
              </div>
              <p className="text-maroon maroon h1 ">60+</p>
              <p className="mt-3 text-center mb-font-size h5">
                Degree Programs
              </p>
            </div>
            <div className="col-md-3  d-flex flex-column align-items-center my-2 justify-content-around">
              <div>
                <img src="./images/university.png" alt="" />
              </div>
              <p className="text-maroon maroon h1 ">550+</p>
              <p className="my-3 text-center mb-font-size h5">
                Faculty Members
              </p>
            </div>
          </div>
          <div className="d-flex flex-column align-items-center">
            <h2 className="h1 font-weight-bold mb-font-size">
              Hajvery University At A Glance
            </h2>
            <p className="text-center mb-font text-font-box my-3">
              Operating in the capacity of a top-ranking inter-disciplinary
              Research and Teaching <br />
              University, Hajvery University is culturally rich and socially
              diverse. Apart from being locally
              <br /> recognized and HEC, PHEC, PEC and PCP approved, we are
              globally accredited for our diverse
              <br />
              community of more than 550 faculty members and over 8500 students,
              throughout our 35+
              <br /> degree programs from Undergraduate to Doctorate level.
            </p>
          </div>
          <div className="container-fluid">
            <div className="row d-flex flex-column mx-5">
              {rowArray.map((item) => (
                <div className="col-md-9">
                  <div className="row d-flex  my-4">
                    <div className="col-md-5 img pb-4">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="col-md-7 d-flex flex-column justify-content-between">
                      <h2 className="h1 text-start font-weight-bold my-3">
                        {item.heading}
                      </h2>
                      <p className="text-start mb-3">{item.title}</p>
                      <p className="h5 readMore" onClick={() => readMore()}>
                        Read More
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row bg-maroorn-color d-flex align-items-center justify-content-around">
            <div className="col-md-5 my-5">
              <h2 className="h1 text-start white vision-text">Our Vision</h2>
              <p className=" my-4 white h5 line-height vision-para-text">
                HU is committed to imparting knowledge & cultivating an Ummah of
                enlightened minds. We believe education is the liberating force
                which allows an individual to live a worthwhile life of personal
                satisfaction & be of service as a human being & a citizen.
              </p>
              <p className="readmore-white h4" onClick={() => readMoreTwo()}>
                Read More
              </p>
            </div>
            <div className="col-md-5 img my-5">
              <img src="./images/30e17dfb-606x447.jpg" alt="" />
            </div>
          </div>
          <div className="text-box flex-column align-items-center">
            <h2 className="h1 font-weight-bold mt-5">What Sets us Apart</h2>
            <p className="text-center mb-font">
              The freedom to study what you love is what sets us apart. You can
              pursue a diverse range of interests at Hajvery University (HU)
              from Pharmacy to Engineering to Film, Tv, and Media Studies. At HU
              we offer 60+ degree programs, to suit your academic interests
            </p>
          </div>
          <div className="container">
            <div className="row justify-content-center my-5">
              <div className="col-md-6 ">
                <div>
                  <img
                    className="img-fluid"
                    src="./images/Degree-Programs (1).jpg"
                    alt=""
                  />
                </div>
                <div
                  className="onHover px-3 py-3"
                  onClick={() => gotoAcademics()}
                >
                  <h2 className="h3 text-start mb-3">Degree Programs</h2>
                  <p className="my-3">
                    Browse through our Undergraduate, Graduate & Ph.D programs
                    and find the right fit for you.
                  </p>
                  <div className="d-flex justify-content-end">
                    <div className="d-flex align-items-center hover-text">
                      <h2 className="text-end h3">Explore Programme</h2>
                      <span>
                        <i class="bi bi-app"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 img-height ">
                <div>
                  <img
                    className="img-fluid"
                    src="./images/Rich-Curriculum.jpg"
                    alt=""
                  />
                </div>
                <div className="onHover px-3 py-3">
                  <h2 className="h3 text-start mb-3">Degree Programs</h2>
                  <p className="my-3">
                    Browse through our Undergraduate, Graduate & Ph.D programs
                    and find the right fit for you.
                  </p>
                  <div className="d-flex justify-content-end">
                    <div className="d-flex align-items-center hover-text">
                      <h2 className="text-end h3">Explore Programme</h2>
                      <span>
                        <i class="bi bi-app"></i>
                      </span>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center my-5">
              <div className="col-md-6">
                <div className="img-height">
                  <img
                    src="./images/Vibrant-and-Energetic-Student-body-2 (1).jpg"
                    alt=""
                  />
                </div>
                <div className="onHover px-3 py-3">
                  <h2 className="h3 text-start mb-3">Degree Programs</h2>
                  <p className="my-3">
                    Browse through our Undergraduate, Graduate & Ph.D programs
                    and find the right fit for you.
                  </p>
                  <div className="d-flex justify-content-end">
                    <div className="d-flex align-items-center hover-text">
                      <h2 className="text-end h3">Explore Programme</h2>
                      <span>
                        <i class="bi bi-app"></i>
                      </span>
                    </div>
                  </div>{" "}
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-height">
                  <img src="./images/Our-Points-of-Pride.jpg" alt="" />
                </div>
                <div className="onHover px-3 py-3">
                  <h2 className="h3 text-start mb-3">Degree Programs</h2>
                  <p className="my-3">
                    Browse through our Undergraduate, Graduate & Ph.D programs
                    and find the right fit for you.
                  </p>
                  <div className="d-flex justify-content-end">
                    <div className="d-flex align-items-center hover-text">
                      <h2 className="text-end h3">Explore Programme</h2>
                      <span>
                        <i class="bi bi-app"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row bg-maroorn-color d-flex align-items-center justify-content-around my-5">
            <div className="col-md-4 my-5">
              <h2 className="h2 text-start white vision-text">HU Mission</h2>
              <p className="my-4 white h5 line-height vision-para-text">
                HU is committed to providing affordable & accessible quality
                undergraduate, graduate & doctoral degree programs which are
                national & international in scope.
              </p>
              <p className="readmore-white h4">View Our Mission & Vission</p>
            </div>
            <div className="col-md-5 img my-5">
              <img src="./images/18ef5afd-1.jpg" alt="" />
            </div>
          </div>
          <h2 className="h2 text-center mb-font font-weight-bold">
            Find Out More About HU
          </h2>
          <div className="row my-5 d-flex justify-content-center">
            <div className="col-md-3 d-flex flex-column align-items-center">
              <p className="text-center text-font my-4 h2 font-weight-bold mb-font">
                Admission
              </p>
              <div className="position-relative img-height">
                <img src="./images/6578bcfa.jpg" alt="" />
                <div className="white-box">
                  <p className="text-font">Apply Now</p>
                </div>
              </div>
              <div className="d-flex my-3">
                <div className="border-maroon"></div>
                <p className="text-width text-center mb-font">
                  We are dedicated to training students to effectively shape the
                  future and become tomorrow’s leaders. Find out more
                  information on how to apply to our Undergraduate, Master and
                  Ph.D. programs, Scholarships, and more.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <p className="text-center text-font my-4 h2 mb-font">
                Study Online
              </p>
              <div className="position-relative img-height">
                <img src="./images/Study-Online.jpg" alt="" />
                <div className="white-box">
                  <p className="text-font">E-Learning</p>
                </div>
              </div>
              <div className="d-flex my-3">
                <div className="border-maroon"></div>
                <p className="text-width text-center mb-font">
                  We are dedicated to training students to effectively shape the
                  future and become tomorrow’s leaders. Find out more
                  information on how to apply to our Undergraduate, Master and
                  Ph.D. programs, Scholarships, and more.
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <p className="text-center text-font my-4 h2">Campuses</p>
              <div className="position-relative img-height">
                <img src="./images/Campuses.jpg" alt="" />
                <div className="white-box">
                  <p className="text-font ">List of Campuses</p>
                </div>
              </div>

              <div className="d-flex my-3">
                <div className="border-maroon"></div>
                <p className="text-width text-center my-3 mb-font">
                  5 Campuses 1 Great University. Select From Your Nearest And
                  Most Suitable Campuses To Get On Board
                  <ul>
                    <li className="text-start">Main Campus (Admin Block)</li>
                    <li className="text-start">
                      Euro Campus (Centralized Admission Office)
                    </li>
                    <li className="text-start">SKP Campus</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="postion-to-scroll-button">
          <div>
            <ScrollButton />
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default About;
