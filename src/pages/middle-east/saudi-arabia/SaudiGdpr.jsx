import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imggdpr from "../../../assets/img/country/middle-east/saudi-arabia/gdpr-img.webp";
import benefitsgdpr from "../../../assets/img/country/middle-east/saudi-arabia/gdpr-benefits.webp";
import bgimg from "../../../assets/img/services/card-gdpr.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function SaudiGdpr() {
  const benefits = [
    "Stronger Data Security – Protect customer and employee information with robust privacy controls.",
    "Regulatory Compliance – Meet EU data protection obligations and avoid heavy penalties.",
    "Improved Customer Trust – Show commitment to privacy and ethical data handling.",
    "International Business Enablement – Support partnerships with EU clients and vendors.",
    "Lower Risk of Data Breaches – Identify vulnerabilities and implement preventive controls.",
    "Enhanced Brand Reputation – Position your organization as privacy-focused and compliant.",
  ];

  const hipaaData = [
    {
      icon: "bi-code-slash",
      title: "Software development and IT service providers",
    },
    {
      icon: "bi-cloud-check",
      title: "SaaS, cloud, and hosting companies",
    },
    {
      icon: "bi-cart-check",
      title: "E-commerce platforms and digital marketplaces",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and data processing centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Banks, fintech, and financial service firms",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Healthcare, pharma, and life-science organizations",
    },
    {
      icon: "bi-bar-chart-line",
      title: "Marketing, analytics, and digital agencies",
    },
    {
      icon: "bi-shield-lock",
      title: "Startups offering services to EU customers",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Privacy Assessment & Data Mapping",
      description: "Identify personal data flows and processing activities.",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description: "Evaluate compliance gaps against GDPR requirements.",
    },
    {
      number: "3",
      title: "Documentation Development",
      description:
        "Privacy policies, consent notices, ROPA, DPAs, and risk registers.",
    },
    {
      number: "4",
      title: "Implementation Support",
      description: "Access controls, encryption, data rights management.",
    },
    {
      number: "5",
      title: "Employee Training",
      description: "GDPR awareness and role-based training programs.",
    },
    {
      number: "6",
      title: "Internal Review & Readiness Check",
      description: "Address gaps before final validation.",
    },
    {
      number: "7",
      title: "Ongoing Compliance Support",
      description: "Continuous updates and privacy governance assistance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          GDPR Certification in Saudi Arabia | Expert GDPR Consultants – First
          Cert
        </title>
        <meta
          name="description"
          content="Planning GDPR Certification in Saudi Arabia? First Cert offers end-to-end GDPR compliance services including privacy assessments, documentation, staff training, and audit readiness to meet EU data protection requirements confidently."
        />
        <meta
          name="keywords"
          content="GDPR Certification in Saudi Arabia, GDPR consultants in Saudi Arabia, GDPR compliance Saudi Arabia, GDPR audit Saudi Arabia, GDPR documentation Saudi Arabia, GDPR certification cost Saudi Arabia, data protection consultants Saudi Arabia, GDPR implementation Saudi Arabia, EU GDPR Saudi Arabia, privacy compliance Saudi Arabia, GDPR training Saudi Arabia, GDPR consulting services Saudi Arabia, GDPR audit support Saudi Arabia, affordable GDPR consultants Saudi Arabia, First Cert GDPR consultants."
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
          <h1 className="main-title">GDPR Certification in Saudi Arabia</h1>
          <p className="small-desc">Strengthen Privacy & Global Compliance</p>
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
                <b>GDPR Certification in Saudi Arabia</b> enables organizations
                to manage personal data responsibly while meeting the strict
                requirements of the EU General Data Protection Regulation. As
                Saudi businesses increasingly serve global markets, ensuring
                lawful and transparent data processing has become essential.
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
                <a href="/">First Cert</a> assists organizations across Saudi
                Arabia with a practical and structured GDPR compliance approach.
                From initial privacy assessment to documentation, training, and
                audit readiness, we help businesses reduce compliance risks,
                enhance customer trust, and operate confidently in international
                markets.
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
            What is GDPR Certification in Saudi Arabia?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>GDPR Certification in Saudi Arabia</b> represents an
            organization’s alignment with EU-mandated data protection principles
            such as lawfulness, transparency, data minimization, and
            accountability.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            For Saudi-based companies that collect or process personal data of
            EU residents, GDPR compliance is mandatory. Certification helps
            organizations to:
          </p>
          <ul className="iso-list">
            {[
              "Secure personal and sensitive data",
              "Ensure transparency in data processing activities",
              "Reduce regulatory and legal exposure",
              "Demonstrate accountability to international clients",
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
            Industries including IT services, SaaS platforms, outsourcing firms,
            fintech companies, healthcare providers, and digital enterprises
            widely adopt GDPR to meet global privacy expectations and strengthen
            business credibility.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Needs GDPR Certification in Saudi Arabia?
              </h2>

              <p className="text-center section-sub mb-5">
                GDPR compliance is required for any organization in Saudi Arabia
                handling EU personal data, regardless of company size or sector.
                This includes:
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
                        <a href="iso-9001-certification-in-saudi-arabia">
                          ISO 9001 Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-saudi-arabia">
                          ISO 27001 Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-saudi-arabia">
                          CMMI Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-saudi-arabia">
                          HIPAA Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-saudi-arabia">
                          VAPT Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-saudi-arabia">
                          GDPR Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-saudi-arabia">
                          SOC 1 Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-saudi-arabia">
                          SOC 2 Certification in Saudi Arabia
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              Implementing GDPR helps Saudi organizations avoid penalties,
              prevent data misuse, and establish long-term trust with global
              partners.
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
                Benefits of Getting GDPR Certification in Saudi Arabia
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving GDPR Certification in Saudi Arabia gain
                multiple advantages:
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
                GDPR Certification in Saudi Arabia – Implementation Approach by{" "}
                <span style={{ color: "black" }}>First Cert</span>
              </h2>
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
          How Much Does GDPR Certification Cost in Saudi Arabia?
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
                  The cost of GDPR Certification in Saudi Arabia varies based on
                  organizational scope and complexity. Key cost factors include:
                </div>

                <ul className="features">
                  <li className="check">Organization size and workforce</li>
                  <li className="check">Nature and volume of data processed</li>
                  <li className="check">IT infrastructure and risk exposure</li>
                  <li className="check">
                    Documentation and training requirements
                  </li>
                  <li className="check">Scope of GDPR implementation</li>
                </ul>

                <div className="title small-title">
                  First Cert provides transparent, customized, and
                  cost-effective GDPR pricing after an initial assessment.
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
                  Achieve GDPR Certification in Saudi Arabia with First Cert –
                  Your Data Privacy Partner
                </div>
                <div className="title small-title">
                  First Cert is a trusted GDPR consulting partner for
                  organizations in Saudi Arabia seeking reliable and practical
                  data privacy compliance. Our experienced consultants help
                  businesses implement strong privacy frameworks, develop
                  accurate documentation, train employees, and prepare for
                  audits with confidence.
                </div>
                <div className="title small-title-p">
                  By partnering with First Cert, organizations gain sustainable
                  data protection practices, improved governance, and readiness
                  to meet global privacy expectations.
                </div>
                <div className="title small-title-p">
                  📧 For consultation: info@firstcertification.com Start your
                  GDPR Certification journey in Saudi Arabia with First Cert —
                  your partner in data privacy, regulatory compliance, and
                  international business readiness.
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

export default SaudiGdpr;
