import React from "react";
import Navbars from "../../Components/navbar";
import "./schedule.scss";
import Footer from "../../Components/Footer"
function Schedule() {
  return (
    <>
      <div>
        <Navbars />
      </div>
      <div className="bgImg">
        <img
          src="https://www.hup.edu.pk/wp-content/uploads/2022/05/Exam-Result_01.jpg"
          alt=""
        />
      </div>
      <div className="container">
       
<div className="d-flex justify-content-center flow-scroll flex-column">
<p className="heading-text my-4">All Exams</p>
   <table>
 <tr className="heading-row">
<th>Sr No.</th>
<th>Discipline</th>
<th>Starting Date</th>
<th>Campus</th>
 </tr>
 <tr className="entry-row">
    <td>1</td>
    <td>B.Sc. (Hons.) Film, TV, Advertising & Media Studies 6th & 7th Semester (Batch 8 & 8A)</td>
    <td>Germany</td>
    <td>Hello</td>
  </tr>
  <tr className="entry-row">
    <td>1</td>
    <td>B.Sc. (Hons.) Film, TV, Advertising & Media Studies 6th & 7th Semester (Batch 8 & 8A)</td>
    <td>Germany</td>
    <td>Hello</td>
  </tr> <tr className="entry-row">
    <td>1</td>
    <td>B.Sc. (Hons.) Film, TV, Advertising & Media Studies 6th & 7th Semester (Batch 8 & 8A)</td>
    <td>Germany</td>
    <td>Hello</td>
  </tr> <tr className="entry-row">
    <td>1</td>
    <td>B.Sc. (Hons.) Film, TV, Advertising & Media Studies 6th & 7th Semester (Batch 8 & 8A)</td>
    <td>Germany</td>
    <td>Hello</td>
  </tr> <tr className="entry-row">
    <td>1</td>
    <td>B.Sc. (Hons.) Film, TV, Advertising & Media Studies 6th & 7th Semester (Batch 8 & 8A)</td>
    <td>Germany</td>
    <td>Hello</td>
  </tr>



   </table>
   </div>
   <div className="mb-5">
        <img className="img-fluid" src="https://www.hup.edu.pk/wp-content/uploads/2022/02/Euro_Campus.jpg" alt="" />
      </div>
      </div>
      
<div>
  <Footer/>
</div>
    
    </>
  );
}

export default Schedule;
