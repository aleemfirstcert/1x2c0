import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc1 from "../../../assets/img/country/middle-east/qatar/soc1-img.webp";
import benefitssoc1 from "../../../assets/img/country/middle-east/qatar/soc1-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc1.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function QatarSoc1() {
  const benefits = [
    "Strengthens accuracy and reliability of financial reporting.",
    "Builds confidence among clients, auditors, and partners.",
    "Reduces operational and financial control risks.",
    "Aligns with globally accepted AICPA assurance standards.",
    "Improves internal governance and control accountability.",
    "Enhances competitiveness in regional and global markets.",
  ];

  const hipaaData = [
    {
      icon: "bi-people",
      title: "Payroll and HR Processing Companies",
    },
    {
      icon: "bi-calculator",
      title: "Accounting and Financial Service Providers",
    },
    {
      icon: "bi-cloud-check",
      title: "IT, Cloud, and Managed Service Providers",
    },
    {
      icon: "bi-hdd-network",
      title: "Data Processing and Transaction Management Firms",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and Shared Service Centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Fintech and Payment Processing Companies",
    },
    {
      icon: "bi-shield-check",
      title: "Risk, Compliance, and Reporting Service Providers",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scoping & Planning",
      description:
        "Define services, financial processes, and SOC 1 boundaries.",
    },
    {
      number: "2",
      title: "Control Gap Review",
      description: "Identify weaknesses in existing ICFR controls.",
    },
    {
      number: "3",
      title: "Documentation Development",
      description:
        "Prepare control narratives, policies, SOPs, and risk assessments.",
    },
    {
      number: "4",
      title: "Control Implementation",
      description: "Support control design, monitoring, and staff awareness.",
    },
    {
      number: "5",
      title: "Readiness Review",
      description: "Test controls and validate effectiveness.",
    },
    {
      number: "6",
      title: "SOC 1 Audit Support",
      description:
        "Coordinate with licensed CPA firms for Type 1 or Type 2 audits.",
    },
    {
      number: "7",
      title: "Ongoing Compliance",
      description: "Continuous monitoring and future audit preparation.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 1 Certification in Qatar | Trusted SOC 1 Consultants – First Cert
        </title>
        <meta
          name="description"
          content="Looking to obtain SOC 1 Certification in Qatar? First Cert delivers expert SOC 1 consulting, control design, documentation, and audit readiness services to help organizations maintain strong and reliable financial reporting controls."
        />
        <meta
          name="keywords"
          content="SOC 1 Certification in Qatar, SOC 1 consultants in Qatar, SOC 1 audit Qatar, SOC 1 Type 1 certification Qatar, SOC 1 Type 2 certification Qatar, SOC 1 compliance Qatar, SOC 1 certification cost in Qatar, SOC 1 implementation Qatar, SOC 1 documentation Qatar, SOC 1 audit support Qatar, financial reporting controls Qatar, First Cert SOC 1 consultants, SOC 1 certification for IT companies Qatar, SOC 1 for service organizations Qatar, SOC 1 attestation Qatar, SOC 1 consulting company Qatar."
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
          <h1 className="main-title">SOC 1 Certification in Qatar</h1>
          <p className="small-desc">
            Build Trust in Financial Reporting Systems
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
                <b>SOC 1 Certification in Qatar</b> is a vital assurance
                requirement for organizations that process, manage, or support
                financial information on behalf of clients. As businesses
                increasingly outsource payroll, accounting, cloud, and
                transaction-processing services, clients demand greater
                transparency and assurance over internal financial controls.
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
                <b>First Cert</b>, helps organizations in Qatar design,
                implement, and validate effective internal controls over
                financial reporting. Our structured SOC 1 consulting approach
                ensures your systems, processes, and controls meet international
                assurance expectations while reducing financial risk and
                compliance exposure.
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
            What is SOC 1 Certification in Qatar?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 1 Certification in Qatar</b> is an independent assurance
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
              "System and application controls",
              "Change management and access control",
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
            Organizations in Qatar that achieve SOC 1 certification demonstrate
            accountability, control maturity, and reliability to customers,
            auditors, and global stakeholders.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Which Businesses Need SOC 1 Certification in Qatar?
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 1 Certification is recommended for any service organization
                whose operations affect client financial reporting. Common
                sectors in Qatar include:
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
              For companies serving international clients, especially U.S.-based
              organizations, SOC 1 certification is often a contractual
              requirement.
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
                Benefits of Getting SOC 1 Certification in Qatar
              </h1>
            </div>
          </div>

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
                With <a href="/">First Cert</a>, organizations in Qatar achieve
                SOC 1 compliance through a practical, efficient, and
                business-aligned methodology.
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
                SOC 1 Certification Process in Qatar with{" "}
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
          How Much Does SOC 1 Certification Cost in Qatar?
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
                  The cost of SOC 1 Certification in Qatar varies based on
                  organizational complexity and scope. Pricing is influenced by:
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
                  First Cert provides transparent, customized pricing after an
                  initial assessment to ensure cost-effective compliance.
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
                  Achieve SOC 1 Certification in Qatar with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted SOC 1 consulting partner for
                  organizations in Qatar seeking reliable financial reporting
                  assurance. We support businesses across IT services, fintech,
                  SaaS, outsourcing, and financial operations with complete SOC
                  1 implementation and audit readiness services.
                </div>
                <div className="title small-title">
                  Our consultants focus on building practical, sustainable ICFR
                  frameworks that meet international assurance standards while
                  supporting business growth and client confidence.
                </div>
                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com Start your SOC 1
                  Certification journey in Qatar with First Cert — ensuring
                  financial control integrity, audit readiness, and global
                  trust.
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

export default QatarSoc1;
