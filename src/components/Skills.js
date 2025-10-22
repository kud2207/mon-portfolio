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

// ==== Exemple d'images pour les certificats ====
import ccnaIcon from '../assets/img/ccna.png';
import diplomaIcon from '../assets/img/devweb.png';

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
  const certifications = [
    {
      name: "CCNA (in progress)",
      icon: ccnaIcon,
      description: "Currently preparing for the Cisco Certified Network Associate certification — focused on routing, switching, and infrastructure management."
    },
    {
      name: "Developer Certification – OpenClassrooms",
      icon: diplomaIcon,
      description: "Certified in both Front-End and Back-End javascript development through professional OpenClassrooms programs."
    },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">

            {/* ==== SKILLS ==== */}
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

              {/* ==== Carousel ==== */}
              <Carousel itemClass="m-10" responsive={responsive} infinite={true} className="skill-slider mt-3">
                {categories[activeTab].map((skill, index) => (
                  <div key={index} className="item text-center">
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

            {/* ==== CERTIFICATIONS ==== */}
            <div className="skill-bx wow zoomIn mt-4">
              <h2>Certifications</h2>
              <p>
                Continuous learning and professional validation through global certifications and formal education.
              </p>

              <div className="certifications-list mt-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="cert-item d-flex align-items-center mb-4"
                    style={{
                      backgroundColor: "#1c1c1c",
                      padding: "15px 20px",
                      borderRadius: "10px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                      flexWrap: "wrap"
                    }}
                  >
                    <img
                      src={cert.icon}
                      alt={cert.name}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                        marginRight: "20px"
                      }}
                    />
                    <div style={{ flex: 1, color: "white" }}>
                      <h5 style={{ marginBottom: "5px", fontWeight: "bold", color: "#8e44ad" }}>
                        {cert.name}
                      </h5>
                      <p style={{ margin: 0, color: "#aaa" }}>{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ==== Responsive Style ==== */}
      <style>
        {`
          @media (max-width: 768px) {
            .cert-item {
              flex-direction: column !important;
              text-align: center;
            }
            .cert-item img {
              margin: 0 0 10px 0 !important;
            }
          }
        `}
      </style>
    </section>
  );
};
