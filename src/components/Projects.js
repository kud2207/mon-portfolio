import { Container, Row, Col, Tab, Nav, Modal, Button, Carousel } from "react-bootstrap";
import { useState } from "react";
import colorSharp2 from "../assets/img/color-sharp2.png";

// Import des images
import CoServiceImg1 from "../assets/img/web/Coservice/1.png";
import CoServiceImg2 from "../assets/img/web/Coservice/2.png";
import CoServiceImg3 from "../assets/img/web/Coservice/3.png";
import CoServiceImg4 from "../assets/img/web/Coservice/4.png";

import chemReuImg1 from "../assets/img/web/Chemin-reusite/1.png";
import chemReuImg2 from "../assets/img/web/Chemin-reusite/2.png";
import chemReuImg3 from "../assets/img/web/Chemin-reusite/3.png";
import chemReuImg4 from "../assets/img/web/Chemin-reusite/4.png";
import chemReuImg5 from "../assets/img/web/Chemin-reusite/5.png";
import chemReuImg6 from "../assets/img/web/Chemin-reusite/6.png";
import chemReuImg7 from "../assets/img/web/Chemin-reusite/7.png";

import tradingImg1 from "../assets/img/mobile/TrackTrading/1.png";
import tradingImg2 from "../assets/img/mobile/TrackTrading/2.png";
import tradingImg3 from "../assets/img/mobile/TrackTrading/3.png";

import chatCatImg1 from "../assets/img/web/catChat/1.png";
import chatCatImg2 from "../assets/img/web/catChat/2.png";
import chatCatImg3 from "../assets/img/web/catChat/3.png";
import chatCatImg4 from "../assets/img/web/catChat/4.png";
import chatCatImg5 from "../assets/img/web/catChat/5.png";
import chatCatImg6 from "../assets/img/web/catChat/6.png";
import chatCatImg7 from "../assets/img/web/catChat/7.png";



export const Projects = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "CoService",
      company: "OpenIntech",
      category: "Web",
      description: "Implementation and design of multiple dashboard interfaces with a focus on user experience (UI/UX).",
      images: [CoServiceImg1, CoServiceImg2, CoServiceImg3, CoServiceImg4],
      github: ["PRIVATE"],
      website: "https://coservice.dilios.me/",
      period: "Sept 2025 - Now",
      technologies: ["Tailwind", "TS", "PHP", "ReactTS", "Laravel12-Inertia", "PostgreSQL"]
    },
    {
      title: "catChat",
      company: "Myself",
      category: "Web",
      description: `Development of a real-time web chat application featuring an interactive and responsive UI,
        support for multiple color themes (light/dark/custom modes), 
        and robust security mechanisms (JWT authentication, end-to-end or transport-level message encryption, 
        CSRF/XSS protection, rate limiting, etc.).`,
      images: [chatCatImg1, chatCatImg2, chatCatImg3, chatCatImg4, chatCatImg5, chatCatImg6, chatCatImg7],
      github: [
        "https://github.com/kud2207/back-catChtat.git",
        "https://github.com/kud2207/front-catChtat.git"
      ],
      website: "https://catchat-5woz.onrender.com",
      period: "Nov 2025",
      technologies: [
        "Tailwind", "JS", "TS", "ReactTS", "Express.Js",
        "MongoDB", "Socket.io", "Cloudinary",
      ]
    },
    {
      title: "CheminDeLaReussite",
      company: "Myself",
      category: "Web",
      description: "Designed and implemented UI/UX components in React.js and Express APIs using TypeScript for a learning and educational platform",
      images: [chemReuImg1, chemReuImg2, chemReuImg3, chemReuImg4, chemReuImg5, chemReuImg6, chemReuImg7],
      github: [
        "https://github.com/kud2207/cheminDeLeReussite-backend-express.git",
        "https://github.com/kud2207/cheminDeLeReussite-frontend-React.git"
      ],
      website: "https://chemin-de-le-reussite-frontend-reac.vercel.app/",
      period: "Avrl 2025 - June 2025",
      technologies: ["CSS", "JS", "TS", "ReactJS", "Express", "MongoDB"]
    },
    {
      title: "TrackTrading",
      company: "Fastdevz",
      category: "Mobile",
      description: "Retrieve data sent by the Alparasing API and monitor it within the mobile application.",
      images: [tradingImg3, tradingImg2, tradingImg1,],
      github: [
        "https://github.com/kud2207/front-test-trading.git",
        "https://github.com/kud2207/back-test-trading.git"
      ],
      website: "",
      period: "fev 2025 - mars 2025",
      technologies: ["TS", "React Native", "Express", "PostgreSQL", "Alpaca Trading"]
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setModalShow(true);
  };

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2 style={{ fontWeight: "bold", color: "#8e44ad" }}>Projects</h2>
            <span>
              I have gained hands-on experience with one year of personal projects and <span style={{ fontWeight: 'bold', color: '#8e44ad' }}>over one year of enterprise-level projects</span>,
              covering Web development, Mobile applications, and Network & Telecom.
            </span>
            <p />
            {/* ==== Tabs ==== */}
            <Tab.Container defaultActiveKey="Web">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center">
                <Nav.Item><Nav.Link eventKey="Web">Web</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="Mobile">Mobile</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="Network">Network</Nav.Link></Nav.Item>
              </Nav>

              <Tab.Content>
                {["Web", "Mobile", "Network"].map((tabKey) => (
                  <Tab.Pane eventKey={tabKey} key={tabKey}>
                    <Row>
                      {projects.filter(p => p.category === tabKey).map((project, index) => (
                        <Col md={4} key={index} className="mb-3">
                          <div
                            className="project-card"
                            onClick={() => openModal(project)}
                            style={{ cursor: "pointer", position: "relative" }}
                          >
                            {project.images.length > 1 ? (
                              <Carousel interval={null} indicators={false} controls={false}>
                                {project.images.map((img, idx) => (
                                  <Carousel.Item key={idx}>
                                    <img
                                      src={img}
                                      alt={`${project.title} slide ${idx}`}
                                      className="img-fluid"
                                      style={{ width: "100%", height: "200px", objectFit: "cover" }}
                                    />
                                  </Carousel.Item>
                                ))}
                              </Carousel>
                            ) : (
                              <img
                                src={project.images[0]}
                                alt={project.title}
                                className="img-fluid"
                                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                              />
                            )}

                            <h5 className="mt-2" style={{ fontWeight: "bold", color: "#8e44ad", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                              <span>{project.title}</span>
                              <span style={{ fontSize: '13px', paddingLeft: '5px', fontWeight: 100, color: "#fff" }}>{project.period}</span>
                            </h5>


                            <small style={{ display: "block", marginBottom: "5px" }}>{project.company}</small>

                            {project.images.length > 1 && (
                              <span
                                style={{
                                  position: "absolute",
                                  top: "10px",
                                  right: "10px",
                                  backgroundColor: "#8e44ad",
                                  color: "#fff",
                                  padding: "2px 6px",
                                  borderRadius: "3px",
                                  fontSize: "12px"
                                }}
                              >
                                + {project.images.length} images
                              </span>
                            )}
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Tab.Container>

            {/* ==== Modal ==== */}
            <Modal show={modalShow} onHide={() => setModalShow(false)} size="lg" centered>
              {selectedProject && (
                <>
                  <Modal.Header closeButton>
                    <Modal.Title style={{ fontWeight: "bold", color: "#8e44ad" }}>
                      {selectedProject.title} - <small>({selectedProject.company})</small>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Carousel interval={null}>
                      {selectedProject.images.map((img, idx) => (
                        <Carousel.Item key={idx}>
                          <img
                            className="d-block w-100"
                            src={img}
                            alt={`Slide ${idx}`}
                            style={{ maxHeight: "400px", width: "100%", objectFit: "cover" }}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>

                    <p className="mt-3" style={{ color: '#17202A' }}>{selectedProject.description}</p>
                    <p><strong style={{ color: '#17202A' }}>Period:</strong> <span style={{ color: '#17202A' }}>{selectedProject.period}</span></p>

                    {selectedProject.technologies && (
                      <p><strong style={{ color: '#17202A' }}>Technologies:</strong> <span style={{ color: '#17202A' }}>{selectedProject.technologies.join(", ")}</span></p>
                    )}

                    {selectedProject.github && selectedProject.github.length > 0 && (
                      <p>
                        <strong style={{ color: '#17202A' }}>GitHub:</strong><br />
                        {selectedProject.github.map((link, idx) => (
                          <a
                            key={idx}
                            href={link}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              display: "block",
                              paddingRight: '10px',
                              marginBottom: '3px',
                              wordBreak: 'break-all'
                            }}
                          >
                            {link}
                          </a>

                        ))}
                      </p>
                    )}


                    {selectedProject.website && (
                      <p><strong style={{ color: '#17202A' }}>Website:</strong> <a href={selectedProject.website} target="_blank" rel="noreferrer">{selectedProject.website}</a></p>
                    )}
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModalShow(false)}>Close</Button>
                  </Modal.Footer>
                </>
              )}
            </Modal>

          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
