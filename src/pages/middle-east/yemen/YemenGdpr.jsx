import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imggdpr from "../../../assets/img/country/middle-east/yemen/gdpr-img.avif";
import benefitsgdpr from "../../../assets/img/country/middle-east/yemen/gdpr-benefits.webp";
import bgimg from "../../../assets/img/services/card-gdpr.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function YemenGdpr() {
  const benefits = [
    "Improved Data Protection – Strong controls for handling personal and sensitive data",
    "Legal Compliance – Alignment with EU privacy laws and reduced regulatory risk",
    "Customer Confidence – Demonstrates respect for privacy and data rights",
    "Global Business Access – Enables collaboration with EU clients and partners",
    "Lower Security Incidents – Early identification and mitigation of data risks",
    "Enhanced Market Credibility – Positions the organization as privacy-conscious and reliable",
  ];

  const hipaaData = [
    {
      icon: "bi-code-slash",
      title: "IT and software development companies",
    },
    {
      icon: "bi-cloud-check",
      title: "SaaS platforms and cloud service providers",
    },
    {
      icon: "bi-cart-check",
      title: "Online retailers and digital marketplaces",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and data processing firms",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Financial services and fintech companies",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Healthcare, pharma, and research organizations",
    },
    {
      icon: "bi-bar-chart-line",
      title: "Marketing, analytics, and digital agencies",
    },
    {
      icon: "bi-shield-lock",
      title: "Startups serving EU-based customers",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Initial Privacy Review",
      description: "Understand data usage, systems, and compliance scope.",
    },
    {
      number: "2",
      title: "Gap Evaluation",
      description: "Identify gaps against GDPR principles and requirements.",
    },
    {
      number: "3",
      title: "Policy & Record Development",
      description: "Privacy notices, consent mechanisms, ROPA, DPAs.",
    },
    {
      number: "4",
      title: "Control Implementation",
      description:
        "Data access controls, security safeguards, and governance measures.",
    },
    {
      number: "5",
      title: "Employee Awareness",
      description: "GDPR training tailored to roles and responsibilities.",
    },
    {
      number: "6",
      title: "Readiness Validation",
      description: "Internal checks and corrective actions.",
    },
    {
      number: "7",
      title: "Ongoing Support",
      description: "Continuous compliance guidance and updates.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          GDPR Certification in Yemen | Professional GDPR Consulting Services –
          First Cert
        </title>
        <meta
          name="description"
          content="Looking for GDPR Certification in Yemen? First Cert provides comprehensive GDPR consulting, privacy assessments, documentation, training, and compliance support to help organizations meet EU data protection obligations effectively."
        />
        <meta
          name="keywords"
          content="GDPR Certification in Yemen, GDPR consultants in Yemen, GDPR compliance Yemen, GDPR audit Yemen, GDPR documentation Yemen, GDPR certification cost Yemen, data protection consultants Yemen, GDPR implementation Yemen, EU GDPR Yemen, privacy compliance Yemen, GDPR training Yemen, GDPR consulting services Yemen, GDPR audit support Yemen, affordable GDPR consultants Yemen, First Cert GDPR consultants."
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
          <h1 className="main-title">GDPR Certification in Yemen</h1>
          <p className="small-desc">
            Advancing Privacy, Trust, and Global Readiness
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
                <b>GDPR Certification in Yemen</b> supports organizations in
                building responsible data protection practices that align with
                European Union privacy regulations. As Yemeni businesses
                increasingly engage with international customers, partners, and
                digital platforms, compliance with GDPR has become a critical
                requirement for lawful data processing and cross-border
                operations.
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
                <a href="/">First Cert</a> works closely with organizations in
                Yemen to establish practical GDPR frameworks that go beyond
                documentation. Our approach focuses on strengthening privacy
                governance, reducing regulatory exposure, and enabling
                businesses to operate confidently in global markets while
                respecting individual data rights.
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
            What is GDPR Certification in Yemen?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>GDPR Certification in Yemen</b> reflects an organization’s
            commitment to complying with the EU General Data Protection
            Regulation when handling personal data of EU residents. The
            framework emphasizes accountability, transparency, and security
            across all data processing activities.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            By adopting GDPR practices, organizations can:
          </p>
          <ul className="iso-list">
            {[
              "Protect personal and sensitive information from misuse",
              "Define clear purposes and lawful bases for data processing",
              "Improve visibility and control over data flows",
              "Reduce legal, financial, and reputational risks",
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
            Organizations in technology, outsourcing, digital services,
            healthcare, finance, and e-commerce benefit significantly from GDPR
            compliance by aligning with internationally recognized privacy
            expectations.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Which Businesses Need GDPR Certification Implementation in
                Yemen?
              </h2>

              <p className="text-center section-sub mb-5">
                Any organization in Yemen that handles EU personal data must
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
                        <a href="iso-9001-certification-in-yemen">
                          ISO 9001 Certification in Yemen
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-yemen">
                          ISO 27001 Certification in Yemen
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-yemen">
                          CMMI Certification in Yemen
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-yemen">
                          HIPAA Certification in Yemen
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-yemen">
                          VAPT Certification in Yemen
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-yemen">
                          GDPR Certification in Yemen
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-yemen">
                          SOC 1 Certification in Yemen
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-yemen">
                          SOC 2 Certification in Yemen
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              Implementing GDPR helps Yemeni organizations operate ethically,
              avoid penalties, and build long-term trust with international
              stakeholders.
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
                Key Advantages of GDPR Certification in Yemen
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving GDPR Certification in Yemen gain
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
                GDPR compliance strengthens both operational discipline and
                brand reputation.
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
                GDPR Certification in Yemen – Implementation Approach by{" "}
                <span style={{ color: "black" }}>First Cert</span>
              </h2>
              <p
                className="text-center"
                style={{
                  color: "#000000",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  fontWeight: "400",
                }}
              >
                First Cert follows a structured and business-friendly GDPR
                implementation approach.
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
          How Much Does GDPR Certification Cost in Yemen?
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
                  The cost of GDPR Certification in Yemen depends on several
                  organizational factors, including:
                </div>

                <ul className="features">
                  <li className="check">Size of the organization</li>
                  <li className="check">Nature and volume of data processed</li>
                  <li className="check">
                    ITComplexity of IT systems and workflows
                  </li>
                  <li className="check">
                    Documentation and training requirements
                  </li>
                  <li className="check">Overall compliance scope</li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial assessment to provide a
                  transparent, customized, and cost-effective GDPR compliance
                  proposal.
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
                  Achieve GDPR Certification in Yemen with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted GDPR consulting partner for
                  organizations in Yemen seeking reliable and sustainable data
                  privacy compliance. We help businesses design effective
                  privacy frameworks, prepare accurate documentation, train
                  employees, and maintain long-term compliance readiness.
                </div>
                <div className="title small-title">
                  By choosing First Cert, organizations gain stronger data
                  governance, improved international credibility, and confidence
                  in meeting global privacy expectations.
                </div>
                <div className="title small-title-p">
                  📧 For consultation: info@firstcertification.com Start your
                  GDPR Certification journey in Yemen with First Cert — your
                  partner in data privacy, compliance excellence, and
                  international business confidence.
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

export default YemenGdpr;
