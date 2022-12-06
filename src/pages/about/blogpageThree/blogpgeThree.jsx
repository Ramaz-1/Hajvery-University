import React from "react";
import { useEffect } from "react";
import "./blogpageThree.scss";
import Footer from "../../../Components/Footer";
import Navbars from "../../../Components/navbar";
function BlogPageThree() {
  const festivals = [
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/pharmacy-projects-hajvery-university.jpg",
      title: "PHARMACEUTICAL TECHNOLOGY PROJECTS",
      description:
        "Brilliant final year students of Pharm-D from the school of Pharmacy, Hajvery University have displayed their Pharmaceutical Technology and Clinical Pharmacy Projects in an extravagant event organized by the Faculty of Pharmacy",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/HU-International-conference-1024x682.jpg",
      title: "HU INTERNATIONAL CONFERENCE & EXHIBITION",
      description:
        "Brilliant final year students of Pharm-D from the school of Pharmacy, Hajvery University have displayed their Pharmaceutical Technology and Clinical Pharmacy Projects in an extravagant event organized by the Faculty of Pharmacy",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/Halloween-day-1024x682.jpg",
      title: "HALLOWEENS DAY",
      description:
        "Brilliant final year students of Pharm-D from the school of Pharmacy, Hajvery University have displayed their Pharmaceutical Technology and Clinical Pharmacy Projects in an extravagant event organized by the Faculty of Pharmacy",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/naeem-Bukhari-1024x683.jpg",
      title: "NADEEM BUKHARI VISIT HU",
      description:
        "Brilliant final year students of Pharm-D from the school of Pharmacy, Hajvery University have displayed their Pharmaceutical Technology and Clinical Pharmacy Projects in an extravagant event organized by the Faculty of Pharmacy",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/Orientations-1024x682.jpg",
      title: "ORIENTATIONS",
      description:
        "Brilliant final year students of Pharm-D from the school of Pharmacy, Hajvery University have displayed their Pharmaceutical Technology and Clinical Pharmacy Projects in an extravagant event organized by the Faculty of Pharmacy",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/Purple-day-383x256.jpg",
      title: "PURPLE DAY ORGANIZED BY STUDENTS",
      description:
        "Brilliant final year students of Pharm-D from the school of Pharmacy, Hajvery University have displayed their Pharmaceutical Technology and Clinical Pharmacy Projects in an extravagant event organized by the Faculty of Pharmacy",
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
          src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Internships-Corporate-Interactions_New.jpg"
          alt=""
        />
      </div>

      <div className="container">
        <h2 className="h1 font-weight-bold text-start mt-5">Industry Interaction</h2>
        <h2 className="h1 font-weight-bold text-start maroon">
          Corporate & Leadership Interaction
        </h2>
        <p className="line-height h6">
          Apart from the worlds of academia, Hajvery University works to bring
          to students, a wealth of knowledge from the industry and research
          domains. Leaders from the corporate world and political leaders are
          continually identified and invited as guest speakers to give the
          student body the benefit of their knowledge & experience. The idea is
          to instill awareness of more than just trends and happenings and to
          immerse the students in diverse thought processes and ideologies.
        </p>
        <div className="row">
          <div className="col-md-6 my-4">
            <img
              className="img-fluid"
              src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Internship.jpg"
              alt=""
            />
          </div>

          <div className="col-md-6 my-4">
            <h2 className="text-start h1 maroon font-weight-bold">
              Internship
            </h2>
            <p className="p line-height text-word-spacing">
              Hajvery University has a well-established system of ensuring a
              smooth transition from the classroom to the workplace. The Hajvery
              University system provides for students aspirations across various
              sectors of industry. Students can confidently hope to enter the
              corporate world in sectors and positions commensurate with their
              capabilities. Leading organizations across various disciplines
              participate in campus placements at Hajvery University.
            </p>
          </div>
          <div className="col-md-6 my-4">
            <h2 className="text-start h1 maroon font-weight-bold">
              Career Fair
            </h2>
            <p className="p line-height text-word-spacing">
              Hajvery University has a well-established system of ensuring a
              smooth transition from the classroom to the workplace. The Hajvery
              University system provides for students aspirations across various
              sectors of industry. Students can confidently hope to enter the
              corporate world in sectors and positions commensurate with their
              capabilities. Leading organizations across various disciplines
              participate in campus placements at Hajvery University.
            </p>
          </div>
          <div className="col-md-6 my-4">
            <img
              className="img-fluid"
              src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Career-fair-1024x683.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row bg-maroorn p maroon-bg-row">
          <div className="col-md-6">
            <h2 className="white h2 font-weight-bold text-start">
              Career Services Office
            </h2>
            <p className="line-height white">
              HU Career Service Office is dedicated to educating & advising HU
              students and graduates on choosing an academic major and connects
              students to internship & job opportunities in the market.
            </p>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div>
              <img
                className="img-fluid rounded-circle"
                src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Career-service-office-300x283.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h2 className="h1 font-weight-bold maroon my-4">
          -TEDxHUP International Conference
        </h2>
      </div>
      <div className="container-fluid">
        <div>
          <img
            className="img-fluid"
            src="https://www.hup.edu.pk/wp-content/uploads/2022/01/TedX2-1.jpg"
            alt=""
          />
        </div>
        <p className="text-word-spacing">
          TEDxHUP International Conference was Organized by Hajvery University
          (HU) under license from TED, USA. It was held on Saturday, February 4
          at the HU Euro Campus.
        </p>
      </div>
      <div className="container">
        <div className="row">
          {festivals.map((items) => (
            <div className="col-md-4 my-4">
              <div>
                <img className="img-fluid" src={items.img} alt="" />
              </div>
              <h2 className="h5 font-weight-bold maroon my-3">{items.title}</h2>
              <p className="text-word-spacing tex-start">{items.description}</p>
            </div>
          ))}
        </div>
        <div className="row d-flex align-items-center my-5">
          <div className="col-md-6">
            <div>
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2022/01/junoon-cover-page1-696x897-1.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-4 mx-5 d-flex flex-column align-items-center">
            <h2 className="h1 font-weight-bold maroon text-start">JUNOON</h2>
            <p className="tex-word-spacing h5 maroon">
              Hajvery University Official Magazine{" "}
            </p>
            <p className="text-word-spacing h5">
              Students Societies at HU always arrange exciting events at the
              university on a weekly basis, from organizing national conferences
              to concerts and talent shows. Junoon magazine captures all the
              events with pictures held at Hajvery University
            </p>
            <div className="view-more-btn my-4">
              <p>Read More</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default BlogPageThree;
