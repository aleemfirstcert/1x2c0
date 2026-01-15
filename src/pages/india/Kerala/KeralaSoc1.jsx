import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc1 from "../../../assets/img/country/india/kerala/soc1-img.webp";
import benefitssoc1 from "../../../assets/img/country/india/kerala/soc1-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc1.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function KeralaSoc1() {
  const benefits = [
    "Independent confirmation of financial control reliability",
    "Higher confidence from global customers and auditors",
    "Reduced time and effort during client audits",
    "Improved structure in financial and operational processes",
    "Faster onboarding with regulated and enterprise customers",
  ];

  const industryData = [
    {
      icon: "bi-people",
      title: "Payroll management companies",
    },
    {
      icon: "bi-calculator",
      title: "Finance and accounting outsourcing providers",
    },
    {
      icon: "bi-cloud-check",
      title: "Digital payment processors and fintech platforms",
    },
    {
      icon: "bi-hdd-network",
      title: "SaaS companies managing subscriptions and invoicing",
    },
    {
      icon: "bi-headset",
      title: "Business process and shared service centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title:
        "Organizations processing financial transactions for third parties",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Identification",
      description:
        "Identify financial systems, services, and workflows in scope",
    },
    {
      number: "2",
      title: "Control Evaluation",
      description: "Evaluate existing controls against SOC 1 standards",
    },
    {
      number: "3",
      title: "Documentation Preparation",
      description:
        "Prepare control descriptions, narratives, and flow diagrams",
    },
    {
      number: "4",
      title: "Control Strengthening",
      description: "Strengthen gaps in process design and execution",
    },
    {
      number: "5",
      title: "Readiness Testing",
      description: "Conduct readiness testing before the formal audit",
    },
    {
      number: "6",
      title: "Audit Coordination",
      description: "Coordinate Type 1 or Type 2 assessments with auditors",
    },
    {
      number: "7",
      title: "Continuous Improvement",
      description: "Support continuous control improvement after certification",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 1 Certification in Kerala | Financial Control Assurance Services –
          First Cert
        </title>
        <meta
          name="description"
          content="Get SOC 1 Certification in Kerala with First Cert. We deliver readiness reviews, control documentation, and audit coordination to ensure trusted financial reporting."
        />
        <meta
          name="keywords"
          content="SOC 1 Certification in Kerala, SOC 1 consultants Kerala, SOC 1 audit Kerala, SOC 1 Type 1 Kerala, SOC 1 Type 2 Kerala, SOC 1 compliance Kerala, SOC 1 certification cost Kerala, SOC 1 readiness Kerala, SOC 1 documentation Kerala, SOC 1 audit support Kerala, financial controls assurance Kerala, SOC 1 attestation Kerala, First Cert SOC 1 Kerala, SOC 1 advisory services Kerala"
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
          <h1 className="main-title">SOC 1 Certification in Kerala</h1>
          <p className="small-desc">Strengthening Financial Governance</p>
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
                alt="SOC 1 Certification in Kerala"
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
                <b>SOC 1 Certification in Kerala</b> enables service
                organizations to prove that their financial and
                transaction-processing activities are accurate, controlled, and
                dependable. With Kerala expanding rapidly in SaaS, fintech,
                payroll outsourcing, accounting services, and IT-enabled
                operations, global clients expect independent validation of
                financial controls.
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
                <b>First Cert</b> supports Kerala businesses by designing
                compliance frameworks that match both operational realities and
                international audit expectations.
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
            What SOC 1 Certification in Kerala Validates
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 1 Certification in Kerala</b> evaluates the effectiveness of
            internal controls that affect customer financial reporting under the
            SSAE 18 standard. Organizations can choose between Type 1 and Type 2
            reports depending on whether they want design validation or
            performance testing over time.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Key control areas reviewed include:
          </p>

          <ul className="iso-list">
            {[
              "Correctness and completeness of transaction processing",
              "User access management for finance systems",
              "Controls over system changes and billing platforms",
              "Monitoring, reconciliation, and exception handling",
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
            The final SOC 1 report gives clients and auditors confidence in the
            organization's financial control environment.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Needs SOC 1 Certification in Kerala
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 1 Certification in Kerala is required for organizations that
                handle or influence client financial data, such as:
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
                        <a href="iso-9001-certification-in-kerala">
                          ISO 9001 Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-kerala">
                          ISO 27001 Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-kerala">
                          CMMI Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-kerala">
                          HIPAA Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-kerala">
                          VAPT Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-kerala">
                          GDPR Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-kerala">
                          SOC 1 Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-kerala">
                          SOC 2 Certification in Kerala
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              For many international clients, a SOC 1 report is a mandatory
              qualification for vendor approval.
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
                Business Benefits of SOC 1 Certification in Kerala
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
            Organizations that achieve SOC 1 Certification in Kerala gain:
          </p>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc1}
                alt="SOC 1 Benefits in Kerala"
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
                SOC 1 positions Kerala service providers as transparent,
                dependable, and audit-ready partners.
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
                First Cert's SOC 1 Consulting Process in Kerala
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
                First Cert follows a structured SOC 1 methodology for Kerala
                organizations:
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
            This approach ensures both audit success and long-term financial
            governance.
          </p>
        </div>
      </div>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          SOC 1 Certification Cost in Kerala
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
                  The cost of SOC 1 Certification in Kerala is influenced by:
                </div>

                <ul className="features">
                  <li className="check">
                    Size and complexity of the organization
                  </li>
                  <li className="check">
                    Number of financial systems and integrations
                  </li>
                  <li className="check">
                    Current level of internal control maturity
                  </li>
                  <li className="check">
                    Choice between Type 1 and Type 2 reports
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert performs a readiness review to provide a clear and
                  customized pricing plan aligned with business needs.
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
                  Get SOC 1 Certified in Kerala with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted SOC 1 consulting partner in Kerala,
                  guiding organizations from initial assessment through audit
                  completion and ongoing control enhancement. Our team ensures
                  that compliance is practical, sustainable, and aligned with
                  daily operations.
                </div>

                <div className="title small-title-p">
                  From gap analysis to final reporting, Kerala businesses can
                  strengthen financial controls, meet international
                  requirements, and build long-term credibility.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your SOC 1 Certification in Kerala with First Cert and
                  demonstrate financial reliability, operational integrity, and
                  global assurance.
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

export default KeralaSoc1;
