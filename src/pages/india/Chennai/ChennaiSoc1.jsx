import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc1 from "../../../assets/img/country/asia/maldives/soc1-img.webp";
import benefitssoc1 from "../../../assets/img/country/asia/maldives/soc1-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc1.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function ChennaiSoc1() {
  const benefits = [
    "Independent validation of financial control reliability",
    "Increased trust from international clients and auditors",
    "Fewer disruptions during customer audits",
    "Stronger ownership and governance of finance processes",
    "Faster onboarding with regulated and enterprise customers",
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
      title: "Payment processors and fintech platforms",
    },
    {
      icon: "bi-hdd-network",
      title: "SaaS companies managing billing or subscriptions",
    },
    {
      icon: "bi-headset",
      title: "BPOs and shared service centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title:
        "Any provider processing or recording financial transactions for clients",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Definition",
      description: "Define services, systems, and financial processes in scope",
    },
    {
      number: "2",
      title: "Control Review",
      description: "Review existing controls against SOC 1 requirements",
    },
    {
      number: "3",
      title: "Documentation Preparation",
      description: "Prepare narratives, flowcharts, and control documentation",
    },
    {
      number: "4",
      title: "Control Strengthening",
      description: "Strengthen weak or missing control areas",
    },
    {
      number: "5",
      title: "Readiness Testing",
      description: "Perform readiness testing before the formal audit",
    },
    {
      number: "6",
      title: "Audit Coordination",
      description: "Coordinate with auditors for Type 1 or Type 2 examinations",
    },
    {
      number: "7",
      title: "Continuous Improvement",
      description: "Support remediation and continuous control improvement",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 1 Certification in Chennai | Financial Control Assurance – First
          Cert
        </title>
        <meta
          name="description"
          content="Get SOC 1 Certification in Chennai with First Cert. We deliver readiness reviews, control documentation, and audit coordination to prove reliable financial reporting for global clients."
        />
        <meta
          name="keywords"
          content="SOC 1 Certification in Chennai, SOC 1 consultants Chennai, SOC 1 audit Chennai, SOC 1 Type 1 Chennai, SOC 1 Type 2 Chennai, SOC 1 compliance Chennai, SOC 1 certification cost Chennai, SOC 1 readiness Chennai, SOC 1 documentation Chennai, SOC 1 audit support Chennai, financial controls assurance Chennai, SOC 1 attestation Chennai, First Cert SOC 1 Chennai, SOC 1 advisory services Chennai"
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
          <h1 className="main-title">SOC 1 Certification in Chennai</h1>
          <p className="small-desc">
            Building Confidence in Financial Operations
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
                alt="SOC 1 Certification in Chennai"
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
                <b>SOC 1 Certification in Chennai</b> helps service
                organizations prove that their financial and
                transaction-processing activities are controlled, accurate, and
                dependable. With Chennai being a major center for IT services,
                payroll processing, accounting outsourcing, SaaS billing
                platforms, and fintech operations, clients increasingly demand
                independent assurance over financial controls before awarding
                contracts.
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
                <b>First Cert</b> supports Chennai-based companies in creating
                SOC 1-aligned environments that reflect real operational
                workflows and auditor expectations.
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
            What SOC 1 Certification in Chennai Confirms
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 1 Certification in Chennai</b> evaluates the design and
            operating effectiveness of controls that influence customer
            financial reporting under the SSAE 18 standard. Organizations can
            choose the type of report that best matches stakeholder needs:
          </p>

          <ul className="iso-list">
            {[
              "Type 1 focuses on the design of controls at a specific date",
              "Type 2 verifies both design and ongoing performance over a testing period",
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
            Typical control areas include:
          </p>

          <ul className="iso-list">
            {[
              "Transaction accuracy and completeness",
              "User access and segregation of duties",
              "Change management in finance and billing systems",
              "Reconciliation and exception handling processes",
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
            The resulting SOC 1 report provides independent assurance relied
            upon by clients and their auditors.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Requires SOC 1 in Chennai
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 1 Certification in Chennai is vital for organizations whose
                services affect customer financial statements, such as:
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
                        <a href="iso-9001-certification-in-chennai">
                          ISO 9001 Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-chennai">
                          ISO 27001 Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-chennai">
                          CMMI Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-chennai">
                          HIPAA Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-chennai">
                          VAPT Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-chennai">
                          GDPR Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-chennai">
                          SOC 1 Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-chennai">
                          SOC 2 Certification in Chennai
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              For many global customers, a valid SOC 1 report is mandatory for
              vendor approval.
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
                Business Benefits of SOC 1 Certification in Chennai
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
            Organizations that achieve SOC 1 Certification in Chennai gain:
          </p>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc1}
                alt="SOC 1 Benefits in Chennai"
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
                SOC 1 positions Chennai service providers as transparent,
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
                First Cert's SOC 1 Delivery Model in Chennai
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
                First Cert applies a structured and results-oriented SOC 1
                framework for Chennai organizations:
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
            This ensures both certification success and lasting financial
            governance.
          </p>
        </div>
      </div>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          SOC 1 Certification Cost in Chennai
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
                  The investment for SOC 1 Certification in Chennai depends on:
                </div>

                <ul className="features">
                  <li className="check">Size of the organization</li>
                  <li className="check">Number of financial systems</li>
                  <li className="check">Complexity of operations</li>
                  <li className="check">Current control maturity</li>
                  <li className="check">
                    Whether a Type 1 or Type 2 report is required
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts a readiness assessment to provide a clear
                  and customized cost plan.
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
                  Get SOC 1 Certified in Chennai with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted SOC 1 consulting partner in Chennai,
                  guiding organizations from initial evaluation through audit
                  completion and ongoing improvement. Our consultants align
                  compliance requirements with everyday business operations to
                  deliver practical and lasting assurance.
                </div>

                <div className="title small-title">
                  From gap analysis to final reporting, First Cert helps
                  Chennai-based companies strengthen financial controls, meet
                  global expectations, and build long-term credibility with
                  international stakeholders.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your SOC 1 Certification journey in Chennai with First
                  Cert and demonstrate financial integrity, operational
                  reliability, and globally recognized assurance.
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

export default ChennaiSoc1;
