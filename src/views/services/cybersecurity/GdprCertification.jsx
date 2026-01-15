import React, { useEffect } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import Aos from "aos";
import "aos/dist/aos.css";
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
import "bootstrap/dist/css/bootstrap.min.css";
import { Helmet } from "react-helmet";
import gdpr from "../../../assets/img/services/gdpr.webp";
import StatsWithForm from "views/index-sections/StatsWithForm";

function GdprCertification() {
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
      desc: "Reviewing your current data protection practices against GDPR requirements.",
    },
    {
      icon: <FaFileAlt size={28} className="text-success mb-2" />,
      title: "Documentation & Implementation",
      desc: "Creating policies, records, and procedures to ensure compliance.",
    },
    {
      icon: <FaUsers size={28} className="text-warning mb-2" />,
      title: "Internal Audits & Training",
      desc: "Equipping your team with the knowledge and skills to maintain GDPR standards.",
    },
    {
      icon: <FaCheckCircle size={28} className="text-danger mb-2" />,
      title: "Certification Audit Support",
      desc: "Coordinating with accredited certification bodies for a seamless audit process.",
    },
    {
      icon: <FaSyncAlt size={28} className="text-info mb-2" />,
      title: "Post-Certification Support",
      desc: "Helping you maintain compliance through regular updates and surveillance checks.",
    },
  ];

  const testimonials = [
    {
      quote:
        "First Cert made our GDPR compliance journey smooth and straightforward. Their detailed guidance helped us meet requirements ahead of schedule.",
      name: "Ravi Shankar",
      role: "CTO, DataSecure Solutions",
    },
    {
      quote:
        "The professionalism and expertise from First Cert during our GDPR project were exceptional. They guided us from gap analysis to final certification.",
      name: "Aisha Rahman",
      role: "IT Director, NexaSoft Technologies",
    },
    {
      quote:
        "We appreciated the team’s deep understanding of GDPR. They simplified a complex process into clear, actionable steps.",
      name: "David Fernandes",
      role: "CEO, Prime Logistics Solutions",
    },
    {
      quote:
        "Thanks to First Cert’s training, our team is now confident in maintaining GDPR compliance and avoiding costly risks.",
      name: "Priya Sharma",
      role: "Compliance Manager, MediCare Hospitals",
    },
    {
      quote:
        "First Cert has been more than a consultant; they’ve been a trusted advisor in helping us meet stringent data protection standards.",
      name: "Anil Mehta",
      role: "General Manager, BuildRight Constructions",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          GDPR Certification | Data Privacy & Compliance Experts – First Cert
        </title>
        <meta
          name="description"
          content="Get GDPR Certified with First Cert. Protect customer data, ensure full compliance, and build lasting trust with expert guidance and guaranteed certification support."
        />
        <link rel="canonical" href="/gdpr-certification" />
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
                  GDPR Certification
                </h1>
                <div className="text-content">
                  {/* Same text for both desktop and mobile */}
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mb-3 mb-md-4">
                    At <b>First Cert</b>, we take complete ownership of your
                    <b>GDPR certification journey</b> — from consultation to
                    certification. With our assured certification guarantee,
                    your business can achieve compliance efficiently and without
                    hassle.
                  </p>
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mt-3 mt-md-4">
                    <b>GDPR</b> is more than a regulation — it’s a framework for
                    protecting personal data, ensuring transparency, and
                    building lasting trust with customers. The <b>General Data
                    Protection Regulation</b> applies to any organization handling
                    EU residents’ data, helping businesses strengthen data
                    security, avoid penalties, and enhance global credibility.
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
              Why GDPR Matters for Your Business
            </h2>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={6} className="px-4 mb-4 mb-lg-0">
            <p className="lead text-dark mb-4 text-center text-lg-start">
              Achieving GDPR compliance sends a strong message: your
              organization values privacy and data protection. Certified
              companies benefit from:
            </p>
            <ul className="list-unstyled fs-5 text-start text-lg-start">
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Enhanced brand credibility and
                </span>{" "}
                customer trust
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Reduced risk of data breaches
                </span>{" "}
                and costly fines
              </li>
              <li className="mb-3">
                <span className="fw-semibold">✔ Increased ability</span> to do
                business with EU-based clients
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Improved processes for handling
                </span>{" "}
                and protecting personal data
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Compliance with evolving privacy
                </span>{" "}
                regulations globally
              </li>
            </ul>
            <p className="text-muted fs-5 mt-4 text-center text-lg-start">
              In today’s privacy-conscious world, GDPR is often the deciding
              factor in securing major contracts and long-term partnerships.
            </p>
          </Col>

          <Col lg={6} className="text-center">
            <img
              src={gdpr}
              alt="gdpr"
              className="img-fluid rounded-4 shadow-lg"
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>

      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold text-primary mb-4">
            Our Approach to GDPR Certification
          </h2>

          <p className="text-center text-dark fw-semibold mb-5 px-md-5">
            At{" "}
            <Link to="/" className="text-decoration-none">
              First Cert
            </Link>
            , we make the GDPR compliance process simple, transparent, and
            tailored to your business needs. Our consultants guide you through:
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
                  Your Trusted GDPR Partner
                </h2>
                <p className="lead mb-4">
                  With{" "}
                  <Link to="/" className="text-decoration-none">
                    First Cert
                  </Link>
                  , you get more than just compliance assistance — you get a
                  partner dedicated to protecting your customers’ data and your
                  business reputation. Our expertise, industry-specific
                  solutions, and client-focused approach mean you can achieve
                  certification quickly and without disrupting your operations.
                </p>
                <p className="mb-4">
                  If you’re ready to safeguard your data, enhance customer
                  trust, and unlock new business opportunities, contact First
                  Cert today to start your GDPR certification journey.
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

export default GdprCertification;
