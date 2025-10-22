import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// ==== ICONES ====
import htmlIcon from '../assets/img/html.png';
import cssIcon from '../assets/img/css.png';
import jsIcon from '../assets/img/js.png';
import tsIcon from '../assets/img/ts.png';
import phpIcon from '../assets/img/php.png';
import reactIcon from '../assets/img/react.png';
import nextIcon from '../assets/img/nextjs.png';
import nativeIcon from '../assets/img/reactnative.png';
import expressIcon from '../assets/img/express.png';
import laravelIcon from '../assets/img/laravelle.png';
import sqlIcon from '../assets/img/sql.png';
import nosqlIcon from '../assets/img/nosql.png';
import umlIcon from '../assets/img/uml.png';
import prestashoplIcon from '../assets/img/prestashop.png';
import rxIcon from '../assets/img/reseaux.png';
import telecomlIcon from '../assets/img/telecom.png';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('Languages');

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const categories = {
    Languages: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "TypeScript", icon: tsIcon },
      { name: "PHP", icon: phpIcon }
    ],
    Frontend: [
      { name: "React.js", icon: reactIcon },
      { name: "Next.js", icon: nextIcon }
    ],
    Mobile: [
      { name: "React Native", icon: nativeIcon }
    ],
    Backend: [
      { name: "Express.js", icon: expressIcon },
      { name: "Laravel", icon: laravelIcon }
    ],
    Database: [
      { name: "SQL", icon: sqlIcon },
      { name: "NoSQL", icon: nosqlIcon }
    ],
    CMS: [
      { name: "Prestashop", icon: prestashoplIcon }
    ],
    Modeling: [
      { name: "UML", icon: umlIcon }
    ],
    Network: [
      { name: "Network Administration", icon: rxIcon },
      { name: "Telecom Infrastructure", icon: telecomlIcon }
    ],
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                My passion is to combine web, mobile, and telecom expertise to deliver complete solutions.
              </p>

              {/* ==== Tabs ==== */}
              <div className="tabs">
                {Object.keys(categories).map((category) => (
                  <button
                    key={category}
                    className={`tab-btn ${activeTab === category ? 'active' : ''}`}
                    onClick={() => setActiveTab(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* ==== Carousel correspondant à l’onglet actif ==== */}
              <Carousel itemClass='m-10' responsive={responsive} infinite={true} className="skill-slider mt-3">
                {categories[activeTab].map((skill, index) => (
                  <div key={index} className="item">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      style={{ width: "90px", height: "90px", marginBottom: "10px" }}
                    />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
