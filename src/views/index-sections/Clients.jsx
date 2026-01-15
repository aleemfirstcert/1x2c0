import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/index.css";
import logo1 from "../../assets/img/logos/logo1.png";
import logo2 from "../../assets/img/logos/logo2.png";
import logo3 from "../../assets/img/logos/logo3.png";
import logo4 from "../../assets/img/logos/logo4.png";
import logo5 from "../../assets/img/logos/logo5.png";
import logo6 from "../../assets/img/logos/logo6.png";
import logo7 from "../../assets/img/logos/logo7.png";
import logo8 from "../../assets/img/logos/logo8.png";
import logo9 from "../../assets/img/logos/logo9.png";
import logo10 from "../../assets/img/logos/logo10.png";
import logo11 from "../../assets/img/logos/logo11.png";

const Clients = () => {
  const logos = [
    { id: 1, name: "brisk", logo: logo1 },
    { id: 2, name: "doc", logo: logo2 },
    { id: 3, name: "k", logo: logo3 },
    { id: 4, name: "uni", logo: logo4 },
    { id: 5, name: "chegus", logo: logo5 },
    { id: 6, name: "baricade", logo: logo6 },
    { id: 7, name: "paralock", logo: logo7 },
    { id: 8, name: "oasis", logo: logo8 },
    { id: 9, name: "primed", logo: logo9 },
    { id: 10, name: "valueH", logo: logo10 },
    { id: 11, name: "cyraacs", logo: logo11 },
  ];

  const allLogos = [...logos, ...logos, ...logos];

  return (
    <section className="client-logos-section py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Trusted by Innovative Companies Worldwide</h2>
          </Col>
        </Row>
      </Container>

      {/* Single line infinite scrolling logos */}
      <div className="single-line-logos-container">
        <div className="single-line-logos-track">
          {allLogos.map((logo, index) => (
            <div key={`${logo.id}-${index}`} className="single-line-logo-item">
              <div className="single-line-logo-wrapper">
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="single-line-logo-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
