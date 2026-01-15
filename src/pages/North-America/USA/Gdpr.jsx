import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imggdpr from "../../../assets/img/country/north-america/usa/gdpr-img.avif";
import benefitsgdpr from "../../../assets/img/country/north-america/usa/gdpr-benefits.webp";
import bgimg from "../../../assets/img/services/card-gdpr.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Gdpr() {
  const benefits = [
    "Enhanced Data Security – Protect customer and employee personal information with secure data-handling practices.",
    "Legal & Regulatory Compliance – Avoid penalties, legal issues, and compliance risks.",
    "Higher Customer Trust – Demonstrate strong commitment to privacy and data protection.",
    "Improved International Business Opportunities – Enable smooth business with EU clients and partners.",
    "Reduced Risk of Data Breaches – Identify vulnerabilities early and prevent security incidents.",
    "Stronger Market Reputation – Stand out as a trusted, compliant organization in global markets.",
  ];

  const hipaaData = [
    {
      icon: "bi-code-slash",
      title: "IT and software development companies",
    },
    {
      icon: "bi-cloud-check",
      title: "SaaS providers and cloud service platforms",
    },
    {
      icon: "bi-cart-check",
      title: "E-commerce and online service companies",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and data processing centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Banks, fintech, and financial service companies",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Healthcare and pharma organizations handling patient data",
    },
    {
      icon: "bi-bar-chart-line",
      title: "Marketing agencies and analytics firms",
    },
    {
      icon: "bi-shield-lock",
      title: "Startups dealing with EU customers or digital platforms",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Consultation & Data Mapping",
      description:
        "We understand your data flow, processing activities, and compliance goals.",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description: "Identify gaps against GDPR requirements.",
    },
    {
      number: "3",
      title: "Documentation",
      description:
        "Prepare privacy policies, consent forms, DPAs, ROPA, and risk assessments.",
    },
    {
      number: "4",
      title: "Implementation",
      description:
        "Integrate GDPR controls such as access control, encryption, and data rights management.",
    },
    {
      number: "5",
      title: "Staff Training",
      description: "Conduct GDPR awareness and role-based training.",
    },
    {
      number: "6",
      title: "Internal Audit",
      description: "Evaluate readiness and corrective actions.",
    },
    {
      number: "7",
      title: "Certification Audit",
      description: "Final compliance audit by an authorized body.",
    },
    {
      number: "8",
      title: "Continuous Support",
      description: "Ongoing audits, updates, and compliance assistance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          GDPR Certification in USA | Best GDPR Consultants – First Cert
        </title>
        <meta
          name="description"
          content="Looking for GDPR Certification in USA? First Cert provides expert GDPR consulting, documentation, data protection training, and audit support for full compliance with EU data privacy laws."
        />
        <meta
          name="keywords"
          content="GDPR Certification in USA, GDPR consultants in USA, GDPR compliance USA, GDPR audit USA, GDPR documentation USA, GDPR certification cost USA, data protection consultants USA, GDPR implementation USA, EU GDPR USA, privacy compliance USA, GDPR training USA, GDPR consulting services USA, GDPR audit support USA, affordable GDPR consultants USA, First Cert GDPR consultants."
        />
      </Helmet>

      <IndexNavbar />

      <div
        className="certificate-hero"
        style={{
          backgroundImage: `url(${bgimg})`,
        }}
      >
        <div className="certificate-overlay">
          <h1 className="main-title">GDPR Certification in USA</h1>
          <p className="small-desc">
            Your Path to Strong Data Privacy & Compliance
          </p>
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

      <div className="iso-content-section py-4">
        <div className="container">
          <div className="row align-items-center g-4">
            {/* LEFT SIDE — IMAGE + TEXT */}
            <div className="col-md-6">
              <img
                src={imggdpr}
                alt="GDPR Certification"
                className="img-fluid rounded-2 mb-3"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />

              <p
                className="text-dark"
                style={{
                  color: "#111111",
                  fontWeight: "400",
                  fontSize: "0.975rem",
                  lineHeight: "1.8",
                }}
              >
                Achieve <b>GDPR Certification in USA</b> with the expert
                consultants at First Cert. We help organizations implement
                strong data protection practices, safeguard personal
                information, and comply with the EU General Data Protection
                Regulation (GDPR).
              </p>

              <p
                className="text-dark"
                style={{
                  color: "#111111",
                  fontWeight: "400",
                  fontSize: "0.975rem",
                  lineHeight: "1.8",
                }}
              >
                Our end-to-end support — from assessment and documentation to
                training and audit preparation — makes GDPR compliance simple,
                effective, and affordable.
              </p>
              <p
                className="text-dark"
                style={{
                  color: "#111111",
                  fontWeight: "400",
                  fontSize: "0.975rem",
                  lineHeight: "1.8",
                }}
              >
                Strengthen your data security, build customer trust, and stay
                compliant with global privacy laws through professional GDPR
                consulting in USA.
              </p>
            </div>

            {/* RIGHT SIDE — ENQUIRY FORM */}
            <div className="col-md-6">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>

      <section className="certificate-details-section">
        <div className="container">
          {/* HEADING 1 */}
          <h2
            className="details-title text-primary"
            style={{ fontSize: "1.8rem" }}
          >
            What is GDPR Certification in USA?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>GDPR Certification in USA</b> is a compliance framework based on
            the EU General Data Protection Regulation, designed to protect
            personal data and ensure transparency in data processing.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            For companies in USA handling EU customer data, GDPR compliance is
            mandatory. It helps organizations:
          </p>
          <ul className="iso-list">
            {[
              "Protect personal and sensitive data",
              "Improve data-handling transparency",
              "Reduce security risks and legal exposure",
              "Build customer confidence and global credibility",
            ].map((item, index) => (
              <li key={index} className="mb-3">
                {item}
              </li>
            ))}
          </ul>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Businesses across IT, SaaS, BPO, e-commerce, healthcare, fintech,
            and other digital sectors benefit from adopting GDPR standards.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            By becoming GDPR compliant, USA companies demonstrate strong data
            protection practices — a key requirement for international clients
            and EU partnerships.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Which Businesses Need GDPR Certification Implementation in USA?
              </h2>

              <p className="text-center section-sub mb-5">
                Any organization in USA that collects, processes, stores, or
                manages data of EU citizens must implement GDPR compliance. This
                includes:
              </p>
              <div className="row g-4">
                {/* LEFT SIDE CARDS */}
                <div className="col-lg-9">
                  <div className="row g-4">
                    {hipaaData.map((item, index) => (
                      <div className="col-12 col-sm-6 col-md-4" key={index}>
                        <div className="hipaa-card text-center p-3">
                          <i className={`bi ${item.icon} hipaa-icon`}></i>
                          <h5>{item.title}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* RIGHT SIDE INTERNAL LINKS BOX */}
                <div className="col-lg-3">
                  <div className="iso-links-box tall-sidebar">
                    <h5>Our Experties</h5>
                    <ul>
                      <li>
                        <a href="iso-9001-certification-in-usa">
                          ISO 9001 Certification in USA
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-usa">
                          ISO 27001 Certification in USA
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-usa">
                          CMMI Certification in USA
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-usa">
                          HIPAA Certification in USA
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-usa">
                          VAPT Certification in USA
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-usa">
                          GDPR Certification in USA
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-usa">
                          SOC 1 Certification in USA
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-usa">
                          SOC 2 Certification in USA
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              Implementing GDPR ensures full data protection, prevents breaches,
              and builds long-term trust with clients across global markets.
            </p>
          </section>
        </div>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting GDPR Certification in USA
              </h1>
            </div>
          </div>

          {/* First Paragraph - Full Width */}
          <div className="row">
            <div className="col-12">
              <p
                className="text-center mb-5"
                style={{
                  color: "#000000",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  fontWeight: "400",
                }}
              >
                Achieving{" "}
                <b href="iso-27001-certification">GDPR Certification in USA</b>{" "}
                provides strong business advantages:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitsgdpr}
                alt="GDPR Benefits"
                className="img-fluid rounded-3"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "450px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Benefits List - Right Side */}
            <div className="col-md-6">
              <div className="benefits-list ps-md-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="d-flex align-items-start mb-3 p-2"
                  >
                    <div
                      className="bullet-icon text-primary me-3 flex-shrink-0"
                      style={{ fontSize: "1.5rem", lineHeight: "1.4" }}
                    >
                      •
                    </div>
                    <p
                      className="mb-0 flex-grow-1"
                      style={{
                        color: "#000000",
                        lineHeight: "1.5",
                        fontWeight: "400",
                      }}
                    >
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Last Paragraph - Full Width */}
          <div className="row">
            <div className="col-12">
              <p
                className="text-center"
                style={{
                  color: "#000000",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  fontWeight: "400",
                }}
              >
                With <a href="/">First Cert</a>, achieving GDPR certification
                becomes smooth, guided, and results-driven.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="iso-process-section py-5 position-relative overflow-hidden">
        <div
          className="position-absolute top-0 start-0 w-100 h-100 bg-light"
          style={{ marginTop: "-3rem" }}
        ></div>
        <div className="container position-relative">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-10">
              <h2 className="display-5 fw-bold mb-3 text-primary">
                GDPR Certification in USA – Simplified Process with{" "}
                <span style={{ color: "black" }}>First Cert</span>
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                We follow a clear, structured, and effective GDPR certification
                process:
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="process-timeline position-relative">
                {/* Connecting Line */}
                <div className="process-line position-absolute top-0 start-50 translate-middle-x h-100 d-none d-md-block"></div>

                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="process-step position-relative mb-4"
                  >
                    <div className="row align-items-center">
                      {/* Step Number & Icon - Alternating sides */}
                      <div
                        className={`col-md-5 ${
                          index % 2 === 0 ? "" : "order-md-2"
                        }`}
                      >
                        <div className="step-number-container text-center text-md-end">
                          <div className="step-number d-inline-flex align-items-center justify-content-center position-relative">
                            <div className="number-circle bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">
                              {step.number}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step Content - Alternating sides */}
                      <div
                        className={`col-md-7 ${
                          index % 2 === 0 ? "" : "order-md-1"
                        }`}
                      >
                        <div
                          className={`step-card p-4 rounded-3 shadow-sm h-100 ${
                            index % 2 === 0 ? "ms-md-4" : "me-md-4"
                          }`}
                        >
                          <h4 className="text-primary fw-bold mb-3">
                            {step.title}
                          </h4>
                          <p
                            className="mb-0 lh-lg"
                            style={{
                              fontSize: "0.95rem",
                              color: "#212529",
                              fontWeight: "500",
                            }}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          How Much Does GDPR Certification Cost in USA?
        </h2>

        <div className="container">
          <div className="row justify-content-center align-items-start">
            {/* CARD 1 */}
            <div className="col-md-6 mb-4">
              <div
                className="plan-card"
                style={{ "--accent-color": "#fa0038" }}
              >
                <div className="title small-title">
                  The cost of GDPR certification in USA depends on:
                </div>

                <ul className="features">
                  <li className="check">Size of the company</li>
                  <li className="check">Number of employees</li>
                  <li className="check">Complexity of data processes</li>
                  <li className="check">Volume of data subjects</li>
                  <li className="check">IT infrastructure and risk level</li>
                  <li className="check">Required training and documentation</li>
                  <li className="check">Scope of compliance</li>
                </ul>

                <div className="title small-title">
                  First Cert provides customized and affordable pricing after an
                  initial assessment.
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-md-6 mb-4">
              <div
                className="plan-card"
                style={{ "--accent-color": "#164fa9" }}
              >
                <div className="title small-title">
                  Achieve GDPR Certification in USA with First Cert – Your
                  Trusted Partner in Data Protection
                </div>
                <div className="title small-title">
                  If you are looking to achieve GDPR Certification in USA, First
                  Cert is your trusted partner for complete data privacy and
                  data protection compliance. We provide end-to-end GDPR
                  consulting services, including gap analysis, documentation
                  support, employee training, implementation guidance, and full
                  audit preparation.
                </div>
                <div className="title small-title-p">
                  Our certified GDPR consultants in USA ensure smooth and
                  efficient compliance by developing accurate documentation,
                  implementing effective data protection controls, and offering
                  cost-effective solutions tailored to your business needs.
                </div>
                <div className="title small-title-p">
                  With First Cert, companies benefit from long-term privacy
                  frameworks, improved customer trust, stronger data security
                  practices, and full readiness for GDPR audits.
                </div>
                <div className="title small-title-p">
                  For assistance or consultation info@firstcertification.com.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DemoFooter />
    </>
  );
}

export default Gdpr;
