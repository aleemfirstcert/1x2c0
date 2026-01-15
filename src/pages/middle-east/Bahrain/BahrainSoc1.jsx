import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc1 from "../../../assets/img/country/middle-east/bahrain/soc1-img.webp";
import benefitssoc1 from "../../../assets/img/country/middle-east/bahrain/soc1-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc1.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function BahrainSoc1() {
  const benefits = [
    "Independent assurance over the effectiveness of financial controls",
    "Enhanced credibility with clients, auditors, and stakeholders",
    "Reduced risk of financial errors, control failures, and audit findings",
    "Clear accountability for critical financial processes",
    "Faster and smoother customer audits and due diligence exercises",
  ];

  const industryData = [
    {
      icon: "bi-people",
      title: "Payroll processing and HR administration companies",
    },
    {
      icon: "bi-calculator",
      title: "Accounting, bookkeeping, and finance outsourcing firms",
    },
    {
      icon: "bi-cloud-check",
      title: "Payment gateways and transaction processing platforms",
    },
    {
      icon: "bi-hdd-network",
      title:
        "SaaS providers supporting invoicing, billing, or accounting systems",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and regional shared service centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Fintech organizations managing financial data or transactions",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Definition",
      description:
        "Identify relevant services, systems, and financial processes",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description: "Assess current controls against SOC 1 expectations",
    },
    {
      number: "3",
      title: "Documentation Support",
      description:
        "Develop control descriptions, narratives, flowcharts, and evidence frameworks",
    },
    {
      number: "4",
      title: "Control Improvement",
      description: "Assist in strengthening and remediating identified gaps",
    },
    {
      number: "5",
      title: "Readiness Validation",
      description:
        "Test control design and operating effectiveness where applicable",
    },
    {
      number: "6",
      title: "Audit Coordination",
      description:
        "Work closely with licensed CPA firms for SOC 1 Type 1 or Type 2 audits",
    },
    {
      number: "7",
      title: "Ongoing Support",
      description:
        "Provide post-audit remediation guidance and compliance maintenance",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 1 Certification in Bahrain | Professional SOC 1 Assurance for
          Financial Control Systems – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve SOC 1 Certification in Bahrain? First Cert delivers specialized SOC 1 advisory and audit support services, covering financial control evaluation, risk mapping, documentation, readiness validation, and seamless coordination with auditors to ensure reliable assurance over financial reporting-related services."
        />
        <meta
          name="keywords"
          content="SOC 1 Certification in Bahrain, SOC 1 consultants Bahrain, SOC 1 audit Bahrain, SOC 1 Type 1 Bahrain, SOC 1 Type 2 Bahrain, SOC 1 compliance Bahrain, SOC 1 certification cost Bahrain, SOC 1 readiness Bahrain, SOC 1 documentation Bahrain, SOC 1 audit support Bahrain, financial controls assurance Bahrain, SOC 1 attestation Bahrain, First Cert SOC 1 Bahrain, SOC 1 advisory services Bahrain"
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
          <h1 className="main-title">SOC 1 Certification in Bahrain</h1>
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
                alt="SOC 1 Certification in Bahrain"
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
                <b>SOC 1 Certification in Bahrain</b> enables service
                organizations to demonstrate that controls influencing client
                financial reporting are effectively designed and consistently
                followed. As Bahrain continues to expand its role as a regional
                hub for financial services, shared service centers, fintech
                platforms, and outsourced accounting operations, global clients
                and auditors increasingly expect independent assurance over
                financial-impacting processes.
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
                <b>First Cert</b> supports organizations across Bahrain by
                building SOC 1-aligned control environments that reflect real
                operational practices. Our methodology emphasizes audit clarity,
                process accuracy, and long-term sustainability without
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
            Understanding SOC 1 Certification in Bahrain
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 1 Certification in Bahrain</b> is performed under the AICPA's
            SSAE 18 framework and focuses on internal controls at service
            organizations that may affect customer financial statements.
            Depending on business requirements, organizations may pursue:
          </p>

          <ul className="iso-list">
            {[
              "SOC 1 Type 1: Evaluation of control design at a specific point in time",
              "SOC 1 Type 2: Evaluation of both control design and operational effectiveness over a defined period",
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
            A SOC 1 examination typically covers controls related to:
          </p>

          <ul className="iso-list">
            {[
              "Processing accuracy and completeness of financial transactions",
              "Logical access and security over systems handling financial data",
              "Change management for finance-related applications",
              "Reconciliation procedures, exception management, and oversight mechanisms",
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
            SOC 1 reporting confirms that financial services are governed by
            structured, well-documented, and auditable control practices.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations in Bahrain That Benefit from SOC 1
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 1 Certification in Bahrain is particularly important for
                service providers whose operations directly influence client
                financial reporting, such as:
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
                        <a href="iso-9001-certification-in-bahrain">
                          ISO 9001 Certification in Bahrain
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-bahrain">
                          ISO 27001 Certification in Bahrain
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-bahrain">
                          CMMI Certification in Bahrain
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-bahrain">
                          HIPAA Certification in Bahrain
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-bahrain">
                          VAPT Certification in Bahrain
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-bahrain">
                          GDPR Certification in Bahrain
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-bahrain">
                          SOC 1 Certification in Bahrain
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-bahrain">
                          SOC 2 Certification in Bahrain
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              For many international clients, auditors, and regulators, a SOC 1
              report is a key requirement during vendor onboarding, annual
              audits, and compliance reviews.
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
                Key Business Benefits of SOC 1 Certification in Bahrain
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
            Achieving SOC 1 Certification in Bahrain provides organizations
            with:
          </p>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc1}
                alt="SOC 1 Benefits in Bahrain"
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
                SOC 1 not only improves internal governance but also reinforces
                market trust in financial service delivery.
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
                First Cert's SOC 1 Consulting and Audit Support in Bahrain
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
                First Cert follows a structured, audit-focused SOC 1 approach
                tailored for organizations in Bahrain:
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
            This end-to-end approach ensures audit readiness while supporting
            long-term assurance maturity.
          </p>
        </div>
      </div>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          SOC 1 Certification Cost in Bahrain
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
                  The cost of SOC 1 Certification in Bahrain varies based on
                  several factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Size and complexity of service operations
                  </li>
                  <li className="check">
                    Number of in-scope systems and financial workflows
                  </li>
                  <li className="check">
                    Existing level of control maturity and documentation
                  </li>
                  <li className="check">
                    Chosen report type (Type 1 or Type 2)
                  </li>
                  <li className="check">
                    Duration and intensity of audit testing
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins each engagement with a detailed readiness
                  review to provide a transparent, customized cost estimate
                  aligned with organizational goals.
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
                  Get SOC 1 Certification in Bahrain with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted SOC 1 consulting partner in Bahrain,
                  delivering complete readiness, documentation, and audit
                  facilitation services. Our experts ensure that assurance
                  requirements align seamlessly with operational realities,
                  enabling efficient audits and sustainable compliance outcomes.
                </div>

                <div className="title small-title">
                  From initial assessment to audit completion and ongoing
                  improvement, First Cert helps organizations reinforce
                  financial governance and build lasting confidence with global
                  clients.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your SOC 1 Certification journey in Bahrain with First
                  Cert and demonstrate reliability, transparency, and
                  internationally recognized assurance over financial controls.
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

export default BahrainSoc1;
