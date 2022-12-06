import React from "react";
import Navbars from "../../Components/navbar";
import Accordion from "react-bootstrap/Accordion";
const Quality = () => {
  return (
    <>
      <div>
        <Navbars />
      </div>
      <div className="bgImg">
        <img
          src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Quality-Enhancement-Cell_New.jpg"
          alt=""
        />
      </div>

      <div className="container-fluid">
        <div className="row d-flex flex-column align-items-center box-shadow my-5 py-5">
          <div className="col-md-8">
            <p className="h3 font-weight-bold">Introduction</p>
            <p className="line-height blog-text">
              To ensure high standards of education at all levels of study, NWSM
              has established the “Quality Enhancement Cell (QEC)”, as per the
              requirement of PMC and HEC to supervise and facilitate quality
              assurance activities of academic and administrative departments.
            </p>
            <p className="line-height blog-text my-5">
              QEC has dedicated and motivated members to provide regular
              evaluation according to the international standards for medical
              education, to improve the overall curriculum design, structure and
              create awareness, take pragmatic steps, and carry out different
              tasks in teaching and education that lead to Quality Enhancement
              in every department.
            </p>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="1">
                <Accordion.Header className="maroon">Aim</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li className="my-2">
                      Accelerating our progress as an international leader in
                      Pharmacy, Engineering, Languages, Health Science,
                      Business, and Fashion, and Textile.
                    </li>
                    <li className="my-2">
                      Accelerating our progress as an international leader in
                      Pharmacy, Engineering, Languages, Health Science,
                      Business, and Fashion, and Textile.
                    </li>
                    <li className="my-2">
                      Accelerating our progress as an international leader in
                      Pharmacy, Engineering, Languages, Health Science,
                      Business, and Fashion, and Textile.
                    </li>
                    <li className="my-2">
                      Accelerating our progress as an international leader in
                      Pharmacy, Engineering, Languages, Health Science,
                      Business, and Fashion, and Textile.
                    </li>
                    <li className="my-2">
                      Accelerating our progress as an international leader in
                      Pharmacy, Engineering, Languages, Health Science,
                      Business, and Fashion, and Textile.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className="row d-flex flex-column align-items-center box-shadow my-5 py-5">
          <div className="col-md-8">
            <p className="h3 font-weight-bold">Mission Statement</p>
            <p className="line-height blog-text">
              Hajvery University resolves to guarantee its stakeholders that the
              quality of the university education is maintained and enhanced as
              per international standards, and procedures and protocols are
              regularly checked for transparency and objectivity in order to
              achieve quality enhancement.
            </p>
            <p className="line-height blog-text my-5">
              We Hajvery University exist to enable our students to become
              full-time bodies. We enhance the local, national and international
              impact of the University, including through bachelor’s and
              Master’s programmers in flexible formats, attracting high-caliber
              learners. We offer more than 100 courses and programmers each year
              to students all over. We work within the University and beyond it,
              in the development of new programmers to meet the educational
              needs of changing times. The Department has an active
              interdisciplinary research community, with a strong focus on the
              humanities and inner abilities –including subjects at the
              forefront of today’s challenges and opportunities. With pressure
              on universities to be more relevant and accessible to society,
              industry, and the professions, the Department for Continuing
              Education plays a vital role in the Hajvery University widening
              participation initiatives.
            </p>
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item eventKey="1">
                <Accordion.Header className="maroon">Objectives</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li className="my-2">
                      Accelerating our progress as an international leader in
                      Pharmacy, Engineering, Languages, Health Science,
                      Business, and Fashion, and Textile.
                    </li>
                    <li className="my-2">
                      Accelerating our progress as an international leader in
                      Pharmacy, Engineering, Languages, Health Science,
                      Business, and Fashion, and Textile.
                    </li>
                    <li className="my-2">
                      Accelerating our progress as an international leader in
                      Pharmacy, Engineering, Languages, Health Science,
                      Business, and Fashion, and Textile.
                    </li>
                    <li className="my-2">
                      Accelerating our progress as an international leader in
                      Pharmacy, Engineering, Languages, Health Science,
                      Business, and Fashion, and Textile.
                    </li>
                    <li className="my-2">
                      Accelerating our progress as an international leader in
                      Pharmacy, Engineering, Languages, Health Science,
                      Business, and Fashion, and Textile.
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};
export default Quality;
