import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc1 from "../../../assets/img/country/asia/thailand/soc1-img.webp";
import benefitssoc1 from "../../../assets/img/country/asia/thailand/soc1-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc1.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function ThailandSoc1() {
  const benefits = [
    "Independent validation of financial control effectiveness",
    "Increased confidence among clients, auditors, and stakeholders",
    "Reduced risk of financial misstatements and control gaps",
    "Clear documentation and ownership of key financial processes",
    "Improved readiness for client audits and due diligence reviews",
  ];

  const industryData = [
    {
      icon: "bi-people",
      title: "Payroll processing and HR service organizations",
    },
    {
      icon: "bi-calculator",
      title: "Accounting, bookkeeping, and finance outsourcing firms",
    },
    {
      icon: "bi-cloud-check",
      title: "Payment processors and transaction management platforms",
    },
    {
      icon: "bi-hdd-network",
      title: "SaaS providers supporting billing or accounting functions",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and regional shared service centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Fintech companies and financial operations platforms",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Service & Scope Definition",
      description:
        "Identify in-scope services, systems, and financial processes.",
    },
    {
      number: "2",
      title: "Control Assessment",
      description: "Evaluate existing controls against SOC 1 requirements.",
    },
    {
      number: "3",
      title: "Documentation Development",
      description:
        "Prepare control narratives, process flows, and evidence templates.",
    },
    {
      number: "4",
      title: "Control Enhancement",
      description: "Support remediation and improvement of identified gaps.",
    },
    {
      number: "5",
      title: "Readiness Testing",
      description: "Validate control design and operational effectiveness.",
    },
    {
      number: "6",
      title: "Audit Facilitation",
      description:
        "Coordinate SOC 1 Type 1 or Type 2 audits with licensed CPA firms.",
    },
    {
      number: "7",
      title: "Post-Audit Support",
      description:
        "Assist with corrective actions and ongoing compliance maintenance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 1 Certification in Thailand | Trusted SOC 1 Assurance & Audit
          Support – First Cert
        </title>
        <meta
          name="description"
          content="Planning to achieve SOC 1 Certification in Thailand? First Cert delivers comprehensive SOC 1 advisory services including financial control analysis, documentation preparation, operational readiness, and audit coordination to ensure strong financial reporting assurance."
        />
        <meta
          name="keywords"
          content="SOC 1 Certification in Thailand, SOC 1 consultants Thailand, SOC 1 audit Thailand, SOC 1 Type 1 Thailand, SOC 1 Type 2 Thailand, SOC 1 compliance Thailand, SOC 1 certification cost Thailand, SOC 1 implementation Thailand, SOC 1 documentation Thailand, SOC 1 audit readiness Thailand, financial reporting controls Thailand, SOC 1 attestation Thailand, First Cert SOC 1 Thailand, SOC 1 advisory Thailand"
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
          <h1 className="main-title">SOC 1 Certification in Thailand</h1>
          <p className="small-desc">Ensuring Financial Control Integrity</p>
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
                alt="SOC 1 Certification in Thailand"
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
                <b>SOC 1 Certification in Thailand</b> helps service
                organizations demonstrate that their internal control
                environment supports accurate and reliable financial reporting
                for clients. As Thailand continues to grow as a regional center
                for outsourcing, fintech operations, shared services, and
                technology-driven business models, independent assurance over
                financial processes has become a key expectation from global
                customers and auditors.
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
                <b>First Cert</b> supports organizations across Thailand by
                building SOC 1-aligned control frameworks that reflect real
                business operations. Our focus is on practical control design,
                clear accountability, and audit-ready execution rather than
                purely theoretical compliance.
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
            What SOC 1 Certification in Thailand Covers
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 1 Certification in Thailand</b> is an independent assurance
            engagement conducted under the AICPA SSAE 18 framework. It evaluates
            whether controls related to services that impact client financial
            statements are suitably designed and, for Type 2 reports, operating
            effectively over a defined review period.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A SOC 1 engagement typically evaluates:
          </p>

          <ul className="iso-list">
            {[
              "Accuracy and integrity of financial transaction processing",
              "Logical access and system security affecting financial data",
              "Change management for finance-related applications",
              "Monitoring, reconciliation, and exception resolution processes",
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
            SOC 1 compliance confirms that financial-impacting services are
            governed with discipline, consistency, and transparency.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations in Thailand That Require SOC 1 Certification
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 1 Certification in Thailand is particularly important for
                service providers whose activities influence customer financial
                reporting, including:
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
                        <a href="iso-9001-certification-in-thailand">
                          ISO 9001 Certification in Thailand
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-thailand">
                          ISO 27001 Certification in Thailand
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-thailand">
                          CMMI Certification in Thailand
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-thailand">
                          HIPAA Certification in Thailand
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-thailand">
                          VAPT Certification in Thailand
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-thailand">
                          GDPR Certification in Thailand
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-thailand">
                          SOC 1 Certification in Thailand
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-thailand">
                          SOC 2 Certification in Thailand
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              For organizations serving multinational clients, SOC 1 reports are
              often essential for external audits, vendor assessments, and
              regulatory reviews.
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
                Business Advantages of SOC 1 Certification in Thailand
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
            Organizations that obtain SOC 1 Certification in Thailand benefit
            from:
          </p>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc1}
                alt="SOC 1 Benefits in Thailand"
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
                SOC 1 certification strengthens internal governance while
                enhancing external credibility.
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
                First Cert's SOC 1 Implementation Framework in Thailand
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
                First Cert follows a structured and audit-oriented SOC 1
                readiness methodology:
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
            This approach ensures organizations enter the audit phase with
            clarity and confidence.
          </p>
        </div>
      </div>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          SOC 1 Certification Cost in Thailand
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
                  The cost of SOC 1 Certification in Thailand depends on
                  multiple factors, such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Complexity and scale of service operations
                  </li>
                  <li className="check">
                    Number of financial systems and processes in scope
                  </li>
                  <li className="check">
                    Existing maturity of internal controls
                  </li>
                  <li className="check">
                    Type of report required (Type 1 or Type 2)
                  </li>
                  <li className="check">
                    Duration of testing and audit coverage
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial readiness assessment to provide
                  a transparent and customized SOC 1 cost estimate.
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
                  Get SOC 1 Certification in Thailand with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a dependable SOC 1 consulting partner in
                  Thailand, supporting service organizations with end-to-end
                  readiness, documentation, and audit coordination. Our
                  consultants align SOC 1 requirements with real operational
                  practices to ensure efficient audits and sustainable
                  compliance.
                </div>

                <div className="title small-title">
                  From initial assessment through audit completion and
                  continuous improvement, First Cert helps organizations
                  strengthen financial governance and client trust.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your SOC 1 Certification journey in Thailand with First
                  Cert and demonstrate reliability, transparency, and globally
                  recognized financial assurance standards.
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

export default ThailandSoc1;
