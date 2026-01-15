import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/asia/indonesia/soc2-img.webp";
import benefitssoc2 from "../../../assets/img/country/asia/indonesia/soc2-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function IndonesiaSoc2() {
  const benefits = [
    "Demonstrated control over cybersecurity and operational risks",
    "Increased trust from global customers and business partners",
    "Reduced friction during security assessments and due diligence",
    "Lower likelihood of data breaches and service outages",
    "Stronger positioning in international markets and partnerships",
    "Improved internal accountability and process transparency",
  ];

  const hipaaData = [
    {
      icon: "bi-cloud-check",
      title: "Software and SaaS product companies",
    },
    {
      icon: "bi-code-slash",
      title: "Cloud service providers and hosting platforms",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "IT consulting and managed service firms",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Fintech, digital payment, and financial technology companies",
    },
    {
      icon: "bi-hdd-network",
      title: "Data analytics, AI, and platform-based startups",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and regional delivery centers",
    },
    {
      icon: "bi-cart-check",
      title: "E-commerce platforms and online service providers",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Service Scoping",
      description:
        "Define systems, boundaries, and applicable Trust Services Criteria",
    },
    {
      number: "2",
      title: "Risk & Gap Analysis",
      description: "Identify weaknesses and prioritize remediation",
    },
    {
      number: "3",
      title: "Control Implementation",
      description:
        "Establish technical, administrative, and operational safeguards",
    },
    {
      number: "4",
      title: "Policy & Evidence Development",
      description: "Prepare documentation and audit-ready records",
    },
    {
      number: "5",
      title: "Readiness Assessment",
      description: "Validate controls through internal reviews",
    },
    {
      number: "6",
      title: "Audit Coordination",
      description:
        "Support SOC 2 Type 1 or Type 2 audits with licensed auditors",
    },
    {
      number: "7",
      title: "Continuous Advisory",
      description: "Assist with ongoing compliance and future reporting cycles",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in Indonesia | Strategic SOC 2 Compliance & Trust
          Enablement – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve SOC 2 Certification in Indonesia? First Cert provides complete SOC 2 advisory services including risk evaluation, control implementation, evidence preparation, and audit coordination to help organizations meet international trust and security requirements."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in Indonesia, SOC 2 consultants in Indonesia, SOC 2 audit Indonesia, SOC 2 Type 1 certification Indonesia, SOC 2 Type 2 certification Indonesia, SOC 2 compliance Indonesia, SOC 2 consulting company Indonesia, SOC 2 certification cost Indonesia, SOC 2 implementation Indonesia, SOC 2 documentation Indonesia, SOC 2 audit support Indonesia, SOC 2 security compliance Indonesia, First Cert SOC 2 consultants, SOC 2 certification for IT companies Indonesia, SOC 2 for SaaS companies Indonesia, SOC 2 cybersecurity certification Indonesia."
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
          <h1 className="main-title">SOC 2 Certification in Indonesia</h1>
          <p className="small-desc">
            Establishing Confidence in Secure Digital Services
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
                alt="soc2 Certification"
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
                <b>SOC 2 Certification in Indonesia</b> helps organizations
                demonstrate that their technology platforms and service
                processes are managed with strong security, availability, and
                data protection controls. As Indonesia continues to expand its
                digital economy across SaaS, fintech, cloud services, and
                outsourcing, clients and partners increasingly require
                independent assurance of system reliability and data governance.
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
                <b>First Cert</b> collaborates with organizations throughout
                Indonesia to build SOC 2-aligned control environments that are
                practical, scalable, and business-focused. Our approach ensures
                compliance supports operational growth rather than slowing it
                down.
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
            What SOC 2 Certification in Indonesia Covers
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 2 Certification in Indonesia</b> is an independent evaluation
            developed under AICPA standards. It measures whether an
            organization’s internal controls comply with the Trust Services
            Criteria (TSC), which cover:
          </p>

          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Protection of systems against unauthorized access</h5>
            </div>

            <div class="vapt-card">
              <h5>
                Availability measures that support reliable service delivery
              </h5>
            </div>

            <div class="vapt-card">
              <h5>Accuracy and integrity of system processing</h5>
            </div>

            <div class="vapt-card">
              <h5>Protection of confidential business information</h5>
            </div>

            <div class="vapt-card">
              <h5>Responsible handling of personal and customer data</h5>
            </div>
          </div>
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            SOC 2 compliance signals maturity in governance, risk management,
            and operational discipline.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations That Benefit from SOC 2 Certification in Indonesia
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 2 Certification in Indonesia is especially valuable for
                organizations delivering digital or outsourced services,
                including:
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
                        <a href="iso-9001-certification-in-indonesia">
                          ISO 9001 Certification in Indonesia
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-indonesia">
                          ISO 27001 Certification in Indonesia
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-indonesia">
                          CMMI Certification in Indonesia
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-indonesia">
                          HIPAA Certification in Indonesia
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-indonesia">
                          VAPT Certification in Indonesia
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-indonesia">
                          GDPR Certification in Indonesia
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-indonesia">
                          SOC 1 Certification in Indonesia
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-indonesia">
                          SOC 2 Certification in Indonesia
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              For many enterprise and international clients, SOC 2 reports are a prerequisite for vendor approval.
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
                Key Advantages of SOC 2 Certification in Indonesia
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve SOC 2 Certification in Indonesia
                realize multiple strategic benefits:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc2}
                alt="soc2 Benefits"
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
                With <a href="/">First Cert</a>, SOC 2 certification supports
                both trust-building and long-term business scalability
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
                SOC 2 Certification Methodology in Indonesia with{" "}
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
                First Cert follows a structured and practical SOC 2
                implementation roadmap:
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
          SOC 2 Certification Cost in Indonesia
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
                  The cost of SOC 2 Certification in Indonesia depends on
                  multiple factors, such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Size and complexity of the organization
                  </li>
                  <li className="check">
                    Types of services and systems in scope
                  </li>
                  <li className="check">
                    Sensitivity of customer and business data
                  </li>
                  <li className="check">
                    Number of Trust Services Criteria selected
                  </li>
                  <li className="check">
                    Audit type and observation period duration
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial evaluation to deliver a clear,
                  customized, and cost-effective SOC 2 compliance plan.
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
                  Get SOC 2 Certification in Indonesia with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted SOC 2 consulting partner in Indonesia,
                  guiding organizations through planning, implementation, audit
                  readiness, and ongoing compliance. Our consultants emphasize
                  practical controls, clear documentation, and measurable risk
                  reduction aligned with business objectives.
                </div>
                <div className="title small-title">
                  By partnering with First Cert, organizations strengthen
                  information security, meet global client expectations, and
                  build lasting trust in competitive digital markets.
                </div>
                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com Begin your SOC 2
                  Certification journey in Indonesia with First Cert and
                  showcase your commitment to security, reliability, and
                  operational excellence.
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

export default IndonesiaSoc2;
