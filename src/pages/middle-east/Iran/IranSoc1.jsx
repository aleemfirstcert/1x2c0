import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc1 from "../../../assets/img/country/middle-east/iran/soc1-img.webp";
import benefitssoc1 from "../../../assets/img/country/middle-east/iran/soc1-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc1.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function IranSoc1() {
  const benefits = [
    "Independent validation of financial control reliability",
    "Increased confidence among clients, auditors, and stakeholders",
    "Reduced risk of financial misstatements and audit observations",
    "Clear ownership and accountability across financial processes",
    "Simplified client audits and faster due diligence cycles",
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
      title: "Payment processors and transaction service platforms",
    },
    {
      icon: "bi-hdd-network",
      title:
        "SaaS providers supporting invoicing, billing, or accounting systems",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and shared service centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Fintech companies handling financial data and transaction flows",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Engagement Scoping",
      description:
        "Identify in-scope services, systems, and financial processes",
    },
    {
      number: "2",
      title: "Control Assessment",
      description: "Evaluate existing controls against SOC 1 requirements",
    },
    {
      number: "3",
      title: "Documentation Development",
      description:
        "Prepare narratives, control descriptions, flowcharts, and evidence mapping",
    },
    {
      number: "4",
      title: "Control Optimization",
      description: "Strengthen or refine control activities where needed",
    },
    {
      number: "5",
      title: "Readiness Validation",
      description: "Perform pre-audit testing to confirm control effectiveness",
    },
    {
      number: "6",
      title: "Audit Coordination",
      description:
        "Support SOC 1 Type 1 or Type 2 examinations with licensed CPA firms",
    },
    {
      number: "7",
      title: "Post-Report Support",
      description:
        "Assist with remediation and continuous assurance improvement",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 1 Certification in Iran | Independent Financial Control Assurance
          Services – First Cert
        </title>
        <meta
          name="description"
          content="Planning to obtain SOC 1 Certification in Iran? First Cert provides specialized SOC 1 consulting services, including control assessment, financial process documentation, readiness testing, and end-to-end audit coordination to help service organizations demonstrate dependable financial control environments."
        />
        <meta
          name="keywords"
          content="SOC 1 Certification in Iran, SOC 1 consultants Iran, SOC 1 audit Iran, SOC 1 Type 1 Iran, SOC 1 Type 2 Iran, SOC 1 compliance Iran, SOC 1 certification cost Iran, SOC 1 readiness Iran, SOC 1 documentation Iran, SOC 1 audit support Iran, financial controls assurance Iran, SOC 1 attestation Iran, First Cert SOC 1 Iran, SOC 1 advisory services Iran"
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
          <h1 className="main-title">SOC 1 Certification in Iran</h1>
          <p className="small-desc">
            Strengthening Financial Control Assurance
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
                alt="SOC 1 Certification in Iran"
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
                <b>SOC 1 Certification in Iran</b> enables service organizations
                to demonstrate that controls influencing customer financial
                reporting are designed and operated effectively. As Iranian
                businesses expand in areas such as finance outsourcing,
                transaction processing, fintech services, shared service
                centers, and technology-enabled accounting solutions,
                international clients increasingly expect independent assurance
                over financial controls.
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
                <b>First Cert</b> partners with organizations across Iran to
                build SOC 1-aligned control environments that reflect real
                operational workflows. Our focus is on control accuracy, audit
                clarity, and long-term assurance sustainability—without
                disrupting day-to-day business activities.
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
            Understanding SOC 1 Certification in Iran
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 1 Certification in Iran</b> is performed under the AICPA's
            SSAE 18 framework and evaluates internal controls at service
            organizations that may impact client financial statements. Based on
            assurance needs, organizations can choose between two report types:
          </p>

          <ul className="iso-list">
            {[
              "SOC 1 Type 1: Evaluates whether controls are suitably designed at a specific point in time",
              "SOC 1 Type 2: Assesses both control design and operational effectiveness over a defined period",
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
            A SOC 1 examination typically reviews controls related to:
          </p>

          <ul className="iso-list">
            {[
              "Accuracy and completeness of financial transaction processing",
              "Logical access management for finance-related systems",
              "Change management for billing, payroll, and accounting platforms",
              "Reconciliation processes, exception handling, and supervisory reviews",
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
            A SOC 1 report provides formal assurance that financial-impacting
            services are governed through structured, documented, and auditable
            controls.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations in Iran That Commonly Require SOC 1
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 1 Certification in Iran is especially relevant for service
                providers whose operations affect client financial reporting,
                including:
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
                        <a href="iso-9001-certification-in-iran">
                          ISO 9001 Certification in Iran
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-iran">
                          ISO 27001 Certification in Iran
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-iran">
                          CMMI Certification in Iran
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-iran">
                          HIPAA Certification in Iran
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-iran">
                          VAPT Certification in Iran
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-iran">
                          GDPR Certification in Iran
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-iran">
                          SOC 1 Certification in Iran
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-iran">
                          SOC 2 Certification in Iran
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              For many international clients, auditors, and regulators, a SOC 1
              report is a mandatory component of vendor risk assessments and
              statutory audits.
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
                Business Benefits of SOC 1 Certification in Iran
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
            Organizations achieving SOC 1 Certification in Iran gain significant
            operational and commercial advantages:
          </p>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc1}
                alt="SOC 1 Benefits in Iran"
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
                SOC 1 transforms financial controls into a trust-building and
                governance-strengthening asset.
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
                First Cert's SOC 1 Consulting Methodology in Iran
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
                First Cert follows a structured, audit-focused SOC 1
                implementation approach tailored to Iranian organizations:
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
            This methodology ensures efficient audits while supporting
            sustainable control maturity.
          </p>
        </div>
      </div>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          SOC 1 Certification Cost in Iran
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
                  The cost of SOC 1 Certification in Iran depends on multiple
                  factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Size and complexity of service operations
                  </li>
                  <li className="check">
                    Number of financial systems and workflows in scope
                  </li>
                  <li className="check">
                    Existing control maturity and documentation readiness
                  </li>
                  <li className="check">
                    Selected report type (Type 1 or Type 2)
                  </li>
                  <li className="check">Duration and depth of audit testing</li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a detailed SOC 1 readiness assessment
                  to deliver a transparent, customized cost estimate aligned
                  with business priorities.
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
                  Get SOC 1 Certified in Iran with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted SOC 1 consulting partner in Iran,
                  providing complete readiness, documentation, and audit
                  coordination support. Our consultants ensure assurance
                  requirements align seamlessly with operational realities,
                  enabling smooth audits and long-term compliance success.
                </div>

                <div className="title small-title">
                  From initial assessment through audit completion and ongoing
                  improvement, First Cert helps organizations in Iran strengthen
                  financial governance and build lasting confidence with global
                  stakeholders.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Begin your SOC 1 Certification journey in Iran with First Cert
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

export default IranSoc1;
