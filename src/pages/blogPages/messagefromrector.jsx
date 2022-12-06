import React from "react";
import Footer from "../../Components/Footer";
import Navbars from "../../Components/navbar";
import "./blogpages.scss";
const Message = () => {
  return (
    <>
    <div className="wrapper">
      <div className="bg-white">
        <div>
          <Navbars />
        </div>
        <div className="bgImg">
          <img
            src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Message-from-Rector_New.jpg"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center my-5">
            <div className="col-md-5">
              <h2 className="text-start heading-text blue">
                Prof. Dr. Muhammad Khalid Pervaiz
              </h2>
              <p className="blog-text  my-3 word-spacer-text">
                I welcome you all to Hajvery University (HU). Hajvery University
                (HU) is chartered by Govt. Of Pakistan as Degree Awarding
                University and is ranked as top category University by Higher
                Education Commission of Pakistan (HEC). Hajvery University (HU)
                is an interdisciplinary research and teaching university
                offering 23+ degree programs from Bachelor’s to Doctorate level,
                to over 8,500 male and female students studying in Seven
                diversified faculties. Education is a very important undertaking
                that necessitates effort, patience, commitment, and focus. Your
                success in your studies is the primary goal of each of us. The
                education offered at Hajvery University (HU) is the starting
                point of your professional development.
                <br />{" "}
                <span className="my-5">
                  Please keep in mind that studying at Hajvery University will
                  enable you to integrate global qualities with local
                  characteristics by supporting the development of cultural,
                  social, and conceptual values as well as your emotional
                  intelligence. The quality of global citizenship you will be
                  adopting within the boundaries of Hajvery University will
                  support you in the path to success in your future careers by
                  equipping you with the skills of leadership, mobility,
                  harmony, and cooperation. The fundamental values which will be
                  assisting you throughout the entire process should be
                  morality, knowledge, reality and development.
                </span>
                <br />
                <span className="my-3 black">
                  From time to time, living away from your families may bring
                  you mixed feelings such as sorrow. I assure you that each and
                  every staff member will be supporting you with an open door
                  policy. Our fundamental aim is to ensure happy, peaceful, and
                  high-quality academic years for you.
                </span>
              </p>

              <p className="word-spacer-text blog-text mt-5">
                From time to time, living away from your families may bring you
                mixed feelings such as sorrow. I assure you that each and every
                staff member will be supporting you with an open door policy.
                Our fundamental aim is to ensure happy, peaceful, and
                high-quality academic years for you.
              </p>

              <p className="mt-3 black blog-text mb-5">
                <strong>Prof. Dr. Muhammad Khalid Pervaiz</strong> <br/>Rector, <span className="black">Hajvery University
                (HU), Pakistan <strong className="maroon">admin@hup.edu.pk</strong></span>
              </p>
            </div>
            <div className="col-md-5">
              <img
              className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2021/11/29aa0ce2.jpg"
                alt=""
              />
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
};

export default Message;
