import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc1 from "../../../assets/img/country/middle-east/saudi-arabia/soc1-img.webp";
import benefitssoc1 from "../../../assets/img/country/middle-east/saudi-arabia/soc1-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc1.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function SaudiSoc1() {
  const benefits = [
    "Improves reliability and accuracy of financial processes.",
    "Enhances trust among clients, auditors, and regulators.",
    "Reduces financial misstatement and control risks.",
    "Aligns operations with globally recognized AICPA standards.",
    "Strengthens internal governance and accountability.",
    "Supports market expansion and client onboarding.",
  ];

  const hipaaData = [
    {
      icon: "bi-people",
      title: "Payroll and HR service providers",
    },
    {
      icon: "bi-calculator",
      title: "Accounting and finance outsourcing firms",
    },
    {
      icon: "bi-cloud-check",
      title: "IT, SaaS, and cloud service providers",
    },
    {
      icon: "bi-hdd-network",
      title: "Transaction processing companies",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and shared service centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Fintech and payment processing organizations",
    },
    {
      icon: "bi-shield-check",
      title: "Compliance, reporting, and risk management firms",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Definition",
      description:
        "Identify services, systems, and financial processes in scope.",
    },
    {
      number: "2",
      title: "Control Assessment",
      description: "Review existing ICFR controls and identify gaps.",
    },
    {
      number: "3",
      title: "Documentation Development",
      description: "Prepare control narratives, policies, and procedures.",
    },
    {
      number: "4",
      title: "Control Enablement",
      description: "Support implementation and staff awareness.",
    },
    {
      number: "5",
      title: "Readiness Validation",
      description: "Test control design and operating effectiveness.",
    },
    {
      number: "6",
      title: "SOC 1 Audit Coordination",
      description: "Support Type 1 or Type 2 audits with CPA firms.",
    },
    {
      number: "7",
      title: "Ongoing Support",
      description: "Continuous improvement and future audit preparation.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 1 Certification in Saudi Arabia | Reliable SOC 1 Consulting
          Services – First Cert
        </title>
        <meta
          name="description"
          content="Planning to achieve SOC 1 Certification in Saudi Arabia? First Cert provides end-to-end SOC 1 advisory services, including control assessment, documentation, implementation support, and audit coordination to ensure dependable financial reporting controls."
        />
        <meta
          name="keywords"
          content="SOC 1 Certification in Saudi Arabia, SOC 1 consultants in Saudi Arabia, SOC 1 audit Saudi Arabia, SOC 1 Type 1 certification Saudi Arabia, SOC 1 Type 2 certification Saudi Arabia, SOC 1 compliance Saudi Arabia, SOC 1 certification cost in Saudi Arabia, SOC 1 implementation Saudi Arabia, SOC 1 documentation Saudi Arabia, SOC 1 audit support Saudi Arabia, financial reporting controls Saudi Arabia, First Cert SOC 1 consultants, SOC 1 certification for IT companies Saudi Arabia, SOC 1 for service organizations Saudi Arabia, SOC 1 attestation Saudi Arabia, SOC 1 consulting company Saudi Arabia."
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
          <h1 className="main-title">SOC 1 Certification in Saudi Arabia</h1>
          <p className="small-desc">Assuring Financial Control Integrity</p>
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
                <b>SOC 1 Certification in Saudi Arabia</b> is essential for
                service organizations that influence client financial data or
                reporting outcomes. As companies increasingly depend on
                outsourced payroll, accounting, cloud platforms, and transaction
                services, assurance over financial controls has become a
                critical expectation.
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
                <b>First Cert</b>, assists organizations across Saudi Arabia in
                establishing robust Internal Controls over Financial Reporting
                (ICFR). Our consulting approach focuses on clarity, control
                effectiveness, and audit readiness—helping businesses meet
                international assurance requirements while reducing financial
                and operational risks.
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
            What is SOC 1 Certification in Saudi Arabia?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 1 Certification in Saudi Arabia</b> is an independent
            assurance report issued in accordance with the AICPA SSAE 18
            standard. It evaluates whether an organization has properly designed
            and implemented Internal Controls over Financial Reporting (ICFR).
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            The assessment typically covers:
          </p>
          <ul className="iso-list">
            {[
              "Financial transaction processing",
              "Accuracy and completeness of financial data",
              "System access and change management",
              "Reconciliation and reporting mechanisms",
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
            By achieving SOC 1 certification, organizations in Saudi Arabia
            demonstrate accountability, transparency, and reliability to
            clients, auditors, and global stakeholders.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Should Obtain SOC 1 Certification in Saudi Arabia?
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 1 is recommended for service providers whose activities
                directly or indirectly affect client financial reporting,
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
                        <a href="iso-9001-certification-in-saudi-arabia">
                          ISO 9001 Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-saudi-arabia">
                          ISO 27001 Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-saudi-arabia">
                          CMMI Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-saudi-arabia">
                          HIPAA Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-saudi-arabia">
                          VAPT Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-saudi-arabia">
                          GDPR Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-saudi-arabia">
                          SOC 1 Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-saudi-arabia">
                          SOC 2 Certification in Saudi Arabia
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              For companies serving U.S. or international clients, SOC 1
              certification is often a contractual or regulatory requirement.
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
                Benefits of Getting SOC 1 Certification in Saudi Arabia
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
                With <a href="/">First Cert</a>, SOC 1 compliance becomes a
                structured business improvement initiative rather than a
                one-time audit exercise.
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
                SOC 1 Certification Process in Saudi Arabia with{" "}
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
          How Much Does SOC 1 Certification Cost in Saudi Arabia?
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
                  The cost of SOC 1 Certification in Saudi Arabia varies based
                  on organizational complexity and scope. Pricing is influenced
                  by:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and operational scale
                  </li>
                  <li className="check">
                    Number of financial processes and systems involved
                  </li>
                  <li className="check">Maturity of existing controls</li>
                  <li className="check">
                    IT environment and system complexity
                  </li>
                  <li className="check">
                    Type of SOC 1 report (Type 1 or Type 2)
                  </li>
                  <li className="check">External audit scope and duration</li>
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
                  Achieve SOC 1 Certification in Saudi Arabia with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted SOC 1 consulting partner in Saudi
                  Arabia, helping organizations build and maintain strong
                  financial control frameworks aligned with international
                  assurance standards. We work closely with IT companies,
                  fintech firms, outsourcing providers, and service
                  organizations to deliver practical, audit-ready SOC 1
                  solutions.
                </div>
                <div className="title small-title">
                  From assessment and documentation to audit coordination, our
                  experts simplify the entire SOC 1 journey—ensuring confidence,
                  compliance, and long-term control effectiveness.
                </div>
                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com Start your SOC 1
                  Certification journey in Saudi Arabia with First Cert —
                  ensuring financial control integrity, audit readiness, and
                  global trust.
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

export default SaudiSoc1;
