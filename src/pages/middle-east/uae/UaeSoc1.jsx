import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc1 from "../../../assets/img/country/middle-east/UAE/soc1-img.webp";
import benefitssoc1 from "../../../assets/img/country/middle-east/UAE/soc1-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc1.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function UaeSoc1() {
  const benefits = [
    "Assurance over financial transaction accuracy and completeness",
    "Increased trust from clients, auditors, and regulators",
    "Reduced exposure to control failures and financial discrepancies",
    "Improved governance and process discipline",
    "Alignment with globally recognized AICPA assurance standards",
    "Stronger positioning for international contracts and partnerships",
    "SOC 1 certification enhances credibility while reinforcing internal control effectiveness.",
  ];

  const hipaaData = [
    {
      icon: "bi-people",
      title: "Payroll processing and HR service companies",
    },
    {
      icon: "bi-calculator",
      title: "Accounting, bookkeeping, and finance outsourcing firms",
    },
    {
      icon: "bi-cloud-check",
      title: "IT managed services, SaaS, and cloud solution providers",
    },
    {
      icon: "bi-hdd-network",
      title: "Payment processors and transaction-handling platforms",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and shared service centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Fintech and financial technology organizations",
    },
    {
      icon: "bi-shield-check",
      title: "Compliance, reporting, and reconciliation service providers",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Engagement Scoping",
      description:
        "Define services, processes, and systems impacting financial reporting.",
    },
    {
      number: "2",
      title: "Control Review",
      description:
        "Evaluate existing internal controls and identify improvement areas.",
    },
    {
      number: "3",
      title: "Documentation Development",
      description:
        "Prepare control narratives, policies, and process descriptions.",
    },
    {
      number: "4",
      title: "Control Enablement",
      description: "Support implementation and operational consistency.",
    },
    {
      number: "5",
      title: "Readiness Validation",
      description: "Test control design and operating effectiveness.",
    },
    {
      number: "6",
      title: "Audit Support",
      description:
        "Coordinate SOC 1 Type 1 or Type 2 audits with accredited CPA firms.",
    },
    {
      number: "7",
      title: "Post-Audit Guidance",
      description: "Support remediation and continuous improvement efforts.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 1 Certification in UAE | Trusted SOC 1 Consulting & Audit Support
          – First Cert
        </title>
        <meta
          name="description"
          content="Planning for SOC 1 Certification in UAE? First Cert provides end-to-end SOC 1 advisory services, including financial control evaluation, documentation, readiness support, and audit coordination to ensure accuracy and integrity in financial reporting processes."
        />
        <meta
          name="keywords"
          content="SOC 1 Certification in UAE, SOC 1 consultants in UAE, SOC 1 audit UAE, SOC 1 Type 1 certification UAE, SOC 1 Type 2 certification UAE, SOC 1 compliance UAE, SOC 1 certification cost in UAE, SOC 1 implementation UAE, SOC 1 documentation UAE, SOC 1 audit support UAE, financial reporting controls UAE, First Cert SOC 1 consultants, SOC 1 certification for IT companies UAE, SOC 1 for service organizations UAE, SOC 1 attestation UAE, SOC 1 consulting company UAE."
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
          <h1 className="main-title">SOC 1 Certification in UAE</h1>
          <p className="small-desc">
            Building Confidence in Financial Controls
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
                src={imgsoc1}
                alt="soc1 Certification"
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
                <b>SOC 1 Certification in UAE</b> is a critical assurance
                framework for service organizations that influence client
                financial data or reporting outcomes. As companies across the
                UAE continue to serve regional and international clients,
                transparency and reliability in financial operations have become
                key decision-making factors.
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
                <b>First Cert</b>, partners with organizations in the UAE to
                strengthen control environments, improve accountability, and
                demonstrate dependable financial practices. Our advisory-led
                approach ensures that controls are not only compliant but also
                practical and aligned with real business operations.
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
            What is SOC 1 Certification in UAE?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 1 Certification in UAE</b> is an independent assurance report
            issued in accordance with the AICPA SSAE 18 standard. It evaluates
            whether an organization has properly designed and implemented
            Internal Controls over Financial Reporting (ICFR).
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            SOC 1 focuses on ensuring that financial transactions and supporting
            systems operate accurately, consistently, and securely.
            Organizations that achieve SOC 1 compliance signal to stakeholders
            that their internal control environment meets internationally
            accepted assurance standards.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations That Benefit from SOC 1 Certification in UAE
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 1 Certification in UAE is ideal for service providers whose
                activities directly or indirectly affect client financial
                statements, including:
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
                        <a href="iso-9001-certification-in-UAE">
                          ISO 9001 Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-uae">
                          ISO 27001 Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-uae">
                          CMMI Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-uae">
                          HIPAA Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-uae">
                          VAPT Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-uae">
                          GDPR Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-uae">
                          SOC 1 Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-uae">
                          SOC 2 Certification in UAE
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              For organizations working with overseas clients—especially
              U.S.-based companies—SOC 1 compliance is often a mandatory
              contractual requirement.
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
                Key Advantages of SOC 1 Certification in UAE
              </h1>
            </div>
          </div>

          <p
            className="text-center"
            style={{
              color: "#000000",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              fontWeight: "400",
            }}
          >
            Achieving SOC 1 Certification in UAE offers multiple strategic and
            operational benefits:
          </p>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc1}
                alt="soc1 Benefits"
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
                SOC 1 certification enhances credibility while reinforcing
                internal control effectiveness.
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
                SOC 1 Certification Process in UAE with{" "}
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
                First Cert follows a structured, audit-aligned methodology to
                ensure smooth SOC 1 readiness and certification:
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
          SOC 1 Certification Cost in UAE
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
                  The cost of SOC 1 Certification in UAE varies based on
                  multiple business and technical factors, such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Organizational size and service complexity
                  </li>
                  <li className="check">
                    Number of financial processes and applications in scope
                  </li>
                  <li className="check">
                    Existing maturity of internal controls
                  </li>
                  <li className="check">
                    IT infrastructure and system dependencies
                  </li>
                  <li className="check">
                    Type of SOC 1 report (Type 1 or Type 2)
                  </li>
                  <li className="check">
                    Duration and depth of external audit
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert performs an initial assessment to provide a clear,
                  customized, and transparent cost structure.
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
                  Get SOC 1 Certification in UAE with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted SOC 1 consulting partner in the UAE,
                  supporting service organizations in achieving reliable
                  financial control assurance. Our experienced consultants
                  simplify the SOC 1 journey by aligning compliance requirements
                  with operational realities.
                </div>
                <div className="title small-title">
                  By working with First Cert, organizations gain stronger
                  financial governance, audit readiness, and long-term
                  confidence from clients and stakeholders.
                </div>
                <div className="title small-title-p">
                  📧 Contact us: info@firstcertification.com Start your SOC 1
                  Certification journey in UAE with First Cert and demonstrate
                  integrity, reliability, and global assurance excellence.
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

export default UaeSoc1;
