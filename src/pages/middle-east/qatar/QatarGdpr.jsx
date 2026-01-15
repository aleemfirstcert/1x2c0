import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imggdpr from "../../../assets/img/country/middle-east/qatar/gdpr-img.webp";
import benefitsgdpr from "../../../assets/img/country/middle-east/qatar/gdpr-benefits.webp";
import bgimg from "../../../assets/img/services/card-gdpr.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function QatarGdpr() {
  const benefits = [
    "Enhanced Data Protection – Secure handling of customer and employee data.",
    "Regulatory Compliance – Alignment with EU data privacy requirements.",
    "Improved Customer Confidence – Demonstrates commitment to privacy.",
    "Expanded International Opportunities – Enables seamless engagement with EU partners.",
    "Lower Breach Risk – Early identification and mitigation of vulnerabilities.",
    "Stronger Brand Image – Positions your business as privacy-focused and trustworthy.",
  ];

  const hipaaData = [
    {
      icon: "bi-code-slash",
      title: "IT and software development companies",
    },
    {
      icon: "bi-cloud-check",
      title: "SaaS and cloud service providers",
    },
    {
      icon: "bi-cart-check",
      title: "E-commerce and online platforms",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and data processing firms",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Banks, fintech, and financial institutions",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Healthcare, pharma, and life sciences organizations",
    },
    {
      icon: "bi-bar-chart-line",
      title: "Marketing, analytics, and digital agencies",
    },
    {
      icon: "bi-shield-lock",
      title: "Startups serving EU customers or operating digital platforms",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Initial Consultation & Data Discovery",
      description: "Understand data flow and compliance scope.",
    },
    {
      number: "2",
      title: "Gap Assessment",
      description: "Identify non-compliance areas against GDPR requirements.",
    },
    {
      number: "3",
      title: "Policy & Documentation Development",
      description: "Privacy policies, consent forms, ROPA, and DPAs.",
    },
    {
      number: "4",
      title: "Implementation Support",
      description:
        "Data protection controls, access management, and encryption.",
    },
    {
      number: "5",
      title: "Employee Training",
      description: "GDPR awareness and role-specific training.",
    },
    {
      number: "6",
      title: "Internal Audit & Readiness Review",
      description: "Corrective actions before final assessment.",
    },
    {
      number: "7",
      title: "Certification & Ongoing Support",
      description: "Continuous monitoring and compliance updates.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          GDPR Certification in Qatar | Trusted GDPR Consultants – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve GDPR Certification in Qatar? First Cert delivers professional GDPR consulting, documentation, employee training, and audit readiness services to help organizations comply with EU data protection laws effectively."
        />
        <meta
          name="keywords"
          content="GDPR Certification in Qatar, GDPR consultants in Qatar, GDPR compliance Qatar, GDPR audit Qatar, GDPR documentation Qatar, GDPR certification cost Qatar, data protection consultants Qatar, GDPR implementation Qatar, EU GDPR Qatar, privacy compliance Qatar, GDPR training Qatar, GDPR consulting services Qatar, GDPR audit support Qatar, affordable GDPR consultants Qatar, First Cert GDPR consultants."
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
          <h1 className="main-title">GDPR Certification in Qatar</h1>
          <p className="small-desc">
            Build Trust Through Strong Data Protection
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
                <b>GDPR Certification in Qatar</b> helps organizations establish
                reliable data privacy practices while complying with the EU
                General Data Protection Regulation. With increasing global data
                exchange, companies operating in Qatar must ensure personal data
                is collected, processed, and stored responsibly.
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
                <a href="/">First Cert</a> supports organizations across Qatar
                by delivering end-to-end GDPR compliance solutions, covering
                assessment, documentation, training, and audit preparation. Our
                structured approach ensures legal compliance, reduced risk
                exposure, and improved customer confidence.
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
            What is GDPR Certification in Qatar?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>GDPR Certification in Qatar</b> is a structured compliance
            approach aligned with the EU General Data Protection Regulation,
            designed to safeguard personal data and enhance transparency in data
            handling activities.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Organizations in Qatar that process data belonging to EU citizens
            are legally required to meet GDPR obligations. Compliance enables
            businesses to:
          </p>
          <ul className="iso-list">
            {[
              "Protect personal and sensitive information",
              "Establish transparent data processing practices",
              "Minimize legal, regulatory, and reputational risks",
              "Strengthen global credibility and customer trust",
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
            Industries such as IT, SaaS, BPO, fintech, healthcare, e-commerce,
            and digital services benefit significantly from GDPR implementation.
            GDPR certification demonstrates that Qatar-based organizations
            follow international privacy standards and are prepared for global
            business engagements.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Which Businesses Need GDPR Certification Implementation in
                Qatar?
              </h2>

              <p className="text-center section-sub mb-5">
                Any organization in Qatar that handles EU personal data must
                implement GDPR compliance, including:
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
                        <a href="iso-9001-certification-in-qatar">
                          ISO 9001 Certification in Qatar
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-qatar">
                          ISO 27001 Certification in Qatar
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-qatar">
                          CMMI Certification in Qatar
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-qatar">
                          HIPAA Certification in Qatar
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-qatar">
                          VAPT Certification in Qatar
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-qatar">
                          GDPR Certification in Qatar
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-qatar">
                          SOC 1 Certification in Qatar
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-qatar">
                          SOC 2 Certification in Qatar
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              GDPR implementation helps organizations in Qatar avoid penalties,
              prevent data breaches, and build long-term trust with
              international clients.
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
                Benefits of Getting GDPR Certification in Qatar
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving GDPR Certification in Qatar gain
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
                GDPR Certification in Qatar – Implementation Approach by{" "}
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
          How Much Does GDPR Certification Cost in Qatar?
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
                  The cost of GDPR Certification in Qatar varies based on
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
                  Achieve GDPR Certification in Qatar with First Cert – Your
                  Data Privacy Partner
                </div>
                <div className="title small-title">
                  First Cert is a trusted GDPR consulting partner in Qatar,
                  offering complete data protection and privacy compliance
                  services. We support organizations with expert guidance,
                  accurate documentation, employee training, and audit
                  preparation to ensure smooth and effective GDPR
                  implementation.
                </div>
                <div className="title small-title-p">
                  Our experienced GDPR consultants help businesses strengthen
                  privacy frameworks, improve data governance, and maintain
                  long-term compliance readiness.
                </div>
                <div className="title small-title-p">
                  📧 For consultation: info@firstcertification.com Start your
                  GDPR Certification journey in Qatar with First Cert — your
                  partner in data privacy, security, and global compliance
                  excellence.
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

export default QatarGdpr;
