import React, { useEffect } from "react";
import { useState } from "react";
import contactus from "../../assets/img/contactus.webp";
import emailjs from "emailjs-com";
import { Alert } from "reactstrap";
import "aos/dist/aos.css";
import Aos from "aos";
import ReactGA from "react-ga4";
import { useHistory } from "react-router-dom";
import contactBg from '../../assets/img/services/contact-bg.webp'
import {
  Button,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import { Helmet } from "react-helmet";

function ContactUs() {
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  const onDismiss = () => {
    setVisible(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8xxvx1n",
        "template_r18dlen",
        e.target,
        "C2MELbGdO70klMVdY"
      )
      .then(
        (result) => {
          setVisible(true);
          e.target.reset();
          ReactGA.event({
            action: "submit",
            category: "Form",
            label: "Submit Button Clicked",
          });
          setTimeout(() => {
            history.push("./thankyou");
          }, 1500);
        },
        (error) => {
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact us</title>
        <meta name="description" content="Contact us FirstCert " />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <IndexNavbar />

      {/* Header Section */}
      <header
        className="contact-header"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${contactBg})`,
        }}
      >
        <div className="header-content text-center">
          <div className="header-line-container">
            <div className="header-line"></div>
            <h1>Contact</h1>
          </div>
        </div>
      </header>

      {/* Contact Intro Section */}
      <section className="contact-intro py-4">
        <Container>
          <Row className="justify-content-center">
            <Col lg="8" className="text-center">
              <h2 className="intro-title">
                <span style={{ color: "#0000FF" }}>Contact</span> & Join
                Together
              </h2>
              <p className="intro-subtitle">
                Let's create something amazing together. Get in touch with our
                team.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Company Details */}
      <section className="company-details py-3">
        <Container>
          <Row>
            <Col md="3" xs="12" className="mb-3">
              <div className="detail-box">
                <div className="icon-wrapper">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <h6>Our Location</h6>
                <p>J P Nagar Phase 5, Bengaluru 560078</p>
              </div>
            </Col>
            <Col md="3" xs="12" className="mb-3">
              <div className="detail-box">
                <div className="icon-wrapper">
                  <i className="fas fa-phone"></i>
                </div>
                <h6>Phone Number</h6>
                <p>+91 8073358319</p>
              </div>
            </Col>
            <Col md="3" xs="12" className="mb-3">
              <div className="detail-box">
                <div className="icon-wrapper">
                  <i className="fas fa-envelope"></i>
                </div>
                <h6>Email Address</h6>
                <p>Info@firstcertification.com</p>
              </div>
            </Col>
            <Col md="3" xs="12" className="mb-3">
              <div className="detail-box">
                <div className="icon-wrapper">
                  <i className="fas fa-clock"></i>
                </div>
                <h6>Working Hours</h6>
                <p>Mon - Fri : 9AM - 6PM</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Contact Section */}
      <section className="perfect-chat-section py-4">
        <Container>
          <Row className="align-items-center">
            {/* Left Side - Image & Chat Box */}
            <Col lg="7" className="mb-4 mb-lg-0">
              <div className="human-chat-container">
                <div className="large-human-image">
                  <img
                    loading="lazy"
                    src={contactus}
                    alt="FirstCert contactus"
                    className="human-img"
                  />
                </div>
                <div className="medium-chat-box">
                  <h4>Chat With Us</h4>
                  <p className="chat-text">
                    Have questions? Our team is here to help you. Start a
                    conversation and let's create something amazing together!
                  </p>
                  <a
                    href="https://wa.me/918073358319?text=Thank you for contacting First Cert"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="chat-btn"
                  >
                    <i
                      className="fas fa-comment-dots me-3"
                      style={{ marginRight: "10px" }}
                    ></i>
                    Let's Chat
                  </a>
                </div>
              </div>
            </Col>

            {/* Right Side - Contact Form */}
            <Col lg="5">
              <div className="compact-form">
                <div className="form-header">
                  <h3>
                    <span style={{ color: "#0000FF" }}>Reach</span> & Get In
                    Touch <br /> With Us!
                  </h3>
                </div>

                <Form className="contact-form" onSubmit={sendEmail}>
                  <Alert
                    style={{
                      backgroundColor: "#51CBCE",
                      borderRadius: "50px",
                      width: "100%",
                    }}
                    className="my-3 text-center"
                    isOpen={visible}
                    toggle={onDismiss}
                  >
                    <b>Success!</b> Your Message has been successfully sent !
                  </Alert>

                  <div className="mb-2">
                    <label className="form-label">Name</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        required
                        name="name"
                        placeholder="Name"
                        type="text"
                        className="form-input"
                      />
                    </InputGroup>
                  </div>

                  <div className="mb-2">
                    <label className="form-label">Email</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        required
                        name="email"
                        placeholder="Email"
                        type="email"
                        className="form-input"
                      />
                    </InputGroup>
                  </div>

                  <div className="mb-2">
                    <label className="form-label">Phone Number</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="fa fa-phone" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        required
                        name="phone"
                        placeholder="Phone"
                        type="tel"
                        className="form-input"
                      />
                    </InputGroup>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message</label>
                    <Input
                      name="message"
                      placeholder="Tell us your thoughts and feelings..."
                      type="textarea"
                      rows="3"
                      required
                      className="form-input"
                    />
                  </div>

                  <Button
                    className="submit-btn w-100 text-center"
                    color="primary"
                    type="submit"
                  >
                    <i
                      className="fas fa-paper-plane"
                      style={{ marginRight: "10px" }}
                    ></i>{" "}
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Full Width Map */}
      {/* <section className="map-section">
        <div className="map-container">
          <div className="map-overlay">
            <h4>Visit Our Office</h4>
            <p>123 Business Avenue, Creative District, New York, NY 10001</p>
            <button className="map-btn">
              <i className="fas fa-directions me-2"></i>
              Get Directions
            </button>
          </div>
        </div>
      </section> */}

      <a
        href="https://wa.me/918073358319?text=Thank you for contacting First Cert"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      <DemoFooter />

      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
    </>
  );
}

export default ContactUs;
