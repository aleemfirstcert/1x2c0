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
import iso14001 from '../../assets/img/services/iso-14001.webp'
import StatsWithForm from "views/index-sections/StatsWithForm";

function Iso14001Certification() {
  useEffect(() => {
    Aos.init();
  }, []);

  const features = [
    {
      icon: <FaChalkboardTeacher size={40} className="text-primary mb-3" />,
      title: "Training → Expert-Led Learning",
      desc: "Gain insights from experienced environmental consultants and industry specialists.",
    },
    {
      icon: <FaFileAlt size={40} className="text-success mb-3" />,
      title: "Documentation → Structured Process Support",
      desc: "We follow a systematic approach to ensure your certification process is efficient and fully compliant.",
    },
    {
      icon: <FaHeadset size={40} className="text-warning mb-3" />,
      title: "Support →  24/7 Assistance",
      desc: "Enjoy round-the-clock support from our team, even after your certification is complete.",
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
      desc: "Reviewing your existing environmental practices against ISO 14001 standards.",
    },
    {
      icon: <FaFileAlt size={28} className="text-success mb-2" />,
      title: "Documentation & Implementation",
      desc: "Developing the EMS framework, including environmental policy, objectives, and operational controls.",
    },
    {
      icon: <FaUsers size={28} className="text-warning mb-2" />,
      title: "Internal Audits & Training",
      desc: "Preparing your team to understand, manage, and maintain the EMS.",
    },
    {
      icon: <FaCheckCircle size={28} className="text-danger mb-2" />,
      title: "Certification Audit Support",
      desc: "Coordinating with accredited certification bodies for a seamless audit.",
    },
    {
      icon: <FaSyncAlt size={28} className="text-info mb-2" />,
      title: "Post-Certification Support",
      desc: "Ensuring continued compliance through regular monitoring and improvement.",
    },
  ];

  const testimonials = [
    {
      quote:
        "First Cert made our ISO 14001 journey smooth and stress-free. Their consultants provided clear guidance and actionable solutions.",
      name: "Rohit Nair",
      role: "Operations Manager, BlueWave Manufacturing Pvt. Ltd",
    },
    {
      quote:
        "The professionalism and expertise from First Cert during our EMS implementation were outstanding. They helped us reduce waste and improve sustainability.",
      name: "Sana Mirza",
      role: "Environmental Head, GreenSphere Technologies",
    },
    {
      quote:
        "We appreciated First Cert’s structured approach and dedication. Our certification was achieved ahead of schedule.",
      name: "Aravind Rao",
      role: "CEO, TerraCore Engineering Ltd",
    },
    {
      quote:
        "Thanks to First Cert’s training, our team became more aware of environmental responsibilities and best practices.",
      name: "Neha Bansal",
      role: "Compliance Manager, EcoVista Healthcare Group",
    },
    {
      quote:
        "First Cert has been our long-term partner in achieving compliance and improving our environmental performance.",
      name: "Rakesh Shetty",
      role: "General Manager, Horizon BuildTech Pvt. Ltd",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          {" "}
          ISO 14001 Certification | Achieve Environmental Excellence with First
          Cert
        </title>
        <meta
          name="description"
          content="Want ISO 14001 certification? First Cert provides complete consulting, documentation, training, and audit support to help your organization build a sustainable and eco-friendly management system."
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
                  ISO 14001 Certification
                </h1>
                <div className="text-content">
                  {/* Same text for both desktop and mobile */}
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mb-3 mb-md-4">
                    At <b>First Cert</b>, we take complete ownership of your{" "}
                    <b>ISO 14001 certification journey</b> — from consultation
                    to certification. With our assured certification guarantee,
                    you can be confident that your organization will achieve
                    compliance efficiently and without unnecessary hurdles.
                  </p>
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mt-3 mt-md-4">
                    <b>ISO 14001</b> is the international standard for{" "}
                    <b>Environmental Management Systems (EMS)</b>. It provides a
                    framework that helps businesses reduce environmental impact,
                    ensure legal compliance, and promote sustainable practices.
                    Whether you’re a manufacturing company, service provider, or
                    industrial enterprise, ISO 14001 certification helps you
                    demonstrate environmental responsibility and build a strong
                    reputation for sustainability.
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
              Why ISO 14001 Matters for Your Business
            </h2>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={6} className="px-4 mb-4 mb-lg-0">
            <p className="lead text-dark mb-4 text-center text-lg-start">
              Achieving ISO 14001 certification shows your commitment to
              environmental protection and corporate sustainability. Certified
              companies benefit from:
            </p>
            <ul className="list-unstyled fs-5 text-start text-lg-start">
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Enhanced corporate reputation and
                </span>{" "}
                stakeholder confidence
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Reduced waste, energy usage,
                </span>{" "}
                and operating costs
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Compliance with environmental
                </span>{" "}
                regulations and laws
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Improved resource efficiency
                </span>{" "}
                and pollution control
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Greater opportunities in global
                </span>{" "}
                and government tenders
              </li>
            </ul>
            <p className="text-muted fs-5 mt-4 text-center text-lg-start">
              In today’s environmentally conscious world, ISO 14001
              certification sets your organization apart as a{" "}
              <b>sustainable and responsible business.</b>
            </p>
          </Col>

          <Col lg={6} className="text-center">
            <img
              src={iso14001}
              alt="iso 14001"
              className="img-fluid rounded-4 shadow-lg"
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>

      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold text-primary mb-4">
            Our Approach to ISO 14001 Certification
          </h2>

          <p className="text-center text-dark fw-semibold mb-5 px-md-5">
            At{" "}
            <Link to="/" className="text-decoration-none">
              First Cert
            </Link>
            , we make the ISO 14001 certification process simple, transparent,
            and results-driven. Our experts guide you through every stage:
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
                  With <b>First Cert</b>, you gain more than a consultant — you
                  gain a<b> sustainability partner</b>. Our tailored solutions,
                  industry expertise, and customer-first approach ensure that
                  your certification journey is smooth, efficient, and
                  value-driven.
                </p>
                <p className="mb-4">
                  If you’re ready to strengthen your environmental management
                  practices, reduce your carbon footprint, and enhance corporate
                  credibility, contact <b>First Cert</b> today to start your ISO
                  14001 certification journey.
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
            Start your ISO 14001 certification journey with First Cert — your
            trusted partner in sustainability and compliance.
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

export default Iso14001Certification;
