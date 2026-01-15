import { React, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import cmmi from "../../assets/img/services/cmmi.webp";
import StatsWithForm from "views/index-sections/StatsWithForm";

function CmmiCertification() {
  const history = useHistory();
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
      desc: "Enjoy round-the-clock access to our support team, after your certification is complete.",
    },
    {
      icon: <FaShieldAlt size={40} className="text-danger mb-3" />,
      title: "Guaranteed →  Assured Certification",
      desc: "With First Cert, your certification is assured — no certification, no payment.",
    },
  ];

  const steps = [
    {
      icon: <FaSearch size={28} className="text-primary mb-2" />,
      title: "Gap Analysis",
      desc: "Assessing current processes against CMMI model requirements.",
    },
    {
      icon: <FaFileAlt size={28} className="text-success mb-2" />,
      title: "Process Documentation & Implementation",
      desc: "Creating and standardizing procedures that align with best practices.",
    },
    {
      icon: <FaUsers size={28} className="text-warning mb-2" />,
      title: "Training & Awareness",
      desc: "Equipping your team with knowledge to implement and maintain CMMI practices.",
    },
    {
      icon: <FaCheckCircle size={28} className="text-danger mb-2" />,
      title: "Appraisal Preparation",
      desc: "Guiding you through the SCAMPI appraisal process for successful certification.",
    },
    {
      icon: <FaSyncAlt size={28} className="text-info mb-2" />,
      title: "Post-Certification Support",
      desc: "Helping maintain maturity levels through continuous improvement initiatives.",
    },
  ];

  const testimonials = [
    {
      quote:
        "First Cert’s VAPT services helped us uncover critical vulnerabilities we weren’t aware of. Their detailed reporting and guidance made remediation easy.",
      name: "Ravi Shankar",
      role: "Delivery Manager, ProTech Solutions",
    },
    {
      quote:
        "The professionalism and clear guidance from First Cert during our CMMI appraisal were invaluable. They handled everything from process improvement to final appraisal.",
      name: "Aisha Rahman",
      role: "Quality Head, NextWave Technologies",
    },
    {
      quote:
        "We appreciated First Cert’s ability to simplify complex CMMI requirements into clear, actionable steps.",
      name: "David Fernandes",
      role: "CEO, Prime IT Services",
    },
    {
      quote:
        "Thanks to First Cert’s training and coaching, our teams are better aligned with business goals and more efficient in delivery.",
      name: "Priya Sharma",
      role: "Quality Manager, TechServe Ltd",
    },
    {
      quote:
        "First Cert has been more than a consultant; they’ve been a strategic partner in enhancing our operational maturity.",
      name: "Anil Mehta",
      role: "General Manager, BuildRight Systems",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          CMMI Certification | Capability Maturity Experts – First Cert
        </title>
        <meta
          name="description"
          content="Achieve CMMI Certification with First Cert. Improve process maturity, reduce risks, and enhance efficiency through expert guidance and assured certification support."
        />
        <link rel="canonical" href="/cmmi-certification" />
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
                  CMMI Certification
                </h1>
                <div className="text-content">
                  {/* Same text for both desktop and mobile */}
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mb-3 mb-md-4">
                    At <b>First Cert</b>, we take complete ownership of your{" "}
                    <b>CMMI certification journey</b> — from consultation to
                    certification. With our assured certification guarantee,
                    your organization can achieve the desired maturity level
                    efficiently and without hassle.
                  </p>
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mt-3 mt-md-4">
                    <b>CMMI (Capability Maturity Model Integration)</b> is a globally
                    recognized framework for enhancing process performance and
                    operational excellence. It helps organizations standardize
                    practices, minimize risks, and deliver consistent quality.
                    Whether you’re a startup or an enterprise, CMMI
                    certification showcases your commitment to continuous
                    improvement and business excellence.
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
              Why CMMI Matters for Your Business
            </h2>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={6} className="px-4 mb-4 mb-lg-0">
            <p className="lead text-dark mb-4 text-center text-lg-start">
              Achieving CMMI certification sends a strong message: your
              organization values process efficiency and quality delivery.
              Certified companies benefit from:
            </p>
            <ul className="list-unstyled fs-5 text-start text-lg-start">
              <li className="mb-3">
                <span className="fw-semibold">✔ Enhanced reputation and</span>{" "}
                competitive advantage in the marketplace
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Improved project predictability and
                </span>{" "}
                reduced delivery risks
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Increased customer satisfaction
                </span>{" "}
                and repeat business
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Stronger alignment between business goals
                </span>{" "}
                and operational practices
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Easier entry into high-value contracts,
                </span>{" "}
                including government and international projects
              </li>
            </ul>
            <p className="text-muted fs-5 mt-4 text-center text-lg-start">
              In today’s competitive market, CMMI certification is often a key
              differentiator for winning business.
            </p>
          </Col>

          <Col lg={6} className="text-center">
            <img
              src={cmmi}
              alt="cmmi"
              className="img-fluid rounded-4 shadow-lg"
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>

      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold text-primary mb-4">
            Our Approach to CMMI Certification
          </h2>

          <p className="text-center text-dark fw-semibold mb-5 px-md-5">
            At{" "}
            <Link to="/" className="text-decoration-none">
              First Cert
            </Link>
            , we make the CMMI certification process simple, transparent, and
            tailored to your organizational needs. Our consultants guide you
            through:
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
                  Your Trusted CMMI Partner
                </h2>
                <p className="lead mb-4">
                  With <Link to="/">First Cert</Link>, you gain more than just a
                  certification service provider — you gain a partner committed
                  to your organization’s growth and efficiency. Our experience,
                  customized approach, and industry expertise ensure you achieve
                  certification with minimal disruption to your operations.
                </p>
                <p className="mb-4">
                  If you’re ready to optimize processes, improve delivery
                  outcomes, and enhance customer satisfaction, contact First
                  Cert today to start your CMMI certification journey.
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

export default CmmiCertification;
