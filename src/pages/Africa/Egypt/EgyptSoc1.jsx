import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc1 from "../../../assets/img/country/africa/egypt/soc1-img.webp";
import benefitssoc1 from "../../../assets/img/country/africa/egypt/soc1-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc1.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function EgyptSoc1() {
  const benefits = [
    "Independent confirmation of financial control effectiveness",
    "Enhanced trust from customers, investors, and auditors",
    "Lower exposure to audit findings and financial reporting risks",
    "Clear definition of control ownership and accountability",
    "Faster client audits and smoother due diligence processes",
  ];

  const industryData = [
    {
      icon: "bi-people",
      title: "Payroll and human resource service providers",
    },
    {
      icon: "bi-calculator",
      title: "Accounting, bookkeeping, and finance outsourcing firms",
    },
    {
      icon: "bi-cloud-check",
      title: "Payment gateways and transaction processing companies",
    },
    {
      icon: "bi-hdd-network",
      title: "SaaS providers supporting invoicing or accounting systems",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and shared financial service centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Fintech organizations managing financial data flows",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Definition",
      description:
        "Identify in-scope services, systems, and financial processes",
    },
    {
      number: "2",
      title: "Control Gap Analysis",
      description: "Assess existing controls against SOC 1 expectations",
    },
    {
      number: "3",
      title: "Documentation Development",
      description:
        "Prepare control narratives, flow diagrams, and evidence matrices",
    },
    {
      number: "4",
      title: "Control Enhancement",
      description: "Improve or formalize control activities where gaps exist",
    },
    {
      number: "5",
      title: "Readiness Testing",
      description: "Validate control effectiveness prior to audit",
    },
    {
      number: "6",
      title: "Audit Coordination",
      description:
        "Support SOC 1 Type 1 or Type 2 examinations with independent CPA firms",
    },
    {
      number: "7",
      title: "Ongoing Support",
      description: "Assist with remediation and continuous control improvement",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 1 Certification in Egypt | Reliable Financial Controls Assurance
          Services – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve SOC 1 Certification in Egypt? First Cert delivers expert SOC 1 consulting services covering financial control evaluation, process documentation, readiness preparation, and complete audit support to help service organizations demonstrate strong and reliable financial controls."
        />
        <meta
          name="keywords"
          content="SOC 1 Certification in Egypt, SOC 1 consultants Egypt, SOC 1 audit Egypt, SOC 1 Type 1 Egypt, SOC 1 Type 2 Egypt, SOC 1 compliance Egypt, SOC 1 certification cost Egypt, SOC 1 readiness Egypt, SOC 1 documentation Egypt, SOC 1 audit support Egypt, financial controls assurance Egypt, SOC 1 attestation Egypt, First Cert SOC 1 Egypt, SOC 1 advisory services Egypt"
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
          <h1 className="main-title">SOC 1 Certification in Egypt</h1>
          <p className="small-desc">Assuring Financial Process Integrity</p>
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
                alt="SOC 1 Certification in Egypt"
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
                <b>SOC 1 Certification in Egypt</b> helps service organizations
                demonstrate that their internal controls related to financial
                reporting are properly designed and consistently followed. As
                Egyptian companies increasingly support international clients
                through outsourced finance services, payment processing, SaaS
                platforms, and shared service operations, independent financial
                control assurance has become a critical expectation.
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
                <b>First Cert</b> supports organizations across Egypt in
                establishing SOC 1-aligned control frameworks that integrate
                seamlessly with real business operations. Our approach
                emphasizes accuracy, transparency, and audit readiness while
                ensuring minimal disruption to ongoing financial activities.
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
            What SOC 1 Certification in Egypt Covers
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 1 Certification in Egypt</b> is conducted in accordance with
            the AICPA's SSAE 18 standards and focuses on controls that may
            influence customer financial statements. Depending on reporting
            requirements, organizations may pursue:
          </p>

          <ul className="iso-list">
            {[
              "SOC 1 Type 1: Reviews the design suitability of financial controls at a specific point in time",
              "SOC 1 Type 2: Evaluates both control design and operational effectiveness over an extended review period",
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
            A SOC 1 examination typically assesses controls related to:
          </p>

          <ul className="iso-list">
            {[
              "Financial transaction processing accuracy and completeness",
              "System access management for finance and accounting platforms",
              "Change controls affecting billing, payroll, and financial applications",
              "Reconciliation procedures, exception handling, and management oversight",
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
            The resulting SOC 1 report provides formal, third-party assurance to
            clients, auditors, and regulators.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations in Egypt That Benefit from SOC 1
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 1 Certification in Egypt is particularly relevant for
                service providers whose activities impact customer financial
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
                        <a href="iso-9001-certification-in-egypt">
                          ISO 9001 Certification in Egypt
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-egypt">
                          ISO 27001 Certification in Egypt
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-egypt">
                          CMMI Certification in Egypt
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-egypt">
                          HIPAA Certification in Egypt
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-egypt">
                          VAPT Certification in Egypt
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-egypt">
                          GDPR Certification in Egypt
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-egypt">
                          SOC 1 Certification in Egypt
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-egypt">
                          SOC 2 Certification in Egypt
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              For many global clients and audit firms, a SOC 1 report is a
              mandatory requirement during vendor onboarding and annual
              assurance reviews.
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
                Advantages of SOC 1 Certification in Egypt
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
            Organizations that achieve SOC 1 Certification in Egypt experience
            multiple strategic and operational benefits, such as:
          </p>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc1}
                alt="SOC 1 Benefits in Egypt"
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
                SOC 1 compliance strengthens governance while positioning
                organizations as dependable service partners.
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
                First Cert's SOC 1 Consulting Framework in Egypt
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
                First Cert applies a structured and audit-driven SOC 1
                consulting methodology tailored to organizations operating in
                Egypt:
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
            This approach ensures efficient audits and long-term assurance
            sustainability.
          </p>
        </div>
      </div>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          SOC 1 Certification Cost in Egypt
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
                  The cost of SOC 1 Certification in Egypt depends on several
                  considerations, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Size and complexity of service operations
                  </li>
                  <li className="check">
                    Number of financial systems and workflows involved
                  </li>
                  <li className="check">
                    Current maturity of internal controls and documentation
                  </li>
                  <li className="check">
                    Chosen report type (Type 1 or Type 2)
                  </li>
                  <li className="check">Duration and depth of audit testing</li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a comprehensive SOC 1 readiness review
                  to provide a clear, tailored cost estimate aligned with your
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
                  Get SOC 1 Certified in Egypt with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted SOC 1 consulting partner in Egypt,
                  delivering complete readiness preparation, documentation
                  support, and audit coordination services. Our consultants
                  align assurance requirements with operational realities,
                  enabling smooth audits and long-term compliance confidence.
                </div>

                <div className="title small-title">
                  From initial assessment through final reporting and continuous
                  improvement, First Cert helps organizations in Egypt
                  strengthen financial governance and build lasting credibility
                  with global stakeholders.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your SOC 1 Certification journey in Egypt with First
                  Cert and demonstrate transparency, control reliability, and
                  internationally recognized financial assurance.
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

export default EgyptSoc1;
