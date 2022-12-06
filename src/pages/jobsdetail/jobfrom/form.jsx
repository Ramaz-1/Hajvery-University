import React from "react";
import { useEffect } from "react";
import "./form.css";
import Dropdown from "react-bootstrap/Dropdown";
import RCG from "react-captcha-generator";
import { useState } from "react";

function Form() {

  const [jobform, setJobform] = useState({
    firstName: "",
    lastName: "",
    fathersFirstname: "",
    fathersLastname: "",
    fathersHusbandProfession: "",
    cnic: "",
    mobile: "",
    homePhone: "",
    email: "",
    address: "",
    address_two: "",
    city: "",
    province: "",
    zipCode: "",
    findPosition: "",
    salaryExpectations: "",
    educationalHistory: "",
    totalExperience: "",
    employementHistory: "",
    domainAreas: "",
    teachingExperience: "",
    researchDetail: "",
  });

  
  function onChange(event) {
    setJobform({ ...jobform, [event.target.name]: event.target.value });
  }
 

  const hajveryForm = (event) => {
    event.preventDefault();
    console.log(jobform);
  };

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center px-3">
          <div className="col-md-9 form-box-shadow my-3 px-3">
            <form onSubmit={hajveryForm}>
              <h2 className="text-start h5 border-bottom my-2 pb-3">
                Hajvery University (HU) Job Application Form
              </h2>
              <h2 className="text-start h5 border-bottom my-5 pb-3">
                Please fill the Job Application Form Carefully!
              </h2>
              <p className="p font-weight-bold">
                Upload Your Picture:<span className="red">*</span>
              </p>
              <div className="d-flex justify-content-between align-items-center upload-dotted-border pxy-4 my-3">
                <p>Choose file</p>
                <div>
                  <span className="form-upload-icon">
                    <i class="bi bi-camera"></i>
                  </span>
                  <span className="form-upload-icon">
                    <i class="bi bi-file-arrow-up"></i>
                  </span>
                </div>
              </div>
              <p className="p font-weight-bold">
                Position Applied For:<span className="red">*</span>
              </p>
              <div className="dropdown-upload-form">
                <select className="form-select select my-4">
                  <option>HR</option>
                  <option>Director</option>
                  <option>CEO</option>
                  <option>Zaildar</option>
                </select>
              </div>
              <p className="p font-weight-bold">
                Campus Applied For:<span className="red">*</span>
              </p>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  className="d-flex align-items-center justify-content-between my-4 set-position height-upload-dropdown"
                  variant="secondary"
                >
                  <p>--Select--</p>
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
              <p className="p font-weight-bold">
                Full Name:<span className="red">*</span>
              </p>
              <div className="jobs-form-input d-flex flex-wrap">
                <div className="d-flex flex-column">
                  <input type="text" name="firstName" value={jobform.firstName} onChange={onChange}/>
                  <span className="job-input-text">First</span>
                </div>
                <div className="d-flex flex-column mx-3 mb-margin">
                  <input type="text" name="lastName" value={jobform.lastName} onChange={onChange}/>
                  <span className="job-input-text">last</span>
                </div>
              </div>
              <p className="p font-weight-bold mt-3">
                Father's/Husband Name:<span className="red">*</span>
              </p>
              <div className="jobs-form-input d-flex flex-wrap">
                <div className="d-flex flex-column">
                  <input />
                  <span className="job-input-text">First</span>
                </div>
                <div className="d-flex flex-column mx-3 mb-margin">
                  <input />
                  <span className="job-input-text">last</span>
                </div>
              </div>
              <div className="mt-3 profession-input">
                <p className="p font-weight-bold">
                  Father's/Husband's Profession: :<span className="red">*</span>
                </p>
                <input />
              </div>
              <div className="my-3">
                <p className="p font-weight-bold">
                  Gender:<span className="red">*</span>
                </p>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Male
                  </label>
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Female
                  </label>
                </div>
              </div>
              <div className="my-3">
                <p className="p font-weight-bold">
                  Marital Status:<span className="red">*</span>
                </p>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Single
                  </label>
                </div>

                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Married
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Other
                  </label>
                </div>
              </div>
              <div className="form-date-input my-3">
                <p className="p font-weight-bold">
                  Date of Birth:<span className="red">*</span>
                </p>
                <div className="d-flex flex-column my-3">
                  <input type={"date"} />
                  <span className="job-input-text">dd/MM/yyyy</span>
                </div>
              </div>
              <div className="form-date-input my-3 jobs-form-input">
                <p className="p font-weight-bold">
                  CNIC:<span className="red">*</span>
                </p>
                <input />
              </div>
              <div className="form-date-input my-3 landline-detail-input">
                <p className="p font-weight-bold">
                  Mobile:<span className="red">*</span>
                </p>
                <input />
              </div>
              <div className="form-date-input my-3 landline-detail-input">
                <p className="p font-weight-bold">
                  Home Phone:<span className="red">*</span>
                </p>
                <input />
              </div>
              <div className="form-date-input my-3 landline-detail-input">
                <p className="p font-weight-bold">
                  Email:<span className="red">*</span>
                </p>
                <input />
              </div>
              {/* /////////////////////////////////Address////////////////////////////// */}
              <div>
                <div className="form-date-input my-3 address-input">
                  <p className="p font-weight-bold">
                    Address:<span className="red">*</span>
                  </p>
                  <div className="d-flex flex-column">
                    <input />
                    <span className="job-input-text">Street Address</span>
                  </div>
                </div>
                <div className="form-date-input my-3 address-input">
                  <div className="d-flex flex-column">
                    <input />
                    <span className="job-input-text">Address Line 2</span>
                  </div>
                </div>
              </div>

              <div className="d-flex mb-column">
                <div className="d-flex flex-column state-form-input">
                  <input />
                  <span className="job-input-text">City</span>
                </div>
                <div className="d-flex flex-column state-form-input mx-3 mb-margin ">
                  <input />
                  <span className="job-input-text">State/Region/Province</span>
                </div>
              </div>
              <div className="d-flex mt-4 align-items-center">
                <div className="d-flex flex-column state-form-input">
                  <input />
                  <span className="job-input-text">Postal / Zip Code</span>
                </div>
                <div className="d-flex flex-column mx-3">
                  <select className="form-select select my-0">
                    <option>Pakistan</option>
                    <option>Afganistan</option>
                    <option>Kenya</option>
                    <option>Zimbabwe</option>
                  </select>
                  <span className="job-input-text mt-1">Country</span>
                </div>
              </div>
              {/* ///////////////////////////////////////////////////////////////// */}
              {/* /////// */}

              <div className="form-date-input my-3 landline-detail-input">
                <p className="p font-weight-bold">
                  How did you find out about this position?:
                  <span className="red">*</span>
                </p>
                <input />
              </div>

              <div className="form-date-input my-3 landline-detail-input">
                <p className="p font-weight-bold">
                  Salary Expectations:<span className="red">*</span>
                </p>
                <input />
              </div>

              <div className="form-date-input my-3 landline-detail-input">
                <p className="p font-weight-bold">
                  Educational History:<span className="red">*</span>
                </p>
                <textarea rows={"5"} cols={"90"} />
              </div>

              <div className="form-date-input my-3 landline-detail-input">
                <p className="p font-weight-bold">
                  Total Experience:<span className="red">*</span>
                </p>
                <textarea rows={"2"} cols={"30"} />
              </div>

              <div className="form-date-input my-3 landline-detail-input">
                <p className="p font-weight-bold">
                  Employment History:<span className="red">*</span>
                </p>
                <textarea rows={"2"} cols={"30"} />
              </div>

              <div className="form-date-input my-3 landline-detail-input">
                <p className="p font-weight-bold">
                  Domain / Areas in which you can deliver results?
                  <span className="red">*</span>
                </p>
                <textarea rows={"3"} cols={"90"} />
              </div>
              <div className="form-date-input my-3 landline-detail-input">
                <p className="p font-weight-bold">
                  Teaching Experience:<span className="red">*</span>
                </p>
                <textarea rows={"2"} cols={"30"} />
              </div>

              <div className="form-date-input my-3 landline-detail-input">
                <p className="p font-weight-bold">
                  Details of Publications / Research:
                  <span className="red">*</span>
                </p>
                <textarea rows={"2"} cols={"30"} />
              </div>
              <div className="d-flex justify-content-between align-items-center upload-dotted-border pxy-4 my-3">
                <p>Choose file</p>
                {/* <input type="file" id="img" name="img" accept="image/*" /> */}

                <div>
                  <span className="form-upload-icon">
                    <i class="bi bi-file-arrow-up"></i>
                  </span>
                </div>
              </div>

              <p className="font-weight-bold">
                IMPORTANT NOTES: <br />
                1. PLEASE THOROUGHLY READ THE JOB DETAILS & APPLY ONLY IF YOU
                FULFILL ALL THE REQUIREMENTS. <br />
                2. ONLY SHORTLISTED CANDIDATES WILL BE INVITED THROUGH CALL,
                EMAIL OR SMS FOR AN INTERVIEW <br />
                3. RECENT PHOTOGRAPHS ARE MANDATORY WITH THE APPLICATION, SO DO
                NOT FORGET TO ATTACH THE PHOTOGRAPH.
              </p>


<div className="d-flex justify-content-center">
<button type="submit" className="btn-color mx-2">Save</button>
<button type="submit" className="btn-color mx-2">Apply for job at HU</button>
</div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
