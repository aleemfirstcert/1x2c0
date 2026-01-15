import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc1 from "../../../assets/img/country/africa/mauritius/soc1-img.webp";
import benefitssoc1 from "../../../assets/img/country/africa/mauritius/soc1-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc1.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function MauritiusSoc1() {
  const benefits = [
    "Independent validation of financial control effectiveness",
    "Higher trust from customers, auditors, and regulators",
    "Reduced audit queries and financial reporting risks",
    "Stronger ownership and governance over financial processes",
    "Faster onboarding and smoother compliance reviews",
  ];

  const industryData = [
    {
      icon: "bi-people",
      title: "Payroll and HR processing firms",
    },
    {
      icon: "bi-calculator",
      title: "Accounting and finance outsourcing providers",
    },
    {
      icon: "bi-cloud-check",
      title: "Fintech platforms and payment processors",
    },
    {
      icon: "bi-hdd-network",
      title: "SaaS companies handling invoicing or revenue systems",
    },
    {
      icon: "bi-headset",
      title: "BPOs and shared service centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Organizations managing financial data flows for clients",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Definition",
      description: "Identify in-scope services, systems, and processes",
    },
    {
      number: "2",
      title: "Control Review",
      description: "Evaluate existing controls against SOC 1 standards",
    },
    {
      number: "3",
      title: "Documentation",
      description: "Prepare narratives, flowcharts, and control matrices",
    },
    {
      number: "4",
      title: "Gap Remediation",
      description: "Strengthen or formalize weak control areas",
    },
    {
      number: "5",
      title: "Readiness Testing",
      description: "Validate controls before formal audit",
    },
    {
      number: "6",
      title: "Audit Coordination",
      description: "Support SOC 1 Type 1 or Type 2 examinations",
    },
    {
      number: "7",
      title: "Post-Audit Support",
      description: "Assist with corrective actions and ongoing improvement",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 1 Certification in Mauritius | Financial Control Assurance & Audit
          Advisory – First Cert
        </title>
        <meta
          name="description"
          content="Need SOC 1 Certification in Mauritius? First Cert offers expert SOC 1 readiness, financial control documentation, and audit coordination services to help service providers demonstrate reliable and compliant financial reporting controls to global clients."
        />
        <meta
          name="keywords"
          content="SOC 1 Certification in Mauritius, SOC 1 consultants Mauritius, SOC 1 audit Mauritius, SOC 1 Type 1 Mauritius, SOC 1 Type 2 Mauritius, SOC 1 compliance Mauritius, SOC 1 certification cost Mauritius, SOC 1 readiness Mauritius, SOC 1 documentation Mauritius, SOC 1 audit support Mauritius, financial controls assurance Mauritius, SOC 1 attestation Mauritius, First Cert SOC 1 Mauritius, SOC 1 advisory services Mauritius"
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
          <h1 className="main-title">SOC 1 Certification in Mauritius</h1>
          <p className="small-desc">Driving Financial Control Integrity</p>
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
                alt="SOC 1 Certification in Mauritius"
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
                <b>SOC 1 Certification in Mauritius</b> enables service
                organizations to prove that their financial processing
                activities are secure, accurate, and properly governed. As
                Mauritius-based companies provide payroll processing, financial
                outsourcing, SaaS billing platforms, and transaction management
                services to international clients, demonstrating control
                reliability has become a contractual and regulatory requirement.
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
                <b>First Cert</b> supports organizations in Mauritius by
                aligning real business operations with SOC 1 standards in a
                practical, audit-ready manner.
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
            What SOC 1 Certification in Mauritius Covers
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 1 Certification in Mauritius</b> evaluates the internal
            controls that influence customer financial reporting under the SSAE
            18 assurance framework. Organizations may choose between two types
            of reports based on client and auditor expectations:
          </p>

          <ul className="iso-list">
            {[
              "SOC 1 Type 1 – Reviews control design at a specific date",
              "SOC 1 Type 2 – Assesses both control design and operating effectiveness over a review period",
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
            SOC 1 assessments typically examine:
          </p>

          <ul className="iso-list">
            {[
              "Accuracy and authorization of financial transactions",
              "Security and access management for accounting platforms",
              "Change control over billing, payroll, and finance systems",
              "Reconciliation, exception handling, and supervisory oversight",
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
            The final SOC 1 report provides third-party assurance that customers
            and auditors can rely upon.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Requires SOC 1 in Mauritius
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 1 Certification in Mauritius is essential for organizations
                whose services impact client financial statements, including:
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
                        <a href="iso-9001-certification-in-mauritius">
                          ISO 9001 Certification in Mauritius
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-mauritius">
                          ISO 27001 Certification in Mauritius
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-mauritius">
                          CMMI Certification in Mauritius
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-mauritius">
                          HIPAA Certification in Mauritius
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-mauritius">
                          VAPT Certification in Mauritius
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-mauritius">
                          GDPR Certification in Mauritius
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-mauritius">
                          SOC 1 Certification in Mauritius
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-mauritius">
                          SOC 2 Certification in Mauritius
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              For many global customers, a SOC 1 report is a mandatory condition
              for vendor approval and annual risk reviews.
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
                Key Benefits of SOC 1 Certification in Mauritius
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
            Organizations that obtain SOC 1 Certification in Mauritius gain:
          </p>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc1}
                alt="SOC 1 Benefits in Mauritius"
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
                SOC 1 positions Mauritius organizations as reliable and
                transparent financial service partners.
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
                First Cert's SOC 1 Delivery Model in Mauritius
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
                First Cert follows a structured SOC 1 readiness and audit
                support framework:
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
            This ensures both audit success and long-term financial governance
            maturity.
          </p>
        </div>
      </div>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          SOC 1 Certification Cost in Mauritius
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
                  The cost of SOC 1 Certification in Mauritius depends on:
                </div>

                <ul className="features">
                  <li className="check">
                    Size and complexity of service operations
                  </li>
                  <li className="check">
                    Number of financial systems and integrations
                  </li>
                  <li className="check">
                    Existing documentation and control maturity
                  </li>
                  <li className="check">
                    Chosen report type (Type 1 or Type 2)
                  </li>
                  <li className="check">Audit scope and testing duration</li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a SOC 1 readiness assessment to provide
                  a clear, tailored cost estimate aligned with your business and
                  client requirements.
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
                  Get SOC 1 Certified in Mauritius with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted SOC 1 consulting firm in Mauritius,
                  delivering complete readiness, documentation, and audit
                  support for organizations serving international clients. Our
                  consultants ensure SOC 1 requirements are aligned with daily
                  operations for sustainable compliance.
                </div>

                <div className="title small-title">
                  From initial gap analysis to final audit reporting and ongoing
                  improvement, First Cert helps Mauritius-based organizations
                  strengthen financial governance and build long-term confidence
                  with global stakeholders.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your SOC 1 Certification journey in Mauritius with First
                  Cert and demonstrate financial integrity, operational
                  transparency, and internationally recognized assurance.
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

export default MauritiusSoc1;
