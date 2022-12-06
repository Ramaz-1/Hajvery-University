import React from "react";
import Footer from "../../../Components/Footer";
import Navbars from "../../../Components/navbar";
import "./richcirculum.scss";
const RichCirculum = () => {
  return (
    <>
    <div className="wrapper">
      <div>
        <Navbars />
      </div>
      <div className="bgImg">
        <img
          src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Rich-Curriculum_New.jpg"
          alt=""
        />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="blue h1 text-start">Unique & Innovative</h2>
            <p className="line-height text-paragraph">
              Hajvery University has unique and innovative courses designed to
              provide teaching staff the opportunity to progress their own
              learning while having a significant impact on curriculum
              development in the university setting. The courses are designed to
              further their knowledge of how to enrich curricula through the
              natural world and outdoor learning pedagogy. The faithful
              implementation of a comprehensive, high-quality curriculum is a
              necessary, though not sufficient condition for high performance
              during university hours. High-quality instructional materials
              shape what students learn, how they engage with content, and how
              teachers manage their instructional time. Such a curriculum
              effectively sequences material for optimal benefit, and the best
              also incorporate evidence-based practices based on how students
              learn. The curriculum should serve as a bedrock of professional
              learning for teachers, and the lens through which continuous
              improvement in practice is both inspired and measured. Using
              well-designed, high-quality curricula can free teachers’ time and
              energy to practice and refine their instruction, since they are no
              longer urged or expected to essentially design their own. Few
              teachers have the time or the training to do that well
            </p>
          </div>

          <div className="col-md-6">
            <img
              src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Knowledge-Oriented-1024x683.jpg"
              alt=""
            />
          </div>

          <div className="col-md-6">
            <img
              className="img-fluid"
              src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Knowledge-Oriented-1024x683.jpg"
              alt=""
            />
          </div>

          <div className="col-md-6">
            <h2 className="blue h1 text-start">Knowledge Oriented</h2>
            <p className="line-height text-paragraph">
              Hajvery University is providing a knowledge-rich curriculum that
              is nearly every major educational goal from improving reading
              comprehension to deepening critical thinking is knowledge-based.
              Without a broad, solid foundation of knowledge and vocabulary
              built from the first days of university, better student outcomes
              will not be achieved. We must ensure that all of our major and
              minor degrees are more generously taught to all students,
              especially those least likely to gain such knowledge outside.
              Beyond the knowledge specified for each unit, a knowledge-rich
              curriculum is planned vertically and horizontally, giving thought
              to the optimum knowledge sequence for building secure schemas. We
              provide ground professional development in the specific content of
              the curriculum and ensure it explains the research foundation for
              the curriculum’s framework and orientation
            </p>{" "}
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

export default RichCirculum;
