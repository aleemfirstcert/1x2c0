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
import soc2 from "../../../assets/img/services/soc2.webp";
import StatsWithForm from "views/index-sections/StatsWithForm";

function Soc2Certification() {
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
      desc: "Assessing current controls against SOC 2 Trust Services Criteria.",
    },
    {
      icon: <FaFileAlt size={28} className="text-success mb-2" />,
      title: "Documentation & Implementation",
      desc: "Developing and enhancing policies, processes, and controls for compliance.",
    },
    {
      icon: <FaUsers size={28} className="text-warning mb-2" />,
      title: "Training & Awareness",
      desc: "Educating your team on SOC 1 requirements and best practices.",
    },
    {
      icon: <FaCheckCircle size={28} className="text-danger mb-2" />,
      title: "Audit Preparation",
      desc: "Guiding you through readiness assessments and coordinating with independent auditors.",
    },
    {
      icon: <FaSyncAlt size={28} className="text-info mb-2" />,
      title: "Post-Certification Support",
      desc: "Helping maintain compliance and prepare for future audits.",
    },
  ];

  const testimonials = [
    {
      quote:
        "First Cert’s Soc services helped us uncover critical vulnerabilities we weren’t aware of. Their detailed reporting and guidance made remediation easy.",
      name: "Anna poorani",
      role: "Compliance Officer, Connected Value Health",
    },
    {
      quote:
        "The professionalism and depth of expertise from First Cert during our SOC 2 readiness and audit process were outstanding.",
      name: "Aisha Rahman",
      role: "CTO, TrustTech Solutions",
    },
    {
      quote:
        "We appreciated how First Cert simplified the complex SOC 2 process into actionable, manageable steps.",
      name: "David Fernandes",
      role: "CEO, Prime Cloud Services",
    },
    {
      quote:
        "Thanks to First Cert’s training, our team now understands SOC 2 requirements better and is confident in maintaining compliance.",
      name: "Priya Sharma",
      role: "Security Manager, InfoShield Technologies",
    },
    {
      quote:
        "First Cert has been more than a consultant; they’ve been a strategic partner in helping us strengthen our security framework.",
      name: "Anil Mehta",
      role: "General Manager, CoreData Systems",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          SOC 2 Certification | Data Security & Compliance Experts – First Cert
        </title>
        <meta
          name="description"
          content="Achieve SOC 2 Certification with First Cert. Strengthen data security, enhance client trust, and ensure compliance through expert guidance and assured certification support."
        />
        <link rel="canonical" href="/soc-2-certification" />
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
                  SOC 2 Certification
                </h1>
                <div className="text-content">
                  {/* Same text for both desktop and mobile */}
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mb-3 mb-md-4">
                    At <b>First Cert</b>, we take complete ownership of your <b>SOC
                    2 certification journey</b> — from consultation to final
                    reporting. With our assured certification guarantee, your
                    organization can achieve compliance quickly and seamlessly.
                  </p>
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mt-3 mt-md-4">
                    <b>SOC 2 (System and Organization Controls 2)</b>, developed by the
                    <b> AICPA</b>, is a globally recognized standard that evaluates how
                    service providers manage data security, availability,
                    integrity, confidentiality, and privacy. Whether you’re a
                    cloud provider, SaaS company, or IT service firm, SOC 2
                    certification strengthens client trust and demonstrates your
                    commitment to safeguarding sensitive information.
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
              Why SOC 2 Matters for Your Business
            </h2>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={6} className="px-4 mb-4 mb-lg-0">
            <p className="lead text-dark mb-4 text-center text-lg-start">
              Achieving SOC 2 certification sends a strong message: your
              organization values data security, privacy, and compliance.
              Certified companies benefit from:
            </p>
            <ul className="list-unstyled fs-5 text-start text-lg-start">
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Enhanced credibility with clients,{" "}
                </span>{" "}
                auditors, and regulators
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Reduced risk of data breaches
                </span>{" "}
                and security incidents
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Improved internal processes
                </span>{" "}
                and governance practices
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Greater competitive advantage
                </span>{" "}
                when bidding contracts
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Meeting contractual obligations
                </span>{" "}
                for data protection with clients in regulated industries
              </li>
            </ul>
            <p className="text-muted fs-5 mt-4 text-center text-lg-start">
              In today’s digital economy, SOC 2 is a key differentiator for
              service organizations handling sensitive customer information.
            </p>
          </Col>

          <Col lg={6} className="text-center">
            <img
              src={soc2}
              alt="soc2"
              className="img-fluid rounded-4 shadow-lg"
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>

      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold text-primary mb-4">
            Our Approach to SOC 2 Certification
          </h2>

          <p className="text-center text-dark fw-semibold mb-5 px-md-5">
            At{" "}
            <Link to="/" className="text-decoration-none">
              First Cert
            </Link>
            , we make the SOC 2 certification process simple, transparent, and
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
                  Your Trusted SOC 2 Partner
                </h2>
                <p className="lead mb-4">
                  With <Link to="/">First Cert</Link>, you gain more than just
                  certification assistance — you gain a partner committed to
                  safeguarding customer data and building trust. Our expertise,
                  tailored approach, and industry-specific solutions ensure you
                  achieve certification efficiently and without disruption.
                </p>
                <p className="mb-4">
                  If you’re ready to demonstrate your commitment to security and
                  privacy, enhance client trust, and open new business
                  opportunities, contact First Cert today to start your SOC 2
                  certification journey.
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

export default Soc2Certification;
