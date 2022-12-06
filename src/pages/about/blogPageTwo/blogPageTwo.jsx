import React from "react";
import { useEffect } from "react";
import Navbars from "../../../Components/navbar";
import "./blogPageTwo.scss";
import Footer from "../../../Components/Footer";

function BlogReaderTwo() {
  const countryName = [
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2020/11/1200px-Flag_of_Portland_Oregon.svg.png",
      title: "Switzerand",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2020/11/flag-of-the-netherlands.png",
      title: "Switzerand",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2020/11/Flag-Indonesia.png",
      title: "Switzerand",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2020/11/Flag-India.png",
      title: "Switzerand",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2020/11/1200px-Flag_of_Portland_Oregon.svg.png",
      title: "Switzerand",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2020/11/flag-of-the-netherlands.png",
      title: "Switzerand",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2020/11/Flag-Indonesia.png",
      title: "Switzerand",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2020/11/Flag-India.png",
      title: "Switzerand",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2020/11/1200px-Flag_of_Portland_Oregon.svg.png",
      title: "Switzerand",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2020/11/flag-of-the-netherlands.png",
      title: "Switzerand",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2020/11/Flag-Indonesia.png",
      title: "Switzerand",
    },
    {
      img: "https://www.hup.edu.pk/wp-content/uploads/2020/11/Flag-India.png",
      title: "Switzerand",
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
          src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Partner-Universities_New.jpg"
          alt=""
        />
      </div>
      <div className="container">
        <h2 className="text-center h1 font-weight-bold mt-5">
          Recognitions and Accreditations
        </h2>
        <div className="d-flex justify-content-center">
          <div className="text-width-hec">
            <p className="text-center px-5 line-height">
              Hajvery University takes pride in being HEC recognized for
              excellence in education and research, both nationally and
              internationally. Our accreditations from numerous institutions
              depict the extent to which our university programs meet the
              rigorous quality criteria for above-par education in Pakistan
            </p>
          </div>
        </div>

        <div className="row row-bottom-shadow mt-5">
          <div className="col-md-12">
            <div className="d-flex align-items-center">
              <div>
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2020/11/Flag_of_Turkey.png"
                  alt=""
                />
              </div>
              <p className="font-weight-bold h4 mx-2">Turkey</p>
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center mx-4 my-3">
            <ul className="text-list">
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
            </ul>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center mx-4 my-3">
            <ul className="text-list">
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
            </ul>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center mx-4 my-3">
            <ul className="text-list">
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
            </ul>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center mx-4 my-3">
            <ul className="text-list">
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
            </ul>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center mx-4 my-3">
            <ul className="text-list">
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
            </ul>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-center mx-4 my-3">
            <ul className="text-list">
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
              <li className="line-height">Giresun University</li>
            </ul>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          {countryName.map((items) => (
            <div className="col-md-3 country-box-shadow mx-3 my-5 ">
              <div className="d-flex">
              <div>
                <img src={items.img} alt="" />
              </div>
              <h2 className="h4 font-weight-bold mx-2">NetherLand</h2>
              </div>
              <ul className="mt-3">
                <li>Poland</li>
              </ul>
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
export default BlogReaderTwo;
