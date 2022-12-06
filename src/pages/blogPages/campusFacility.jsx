import React from "react";
import Footer from "../../Components/Footer";
import Navbars from "../../Components/navbar";
const Facility = () => {
  return (
    <>
      <div className="bg-white">
        <div>
          <Navbars />
        </div>
        <div className="bgImg">
          <img
            src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Campus-Facilities_2022_New.jpg"
            alt=""
          />
        </div>
        <div className="d-flex justify-content-center">
          <div className="maroon-border-line">
            <h2 className="h1 font-weight-bold maroon text-center my-3">
              The HU Edge
            </h2>
            <p className="blog-text my-3 text-center">
              Our Study Environment & Facilities
            </p>
          </div>
        </div>
        <div className="my-5">
          <video
            loop="loop"
            autoplay="autoplay"
            muted="muted"
            height="400"
            controls
          >
            <source
              src="https://rr2---sn-npoe7nsk.googlevideo.com/videoplayback?expire=1668708385&ei=wSN2Y6qEA725x_APsZ2E0Ag&ip=62.171.141.202&id=o-AGDoaQUuP0zy9N5EIEudiXpMnLNlHEqEN5jjbzJhgxcd&itag=22&source=youtube&requiressl=yes&vprv=1&mime=video%2Fmp4&ratebypass=yes&dur=63.529&lmt=1594716426787976&fexp=24001373,24007246&c=ANDROID&txp=6216222&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgL-nndGAEWSH9MKIehdsYdzEdYpq5-25HZsL9K19OluMCIDfMsmeVE7OxUWKluarRRzsosJoNzj6hCAg7H2TDkMYJ&rm=sn-4g5ezz7e&req_id=192fdfb4892ca3ee&ipbypass=yes&cm2rm=sn-2uja-aixd7s,sn-4wgd7e&redirect_counter=3&cms_redirect=yes&cmsv=e&mh=VE&mip=119.153.175.167&mm=34&mn=sn-npoe7nsk&ms=ltu&mt=1668685747&mv=m&mvi=2&pl=20&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAP8z3kGo3A6ojA8j5A1NLWw3bXUSbGAQMpvvQGqgiq0vAiEA32pBbC2vXtWY5PTjUU-ng35oRHTTU_0bATPFn5kVjgU%3D"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 mx-3">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2021/12/EURO-CAMPUS-1-960x638.jpg"
                alt=""
              />
            </div>
            <div className="col-md-5 mx-3">
              <h2 className="text-start maroon font-weight-bold h2 border-line-below-text">
                5 Campuses 1 Great <br />
                University
              </h2>

              <p className="my-2 line-height word-spacing">
                HU has five purpose-built university campuses at prime urban
                locations in Lahore& Sheikhupurain Pakistan. HU has 8 Faculties,
                with over 5000 male and female students enrolled, and over
                45,000 alumni readily applying themselves in more than120
                countries. HU is expanding its horizons with a huge
                purpose-built campus in Multan and another in near future in the
                Dubai Academic City. We endeavor to change and adapt our
                teaching benchmarks with those at par with the latest and best
                around the globe. Our campuses are centrally air-conditioned.
                The lecture halls are equipped with multimedia projectors among
                other modern teaching aids. HU has well-equipped pharmacy labs,
                computer labs, fashion studios, theatres, auditoriums, and
                textile labs. HU Campusesprovides the ultimate environment for
                students and young professionals alike with the cornucopia of
                facilities accessible to them.
              </p>
            </div>

            {/* <div className="col-md-5">
              <h2 className="text-start maroon font-weight-bold h2 border-line-below-text">
                Top-Notch Faculty
              </h2>

              <p className="my-2 line-height word-spacing">
                The teaching faculty at HU includes 200 full time members as
                Head of Departments, Deans, Professors and Associate Professors
                most of whom hold PhD or are qualified from prestigious
                universities from all over the world. We also have 300+ visiting
                faculty members who are actively involved in their respective
                fields, they are aware of the advancements in their areas, which
                they continually reinforce in their curriculum.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2021/12/Top-Notch-Faculty-960x638.jpg"
                alt=""
              />
            </div>
            <div className="col-md-5">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2021/12/Latest-Teaching-Aids-960x638.jpg"
                alt=""
              />
            </div>
            <div className="col-md-5">
              <h2 className="text-start maroon font-weight-bold h2 border-line-below-text">
                Latest Teaching Aids
              </h2>

              <p className="my-2 line-height word-spacing">
                At HU, we believe teaching & class environments should be
                pleasant and even fun! Long gone are the days of monotonous
                voices in the class rooms followed by copying the blackboard for
                hours. Teachers use projectors to deliver their lectures. The
                teacher student interaction is streamlined for a great learning
                experience. The teachers use online programs to post
                assignments, quizzes, related videos and articles and a whole
                bunch of other useful material. Why should teaching be confined
                to class rooms? Students can form online discussion groups, and
                interact with the professor at any time.HU has the best of
                pharmacy labs equipment; everything from telescopes to
                centrifuges . The Engineering Labs are state of the art and
                continually improving! Our students in fashion and textile
                department love the use the of mannequins and the latest in
                digital technology to translate their creative abilities on the
                computer..
              </p>
            </div>
            <div className="col-md-5">
              <h2 className="text-start maroon font-weight-bold h2 border-line-below-text">
                Library
              </h2>

              <p className="my-2 line-height word-spacing">
                Rather than one centralized library, both campuses have their
                respective libraries. Both of which carry over tens of thousands
                of medical journals, textbooks on any subject ranging from
                computers to economics and newspapers. Furthermore libraries
                have subscriptions to several magazines such as time, fortune,
                Newsweek etc. Libraries at HU carry computers for students who
                want to research in a quiet environment. Through the membership
                of DIGITAL LIBRARY & VIRTUAL LIBRARY: Any book, journal,
                statistics, research material along with the whole self
                sustained world of literature in almost any language is only
                clicks away from your computer screen because we at HU take the
                needs of best and the brightest seriously.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2021/12/Library-2-960x638.jpg"
                alt=""
              />
            </div>
            <div className="col-md-5">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2021/12/Computing-Facilities-960x638.jpg"
                alt=""
              />
            </div>
            <div className="col-md-5">
              <h2 className="text-start maroon font-weight-bold h2 border-line-below-text">
                Computing Facilities
              </h2>

              <p className="my-2 line-height word-spacing">
                Rather than one centralized library, both campuses have their
                respective libraries. Both of which carry over tens of thousands
                of medical journals, textbooks on any subject ranging from
                computers to economics and newspapers. Furthermore libraries
                have subscriptions to several magazines such as time, fortune,
                Newsweek etc. Libraries at HU carry computers for students who
                want to research in a quiet environment. Through the membership
                of DIGITAL LIBRARY & VIRTUAL LIBRARY: Any book, journal,
                statistics, research material along with the whole self
                sustained world of literature in almost any language is only
                clicks away from your computer screen because we at HU take the
                needs of best and the brightest seriously.
              </p>
            </div>
            <div className="col-md-5">
              <h2 className="text-start maroon font-weight-bold h2 border-line-below-text">
                Links with the Industry
              </h2>

              <p className="my-2 line-height word-spacing">
                Its all very good, being able to ace your exams, but a true test
                of a professional, in this case soon to be professionals is the
                field test. It is where one learns to improvise and go beyond
                the knowledge of ink. We have over 20,000 alumni applying
                themselves in countless professions, and we made sure we
                prepared them for the big bad world as much as we could. This is
                where our links with multi national Pharmaceutical firms, Banks,
                IT firms, Engineering firms and links with media come into
                action. Every year our students go for internships in several
                firms in order to complete there degree and very often those
                companies give our students an offer before they graduate. And
                we just love that, but even if you do we do let you fall down.
                Our career development office never closes its doors for you
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2021/12/Links-with-the-Industry-960x638.jpg"
                alt=""
              />
            </div>
            <div className="col-md-5">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2021/12/Internships-800x638.jpg"
                alt=""
              />
            </div>
            <div className="col-md-5">
              <h2 className="text-start maroon font-weight-bold h2 border-line-below-text">
                Internships
              </h2>

              <p className="my-2 line-height word-spacing">
                Internships are an integral part of learning. It gives the feel
                of a real-world when you still have your options open. HU has
                linkages with firms across the nation and overseas. These firms
                are from every platform one can imagine engineering, fashion,
                media, medicine, business and it just goes on. Internships are
                also mandatory to complete certain degrees, university years is
                the high time to polish your interpersonal and interpersonal
                skills. We take into account that everyone is different, you
                might be shy or difficult to work within a team, and that€™s
                where we come in. Our ethos is to inspire, educate and nurture
                the human soul one person at a time.
              </p>
            </div>

            <div className="col-md-5">
              <h2 className="text-start maroon font-weight-bold h2 border-line-below-text">
                5 Campuses 1 Great <br />
                University
              </h2>

              <p className="my-2 line-height word-spacing">
                HU has five purpose-built university campuses at prime urban
                locations in Lahore& Sheikhupurain Pakistan. HU has 8 Faculties,
                with over 5000 male and female students enrolled, and over
                45,000 alumni readily applying themselves in more than120
                countries. HU is expanding its horizons with a huge
                purpose-built campus in Multan and another in near future in the
                Dubai Academic City. We endeavor to change and adapt our
                teaching benchmarks with those at par with the latest and best
                around the globe. Our campuses are centrally air-conditioned.
                The lecture halls are equipped with multimedia projectors among
                other modern teaching aids. HU has well-equipped pharmacy labs,
                computer labs, fashion studios, theatres, auditoriums, and
                textile labs. HU Campusesprovides the ultimate environment for
                students and young professionals alike with the cornucopia of
                facilities accessible to them.
              </p>
            </div>

            <div className="col-md-5">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2021/12/EURO-CAMPUS-1-960x638.jpg"
                alt=""
              />
            </div>
            <div className="col-md-5">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2021/12/Internships-800x638.jpg"
                alt=""
              />
            </div>
            <div className="col-md-5">
              <h2 className="text-start maroon font-weight-bold h2 border-line-below-text">
                Internships
              </h2>

              <p className="my-2 line-height word-spacing">
                Internships are an integral part of learning. It gives the feel
                of a real-world when you still have your options open. HU has
                linkages with firms across the nation and overseas. These firms
                are from every platform one can imagine engineering, fashion,
                media, medicine, business and it just goes on. Internships are
                also mandatory to complete certain degrees, university years is
                the high time to polish your interpersonal and interpersonal
                skills. We take into account that everyone is different, you
                might be shy or difficult to work within a team, and that€™s
                where we come in. Our ethos is to inspire, educate and nurture
                the human soul one person at a time.
              </p>
            </div>

            <div className="col-md-5">
              <h2 className="text-start maroon font-weight-bold h2 border-line-below-text">
                Career Development Office
              </h2>

              <p className="my-2 line-height word-spacing">
                We do just say that a degree from HU is a real investment in
                your future, we mean it and to prove it we have very dedicated
                people working long hours to manage links with the industry and
                to give you workshops on interview skills and CV writing. More
                over we have deployed an online portal which acts as a platform
                where the employers and can find the CVs uploaded by our current
                students and the alumni. And our students can apply for the jobs
                posted by these firms.
              </p>
            </div>

            <div className="col-md-5">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2021/12/Career-Development-Office-960x638.jpg"
                alt=""
              />
            </div>
            <div className="col-md-5">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2021/12/Transport-Facility-960x638.jpg"
                alt=""
              />
            </div>
            <div className="col-md-5">
              <h2 className="text-start maroon font-weight-bold h2 border-line-below-text">
                Transport Facility
              </h2>

              <p className="my-2 line-height word-spacing">
                HU tries to facilitate its students in every aspect, it is for
                this very reason that we operate a transport network so students
                can reach the university from all parts of the city. The buses
                cover all the major city routes for their convenience. In
                addition the public transport junction known as 7 up stop is a
                few minuets from both campuses making the university easily
                accessible.
              </p>
            </div>

            <div className="col-md-5">
              <h2 className="text-start maroon font-weight-bold h2 border-line-below-text">
                Hostel
              </h2>

              <p className="my-2 line-height word-spacing">
                HU operates several hostels in close proximity to our campuses;
                if you are an international student, an overseas Pakistani or
                from another city you are guaranteed accommodation in the
                hostel. For convenience, girls hostels are exclusively built
                near the university campuses. These hostels provide a homely
                atmosphere to its residents, they are safe and well maintained.
                We are what we eat, therefore we must eat healthy and for that
                purpose our hostels have their catering services to provide you
                with fresh food.
              </p>
            </div>

            <div className="col-md-5">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Hostels-800x638.jpg"
                alt=""
              />
            </div>
            <div className="col-md-5">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Student-Life-at-HU-960x638.jpg"
                alt=""
              />
            </div>
            <div className="col-md-5">
              <h2 className="text-start maroon font-weight-bold h2 border-line-below-text">
                Internships
              </h2>

              <p className="my-2 line-height word-spacing">
                Internships are an integral part of learning. It gives the feel
                of a real-world when you still have your options open. HU has
                linkages with firms across the nation and overseas. These firms
                are from every platform one can imagine engineering, fashion,
                media, medicine, business and it just goes on. Internships are
                also mandatory to complete certain degrees, university years is
                the high time to polish your interpersonal and interpersonal
                skills. We take into account that everyone is different, you
                might be shy or difficult to work within a team, and that€™s
                where we come in. Our ethos is to inspire, educate and nurture
                the human soul one person at a time.
              </p>
            </div>

            <div className="col-md-5">
              <h2 className="text-start maroon font-weight-bold h2 border-line-below-text">
                5 Campuses 1 Great <br />
                University
              </h2>

              <p className="my-2 line-height word-spacing">
                HU has five purpose-built university campuses at prime urban
                locations in Lahore& Sheikhupurain Pakistan. HU has 8 Faculties,
                with over 5000 male and female students enrolled, and over
                45,000 alumni readily applying themselves in more than120
                countries. HU is expanding its horizons with a huge
                purpose-built campus in Multan and another in near future in the
                Dubai Academic City. We endeavor to change and adapt our
                teaching benchmarks with those at par with the latest and best
                around the globe. Our campuses are centrally air-conditioned.
                The lecture halls are equipped with multimedia projectors among
                other modern teaching aids. HU has well-equipped pharmacy labs,
                computer labs, fashion studios, theatres, auditoriums, and
                textile labs. HU Campusesprovides the ultimate environment for
                students and young professionals alike with the cornucopia of
                facilities accessible to them.
              </p>
            </div>

            <div className="col-md-5">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2021/12/EURO-CAMPUS-1-960x638.jpg"
                alt=""
              />
            </div>
            <div className="col-md-5">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2021/12/Internships-800x638.jpg"
                alt=""
              />
            </div>
            <div className="col-md-5">
              <h2 className="text-start maroon font-weight-bold h2 border-line-below-text">
                Internships
              </h2>

              <p className="my-2 line-height word-spacing">
                Internships are an integral part of learning. It gives the feel
                of a real-world when you still have your options open. HU has
                linkages with firms across the nation and overseas. These firms
                are from every platform one can imagine engineering, fashion,
                media, medicine, business and it just goes on. Internships are
                also mandatory to complete certain degrees, university years is
                the high time to polish your interpersonal and interpersonal
                skills. We take into account that everyone is different, you
                might be shy or difficult to work within a team, and that€™s
                where we come in. Our ethos is to inspire, educate and nurture
                the human soul one person at a time.
              </p>
            </div>

            <div className="col-md-5">
              <h2 className="text-start maroon font-weight-bold h2 border-line-below-text">
                5 Campuses 1 Great <br />
                University
              </h2>

              <p className="my-2 line-height word-spacing">
                HU has five purpose-built university campuses at prime urban
                locations in Lahore& Sheikhupurain Pakistan. HU has 8 Faculties,
                with over 5000 male and female students enrolled, and over
                45,000 alumni readily applying themselves in more than120
                countries. HU is expanding its horizons with a huge
                purpose-built campus in Multan and another in near future in the
                Dubai Academic City. We endeavor to change and adapt our
                teaching benchmarks with those at par with the latest and best
                around the globe. Our campuses are centrally air-conditioned.
                The lecture halls are equipped with multimedia projectors among
                other modern teaching aids. HU has well-equipped pharmacy labs,
                computer labs, fashion studios, theatres, auditoriums, and
                textile labs. HU Campusesprovides the ultimate environment for
                students and young professionals alike with the cornucopia of
                facilities accessible to them.
              </p>
            </div>

            <div className="col-md-5">
              <img
                className="img-fluid"
                src="https://www.hup.edu.pk/wp-content/uploads/2021/12/EURO-CAMPUS-1-960x638.jpg"
                alt=""
              />
            </div> */}
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Facility;
