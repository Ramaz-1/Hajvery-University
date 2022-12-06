import React from "react";
import { useEffect } from "react";
import "./hu.css";
import Navbars from "../../Components/navbar";
import Footer from "../../Components/Footer";
function Polices() {
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
          src="https://www.hup.edu.pk/wp-content/uploads/2022/01/HU-Policies_New.jpg"
          alt=""
        />
      </div>
      <h2 className="h1 font-weight-bold my-5">Hajvery University Polices</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 bg-maroorn p-3 ">
            <div className="d-flex justify-content-between px-5">
              <h2 className="h2 white">Polices</h2>
              <h2 className="h2 white">Status</h2>
            </div>
          </div>
          <div className="col-md-12 even-child">
            <div className="d-flex justify-content-between px-5 align-items-center mb-column-view">
              <p className="p  font-weight-bold mb-text-center my-2">
                Hajvery University(HU) development plan
              </p>
              <button className="download-pdf-btn my-2">Download</button>
            </div>
          </div>
          <div className="col-md-12 even-child">
            <div className="d-flex justify-content-between px-5 align-items-center mb-column-view">
              <p className="p  font-weight-bold mb-text-center my-2">
                Hajvery University(HU) development plan
              </p>
              <button className="download-pdf-btn my-2">Download</button>
            </div>
          </div>
          <div className="col-md-12 even-child">
            <div className="d-flex justify-content-between px-5 align-items-center mb-column-view">
              <p className="p  font-weight-bold mb-text-center my-2">
                Hajvery University(HU) development plan
              </p>
              <button className="download-pdf-btn my-2">Download</button>
            </div>
          </div>
      
         
        </div>
      </div>
      <h2 className="h1 font-weight-bold my-5">HU Data for PEC</h2>
      <div className="container-fluid">
        <div className="row ">
        <div className="col-md-12 even-child">
            <div className="d-flex justify-content-between px-5 align-items-center mb-column-view">
              <p className="p  font-weight-bold mb-text-center my-2">
                Hajvery University(HU) development plan
              </p>
              <button className="download-pdf-btn my-2">Download</button>
            </div>
          </div>
          <div className="col-md-12 even-child">
            <div className="d-flex justify-content-between px-5 align-items-center mb-column-view">
              <p className="p  font-weight-bold mb-text-center my-2">
                Hajvery University(HU) development plan
              </p>
              <button className="download-pdf-btn my-2">Download</button>
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
}

export default Polices;
