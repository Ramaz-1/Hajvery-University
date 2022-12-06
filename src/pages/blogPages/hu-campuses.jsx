import React from "react";
import Footer from "../../Components/Footer";
import Navbars from "../../Components/navbar";
import "./blogpages.scss";
const Campuses = () => {
  const campusName = [
    {
      title: "Hajvery University Main Campus (Admin Block)",
      description:
        "HU is situated on a piece of land in the heart of the city accessible from all directions. Hundreds of students study with us each year, leading to a highly stimulating learning environment",
      address: {
        name: "43-52 Industrial Area, Gulberg III, Lahore",
        uan: "92-42-111-777-007",
        gmail: "Email: admin@hup.edu.pk",
        hotline: "0304-111-6667",
      },
    },
    {
      title: "Hajvery University EURO CAMPUS (Centralized Admissions Office)",
      description:
        "Euro Campus is amongst the most state-of-the-art universities of Pakistan. The university is equipped with the most modern and latest gadgets to raise the teaching standards and to come at par with the international educational norms.",
      address: {
        name: "HU Centralized Admission Office",
        gmail: "Email: admin@hup.edu.pk",
        hotline: "0304-111-6667",
        uan: "",
      },
    },
    {
      title: "Hajvery University Sheikhupura Campus",
      description:
        "Hajvery University Sheikhupura Campus facility has been designed by Pakistan’s famous and leading Architects.",
      address: {
        name: "Ghazi Minara, Main Sargodha Road, Sheikhupura",
        gmail: "Email: admin@hup.edu.pk",
        hotline: " 0304-111-6667",
        uan: "",
      },
    },
    {
      title: "Hajvery University Campus Multan",
      description:
        "HU is situated on a piece of land in the heart of the city accessible from all directions. Hundreds of students study with us each year, leading to a highly stimulating learning environment",
      address: {
        name: "43-52 Industrial Area, Gulberg III, Lahore",
        gmail: "Email: admin@hup.edu.pk",
        uan: "",
      },
    },
  ];

  return (
    <>
    <div className="wrapper">
      <div className="bg-white">
        <div>
          <Navbars />
        </div>

        <div className="bgImg">
          <img
            src="https://www.hup.edu.pk/wp-content/uploads/2022/02/HU-Campuses_2022-1.jpg"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 d-flex flex-column align-items-center my-5">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2021/08/svgexport-9.png"
                alt=""
              />
              <h2 className="heading-text my-3">7 safe and modern campuses</h2>
            </div>{" "}
            <div className="col-md-3 d-flex flex-column align-items-center my-5">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2021/08/svgexport-10.png"
                alt=""
              />
              <h2 className="heading-text my-3">
                Across 3 walkable and green cities
              </h2>
            </div>{" "}
            <div className="col-md-3 d-flex flex-column align-items-center my-5">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2021/08/svgexport-11.png"
                alt=""
              />
              <h2 className="heading-text my-3">
                Connected by great transport
              </h2>
            </div>{" "}
            <div className="col-md-3 d-flex flex-column align-items-center my-5">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2021/08/svgexport-12.png"
                alt=""
              />
              <h2 className="heading-text my-3">
                Equipped with modern facilities
              </h2>
            </div>
          </div>
          <div className="row">
            <h2 className="text-start heading-text blue">
              <span className="blue border-bottom-orange-red">Where</span>{" "}
              you’ll study
            </h2>
            <p className="blog-text word-spacer-text blog-text my-3">
              Our campuses are where you’ll have your lectures and classes. Each
              campus is a community of related subject areas, with study spaces,
              libraries, cafes, and restaurants. Some also have gym and sports
              facilities. No matter which campus your studies are based at, you
              can use the facilities at any campus.
            </p>
            {campusName.map((item) => (
              <div className="col-md-5 mb-5 box-shadow-column p-0 mx-3 pb-5 mt-4 margin-both-side">
                <div>
                  <div className="fancy-box-image position-relative">
                    <img
                      className="img-fluid"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABGAAAAKUAQAAAABjpnMxAAAAAnRSTlMAAHaTzTgAAABxSURBVHja7cEBDQAAAMKg909tDjegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gxrkwABll3IiAAAAABJRU5ErkJggg=="
                      alt=""
                    />
                    {/* <div className="animation-box-linear"></div> */}
                  </div>
                </div>
                <h2 className="blue heading-text mt-5">{item?.title}</h2>
                <p className="blog-text line-height my-5 mx-2">
                  {item?.description}
                </p>
                <p className="blog-text font-weight-bold mx-2">
                  Address: <sapn>{item?.address?.name}</sapn>
                </p>
                <p className="blog-text font-weight-bold mx-2">
                  Hotline: <sapn>{item?.address?.hotline}</sapn>
                </p>
                <p className="blog-text font-weight-bold mx-2">
                  Email: <sapn>{item?.address?.gmail}</sapn>
                </p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="heading-text blue text-start">
              <span className="blue border-bottom-orange-red">Take</span> Your
              Next Step
            </h2>
          </div>
          <div className="row">
            <div className="col-md-5 box-shadow-column p-0 my-5  mx-3 margin-both-side">
              <div>
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2021/12/Discover-the-course-for-you-600x300.jpg"
                  alt=""
                />
              </div>

              <h2 className="heading-text blue text-center mt-4">
                Discover the Course for you
              </h2>
              <p
                className="line-height blog-text
              my-3 mx-2"
              >
                When you study at HU you’ll learn from the best and make friends
                from around the world. We offer a diverse choice of
                undergraduate and postgraduate degrees, as well as PhDs, online
                learning courses, and more.
              </p>
              <div className="d-flex justify-content-center my-5">
                <div className="bg-maroorn p-3 d-flex">
                  <p className="white tex-icon">Find Your Course</p>
                  <span className="white">
                    <i class="bi bi-clipboard2"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-5 box-shadow-column p-0 my-5  mx-3 margin-both-side">
              <div>
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2021/12/Campus-Facilities-600x300.jpg"
                  alt=""
                />
              </div>

              <h2 className="heading-text blue text-center mt-4">
                Campus Facilities{" "}
              </h2>
              <p
                className="line-height blog-text
              my-3 mx-2"
              >
             Our campuses provide students with a comprehensive list of features and facilities. students’ learning needs and comfort during their years with us
              </p>
              <div className="d-flex justify-content-center my-5">
                <div className="bg-maroorn p-3 d-flex">
                  <p className="white tex-icon">See Our Facilities</p>
                  <span className="white">
                    <i class="bi bi-clipboard2"></i>
                  </span>
                </div>
              </div>
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

export default Campuses;
