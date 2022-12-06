import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";
function Footer() {
  return (
    <>
      <div className="bg-black pt-5 wrapper-footer">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-4 text-white padding-top-col">
              <div>
                <h2 className="text-start mt-5 h1 my-2 font-size-footer">ADMISSIONS</h2>
                <p className="mt-4 line-height">
                  We know how hard the application
                  <br /> process can be, so we have provided a step by step
                  guide here.
                  <br />{" "}
                  <a className="cursor-link" href="https://hajvery.edu.pk/">
                    Apply Now
                  </a>{" "}
                  <br />
                  E-Mail: <span className="white hover-color"><a href="mailto:admission@hup.edu.pk">admission@hup.edu.pk</a></span>
                </p>
              </div>
            </div>
            <div className="col-md-4 text-white my-2 padding-top-col">
              <div>
                <h2 className="text-start mt-5 h1 font-size-footer">JOBS AT HU</h2>
                <p className="mt-3 line-height">
                  Make Your Career with a Leading <br />
                  Top Ranking Govt Chartered Autonomous
                  <br /> University.
                  <br />
                  <a className="cursor-link" href="https://hajvery.edu.pk/">Apply Now</a> <br />
                  E-Mail: <span className="white hover-color"><a href="mailto:hr@hup.edu.pk">hr@hup.edu.pk</a></span>
                </p>
              </div>
            </div>
            <div className="col-md-4 text-white padding-top-col">
              <div>
                <h2 className="text-start mt-5 h1 my-2 font-size-footer">CONTACT US</h2>
                <p className="mt-3 line-height">
                  43-52 Industrial Area
                  <br />
                  Gulberg III, Lahore
                  <br />
                  UAN: 042-111-777-007
                  <br />
                  Hotline: 0304-1116667
                  <br />
                  <span className="text-white m-0">
                    E-Mail:<span className="white hover-color"><a href="mailto:admin@hup.edu.pk">admin@hup.edu.pk</a></span>
                  </span>
                </p>
              </div>
              <div className="icon-wrapper">
                <span className="socail-footer-icon">
                  <i class="bi bi-facebook"></i>
                </span>
                <span className="socail-footer-icon">
                  <i class="bi bi-whatsapp"></i>
                </span>
                <span className="socail-footer-icon">
                  <i class="bi bi-instagram"></i>
                </span>
                <span className="socail-footer-icon">
                  <i class="bi bi-youtube"></i>
                </span>
              </div>
            </div>
          </div>
          <h2 className="text-center h3 mt-5 text-white">HAJVERY UNIVERSITY</h2>
          <p className="text-center text-white pb-3">@ HU 1990-2022</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
