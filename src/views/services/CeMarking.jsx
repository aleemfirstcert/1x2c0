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
import cemark from '../../assets/img/services/cemark.webp';
import StatsWithForm from "views/index-sections/StatsWithForm";

function CeMarking() {
  useEffect(() => {
    Aos.init();
  }, []);

  const features = [
    {
      icon: <FaChalkboardTeacher size={40} className="text-primary mb-3" />,
      title: "Training → Expert-Led Learning",
      desc: "Gain insights from experienced compliance consultants and product certification experts.",
    },
    {
      icon: <FaFileAlt size={40} className="text-success mb-3" />,
      title: "Documentation → Structured Process Support",
      desc: "We prepare clear, audit-ready technical documentation for smooth certification.",
    },
    {
      icon: <FaHeadset size={40} className="text-warning mb-3" />,
      title: "Support →  24/7 Assistance",
      desc: "Get round-the-clock support from our dedicated compliance team, even post-certification.",
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
      title: "Product Classification & Directive Identification",
      desc: "Determining the applicable EU directives and standards for your product.",
    },
    {
      icon: <FaFileAlt size={28} className="text-success mb-2" />,
      title: "Technical Documentation & File Preparation",
      desc: "Compiling the technical file, risk analysis, and conformity documentation.",
    },
    {
      icon: <FaUsers size={28} className="text-warning mb-2" />,
      title: "Testing & Evaluation",
      desc: "Coordinating product testing with accredited laboratories as per EU standards.",
    },
    {
      icon: <FaCheckCircle size={28} className="text-danger mb-2" />,
      title: "Declaration of Conformity (DoC)",
      desc: "Assisting in preparing and signing the manufacturer’s declaration.",
    },
    {
      icon: <FaSyncAlt size={28} className="text-info mb-2" />,
      title: "CE Marking Implementation",
      desc: "Guiding you on correct labeling, documentation, and record maintenance.",
    },
  ];

  const testimonials = [
    {
      quote:
        "First Cert made our CE Marking process seamless. Their team guided us through every step and ensured quick EU compliance.",
      name: "Rahul Deshmukh",
      role: "Product Compliance Manager, Vertex Industrial Solutions",
    },
    {
      quote:
        "We received outstanding support from First Cert for CE documentation and testing. They made the entire process simple and transparent.",
      name: "Nadia Khan",
      role: "QA Head, MedNova Technologies Pvt. Ltd",
    },
    {
      quote:
        "Their structured approach and in-depth technical expertise helped us achieve CE certification without any rejections.",
      name: "Alex Fernandes",
      role: "Managing Director, Innovatech Manufacturing",
    },
    {
      quote:
        "First Cert’s consultants were responsive, professional, and extremely knowledgeable about EU directives.",
      name: "Sneha Reddy",
      role: "Compliance Officer, EcoMatrix Devices",
    },
    {
      quote:
        "Partnering with First Cert gave us confidence to enter the European market successfully.",
      name: "Vikram Patel",
      role: "Operations Head, GlobalMech Engineering Ltd",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>
          {" "}
          CE Marking Certification | EU Product Compliance Experts – First Cert
        </title>
        <meta
          name="description"
          content="Get CE Marking Certification with First Cert. We help manufacturers ensure EU compliance with expert guidance, documentation, and testing support."
        />
        <link rel="canonical" href="/ce-mark-certification" />
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
                  CE Marking Certification
                </h1>
                <div className="text-content">
                  {/* Same text for both desktop and mobile */}
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mb-3 mb-md-4">
                    At <b>First Cert</b>, we take complete ownership of your{" "}
                    <b>CE Marking Certification journey</b> — from product
                    assessment to declaration of conformity. With our assured
                    certification guarantee, you can trust us to guide you
                    through every step to achieve compliance quickly and
                    confidently.
                  </p>
                  <p className="lead fs-6 fs-md-5 fs-lg-4 text-white mt-3 mt-md-4">
                    <b>CE Marking (Conformité Européenne)</b> is a mandatory
                    conformity mark for products sold within the{" "}
                    <b>European Economic Area (EEA)</b>. It indicates that a
                    product complies with all applicable EU directives on{" "}
                    <b>safety, health, and environmental protection</b>. Whether
                    you manufacture electronics, machinery, medical devices, or
                    construction products, CE marking allows your business to
                    access European and global markets.
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
              Why CE Marking Matters for Your Business
            </h2>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={6} className="px-4 mb-4 mb-lg-0">
            <p className="lead text-dark mb-4 text-center text-lg-start">
              Obtaining CE Marking Certification demonstrates your product’s
              compliance with European standards and ensures legal access to the
              EU market. Certified organizations benefit from:
            </p>
            <ul className="list-unstyled fs-5 text-start text-lg-start">
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Legal authorization to sell products
                </span>{" "}
                in the European Union
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Enhanced brand credibility
                </span>{" "}
                and customer trust
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Reduced product liability risks
                </span>{" "}
                and regulatory issues
              </li>
              <li className="mb-3">
                <span className="fw-semibold">✔ Competitive advantage</span> in
                global markets
              </li>
              <li className="mb-3">
                <span className="fw-semibold">
                  ✔ Assurance of product safety
                </span>{" "}
                and quality
              </li>
            </ul>
            <p className="text-muted fs-5 mt-4 text-center text-lg-start">
              CE Marking not only builds <b>consumer confidence</b> but also
              helps manufacturers reduce recalls, penalties, and
              compliance-related delays.
            </p>
          </Col>

          <Col lg={6} className="text-center">
            <img
              src={cemark}
              alt="cemark"
              className="img-fluid rounded-4 shadow-lg"
              style={{ maxHeight: "450px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>

      <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold text-primary mb-4">
            Our Approach to CE Marking Certification
          </h2>

          <p className="text-center text-dark fw-semibold mb-5 px-md-5">
            At{" "}
            <Link to="/" className="text-decoration-none">
              First Cert
            </Link>
            , we make the CE Marking process simple, transparent, and
            results-oriented. Our consultants guide you through:
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
            <p className="text-center text-black fw-semibold mb-5 px-md-5">
              With our expertise, you can confidently demonstrate that your
              product complies with all <b>European Union directives</b> and
              safety standards.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-5 bg-primary bg-gradient text-white">
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="p-5 rounded-4 shadow-lg bg-white text-dark text-center">
                <h2 className="fw-bold text-primary mb-4">
                  Your Trusted CE Marking Partner
                </h2>
                <p className="lead mb-4">
                  With <b>First Cert</b>, you gain more than just compliance
                  assistance — you gain a partner dedicated to your product’s
                  success and global reach. Our experienced consultants,
                  industry-specific knowledge, and proven process ensure fast,
                  affordable, and hassle-free CE certification.
                </p>
                <p className="mb-4">
                  If you’re ready to expand into European markets, ensure legal
                  compliance, and enhance customer confidence, contact{" "}
                  <b>First Cert</b> today to start your{" "}
                  <b>CE Marking Certification</b> journey.
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
            Expand your global reach and ensure your products meet EU standards
            with First Cert — your trusted partner for CE Marking Certification.
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

export default CeMarking;
