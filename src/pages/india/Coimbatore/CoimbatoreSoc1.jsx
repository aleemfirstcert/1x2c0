import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc1 from "../../../assets/img/country/india/coimbatore/soc1-img.webp";
import benefitssoc1 from "../../../assets/img/country/india/coimbatore/soc1-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc1.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function CoimbatoreSoc1() {
  const benefits = [
    "Independent verification of financial control effectiveness",
    "Enhanced trust with global customers and auditors",
    "Smoother customer audit experiences",
    "Stronger governance and accountability in finance processes",
    "Faster approval for enterprise and regulated clients",
    "Reputation as a transparent, reliable, and audit-ready partner",
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
      title: "Payment gateways and fintech organizations",
    },
    {
      icon: "bi-hdd-network",
      title: "SaaS platforms handling subscriptions or invoicing",
    },
    {
      icon: "bi-headset",
      title: "BPOs and shared service centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Any provider processing client financial transactions",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Definition",
      description: "Define systems, services, and financial processes in scope",
    },
    {
      number: "2",
      title: "Control Assessment",
      description: "Assess existing controls against SOC 1 requirements",
    },
    {
      number: "3",
      title: "Documentation Development",
      description: "Develop narratives, process flowcharts, and documentation",
    },
    {
      number: "4",
      title: "Control Enhancement",
      description: "Enhance weak or missing control areas",
    },
    {
      number: "5",
      title: "Readiness Testing",
      description: "Conduct readiness testing prior to the formal audit",
    },
    {
      number: "6",
      title: "Audit Coordination",
      description: "Coordinate Type 1 or Type 2 examinations with auditors",
    },
    {
      number: "7",
      title: "Ongoing Improvement",
      description: "Provide ongoing remediation and control improvement",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 1 Certification in Coimbatore | Financial Controls & Assurance –
          First Cert
        </title>
        <meta
          name="description"
          content="Achieve SOC 1 Certification in Coimbatore with First Cert. We provide readiness assessments, control documentation, and audit support to ensure reliable financial reporting."
        />
        <meta
          name="keywords"
          content="SOC 1 Certification in Coimbatore, SOC 1 consultants Coimbatore, SOC 1 audit Coimbatore, SOC 1 Type 1 Coimbatore, SOC 1 Type 2 Coimbatore, SOC 1 compliance Coimbatore, SOC 1 certification cost Coimbatore, SOC 1 readiness Coimbatore, SOC 1 documentation Coimbatore, SOC 1 audit support Coimbatore, financial controls assurance Coimbatore, SOC 1 attestation Coimbatore, First Cert SOC 1 Coimbatore, SOC 1 advisory services Coimbatore"
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
          <h1 className="main-title">SOC 1 Certification in Coimbatore</h1>
          <p className="small-desc">Ensuring Reliable Financial Operations</p>
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
                alt="SOC 1 Certification in Coimbatore"
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
                <b>SOC 1 Certification in Coimbatore</b> helps service providers
                demonstrate that their financial and transaction-processing
                systems are controlled, accurate, and dependable. As Coimbatore
                grows as a center for IT services, SaaS billing platforms,
                payroll outsourcing, accounting services, and fintech
                operations, independent assurance of financial controls has
                become a key requirement for international clients.
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
                <b>First Cert</b> assists Coimbatore organizations in
                establishing SOC 1-compliant systems that reflect operational
                realities while meeting auditor standards.
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
            What SOC 1 Certification in Coimbatore Confirms
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 1 Certification in Coimbatore</b> evaluates whether controls
            affecting customer financial reporting are properly designed and
            functioning under the SSAE 18 standard. Organizations may choose:
          </p>

          <ul className="iso-list">
            {[
              "Type 1 – Validates the design of controls at a specific point",
              "Type 2 – Verifies both design and operational effectiveness over time",
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
            Key focus areas include:
          </p>

          <ul className="iso-list">
            {[
              "Accuracy and completeness of financial transactions",
              "Segregation of duties and user access controls",
              "Change management for finance and billing systems",
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
            The SOC 1 report provides independent assurance that clients and
            auditors can rely on.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Needs SOC 1 in Coimbatore
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 1 Certification is essential for companies that influence
                client financial statements, such as:
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
                        <a href="iso-9001-certification-in-coimbatore">
                          ISO 9001 Certification in Coimbatore
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-coimbatore">
                          ISO 27001 Certification in Coimbatore
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-coimbatore">
                          CMMI Certification in Coimbatore
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-coimbatore">
                          HIPAA Certification in Coimbatore
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-coimbatore">
                          VAPT Certification in Coimbatore
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-coimbatore">
                          GDPR Certification in Coimbatore
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-coimbatore">
                          SOC 1 Certification in Coimbatore
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-coimbatore">
                          SOC 2 Certification in Coimbatore
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              For global clients, a SOC 1 report is often a mandatory
              requirement before engagement.
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
                Benefits of SOC 1 Certification in Coimbatore
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
            Organizations achieving SOC 1 Certification in Coimbatore enjoy:
          </p>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc1}
                alt="SOC 1 Benefits in Coimbatore"
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
                SOC 1 positions Coimbatore service providers as transparent,
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
                First Cert's SOC 1 Consulting Approach in Coimbatore
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
                First Cert implements a structured SOC 1 framework for
                Coimbatore organizations:
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
            This methodology ensures both successful certification and
            sustainable financial governance.
          </p>
        </div>
      </div>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          SOC 1 Certification Cost in Coimbatore
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
                  The cost of SOC 1 Certification in Coimbatore depends on:
                </div>

                <ul className="features">
                  <li className="check">Organization size and complexity</li>
                  <li className="check">
                    Number of financial systems and integrations
                  </li>
                  <li className="check">Current control maturity</li>
                  <li className="check">
                    Type of SOC 1 report (Type 1 or Type 2)
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert performs a readiness review to provide a
                  transparent, tailored cost estimate aligned with your business
                  needs.
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
                  Get SOC 1 Certified in Coimbatore with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted SOC 1 consulting partner in
                  Coimbatore, guiding organizations from readiness assessment to
                  audit completion and ongoing improvements. We ensure
                  compliance aligns with real operational workflows to provide
                  lasting assurance.
                </div>

                <div className="title small-title-p">
                  From initial gap analysis to final reporting, First Cert helps
                  Coimbatore companies strengthen financial controls, meet
                  global standards, and build long-term credibility with
                  stakeholders.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your SOC 1 Certification journey in Coimbatore with
                  First Cert and demonstrate operational reliability, financial
                  integrity, and globally recognized assurance.
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

export default CoimbatoreSoc1;
