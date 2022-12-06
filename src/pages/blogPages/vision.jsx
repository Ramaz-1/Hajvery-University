import React from "react";
import Footer from "../../Components/Footer";
import Navbars from "../../Components/navbar";
import "./blogpages.scss";
const Vision = () => {
  return (
    <>
      <div className="bg-white mb-5">
        <div>
          <Navbars />
        </div>

        <div className="bgImg">
          <img
            src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Vision-Mission_New_02.jpg"
            alt=""
          />
        </div>

        <div className="container">
          <div className="row">
            <div>
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Our-Vision_2022-1.jpg"
                alt=""
              />
            </div>

            <p className="blog-text line-height comma-text">
              HU is committed to imparting knowledge & cultivating an Ummah of
              enlightened minds. We believe education is the liberating force
              that allows an individual to live a worthwhile life of personal
              satisfaction & be of service as a human being & a citizen.
            </p>
            <div>
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Our-Mission_2022-1.jpg"
                alt=""
              />
            </div>

            <p className="blog-text line-height comma-text">
              HU is committed to providing affordable & accessible quality
              undergraduate, graduate & doctoral degree programs which are
              national & international in scope
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Vision;
