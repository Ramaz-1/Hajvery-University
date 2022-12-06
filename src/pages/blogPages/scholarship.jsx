import React from "react";
import Footer from "../../Components/Footer";
import Navbars from "../../Components/navbar";

const Scholarhip = () => {
  const rowArray = [
    {
      img: "./images/c2558664.jpg",
      heading: "Merit Scholarship",
      title:
        "Hajvery University (HU) is an autonomous Government-Chartered university. Approved by the Higher Education Commission of Pakistan (HEC), Punjab Higher Education Commission (PHEC) and accredited by Pharmacy Council of Pakistan, Pakistan Engineering Council, Council of Higher Education Turkey and the European Commission.",
    },
    {
      img: "./images/5f7506ea-460x338.jpg",
      heading: "Alumni Scholarship",
      title:
        "Hajvery University (HU) is an autonomous Government-Chartered university. Approved by the Higher Education Commission of Pakistan (HEC), Punjab Higher Education Commission (PHEC) and accredited by Pharmacy Council of Pakistan, Pakistan Engineering Council, Council of Higher Education Turkey and the European Commission.",
    },
    {
      img: "./images/e2352059.jpg",
      heading: "Need Based Financial Aid",
      title:
        "Hajvery University (HU) is an autonomous Government-Chartered university. Approved by the Higher Education Commission of Pakistan (HEC), Punjab Higher Education Commission (PHEC) and accredited by Pharmacy Council of Pakistan, Pakistan Engineering Council, Council of Higher Education Turkey and the European Commission.",
    },
    {
      img: "./images/6578bcfa.jpg",
      heading: "Outstanding Sportsmen and Extracurricular Scholarships",
      title:
        "Hajvery University (HU) is an autonomous Government-Chartered university. Approved by the Higher Education Commission of Pakistan (HEC), Punjab Higher Education Commission (PHEC) and accredited by Pharmacy Council of Pakistan, Pakistan Engineering Council, Council of Higher Education Turkey and the European Commission.",
    },
  ];
  const readMore = [{}];
  const readMoreTwo = [{}];

  return (
    <>
      <div>
        <Navbars />
      </div>
      <div className="bg-white">
        <div className="bgImg">
          <img
            src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Scholarships_New.jpg"
            alt=""
          />
        </div>
        <div className="container">
          {/* <div className="row d-flex justify-content-center my-5">
          <div className="col-md-2 border-right d-flex flex-column align-items-center my-2">
            <div>
              <img src="./images/university.png" alt="" />
            </div>
            <p className="text-maroon maroon h1">5</p>
            <p className="my-3 heading-text text-center">Campuses</p>
          </div>
          <div className="col-md-2 border-right  d-flex flex-column align-items-center my-2">
            <div>
              <img src="./images/003-collaboration.png" alt="" />
            </div>
            <p className="text-maroon maroon h1 ">95%</p>
            <p className="my-3 heading-text text-center">Employment Rate</p>
          </div>
          <div className="col-md-2 border-right  d-flex flex-column align-items-center my-2">
            <div>
              <img src="./images/graduation_hat2-removebg-preview.png" alt="" />
            </div>
            <p className="text-maroon maroon h1 ">60+</p>
            <p className="my-3 heading-text text-center">Degree Programs</p>
          </div>
          <div className="col-md-2  d-flex flex-column align-items-center my-2">
            <div>
              <img src="./images/university.png" alt="" />
            </div>
            <p className="text-maroon maroon h1 ">550+</p>
            <p className="my-3 heading-text text-center">Faculty Members</p>
          </div>
        </div> */}
          <div className="text-box flex-column align-items-center">
            <h2 className="h1 font-weight-bold">HU Scholarship</h2>
            <p className="text-center mb-font">
              Hajvery University is committed to providing excellence in
              education through a variety of merit and need based scholarships
              to bright and needy students. We believe in nurturing the talent
              within our students and recognizing outstanding academic
              performance through merit scholarship awards and accolades. We
              also offer need based scholarships to deserving students.
            </p>
          </div>
          <div className="row d-flex flex-column align-items-center">
            {rowArray.map((item) => (
              <div className="col-md-9">
                <div className="row d-flex jutify-content-center my-4">
                  <div className="col-md-4 img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="col-md-6">
                    <h2 className="h1 text-start font-weight-bold my-3">
                      {item.heading}
                    </h2>
                    <p className="text-start">
                      Hajvery University (HU) is an autonomous
                      Government-Chartered university. Approved by the Higher
                      Education Commission of Pakistan (HEC), Punjab Higher
                      Education Commission (PHEC) and accredited by Pharmacy
                      Council of Pakistan, Pakistan Engineering Council, Council
                      of Higher Education Turkey and the European Commission.
                    </p>
                    <p className="readMore" onClick={() => readMore()}>
                      Read More
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row bg-maroorn d-flex align-items-center justify-content-center"></div>
          <div className="text-box flex-column align-items-center">
            <h2 className="h1 font-weight-bold">What Sets us Apart</h2>
            <p className="text-center mb-font">
              The freedom to study what you love is what sets us apart. You can
              pursue a diverse range of interests at Hajvery University (HU)
              from Pharmacy to Engineering to Film, Tv, and Media Studies. At HU
              we offer 60+ degree programs, to suit your academic interests
            </p>
          </div>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Scholarhip;
