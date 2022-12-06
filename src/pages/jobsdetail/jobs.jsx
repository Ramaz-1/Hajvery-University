import React, {useEffect} from "react";
import Navbars from "../../Components/navbar";
import Footer from "../../Components/Footer";
import "./jobs.css";
import { useNavigate } from "react-router-dom";
function JobsDetail() {
  const navigate = useNavigate();
  useEffect(()=>{
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[])
  function homepage() {
    navigate("/home");
  }
  function form(){
    navigate("/form")
  }
  return (
    <>
    <div className="wrapper">
      <div>
        <Navbars />
      </div>
      <div className="bgImg">
        <img
          src="https://www.hup.edu.pk/wp-content/uploads/2022/05/New-Careers_006-1.jpg"
          alt=""
        />
      </div>
      <div className="container d-flex flex-column align-items-start">
        <h2 className="h3 font-weight-bold text-start maroon mt-5 mb-3 mb-font-size heading-text">
          Deputy Controller of Examination
        </h2>

        <table className="d-flex justify-content-center">
          <tr className="d-flex flex-column detail-col">
            <th className="text-center">Reference:</th>
            <th className="text-center">Job Status</th>
            <th className="text-center">Job Type:</th>
            <th className="text-center">Job Status:</th>
            <th className="text-center">Job Advertised:</th>
            <th className="text-center">Location:</th>
            <th className="text-center">Last Date to Apply:</th>
          </tr>
          <tr className="d-flex flex-column info-col">
            <td className="text-center">Deputy Controller of Examination</td>
            <td>
              <div className="apply-btn">
                <img
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/05/Apply-Now-Red-300x100.png"
                  alt=""
                />
              </div>
            </td>
            <td>Full time</td>
            <td>05-Aug-22</td>
            <td>Lahore,Sheikhupura</td>
            <td className="hajvery-url-setting">
              Hajvery University Website:
              <p className="url-hajvery mx-3" onClick={() => homepage()}>
                <span>https://www.hup.edu.pk/</span>
              </p>
            </td>
            <td>Tuesday, 30 Aug, 2022</td>
          </tr>
        </table>
        <p className="h5 font-weight-bold mt-5">Job Elgibility</p>
        <div>
          <p className="job-detail">
            <li className="mx-0">
              The primary duties of the incumbent will include examination
              planning, scheduling, maintenance of examination and students’
              physical records, and student record verifications. He/she will
              ensure strict compliance with institutional policies and
              procedures during examinations and will ensure and monitor the
              examination invigilation process. He/she will also coordinate with
              respective program coordinators/directors and concerned university
              administrative departments in this regard.DUTIES AND
              RESPONSIBILITIES
            </li>
          </p>
          <ul className="p">
            <li>Planning, scheduling, and organization of examinations.</li>
            <li>Planning, scheduling, and organization of examinations.</li>
            <li>Planning, scheduling, and organization of examinations.</li>
            <li>Planning, scheduling, and organization of examinations.</li>
            <li>Planning, scheduling, and organization of examinations.</li>
            <li>Planning, scheduling, and organization of examinations.</li>
            <li>Planning, scheduling, and organization of examinations.</li>
            <li>Planning, scheduling, and organization of examinations.</li>
            <li>Planning, scheduling, and organization of examinations.</li>
            <li>Planning, scheduling, and organization of examinations.</li>
            <li>Planning, scheduling, and organization of examinations.</li>
          </ul>
        </div>
        <p className="h5 font-weight-bold mt-5">REQUIRED JOB SPECIFICATIONS</p>
        <div>
          <p className="h5 font-weight-bold mt-5 my-3">
            Required Qualification
          </p>

          <p>
            3-4 years of experience at HEC recognized University / Institute
          </p>
          <p className="h5 font-weight-bold mt-5 my-3">Required Experience</p>
          <p>BCS/BS/BBA/MBA or equivalent qualification.</p>
        </div>
        <p className="h5 font-weight-bold mt-5 my-3">How To Apply</p>
        <p className="mb-5 url-line-height">
          Interested Candidates are encouraged to apply along with the recent
          photograph (mandatory) to the Director Administration of HU through
          email at <span className="url-hajvery">hr@hup.edu.pk</span> OR{" "}<br/>
          <span className="url-hajvery" onClick={() => form()}>
    Apply Job for Online
          </span>
        </p>
        <p className="h5 font-weight-bold mt-5 my-3">
          Gen (R) Muhammad Latif <br />
          Director Administration
        </p>
      </div>
      </div>
      
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default JobsDetail;
