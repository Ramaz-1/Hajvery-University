import React from "react";
import { useEffect } from "react";
import Footer from "../../../Components/Footer";
import Navbars from "../../../Components/navbar";
import "./blogpage.scss";
function BlogReaderOne() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const govermentDeparts = [
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/10/HEC-1.jpg",
      title:
        "HU ranks amongst the handful of prestigious “W Category” Universities in Pakistan, recognized and accredited by the Higher Education Commission of Pakistan. HEC is an independent and autonomous statutory institution functioning in Pakistan with the primary objective of funding, overseeing, regulating, and accrediting higher education institutes in Pakistan.",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/10/pHEC.jpg",
      title:
        "HU ranks amongst the handful of prestigious “W Category” Universities in Pakistan, recognized and accredited by the Higher Education Commission of Pakistan. HEC is an independent and autonomous statutory institution functioning in Pakistan with the primary objective of funding, overseeing, regulating, and accrediting higher education institutes in Pakistan.",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/10/BISE.jpg",
      title:
        "HU ranks amongst the handful of prestigious “W Category” Universities in Pakistan, recognized and accredited by the Higher Education Commission of Pakistan. HEC is an independent and autonomous statutory institution functioning in Pakistan with the primary objective of funding, overseeing, regulating, and accrediting higher education institutes in Pakistan.",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/10/GOVT-OF-punjab.jpg",
      title:
        "HU ranks amongst the handful of prestigious “W Category” Universities in Pakistan, recognized and accredited by the Higher Education Commission of Pakistan. HEC is an independent and autonomous statutory institution functioning in Pakistan with the primary objective of funding, overseeing, regulating, and accrediting higher education institutes in Pakistan.",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/10/Govt-of-pakistan.jpg",
      title:
        "HU ranks amongst the handful of prestigious “W Category” Universities in Pakistan, recognized and accredited by the Higher Education Commission of Pakistan. HEC is an independent and autonomous statutory institution functioning in Pakistan with the primary objective of funding, overseeing, regulating, and accrediting higher education institutes in Pakistan.",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/10/pakistan-engineering-council.jpg",
      title:
        "HU ranks amongst the handful of prestigious “W Category” Universities in Pakistan, recognized and accredited by the Higher Education Commission of Pakistan. HEC is an independent and autonomous statutory institution functioning in Pakistan with the primary objective of funding, overseeing, regulating, and accrediting higher education institutes in Pakistan.",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/10/PHARMACY-COUNCIL.jpg",
      title:
        "HU ranks amongst the handful of prestigious “W Category” Universities in Pakistan, recognized and accredited by the Higher Education Commission of Pakistan. HEC is an independent and autonomous statutory institution functioning in Pakistan with the primary objective of funding, overseeing, regulating, and accrediting higher education institutes in Pakistan.",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/10/TURKEY.jpg",
      title:
        "HU ranks amongst the handful of prestigious “W Category” Universities in Pakistan, recognized and accredited by the Higher Education Commission of Pakistan. HEC is an independent and autonomous statutory institution functioning in Pakistan with the primary objective of funding, overseeing, regulating, and accrediting higher education institutes in Pakistan.",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2020/11/European_Commission.svg.png",
      title:
        "HU ranks amongst the handful of prestigious “W Category” Universities in Pakistan, recognized and accredited by the Higher Education Commission of Pakistan. HEC is an independent and autonomous statutory institution functioning in Pakistan with the primary objective of funding, overseeing, regulating, and accrediting higher education institutes in Pakistan.",
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
            src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Chartered-Reputation-and-Accreditation_NEW.jpg"
            alt=""
          />
        </div>
        <div className="container">
          <h2 className="h2 font-weight-bold mt-5 m-font">
            Recognitions and Accreditations
          </h2>
          <p className="text-center h4 px-5 line-height m-font">
            Hajvery University takes pride in being{" "}
            <strong> HEC recognized</strong> for excellence in education and
            research, both nationally and internationally. Our accreditations
            from numerous institutions depict the extent to which our university
            programs meet the rigorous quality criteria for above-par education
            in Pakistan
          </p>
        </div>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center mb-margin-side">
            {govermentDeparts.map((items) => (
              <div className="col-md-3 mx-3 box-shadow-blog-box d-flex flex-column align-items-center my-5">
                <div className="mt-2">
                  <img className="img-fluid" src={items.img} alt="" />
                </div>
                <h2 className="text-center line-height h4 font-weight-bold m-font">
                  Higher Education Commission (HEC) of Pakistan
                </h2>
                <p className="text-center my-4 margin-bottom-em m-font">
                  {items.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="position-relative">
          <img
            className="img-fluid img-cover"
            src="https://www.hup.edu.pk/wp-content/uploads/2020/11/Black-White-1-1.png?id=8115"
            alt=""
          />
          <div className="position flex-column">
            <h2 className="white h1 font-weight-bold text-center m-font">
              Reputation
            </h2>
            <p className="white h3 mb-font text-center m-font">
              Hajvery University is globally recognized for its strong
              connections with industry, high-impact research, <br/>and diverse range
              of innovative courses.
            </p>
            <div className="our-reputation-btn">
              <p className="m-font m-font">Our Reputation</p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row my-5">
            <div className="col-md-5 d-flex flex-column align-items-center font-weight-bold color-blue">
              <h3 className="text-center h2 m-font">What is HEC?</h3>
              <div>
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/09/higher-education-commission-pakistan-logo.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-5 d-flex justify-content-center">
              <p className="line-height m-font">
                HEC stands for Higher Education Commission. The Higher Education
                Commission is a statutory body formed by the Government of
                Pakistan which was established in 2002 under the Chairmanship of
                Atta-ur-Rahman. Its main functions are funding, overseeing,
                regulating and accrediting the higher education institutions in
                the country.
                <br /> Hajvery University takes pride in being HEC Recognized
                for excellence in education. Founded in 2002, Hajvery University
                is a non-profit private higher education institution located in
                the urban setting of the large metropolis of Lahore (population
                range of over 5,000,000 inhabitants), Punjab. This institution
                also has a branch campus in Sheikhupura.
                <br /> Officially recognized by the Higher Education Commission
                of Pakistan. Hajvery University (HU) offers courses and programs
                leading to officially recognized higher education degrees such
                as pre-bachelor degrees (i.e. certificates, diplomas, associate
                or foundation), bachelor’s degrees, and master’s degrees in
                several areas of study.
              </p>
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

export default BlogReaderOne;
