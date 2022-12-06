import React from "react";
import Footer from "../../Components/Footer";
import Navbars from "../../Components/navbar";
import Modal from "react-bootstrap/Modal";

const Apply = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <div className="wrapper">
      <div className="bg-white">
        <div>
          <Navbars />
        </div>
        <div className="bgImg">
          <img
            src="https://www.hup.edu.pk/wp-content/uploads/2022/01/how-to-apply_New.jpg"
            alt=""
          />
        </div>
        <h2 className="h1 blue text-center my-2 font-weight-bold">
          Apply at Hjvery <br />
          University
        </h2>
        <p className="blog-text text-center blue my-3">
          The Hajvery University Lahore invites applications for
          <br /> admissions twice a year, in the Fall and Spring
          <br /> Semesters.Follow the Following Steps to Apply Online in Hajvery
          University
        </p>
        <div className="multiedia-bg position-relative">
         <video loop="loop"
          autoplay="autoplay"
          muted="muted"
          height="800"
          controls>

<source src="./images/videoplayback (1)" type="video/mp4"/>

          </video>

              <div className="postion-center-animation">
                <div
                  class="step d-flex justify-content-center align-items-center"
                  onClick={() => setModalShow(true)}
                >
                  <span>
                    <i class="bi bi-play"></i>
                  </span>
                </div>
              </div>
            </div>
        <div className="bg-steps-img position-relative">
          <img
          className="img-to-display"
            src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Mask-Group-18@2x-1.jpg?id=14616"
            alt=""
          />

          <div className="position-step-box">
            <div className="d-flex flex-wrap">
              <div className="step-box-img">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Vector-Smart-Object.png"
                  alt=""
                />
              </div>
              <div className="bg-white p-4">
                <div className="step-box-icon">
                  <img
                    className=""
                    src="https://www.hup.edu.pk/wp-content/uploads/2022/01/logo.jpg"
                    alt=""
                  />
                </div>
                <h2 className="text-start heading-text">Step 1</h2>
                <p className="line-height">
                  Visit the campus or our official website www.hup.edu.pk, to
                  find <br />
                  detailed information regarding our various programs and our
                  <br /> admission portal https://hajvery.edu.pk/ to apply for
                  online
                  <br /> admission in Hajvery University.
                </p>
              </div>
            </div>
          </div>
          <div className="position-step-box-two">
            <div className="d-flex flex-wrap">
              <div className="bg-white p-4">
                <div className="step-box-icon">
                  <img
                    className=""
                    src="https://www.hup.edu.pk/wp-content/uploads/2022/01/logo.jpg"
                    alt=""
                  />
                </div>
                <h2 className="text-start heading-text">Step </h2>
                <p className="line-height">
                  Visit the campus or our official website www.hup.edu.pk, to
                  find <br />
                  detailed information regarding our various programs and our
                  <br /> admission portal https://hajvery.edu.pk/ to apply for
                  online
                  <br /> admission in Hajvery University.
                </p>
              </div>
              <div className="step-box-img mx-3">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Vector-Smart-Object-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="position-step-box-three">
            <div className="d-flex flex-wrap align-items-center">
              <div className="step-box-img mx-3">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Vector-Smart-Object-1-1.png"
                  alt=""
                />
              </div>
              <div className="bg-white p-4">
                <div className="step-box-icon">
                  <img
                    className=""
                    src="https://www.hup.edu.pk/wp-content/uploads/2022/01/logo.jpg"
                    alt=""
                  />
                </div>
                <h2 className="text-start heading-text">Step 3</h2>
                <p className="line-height">
                  Admission Application can be submitted online
                  <br />
                  through Hajvery University Online Admission Portal. So
                  complete your admission
                  <br />
                  application at www.hup.edu.pk/apply and after
                  <br /> adding some necessary required information. Follow the
                  following steps
                </p>
                <ul>
                  <li>Download & Print Admission Form</li>
                  <li>
                    Download & Print the Challan Form, and submit the
                    <br />
                    Application Fees Rs.1100 into any branch of Askari or UBL
                    <br />
                    bank near you
                  </li>
                  <li>
                    Send us Admission Form along with paid Challan Form and
                    <br />
                    copies of all the documents through courier at the following
                    <br />
                    address:
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="position-step-box-four">
            <div className="d-flex flex-wrap">
              <div className="bg-white p-4">
                <div className="step-box-icon">
                  <img
                    className=""
                    src="https://www.hup.edu.pk/wp-content/uploads/2022/01/logo.jpg"
                    alt=""
                  />
                </div>
                <h2 className="text-start heading-text">Step 4</h2>
                <p className="line-height">
                  Visit the campus or our official website www.hup.edu.pk, to
                  find <br />
                  detailed information regarding our various programs and our
                  <br /> admission portal https://hajvery.edu.pk/ to apply for
                  online
                  <br /> admission in Hajvery University.
                </p>
              </div>
              <div className="step-box-img mx-4">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Vector-Smart-Object-2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="position-step-box-five">
            <div className="d-flex flex-wrap">
              <div className="step-box-img">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Vector-Smart-Object-3.png"
                  alt=""
                />
              </div>
              <div className="bg-white p-4">
                <div className="step-box-icon">
                  <img
                    className=""
                    src="https://www.hup.edu.pk/wp-content/uploads/2022/01/logo.jpg"
                    alt=""
                  />
                </div>
                <h2 className="text-start heading-text">Step 5</h2>
                <p className="line-height">
                  Successful candidates will be required to deposit dues within<br/>
                  the deadline to get the registration number and first-semester<br/>
                  courses detail. All the students are expected to attend an<br/>
                  orientation session; they are also welcome to collect their
                  timetables<br/> from our information desk.<br/> <span>In case of any query
                  Regarding Apply in Hajvery University, feel <br/>free to contact
                  the Admissions Office at any time. We look<br/> forward to hearing
                  from you!
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div>
            <iframe
              width="w-100"
              height="800"
src="https://www.youtube.com/embed/?modestbranding=1&autoplay=0&controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=iframe_YTP_1669109714589&origin=https%3A%2F%2Fwww.hup.edu.pk&allowfullscreen=true&wmode=transparent&iv_load_policy=3&cc_load_policy=0&playsinline=1&html5=1&widgetid=1"
></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Apply;
