import { React, useEffect } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import { useHistory } from "react-router-dom";
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
import Aos from "aos";
import "aos/dist/aos.css";
import hipaa from "../../assets/img/services/hipaa.webp";
import { Helmet } from "react-helmet";
import StatsWithForm from "views/index-sections/StatsWithForm";

function HipaaCertification() {
  useEffect(() => {
    Aos.init();
  }, []);
  const history = useHistory();

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
      desc: "Enjoy round-the-clock access to our support team, even after your certification is complete.",
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
      desc: "Reviewing your current privacy and security measures against HIPAA requirements.",
    },
    {
      icon: <FaFileAlt size={28} className="text-success mb-2" />,
      title: "Documentation & Implementation",
      desc: "Creating policies, risk assessments, and safeguards to ensure compliance.",
    },
    {
      icon: <FaUsers size={28} className="text-warning mb-2" />,
      title: "Internal Audits & Training",
      desc: "Educating your workforce on HIPAA rules and preparing them for real-world compliance.",
    },
    {
      icon: <FaCheckCircle size={28} className="text-danger mb-2" />,
      title: "Certification Audit Support",
      desc: "Coordinating with accredited certification bodies for a smooth audit process.",
    },
    {
      icon: <FaSyncAlt size={28} className="text-info mb-2" />,
      title: "Post-Certification Support",
      desc: "Maintaining compliance through updates, monitoring, and regular evaluations.",
    },
  ];

  const testimonials = [
    {
      quote:
        "First Cert made our HIPAA compliance journey seamless and efficient. Their structured approach helped us meet requirements faster than expected.",
      name: "Ravi Shankar",
      role: "Compliance Officer, MediSecure Solutions",
    },
    {
      quote:
        "The expertise and attention to detail from First Cert were outstanding. They managed everything from risk assessment to final certification with precision.",
      name: "Aisha Rahman",
      role: "IT Director, HealthNet Technologies",
    },
    {
      quote:
        "We valued the clear, actionable steps First Cert provided for HIPAA compliance. They made a complex process simple to follow.",
      name: "David Fernandes",
      role: "CEO, Prime Logistics Solutions",
    },
    {
      quote:
        "Thanks to First Cert’s training, our team is fully prepared to maintain HIPAA compliance and protect patient data.",
      name: "Priya Sharma",
      role: "Privacy Manager, CareWell Hospitals",
    },
    {
      quote:
        "First Cert has been more than a consultant; they’ve been a trusted compliance partner in safeguarding our healthcare operations.",
      name: "Anil Mehta",
      role: "General Manager, BuildRight Constructions",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          HIPAA Certification | Healthcare Data Security Experts – First Cert
        </title>
        <meta
          name="description"
          content="Achieve HIPAA Certification with First Cert. Protect patient data, ensure compliance, and strengthen trust with expert consulting and guaranteed certification support."
        />
        <link rel="canonical" href="/hipaa-certification" />
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
                  HIPAA Certification
                </h1>
                <div className="text-content">
                  {/* Same text for both desktop and mobile */}
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mb-3 mb-md-4">
                    At <b>First Cert</b>, we take full ownership of your{" "}
                    <b>HIPAA certification journey</b> — from consultation to
                    certification. With our assured certification guarantee,
                    your organization can achieve compliance quickly and without
                    hassle.
                  </p>
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mt-3 mt-md-4">
                    <b>HIPAA</b> is a U.S. regulation that safeguards the
                    confidentiality and integrity of protected health
                    information (PHI). It sets strict standards for healthcare
                    providers, insurers, and service partners to ensure patient
                    privacy, prevent data breaches, and maintain trust. Whether
                    you’re a hospital, clinic, or healthcare service provider,
                    HIPAA compliance enhances credibility and reduces legal
                    risks.
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
              Why HIPAA Matters for Your Business
            </h2>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={6} className="px-4 mb-4 mb-lg-0">
            <p className="lead text-dark mb-4 text-center text-lg-start">
              Achieving HIPAA compliance sends a strong message: your
              organization prioritizes patient privacy and data security.
              Certified companies benefit from:
            </p>
            <ul className="list-unstyled fs-5 text-start text-lg-start">
              <li className="mb-3">
                <span className="fw-semibold">✔ Enhanced credibility and</span>{" "}
                trust among patients and partners
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Reduced risk of data breaches
                </span>{" "}
                and regulatory penalties
              </li>
              <li className="mb-3">
                <span className="fw-semibold">✔ Compliance with</span> U.S.
                federal healthcare privacy requirements
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Improved internal policies
                </span>{" "}
                and security controls
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Greater ability to work with
                </span>{" "}
                U.S.-based healthcare organizations
              </li>
            </ul>
            <p className="text-muted fs-5 mt-4 text-center text-lg-start">
              In today’s data-sensitive healthcare environment, HIPAA compliance
              is a key factor in securing partnerships and long-term growth.
            </p>
          </Col>

          <Col lg={6} className="text-center">
            <img
              src={hipaa}
              alt="hipaa"
              className="img-fluid rounded-4 shadow-lg"
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>

      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold text-primary mb-4">
            Our Approach to HIPAA Certification
          </h2>

          <p className="text-center text-dark fw-semibold mb-5 px-md-5">
            At{" "}
            <Link to="/" className="text-decoration-none">
              First Cert
            </Link>
            , we make the HIPAA compliance process simple, transparent, and
            tailored to your operations. Our consultants guide you through:
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
                  Your Trusted HIPAA Partner
                </h2>
                <p className="lead mb-4">
                  With First Cert, you get more than just compliance assistance
                  — you get a partner committed to protecting your patients’
                  data and your organization’s integrity. Our expertise,
                  healthcare-specific solutions, and client-first approach mean
                  you can achieve certification quickly and without disrupting
                  daily operations.
                </p>
                <p className="mb-4">
                  If you’re ready to secure patient data, ensure compliance, and
                  boost your healthcare business’s credibility, contact First
                  Cert today to start your HIPAA certification journey.
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

export default HipaaCertification;
