import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
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

function Quality() {
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
      desc: "With First Cert, your certification is assured—no certification, no payment.",
    },
  ];

  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      icon: <FaGlobe size={40} className="text-primary mb-3" />,
      number: "4000+",
      label: "Completed Projects",
    },
    {
      icon: <FaCheckCircle size={40} className="text-success mb-3" />,
      number: "100%",
      label: "Success Rate",
    },
    {
      icon: <FaAward size={40} className="text-warning mb-3" />,
      number: "35+",
      label: "International Standards",
    },
    {
      icon: <FaUsers size={40} className="text-danger mb-3" />,
      number: "450+",
      label: "Clients",
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
      name: "Rajesh Kumar",
      role: "Operations Manager, Zenith Manufacturing Pvt. Ltd",
    },
    {
      quote:
        "The professionalism and structured approach from First Cert during our ISO 27001 certification was impressive. They handled everything from documentation to audit support seamlessly.",
      name: "Aisha Rahman",
      role: "IT Director, NexaSoft Technologies",
    },
    {
      quote:
        "We truly appreciated the dedication of the First Cert team. Their consultants were responsive, knowledgeable, and made the certification process very straightforward.",
      name: "David Fernandes",
      role: "CEO, Prime Logistics Solutions",
    },
    {
      quote:
        "Thanks to First Cert’s training and guidance, our team was well-prepared for the certification audit. We passed with minimal non-conformities and have improved our internal processes.",
      name: "Priya Sharma",
      role: "Quality Manager, MediCare Hospitals",
    },
    {
      quote:
        "First Cert has been more than just a consultant; they’ve been a partner in our growth. Their ISO consulting has enhanced our credibility and opened up new market opportunities.",
      name: "Anil Mehta",
      role: "General Manager, BuildRight Constructions",
    },
  ];

  return (
    <div>
      <IndexNavbar />

      <Helmet>
        <title>ISO 9001 </title>
        <meta
          name="description"
          content="How to get ISO 9001 certified? First Cert offers expert guidance, documentation, training, and audit support to boost quality, efficiency, and customer trust."
        />
        <link rel="canonical" href="/quality" />
      </Helmet>

      <header className="custom-header">
        <div className="overlay d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="fw-bold display-4 display-md-3 display-lg-2">
            ISO 9001 Certification
          </h1>
          <p className="lead fs-6 fs-md-5 fs-lg-4">
            At First Cert, we take complete ownership of your ISO 9001
            certification journey — from the first consultation to the moment
            you receive your certificate. With our assured certification
            guarantee, you can be confident that your business will achieve
            compliance quickly and without unnecessary hurdles. ISO 9001 is more
            than just a standard; it’s a framework for delivering consistent,
            high-quality products and services, strengthening customer trust,
            and enhancing your market reputation.
            <p className="lead fs-6 fs-md-5 fs-lg-4">
              ISO 9001 is the international standard for Quality Management
              Systems (QMS), recognized across industries and markets worldwide.
              It provides a structured framework for businesses to streamline
              processes, improve efficiency, and ensure customer satisfaction.
              Whether you’re a growing startup or an established enterprise, ISO
              9001 helps you operate with clarity, discipline, and a focus on
              continual improvement.
            </p>
          </p>
        </div>
      </header>

      <section className="py-5 mt-5" ref={statsRef}>
        <Container>
          <h2 className="text-center text-primary fw-bold mb-5">
            Trusted Globally for Excellence
          </h2>
          <Row>
            {stats.map((item, index) => {
              // Extract numeric part only for CountUp
              const numeric = parseInt(item.number.replace(/[^0-9]/g, ""));
              const suffix = item.number.replace(/[0-9]/g, "");
              return (
                <Col key={index} md={6} lg={3} className="mb-4">
                  <Card className="h-100 shadow-sm border-0 stat-card text-center p-4">
                    <div>{item.icon}</div>
                    <Card.Body>
                      <h3 className="fw-bold display-6">
                        {statsInView ? (
                          <CountUp
                            start={1}
                            end={numeric}
                            duration={2}
                            separator=","
                          />
                        ) : (
                          1
                        )}
                        {suffix}
                      </h3>
                      <p className="text-dark">{item.label}</p>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold text-primary mb-4">
            Our Approach to ISO 9001 Certification
          </h2>

          <p className="text-center text-dark mb-5 px-md-5">
            At <Link to="/" className="text-decoration-none">First Cert</Link>, we make the certification process simple,
            transparent, and tailored to your business needs. Our consultants
            guide you through:
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
                {step.icon}
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
          <Button variant="light" className="fw-bold ml-3" as={Link} to="/contact">
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

export default Quality;
