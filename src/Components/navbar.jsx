// import React from "react";
import React, { useState, useEffect } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import "../css/navbar.css";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Dropdown, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../css/navbar.scss";
function Navbars() {
  const navigate = useNavigate();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const navbarStyles = {
    position: "sticky",
    width: "100%",
    backgroundColor: "white",
    textAlign: "center",
  };
  const prideOfPoints = () => {
    navigate("/points-of-pride");
  };
  const faculty = () => {
    navigate("/faculty-of");
  };

  const qualityEnhanceMent = () => {
    navigate("/qulity-enahcemnet-cell");
  };
  const stickyBar = {
    position: "fixed",
  };
  const chapterRecutation = () => {
    navigate("/blogreader");
  };
  const apply = () => {
    navigate("/how-to-apply");
  };
  const facultyOf = () => {
    navigate("/faculty-of");
  };
  const message = () => {
    navigate("/message");
  };
  const feeStructure = () => {
    navigate("/fee-structure");
  };
  const partnerUniversities = () => {
    navigate("/blogPageTwo");
  };
  const academics = () => {
    navigate("/academics");
  };
  const vision = () => {
    navigate("/vision");
  };

  const topNotch = () => {
    navigate("/top-notch");
  };

  const internship = () => {
    navigate("/blogPageThree");
  };
  const form = () => {
    navigate("/form");
  };
  const campuses = () => {
    navigate("/campuses");
  };
  const director = () => {
    navigate("/director");
  };
  const convocation = () => {
    navigate("/convocation");
  };
  function homePage() {
    navigate("/home");
    console.log("hello");
  }

  const facility = () => {
    navigate("/facility");
  };
  const aids = () => {
    navigate("/aid-scholarship");
  };

  // ///////////////////////////////////////////////
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Dropdown, showDropdown] = useState(false);

  ////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
    console.log(currentScrollPos, "hello");
  };

  // new useEffect:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  //////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      {/* <Offcanvas show={show} onHide={handleClose} placement={"top"}>
        <Offcanvas.Body>
          <div className="d-flex justify-content-center">
            <input type="text" placeholder="Enter Your Search" />
          </div>
        </Offcanvas.Body>
      </Offcanvas> */}
      <div style={{ ...navbarStyles, top: visible ? "0" : "-60px" }}>
        <div className="container d-flex justify-content-between align-items-center hide">
          <div className="student_portal">
            <h2 onClick={() => homePage()}>Student Portal</h2>
          </div>
          <div className="d-flex font-size justify-content-around">
            <Link to={"/careers"}>
              <p>Jobs @ HU</p>
            </Link>
            <Link to={"/hu-polices"}>
              <p>HU Polices</p>
            </Link>
            <Link to={"/contact-us"}>
              <p>Request Info</p>
            </Link>
          </div>
          <div className="d-flex icon_seacrhbar">
            <div>
              <span className="socail-footer-icon-nav black">
                <i className="bi bi-facebook"></i>
              </span>
              <span className="socail-footer-icon-nav black">
                <i className="bi bi-whatsapp"></i>
              </span>
              <span className="socail-footer-icon-nav black">
                <i className="bi bi-instagram"></i>
              </span>
              <span className="socail-footer-icon-nav black">
                <i className="bi bi-youtube"></i>
              </span>
            </div>
            <div className="search_Bar">
              <input type="search" placeholder="Search" />
              <span className="socail-footer-icon-nav black">
                <i className="bi bi-search"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div
        className="sticky_navbar"
        style={{ ...stickyBar, top: prevScrollPos ? "0" : "" }}
      >
        <Navbar className="bg whitebg nav-white" expand="lg">
          <Container className="mb-padding mb-center">
            <Navbar.Brand>
              <div className="d-flex justify-content-center align-items-center">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Link to={"/home"}>
                  <div className="hide">
                    <img src="./images/Logo_Website.png" alt="" />
                  </div>
                  </Link>
                <div className="lg-hide mx-4">
                  <img
                    src="https://www.hup.edu.pk/wp-content/uploads/2022/07/logo-alter_02-1.png"
                    alt=""
                  />
                </div>
                <span className="lg-hide" >
                  <i className="bi bi-search"></i>
                </span>
              </div>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <div className="links_Tag">
                  <div>
                    <a className="nav-item dropdown dropdown-hover position-static">
                      <a
                        className="nav-link dropdown-toggle d-flex align-items-center"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <Link to={"/about"} className="mx-link">
                          {" "}
                          About
                        </Link>
                      </a>
                      <div
                        class="dropdown-menu  mt-0"
                        aria-labelledby="navbarDropdown"
                      >
                        <div class="container-fluid my-4">
                          <div className="row wheatSmoke">
                            <div className="col-md-12">
                              <div className=" overview">
                                <p>Overview</p>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="row">
                                <div
                                  className="col-md-6 col-lg-3 mx-3 my-3 border-bottom-menu"
                                  onClick={() => message()}
                                >
                                  <p>Message from Rector</p>
                                </div>
                                <div
                                  className="col-md-6 col-lg-3 mx-3 my-3 border-bottom-menu"
                                  onClick={() => vision()}
                                >
                                  <p>Vision and Mission</p>
                                </div>{" "}
                                <div
                                  className="col-md-6 col-lg-3 mx-3 my-3 border-bottom-menu"
                                  onClick={() => partnerUniversities()}
                                >
                                  <p>Pakistan's Leading University</p>
                                </div>{" "}
                                <div
                                  className="col-md-6 col-lg-3 mx-3 my-3 border-bottom-menu"
                                  onClick={() => director()}
                                >
                                  <p>Message from Director Administrator</p>
                                </div>{" "}
                                <div
                                  className="col-md-6 col-lg-3 mx-3 my-3 border-bottom-menu"
                                  onClick={() => chapterRecutation()}
                                >
                                  <p>HEC Recognized. TOP Ranking</p>
                                </div>{" "}
                                <div
                                  className="col-md-6 col-lg-3 mx-3 my-3 border-bottom-menu"
                                  onClick={() => topNotch()}
                                >
                                  <p>Top-Notch Faculty</p>
                                </div>{" "}
                                <div
                                  className="col-md-6 col-lg-3 mx-3 my-3 border-bottom-menu"
                                  onClick={() => chapterRecutation()}
                                >
                                  <p>Charter, Reputation, and Accrediation</p>
                                </div>{" "}
                                <div
                                  className="col-md-6 col-lg-3 mx-3 my-3 border-bottom-menu"
                                  onClick={() => convocation()}
                                >
                                  <p>HU Convocations</p>
                                </div>{" "}
                                <div
                                  className="col-md-6 col-lg-3 mx-3 my-3 border-bottom-menu"
                                  onClick={() => campuses()}
                                >
                                  <p>HU Campuses</p>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a className="nav-item dropdown dropdown-hover position-static">
                      <a
                        className="nav-link dropdown-toggle d-flex align-items-center"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <Link to={"/admission"} className="mx-link">
                          {" "}
                          Admission
                        </Link>
                      </a>
                      <div
                        class="dropdown-menu w-100 mt-0"
                        aria-labelledby="navbarDropdown"
                      >
                        <div class="container-fluid my-4">
                          <div className="row wheatSmoke">
                            <div className="col-md-12">
                              <div className=" overview">
                                <p>Overview</p>
                              </div>
                            </div>
                            <div
                              className="col-md-3 mx-3 my-3 border-bottom-menu"
                              onClick={() => academics()}
                            >
                              <p>Degree Programs</p>
                            </div>
                            <div
                              className="col-md-3 mx-3 my-3 border-bottom-menu"
                              onClick={() => aids()}
                            >
                              <p>Aid and Scholarships</p>
                            </div>{" "}
                            <div
                              className="col-md-3 mx-3 my-3 border-bottom-menu"
                              onClick={() => prideOfPoints()}
                            >
                              <p>Our Points of Pride</p>
                            </div>{" "}
                            <div
                              className="col-md-3 mx-3 my-3 border-bottom-menu"
                              onClick={() => feeStructure()}
                            >
                              <p>Fee Structure</p>
                            </div>{" "}
                            <div
                              className="col-md-3 mx-3 my-3 border-bottom-menu"
                              onClick={() => chapterRecutation()}
                            >
                              <p>HEC Recognized Top Ranking</p>
                            </div>{" "}
                            <div
                              className="col-md-3 mx-3 my-3 border-bottom-menu"
                              onClick={() => partnerUniversities()}
                            >
                              <p>International Partner Universities</p>
                            </div>{" "}
                            <div
                              className="col-md-3 mx-3 my-3 border-bottom-menu"
                              onClick={() => apply()}
                            >
                              <p>How to Apply</p>
                            </div>{" "}
                            <div
                              className="col-md-3 mx-3 my-3 border-bottom-menu"
                              onClick={() => form()}
                            >
                              <p>Apply Online</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a class="nav-item dropdown dropdown-hover position-static">
                      <a
                        className="nav-link dropdown-toggle d-flex align-items-center"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <Link to={"/academics"} className="mx-link">
                          {" "}
                          Academics
                        </Link>
                      </a>
                      <div
                        class="dropdown-menu w-100 mt-0"
                        aria-labelledby="navbarDropdown"
                      >
                        <div className="container-fluid my-4">
                          <div className="row wheatSmoke">
                            <div className="col-md-12">
                              <div className=" overview">
                                <p>Overview</p>
                              </div>
                            </div>
                            <div
                              className="col-md-3 mx-3 my-3 border-bottom-menu"
                              onClick={() => facultyOf()}
                            >
                              <p>
                                Faculty of Business Administration & Commerce
                              </p>
                            </div>
                            <div className="col-md-3 mx-3 my-3 border-bottom-menu">
                              <p>Faculty of Computer Sciences</p>
                            </div>
                            <div className="col-md-3 mx-3 my-3 border-bottom-menu">
                              <p>Faculty of Humanities and Social Sciences</p>
                            </div>
                            <div className="col-md-3 mx-3 my-3 border-bottom-menu">
                              <p>Faculty of Pharmacy</p>
                            </div>
                            <div className="col-md-3 mx-3 my-3 border-bottom-menu">
                              <p>Faculty of Fashion and Textile Desiging</p>
                            </div>
                            <div className="col-md-3 mx-3 my-3 border-bottom-menu">
                              <p>Faculty of Languages and Literature</p>
                            </div>
                            <div className="col-md-3 mx-3 my-3 border-bottom-menu">
                              <p>Faculty of Engineering</p>
                            </div>{" "}
                            <div className="col-md-3 mx-3 my-3 border-bottom-menu">
                              <p>Faculty of Commerce</p>
                            </div>{" "}
                            <div className="col-md-3 mx-3 my-3 border-bottom-menu">
                              <p>
                                Faculty of Business Administration & Commerce
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div>
                    <a class="nav-item dropdown dropdown-hover position-static">
                      <a
                        className="nav-link dropdown-toggle d-flex align-items-center"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <Link to={"/current"} className="mx-link">
                          {" "}
                          Current Students
                        </Link>
                      </a>
                      <div
                        class="dropdown-menu w-100 mt-0"
                        aria-labelledby="navbarDropdown"
                      >
                        <div className="container-fluid my-4">
                          <div className="row wheatSmoke">
                            <div className="col-md-12">
                              <div className=" overview">
                                <p>Overview</p>
                              </div>
                            </div>
                            <div
                              className="col-md-3 mx-3 my-3 border-bottom-menu"
                              onClick={() => facility()}
                            >
                              <p>Campus Facilities</p>
                            </div>{" "}
                            <div
                              className="col-md-3 mx-3 my-3 border-bottom-menu"
                              onClick={() => facility()}
                            >
                              <p>Life on Campus</p>
                            </div>{" "}
                            <div className="col-md-3 mx-3 my-3 border-bottom-menu">
                              <p>HU Student Portal</p>
                            </div>{" "}
                            <div
                              className="col-md-3 mx-3 my-3 border-bottom-menu"
                              onClick={() => facility()}
                            >
                              <p>Student Societies</p>
                            </div>{" "}
                            <div
                              className="col-md-3 mx-3 my-3 border-bottom-menu"
                              onClick={() => faculty()}
                            >
                              <p>Faculty & Research</p>
                            </div>{" "}
                            <div
                              className="col-md-3 mx-3 my-3 border-bottom-menu"
                              onClick={() => qualityEnhanceMent()}
                            >
                              <p>Quality Enhancement Cell</p>
                            </div>{" "}
                            <div className="col-md-3 mx-3 my-3 border-bottom-menu">
                              <p>24/7 Access to Course</p>
                            </div>{" "}
                            <div
                              className="col-md-3 mx-3 my-3 border-bottom-menu"
                              onClick={() => internship()}
                            >
                              <p>Internships and Corporate Interactions</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div>
                  <a href="https://hajvery.edu.pk/">
                  <div class="apply step">
                    Apply
                    {/* <div className="apply ">Apply</div> */}
                  </div>
                  </a>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}
export default Navbars;
