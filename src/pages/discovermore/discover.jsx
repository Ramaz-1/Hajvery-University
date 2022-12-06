import React, { Component,useEffect } from "react";
import "./discover.scss";
import Navbars from "../../Components/navbar";
import Footer from "../../Components/Footer";
import Slider from "react-slick";
import MultipleKarousel from "../../Components/carousel";

function Discover() {
  const careerOpportunities = [
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/11/Nursing-Homes-for-Elderly-People.png",
      title: "Nursing Homes for Elderly People",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/11/Private-Hospitals-and-Clinics.png",
      title: "Private Hospitals and Clinics",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/11/Schools-and-Childrens-Centers.png",
      title: "Schools and Children's Centers",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/11/Professional-Sports-Clinics-or-Gyms.png",
      title: "Professional Sports Clinics or Gyms",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/11/Physical-Medicine-Rehabilitation-Centers..png",
      title: "Physical Medicine & Rehabilitation Centers",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/11/NGOs-1.png",
      title: "NGOs",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/11/Aid-Agencies-Organizations.png",
      title: "Aid Agencies & Organizations",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/11/Respiratory-Therapist.png",
      title: "Respiratory Therapist",
    },
  ];
  const govermentDeparts = [
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/10/HEC-1.jpg",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/10/pHEC.jpg",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/10/BISE.jpg",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/10/GOVT-OF-punjab.jpg",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/10/Govt-of-pakistan.jpg",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/10/pakistan-engineering-council.jpg",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/10/PHARMACY-COUNCIL.jpg",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/10/TURKEY.jpg",
    },
  ];
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
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/11/Logo_03-6-150x150.png",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/11/Logo_04-5-150x150.png",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/11/Logo_05-6-150x150.png",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/11/Logo_06-6-150x150.png",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/11/Logo_07-5-150x150.png",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/11/Logo_08-6-150x150.png",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/11/Logo_03-6-150x150.png",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/11/Logo_03-6-150x150.png",
    },
  ];
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])
  return (
    <>
    <div className="wrapper">
      <div>
        <Navbars />
      </div>
      <div className="bgImg">
        <img
          src="https://www.hup.edu.pk/wp-content/uploads/2021/11/Adp-Physical-Therapy_01.jpg"
          alt=""
        />
      </div>
      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <div className="small-line"></div>
          <div className="mx-4">
            <span className="span-box-icon">
              <i class="bi bi-bounding-box-circles"></i>
            </span>
          </div>
          <div className="small-line"></div>
        </div>
        <h2 className="text-center h2 font-weight-bold">Degree Overview</h2>

        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-6 my-3">
                <p className="h5 font-weight-bold">PROGRAM OFFERED IN CAMPUS</p>
                <ul>
                  <li className="p1">Lahore</li>
                  <li className="p1">Sheikhupura</li>
                </ul>
              </div>
              <div className="col-md-6 my-3">
                <p className="h5 font-weight-bold">ENTRY REQUIREMENTS</p>
                <p className="p1">
                  F.Sc 60%-Marks(Pre-Medical), A-Levels(Biology, chemistry,
                  physics) OR Equivalent.
                </p>
              </div>
              <div className="col-md-6 my-3">
                <p className="h5 font-weight-bold">SPECIALIZATION</p>

                <ul>
                  <li>Musculoskeletal Disorders & Sports</li>
                  <li>Musculoskeletal Disorders & Sports</li>
                  <li>Musculoskeletal Disorders & Sports</li>
                  <li>Musculoskeletal Disorders & Sports</li>
                  <li>Musculoskeletal Disorders & Sports</li>
                  <li>Musculoskeletal Disorders & Sports</li>
                </ul>
              </div>
              <div className="col-md-6 my-3">
                <p className="h5 font-weight-bold">PROGRAM CONFIGURATION</p>
                <p>
                  4/5 Courses / Semester
                  <br /> Total = 65-68 Cr. Hrs
                </p>
              </div>
              <div className="col-md-6 my-3">
                <p className="h5 font-weight-bold">PROGRAM TYPE</p>
                <p>Regular Class Room Based</p>
              </div>
              <div className="col-md-6 my-3">
                <p className="h5 font-weight-bold">PROGRAM DURATION</p>
                <p>4 Semesters / 2 Years</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-9 box-shadow">
                <div className="apply-btns d-flex flex-column my-4">
                  <button className="my-2">Apply now</button>
                  <button className="my-2">Facts and Figure</button>
                  <button className="my-2">Study Abroad</button>
                </div>
                <div className="my-3">
                  <p className="h5 font-weight-bold">Faculty</p>
                  <p>Faculty of Allied Health Science</p>
                </div>
                <div className="my-4">
                  <p className="h5 font-weight-bold">Degree Program</p>
                  <p>ADP Physical Therapy Assistant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center bg-grey py-5">
          <div className="d-flex align-items-center justify-content-center">
            <div className="small-line"></div>
            <div className="mx-4">
              <span className="span-box-icon">
                <i class="bi bi-bounding-box-circles"></i>
              </span>
            </div>
            <div className="small-line"></div>
          </div>
          <h2 className="h2 text-center font-weight-bold my-4">Semester Overview</h2>
          <div className="col-md-4 bg-white border-radius border-bottom mx-3 my-5">
            <div className="semester-text-para text-center">
              <p>Semester</p>
            </div>
            <ul>
              <li className="my-2">Anatomy – I</li>
              <li className="my-2">Anatomy – I</li>
              <li className="my-2">Anatomy – I</li>
              <li className="my-2">Anatomy – I</li>
            </ul>
          </div>
          <div className="col-md-4 bg-white border-radius border-bottom mx-3 my-5">
            <div className="semester-text-para text-center">
              <p>Semester</p>
            </div>
            <ul>
              <li className="my-2">Anatomy – I</li>
              <li className="my-2">Anatomy – I</li>
              <li className="my-2">Anatomy – I</li>
              <li className="my-2">Anatomy – I</li>
            </ul>
          </div>
          <div className="col-md-4 bg-white border-radius border-bottom mx-3 my-5">
            <div className="semester-text-para text-center">
              <p>Semester</p>
            </div>
            <ul>
              <li className="my-2">Anatomy – I</li>
              <li className="my-2">Anatomy – I</li>
              <li className="my-2">Anatomy – I</li>
              <li className="my-2">Anatomy – I</li>
            </ul>
          </div>
          <div className="col-md-4 bg-white border-radius border-bottom mx-3 my-5">
            <div className="semester-text-para text-center">
              <p>Semester</p>
            </div>
            <ul>
              <li className="my-2">Anatomy – I</li>
              <li className="my-2">Anatomy – I</li>
              <li className="my-2">Anatomy – I</li>
              <li className="my-2">Anatomy – I</li>
            </ul>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-4">
          <div className="small-line"></div>
          <div className="mx-4">
            <span className="span-box-icon">
              <i class="bi bi-bounding-box-circles"></i>
            </span>
          </div>
          <div className="small-line"></div>
        </div>
        <p className="h2 text-center font-weight-bold">Scholarships</p>

        <div className="row">
          <div className="col-md-8 d-flex justify-content-center">
            <div>
              <p className="para-scholrship my-4 width-auto">
                HU awards various types of merit and need-based scholarships in
                different programs. Merit scholarships are awarded at the time
                of Admission while Need-based financial assistance can be
                requested during the course of study. You can apply now for
                scholarships:
              </p>
              <ul className="my-4">
                <li className="li">Need-Based Scholarships</li>
                <li className="li">Merit-Based Scholarships</li>
                <li className="li">Women Scholarships Program</li>
                <li className="li">Orphan Scholarships</li>
              </ul>
              <div className="d-flex align-items-center my-3">
                <div className="view-more-btn d-flex align-items-center justify-content-center">
                  <p>View More</p>
                </div>
                <p className="mx-3 font-weight-bold">OR Call: 0304-1116667</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="degree-suit-pic">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2021/11/Scholarship-removebg-preview.png?id=10961"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <form className="form-box-shadow my-5">
          <p className="p-4 line-height">
            Complete the Form Below to Hear from our Office of Admission. Also,
            Subscribe for HU Alerts & Be the first to know about all the
            Wonderful, Amazing, out-of-the-world Opportunities Available to
            Current & Prospective Students of HU.
          </p>
          <div className="form-input-box my-3">
            <input
              className="mx-2 mt-3"
              name="contact"
              placeholder="Full Name"
            />
            <input
              className="mx-2 mt-3"
              name="contact"
              placeholder="Phone Number"
            />
            <input className="mx-2 mt-3" name="contact" placeholder="E-Mail" />
            <div className="d-flex mb-col mb-col-form">
              <div className="form-input-box mx-2 mt-3">
                <p className="font-weight-bold h5 text-center">
                  Campus Location:<span className="red">*</span>
                </p>
                <select className="form-select select my-4">
                  <option>HR</option>
                  <option>Director</option>
                  <option>CEO</option>
                  <option>Zaildar</option>
                </select>
              </div>
              <div className="form-input-box mx-2 mt-3">
                <p className="font-weight-bold h5 text-center">
                  Degree Programms:<span className="red">*</span>
                </p>
                <select className="form-select select my-4">
                  <option>HR</option>
                  <option>Director</option>
                  <option>CEO</option>
                  <option>Zaildar</option>
                </select>
              </div>
            </div>
            <div className="d-flex justify-content-end mx-5">
              <div className="form-send-btn d-flex justify-content-center align-items-center">
                <p>Send</p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="container-fluid container-height">
        <div className="row height-check position-relative bg-maroorn mt-3">
          <div className="d-flex justify-content-center flex-wrap mt-5">
            <div className="book_img">
              <img src="./images/Procpectus-section-img.png" alt="" />
            </div>
            <div className="d-flex flex-column align-items-start mx-5 mt-5">
              <h2 className="h2 white italic">Hajvery University</h2>
              <h2 className="h2 white">2022-2023 Prospectus</h2>
              <div className="d-flex mt-3 mb-display">
                <div className="skew_Btn d-flex justify-content-center align-items-center white mx-2">
                  View Prospectus
                </div>
                <div className="skew_Btn d-flex justify-content-center align-items-center white mx-2">
                  Download Admission Form
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<div className="container">




<div className="d-flex align-items-center justify-content-center">
          <div className="small-line"></div>
          <div className="mx-4">
            <span className="span-box-icon">
              <i class="bi bi-bounding-box-circles"></i>
            </span>
          </div>
          <div className="small-line"></div>
        </div>
        <h2 className="text-center h2 font-weight-bold">Degree Overview</h2>

<div className="row d-flex justify-content-center">
<div className="col-md-4 bg-white border-radius border-bottom mx-3 my-5">
            <div className="semester-text-para text-center">
              <p>Semester</p>
            </div>
            <ul>
              <li className="my-2">Anatomy – I</li>
              <li className="my-2">Anatomy – I</li>
              <li className="my-2">Anatomy – I</li>
              <li className="my-2">Anatomy – I</li>
            </ul>
          </div>
          <div className="col-md-4 bg-white border-radius border-bottom mx-3 my-5">
            <div className="semester-text-para text-center">
              <p>Semester</p>
            </div>
            <ul>
              <li className="my-2">Anatomy – I</li>
              <li className="my-2">Anatomy – I</li>
              <li className="my-2">Anatomy – I</li>
              <li className="my-2">Anatomy – I</li>
            </ul>
          </div>
</div>



</div>






      <div className="container">
        <div className="row d-flex justify-content-center bg-grey">
          {careerOpportunities.map((items) => (
            <div className="col-md-2 bg-white  border-radius  mx-4 d-flex flex-column align-items-center px-3 py-3 my-3">
              <div className="career-opportunities">
                <img src={items.img} alt="" />
              </div>
              <p className="h6 font-weight-bold line-height text-center my-3">
                {items.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center my-5">
        <div className="small-line"></div>
        <div className="mx-4">
          <span className="span-box-icon">
            <i class="bi bi-bounding-box-circles"></i>
          </span>
        </div>
        <div className="small-line"></div>
      </div>
      <h2 className="h3 font-weight-bold">Top Companies Hire HU Graduates</h2>
      <p className="h5 text-center my-4">
        Over 150 Prominent Companies Visit Hajvery University For Recruitment
      </p>
      {/*  */}
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
      <div className="container            ">
        <div className="d-flex align-items-center justify-content-center">
          <div className="small-line"></div>
          <div className="mx-4">
            <span className="span-box-icon">
              <i class="bi bi-bounding-box-circles"></i>
            </span>
          </div>
          <div className="small-line"></div>
        </div>
        <h2 className="h3 font-weight-bold">Degree Recognition</h2>
        <p className="h5 text-center my-4">
          HU is Chartered By Govt. Of Pakistan As a Degree Awarding University
          And is Ranked As Top Category University By Higher Education
          Commission Of Pakistan (HEC)
        </p>
        {/*  */}
        <div className="row d-flex justify-content-center">
          {govermentDeparts.map((items) => (
            <div className="col-md-2 mx-4 my-4 d-flex justify-content-center">
              <img
              className="img-fluid"
                src={items.img}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      </div>
      
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Discover;
