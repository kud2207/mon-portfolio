import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/gmail.svg'
import navIcon4 from '../assets/img/whatsapp.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
                      <div className="navbar-brand">
            KAGEU ULRICH
          </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a
                  href="https://www.linkedin.com/in/kageu-djouche-auriol-ulrich-7267302bb"
                  target="_blank"
                  rel="noopener noreferrer"

                >
                  <img src={navIcon1} alt="LinkedIn" />
                </a>

                <a
                  href="https://github.com/kud2207"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={navIcon2} alt="GitHub" />

                </a>

                <a href="mailto:ulrichkageu@gmail.com" title="ulrichkageu@gmail.com">
                  <img src={navIcon3} alt="Email" />
                </a>

                <a href="https://wa.me/237692134088" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon4} alt="WhatsApp" />

                </a>
              </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
