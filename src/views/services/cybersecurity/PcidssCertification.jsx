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
import pcidss from "../../../assets/img/services/pcidss.webp";
import StatsWithForm from "views/index-sections/StatsWithForm";

function PcidssCertification() {
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
      desc: "Assessing your current payment security measures against PCI DSS requirements.",
    },
    {
      icon: <FaFileAlt size={28} className="text-success mb-2" />,
      title: "Documentation & Implementation",
      desc: "Creating and integrating security policies, controls, and procedures to ensure compliance.",
    },
    {
      icon: <FaUsers size={28} className="text-warning mb-2" />,
      title: "Internal Audits & Training",
      desc: "Preparing your team for the certification process and ensuring ongoing awareness.",
    },
    {
      icon: <FaCheckCircle size={28} className="text-danger mb-2" />,
      title: "Certification Audit Support",
      desc: "Coordinating with accredited certification bodies for a smooth audit experience.",
    },
    {
      icon: <FaSyncAlt size={28} className="text-info mb-2" />,
      title: "Post-Certification Support",
      desc: "Helping you maintain compliance through regular reviews and updates.",
    },
  ];

  const testimonials = [
    {
      quote:
        "First Cert made our PCI DSS compliance journey straightforward and efficient. Their step-by-step guidance ensured we met all requirements ahead of schedule.",
      name: "Ravi Shankar",
      role: "IT Security Manager, PayNet Solutions",
    },
    {
      quote:
        "The professionalism and depth of knowledge from First Cert during our PCI DSS project were outstanding. They handled everything from gap analysis to audit support seamlessly.",
      name: "Aisha Rahman",
      role: "Compliance Head, SecurePay Technologies",
    },
    {
      quote:
        "We valued First Cert’s expertise in navigating complex PCI DSS controls. They made the entire process clear and manageable.",
      name: "David Fernandes",
      role: "CEO, Prime Logistics Solutions",
    },
    {
      quote:
        "Thanks to First Cert’s training, our team is confident in maintaining PCI DSS compliance and safeguarding customer payment data.",
      name: "Priya Sharma",
      role: "Security Manager, MetroCard Services",
    },
    {
      quote:
        "First Cert has been more than a consultant; they’ve been a trusted partner in securing our payment systems and ensuring ongoing compliance.",
      name: "Anil Mehta",
      role: "General Manager, FinSecure Solutions",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          PCI DSS Certification | Payment Data Security Experts – First Cert
        </title>
        <meta
          name="description"
          content="Achieve PCI DSS Certification with First Cert. Protect cardholder data, ensure payment security, and boost customer trust with expert consulting and guaranteed compliance."
        />
        <link rel="canonical" href="/pci-dss-certification" />
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
                  PCI DSS Certification
                </h1>
                <div className="text-content">
                  {/* Same text for both desktop and mobile */}
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mb-3 mb-md-4">
                    At <b>First Cert</b>, we take complete ownership of your <b>PCI
                    DSS certification journey</b> — from consultation to
                    certification. With our assured certification guarantee, you
                    can be confident of achieving compliance efficiently and
                    without hassle.
                  </p>
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mt-3 mt-md-4">
                    <b>PCI DSS</b> is a global standard designed to secure cardholder
                    data and strengthen payment systems. It defines strict
                    security controls and policies to prevent breaches and
                    fraud. Whether you’re a merchant, service provider, or
                    financial institution, PCI DSS compliance enhances your
                    credibility, protects customer data, and minimizes financial
                    and reputational risks.
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
              Why PCI DSS Matters for Your Business
            </h2>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={6} className="px-4 mb-4 mb-lg-0">
            <p className="lead text-dark mb-4 text-center text-lg-start">
              Achieving PCI DSS compliance sends a strong message: your
              organization prioritizes payment security and customer trust.
              Certified companies benefit from:
            </p>
            <ul className="list-unstyled fs-5 text-start text-lg-start">
              <li className="mb-3">
                <span className="fw-semibold">✔ Enhanced credibility in</span>{" "}
                the payment industry
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Reduced risk of cardholder
                </span>{" "}
                data breaches and fraud
              </li>
              <li className="mb-3">
                <span className="fw-semibold">✔ Compliance with</span> major
                card brands requirements (Visa, MasterCard, AmEx, Discover, JCB)
              </li>
              <li className="mb-3">
                <span className="fw-semibold">✔ Stronger security posture</span>{" "}
                across networks and systems
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Greater opportunities to work with
                </span>{" "}
                payment processors and global clients
              </li>
            </ul>
            <p className="text-muted fs-5 mt-4 text-center text-lg-start">
              In today’s digital economy, PCI DSS compliance is often a
              prerequisite for doing business in the payment ecosystem.
            </p>
          </Col>

          <Col lg={6} className="text-center">
            <img
              src={pcidss}
              alt="pcidss"
              className="img-fluid rounded-4 shadow-lg"
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>

      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold text-primary mb-4">
            Our Approach to PCI DSS Certification
          </h2>

          <p className="text-center text-dark fw-semibold mb-5 px-md-5">
            At{" "}
            <Link to="/" className="text-decoration-none">
              First Cert
            </Link>
            , we make the PCI DSS compliance process simple, transparent, and
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
                  Your Trusted PCI DSS Partner
                </h2>
                <p className="lead mb-4">
                  With First Cert, you get more than just compliance assistance
                  — you get a partner committed to protecting your customers’
                  payment data and your business reputation. Our expertise,
                  industry-specific solutions, and client-focused approach mean
                  you can achieve certification quickly and without disrupting
                  operations.
                </p>
                <p className="mb-4">
                  If you’re ready to secure your payment systems, enhance
                  customer confidence, and expand your business opportunities,
                  contact First Cert today to start your PCI DSS certification
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

export default PcidssCertification;
