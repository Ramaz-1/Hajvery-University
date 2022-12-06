import React from "react";
import Navbars from "../../Components/navbar";
import Footer from "../../Components/Footer"
const Society = () => {
  const societyBoxItems = [
    {
      title: "Debating Society",
      description:
        "Public speaking skills can be greatly beneficial to your personal and professional wellbeing. HUDS allows you to become an articulate individual, who can express their point of view, persuade or dissuade a crowd, or an individual on social, political, or economic issues.HU debating Society’s main objectives include -To promote and inculcating the arts of debating, elocution & public speaking in the student.",
      img: "https://www.hup.edu.pk/wp-content/uploads/2021/12/Debating-Society_Logo-02-02-280x147.png",
    },
    {
      title: "Photography Society",
      description:
        "UPS has been created to enhance the artistic abilities of students and to bring all types of photographers together to share their information, experience, and knowledge in every aspect of photography as an art form and welcomes members who enjoy photography at all experience levels.HUP society helps the students to explore the strength of photo capturing. They have plenty of opportunities within and surrounding campus to take pictures. The society provides the aim to find the power of photographs, capture the stories of communities and demonstrate the beautiful events around the life at HUPS. Society runs the healthy competition among students and tries to highlight the community’s ponder issues.",
      img: "	https://www.hup.edu.pk/wp-content/uploads/2022/01/HU-Photograpy-Societies_Logo-02-280x147.png",
    },
    {
      title: "HU Dramatic Society",
      description:
        "HUDS strive to promote dramatics as an enjoyable hobby and a vehicle to develop new skills and endeavor to provide a supportive &open atmosphere upon which we can help our members evolve and grow and provide a platform for students to write, direct and produce the drama and facilitate the students to sparkle their hidden talent of social life, positively promote the civilization.HUDS comprises of people from all walks of life, who come together to promote theatre and art. We aim to provide individuals with a platform to express themselves, pursue new theatrical endeavors, experience novel opportunities, and give back to society in the form of art. However, HUDS goal is not only to enable experienced and talented performers to excel, but also to encourage new theatre aspirants to learn and follow their passion.",
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/HU-Dramatics-Society_Logo-02-280x147.png",
    },
    {
      title: "Newsletter and Yearbook Society",
      description:
        "HUNYS has been created to augment the events, conferences, seminars, and symposiums of HU by covering and giving configuration to all these in Newsletter, and HU will publish it. Newsletter & Yearbook is a superior way to promote HU events and provide a glimpse to outsiders.",
      img: "	https://www.hup.edu.pk/wp-content/uploads/2022/01/Newsletter-Year-book-Societies_Logo-02-280x147.png",
    },
    {
      title: "Career Development Society",
      description:
        "HU has a lot to offer its students in terms of academic possibilities as well as opportunities to develop and nurture their talents outside of class settings. HU Alumni represent the university in their professional life after graduating. They form a huge chapter of the university’s history and pride. For this reason, we Hajvery University believe in giving back. This society allows the Alumni to organize themselves to do so.",
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/Career-Development_Logo-02-02-280x147.png",
    },
    {
      title: "AIESEC",
      description:
        "Public speaking skills can be greatly beneficial to your personal and professional wellbeing. HUDS allows you to become an articulate individual, who can express their point of view, persuade or dissuade a crowd, or an individual on social, political, or economic issues.HU debating Society’s main objectives include -To promote and inculcating the arts of debating, elocution & public speaking in the student.",
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/Aiesec_Logo-02-02-280x147.png",
    },
    {
      title: "OIKOS Oikos Chapter (HUOS)",
      description:
        "OIKOS stands at the forefront of growing momentum towards sustainable development at universities around the world.",
      img: "	https://www.hup.edu.pk/wp-content/uploads/2022/01/Oikos-Societies_Logo-02-280x147.png",
    },
    {
      title: "Alumni Socieaty",
      description:
        "HU has a lot to offer its students in terms of academic possibilities as well as opportunities to develop and nurture their talents outside of class settings. HU Alumni represent the university in their professional life after graduating. They form a huge chapter of the university’s history and pride. For this reason, we Hajvery University believe in giving back. This society allows the Alumni to organize themselves to do so.HU has a lot to offer its students in terms of academic possibilities as well as opportunities to develop and nurture their talents outside of class settings. HU Alumni represent the university in their professional life after graduating. They form a huge chapter of the university’s history and pride. For this reason, we Hajvery University believe in giving back. This society allows the Alumni to organize themselves to do so.",
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/Alumni-Society_Logo-02-02-280x147.png",
    },
    {
      title: "HU Management Society",
      description:
        "HU management Society is responsible for maintaining all social media accounts, designing, and writing all material published,and organizing seminars & events. The management society is responsible for ensuring the seamless running of every event.",
      img: "	https://www.hup.edu.pk/wp-content/uploads/2022/01/HU-Management-Societies_Logo-02-280x147.png",
    },
    {
      title: "HU Sports Club",
      description:
        "HU sports club offers several sports and games at the Hajvery University. These sports and games are categorized as indoors and outdoors. Available indoor activities include table tennis, scrabble, badminton, chess just to mention a few. Outdoors sports include track or field athletics, football, volleyball, cricket, and others. The HU has an excellent team responsible for coaching, managing and supervising, and administering sports activities to help students in developing their interest in the games and in enhancing their participation standards. HU, as one of Pakistan’s leading educational institutions, is not only expanding its curve of excellence in academics but is also enhancing societies. One of the best in sports. Wellness and Recreation within the campus strive to motivate the entire campus community to come together to realize its sporting potential within a large variety of games.",
      img: "https://www.hup.edu.pk/wp-content/uploads/2022/01/HU-Sport-Club-Societies_Logo-02-300x211.png",
    },
  ];

  return (
    <>
    <div className="bg-white mb-5">
      <div>
        <Navbars />
      </div>
      <div className="bgImg">
        <img
          src="https://www.hup.edu.pk/wp-content/uploads/2022/01/Student-Societies_New.jpg"
          alt=""
        />
      </div>
      <div className="container">
        <div className="row">
          {societyBoxItems.map((items) => (
            <div className="col-md-12 box-shadow-to-box my-5">
              <div className="row">
                <div className="col-md-3">
                  <img src={items.img} alt="" />
                </div>
                <div className="col-md-8">
                  <h2 className="h5 blue font-weight-bold text-start">
                    {items.title}
                  </h2>
                  <p className="line-height">
                    {items.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      <div className="footer">
<Footer/>
      </div>
    </>
  );
};

export default Society;
