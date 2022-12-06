import React from "react";
import Navbars from "../../Components/navbar";
import "./blogging.scss"
import Footer from "../../Components/Footer"

const Blogging=()=>{

return(
<>
<div>
    <Navbars/>
</div>
<div className="wrapper margin-top-to-nav">
<div className="container">
<p className="maroon text-center font-weight-bold">UnCategorized</p>
<h2 className="h2 font-weight-bold text-center">Hajvery University Convocation
2022</h2>


<div className="blog-img mt-4">

{/* <img src="" alt="" /> */}

</div>


</div>

</div>
<div className="container">
    <div className="d-flex justify-content-center flex-column align-items-center">
<h2 className="h1 font-weight-bold my-5 text-start">Hajvery University Convocation<br/> 2022 was held on 27th October<br/> 2022.</h2>

<p className="blog-text px-5 line-height">Honorable Chief Minister’s Taskforce Mian Imran Masood will preside the ceremony. More than 915 Male & Female students from Bachelors, Masters and Doctorate Programs will be awarded degrees.<br/>
Hajvery Universiity Convocation is a time tested tradition of celebrating academic excellence of graduates, faculty & Researchers. The event is well attended by Dignitaries, Vice Chancellors, and Chairpersons of Public & Private sectors organizations, Deans, Faculty and with very proud parents and HU Graduates.
Honorable Chief Minister’s Taskforce Mian Imran Masood & Chairman BOG, Hajvery University, Mr. Atif Mustaq award Degrees & Medals to successful graduates at the Convocation Ceremony.</p>



</div>

<div>
    <p>Share On</p>
    <div className="d-flex">
<div className="social-item">

</div>

<div className="social-item">

</div>
<div className="social-item">

</div>
<div className="social-item">

</div>
    </div>
</div>
</div>


<div className="footer">
    <Footer/>
</div>


</>
)

}
export default Blogging

