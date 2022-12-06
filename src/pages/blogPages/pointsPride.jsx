import React from "react";
import Navbars from "../../Components/navbar";
import Footer from "../../Components/Footer"
import "./blogpages.scss";
const PridePage = () => {
  const prideOfPoints = [
    {
      title: "",
    },
  ];

  return (
    <>
    <div className="bg-white">
      <div>
        <Navbars />
      </div>
      <div className="bgImg">
        <img
          src="https://www.hup.edu.pk/wp-content/uploads/2022/02/Facts-Figures_New_03-1.jpg"
          alt=""
        />
      </div>
      <div className="bg-black py-5">
        <h2 className="h1 white text-start mx-2">Faculty</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-0 position-relative image-dark-shape">
            <img
              className="img-fluid"
              src="https://www.hup.edu.pk/wp-content/uploads/2022/02/445-faculty-including-full-time-part-time-visiting_01-1024x1024.jpg"
              alt=""
            />

            <div className="position-pride-points">
              <h2 className="h1 orange-color font-weight-bold">445</h2>
              <p className="blog-text white">
                faculty, including full-time,part-time and visiting
              </p>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="row">
              <div className="col-md-6 p-0 image-dark-shape">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/02/241-Student-to-Faculty-Ratio.jpg"
                  alt=""
                />
                <div className="position-pride-points">
                  <h2 className="h1 orange-color font-weight-bold">445</h2>
                  <p className="blog-text white">
                    faculty, including full-time,part-time and visiting
                  </p>
                </div>
              </div>
              <div className="col-md-6 p-0 image-dark-shape">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/02/85-PhD-Faculty-Members_02.jpg"
                  alt=""
                />
                <div className="position-pride-points">
                  <h2 className="h1 orange-color font-weight-bold">445</h2>
                  <p className="blog-text white">
                    faculty, including full-time,part-time and visiting
                  </p>
                </div>
              </div>
              <div className="col-md-12 p-0 image-dark-shape">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/02/25-International-Faculty-1-1024x512.jpg"
                  alt=""
                />
                <div className="position-pride-points">
                  <h2 className="h1 orange-color font-weight-bold">445</h2>
                  <p className="blog-text white">
                    faculty, including full-time,part-time and visiting
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 p-0 image-dark-shape">
                    <img
                      className="img-fluid"
                      src="https://www.hup.edu.pk/wp-content/uploads/2022/02/85-PhD-Faculty-Members_01.jpg"
                      alt=""
                    />
                    <div className="position-pride-points">
                      <h2 className="h1 orange-color font-weight-bold">445</h2>
                      <p className="blog-text white">
                        faculty, including full-time,part-time and visiting
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 p-0 image-dark-shape">
                    <img
                      className="img-fluid"
                      src="https://www.hup.edu.pk/wp-content/uploads/2022/02/76-tenured-Professorial-Faculty.jpg"
                      alt=""
                    />
                    <div className="position-pride-points">
                      <h2 className="h1 orange-color font-weight-bold">445</h2>
                      <p className="blog-text white">
                        faculty, including full-time,part-time and visiting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 bg-black"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-5">
        <h2 className="h1 white text-start mx-2">Student</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-0 position-relative image-dark-shape">
            <img
              className="img-fluid"
              src="https://www.hup.edu.pk/wp-content/uploads/2022/02/250-Incoming-Exchange-Students_01-1024x1024.jpg"
              alt=""
            />

            <div className="position-pride-points">
              <h2 className="h1 orange-color font-weight-bold">250</h2>
              <p className="blog-text white">Incoming Exchange Students</p>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="row">
              <div className="col-md-6 p-0 image-dark-shape">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/02/241-Student-to-Faculty-Ratio.jpg"
                  alt=""
                />
                <div className="position-pride-points">
                  <h2 className="h1 orange-color font-weight-bold">5000</h2>
                  <p className="blog-text white">Undergraduate Student</p>
                </div>
              </div>
              <div className="col-md-6 p-0 image-dark-shape">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/02/5500-Undergraduate-Student_01.jpg"
                  alt=""
                />
                <div className="position-pride-points">
                  <h2 className="h1 orange-color font-weight-bold">1200</h2>
                  <p className="blog-text white">Graduate Students</p>
                </div>
              </div>
              <div className="col-md-12 p-0 image-dark-shape">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/02/350-Outgoing-Exchange-Students_01-1024x512.jpg"
                  alt=""
                />
                <div className="position-pride-points">
                  <h2 className="h1 orange-color font-weight-bold">350</h2>
                  <p className="blog-text white">Outgoing Exchange Students</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 p-0 image-dark-shape">
                    <img
                      className="img-fluid"
                      src="https://www.hup.edu.pk/wp-content/uploads/2022/02/150-Student-Training-Programs_01.jpg"
                      alt=""
                    />
                    <div className="position-pride-points">
                      <h2 className="h1 orange-color font-weight-bold">445</h2>
                      <p className="blog-text white">
                        faculty, including full-time,part-time and visiting
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 p-0 image-dark-shape">
                    <img
                      className="img-fluid"
                      src="https://www.hup.edu.pk/wp-content/uploads/2022/02/97-Student-Satisfaction_01.jpg"
                      alt=""
                    />
                    <div className="position-pride-points">
                      <h2 className="h1 orange-color font-weight-bold">445</h2>
                      <p className="blog-text white">
                        faculty, including full-time,part-time and visiting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 bg-black">
                <div className="row">
                  <div className="col-md-6 p-0 image-dark-shape">
                    <img
                      className="img-fluid"
                      src="https://www.hup.edu.pk/wp-content/uploads/2022/02/85-Student-Societies-and-Clubs_01.jpg"
                      alt=""
                    />
                    <div className="position-pride-points">
                      <h2 className="h1 orange-color font-weight-bold">445</h2>
                      <p className="blog-text white">
                        faculty, including full-time,part-time and visiting
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 p-0 image-dark-shape">
                    <img
                      className="img-fluid"
                      src="https://www.hup.edu.pk/wp-content/uploads/2022/02/85-Scholarship-Programs_01.jpg"
                      alt=""
                    />
                    <div className="position-pride-points">
                      <h2 className="h1 orange-color font-weight-bold">445</h2>
                      <p className="blog-text white">
                        faculty, including full-time,part-time and visiting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-0 position-relative image-dark-shape">
            <img
              className="img-fluid"
              src="https://www.hup.edu.pk/wp-content/uploads/2022/02/2000-Annual-Attendance-at-Reunions_01-1024x1024.jpg"
              alt=""
            />

            <div className="position-pride-points">
              <h2 className="h1 orange-color font-weight-bold">250</h2>
              <p className="blog-text white">Incoming Exchange Students</p>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="row">
              <div className="col-md-6 p-0 image-dark-shape">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/02/241-Student-to-Faculty-Ratio.jpg"
                  alt=""
                />
                <div className="position-pride-points">
                  <h2 className="h1 orange-color font-weight-bold">5000</h2>
                  <p className="blog-text white">Undergraduate Student</p>
                </div>
              </div>
              <div className="col-md-6 p-0 image-dark-shape">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/02/5500-Undergraduate-Student_01.jpg"
                  alt=""
                />
                <div className="position-pride-points">
                  <h2 className="h1 orange-color font-weight-bold">1200</h2>
                  <p className="blog-text white">Graduate Students</p>
                </div>
              </div>
              <div className="col-md-12 p-0 image-dark-shape">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/02/350-Outgoing-Exchange-Students_01-1024x512.jpg"
                  alt=""
                />
                <div className="position-pride-points">
                  <h2 className="h1 orange-color font-weight-bold">350</h2>
                  <p className="blog-text white">Outgoing Exchange Students</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 p-0 image-dark-shape">
                    <img
                      className="img-fluid"
                      src="https://www.hup.edu.pk/wp-content/uploads/2022/02/150-Student-Training-Programs_01.jpg"
                      alt=""
                    />
                    <div className="position-pride-points">
                      <h2 className="h1 orange-color font-weight-bold">445</h2>
                      <p className="blog-text white">
                        faculty, including full-time,part-time and visiting
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 p-0 image-dark-shape">
                    <img
                      className="img-fluid"
                      src="https://www.hup.edu.pk/wp-content/uploads/2022/02/97-Student-Satisfaction_01.jpg"
                      alt=""
                    />
                    <div className="position-pride-points">
                      <h2 className="h1 orange-color font-weight-bold">445</h2>
                      <p className="blog-text white">
                        faculty, including full-time,part-time and visiting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 bg-black">
                <div className="row">
                  <div className="col-md-6 p-0 image-dark-shape">
                    <img
                      className="img-fluid"
                      src="https://www.hup.edu.pk/wp-content/uploads/2022/02/85-Student-Societies-and-Clubs_01.jpg"
                      alt=""
                    />
                    <div className="position-pride-points">
                      <h2 className="h1 orange-color font-weight-bold">445</h2>
                      <p className="blog-text white">
                        faculty, including full-time,part-time and visiting
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 p-0 image-dark-shape">
                    <img
                      className="img-fluid"
                      src="https://www.hup.edu.pk/wp-content/uploads/2022/02/85-Scholarship-Programs_01.jpg"
                      alt=""
                    />
                    <div className="position-pride-points">
                      <h2 className="h1 orange-color font-weight-bold">445</h2>
                      <p className="blog-text white">
                        faculty, including full-time,part-time and visiting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-5">
        <h2 className="h1 white text-start mx-2">Staff</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-0 position-relative image-dark-shape">
            <img
              className="img-fluid"
              src="https://www.hup.edu.pk/wp-content/uploads/2022/02/75-Staff-Living-in-Lahore_01-1024x1024.jpg"
              alt=""
            />

            <div className="position-pride-points">
              <h2 className="h1 orange-color font-weight-bold">445</h2>
              <p className="blog-text white">
                faculty, including full-time,part-time and visiting
              </p>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="row">
              <div className="col-md-12 p-0 image-dark-shape">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/02/25-International-Faculty-1-1024x512.jpg"
                  alt=""
                />
                <div className="position-pride-points">
                  <h2 className="h1 orange-color font-weight-bold">445</h2>
                  <p className="blog-text white">
                    faculty, including full-time,part-time and visiting
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-12 bg-black">
              <div className="row">
                <div className="col-md-6 p-0 image-dark-shape">
                  <img
                    className="img-fluid"
                    src="https://www.hup.edu.pk/wp-content/uploads/2022/02/90-Staff-Retention_01.jpg"
                    alt=""
                  />
                  <div className="position-pride-points">
                    <h2 className="h1 orange-color font-weight-bold">445</h2>
                    <p className="blog-text white">
                      faculty, including full-time,part-time and visiting
                    </p>
                  </div>
                </div>
                <div className="col-md-6 p-0 bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-5">
        <h2 className="h1 white text-start mx-2">Academics</h2>
      </div>
</div>
<div className="container-fluid">
        <div className="row">
          <div className="col-md-6 p-0 position-relative image-dark-shape">
            <img
              className="img-fluid"
              src="https://www.hup.edu.pk/wp-content/uploads/2022/02/250-Incoming-Exchange-Students_01-1024x1024.jpg"
              alt=""
            />

            <div className="position-pride-points">
              <h2 className="h1 orange-color font-weight-bold">250</h2>
              <p className="blog-text white">Incoming Exchange Students</p>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="row">
              <div className="col-md-6 p-0 image-dark-shape">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/02/241-Student-to-Faculty-Ratio.jpg"
                  alt=""
                />
                <div className="position-pride-points">
                  <h2 className="h1 orange-color font-weight-bold">5000</h2>
                  <p className="blog-text white">Undergraduate Student</p>
                </div>
              </div>
              <div className="col-md-6 p-0 image-dark-shape">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/02/5500-Undergraduate-Student_01.jpg"
                  alt=""
                />
                <div className="position-pride-points">
                  <h2 className="h1 orange-color font-weight-bold">1200</h2>
                  <p className="blog-text white">Graduate Students</p>
                </div>
              </div>
              <div className="col-md-12 p-0 image-dark-shape">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/02/350-Outgoing-Exchange-Students_01-1024x512.jpg"
                  alt=""
                />
                <div className="position-pride-points">
                  <h2 className="h1 orange-color font-weight-bold">350</h2>
                  <p className="blog-text white">Outgoing Exchange Students</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 p-0 image-dark-shape">
                    <img
                      className="img-fluid"
                      src="https://www.hup.edu.pk/wp-content/uploads/2022/02/150-Student-Training-Programs_01.jpg"
                      alt=""
                    />
                    <div className="position-pride-points">
                      <h2 className="h1 orange-color font-weight-bold">445</h2>
                      <p className="blog-text white">
                        faculty, including full-time,part-time and visiting
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 p-0 bg-black image-dark-shape">
                    
                  </div>
                </div>
              </div>
              <div className="col-md-6 bg-black">
                <div className="row">
                  <div className="col-md-6 p-0 image-dark-shape">
                    
                  </div>
                  <div className="col-md-6 p-0 image-dark-shape">
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-5">
        <h2 className="h1 white text-start mx-2">Campuses</h2>
      </div>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-6 p-0 position-relative image-dark-shape">
            <img
              className="img-fluid"
              src="https://www.hup.edu.pk/wp-content/uploads/2022/02/250-Incoming-Exchange-Students_01-1024x1024.jpg"
              alt=""
            />

            <div className="position-pride-points">
              <h2 className="h1 orange-color font-weight-bold">250</h2>
              <p className="blog-text white">Incoming Exchange Students</p>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="row">
              <div className="col-md-6 p-0 image-dark-shape">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/02/241-Student-to-Faculty-Ratio.jpg"
                  alt=""
                />
                <div className="position-pride-points">
                  <h2 className="h1 orange-color font-weight-bold">5000</h2>
                  <p className="blog-text white">Undergraduate Student</p>
                </div>
              </div>
              <div className="col-md-6 p-0 image-dark-shape">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/02/5500-Undergraduate-Student_01.jpg"
                  alt=""
                />
                <div className="position-pride-points">
                  <h2 className="h1 orange-color font-weight-bold">1200</h2>
                  <p className="blog-text white">Graduate Students</p>
                </div>
              </div>
              <div className="col-md-12 p-0 image-dark-shape">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/02/350-Outgoing-Exchange-Students_01-1024x512.jpg"
                  alt=""
                />
                <div className="position-pride-points">
                  <h2 className="h1 orange-color font-weight-bold">350</h2>
                  <p className="blog-text white">Outgoing Exchange Students</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6 p-0 image-dark-shape">
                    <img
                      className="img-fluid"
                      src="https://www.hup.edu.pk/wp-content/uploads/2022/02/150-Student-Training-Programs_01.jpg"
                      alt=""
                    />
                    <div className="position-pride-points">
                      <h2 className="h1 orange-color font-weight-bold">445</h2>
                      <p className="blog-text white">
                        faculty, including full-time,part-time and visiting
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 p-0 image-dark-shape">
                    <img
                      className="img-fluid"
                      src="https://www.hup.edu.pk/wp-content/uploads/2022/02/97-Student-Satisfaction_01.jpg"
                      alt=""
                    />
                    <div className="position-pride-points">
                      <h2 className="h1 orange-color font-weight-bold">445</h2>
                      <p className="blog-text white">
                        faculty, including full-time,part-time and visiting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 bg-black">
                <div className="row">
                  <div className="col-md-6 p-0 image-dark-shape">
                    <img
                      className="img-fluid"
                      src="https://www.hup.edu.pk/wp-content/uploads/2022/02/85-Student-Societies-and-Clubs_01.jpg"
                      alt=""
                    />
                    <div className="position-pride-points">
                      <h2 className="h1 orange-color font-weight-bold">445</h2>
                      <p className="blog-text white">
                        faculty, including full-time,part-time and visiting
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 p-0 image-dark-shape">
                    <img
                      className="img-fluid"
                      src="https://www.hup.edu.pk/wp-content/uploads/2022/02/85-Scholarship-Programs_01.jpg"
                      alt=""
                    />
                    <div className="position-pride-points">
                      <h2 className="h1 orange-color font-weight-bold">445</h2>
                      <p className="blog-text white">
                        faculty, including full-time,part-time and visiting
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </>
  );
};

export default PridePage;
