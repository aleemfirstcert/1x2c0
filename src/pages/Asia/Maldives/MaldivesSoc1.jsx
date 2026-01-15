import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc1 from "../../../assets/img/country/asia/maldives/soc1-img.webp";
import benefitssoc1 from "../../../assets/img/country/asia/maldives/soc1-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc1.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function MaldivesSoc1() {
  const benefits = [
    "Verified assurance over financial control performance",
    "Higher confidence from international customers and auditors",
    "Fewer audit disruptions and financial reporting issues",
    "Stronger governance and ownership of finance processes",
    "Faster onboarding with enterprise and regulated clients",
  ];

  const industryData = [
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
      title: "Payment processors and fintech companies",
    },
    {
      icon: "bi-hdd-network",
      title: "SaaS vendors handling invoicing or subscription revenue",
    },
    {
      icon: "bi-headset",
      title: "BPOs and shared service centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title:
        "Organizations processing financial transactions on behalf of clients",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Service Scoping",
      description:
        "Identify systems, processes, and financial activities in scope",
    },
    {
      number: "2",
      title: "Control Evaluation",
      description: "Compare existing controls against SOC 1 requirements",
    },
    {
      number: "3",
      title: "Documentation Development",
      description:
        "Create control descriptions, narratives, and evidence mapping",
    },
    {
      number: "4",
      title: "Control Enhancement",
      description: "Close gaps and strengthen weak areas",
    },
    {
      number: "5",
      title: "Readiness Testing",
      description: "Verify controls before the formal audit",
    },
    {
      number: "6",
      title: "Audit Coordination",
      description: "Support SOC 1 Type 1 or Type 2 examinations",
    },
    {
      number: "7",
      title: "Post-Audit Support",
      description: "Assist with remediation and continuous improvement",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 1 Certification in Maldives | Financial Reporting Controls &
          Assurance – First Cert
        </title>
        <meta
          name="description"
          content="Looking for SOC 1 Certification in Maldives? First Cert provides end-to-end SOC 1 readiness, control design, documentation, and audit facilitation services to help service organizations prove the reliability of their financial reporting processes to global customers."
        />
        <meta
          name="keywords"
          content="SOC 1 Certification in Maldives, SOC 1 consultants Maldives, SOC 1 audit Maldives, SOC 1 Type 1 Maldives, SOC 1 Type 2 Maldives, SOC 1 compliance Maldives, SOC 1 certification cost Maldives, SOC 1 readiness Maldives, SOC 1 documentation Maldives, SOC 1 audit support Maldives, financial controls assurance Maldives, SOC 1 attestation Maldives, First Cert SOC 1 Maldives, SOC 1 advisory services Maldives"
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
          <h1 className="main-title">SOC 1 Certification in Maldives</h1>
          <p className="small-desc">
            Strengthening Trust in Financial Services
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
                alt="SOC 1 Certification in Maldives"
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
                <b>SOC 1 Certification in Maldives</b> enables service providers
                to demonstrate that their financial and transaction-processing
                activities are governed by strong, well-controlled systems. As
                Maldivian organizations support international clients through
                payroll services, accounting platforms, billing software,
                fintech solutions, and outsourcing operations, financial
                assurance has become a critical requirement for contract
                approval and regulatory confidence.
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
                <b>First Cert</b> helps organizations in Maldives build SOC
                1-aligned control environments that are both practical and
                audit-ready.
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
            What SOC 1 Certification in Maldives Validates
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 1 Certification in Maldives</b> evaluates whether an
            organization's internal controls that affect customer financial
            reporting are properly designed and operating as intended under the
            SSAE 18 framework. Companies can choose the report that best fits
            client and auditor needs:
          </p>

          <ul className="iso-list">
            {[
              "SOC 1 Type 1 – Confirms the design and implementation of controls at a specific point in time",
              "SOC 1 Type 2 – Verifies both design and ongoing effectiveness over a defined testing period",
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
            Typical areas reviewed include:
          </p>

          <ul className="iso-list">
            {[
              "Accuracy, completeness, and authorization of financial transactions",
              "User access and segregation of duties within finance systems",
              "Change management for billing, payroll, and accounting platforms",
              "Reconciliation processes and exception handling",
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
            The final SOC 1 report provides independent assurance that clients
            and auditors rely on.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Needs SOC 1 in Maldives
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 1 Certification in Maldives is essential for any
                organization whose services influence customer financial
                statements, including:
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
                        <a href="iso-9001-certification-in-maldives">
                          ISO 9001 Certification in Maldives
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-maldives">
                          ISO 27001 Certification in Maldives
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-maldives">
                          CMMI Certification in Maldives
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-maldives">
                          HIPAA Certification in Maldives
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-maldives">
                          VAPT Certification in Maldives
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-maldives">
                          GDPR Certification in Maldives
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-maldives">
                          SOC 1 Certification in Maldives
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-maldives">
                          SOC 2 Certification in Maldives
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              For many global companies, a SOC 1 report is a non-negotiable
              vendor requirement.
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
                Business Advantages of SOC 1 Certification in Maldives
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
            Organizations that achieve SOC 1 Certification in Maldives benefit
            from:
          </p>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc1}
                alt="SOC 1 Benefits in Maldives"
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
                SOC 1 positions Maldivian service providers as dependable and
                transparent partners.
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
                First Cert's SOC 1 Implementation Framework in Maldives
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
                First Cert delivers SOC 1 services in Maldives through a
                structured, audit-focused approach:
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
            This ensures both audit success and sustainable financial
            governance.
          </p>
        </div>
      </div>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          SOC 1 Certification Cost in Maldives
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
                  The cost of SOC 1 Certification in Maldives depends on:
                </div>

                <ul className="features">
                  <li className="check">Size and complexity of operations</li>
                  <li className="check">
                    Number of financial systems and integrations
                  </li>
                  <li className="check">
                    Maturity of existing controls and documentation
                  </li>
                  <li className="check">
                    Type of report selected (Type 1 or Type 2)
                  </li>
                  <li className="check">Audit scope and testing duration</li>
                </ul>

                <div className="title small-title">
                  First Cert conducts a SOC 1 readiness review to provide a
                  transparent, customized cost estimate.
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
                  Get SOC 1 Certified in Maldives with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted SOC 1 consulting partner in Maldives,
                  helping organizations prepare, document, and pass SOC 1 audits
                  with confidence. Our consultants ensure that compliance
                  requirements align with real-world operations to deliver
                  lasting assurance value.
                </div>

                <div className="title small-title">
                  From initial gap analysis to final reporting and ongoing
                  improvement, First Cert enables Maldivian organizations to
                  strengthen financial control governance and earn long-term
                  trust from global stakeholders.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your SOC 1 Certification journey in Maldives with First
                  Cert and demonstrate financial integrity, operational
                  reliability, and internationally recognized assurance.
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

export default MaldivesSoc1;
