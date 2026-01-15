import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/africa/ghana/soc2-img.webp";
import benefitssoc2 from "../../../assets/img/country/africa/ghana/soc2-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function GhanaSoc2() {
  const benefits = [
    "Independent assurance of security and control effectiveness",
    "Increased confidence from customers, investors, and strategic partners",
    "Reduced need for repetitive security questionnaires and audits",
    "Lower exposure to data breaches and service disruptions",
    "Improved credibility in regional and global markets",
    "Clear accountability for security governance and risk management",
  ];

  const industryData = [
    {
      icon: "bi-code-slash",
      title: "SaaS companies and software product developers",
    },
    {
      icon: "bi-cloud-check",
      title: "Cloud hosting providers and infrastructure operators",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Managed IT, cybersecurity, and MSP organizations",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Fintech firms and digital payment service providers",
    },
    {
      icon: "bi-hdd-network",
      title: "Data analytics, AI platforms, and technology startups",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and shared technology service centers",
    },
    {
      icon: "bi-cart-check",
      title: "Subscription-based and platform-driven enterprises",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scoping & Criteria Selection",
      description:
        "Define in-scope services, systems, and applicable Trust Services Criteria",
    },
    {
      number: "2",
      title: "Risk & Control Assessment",
      description: "Identify security, availability, and data protection gaps",
    },
    {
      number: "3",
      title: "Control Enablement",
      description:
        "Support deployment of technical, administrative, and operational safeguards",
    },
    {
      number: "4",
      title: "Documentation & Evidence Development",
      description: "Create policies and audit-ready evidence repositories",
    },
    {
      number: "5",
      title: "Readiness Validation",
      description:
        "Verify control design and operating effectiveness before audit",
    },
    {
      number: "6",
      title: "Audit Support",
      description:
        "Coordinate SOC 2 Type 1 or Type 2 examinations with independent auditors",
    },
    {
      number: "7",
      title: "Ongoing Advisory",
      description:
        "Assist with remediation, monitoring, and future reporting cycles",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in Ghana | Trusted Cybersecurity & Digital
          Assurance Services – First Cert
        </title>
        <meta
          name="description"
          content="Looking to obtain SOC 2 Certification in Ghana? First Cert offers comprehensive SOC 2 advisory and audit-readiness services, covering security risk analysis, Trust Services Criteria alignment, control implementation guidance, evidence preparation, and complete audit coordination to help organizations meet global trust and security expectations."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in Ghana, SOC 2 consultants Ghana, SOC 2 audit Ghana, SOC 2 Type 1 Ghana, SOC 2 Type 2 Ghana, SOC 2 compliance Ghana, SOC 2 certification cost Ghana, SOC 2 implementation Ghana, SOC 2 documentation Ghana, SOC 2 audit readiness Ghana, SOC 2 cybersecurity Ghana, SOC 2 for SaaS Ghana, SOC 2 for IT companies Ghana, First Cert SOC 2 Ghana, SOC 2 trust services Ghana"
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
          <h1 className="main-title">SOC 2 Certification in Ghana</h1>
          <p className="small-desc">
            Enabling Secure and Reliable Digital Services
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
                src={imgsoc2}
                alt="SOC 2 Certification in Ghana"
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
                <b>SOC 2 Certification in Ghana</b> enables organizations to
                demonstrate that their digital platforms, cloud systems, and
                technology-driven services are protected by strong internal
                controls and risk management practices. As Ghana's digital
                economy expands across software services, fintech, cloud
                computing, IT outsourcing, and data-centric business models,
                customers increasingly demand independent assurance of security,
                availability, and data protection.
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
                <b>First Cert</b> supports organizations across Ghana by
                building SOC 2 frameworks that align with real operational
                workflows. Our approach prioritizes control effectiveness,
                security ownership, and long-term readiness rather than
                short-term compliance exercises.
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
            What SOC 2 Certification in Ghana Evaluates
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 2 Certification in Ghana</b> is an independent assurance
            engagement conducted under the AICPA Trust Services Criteria. The
            assessment evaluates how effectively an organization protects
            systems and data while ensuring service reliability and responsible
            information handling.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A SOC 2 review typically examines controls related to:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>
                Protection of systems against cyber threats and unauthorized
                access
              </h5>
            </div>

            <div className="vapt-card">
              <h5>
                Platform availability, resilience, and recovery preparedness
              </h5>
            </div>

            <div className="vapt-card">
              <h5>Accuracy and integrity of system processing</h5>
            </div>

            <div className="vapt-card">
              <h5>
                Confidential handling of customer and business-sensitive
                information
              </h5>
            </div>

            <div className="vapt-card">
              <h5>Secure management of personal and regulated data</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A successful SOC 2 report confirms that security and trust are
            embedded into daily technology operations.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations in Ghana That Commonly Require SOC 2
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 2 Certification in Ghana is especially relevant for
                organizations delivering digital or technology-enabled services,
                such as:
              </p>

              <div className="row g-4">
                {/* LEFT SIDE CARDS */}
                <div className="col-lg-9">
                  <div className="row g-4">
                    {industryData.map((item, index) => (
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
                    <h5>Our Expertise</h5>
                    <ul>
                      <li>
                        <a href="iso-9001-certification-in-ghana">
                          ISO 9001 Certification in Ghana
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-ghana">
                          ISO 27001 Certification in Ghana
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-ghana">
                          CMMI Certification in Ghana
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-ghana">
                          HIPAA Certification in Ghana
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-ghana">
                          VAPT Certification in Ghana
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-ghana">
                          GDPR Certification in Ghana
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-ghana">
                          SOC 1 Certification in Ghana
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-ghana">
                          SOC 2 Certification in Ghana
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              For many international customers and enterprise clients, SOC 2 is
              a baseline requirement during vendor onboarding and ongoing
              security evaluations.
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
                Business Value of SOC 2 Certification in Ghana
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve SOC 2 Certification in Ghana gain
                meaningful operational and commercial advantages, including:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc2}
                alt="SOC 2 Benefits in Ghana"
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
                SOC 2 transforms trust into a competitive advantage rather than
                a compliance burden.
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
                First Cert's SOC 2 Consulting Approach in Ghana
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
                First Cert follows a structured and audit-aligned SOC 2
                implementation model designed for Ghana-based organizations:
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
          SOC 2 Certification Cost in Ghana
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
                  The cost of SOC 2 Certification in Ghana varies depending on
                  several factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Organizational size and operational complexity
                  </li>
                  <li className="check">
                    Number of applications, systems, and cloud environments in
                    scope
                  </li>
                  <li className="check">
                    Sensitivity and volume of customer or regulated data
                  </li>
                  <li className="check">Selected Trust Services Criteria</li>
                  <li className="check">
                    Report type (Type 1 or Type 2) and review duration
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a structured SOC 2 readiness review to
                  deliver a transparent, customized cost estimate aligned with
                  business objectives.
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
                  Get SOC 2 Certified in Ghana with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted SOC 2 consulting partner in Ghana,
                  supporting organizations from early planning through audit
                  completion and ongoing compliance management. Our consultants
                  focus on practical security controls, audit-ready
                  documentation, and measurable risk reduction aligned with real
                  operational needs.
                </div>

                <div className="title small-title">
                  By partnering with First Cert, organizations in Ghana can
                  strengthen digital trust, meet international client
                  expectations, and scale securely in competitive global
                  markets.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your SOC 2 Certification journey in Ghana with First
                  Cert and demonstrate your commitment to security, reliability,
                  and globally recognized trust standards.
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

export default GhanaSoc2;
