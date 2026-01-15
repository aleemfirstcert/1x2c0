import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/asia/cambodia/soc2-img.webp";
import benefitssoc2 from "../../../assets/img/country/asia/cambodia/soc2-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function CambodiaSoc2() {
  const benefits = [
    "Demonstrated control over cybersecurity and operational risks",
    "Stronger confidence from clients, partners, and stakeholders",
    "Faster responses to security questionnaires and audits",
    "Reduced likelihood of data breaches and service interruptions",
    "Enhanced credibility in global and enterprise markets",
    "Clear accountability and transparency across internal processes",
  ];

  const industryData = [
    {
      icon: "bi-code-slash",
      title: "SaaS companies and software product developers",
    },
    {
      icon: "bi-cloud-check",
      title: "Cloud hosting and infrastructure service providers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "IT consulting firms and managed service providers",
    },
    {
      icon: "bi-file-earmark-medical",
      title:
        "Fintech platforms, payment processors, and digital finance companies",
    },
    {
      icon: "bi-hdd-network",
      title: "Data analytics, AI, and platform-based technology firms",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and regional delivery centers",
    },
    {
      icon: "bi-cart-check",
      title: "Online marketplaces and digital service businesses",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Definition & Criteria Selection",
      description:
        "Identify systems, services, and applicable Trust Services Criteria",
    },
    {
      number: "2",
      title: "Risk & Gap Analysis",
      description: "Evaluate existing controls and prioritize remediation",
    },
    {
      number: "3",
      title: "Control Development & Implementation",
      description:
        "Establish technical, administrative, and operational safeguards",
    },
    {
      number: "4",
      title: "Policy & Evidence Management",
      description: "Prepare documentation and organize audit-ready evidence",
    },
    {
      number: "5",
      title: "Readiness Testing",
      description: "Validate control design and operating effectiveness",
    },
    {
      number: "6",
      title: "Audit Coordination",
      description:
        "Support SOC 2 Type 1 or Type 2 audits with accredited auditors",
    },
    {
      number: "7",
      title: "Ongoing Advisory",
      description:
        "Assist with continuous compliance and future reporting cycles",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in Cambodia | Robust SOC 2 Compliance & Digital
          Trust Solutions – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve SOC 2 Certification in Cambodia? First Cert provides complete SOC 2 advisory services including security risk evaluation, control implementation, evidence management, and audit coordination to help organizations meet international trust and compliance expectations."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in Cambodia, SOC 2 consultants Cambodia, SOC 2 audit Cambodia, SOC 2 Type 1 Cambodia, SOC 2 Type 2 Cambodia, SOC 2 compliance Cambodia, SOC 2 certification cost Cambodia, SOC 2 implementation Cambodia, SOC 2 documentation Cambodia, SOC 2 audit readiness Cambodia, SOC 2 cybersecurity Cambodia, SOC 2 for SaaS Cambodia, SOC 2 for IT companies Cambodia, First Cert SOC 2 Cambodia, SOC 2 trust services Cambodia"
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
          <h1 className="main-title">SOC 2 Certification in Cambodia</h1>
          <p className="small-desc">
            Establishing Confidence in Digital Services
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
                alt="SOC 2 Certification in Cambodia"
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
                <b>SOC 2 Certification in Cambodia</b> helps organizations prove
                that their technology platforms, systems, and service operations
                are protected by reliable security and data protection controls.
                As Cambodia continues to expand its digital economy across
                software development, cloud services, fintech, and IT-enabled
                outsourcing, global clients increasingly demand independent
                assurance of cybersecurity and operational integrity.
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
                <b>First Cert</b> partners with organizations across Cambodia to
                build SOC 2 frameworks that are realistic, scalable, and aligned
                with business growth. Our approach focuses on integrating trust
                principles into daily operations rather than treating compliance
                as a one-time exercise.
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
            What SOC 2 Certification in Cambodia Involves
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 2 Certification in Cambodia</b> is an independent assurance
            report conducted under the AICPA Trust Services Criteria. It
            evaluates how well an organization designs and operates controls to
            manage risk, protect data, and ensure dependable service delivery.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A SOC 2 assessment typically reviews controls related to:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>
                Prevention of unauthorized access, cyber incidents, and data
                breaches
              </h5>
            </div>

            <div className="vapt-card">
              <h5>
                System availability, uptime planning, and disaster recovery
                preparedness
              </h5>
            </div>

            <div className="vapt-card">
              <h5>Integrity and reliability of system processing</h5>
            </div>

            <div className="vapt-card">
              <h5>
                Protection of confidential business and customer information
              </h5>
            </div>

            <div className="vapt-card">
              <h5>Secure handling of personal and sensitive data</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            SOC 2 compliance demonstrates mature governance, disciplined risk
            management, and dependable digital operations.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations in Cambodia That Benefit from SOC 2
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 2 Certification in Cambodia is especially valuable for
                organizations delivering technology-driven or outsourced
                services, including:
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
                        <a href="iso-9001-certification-in-cambodia">
                          ISO 9001 Certification in Cambodia
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-cambodia">
                          ISO 27001 Certification in Cambodia
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-cambodia">
                          CMMI Certification in Cambodia
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-cambodia">
                          HIPAA Certification in Cambodia
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-cambodia">
                          VAPT Certification in Cambodia
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-cambodia">
                          GDPR Certification in Cambodia
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-cambodia">
                          SOC 1 Certification in Cambodia
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-cambodia">
                          SOC 2 Certification in Cambodia
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              For many international customers, SOC 2 reports are a standard
              requirement during vendor onboarding and security evaluations.
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
                Business Impact of SOC 2 Certification in Cambodia
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that obtain SOC 2 Certification in Cambodia gain
                measurable strategic and operational benefits:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc2}
                alt="SOC 2 Benefits in Cambodia"
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
                SOC 2 transforms trust and security into a competitive business
                advantage.
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
                First Cert's SOC 2 Compliance Approach in Cambodia
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
                First Cert follows a structured and outcome-driven SOC 2
                methodology tailored to Cambodian organizations:
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
          SOC 2 Certification Cost in Cambodia
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
                  The cost of SOC 2 Certification in Cambodia depends on factors
                  such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and operational complexity
                  </li>
                  <li className="check">
                    Number and nature of systems included in scope
                  </li>
                  <li className="check">
                    Sensitivity of customer and business data
                  </li>
                  <li className="check">Trust Services Criteria selected</li>
                  <li className="check">
                    Audit type and observation period duration
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a readiness assessment to provide a
                  transparent, customized SOC 2 cost estimate aligned with your
                  business goals.
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
                  Get SOC 2 Certification in Cambodia with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a reliable SOC 2 consulting partner in Cambodia,
                  guiding organizations from early planning through audit
                  completion and ongoing compliance management. Our consultants
                  emphasize practical controls, clear documentation, and
                  measurable risk reduction aligned with real-world operations.
                </div>

                <div className="title small-title">
                  By working with First Cert, organizations strengthen digital
                  trust, meet international client expectations, and scale
                  securely in competitive markets.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your SOC 2 Certification journey in Cambodia with First
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

export default CambodiaSoc2;
