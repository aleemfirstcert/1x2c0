import React, { useEffect } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
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
import iso45001 from "../../../src/assets/img/services/iso-45001.webp";
import StatsWithForm from "views/index-sections/StatsWithForm";

function Iso45001Certification() {
  useEffect(() => {
    Aos.init();
  }, []);

  const features = [
    {
      icon: <FaChalkboardTeacher size={40} className="text-primary mb-3" />,
      title: "Training → Expert-Led Learning",
      desc: "Gain practical knowledge from experienced safety and compliance consultants across various industries.",
    },
    {
      icon: <FaFileAlt size={40} className="text-success mb-3" />,
      title: "Documentation → Structured Process Support",
      desc: "We follow a systematic approach to ensure your ISO 45001 documentation is clear, compliant, and audit-ready.",
    },
    {
      icon: <FaHeadset size={40} className="text-warning mb-3" />,
      title: "Support →  24/7 Assistance",
      desc: "Enjoy around-the-clock access to our support team, even after achieving certification.",
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
      desc: "Assessing your current health and safety practices against ISO 45001 standards.",
    },
    {
      icon: <FaFileAlt size={28} className="text-success mb-2" />,
      title: "Documentation & Implementation",
      desc: "Developing your OHS policy, procedures, and control measures.",
    },
    {
      icon: <FaUsers size={28} className="text-warning mb-2" />,
      title: "Internal Audits & Training",
      desc: "Preparing your team to maintain a culture of safety and compliance.",
    },
    {
      icon: <FaCheckCircle size={28} className="text-danger mb-2" />,
      title: "Certification Audit Support",
      desc: "Coordinating with accredited certification bodies for a smooth and successful audit.",
    },
    {
      icon: <FaSyncAlt size={28} className="text-info mb-2" />,
      title: "Post-Certification Support",
      desc: "Assisting with continuous improvement, monitoring, and surveillance audits.",
    },
  ];

  const testimonials = [
    {
      quote:
        "First Cert guided us through ISO 45001 with unmatched professionalism. Our workplace safety has improved drastically.",
      name: "Suresh Menon",
      role: "Safety Director, Titan Engineering Works",
    },
    {
      quote:
        "The First Cert team helped us achieve ISO 45001 certification smoothly. Their consultants are knowledgeable and dedicated.",
      name: "Fatima Ali",
      role: "HR Head, Orion Tech Systems",
    },
    {
      quote:
        "First Cert’s structured approach made our certification journey seamless. We now have a stronger safety culture.",
      name: "Harish Patel",
      role: "CEO, Nova Industrial Solutions",
    },
    {
      quote:
        "Thanks to First Cert’s training, our employees are more aware of health and safety protocols than ever before.",
      name: "Kavya Iyer",
      role: "Compliance Officer, MedCare Global Hospitals",
    },
    {
      quote:
        "First Cert has been an excellent partner for our ISO 45001 implementation — professional, responsive, and results-oriented.",
      name: "Arjun Desai",
      role: "Operations Manager, GreenEdge Constructions Pvt. Ltd",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          {" "}
          ISO 45001 Certification | Workplace Safety & OHSMS Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Get ISO 45001 Certification with First Cert. Experts in Occupational Health & Safety Management Systems help you build a safe, compliant workplace."
        />
        <link rel="canonical" href="/environment" />
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
                  ISO 45001 Certification
                </h1>
                <div className="text-content">
                  {/* Same text for both desktop and mobile */}
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mb-3 mb-md-4">
                    At <b>First Cert</b>, we take full ownership of your{" "}
                    <b>ISO 45001 certification journey</b> — from consultation
                    to final audit. With our assurance of certification, you can
                    trust that your organization will achieve compliance
                    efficiently, ensuring a safer workplace for everyone.
                  </p>
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mt-3 mt-md-4">
                    <b>ISO 45001</b> is the international standard for{" "}
                    <b>
                      Occupational Health and Safety Management Systems (OHSMS)
                    </b>
                    . It provides a structured framework for identifying,
                    controlling, and reducing health and safety risks in the
                    workplace. Whether you’re in manufacturing, construction,
                    healthcare, or any service sector, ISO 45001 helps your
                    organization create a safe, compliant work environment that
                    meets legal and stakeholder expectations.
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
              Why ISO 45001 Matters for Your Business
            </h2>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={6} className="px-4 mb-4 mb-lg-0">
            <p className="lead text-dark mb-4 text-center text-lg-start">
              Achieving ISO 45001 certification demonstrates your commitment to
              employee welfare, safety management, and corporate responsibility.
              Certified organizations benefit from:
            </p>
            <ul className="list-unstyled fs-5 text-start text-lg-start">
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Reduced workplace incidents
                </span>{" "}
                and accidents
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Enhanced compliance with local
                </span>{" "}
                and international safety laws
              </li>
              <li className="mb-3">
                <span className="fw-semibold">✔ Improved employee morale</span>{" "}
                and productivity
              </li>
              <li className="mb-3">
                <span className="fw-semibold">✔ Lower insurance premiums</span>{" "}
                and operational costs
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Strengthened brand image and trust among
                </span>{" "}
                clients and stakeholders
              </li>
            </ul>
            <p className="text-muted fs-5 mt-4 text-center text-lg-start">
              In today’s competitive market, <b>ISO 45001 certification</b> is
              not just a legal necessity — it’s a strategic advantage for
              sustainable growth and operational excellence.
            </p>
          </Col>

          <Col lg={6} className="text-center">
            <img
              src={iso45001}
              alt="iso 45001"
              className="img-fluid rounded-4 shadow-lg"
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>

      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold text-primary mb-4">
            Our Approach to ISO 45001 Certification
          </h2>

          <p className="text-center text-dark fw-semibold mb-5 px-md-5">
            At{" "}
            <Link to="/" className="text-decoration-none">
              First Cert
            </Link>
            , we simplify the certification process through a step-by-step
            approach tailored to your organization’s needs:
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
                  Your Trusted ISO Partner
                </h2>
                <p className="lead mb-4 ">
                  With <b>First Cert</b>, you gain more than a certification
                  consultant — you gain a safety partner committed to helping
                  you build a zero-harm workplace. Our industry-specific
                  expertise, transparent approach, and guaranteed results make
                  the ISO 45001 process efficient and reliable.
                </p>
                <p className="mb-4">
                  If you’re ready to protect your employees, enhance safety
                  compliance, and boost business credibility, contact{" "}
                  <b>First Cert </b>
                  today to start your ISO 45001 certification journey.
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
          <p className="lead mb-4">
            Start your ISO 45001 certification journey with First Cert — your
            trusted partner for safety, compliance, and success.
          </p>
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

export default Iso45001Certification;
