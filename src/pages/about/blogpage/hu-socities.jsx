import React from "react";
import "./hu-socities.scss";
import Navbars from "../../../Components/navbar";
import Footer from "../../../Components/Footer";
const HUSOCITIES = () => {
  const alumini = [
    {
      title: "usman Jan",
    },
    {
      title: "usman Jan",
    },
    {
      title: "usman Jan",
    },
    {
      title: "usman Jan",
    },
    {
      title: "usman Jan",
    },
    {
      title: "usman Jan",
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
          src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Why-Hajvery_New.jpg"
          alt=""
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2 className="h1 blue text-start">Exceptional Education</h2>
            <p className="text-paragraph">
              Excellent student satisfaction, world-leading quality of research,
              and high teaching standards are a strong testament to HU’s
              dedication to its students. Our lectures are delivered by some of
              the best and most talented faculty. Classes are designed to ensure
              that all students received quality Education. We offer a
              transformative experience that occurs beyond the confines of the
              classroom. We take pride in our differences, engage in respectful
              dialogue, and work with each other as partners and collaborators.
            </p>
          </div>
          <div className="col-md-4 dotted-border d-flex">
            <div className="d-flex flex-column justify-content-around">
              <p className="maroon">Programmes</p>
              <p className="maroon">Admission</p>
              <p className="maroon">Apply Now</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 position-relative">
        <img
          className="img-fluid"
          src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Why-HU_01.jpg?id=15087"
          alt=""
        />

        <div className="position-to-border-box">
          <div>
            <h2 className="h1 blue">HU by the Numbers</h2>

            <p className="text-paragraph text-center">
              We are home to some of the most extraordinarily talented
              individuals from around the world. Our University brings together
              people from different backgrounds and houses a diverse and vibrant
              community. Explore why students from across the globe continue to
              choose Hajvery.
            </p>
          </div>
        </div>
      </div>

      <div className="container margin-top-border">
        {/* <div className="d-flex justify-content-between flex-wrap">
          <div className="code-block-counter">
          
          </div>
          <div className="code-block-counter">
            <h2 className="h1 blue">5500+</h2>
            <p className="mt-4 text-center h5">Students</p>
          </div>
        </div> */}
        <div className="row mb-5">
          <div className="col-md-3 code-block-counter">
            <h2 className="h1 blue">5500+</h2>
            <p className="mt-4 text-center h5">Students</p>
          </div>

          <div className="col-md-6"></div>

          <div className="col-md-3 code-block-counter">
            <h2 className="h1 blue">5500+</h2>
            <p className="mt-4 text-center h5">Students</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 code-block-counter">
            <h2 className="h2 blue">4%</h2>
            <p className="mt-4 text-center  h5">Campuses</p>
          </div>

          <div className="col-md-6 border-left-rigth">
            <h2 className="h2 blue">96%</h2>
            <p className="mt-4 text-center  h5">
              Employability Index After Graduation
            </p>
          </div>

          <div className="col-md-3 code-block-counter">
            <h2 className="h2 blue">15%</h2>
            <p className="mt-4 text-center  h5">
              Student Clubs
              <br /> And Societies
            </p>
          </div>
        </div>
        <div>
          <h2 className="h2 blue mt-5">A Day at HU</h2>
          <p className="text-center text-paragraph">
            At HU we tend to develop a very friendly and cordial relationship
            with their students. Where they can feel free to interact anytime.
            HU provides a great environment for students to accelerate their
            practical and rational learning. We have provided various academic
            and non-academic platforms where students can explore themselves in
            more effective ways. We inspire students to take part in different
            academic societies, encourage them to volunteer and socialize in
            university events. Create and make a great experience from the
            opportunities that HU is providing in the educational domains. Make
            the best of the unique experience that HU has to offer!
          </p>
        </div>

        <div className="row my-5">
          <div className="col-md-4">
            <div>
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Hostel_01.jpg"
                alt=""
              />
            </div>

            <h2 className="h3 mt-4 text-start">Hostel Accommodation</h2>
            <p className="mt-2 text-paragraph">
              These hostels provide a homely atmosphere to their residents, they
              are safe and well maintained. We are what we eat, therefore we
              must eat healthily and for that purpose, our hostels have their
              catering services to provide you with fresh food.
            </p>
          </div>
          <div className="col-md-4">
            <div>
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Student-Clubs-and-Societies_01-1.jpg"
                alt=""
              />
            </div>

            <h2 className="h3 mt-4 text-start">Student Clubs and Societies</h2>
            <p className="mt-2 text-paragraph">
              Societies play a pivotal role in polishing your interpersonal or
              people skills, adding to your knowledge whether in dramatics,
              debating, or chess. At HU, we have several societies but we never
              say no to brilliant ideas
            </p>
          </div>
          <div className="col-md-4">
            <div>
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Sports-Facilities_02.jpg"
                alt=""
              />
            </div>

            <h2 className="h3 mt-4 text-start">Sports Facilities</h2>
            <p className="mt-2 text-paragraph">
              we want our students to stay healthy and stay sharp. The
              university campuses offer spacious grounds to play a cornucopia of
              games, whether its a game of badminton or table tennis or the game
              which sets our pulse rocketing skywards, yes the game of cricket!
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-3">
            <div>
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Library_02.jpg"
                alt=""
              />
            </div>

            <h2 className="h3 mt-4 text-start">Library</h2>
            <p className="mt-2 text-paragraph">
              Rather than one centralized library, both campuses have their
              respective libraries. Both of which carry over tens of thousands
              of medical journals, textbooks on any subject ranging from
              computers to economics and newspapers because we at HU take the
              needs of the best and the brightest seriously.
            </p>
          </div>{" "}
          <div className="col-md-3">
            <div>
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Cafeteria_01.jpg"
                alt=""
              />
            </div>

            <h2 className="h3 mt-4 text-start">Cafeteria</h2>
            <p className="mt-2 text-paragraph">
              In how many ways can you say delicious food? Our cafeteria can say
              it in more than 100 ways in just one language, that’s the number
              of items on their menu. But there’s more, the food they serve is
              hygienic, it’s fresh and the cafeteria sitting provides a great
              experience on its own!
            </p>
          </div>
        </div>

        <div className="my-5">
          <h2 className="h2 blue mt-5">Your Support System at HU</h2>
          <p className="text-center text-paragraph">
            During your time here, the campus will be your home away from home.
            That is why we take immense pride in maintaining an environment
            where our members can learn, grow and thrive. We offer a variety of
            services to ensure that your experience here is productive and
            rewarding.
          </p>
        </div>
        <div className="row my-5">
          <div className="col-md-3">
            <div>
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2022/01/EXCELLENT-FACILITIES_02.jpg"
                alt=""
              />
            </div>

            <h2 className="h3 mt-4 text-start">EXCELLENT FACILITIES</h2>
            <p className="mt-2 text-paragraph">
              At HU, we believe teaching & class environments should be pleasant
              and even fun! Long gone are the days of monotonous voices in the
              classrooms followed by copying the blackboard for hours. Teachers
              use projectors to deliver their lectures. The teacher-student
              interaction is streamlined for a great learning experience.
            </p>
          </div>
          <div className="col-md-3">
            <div>
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Personalized-Attention_01.jpg"
                alt=""
              />
            </div>

            <h2 className="h3 mt-4 text-start">
              INTERNATIONAL TRAVEL & STUDY ABROAD
            </h2>
            <p className="mt-2 text-paragraph">
              At HU we have signed bilateral agreements with 80+ partner
              universities. The goals of the cooperation with partner
              universities are to support International Cooperation and extend
              the international contact network, mobility of staff members and
              students, carry out joint projects and research initiatives.
            </p>
          </div>
          <div className="col-md-3">
            <div>
              <img
                className="img-fluid"
                src="	https://www.hup.edu.pk/wp-content/uploads/2022/01/INTERNATIONAL-TRAVEL-STUDY-ABROAD_02.jpg"
                alt=""
              />
            </div>

            <h2 className="h3 mt-4 text-start">PERSONALIZED ATTENTION</h2>
            <p className="mt-2 text-paragraph">
              At HU you will get personalized attention, when you join you can
              discuss your future road maps with the career counselors, the
              teaching faculty at HU is will never say No to a question and will
              gladly assist you after the class times. The administration is
              will ensure your university environment is up to the mark or a
              daily basis
            </p>
          </div>
          <div className="col-md-3">
            <div>
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2022/01/SCHOLARSHIPS_01.jpg"
                alt=""
              />
            </div>

            <h2 className="h3 mt-4 text-start">SCHOLARSHIPS</h2>
            <p className="mt-2 text-paragraph">
              Hajvery University is committed to providing excellence in
              education through a variety of Merit and Need-Based Scholarships
              to bright and needy students. We believe in nurturing the talent
              within our students and recognizing outstanding academic
              performance through Merit Scholarship awards and accolades.
            </p>
          </div>
        </div>

        <div>
          <h2 className="h2 blue mt-5">The HU Alumni Networks</h2>
          <p className="text-center text-paragraph">
            As a HU student, you have access to one of the most supportive and
            powerful professional networks: the HU Alumni Network. This 55,000+
            member body is actively connected and continues to contribute to
            private and public sectors in diverse industries around the globe.
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-md-2">
            <div>
              <div className="round-border-img">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Usman-Jan-150x150.jpg"
                  alt=""
                />
              </div>
              <p className="h5 mt-3 text-center">Usman Jan</p>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <div className="round-border-img">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Usman-Jan-150x150.jpg"
                  alt=""
                />
              </div>
              <p className="h5 mt-3 text-center">Usman Jan</p>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <div className="round-border-img">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Usman-Jan-150x150.jpg"
                  alt=""
                />
              </div>
              <p className="h5 mt-3 text-center">Usman Jan</p>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <div className="round-border-img">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Usman-Jan-150x150.jpg"
                  alt=""
                />
              </div>
              <p className="h5 mt-3 text-center">Usman Jan</p>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <div className="round-border-img">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Usman-Jan-150x150.jpg"
                  alt=""
                />
              </div>
              <p className="h5 mt-3 text-center">Usman Jan</p>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <div className="round-border-img">
                <img
                  className="img-fluid"
                  src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Usman-Jan-150x150.jpg"
                  alt=""
                />
              </div>
              <p className="h5 mt-3 text-center">Usman Jan</p>
            </div>
          </div>
        </div>
        <div className="my-5">
          <img
            className="img-fluid"
            src="https://www.hup.edu.pk/wp-content/uploads/2021/07/hu-map.jpg?id=9024"
            alt=""
          />
        </div>
      </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default HUSOCITIES;
