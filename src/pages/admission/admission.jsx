import React from "react";
import { useEffect } from "react";
import Navbars from "../../Components/navbar";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../../Components/Footer";
import HoverVideoPlayer from "react-hover-video-player";
import "../admission/admission.css";
function Admission() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div>
        <Navbars />
      </div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/hajveri banner.jpg"
              alt="First slide"
            />
            {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/banner 2.jpg"
              alt="Second slide"
            />

            {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/Web-Banner-Hum-Hain-Mustaqbil-ka-Pakistan_SKP_02.jpg"
              alt="Third slide"
            />

            {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="./images/banner4.jpg"
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="img_container">
        <div className="img_container d-flex align-items-center justify-content-center position-relative">
          <h2 className="white h4">
            Top Ranking Interdisciplinary Research & Teaching University
          </h2>
        </div>
      </div>
      <div className="d-flex justify-content-center img-container">
        <div className="img-items-box">
          <img src="./images/Why-HU_10.jpg" alt="" />
          <div className="text-center white align-items-center mt-2">
            <p className="h5 coler-red">Why HU</p>
          </div>
        </div>
        <div className="img-items-box">
          <img src="./images/Merit-List_11.jpg" alt="" />
          <div className="text-center white align-items-center mt-2">
            <p className="h5 coler-red">Merit List</p>
          </div>
        </div>
        <div className="img-items-box">
          <img src="./images/01.jpg" alt="" />
          <div className="text-center white align-items-center mt-2">
            <p className="h5 coler-red">Admission Schedule</p>
          </div>
        </div>
        <div className="img-items-box">
          <img src="./images/How-to-apply-3.jpg" alt="" />
          <div className="text-center white align-items-center mt-2">
            <p className="h5 coler-red">How to Apply</p>
          </div>
        </div>
        <div className="img-items-box">
          <img src="./images/03 (1).jpg" alt="" />
          <div className="text-center white mt-2">
            <p className="h5 coler-red">Fees Structure</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 d-flex flex-column align-items-center">
            <div className="img-setter">
              <img
                className="img-fluid"
                src="./images/Undergraduate.jpg"
                alt=""
              />
              <div className="inter-border"></div>
            </div>
            <p className="h5 maroon">Undergraduated Pogramme</p>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center">
            <div className="img-setter">
              <img
                className="img-fluid"
                src="./images/Graduate_2022.jpg"
                alt=""
              />
              <div className="inter-border"></div>
            </div>
            <p className="h5 maroon">Graduate Programme</p>
          </div>
          <div className="col-md-4 d-flex flex-column align-items-center">
            <div className="img-setter">
              <img
                className="img-fluid"
                src="./images/PhD-Programs.jpg"
                alt=""
              />
              <div className="inter-border"></div>
            </div>
            <p className="h5 maroon">Ph.D Programme</p>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5">
        <h2 className="h1 text-center maroon mb-5 heading-text">
          HU EXPERIENCE
        </h2>

        <div className="row">
          <div className="col-md-3 img-box-hajvery">
            <img src="./images/Campuses.jpg" alt="" />
            <div className="positioning">
              <p>Campuses</p>
            </div>
          </div>
          <div className="col-md-3 img-box-hajvery">
            <img src="./images/Facilities.jpg" alt="" />
            <div className="positioning">
              <p>Facilities</p>
            </div>
          </div>
          <div className="col-md-3 img-box-hajvery">
            <img src="./images/HEC-Top-Ranking.jpg" alt="" />
            <div className="positioning">
              <p>HEC TOP Ranking</p>
            </div>
          </div>
          <div className="col-md-3 img-box-hajvery">
            <img src="./images/International-Partner-Univrsities.jpg" alt="" />
            <div className="positioning">
              <p>International Partner</p>
            </div>
          </div>
          <div className="col-md-3 img-box-hajvery">
            <img src="./images/Life-at-HU.jpg" alt="" />
            <div className="positioning">
              <p>Life at HU</p>
            </div>
          </div>
          <div className="col-md-3 img-box-hajvery">
            <img src="./images/Scholarships.jpg" alt="" />
            <div className="positioning">
              <p>Scholarships</p>
            </div>
          </div>
          <div className="col-md-3 img-box-hajvery">
            <img src="./images/Topnotch-Faculty.jpg" alt="" />
            <div className="positioning">
              <p>Topnotch-Faculty</p>
            </div>
          </div>
          <div className="col-md-3 img-box-hajvery">
            <img src="./images/Why-HU.jpg" alt="" />
            <div className="positioning">
              <p>Why-HU</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
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
      <div className="sectionHeight maroon">
        <h2 className="h1">Straight From The Source</h2>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <HoverVideoPlayer
              videoSrc="https://www.hup.edu.pk/wp-content/uploads/2022/02/Video-2-1.mp4"
              pausedOverlay={
                <img
                  src=""
                  alt=""
                  style={
                    {
                      // Make the image expand to cover the video's dimensions
                      // width: '100%',
                      // height: '100%',
                      // objectFit: 'cover',
                    }
                  }
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />
          </div>
          <div className="col-md-4">
            <HoverVideoPlayer
              videoSrc="https://www.hup.edu.pk/wp-content/uploads/2022/02/Video-1-1.mp4"
              pausedOverlay={
                <img
                  src="thumbnail-image.jpg"
                  alt=""
                  style={
                    {
                      // Make the image expand to cover the video's dimensions
                      // width: '100%',
                      // height: '100%',
                      // objectFit: 'cover',
                    }
                  }
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />
          </div>
          <div className="col-md-4">
            <HoverVideoPlayer
              videoSrc="https://www.hup.edu.pk/wp-content/uploads/2022/02/Video-3-1.mp4"
              pausedOverlay={
                <img
                  src="thumbnail-image.jpg"
                  alt=""
                  style={
                    {
                      // Make the image expand to cover the video's dimensions
                      // width: '100%',
                      // height: '100%',
                      // objectFit: 'cover',
                    }
                  }
                />
              }
              loadingOverlay={
                <div className="loading-overlay">
                  <div className="loading-spinner" />
                </div>
              }
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center my-5">
          <div className="col-md-5 d-flex justify-content-center border-right widthImg ">
            <img src="./images/TAKE-THE-NEXT-STEP.png" alt="" />
          </div>
          <div className="col-md-5 d-flex justify-content-center widthImg">
            <img src="./images/Anything_09.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="form-container bg-maroorn-form">
        <div className="form-position">
          <div className="form-box">
            <form>
              <div className="d-flex justify-content-around flexColumn alignItemsCenter">
                <div>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Enter Your Name"
                  />
                  {/* <div className="input">
  <p>This Field is Required</p>
</div> */}
                </div>
                <div>
                  <input
                    type="text"
                    className="input-field"
                    placeholder="Enter Your Name"
                  />
                  {/* <div className="input">
  <p>This Field is Required</p>
</div> */}
                </div>
              </div>
              <div className="ms-4 flex-center-mb">
                <input
                  className="input-field"
                  type="text"
                  placeholder="Enter Mail"
                />
                {/* <div className="input">
  <p>This Field is Required</p>
</div> */}
              </div>
              <div className="d-flex justify-content-around flexColumn">
                <div className="d-flex flex-column align-items-center mt-3">
                  <p className="text">Campus Location</p>

                  <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                  {/* <div className="input">
  <p>This Field is Required</p>
</div> */}
                </div>
                <div className="d-flex flex-column align-items-center mt-3">
                  <p className="text">Degree Programs</p>
                  <select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                  {/* <div className="input">
  <p>This Field is Required</p>
</div> */}
                </div>
              </div>
              <div className="d-flex justify-content-end mx-3 my-5">
                <button type="button" class="btn btn-light">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="container row-pos">
            <h2 className="h1 font-weight-bold white my-5  mb-4">
              Global Accreditation{" "}
            </h2>
            <div className="row d-flex justify-content-center">
              <div className="col-md-2 object-fit-cover  img">
                <img src="./images/GOVT-OF-THE-PUNJAB-01-276x300.png" alt="" />
              </div>
              <div className="col-md-2 object-fit-cover img">
                <img src="./images/PEC-01-276x300.png" alt="" />
              </div>
              <div className="col-md-2 object-fit-cover img">
                <img src="./images/PCP-01-276x300.png" alt="" />
              </div>
              <div className="col-md-2 object-fit-cover img">
                <img src="./images/PHEC-01-276x300.png" alt="" />
              </div>
              <div className="col-md-2 object-fit-cover img">
                <img src="./images/HEC-01-276x300.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-md-3">
            <h2 className="h1 maroon">Question?</h2>
          </div>
          <div className="col-md-7 widthImg img">
            <img src="./images/I-love-Hajvery.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="container-fluid my-5">
        <div className="row d-flex justify-content-around">
          <div className="col-md-3 animation-box my-3">
            <div className="text">
              <h2 className="text-center h3">STUDENT SOCIETIES</h2>
            </div>
          </div>
          <div className="col-md-4 animation-box my-3">
            <div className="text">
              <h2 className="text-center h3">FACTS AND FIGURES</h2>
            </div>
          </div>
          <div className="col-md-3 animation-box my-3">
            <div className="text">
              <h2 className="text-center h3">APPLY NOW</h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Admission;
