import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import IndexNavbar from "components/Navbars/IndexNavbar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaChalkboardTeacher,
  FaFileAlt,
  FaHeadset,
  FaShieldAlt,
  FaCheckCircle,
  FaUsers,
  FaSearch,
  FaSyncAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import DemoFooter from "components/Footers/DemoFooter";
import { Helmet } from "react-helmet";
import vapt from "../../../assets/img/services/vapt.webp";
import StatsWithForm from "views/index-sections/StatsWithForm";

function VaptCertification() {
  useEffect(() => {
    Aos.init();
  }, []);

  const features = [
    {
      icon: <FaChalkboardTeacher size={40} className="text-primary mb-3" />,
      title: "Training → Expert-Led Learning",
      desc: "Gain insights from experienced consultants across diverse industry sectors.",
    },
    {
      icon: <FaFileAlt size={40} className="text-success mb-3" />,
      title: "Documentation → Structured Process Support",
      desc: "We follow a systematic and well-organized approach to ensure your certification process is smooth and fully compliant.",
    },
    {
      icon: <FaHeadset size={40} className="text-warning mb-3" />,
      title: "Support →  24/7 Assistance",
      desc: "Enjoy round-the-clock access to our support team, even after your testing is complete.",
    },
    {
      icon: <FaShieldAlt size={40} className="text-danger mb-3" />,
      title: "Guaranteed →  Assured Service Quality",
      desc: "With First Cert, your VAPT service quality is assured — no results, no payment.",
    },
  ];

  const steps = [
    {
      icon: <FaSearch size={28} className="text-primary mb-2" />,
      title: "Scoping & Planning",
      desc: "Defining the scope of systems, networks, and applications to be tested.",
    },
    {
      icon: <FaFileAlt size={28} className="text-success mb-2" />,
      title: "Vulnerability Assessment",
      desc: "Using advanced tools and techniques to identify known and emerging vulnerabilities.",
    },
    {
      icon: <FaUsers size={28} className="text-warning mb-2" />,
      title: "Penetration Testing",
      desc: "Simulating real-world cyberattacks to test your defenses.",
    },
    {
      icon: <FaCheckCircle size={28} className="text-danger mb-2" />,
      title: "Reporting & Remediation Guidance",
      desc: "Providing a detailed report with prioritized fixes and recommendations.",
    },
    {
      icon: <FaSyncAlt size={28} className="text-info mb-2" />,
      title: "Post-Testing Support",
      desc: "Helping you implement remediation measures and re-test to confirm closure of vulnerabilities.",
    },
  ];

  const testimonials = [
    {
      quote:
        "First Cert’s VAPT services helped us uncover critical vulnerabilities we weren’t aware of. Their detailed reporting and guidance made remediation easy.",
      name: "Anna poorani",
      role: "Compliance Officer, Connected Value Health",
    },
    {
      quote:
        "The professionalism and depth of knowledge from First Cert during our VAPT engagement were outstanding. They simulated real-world threats with precision.",
      name: "Aisha Rahman",
      role: "CISO, SecureTech Global",
    },
    {
      quote:
        "We valued First Cert’s clear communication and structured approach to penetration testing. It gave us confidence in our systems’ security.",
      name: "David Fernandes",
      role: "CEO, Prime Logistics Solutions",
    },
    {
      quote:
        "Thanks to First Cert’s recommendations, we improved our security posture and passed subsequent compliance audits without issues.",
      name: "Priya Sharma",
      role: "Security Manager, DataShield Corp",
    },
    {
      quote:
        "First Cert has been more than a service provider; they’ve been a trusted partner in strengthening our cybersecurity defenses.",
      name: "Anil Mehta",
      role: "General Manager, NetSecure Systems",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          VAPT Certification | Vulnerability Testing Experts – First Cert
        </title>
        <meta
          name="description"
          content="Achieve VAPT Certification with First Cert. Detect vulnerabilities, prevent cyberattacks, and strengthen your security posture with expert-led testing and assured results."
        />
        <link rel="canonical" href="/vapt-certification" />
      </Helmet>

      <IndexNavbar />

      <header className="custom-header-common">
        <div className="background-image"></div>
        <div className="overlay d-flex flex-column justify-content-center align-items-center text-center">
          <div className="container-fluid px-0">
            <div className="row justify-content-center mx-0">
              <div className="col-12 col-xxl-11 px-0">
                {/* Title moved up with less margin */}
                <h1 className="fw-bolder display-4 display-md-3 display-lg-2 mb-2 mb-md-3 title-main text-decoration-none">
                  VAPT Certification
                </h1>
                <div className="text-content">
                  {/* Same text for both desktop and mobile */}
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mb-3 mb-md-4">
                    At <b>First Cert</b>, we take full ownership of your <b>VAPT
                    journey</b> — from consultation to the final security assessment
                    report. With our assured service guarantee, you can be
                    confident that vulnerabilities are identified, addressed,
                    and mitigated efficiently.
                  </p>
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mt-3 mt-md-4">
                    <b>VAPT</b> combines automated scanning and expert-led penetration
                    testing to uncover and fix security weaknesses before
                    attackers exploit them. It helps businesses of all sizes
                    validate their defenses, strengthen cybersecurity posture,
                    and ensure business continuity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="https://wa.me/918073358319?text=Thank you for contacting First Cert"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </header>

     <StatsWithForm/>

      <Container className="py-5 bg-light rounded-3 shadow-sm">
        <Row>
          <Col>
            <h2 className="mb-4 fw-bold text-primary text-center">
              Why VAPT Matters for Your Business
            </h2>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={6} className="px-4 mb-4 mb-lg-0">
            <p className="lead text-dark mb-4 text-center text-lg-start">
              Investing in VAPT sends a strong message: your organization takes
              cybersecurity seriously. Businesses that conduct regular VAPT
              benefit from:
            </p>
            <ul className="list-unstyled fs-5 text-start text-lg-start">
              <li className="mb-3">
                <span className="fw-semibold">✔ Early identification and</span>{" "}
                mitigation of security vulnerabilities
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Reduced risk of data breaches, ransomware, and
                </span>{" "}
                other cyber threats
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Improved compliance with standards
                </span>{" "}
                such as ISO 27001, PCI DSS, and GDPR
              </li>
              <li className="mb-3">
                <span className="fw-semibold">✔ Stronger security posture</span>{" "}
                across IT infrastructure
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Increased trust among customers,
                </span>{" "}
                partners, and regulators
              </li>
            </ul>
            <p className="text-muted fs-5 mt-4 text-center text-lg-start">
              In today’s threat landscape, regular VAPT is essential to maintain
              resilience and meet compliance requirements.
            </p>
          </Col>

          <Col lg={6} className="text-center">
            <img
              src={vapt}
              alt="vapt"
              className="img-fluid rounded-4 shadow-lg"
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>

      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold text-primary mb-4">
            Our Approach to VAPT Services
          </h2>

          <p className="text-center text-dark fw-semibold mb-5 px-md-5">
            At{" "}
            <Link to="/" className="text-decoration-none">
              First Cert
            </Link>
            , we make the VAPT process simple, transparent, and tailored to your
            business needs. Our experts guide you through:
          </p>

          <div
            className="d-flex justify-content-center flex-wrap"
            style={{ gap: "20px" }}
          >
            {steps.map((step, idx) => (
              <Card
                key={idx}
                className="border-0 shadow-sm text-center p-3 rounded-4"
                style={{
                  width: "200px",
                  minHeight: "220px",
                }}
              >
                <div className="d-flex justify-content-center align-items-center mb-2">
                  {step.icon}
                </div>
                <Card.Body className="p-2">
                  <Card.Title
                    className="fw-bold mb-1"
                    style={{ fontSize: "1rem" }}
                  >
                    {step.title}
                  </Card.Title>
                  <Card.Text
                    className="text-dark"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {step.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-5 bg-primary bg-gradient text-white">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="p-5 rounded-4 shadow-lg bg-white text-dark text-center">
                <h2 className="fw-bold text-primary mb-4">
                  Your Trusted VAPT Partner
                </h2>
                <p className="lead mb-4">
                  With <Link to="/">First Cert</Link>, you get more than just a
                  testing service — you get a cybersecurity partner dedicated to
                  protecting your organization’s assets. Our expertise, tailored
                  approach, and industry-specific solutions ensure you
                  strengthen your defenses without disrupting operations.
                </p>
                <p className="mb-4">
                  If you’re ready to uncover vulnerabilities, improve your
                  cybersecurity posture, and comply with regulatory
                  requirements, contact First Cert today to start your VAPT
                  journey.
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  className="fw-bold px-4 py-2"
                  style={{ borderRadius: "30px" }}
                  as={Link}
                  to="/contact"
                >
                  Contact Us
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row>
            {features.map((feature, index) => (
              <Col key={index} md={6} lg={3} className="mb-5">
                <Card className="h-100 shadow-sm border-0 feature-card text-center p-3">
                  <div>{feature.icon}</div>
                  <Card.Body>
                    <Card.Title className="fw-bold">{feature.title}</Card.Title>
                    <Card.Text className="mt-3">{feature.desc}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5 bg-primary text-white text-center">
        <Container>
          <h4 className="d-inline me-4 mb-0">
            Apply for Your Certification Today
          </h4>
          <Button
            variant="light"
            className="fw-bold ml-3"
            as={Link}
            to="/contact"
          >
            Register Now
          </Button>
        </Container>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold text-primary mb-5">
            What Our Clients Say
          </h2>

          <div className="row g-4 justify-content-center">
            {testimonials.map((t, i) => (
              <div className="col-md-4" key={i}>
                <div
                  className="card h-100 border-0 shadow-lg text-center p-4 rounded-4"
                  style={{
                    backgroundColor: "rgba(0, 123, 255, 0.1)",
                    boxShadow: "0 0.5rem 1rem rgba(0, 123, 255, 0.15)",
                  }}
                >
                  <i className="bi bi-quote fs-1 text-primary mb-3"></i>
                  <blockquote className="fst-italic text-primary-emphasis mb-4">
                    {t.quote}
                  </blockquote>
                  <h5 className="fw-bold text-primary mb-1">{t.name}</h5>
                  <small className="text-primary-emphasis">{t.role}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DemoFooter />
    </div>
  );
}

export default VaptCertification;
