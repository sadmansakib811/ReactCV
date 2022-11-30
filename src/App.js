import React from "react";
import "./styles.css";

import InfoCard from "./InfoCard";
import experience from "./experience";
import CVComponent from "./CVComponent";
import education from "./education";
import SkillsList from "./SkillsList";

const info = {
  imgSrc: "./sadman.jpg",
  name: "Sadman Sakib",
  profession: "Web Developer",
  address: "Emil Figge Strasse, Dortmund, Germany",
  phone: "+491781443103",
  email: "sadmansakib123450@gmail.com",
  weblink: "https://github.com/sadmansakib811",

  about:
    "I'm a passionate and hardworking Web Developer attempting to establish a long-term career in the IT field in a position that would provide opportunities for advancement. I am a highly motivated, creative, and goal-oriented individual who can operate under duress in a fast-paced environment."
};

export default function App() {
  const experienceComponent = experience.map((item) => (
    <CVComponent item={item} />
  ));
  const educationComponent = education.map((item) => (
    <CVComponent item={item} />
  ));

  return (
    <div>
      <main>
        <section className="container">
          <section className="info">
            <InfoCard info={info} />
            <h2>
              <i className="fa fa-cogs" /> Skills
            </h2>
            <SkillsList />
          </section>

          <section className="work">
            <h1>
              <i className="fa fa-briefcase fa" /> Work Experience{" "}
            </h1>
            {experienceComponent}
          </section>
          <hr />
          <section className="education">
            <h1>
              {" "}
              <i className="fa fa-university" /> Education{" "}
            </h1>
            {educationComponent}
          </section>

          <section className="other">
            <h1>
              {" "}
              <i className="fa fa-desktop" /> Other Interests{" "}
            </h1>
            <h3> Online Games</h3>
            <ul>
              <li>
                <i className="fa fa-book" /> Fortnite
              </li>
              <li>
                <i className="fa fa-book" /> Gta V
              </li>
            </ul>
            <h3>Sustainability</h3>
            <ul>
              <li>Reducing waste</li>
              <li>Build a sustainable wardrobe</li>
            </ul>
          </section>
        </section>
      </main>
      <footer className="footer">
        <p>Sadman Sakib</p>
        <i className="fa fa-facebook-square" />
        <i className="fa fa-instagram" />
        <i className="fa fa-github" />
        <i className="fa fa-linkedin-in" /> All Rights Reserved
      </footer>
    </div>
  );
}
