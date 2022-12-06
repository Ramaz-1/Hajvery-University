import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Polices from "./pages/Hu-polices/hu-polices";
import Current from "./pages/current/current";
import Academics from "./pages/academics/academics"
import Admission from "./pages/admission/admission";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Careers from "./pages/jobsHU/careers";
import JobsDetail from "./pages/jobsdetail/jobs";
import Form from "./pages/jobsdetail/jobfrom/form";
import Discover from "./pages/discovermore/discover";
import BlogReaderOne from "./pages/about/blogpage/blogpage";
import BlogReaderTwo from "./pages/about/blogPageTwo/blogPageTwo";
import BlogPageThree from "./pages/about/blogpageThree/blogpgeThree";
import Schedule from "./pages/schedule/schedule";
import FeeStructure from "./pages/feeStructure/feeStructure";
import Faculty from "./pages/Faculty/faculty";
import Message from "./pages/blogPages/messagefromrector";
import Director from "./pages/blogPages/directorMessagee";
import Vision from "./pages/blogPages/vision";
import Campuses from "./pages/blogPages/hu-campuses";
import Convocation from "./pages/blogPages/hu-convocation";
import TOPFACULTY from "./pages/blogPages/top-notoch-faculty";
import PridePage from "./pages/blogPages/pointsPride";
import Apply from "./pages/blogPages/apply";
import Facility from "./pages/blogPages/campusFacility";
import Society from "./pages/blogPages/studentsocieties";
import Quality from "./pages/blogPages/quality-enhancement-cell";
import Scholarhip from "./pages/blogPages/scholarship";
import Viewmore from "./pages/viewmore/viewmore";
import Blogging from "./pages/Blogging/blogging";
import Test from "./pages/test/test"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/careers" element={<Careers/>}/>
      <Route path="/hu-polices" element={<Polices />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/admission" element={<Admission />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/current" element={<Current />} />
      <Route path="/*" element={<Navigate to="/home" />} />
      <Route path="/jobsdetail" element={<JobsDetail/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/discover" element={<Discover/>}/>
      <Route path="/blogreader" element={<BlogReaderOne/>}/>
      <Route path="/blogPageTwo" element={<BlogReaderTwo/>}/>
      <Route path="/blogPageThree" element={<BlogPageThree/>}/>
      <Route path="/schedule" element={<Schedule/>}/>
      <Route path="/fee-structure" element={<FeeStructure/>}/>
      <Route path="/faculty-of" element={<Faculty/>}/>
      <Route path="/message" element={<Message/>}/>
      <Route path="/director" element={<Director/>}/>
      <Route path="/vision" element={<Vision/>}/>
      <Route path="/campuses" element={<Campuses/>}/>
      <Route path="/convocation" element={<Convocation/>}/>
      <Route path="/top-notch" element={<TOPFACULTY/>}/>
      <Route path="/points-of-pride" element={<PridePage/>}/>
      <Route path="/how-to-apply" element={<Apply/>}/>
      <Route path="/facility" element={<Facility/>}/>
      <Route path="/socitey"  element={<Society/>}/>
      <Route path="/qulity-enahcemnet-cell" element={<Quality/>} />
      <Route path="/aid-scholarship" element={<Scholarhip/>}/>
      <Route path="/view-more" element={<Viewmore/>}/>
      <Route path="/blogs" element={<Blogging/>}/>
      <Route path="student-socitites" element={<Society/>}/>
      <Route path="/test/:id" element={<Test/>}/> 
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring per`form`ance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
