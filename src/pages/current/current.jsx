import React from "react";
import { useEffect } from "react";
import Navbars from "../../Components/navbar";
import Footer from "../../Components/Footer";
import "./current.css";
import { useNavigate } from "react-router-dom";






function Current() {

const navigate=useNavigate();
const navigateToSchedule=()=>{
  navigate("/schedule")
}

  const port = [
    {
      title: "Academic Calender",
      img: "./images/port/Calendar-Icon.png",
    },

    {
      title: "Admission",
      img: "./images/port/2.jpg",
    },
    {
      title: "Accomodation",
      img: "./images/port/Accommodation-Icon-2.png",
    },
    {
      title: "24/7 Access to Course",
      img: "./images/port/LIT-Icon_Red_0234 (1).jpg",
    },
    {
      title: "Exam Result",
      img: "./images/port/2.jpg",
    },
    {
      title: "Class Schedule",
      img: "./images/port/Book-Icon.png",
    },
    {
      title: "Exam Schdule",
      img: "./images/port/Smarter-Travel-Icon.png",
    },
    {
      title: "HU 24/7 Help Desk",
      img: "./images/port/LIT-Icon_Red_0234 (1).jpg",
    },
    {
      title: "Student Portal",
      img: "./images/port/LIT-Icon_Red_0234 (1).jpg",
    },
    {
      title: "Study Abroad",
      img: "./images/port/LIT-Icon_Red_0234 (1).jpg",
    },
    {
      title: "Tuition Fees",
      img: "./images/port/LIT-Icon_Red_0234 (1).jpg",
    },
    {
      title: "HEC Top Recognized Ranking",
      img: "./images/port/LIT-Icon_Red_0234 (1).jpg",
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
      <div className="bgImage"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-start h1 font-weight-bold fontSize my-4 heading-text">
              Welcome Current Students
            </h2>
            <p className="line_height">
              Welcome Current Students Welcome to the Student Hub. Here you will
              find quick links to some important support & services on our
              website that may be of interest to you such as Exams, Student
              Support, Student Finance as well as a downloadable version of the
              HU Student Handbook <br />
              For all your day-to-day online student needs such as Google
              Classroom, Timetables, and Exam Results, please log in to the
              student portal. Simply use your email and password to log in. If
              you are having difficulty please contact the helpdesk on{" "}
              <strong className="maroon">0304-111-6667</strong> or email:
              <strong className="maroon"> admin@hup.edu.pk</strong> Useful Links
            </p>
            <h2 className="h1 font-weight-bold text-start my-5">UseFull Links</h2>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 px-0">
            <img
              className="img-fluid widthfull"
              src="./images/academics/Useful-Links-2-1024x683.jpg"
              alt=""
            />
          </div>
          <div className="col-md-6 px-0">
            <img
              className="img-fluid widthfull"
              src="./images/academics/Useful-Links-1-1024x683.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container positionRelative">
        <div className="row">
          {port.map((items) => (
            <div className="col-md-4 boxShadow d-flex flex-column align-items-center" onClick={()=>navigateToSchedule()}>
              <div className="imgBox my-5">
                <img src={items.img} alt="" />
              </div>
              <p className="h2 my-5 text-center font-weight-bold heading-text">
                {items.title}
              </p>
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

export default Current;
