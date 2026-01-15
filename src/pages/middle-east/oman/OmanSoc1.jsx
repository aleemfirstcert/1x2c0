import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc1 from "../../../assets/img/country/middle-east/oman/soc1-img.webp";
import benefitssoc1 from "../../../assets/img/country/middle-east/oman/soc1-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc1.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function OmanSoc1() {
  const benefits = [
    "Independent validation of financial control effectiveness",
    "Increased trust from clients, auditors, and stakeholders",
    "Lower risk of control breakdowns and reporting inaccuracies",
    "Clearly defined ownership of critical financial processes",
    "Faster completion of customer audits and due diligence reviews",
  ];

  const industryData = [
    {
      icon: "bi-people",
      title: "Payroll management and HR processing firms",
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
      title: "SaaS providers supporting billing or accounting functions",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and regional shared service centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Fintech companies managing or processing financial data",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Service Scoping",
      description:
        "Identify in-scope services, systems, and financial processes.",
    },
    {
      number: "2",
      title: "Control Gap Assessment",
      description: "Evaluate existing controls against SOC 1 expectations.",
    },
    {
      number: "3",
      title: "Documentation Development",
      description:
        "Prepare control descriptions, narratives, flowcharts, and evidence models.",
    },
    {
      number: "4",
      title: "Control Enhancement",
      description: "Support remediation and strengthening of identified gaps.",
    },
    {
      number: "5",
      title: "Readiness Testing",
      description:
        "Validate control design and operating effectiveness where applicable.",
    },
    {
      number: "6",
      title: "Audit Coordination",
      description:
        "Support SOC 1 Type 1 or Type 2 audits with licensed CPA firms.",
    },
    {
      number: "7",
      title: "Post-Audit Support",
      description:
        "Assist with remediation planning and ongoing compliance maintenance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 1 Certification in Oman | Expert SOC 1 Financial Controls &
          Assurance Services – First Cert
        </title>
        <meta
          name="description"
          content="Planning to obtain SOC 1 Certification in Oman? First Cert offers comprehensive SOC 1 consulting services, including financial process analysis, control framework development, readiness assessments, and complete audit coordination to enhance assurance over financial reporting activities."
        />
        <meta
          name="keywords"
          content="SOC 1 Certification in Oman, SOC 1 consultants Oman, SOC 1 audit Oman, SOC 1 Type 1 Oman, SOC 1 Type 2 Oman, SOC 1 compliance Oman, SOC 1 certification cost Oman, SOC 1 readiness Oman, SOC 1 documentation Oman, SOC 1 audit support Oman, financial controls assurance Oman, SOC 1 attestation Oman, First Cert SOC 1 Oman, SOC 1 advisory services Oman"
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
          <h1 className="main-title">SOC 1 Certification in Oman</h1>
          <p className="small-desc">
            Enhancing Confidence in Financial Reporting Controls
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
                alt="SOC 1 Certification in Oman"
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
                <b>SOC 1 Certification in Oman</b> helps service organizations
                demonstrate that the processes supporting their clients'
                financial reporting are properly designed, controlled, and
                consistently executed. As Oman continues to grow as a strategic
                center for shared services, finance outsourcing, payroll
                processing, and fintech operations, international clients
                increasingly require independent assurance over
                financial-impacting controls.
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
                <b>First Cert</b> partners with organizations across Oman to
                establish SOC 1 control environments that reflect actual
                operational workflows. Our approach prioritizes clarity,
                effectiveness, and audit alignment without introducing
                unnecessary operational burden.
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
            Overview of SOC 1 Certification in Oman
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 1 Certification in Oman</b> is conducted in accordance with
            the AICPA's SSAE 18 standard and focuses on controls at service
            organizations that may influence customer financial statements.
            Based on organizational needs, SOC 1 reporting may include:
          </p>

          <ul className="iso-list">
            {[
              "SOC 1 Type 1: Assessment of control design at a specific point in time",
              "SOC 1 Type 2: Assessment of both control design and operating effectiveness over a defined review period",
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
            A SOC 1 engagement typically reviews controls related to:
          </p>

          <ul className="iso-list">
            {[
              "Accuracy and completeness of financial transaction processing",
              "Logical access and system security affecting financial data",
              "Change management for finance-related systems and applications",
              "Reconciliations, exception handling, and monitoring activities",
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
            SOC 1 assurance confirms that financial-related services are
            governed by disciplined and well-documented control practices.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations in Oman That Require SOC 1
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 1 Certification in Oman is particularly relevant for service
                providers whose activities directly impact customer financial
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
                        <a href="iso-9001-certification-in-oman">
                          ISO 9001 Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-oman">
                          ISO 27001 Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-oman">
                          CMMI Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-oman">
                          HIPAA Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-oman">
                          VAPT Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-oman">
                          GDPR Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-oman">
                          SOC 1 Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-oman">
                          SOC 2 Certification in Oman
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              For many multinational organizations and auditors, a SOC 1 report
              is a mandatory requirement during vendor selection, financial
              audits, and regulatory reviews.
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
                Business Advantages of SOC 1 Certification in Oman
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
            Organizations that achieve SOC 1 Certification in Oman benefit from:
          </p>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc1}
                alt="SOC 1 Benefits in Oman"
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
                SOC 1 strengthens both internal governance and external
                credibility in financial service delivery.
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
                First Cert's SOC 1 Readiness and Audit Support in Oman
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
                First Cert follows a structured and audit-aligned SOC 1
                methodology in Oman:
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
            This approach ensures organizations are well-prepared for audit
            execution and long-term assurance sustainability.
          </p>
        </div>
      </div>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          SOC 1 Certification Cost in Oman
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
                  The cost of SOC 1 Certification in Oman depends on several
                  factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Complexity and scale of service operations
                  </li>
                  <li className="check">
                    Number of systems and financial processes in scope
                  </li>
                  <li className="check">
                    Current maturity of internal controls and documentation
                  </li>
                  <li className="check">
                    Selected report type (Type 1 or Type 2)
                  </li>
                  <li className="check">Length and depth of audit testing</li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial SOC 1 readiness review to
                  deliver a clear, tailored, and transparent cost estimate
                  aligned with business objectives.
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
                  Get SOC 1 Certification in Oman with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted SOC 1 consulting partner in Oman,
                  supporting service organizations with end-to-end readiness,
                  documentation, and audit facilitation. Our consultants align
                  assurance requirements with real operational practices to
                  ensure efficient audits and sustainable compliance outcomes.
                </div>

                <div className="title small-title">
                  From initial evaluation through audit completion and
                  continuous improvement, First Cert helps organizations
                  strengthen financial governance and build long-term client
                  confidence.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Begin your SOC 1 Certification journey in Oman with First Cert
                  and demonstrate transparency, reliability, and globally
                  recognized assurance over financial controls.
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

export default OmanSoc1;
