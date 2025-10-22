import { Container, Row, Col, Tab, Nav, Modal, Button, Carousel } from "react-bootstrap";
import { useState } from "react";
import colorSharp2 from "../assets/img/color-sharp2.png";

// Exemple images à remplacer par tes images réelles
import CoServiceImg1 from "../assets/img/web/Coservice/1.png";
import CoServiceImg2 from "../assets/img/web/Coservice/2.png";
import CoServiceImg3 from "../assets/img/web/Coservice/3.png";
import CoServiceImg4 from "../assets/img/web/Coservice/4.png";


export const Projects = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // === Projets avec catégories, entreprise et technologies === Web|| Mobile || Network
  const projects = [
    {
      title: "CoService",
      company: "OpenIntech",
      category: "Web",
      description: "App to management",
      images: [CoServiceImg1, CoServiceImg2, CoServiceImg3, CoServiceImg4],
      github: "PRIVITE",
      website: "https://coservice.dilios.me/ ",
      period: "Sept 2025 - Now Day",
      technologies: ["Tailwin" , "Ts" , "PHP" , "ReactTs" , "Laravel12-Inertia", "PosSQL"]
    },
    // {
    //   title: "Mobile App",
    //   company: "AppCorp",
    //   category: "Mobile",
    //   description: "App Development",
    //   images: [projImg2, projImg3],
    //   github: "https://github.com/toncompte/mobile-app",
    //   website: "",
    //   period: "Apr 2024 - Jun 2024",
    //   technologies: ["React Native", "Expo", "TypeScript"]
    // },
    // {
    //   title: "Telecom Project",
    //   company: "Camtel",
    //   category: "Network",
    //   description: "Telecom / Fiber Optics / Network Maintenance",
    //   images: [projImg1, projImg2],
    //   github: "",
    //   website: "",
    //   period: "Jul 2023 - Dec 2023",
    //   technologies: ["Fiber Optics", "Cisco", "Telecom Maintenance"]
    // },
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
            <p>
              I have gained hands-on experience with one year of personal projects and <span style={{ fontWeight: 'bold', color: '#8e44ad' }}>over one year of enterprise-level projects</span>,
              covering Web development, Mobile applications, and Network & Telecom.
            </p>

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
                            <img src={project.images[0]} alt={project.title} className="img-fluid" style={{ objectFit: "cover", width: "100%" }} />
                            <h5 className="mt-2" style={{ fontWeight: "bold", color: "#8e44ad" }}>{project.title}</h5>
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
                    <Carousel
                      interval={null}
                    >
                      {selectedProject.images.map((img, idx) => (
                        <Carousel.Item key={idx}>
                          <img
                            className="d-block w-100"
                            src={img}
                            alt={`Slide ${idx}`}
                            style={{ maxHeight: "250px", objectFit: "cover" }}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                    <p className="mt-3"style={{ color: '#17202A' }}>{selectedProject.description}</p>
                    <p><strong style={{ color: '#17202A' }}>Period:</strong> <span style={{ color: '#17202A' }}>{selectedProject.period}</span></p>
                    {selectedProject.technologies && (
                      <p><strong style={{ color: '#17202A' }}>Technologies:</strong> <span style={{ color: '#17202A' }}>{selectedProject.technologies.join(", ")}</span></p>
                    )}
                    {selectedProject.github && (
                      <p><strong style={{ color: '#17202A' }}>GitHub:</strong> <a href={selectedProject.github} target="_blank" rel="noreferrer">{selectedProject.github}</a></p>
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
