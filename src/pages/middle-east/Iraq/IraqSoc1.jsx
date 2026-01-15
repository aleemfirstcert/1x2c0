import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc1 from "../../../assets/img/country/middle-east/iraq/soc1-img.webp";
import benefitssoc1 from "../../../assets/img/country/middle-east/iraq/soc1-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc1.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function IraqSoc1() {
  const benefits = [
    "Independent validation of financial control effectiveness",
    "Increased confidence among customers, auditors, and regulators",
    "Reduced likelihood of financial errors, control gaps, and audit findings",
    "Clear ownership and accountability across financial processes",
    "Streamlined client audits and faster due diligence cycles",
  ];

  const industryData = [
    {
      icon: "bi-people",
      title: "Payroll management and HR service organizations",
    },
    {
      icon: "bi-calculator",
      title: "Accounting, bookkeeping, and finance outsourcing providers",
    },
    {
      icon: "bi-cloud-check",
      title: "Payment processors and transaction service platforms",
    },
    {
      icon: "bi-hdd-network",
      title:
        "SaaS companies supporting billing, invoicing, or accounting functions",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and shared service centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title:
        "Fintech firms managing financial transactions or sensitive accounting data",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Identification",
      description: "Define in-scope services, systems, and financial processes",
    },
    {
      number: "2",
      title: "Control Gap Review",
      description: "Compare existing practices against SOC 1 criteria",
    },
    {
      number: "3",
      title: "Documentation Development",
      description:
        "Prepare narratives, control descriptions, flowcharts, and evidence matrices",
    },
    {
      number: "4",
      title: "Control Enhancement",
      description: "Assist in strengthening or redesigning control activities",
    },
    {
      number: "5",
      title: "Readiness Testing",
      description: "Validate control design and effectiveness before audit",
    },
    {
      number: "6",
      title: "Audit Facilitation",
      description:
        "Coordinate with licensed CPA firms for Type 1 or Type 2 examinations",
    },
    {
      number: "7",
      title: "Post-Audit Support",
      description: "Address observations and support continuous compliance",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 1 Certification in Iraq | Independent Assurance for Financial
          Control Frameworks – First Cert
        </title>
        <meta
          name="description"
          content="Planning to obtain SOC 1 Certification in Iraq? First Cert offers expert SOC 1 readiness, documentation, control validation, and audit coordination services to help service organizations demonstrate reliable financial control environments aligned with global assurance standards."
        />
        <meta
          name="keywords"
          content="SOC 1 Certification in Iraq, SOC 1 consultants Iraq, SOC 1 audit Iraq, SOC 1 Type 1 Iraq, SOC 1 Type 2 Iraq, SOC 1 compliance Iraq, SOC 1 certification cost Iraq, SOC 1 readiness Iraq, SOC 1 documentation Iraq, SOC 1 audit support Iraq, financial controls assurance Iraq, SOC 1 attestation Iraq, First Cert SOC 1 Iraq, SOC 1 advisory services Iraq"
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
          <h1 className="main-title">SOC 1 Certification in Iraq</h1>
          <p className="small-desc">
            Building Confidence in Financial Control Integrity
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
                alt="SOC 1 Certification in Iraq"
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
                <b>SOC 1 Certification in Iraq</b> allows service organizations
                to provide independent assurance that their internal controls
                impacting client financial reporting are properly designed and
                consistently applied. As Iraq continues to grow in areas such as
                financial services, outsourced accounting, shared service
                operations, fintech solutions, and transaction processing,
                international clients increasingly require formal assurance over
                financial control reliability.
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
                <b>First Cert</b> works closely with organizations in Iraq to
                establish SOC 1 control environments that align with real
                business operations. Our approach prioritizes accuracy, audit
                transparency, and long-term control sustainability without
                interrupting daily workflows.
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
            SOC 1 Certification in Iraq Explained
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 1 Certification in Iraq</b> is conducted in accordance with
            the AICPA's SSAE 18 standards and focuses on controls at service
            organizations that may influence customer financial statements.
            Based on business needs, organizations may opt for one of the
            following report types:
          </p>

          <ul className="iso-list">
            {[
              "SOC 1 Type 1: Reviews the design suitability of controls at a specific date",
              "SOC 1 Type 2: Assesses both control design and operational effectiveness over a defined review period",
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
            A SOC 1 engagement typically evaluates controls related to:
          </p>

          <ul className="iso-list">
            {[
              "Accuracy and completeness of financial transaction processing",
              "Logical access controls over finance-related systems",
              "Change management procedures for accounting and billing applications",
              "Reconciliations, exception handling, and supervisory oversight",
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
            A SOC 1 report confirms that financial-impacting services are
            governed through structured, documented, and auditable control
            practices.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations in Iraq That Need SOC 1 Assurance
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 1 Certification in Iraq is particularly valuable for service
                providers whose activities directly affect customer financial
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
                        <a href="iso-9001-certification-in-iraq">
                          ISO 9001 Certification in Iraq
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-iraq">
                          ISO 27001 Certification in Iraq
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-iraq">
                          CMMI Certification in Iraq
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-iraq">
                          HIPAA Certification in Iraq
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-iraq">
                          VAPT Certification in Iraq
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-iraq">
                          GDPR Certification in Iraq
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-iraq">
                          SOC 1 Certification in Iraq
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-iraq">
                          SOC 2 Certification in Iraq
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              For many global clients and auditors, a SOC 1 report is a critical
              requirement during vendor evaluations, statutory audits, and
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
                Business Advantages of SOC 1 Certification in Iraq
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
            Organizations achieving SOC 1 Certification in Iraq benefit from:
          </p>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc1}
                alt="SOC 1 Benefits in Iraq"
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
                SOC 1 strengthens internal governance while enhancing external
                trust in service delivery.
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
                First Cert's SOC 1 Advisory & Audit Support Approach in Iraq
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
                First Cert applies a structured, audit-aligned SOC 1 methodology
                customized for organizations operating in Iraq:
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
            This approach ensures audit readiness while promoting mature,
            sustainable assurance practices.
          </p>
        </div>
      </div>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          SOC 1 Certification Cost in Iraq
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
                  The cost of SOC 1 Certification in Iraq depends on several
                  variables, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Scale and complexity of service operations
                  </li>
                  <li className="check">
                    Number of systems and financial workflows in scope
                  </li>
                  <li className="check">
                    Existing documentation and control maturity
                  </li>
                  <li className="check">
                    Selected report type (Type 1 or Type 2)
                  </li>
                  <li className="check">Length and depth of audit testing</li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a detailed readiness assessment to
                  provide a clear, customized cost estimate aligned with
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
                  Achieve SOC 1 Certification in Iraq with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted SOC 1 consulting partner in Iraq,
                  offering complete readiness, documentation, and audit
                  coordination services. Our specialists ensure that assurance
                  requirements integrate smoothly with operational realities,
                  enabling efficient audits and long-term compliance success.
                </div>

                <div className="title small-title">
                  From initial evaluation to audit completion and continuous
                  improvement, First Cert helps organizations strengthen
                  financial governance and build lasting confidence with global
                  stakeholders.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Begin your SOC 1 Certification journey in Iraq with First Cert
                  and demonstrate transparency, reliability, and internationally
                  recognized assurance over your financial control environment.
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

export default IraqSoc1;
