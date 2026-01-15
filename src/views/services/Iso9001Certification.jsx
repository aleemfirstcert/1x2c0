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
  FaGlobe,
  FaCheckCircle,
  FaAward,
  FaUsers,
  FaSearch,
  FaSyncAlt,
} from "react-icons/fa";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/index.css";
import iso9001 from "../../assets/img/services/iso-9001.webp";
import StatsWithForm from "views/index-sections/StatsWithForm";

function Iso9001Certification() {
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
      desc: "With First Cert, your certification is assured—no certification, no payment.",
    },
  ];

 
  const steps = [
    {
      icon: <FaSearch size={28} className="text-primary mb-2" />,
      title: "Gap Analysis",
      desc: "Assessing your current processes against ISO 9001 requirements.",
    },
    {
      icon: <FaFileAlt size={28} className="text-success mb-2" />,
      title: "Documentation & Implementation",
      desc: "Creating and integrating QMS documents into daily operations.",
    },
    {
      icon: <FaUsers size={28} className="text-warning mb-2" />,
      title: "Internal Audits & Training",
      desc: "Preparing your team for certification success.",
    },
    {
      icon: <FaCheckCircle size={28} className="text-danger mb-2" />,
      title: "Certification Audit Support",
      desc: "Coordinating with accredited certification bodies for a smooth audit experience.",
    },
    {
      icon: <FaSyncAlt size={28} className="text-info mb-2" />,
      title: "Post-Certification Support",
      desc: "Ensuring you stay compliant through surveillance audits and continuous improvement.",
    },
  ];

  const testimonials = [
    {
      quote:
        "First Cert made our ISO 9001 certification journey simple and stress-free. Their clear guidance and deep industry expertise helped us achieve compliance ahead of schedule.",
      name: "Pushpa",
      role: "Sr. Business Manager, Paralock",
    },
    {
      quote:
        "The professionalism and structured approach from First Cert during our ISO 27001 certification was impressive. They handled everything from documentation to audit support seamlessly.",
      name: "Akshat",
      role: "Sr. Business Manager, Primed Talent",
    },
    {
      quote:
        "We truly appreciated the dedication of the First Cert team. Their consultants were responsive, knowledgeable, and made the certification process very straightforward.",
      name: "Ankit",
      role: "CEO, Esthenos",
    },
    {
      quote:
        "Thanks to First Cert’s training and guidance, our team was well-prepared for the certification audit. We passed with minimal non-conformities and have improved our internal processes.",
      name: "Neethi",
      role: "CTO, Chegus Infotech",
    },
    {
      quote:
        "First Cert has been more than just a consultant; they’ve been a partner in our growth. Their ISO consulting has enhanced our credibility and opened up new market opportunities.",
      name: "Anna poorani",
      role: "Compliance Officer, Connected Value Health",
    },
  ];

  return (
    <div>
      <IndexNavbar />

      <Helmet>
        <title>ISO 9001 Certification | Get Certified with First Cert</title>
        <meta
          name="description"
          content="How to get ISO 9001 certified? First Cert offers expert guidance, documentation, training, and audit support to boost quality, efficiency, and customer trust."
        />
        <link rel="canonical" href="/iso-9001-certification" />
      </Helmet>

      <header className="custom-header-common">
        <div className="background-image"></div>
        <div className="overlay d-flex flex-column justify-content-center align-items-center text-center">
          <div className="container-fluid px-0">
            <div className="row justify-content-center mx-0">
              <div className="col-12 col-xxl-11 px-0">
                {/* Title moved up with less margin */}
                <h1 className="fw-bolder display-4 display-md-3 display-lg-2 mb-2 mb-md-3 title-main text-decoration-none">
                  ISO 9001 Certification
                </h1>
                <div className="text-content">
                  {/* Same text for both desktop and mobile */}
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mb-3 mb-md-4">
                    At <b>First Cert</b>, we take full ownership of your{" "}
                    <b>ISO 9001 certification journey</b> — from the first
                    consultation to the final certificate. With our assured
                    certification guarantee, your business will achieve
                    compliance efficiently and without hassle.
                  </p>
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mt-3 mt-md-4">
                    <b>ISO 9001</b> is the global standard for{" "}
                    <b>Quality Management Systems (QMS)</b>, designed to help
                    businesses streamline operations, improve efficiency, and
                    enhance customer satisfaction. Whether you're a startup or
                    an established enterprise, ISO 9001 empowers you to deliver
                    consistent quality, strengthen brand trust, and drive
                    continual improvement.
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
              Why ISO 9001 Matters for Your Business
            </h2>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={6} className="px-4 mb-4 mb-lg-0">
            <p className="lead text-dark mb-4 text-center text-lg-start">
              Gaining ISO 9001 certification sends a clear message: your
              organization values quality and customer satisfaction. Certified
              companies benefit from:
            </p>
            <ul className="list-unstyled fs-5 text-start text-lg-start">
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Stronger brand credibility
                </span>{" "}
                and market reputation
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Improved operational efficiency
                </span>{" "}
                and reduced errors
              </li>
              <li className="mb-3">
                <span className="fw-semibold">✔ Enhanced ability</span> to win
                tenders and enter new markets
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Increased employee engagement
                </span>{" "}
                and clear process ownership
              </li>
            </ul>
            <p className="text-dark fs-5 mt-4 text-center text-lg-start">
              In competitive industries, ISO 9001 is often the differentiator
              that wins you contracts and long-term client relationships.
            </p>
          </Col>

          <Col lg={6} className="text-center">
            <img
              src={iso9001}
              alt="iso 9001"
              className="img-fluid rounded-4 shadow-lg"
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>

      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold text-primary mb-4">
            Our Approach to ISO 9001 Certification
          </h2>

          <p className="text-center text-dark fw-semibold mb-5 px-md-5">
            At{" "}
            <Link to="/" className="text-decoration-none">
              First Cert
            </Link>
            , we make the certification process simple, transparent, and
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
                    style={{ fontSize: "1rem", color: "#111" }}
                  >
                    {step.title}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "0.85rem", color: "#222" }}>
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
                <p className="lead mb-4">
                  With First Cert, you get more than just certification
                  assistance—you gain a partner invested in your long-term
                  quality journey. Our expertise, industry-specific solutions,
                  and customer-focused approach mean you can achieve
                  certification quickly, without disrupting your business.
                </p>
                <p className="mb-4">
                  If you’re ready to strengthen your operations, enhance
                  customer trust, and unlock new business opportunities, contact
                  First Cert today to start your ISO 9001 certification journey.
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

export default Iso9001Certification;
