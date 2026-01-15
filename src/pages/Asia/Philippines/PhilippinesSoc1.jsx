import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc1 from "../../../assets/img/country/asia/philippines/soc1-img.webp";
import benefitssoc1 from "../../../assets/img/country/asia/philippines/soc1-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc1.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function PhilippinesSoc1() {
  const benefits = [
    "Improved Financial Reporting Accuracy",
    "Enhanced Customer Trust",
    "Reduced Financial and Operational Risks",
    "Compliance with AICPA Global Standards",
    "Competitive Advantage in Domestic & Global Markets",
    "Stronger Internal Controls & Governance",
  ];

  const hipaaData = [
    {
      icon: "bi-cash-stack",
      title: "Payroll Processing Companies",
    },
    {
      icon: "bi-journal-check",
      title: "Accounting & Financial Service Providers",
    },
    {
      icon: "bi-cloud-check",
      title: "IT & Cloud-Based Service Providers",
    },
    {
      icon: "bi-hdd-network",
      title: "Data Processing and Transaction Management Firms",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs & Outsourcing Companies",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Fintech & Payment Processing Organizations",
    },
    {
      icon: "bi-shield-check",
      title: "Risk & Compliance Service Providers",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Initial Consultation",
      description:
        "Understanding your business model, financial processes, and SOC 1 scope.",
    },
    {
      number: "2",
      title: "Gap Assessment",
      description:
        "Evaluating existing internal controls and identifying remediation areas.",
    },
    {
      number: "3",
      title: "Documentation Support",
      description:
        "Preparation of policies, procedures, process flow diagrams, control descriptions, risk assessments, and SOPs.",
    },
    {
      number: "4",
      title: "Implementation of Controls",
      description:
        "Includes monitoring mechanisms, employee training, operational alignment, and maturity improvements.",
    },
    {
      number: "5",
      title: "Internal Audit & Testing",
      description:
        "A pre-audit review to verify control effectiveness.",
    },
    {
      number: "6",
      title: "SOC 1 External Audit (Type 1 or Type 2)",
      description:
        "Performed by a licensed CPA firm — Type 1 evaluates control design at a point in time, while Type 2 assesses design and operating effectiveness over a period.",
    },
    {
      number: "7",
      title: "Continuous Compliance Support",
      description:
        "Surveillance reviews, monitoring, documentation updates, and next-year audit preparation.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 1 Certification in Philippines | Affordable SOC 1 Consultants – First
          Cert
        </title>
        <meta
          name="description"
          content="Looking for SOC 1 Certification in Philippines? First Cert provides expert SOC 1 consulting, documentation, implementation, and audit readiness support to help organizations achieve secure and compliant financial reporting controls."
        />
        <meta
          name="keywords"
          content="SOC 1 Certification in Philippines, SOC 1 consultants in Philippines, SOC 1 audit Philippines, SOC 1 Type 1 certification Philippines, SOC 1 Type 2 certification Philippines, SOC 1 compliance Philippines, SOC 1 certification cost in Philippines, SOC 1 implementation Philippines, SOC 1 documentation Philippines, SOC 1 audit support Philippines, financial reporting controls Philippines, First Cert SOC 1 consultants, SOC 1 certification for IT companies Philippines, SOC 1 for service organizations Philippines, SOC 1 attestation Philippines, SOC 1 consulting company Philippines."
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
          <h1 className="main-title">SOC 1 Certification in Philippines</h1>
          <p className="small-desc">
            Strengthen Your Financial Reporting Controls with Confidence
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
                SOC 1 Certification has become a critical requirement for
                service-based organizations in Philippines that manage or influence
                their clients’ financial reporting. As global businesses
                increasingly rely on third-party service providers, the demand
                for transparent, secure, and well-controlled financial processes
                has grown significantly. SOC 1 ensures your organization has
                effective internal controls that prevent financial risks,
                errors, and compliance challenges.
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
                With <b>First Cert</b>, businesses in Philippines can navigate the
                entire SOC 1 compliance lifecycle smoothly. From documentation
                and risk assessment to control implementation and audit
                preparation, we deliver a structured, affordable, and efficient
                pathway to achieve SOC 1 Type 1 or SOC 2 Type 2 certification.
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
            What is SOC 1 Certification in Philippines?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 1 Certification in Philippines</b> is an internationally recognized
            attestation performed under the <b>AICPA SSAE 18 standard</b>. It evaluates
            whether a service organization has appropriate internal controls
            over financial reporting (ICFR).
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            SOC 1 is particularly relevant for businesses whose processes
            directly affect the accuracy of financial transactions and
            statements. The certification focuses on verifying controls related
            to:
          </p>
          <ul className="iso-list">
            {[
              "Data processing and management",
              "Customer financial transactions",
              "Accuracy and reliability of financial reporting",
              "Operational workflows impacting financial data",
              "System and application controls",
              "Security and confidentiality of financial information",
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
            Companies across Philippines — especially in IT, cloud services, fintech,
            payroll, outsourcing, and financial processing — rely on SOC 1
            compliance to establish reliability and build customer confidence.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Achieving SOC 1 certification demonstrates accountability, reduces
            financial vulnerabilities, and provides assurance to clients that
            their data is handled with precision and care.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Which Businesses Need SOC 1 Certification in Philippines?
              </h2>

              <p className="text-center section-sub mb-5">
                Any company whose systems or processes impact clients’ financial
                reporting should consider SOC 1. This includes:
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
                        <a href="iso-9001-certification-in-philippines">
                          ISO 9001 Certification in Philippines
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-philippines">
                          ISO 27001 Certification in Philippines
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-philippines">
                          CMMI Certification in Philippines
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-philippines">
                          HIPAA Certification in Philippines
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-philippines">
                          VAPT Certification in Philippines
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-philippines">
                          GDPR Certification in Philippines
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-philippines">
                          SOC 1 Certification in Philippines
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-philippines">
                          SOC 2 Certification in Philippines
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              For companies targeting international contracts — especially in
              the U.S. and Europe — SOC 1 is often mandatory before onboarding.
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
                Benefits of Getting SOC 1 Certification in Philippines
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
                With <a href="/">First Cert</a>, structured methodology,
                businesses in Philippines experience a seamless and outcome-driven
                approach to SOC 1 Certification.
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
                SOC 1 Certification in Philippines – Simple & Structured Process with{" "}
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
          How Much Does SOC 1 Certification Cost in Philippines?
        </h2>

        <div className="container">
          <div className="row justify-content-center align-items-start">
            {/* CARD 1 */}
            <div className="col-md-6 mb-4">
              <div
                className="plan-card"
                style={{ "--accent-color": "#fa0038" }}
              >
                <div className="title small-title">SOC 1 certification costs in Philippines vary based on:</div>

                <ul className="features">
                  <li className="check">Company size</li>
                  <li className="check">Number of financial processes</li>
                  <li className="check">Existing control maturity</li>
                  <li className="check">IT system complexity</li>
                  <li className="check">Type of report (Type 1 vs. Type 2)</li>
                  <li className="check">Documentation and training needs</li>
                  <li className="check">Duration of external audit</li>
                </ul>

                <div className="title small-title">
                  First Cert provides customized and transparent pricing after an initial assessment.
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
                  Achieve SOC 1 Certification in Philippines with First Cert – Your
                  Trusted Compliance Partner
                </div>
                <div className="title small-title">
                  If you’re planning to achieve SOC 1 Certification in Philippines,
                  First Cert is your reliable partner for complete consulting
                  support. We help organizations build strong ICFR systems
                  aligned with global AICPA standards, ensuring trust,
                  reliability, and compliance. With extensive experience across
                  IT, financial services, SaaS, BPOs, and outsourcing companies,
                  we deliver smooth, cost-effective, and result-driven SOC 1
                  compliance services.
                </div>
                <div className="title small-title-p">
                  From assessment and documentation to implementation and audit
                  preparation, our team simplifies the entire certification
                  journey.
                </div>
                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com Start your SOC 1
                  Certification journey today with First Cert — ensuring
                  financial accuracy, operational integrity, and global
                  compliance.
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

export default PhilippinesSoc1;
