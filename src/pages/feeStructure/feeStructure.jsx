import React from "react";
import Navbars from "../../Components/navbar";
import "./feeStructure.scss";
import Footer from "../../Components/Footer";
function FeeStructure() {
  return (
    <>
      <div>
        <Navbars />
      </div>
      <div className="bgImg">
        <img src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Fees-Structure_New.jpg" alt="" />
      </div>
      <div className="container mb-5">
       
<div className="d-flex justify-content-center flow-scroll flex-column">
<p className="heading-text my-4 text-center font-color">Faculty of Business Administration</p>
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
  
      </div>

      <div>

        <Footer/>
      </div>
    </>
  );
}
export default FeeStructure;
