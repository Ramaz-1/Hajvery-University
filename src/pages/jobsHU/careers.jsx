import React, {useEffect} from "react";
import Footer from "../../Components/Footer";
import "./careers.css";
import Navbars from "../../Components/navbar";
import { useNavigate } from "react-router-dom";
function Careers() {
  const navigate = useNavigate();
  function detailsJob() {
    navigate("/jobsDetail");
  }
  const array = [
    {
      tilt: "1",
    },
    {
      tilt: "1",
    },
    {
      tilt: "1",
    },
    {
      tilt: "1",
    },
    {
      tilt: "1",
    },
    {
      tilt: "1",
    },
    {
      tilt: "1",
    },
    {
      tilt: "1",
    },
    {
      tilt: "1",
    },
    {
      tilt: "1",
    },
  ];
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])
  return (
    <><div className="wrapper">
      <div>
        <Navbars />
      </div>
      <div className="bgImg">
        <img
          src="https://www.hup.edu.pk/wp-content/uploads/2022/05/New-Careers_006-1.jpg"
          alt=""
        />
      </div>

      <h2 className="h1 my-5 text-center text-weight-bold mangement-font-size">
        Management Positions
      </h2>
      <div className="container-fluid max-size">
        <div className="row">
          <div className="col-md-2 bg-maroorn border-left">
            <p className="white h5 font-weight-bold my-5 text-center">
              Serial#
            </p>
          </div>

          <div className="col-md-2 bg-maroorn border-left text-center">
            <p className="white h5 font-weight-bold my-5">Job ID</p>
          </div>
          <div className="col-md-2 bg-maroorn border-left text-center">
            <p className="white h5 font-weight-bold my-5">Job Advertised</p>
          </div>
          <div className="col-md-3 bg-maroorn border-left text-center">
            <p className="white h5 font-weight-bold my-5">Job Title</p>
          </div>
          <div className="col-md-3 bg-maroorn border-left text-center">
            <p className="white h5 font-weight-bold my-5">Campus</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 ">
            <p className="h5 font-weight-bold my-5 text-center">1</p>
          </div>

          <div className="col-md-2 ">
            <p className="h5 font-weight-bold my-5 text-center">179</p>
          </div>
          <div className="col-md-2 ">
            <p className="h5 font-weight-bold my-5 text-center">05-Aug-22</p>
          </div>
          <div className="col-md-3" onClick={()=>detailsJob()}>
            <p className="color-jobs h5 font-weight-bold my-5 text-center">
              DIRECTOR ADMINISTRATOR
            </p>
          </div>
          <div className="col-md-3 text-center">
            <p className="h5 font-weight-bold my-5">Lahore</p>
          </div>
        </div>

        <h2 className="h1 my-5 text-center text-weight-bold mangement-font-size">
          Academic Positions
        </h2>
        <div className="row">
          <div className="col-md-2 ">
            <p className="h5 font-weight-bold my-5 text-center">1</p>
          </div>

          <div className="col-md-2 ">
            <p className="h5 font-weight-bold my-5 text-center">179</p>
          </div>
          <div className="col-md-2 ">
            <p className="h5 font-weight-bold my-5 text-center">05-Aug-22</p>
          </div>
          <div className="col-md-3">
            <p className="color-jobs h5 font-weight-bold my-5 text-center">
              DIRECTOR ADMINISTRATOR
            </p>
          </div>
          <div className="col-md-3 text-center">
            <p className="h5 font-weight-bold my-5">Lahore</p>
          </div>
        </div>
      </div>
      <section className="table mb-size">
        <table className="d-flex">
          <tr className="bg-maroorn">
            <th className="white">Sr#</th>
            <th className="white">Job ID</th>
            <th className="white">Job Advertised</th>
            <th className="white">Job tilte</th>
            <th className="white">Campus</th>
          </tr>
          <tr>
            <td>1</td>
            <td>179</td>
            <td>10/26/2022</td>
            <td>Director Administrator</td>
            <td>Lahore</td>
          </tr>
        </table>
      </section>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default Careers;
