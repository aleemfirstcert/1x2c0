import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc1 from "../../../assets/img/country/asia/singapore/soc1-img.webp";
import benefitssoc1 from "../../../assets/img/country/asia/singapore/soc1-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc1.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function SingaporeSoc1() {
  const benefits = [
    "Financial Control Assurance – Confidence in transaction accuracy and completeness",
    "Client & Auditor Confidence – Independent validation of control effectiveness",
    "Reduced Operational Risk – Early identification of control gaps and weaknesses",
    "Improved Governance – Structured processes and accountability",
    "Global Recognition – Alignment with internationally accepted assurance standards",
    "Competitive Advantage – Stronger positioning in client evaluations and contracts",
  ];

  const hipaaData = [
    {
      icon: "bi-people",
      title: "Payroll and human resource service providers",
    },
    {
      icon: "bi-calculator",
      title: "Accounting, finance, and reconciliation outsourcing firms",
    },
    {
      icon: "bi-cloud-check",
      title: "Managed IT services, SaaS, and cloud solution providers",
    },
    {
      icon: "bi-hdd-network",
      title: "Payment gateways and transaction processing companies",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and regional shared service centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Fintech platforms and financial service technology providers",
    },
    {
      icon: "bi-shield-check",
      title: "Compliance reporting and financial operations support firms",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope & Boundary Definition",
      description:
        "Identify services, processes, and systems impacting financial reporting.",
    },
    {
      number: "2",
      title: "Control Gap Analysis",
      description: "Review existing controls against SOC 1 criteria.",
    },
    {
      number: "3",
      title: "Documentation Development",
      description: "Prepare narratives, policies, and control descriptions.",
    },
    {
      number: "4",
      title: "Control Implementation Support",
      description: "Assist with operationalizing required controls.",
    },
    {
      number: "5",
      title: "Readiness Testing",
      description: "Validate design and operating effectiveness.",
    },
    {
      number: "6",
      title: "Audit Coordination",
      description:
        "Support SOC 1 Type 1 or Type 2 audits with licensed CPA firms.",
    },
    {
      number: "7",
      title: "Post-Audit Advisory",
      description: "Remediation guidance and continuous improvement support.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 1 Certification in Singapore | Reliable SOC 1 Advisory & Audit
          Readiness – First Cert
        </title>
        <meta
          name="description"
          content="Preparing for SOC 1 Certification in Singapore? First Cert delivers comprehensive SOC 1 consulting, including financial control assessment, documentation, readiness evaluation, and audit coordination to ensure dependable financial reporting assurance."
        />
        <meta
          name="keywords"
          content="SOC 1 Certification in Singapore, SOC 1 consultants in Singapore, SOC 1 audit Singapore, SOC 1 Type 1 certification Singapore, SOC 1 Type 2 certification Singapore, SOC 1 compliance Singapore, SOC 1 certification cost in Singapore, SOC 1 implementation Singapore, SOC 1 documentation Singapore, SOC 1 audit support Singapore, financial reporting controls Singapore, First Cert SOC 1 consultants, SOC 1 certification for IT companies Singapore, SOC 1 for service organizations Singapore, SOC 1 attestation Singapore, SOC 1 consulting company Singapore."
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
          <h1 className="main-title">SOC 1 Certification in Singapore</h1>
          <p className="small-desc">
            Assurance for Financial Integrity & Trust
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
                <b>SOC 1 Certification in Singapore</b> helps service
                organizations demonstrate strong internal controls over
                processes that impact client financial reporting. As Singapore
                continues to be a regional hub for shared services, fintech,
                outsourcing, and technology-driven operations, clients
                increasingly expect independent assurance over financial control
                reliability.
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
                <b>First Cert</b>, works closely with organizations in Singapore
                to design, implement, and validate SOC 1–aligned control
                frameworks that reflect actual operational practices. Our
                consultative approach ensures controls are effective, auditable,
                and sustainable over time.
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
            Understanding SOC 1 Certification in Singapore?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 1 Certification in Singapore</b> is an independent assurance
            report issued in accordance with the AICPA SSAE 18 standard. It
            evaluates whether an organization has properly designed and
            implemented Internal Controls over Financial Reporting (ICFR).
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            SOC 1 focuses on areas such as transaction processing, system
            access, change management, and reconciliation processes. Achieving
            SOC 1 compliance demonstrates that financial-related services are
            delivered with accuracy, consistency, and accountability.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Should Consider SOC 1 Certification in Singapore
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 1 Certification in Singapore is particularly relevant for
                service organizations whose operations affect client financial
                data, including:
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
                        <a href="iso-9001-certification-in-Singapore">
                          ISO 9001 Certification in Singapore
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-singapore">
                          ISO 27001 Certification in Singapore
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-singapore">
                          CMMI Certification in Singapore
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-singapore">
                          HIPAA Certification in Singapore
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-singapore">
                          VAPT Certification in Singapore
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-singapore">
                          GDPR Certification in Singapore
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-singapore">
                          SOC 1 Certification in Singapore
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-singapore">
                          SOC 2 Certification in Singapore
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              For organizations serving multinational or U.S.-based clients, SOC
              1 reports are often required as part of vendor risk and audit
              processes.
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
                Business Value of SOC 1 Certification in Singapore
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
            Organizations that achieve SOC 1 Certification in Singapore gain
            tangible operational and commercial advantages:
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
                SOC 1 Certification Framework in Singapore with{" "}
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
          <p
            className="text-center"
            style={{
              color: "#000000",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              fontWeight: "400",
            }}
          >
            This approach ensures organizations are fully prepared before
            entering the formal audit phase.
          </p>
        </div>
      </div>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          SOC 1 Certification Cost in Singapore
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
                  The cost of SOC 1 Certification in Singapore depends on
                  several organizational and technical factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Size and complexity of service operations
                  </li>
                  <li className="check">
                    Number of financial processes and systems in scope
                  </li>
                  <li className="check">
                    Existing maturity of internal controls
                  </li>
                  <li className="check">
                    Level of IT system integration and automation
                  </li>
                  <li className="check">
                    Type of SOC 1 report (Type 1 or Type 2)
                  </li>
                  <li className="check">
                    Duration of the audit and testing period
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial assessment to provide a clear,
                  customized, and transparent SOC 1 certification cost estimate.
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
                  Get SOC 1 Certification in Singapore with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted SOC 1 consulting partner in Singapore,
                  supporting service organizations with end-to-end readiness,
                  documentation, and audit coordination services. Our
                  experienced consultants align SOC 1 requirements with
                  real-world operations, ensuring efficient implementation and
                  audit success.
                </div>
                <div className="title small-title">
                  By partnering with First Cert, organizations strengthen
                  financial governance, enhance audit readiness, and build
                  lasting confidence with clients and stakeholders.
                </div>
                <div className="title small-title-p">
                  📧 Contact us: info@firstcertification.com Start your SOC 1
                  Certification journey in Singapore with First Cert and
                  demonstrate integrity, reliability, and global assurance
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

export default SingaporeSoc1;
