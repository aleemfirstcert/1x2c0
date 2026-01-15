import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/africa/egypt/soc2-img.webp";
import benefitssoc2 from "../../../assets/img/country/africa/egypt/soc2-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function EgyptSoc2() {
  const benefits = [
    "Independent validation of security and operational controls",
    "Stronger trust from customers, investors, and business partners",
    "Reduced burden from repetitive security questionnaires",
    "Lower exposure to data breaches, service disruptions, and compliance gaps",
    "Improved market positioning in regional and global ecosystems",
    "Clear accountability for security and risk management",
  ];

  const industryData = [
    {
      icon: "bi-code-slash",
      title: "SaaS providers and software development companies",
    },
    {
      icon: "bi-cloud-check",
      title: "Cloud hosting and infrastructure service providers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Managed IT, cybersecurity, and MSP firms",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Fintech companies and digital payment platforms",
    },
    {
      icon: "bi-hdd-network",
      title: "Data analytics, AI solutions, and technology startups",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and shared technology service centers",
    },
    {
      icon: "bi-cart-check",
      title: "Subscription-based and platform-driven businesses",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Definition & Criteria Mapping",
      description:
        "Identify in-scope systems, services, and relevant Trust Services Criteria",
    },
    {
      number: "2",
      title: "Risk & Gap Analysis",
      description:
        "Evaluate control weaknesses across security, availability, and data protection areas",
    },
    {
      number: "3",
      title: "Control Design & Enablement",
      description:
        "Support deployment of technical, administrative, and operational controls",
    },
    {
      number: "4",
      title: "Policy & Evidence Development",
      description:
        "Prepare documentation and audit-ready evidence repositories",
    },
    {
      number: "5",
      title: "Readiness Assessment",
      description:
        "Validate control design and operating effectiveness before audit",
    },
    {
      number: "6",
      title: "Audit Coordination",
      description:
        "Support SOC 2 Type 1 or Type 2 examinations with independent auditors",
    },
    {
      number: "7",
      title: "Continuous Advisory",
      description:
        "Assist with remediation, monitoring, and future reporting cycles",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in Egypt | Advanced Digital Trust & Security
          Assurance – First Cert
        </title>
        <meta
          name="description"
          content="Planning to achieve SOC 2 Certification in Egypt? First Cert provides end-to-end SOC 2 consulting services, including security risk evaluation, Trust Services Criteria mapping, control design support, audit evidence preparation, and complete examination coordination to meet global security and trust expectations."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in Egypt, SOC 2 consultants Egypt, SOC 2 audit Egypt, SOC 2 Type 1 Egypt, SOC 2 Type 2 Egypt, SOC 2 compliance Egypt, SOC 2 certification cost Egypt, SOC 2 implementation Egypt, SOC 2 documentation Egypt, SOC 2 audit readiness Egypt, SOC 2 cybersecurity Egypt, SOC 2 for SaaS Egypt, SOC 2 for IT companies Egypt, First Cert SOC 2 Egypt, SOC 2 trust services Egypt"
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
          <h1 className="main-title">SOC 2 Certification in Egypt</h1>
          <p className="small-desc">
            Building Confidence in Digital Operations
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
                src={imgsoc2}
                alt="SOC 2 Certification in Egypt"
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
                <b>SOC 2 Certification in Egypt</b> helps organizations prove
                that their technology platforms, cloud environments, and digital
                services are protected by effective security and risk management
                controls. As Egypt's technology sector expands across software
                development, fintech, cloud hosting, IT services, and
                data-driven platforms, customers and global partners
                increasingly require independent assurance over system security
                and reliability.
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
                <b>First Cert</b> works with organizations across Egypt to
                develop SOC 2 programs that align with real-world operations.
                Our methodology focuses on practical control implementation,
                measurable risk reduction, and sustained audit readiness—going
                beyond checklist-driven compliance.
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
            Understanding SOC 2 Certification in Egypt
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 2 Certification in Egypt</b> is an independent examination
            based on the AICPA Trust Services Criteria. It evaluates whether an
            organization has implemented appropriate internal controls to
            safeguard systems, ensure service reliability, and protect sensitive
            data.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A SOC 2 assessment typically reviews controls related to:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>
                Protection against unauthorized access and cybersecurity threats
              </h5>
            </div>

            <div className="vapt-card">
              <h5>
                System availability, disaster recovery, and business continuity
                planning
              </h5>
            </div>

            <div className="vapt-card">
              <h5>Accuracy and dependability of system processing</h5>
            </div>

            <div className="vapt-card">
              <h5>Confidentiality of proprietary and customer information</h5>
            </div>

            <div className="vapt-card">
              <h5>Secure management of personal and sensitive data</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A SOC 2 report confirms that digital operations are governed through
            disciplined security practices and accountable oversight.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who in Egypt Commonly Needs SOC 2
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 2 Certification in Egypt is most relevant for organizations
                delivering technology-based or outsourced services, including:
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
              For many enterprise customers and international clients, SOC 2
              compliance is a standard requirement during vendor selection and
              ongoing security assessments.
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
                Key Advantages of SOC 2 Certification in Egypt
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve SOC 2 Certification in Egypt benefit
                from both operational improvements and market credibility,
                including:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc2}
                alt="SOC 2 Benefits in Egypt"
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
                SOC 2 enables organizations to treat trust and transparency as
                strategic business assets.
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
                First Cert's SOC 2 Implementation Model in Egypt
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
                First Cert follows a structured, audit-aligned SOC 2 consulting
                framework tailored to Egyptian organizations:
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
        </div>
      </div>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          SOC 2 Certification Cost in Egypt
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
                  The cost of SOC 2 Certification in Egypt depends on multiple
                  factors, including:
                </div>

                <ul className="features">
                  <li className="check">Organizational size and complexity</li>
                  <li className="check">
                    Number of systems, applications, and cloud environments
                    involved
                  </li>
                  <li className="check">
                    Volume and sensitivity of customer or regulated data
                  </li>
                  <li className="check">Selected Trust Services Criteria</li>
                  <li className="check">
                    Report type (Type 1 or Type 2) and review period
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a detailed SOC 2 readiness evaluation
                  to provide a clear, customized cost estimate aligned with
                  business goals.
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
                  Get SOC 2 Certified in Egypt with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted SOC 2 consulting partner in Egypt,
                  guiding organizations from initial planning through audit
                  completion and ongoing compliance management. Our consultants
                  focus on actionable controls, clear documentation, and
                  practical risk reduction aligned with operational realities.
                </div>

                <div className="title small-title">
                  By working with First Cert, organizations strengthen digital
                  trust, meet international client expectations, and scale
                  securely in competitive markets.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your SOC 2 Certification journey in Egypt with First
                  Cert and demonstrate your commitment to security, reliability,
                  and globally recognized trust standards.
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

export default EgyptSoc2;
