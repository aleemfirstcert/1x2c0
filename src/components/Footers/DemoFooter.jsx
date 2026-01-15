import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/img/FirstCertLogoFoot.png";

const DemoFooter = () => {
  const currentYear = new Date().getFullYear();

  // Logo component with your actual logo
  const Logo = () => (
    <div className="logo-container mb-4 text-start">
      <img
        src={logo}
        alt="FirstCert Logo"
        className="img-fluid footer-logo"
        style={{ maxHeight: "150px", marginLeft:'-3rem' }}
      />
    </div>
  );

  return (
    <footer className="footer text-dark pt-5 pb-4 border-top position-relative overflow-hidden">
      <div className="container position-relative">
        {/* Main Footer Content */}
        <div className="row mb-5">
          {/* Logo & Description Column */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="footer-logo-section">
              <Logo />
              <p className="footer-description mt-4 mb-4 text-dark">
                First Cert helps businesses achieve global compliance and
                certification, including ISO 9001, 14001, 27001, SOC, GDPR,
                HIPAA, PCI DSS, and more. We offer end-to-end
                solutions—consulting, audits, training, and
                documentation—ensuring efficiency, credibility, and lasting
                value for startups and enterprises.
              </p>
              <p className="mb-1" style={{ fontWeight: "500" }}>
                © {currentYear} FirstCertification. All rights reserved.
              </p>
              <br />
              {/* Social Links with Better Spacing */}
              <div className="social-icons">
                <h6 className="mb-4 text-dark fw-bold">CONNECT WITH US</h6>
                <div className="d-flex social-links-container">
                  <a href="https://www.linkedin.com/company/first-cert/" className="social-icon me-4">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a href="https://wa.me/918073358319?text=Thank you for Contacting First Cert" className="social-icon me-4">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                  {/* <a href="#" className="social-icon me-4">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#" className="social-icon me-4">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#" className="social-icon">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a> */}
                </div>
              </div>
            </div>
          </div>

          {/* Company & Sitemap Column */}
          <div className="col-lg-2 col-md-4 mb-4 mb-md-0">
            <h5 className="text-primary mb-4 fw-bold">COMPANY</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/aboutus" className="footer-link">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-2 text-primary"
                    size="xs"
                  />
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="footer-link">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-2 text-primary"
                    size="xs"
                  />
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/sitemap.xml"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-2 text-primary"
                    size="xs"
                  />
                  Sitemap
                </a>
              </li>
              <li className="mb-2">
                <a href="/aboutus" className="footer-link">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-2 text-primary"
                    size="xs"
                  />
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="/aboutus" className="footer-link">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-2 text-primary"
                    size="xs"
                  />
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="col-lg-3 col-md-4 mb-4 mb-md-0">
            <h5 className="text-primary mb-4 fw-bold">SERVICES</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="iso-9001-certification" className="footer-link">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-2 text-primary"
                    size="xs"
                  />
                  Quality Certification
                </a>
              </li>
              <li className="mb-2">
                <a href="iso-14001-certification" className="footer-link">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-2 text-primary"
                    size="xs"
                  />
                  Environment Certification
                </a>
              </li>
              <li className="mb-2">
                <a href="iso-45001-certification" className="footer-link">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-2 text-primary"
                    size="xs"
                  />
                  Health & Safety
                </a>
              </li>
              <li className="mb-2">
                <a href="iso-27001-certification" className="footer-link">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-2 text-primary"
                    size="xs"
                  />
                  Cyber Security
                </a>
              </li>
              <li className="mb-2">
                <a href="ce-mark-certification" className="footer-link">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="me-2 text-primary"
                    size="xs"
                  />
                  Product Certification
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="col-lg-3 col-md-4">
            <h5 className="text-primary mb-4 fw-bold">CONTACT</h5>
            <ul className="list-unstyled contact-info">
              <li className="mb-3 d-flex align-items-start">
                <div className="contact-icon bg-primary rounded-circle d-flex align-items-center justify-content-center me-3">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-white"
                    size="sm"
                  />
                </div>
                <div>
                  <p className="mb-0 fw-semibold">Phone</p>
                  <p className="mb-0 text-muted">+91 8073358319</p>
                </div>
              </li>
              <li className="mb-3 d-flex align-items-start">
                <div className="contact-icon bg-primary rounded-circle d-flex align-items-center justify-content-center me-3">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-white"
                    size="sm"
                  />
                </div>
                <div>
                  <p className="mb-0 fw-semibold">Address</p>
                  <p className="mb-0 text-muted">Bangalore, India</p>
                </div>
              </li>
              <li className="d-flex align-items-start">
                <div className="contact-icon bg-primary rounded-circle d-flex align-items-center justify-content-center me-3">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-white"
                    size="sm"
                  />
                </div>
                <div>
                  <p className="mb-0 fw-semibold">Email</p>
                  <p className="mb-0 text-muted">info@firstcertification.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-secondary opacity-25 my-5" />
        {/* Footer watermark BELOW divider */}
        <div className="row">
          <div className="col-12 text-center position-relative watermark-container">
            <span className="watermark-below">FIRST CERT</span>
          </div>
        </div>
      </div>

     
    </footer>
  );
};

export default DemoFooter;
