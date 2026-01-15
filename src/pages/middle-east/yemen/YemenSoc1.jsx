import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc1 from "../../../assets/img/country/middle-east/yemen/soc1-img.avif";
import benefitssoc1 from "../../../assets/img/country/middle-east/yemen/soc1-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc1.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function YemenSoc1() {
  const benefits = [
    "Improved reliability of financial reporting processes",
    "Higher confidence among clients, auditors, and partners",
    "Reduced risk of financial misstatements and control failures",
    "Alignment with internationally accepted AICPA standards",
    "Stronger internal governance and accountability",
    "Enhanced credibility for global business engagements",
  ];

  const hipaaData = [
    {
      icon: "bi-people",
      title: "Payroll and human resource service providers",
    },
    {
      icon: "bi-calculator",
      title: "Accounting and finance outsourcing companies",
    },
    {
      icon: "bi-cloud-check",
      title: "IT, SaaS, and cloud service providers",
    },
    {
      icon: "bi-hdd-network",
      title: "Transaction processing and data management firms",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and shared service centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Fintech and payment service organizations",
    },
    {
      icon: "bi-shield-check",
      title: "Compliance and reporting support firms",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scoping & Planning",
      description:
        "Define services, systems, and financial processes in scope.",
    },
    {
      number: "2",
      title: "Control Gap Assessment",
      description: "Review existing ICFR controls and identify weaknesses.",
    },
    {
      number: "3",
      title: "Documentation Support",
      description: "Develop control descriptions, policies, and procedures.",
    },
    {
      number: "4",
      title: "Control Implementation",
      description: "Assist with operationalizing controls and staff awareness.",
    },
    {
      number: "5",
      title: "Readiness Testing",
      description: "Validate design and operating effectiveness of controls.",
    },
    {
      number: "6",
      title: "SOC 1 Audit Coordination",
      description: "Support Type 1 or Type 2 audits with licensed CPA firms.",
    },
    {
      number: "7",
      title: "Ongoing Assistance",
      description: "Guidance for future audits and continuous improvement.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 1 Certification in Yemen | Professional SOC 1 Advisory Services –
          First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve SOC 1 Certification in Yemen? First Cert delivers comprehensive SOC 1 consulting, financial control assessment, documentation, and audit preparation services to help organizations ensure reliable financial reporting systems."
        />
        <meta
          name="keywords"
          content="SOC 1 Certification in Yemen, SOC 1 consultants in Yemen, SOC 1 audit Yemen, SOC 1 Type 1 certification Yemen, SOC 1 Type 2 certification Yemen, SOC 1 compliance Yemen, SOC 1 certification cost in Yemen, SOC 1 implementation Yemen, SOC 1 documentation Yemen, SOC 1 audit support Yemen, financial reporting controls Yemen, First Cert SOC 1 consultants, SOC 1 certification for IT companies Yemen, SOC 1 for service organizations Yemen, SOC 1 attestation Yemen, SOC 1 consulting company Yemen."
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
          <h1 className="main-title">SOC 1 Certification in Yemen</h1>
          <p className="small-desc">
            Demonstrating Trust in Financial Operations
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
                <b>SOC 1 Certification in Yemen</b> is designed for service
                organizations whose activities impact customer financial records
                or reporting accuracy. As businesses increasingly rely on
                third-party service providers for accounting, payroll, IT
                platforms, and transaction processing, demonstrating strong
                financial control assurance has become essential.
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
                <b>First Cert</b>, supports organizations in Yemen by helping
                them establish well-defined Internal Controls over Financial
                Reporting (ICFR). Our approach emphasizes practical control
                design, transparency, and audit preparedness—allowing
                organizations to meet international assurance expectations while
                strengthening financial governance.
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
            What is SOC 1 Certification in Yemen?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 1 Certification in Yemen</b> is an independent assurance
            report issued in accordance with the AICPA SSAE 18 standard. It
            evaluates whether an organization has properly designed and
            implemented Internal Controls over Financial Reporting (ICFR).
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            SOC 1 focuses on controls that influence the accuracy and integrity
            of client financial statements, including:
          </p>
          <ul className="iso-list">
            {[
              "Financial transaction processing",
              "Data accuracy and reconciliation",
              "Logical access and change management controls",
              "Reporting and monitoring mechanisms",
              "Security and confidentiality of financial data",
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
            Organizations in Yemen that achieve SOC 1 certification demonstrate
            accountability, control maturity, and reliability to customers,
            auditors, and global stakeholders.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Which Businesses Need SOC 1 Certification in Yemen?
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 1 Certification in Yemen is relevant for service
                organizations whose systems or services affect customer
                financial reporting, such as:
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
                Benefits of Getting SOC 1 Certification in Yemen
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
            Organizations obtaining SOC 1 Certification in Yemen gain clear
            business advantages.
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
                SOC 1 certification helps organizations move beyond compliance
                and build long-term trust.
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
                SOC 1 Certification Process in Yemen with{" "}
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
          How Much Does SOC 1 Certification Cost in Yemen?
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
                  The cost of SOC 1 Certification in Yemen depends on several
                  organizational factors, including:
                </div>

                <ul className="features">
                  <li className="check">Size of the organization</li>
                  <li className="check">
                    Number of financial processes in scope
                  </li>
                  <li className="check">Maturity of existing controls</li>
                  <li className="check">
                    IT environment and system complexity
                  </li>
                  <li className="check">
                    Type of SOC 1 report (Type 1 or Type 2)
                  </li>
                  <li className="check">
                    Duration and depth of external audit
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial assessment to provide
                  transparent and customized pricing aligned with your business
                  needs.
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
                  Achieve SOC 1 Certification in Yemen with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a reliable SOC 1 consulting partner for
                  organizations in Yemen seeking dependable financial control
                  assurance. We help service organizations design, document, and
                  validate effective ICFR frameworks that meet global assurance
                  standards.
                </div>
                <div className="title small-title">
                  With a practical, business-aligned approach, our consultants
                  simplify the SOC 1 journey—from assessment and documentation
                  to audit coordination and ongoing support—ensuring confidence,
                  compliance, and sustainable control effectiveness.
                </div>
                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com Start your SOC 1
                  Certification in Yemen with First Cert and demonstrate
                  financial integrity, audit readiness, and international trust.
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

export default YemenSoc1;
