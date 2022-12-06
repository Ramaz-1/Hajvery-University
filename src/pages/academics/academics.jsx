import React from "react";
import { useEffect } from "react";
import Navbars from "../../Components/navbar";
import "./academics.css";
import { NavLink, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Footer from "../../Components/Footer";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Academics() {
  const navigate=useNavigate()
  function programdetail(){
    navigate("/discover")
  }
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])
  const departmentArray = [
    {
      title: "",
      img: "./images/academics/ADP-Business-Administration.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Commerce.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Computer-Science.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Economics.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Fashion-Design.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Film-TV-Advertising-_-Media-Studies.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Language-_-Literature.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Physical-Therapy-Assistant.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Business-Administration.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Commerce.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Computer-Science.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Economics.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Fashion-Design.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Film-TV-Advertising-_-Media-Studies.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Language-_-Literature.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Physical-Therapy-Assistant.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Business-Administration.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Commerce.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Computer-Science.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Economics.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Fashion-Design.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Film-TV-Advertising-_-Media-Studies.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Language-_-Literature.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Physical-Therapy-Assistant.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Business-Administration.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Commerce.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Computer-Science.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Economics.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Fashion-Design.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Film-TV-Advertising-_-Media-Studies.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Language-_-Literature.jpg",
    },
    {
      title: "",
      img: "./images/academics/ADP-Physical-Therapy-Assistant.jpg",
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
            src="https://www.hup.edu.pk/wp-content/uploads/2022/02/Academics.jpg"
            alt=""
          />
        </div>

      <div className="container">
        <div className="row my-5">
          <div className="col-md-12">
            <h1 className="text-start h1 degree_color">Degree Programs</h1>
            <p className="mt-5">
              <strong>ONE UNIVERSITY ENDLESS POSSIBILITIES</strong>
            </p>
            <p className="text-handler">
              At HU, we offer academic options for just about every interest.
              Check out our 60+ degree program, Award-winning faculty, and
              ground breaking research. You’ll quickly discover all there is to
              experience and get inspired by at one of Pakistan’s largest
              University.
            </p>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-4">
            <ul>
              <li className="text-end activeLink">
                <NavLink>Undergraduate</NavLink>
              </li>
              <li className="text-end activeLink">
                <NavLink>Graduate</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-md-12">
            <p className="otp my-3">UnderGraduate</p>
            <div className="bg-maroorn px-3">
              <p className="white py-3 font-weight-bold">Search by Faculty</p>

              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  className="d-flex align-items-center justify-content-between my-4 set-position"
                  variant="secondary"
                >
                  <p>Please Select</p>
                </Dropdown.Toggle>

                <Dropdown.Menu variant="white">
                  <Dropdown.Item href="#/action-1" active>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-4">
                    Separated link
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="row">
          {departmentArray.map((item) => (
            <div className="col-xsm-6 col-md-3 mb-2 flex-center">
              <Card style={{ width: "17rem" }}>
                <Card.Img className="img-up" variant="top" src={item.img} />
                <Card.Body className="pxy-0">
                  <Card.Title>
                    <div className="d-flex align-items-center">
                      <div className="borderTop"></div>
                      <p className="mx-2">UnderGraduate</p>
                    </div>
                  </Card.Title>
                  <Card.Text className="mx-3">ADP Physical Therapy</Card.Text>
                  <Button variant="bg-white" className="my-5" onClick={()=>programdetail()}>
                    Discover More
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        {/*  */}

        <div className="row my-5">
          <div className="col-md-12">
            <p className="otp my-3">Graduate</p>
            <div className="bg-maroorn px-3">
              <p className="white py-3 font-weight-bold">Search by Faculty</p>

              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  className="d-flex align-items-center justify-content-between my-4 set-position"
                  variant="secondary"
                >
                  <p>Please Select</p>
                </Dropdown.Toggle>

                <Dropdown.Menu variant="white">
                  <Dropdown.Item href="#/action-1" active>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-4">
                    Separated link
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="row">
          {departmentArray.map((item) => (
            <div className="col-xsm-6 col-md-3 my-2 flex-center">
              <Card style={{ width: "17rem" }}>
                <div>
                  <Card.Img className="img-up" variant="top" src={item.img} />
                </div>
                <Card.Body className="pxy-0">
                  <Card.Title>
                    <div className="d-flex align-items-center">
                      <div className="borderTop"></div>
                      <p className="mx-2">UnderGraduate</p>
                    </div>
                  </Card.Title>
                  <Card.Text className="mx-3">ADP Physical Therapy</Card.Text>
                  <Button variant="bg-white" className="my-5" onClick={()=>programdetail()}>
                    Discover More
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        {/*  */}
      </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
export default Academics;
