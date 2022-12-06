import React from "react";
import { useState } from "react";
import Footer from "../../Components/Footer";
import Navbars from "../../Components/navbar";

const TOPFACULTY = () => {
  const style = {
    borderBottom: "1px solid black",
    padding: "10px",
  };

  const activeButtons = [
    {
      title: "Overview",
    },
    {
      title: "Distinguished Faculty",
    },
    {
      title: "Teaching Faculty",
    },
  ];
  const [isActiveOverView, setIsActiveOverView] = useState(true);
  const [isActiveFaculty, setIsActiveFaculty] = useState(false);
  const [isActiveTeaching, setIsActiveTeaching] = useState(false);

  const activeLink = (activeButtons) => {
    if (activeButtons.title == "Overview") {
      setIsActiveOverView(true);
      setIsActiveFaculty(false);
      setIsActiveTeaching(false);
    } else if (activeButtons.title == "Distinguished Faculty") {
      setIsActiveFaculty(true);
      setIsActiveOverView(false);
      setIsActiveTeaching(false);
    } else if (activeButtons.title == "Teaching Faculty") {
      setIsActiveTeaching(true);
      setIsActiveFaculty(false);
      setIsActiveOverView(false);
    } else {
      setIsActiveOverView(true);
    }
    console.log(activeButtons, "activeBtns");
  };

  return (
    <>
    <div className="bg-white mb-5">
      <div>
        <Navbars />
      </div>
      <div className="bgImg">
        <img
          src="https://www.hup.edu.pk/wp-content/uploads/2021/08/Faculty.jpg"
          alt=""
        />
      </div>

      <div className="container">
        <div className="row ">
          <div className="d-flex my-3 links-active">
            {activeButtons.map((item) => (
              <p
                className="h5 font-weight-bold mx-3 isActive"
                
                onClick={() => activeLink(item)}
              >
                {item.title}
              </p>
            ))}
          </div>
          <hr className="bg-grey" />

          {isActiveOverView ? (
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="h1 blue text-start">
                    THE FINEST RESOURCE AT HAJVERY UNIVERSITY (HU) IS OUR
                    WORLD-CLASS FACULTY
                  </h2>
                </div>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-3 my-3">
                      <h2 className="h2 blue tex-center font-weight-bold ">
                        5500+
                      </h2>
                      <p className="heading-text text-center">Students</p>
                    </div>
                    <div className="col-md-3 my-3">
                      <h2 className="h2 blue tex-center font-weight-bold">
                        115+
                      </h2>
                      <p className="heading-text text-center">
                        Head of Departments & Deans
                      </p>
                    </div>
                    <div className="col-md-3 my-3">
                      <h2 className="h2 blue tex-center font-weight-bold">
                        250+
                      </h2>
                      <p className="heading-text text-center">
                        Visiting Faculty Members
                      </p>
                    </div>
                    <div className="col-md-3 my-3">
                      <h2 className="h2 blue tex-center font-weight-bold">
                        1500+
                      </h2>
                      <p className="heading-text text-center">
                        Published Papers
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <p className="line-height blog-text">
                  Carefully handpicked from amongst the finest academicians
                  across USA, Europe, Asia, and of course, Pakistan. The senior
                  faculty brings not only their immense academic weight to the
                  campus; they also bring in their deep knowledge of the finest
                  pedagogies, education processes and methodologies, experience
                  in research and an easy familiarity with the entire ethos of
                  end-to-end industry integration into education.
                </p>
                <div className="col-md-12">
                  <div className="row">
                    <div className="col-md-5 mx-5 d-flex flex-column justify-content-center">
                      <img
                        className="img-fluid"
                        src="https://www.hup.edu.pk/wp-content/uploads/2022/02/TEACHERS_2022-_02-590x408.jpg"
                        alt=""
                      />
                    </div>
                    <div className="col-md-5 mx-5">
                      <p className="blog-text font-weight-bold my-5">
                        Hajvery University (HU) benchmarks with the latest
                        teaching methodologies from around the world to train
                        its faculty.
                      </p>

                      <h2 className="h1 blue font-weight-bold text-start">
                        HU’S COMMITTED
                        <br /> FACULTY
                      </h2>
                      <p className="blog-text line-height">
                        Our Faculty will Endeavour to enrich the lives of whom
                        they interact with as an extension of this University.
                        Remain current in their respective fields and use that
                        expertise in the educational process as appropriate.
                        Improve instruction through the use of innovative
                        teaching methods, which allow students to become
                        actively involved in the learning process, and develop
                        the constructive critical thinking necessary for
                        life-long learning. Contribute to the pool of knowledge
                        through scholarly and research activities. Actively
                        engage and mentor students; help them to navigate
                        through a rapidly changing society. Regularly review the
                        curriculum and suggest necessary changes to meet
                        changing needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {isActiveFaculty ? (
            <div className="col-md-12">
              <div className="col-md-5">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Prof-Dr_Muhammad-Khalid-Pervaiz_01.jpg"
                  alt=""
                />

                <p className="text-center font-weight-bold blog-text my-2">
                  Prof. (Tenure) Dr. Muhammad Khalid Pervaiz (Rector)
                </p>

                <p className="text-center my-3">
                  Rector Best Teacher Award (HEC and GCU Lahore) Former
                  Officiating Vice-Chancellor Government College University,
                  Lahore
                </p>
              </div>
            </div>
          ) : null}

          {isActiveTeaching ? (
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-2">
                  <img
                    className="img-fluid"
                    src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Usman-Ghauri_01.jpg"
                    alt=""
                  />
                  <p className="text-center font-weight-bold blog-text my-2">
                    Mr. Usman M. Ghouri
                  </p>
                  <p className="text-center my-3 font-weight-bold">
                    Faculty of business administration
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
</div>

      <div className="footer">
<Footer/>
      </div>
    </>
  );
};

export default TOPFACULTY;
