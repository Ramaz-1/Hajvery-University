import React from "react";
import Footer from "../../Components/Footer";
import Navbars from "../../Components/navbar";
import "./blogpages.scss";
const Director = () => {
  return (
    <>
    <div className="wrapper">
      <div className="bg-white">
        <div>
          <Navbars />
        </div>
        <div className="bgImg">
          <img
            src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Message-from-Director-Admin_New.jpg"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center my-5">
            <div className="col-md-5">
              <h2 className="text-start heading-text blue">
                Major General (R) Muhammad Latif
              </h2>
              <p className="blog-text  my-3 word-spacer-text">
                I am pleased to welcome you to Hajvery University (HU). This
                website will help you in making one of the most crucial
                decisions of your life. That is, how and where to begin the next
                stage of your education? In this modern age, you have no better
                option but to join the right institution of higher learning for
                your further education. The right choice is not just about
                finding the courses one likes; it is also about choosing a
                specific program and the institution. Of course, such a decision
                can fundamentally transform your future. In other words, it is
                your future that begins to unfold the moment you make this
                decision. Hajvery University (HU), is pursuing the noble mission
                of imparting quality education in a value-adding environment
                that grooms students to become responsible citizens of society.
                In this context, we will introduce you to the details of the
                courses offered in each academic program so as to enable you to
                make a considered decision about your career and more
                importantly the role that you intend to play in society. We at
                HU are gradually working to build sound traditions of research
                and teaching in all our academic programs. We offer diversified
                and well-thought-out programs of study supported with elaborate
                state-of-the-art facilities. I am pleased to state that HU
                enjoys a fine reputation within and outside Pakistan at the
                international level, all schools and universities of repute
                around the world accept its degrees. Most importantly, we
                cherish an environment of mutual cooperation and team spirit we
                all, faculty, staff, and students, work in unison to achieve the
                common purpose of grooming students to become socially
                responsible citizens of the globalizing world.
              </p>

              <p className="mt-3 black blog-text mb-5">
                <strong>Maj Gen® Muhammad Latif</strong> <br />
                Director Administration,
                <span className="black">
                  <br />
                  Hajvery University (HU),Pakistan
                  <br />
                  <strong className="maroon">admin@hup.edu.pk</strong>
                </span>
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2021/11/92e4b312-870x1024.jpg"
                alt=""
              />
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
};

export default Director;
