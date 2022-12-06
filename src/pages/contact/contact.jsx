import React from "react";
import { useEffect } from "react";
import "./contact.scss";
import Navbars from "../../Components/navbar";
import Footer from "../../Components/Footer";
function Contact() {
  const mapArry = [
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/Main_Campus-1024x603.jpg",
      title: "43-52 Industrial Area, Gulberg III, Lahore",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/12/EURO-CAMPUS-1.jpg",
      title:
        "HU Centralized Admission Office 33 Industrial Area, Gulberg III, Lahore",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/Sheikhupura_Campus.jpg",
      title: "Ghazi Minara, Main Sargodha Road, Sheikhupura",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/Multan_Campus.jpg",
      title: "Multan Campus (Proposed) Bosan Road Multan",
    },
  ];
  const picsArray = [
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/02/1200-Graduate-Students_01-1-300x300.jpg",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/02/5500-Undergraduate-Student_01-1-300x300.jpg",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/02/5500-Undergraduate-Student_01-1-300x300.jpg",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/02/5500-Undergraduate-Student_01-1-300x300.jpg",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/02/10-Regional-Alumni-Associations-Worldwide_01-1-300x300.jpg",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/02/5000-Alumni-Volunteers-Around-the-World_01-1-300x300.jpg",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/02/20-Sports-and-Recreational-Facilities_01-1-300x300.jpg",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/02/5000-Alumni-Volunteers-Around-the-World_01-1-300x300.jpg",
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
          src="https://www.hup.edu.pk/wp-content/uploads/2022/02/Contact-us_01-1.jpg"
          alt=""
        />
      </div>
      <h2 className="h1 font-weight-bold text-center mt-5 heading-text">Get In Touch</h2>
      <div className="para-contact-text">
        <p className="text-center">
          You can call or email us with any queries. We try to be as quick and
          responsive as possible. However, due to the large number of emails
          that we receive every day, we may not be able to respond as quickly as
          we would like to.
        </p>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center my-5">
          <div className="col-md-5 contact-phone-icon d-flex flex-column align-items-center border-right">
            <span>
              <i className="bi bi-envelope"></i>
            </span>
            <p className="p font-weight-bold">Email us</p>
            <p className="p font-weight-bold maroon my-3">
              admission@hup.edu.pk
            </p>
            <p className="p font-weight-bold maroon my-2">admin@hup.edu.pk</p>
          </div>
          <div className="col-md-5 contact-phone-icon d-flex flex-column align-items-center">
            <span>
              <i className="bi bi-telephone"></i>
            </span>
            <p className="p font-weight-bold">Call us</p>
            <p className="p font-weight-bold maroon my-3">0304-1116667</p>
            <p className="p font-weight-bold maroon my-2">042-111-777-007</p>
          </div>
        </div>
        <h2 className="h1 font-weight-bold">Follow us</h2>
        <div className="social-icons d-flex justify-content-center my-4">
          <span>
            <i class="bi bi-facebook"></i>
          </span>
          <span>
            <i class="bi bi-instagram"></i>
          </span>
          <span>
            <i class="bi bi-twitter"></i>
          </span>
          <span>
            <i class="bi bi-whatsapp"></i>
          </span>
          <span>
            <i class="bi bi-youtube"></i>
          </span>
        </div>
        <div className="row d-flex justify-content-center">
          {mapArry.map((items) => (
            <div className="col-md-5 contact-box-shadow p-0 mx-3 mt-5 skew-hover">
              <div className="contact-img-box">
                <img className="img-fluid" src={items.img} alt="" />
              </div>
              <h2 className="h2 font-weight-bold my-3 maroon">{items.title}</h2>
              <div className="d-flex justify-content-center my-4 ">
                <div className="map-button d-flex justify-content-center align-items-center">
                  <p>View Map</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2 className="h1 font-weight-bold text-center mt-5 heading-text">
          Looking For Help?
        </h2>
        <div className="para-contact-text">
          <p className="text-center">
            Drop us your message and I will get back to you as soon as possible
          </p>
        </div>
        <form>
          <div className="form-input-box my-3">
            <input
              className="mx-2 mt-3"
              name="contact"
              placeholder="Full Name"
            />
            <input
              className="mx-2 mt-3"
              name="contact"
              placeholder="Phone Number"
            />
            <input className="mx-2 mt-3" name="contact" placeholder="E-Mail" />
            <div className="d-flex mb-col">
              <div className="form-input-box mx-2 mt-3">
                <p className="font-weight-bold h5 text-center heading-text">
                  Campus Location:<span className="red">*</span>
                </p>
                <select className="form-select select my-4">
                  <option>HR</option>
                  <option>Director</option>
                  <option>CEO</option>
                  <option>Zaildar</option>
                </select>
              </div>
              <div className="form-input-box mx-2 mt-3">
                <p className="font-weight-bold h5 text-center heading-text">
                  Degree Programms:<span className="red">*</span>
                </p>
                <select className="form-select select my-4">
                  <option>HR</option>
                  <option>Director</option>
                  <option>CEO</option>
                  <option>Zaildar</option>
                </select>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <div className="form-send-btn d-flex justify-content-center align-items-center">
                <p>Send</p>
              </div>
            </div>
          </div>
        </form>

        <div className="row my-5">
          {picsArray.map((items) => (
            <div className="col-md-3 d-flex justify-content-center">
              <img className="img-fluid" src={items.img} alt="" />
            </div>
          ))}
        </div>
      </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Contact;
