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
import soc1 from "../../../assets/img/services/soc1.webp";
import StatsWithForm from "views/index-sections/StatsWithForm";

function Soc1Certification() {
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
      desc: "Assessing current controls against SOC 1 requirements.",
    },
    {
      icon: <FaFileAlt size={28} className="text-success mb-2" />,
      title: "Documentation & Implementation",
      desc: "Developing and enhancing policies, processes, and controls for compliance.",
    },
    {
      icon: <FaUsers size={28} className="text-warning mb-2" />,
      title: "Training & Awareness",
      desc: "Educating your team on SOC 1 control objectives and best practices.",
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
        "First Cert’s VAPT services helped us uncover critical vulnerabilities we weren’t aware of. Their detailed reporting and guidance made remediation easy.",
      name: "Anna poorani",
      role: "Compliance Officer, Connected Value Health",
    },
    {
      quote:
        "The professionalism and expertise from First Cert during our SOC 1 readiness and audit process were exceptional.",
      name: "Aisha Rahman",
      role: "CFO, FinTech Secure Services",
    },
    {
      quote:
        "We appreciated First Cert’s ability to simplify complex CMMI requirements into clear, actionable steps.",
      name: "David Fernandes",
      role: "CEO, Prime Service Providers",
    },
    {
      quote:
        "Thanks to First Cert’s training, our team now understands control objectives better and is confident in maintaining compliance.",
      name: "Priya Sharma",
      role: "Risk Manager, DataTrust Systems",
    },
    {
      quote:
        "First Cert has been more than a consultant; they’ve been a trusted partner in building our compliance framework.",
      name: "Anil Mehta",
      role: "General Manager, CoreCom Solutions",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          SOC 1 Certification | Assured Compliance Experts – First Cert
        </title>
        <meta
          name="description"
          content="Achieve SOC 1 Certification with First Cert. Strengthen financial controls, build client trust, and ensure regulatory compliance through expert guidance and guaranteed support."
        />
        <link rel="canonical" href="/soc-1-certification" />
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
                  SOC 1 Certification
                </h1>
                <div className="text-content">
                  {/* Same text for both desktop and mobile */}
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mb-3 mb-md-4">
                    At <b>First Cert</b>, we take complete ownership of your <b>SOC
                    1 certification journey</b> — from consultation to final
                    reporting. With our assured certification guarantee, your
                    organization can achieve compliance efficiently and without
                    hurdles.
                  </p>
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mt-3 mt-md-4">
                    <b>SOC 1 (System and Organization Controls 1)</b>, developed by the
                    <b> AICPA</b>, is a globally recognized standard that evaluates
                    internal controls over financial reporting. It’s vital for
                    service providers such as payroll processors, IT firms, and
                    data centers. Achieving SOC 1 certification builds client
                    confidence, ensures regulatory compliance, and enhances your
                    credibility in the market.
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
              Why SOC 1 Matters for Your Business
            </h2>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={6} className="px-4 mb-4 mb-lg-0">
            <p className="lead text-dark mb-4 text-center text-lg-start">
              Achieving SOC 1 certification sends a strong message: your
              organization values transparency, compliance, and trust. Certified
              companies benefit from:
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
                  ✔ Reduced risk of control failures
                </span>{" "}
                affecting financial reporting
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Improved internal processes
                </span>{" "}
                and accountability
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Greater competitive advantage
                </span>{" "}
                when bidding for large contracts
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Meeting contractual obligations
                </span>{" "}
                with clients in regulated industries
              </li>
            </ul>
            <p className="text-muted fs-5 mt-4 text-center text-lg-start">
              In today’s compliance-driven market, SOC 1 is a must-have for
              service organizations handling financial data.
            </p>
          </Col>

          <Col lg={6} className="text-center">
            <img
              src={soc1}
              alt="soc1"
              className="img-fluid rounded-4 shadow-lg"
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>

      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold text-primary mb-4">
            Our Approach to SOC 1 Certification
          </h2>

          <p className="text-center text-dark fw-semibold mb-5 px-md-5">
            At{" "}
            <Link to="/" className="text-decoration-none">
              First Cert
            </Link>
            , we make the SOC 1 certification process simple, transparent, and
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
                  Your Trusted SOC 1 Partner
                </h2>
                <p className="lead mb-4">
                  With <Link to="/">First Cert</Link>, you gain more than just
                  certification assistance — you gain a partner committed to
                  strengthening your internal controls and client trust. Our
                  expertise, tailored approach, and industry-specific solutions
                  ensure you achieve certification efficiently and without
                  disruption.
                </p>
                <p className="mb-4">
                  If you’re ready to demonstrate your commitment to control
                  excellence, enhance client trust, and open new business
                  opportunities, contact First Cert today to start your SOC 1
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

export default Soc1Certification;
