import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/middle-east/iraq/soc2-img.webp";
import benefitssoc2 from "../../../assets/img/country/middle-east/iraq/soc2-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function IraqSoc2() {
  const benefits = [
    "Independent assurance over cybersecurity and operational controls",
    "Stronger confidence from customers, investors, and business partners",
    "Reduced time and effort responding to repetitive security questionnaires",
    "Lower exposure to data breaches and service disruptions",
    "Improved market credibility in regional and global engagements",
    "Clear ownership of security and compliance responsibilities",
  ];

  const industryData = [
    {
      icon: "bi-code-slash",
      title: "SaaS providers and software product companies",
    },
    {
      icon: "bi-cloud-check",
      title: "Cloud infrastructure and hosting service providers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Managed IT and cybersecurity service firms",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Fintech companies and digital payment platforms",
    },
    {
      icon: "bi-hdd-network",
      title: "Data analytics, AI platforms, and technology startups",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and shared service organizations",
    },
    {
      icon: "bi-cart-check",
      title: "Subscription-based and platform-driven businesses",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope & System Definition",
      description: "Identify in-scope services, platforms, and environments",
    },
    {
      number: "2",
      title: "Risk & Gap Analysis",
      description: "Evaluate existing controls against Trust Services Criteria",
    },
    {
      number: "3",
      title: "Control Design & Implementation",
      description: "Support deployment of technical and procedural safeguards",
    },
    {
      number: "4",
      title: "Documentation & Evidence Structuring",
      description: "Prepare audit-ready policies and control records",
    },
    {
      number: "5",
      title: "Readiness Validation",
      description: "Test control design and operating effectiveness",
    },
    {
      number: "6",
      title: "Audit Coordination",
      description:
        "Support SOC 2 Type 1 or Type 2 examinations with licensed auditors",
    },
    {
      number: "7",
      title: "Ongoing Advisory",
      description:
        "Assist with remediation, monitoring, and future reporting cycles",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in Iraq | Trusted SOC 2 Compliance & Digital Risk
          Assurance – First Cert
        </title>
        <meta
          name="description"
          content="Planning to pursue SOC 2 Certification in Iraq? First Cert provides complete SOC 2 consulting services, including cybersecurity risk analysis, Trust Services Criteria mapping, control deployment support, audit evidence structuring, and auditor coordination to help organizations meet global trust expectations."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in Iraq, SOC 2 consultants Iraq, SOC 2 audit Iraq, SOC 2 Type 1 Iraq, SOC 2 Type 2 Iraq, SOC 2 compliance Iraq, SOC 2 certification cost Iraq, SOC 2 implementation Iraq, SOC 2 documentation Iraq, SOC 2 audit readiness Iraq, SOC 2 cybersecurity Iraq, SOC 2 for SaaS Iraq, SOC 2 for IT companies Iraq, First Cert SOC 2 Iraq, SOC 2 trust services Iraq"
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
          <h1 className="main-title">SOC 2 Certification in Iraq</h1>
          <p className="small-desc">
            Demonstrating Secure and Reliable Digital Operations
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
                alt="SOC 2 Certification in Iraq"
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
                <b>SOC 2 Certification in Iraq</b> helps organizations prove
                that their digital systems, cloud environments, and
                technology-enabled services are protected through strong
                security, availability, and data governance controls. As Iraq
                continues to expand its digital economy across IT services,
                fintech platforms, software development, cloud hosting, and
                outsourced operations, clients increasingly expect formal
                assurance over how digital risks are managed.
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
                <b>First Cert</b> partners with organizations across Iraq to
                establish SOC 2 programs that are practical, scalable, and
                aligned with real operational processes. Our focus is on
                building dependable control environments that support business
                growth while meeting international assurance standards.
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
            Understanding SOC 2 Certification in Iraq
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 2 Certification in Iraq</b> is an independent assessment
            conducted under the AICPA Trust Services Criteria framework. It
            evaluates whether an organization's internal controls are properly
            designed and consistently operating to safeguard systems, data, and
            customer commitments.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A SOC 2 review commonly evaluates controls related to:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>
                Protection against unauthorized system access and cyber threats
              </h5>
            </div>

            <div className="vapt-card">
              <h5>
                Service availability, backup strategies, and incident handling
              </h5>
            </div>

            <div className="vapt-card">
              <h5>Accuracy and integrity of system processing activities</h5>
            </div>

            <div className="vapt-card">
              <h5>Safeguarding confidential business and client information</h5>
            </div>

            <div className="vapt-card">
              <h5>
                Responsible handling of personal and sensitive data throughout
                its lifecycle
              </h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            SOC 2 reporting confirms that technology operations are governed by
            disciplined risk management and accountable security practices.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations in Iraq That Commonly Require SOC 2
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 2 Certification in Iraq is especially relevant for
                organizations delivering digital or outsourced services,
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
                        <a href="iso-9001-certification-in-iraq">
                          ISO 9001 Certification in Iraq
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-iraq">
                          ISO 27001 Certification in Iraq
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-iraq">
                          CMMI Certification in Iraq
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-iraq">
                          HIPAA Certification in Iraq
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-iraq">
                          VAPT Certification in Iraq
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-iraq">
                          GDPR Certification in Iraq
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-iraq">
                          SOC 1 Certification in Iraq
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-iraq">
                          SOC 2 Certification in Iraq
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              For many international customers and enterprise clients, a SOC 2
              report is a mandatory requirement during vendor onboarding and
              ongoing security evaluations.
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
                Key Advantages of SOC 2 Certification in Iraq
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving SOC 2 Certification in Iraq gain several
                strategic and operational benefits, including:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc2}
                alt="SOC 2 Benefits in Iraq"
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
                SOC 2 positions trust and information security as business
                strengths rather than compliance obligations.
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
                First Cert's SOC 2 Advisory Framework in Iraq
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
                First Cert delivers SOC 2 services in Iraq using a structured,
                audit-focused approach:
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
          SOC 2 Certification Cost in Iraq
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
                  The cost of SOC 2 Certification in Iraq depends on several
                  factors, such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Organizational size and service complexity
                  </li>
                  <li className="check">
                    Number of applications, systems, and cloud environments in
                    scope
                  </li>
                  <li className="check">
                    Volume and sensitivity of customer or regulated data
                  </li>
                  <li className="check">Selected Trust Services Criteria</li>
                  <li className="check">
                    Type of report (Type 1 or Type 2) and review duration
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins each engagement with a detailed SOC 2
                  readiness assessment to provide a clear, customized cost
                  estimate aligned with business objectives.
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
                  Achieve SOC 2 Certification in Iraq with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a reliable SOC 2 consulting partner in Iraq,
                  supporting organizations from early planning through audit
                  completion and continuous compliance management. Our
                  consultants focus on practical security controls, clear
                  documentation, and measurable risk reduction aligned with
                  operational realities.
                </div>

                <div className="title small-title">
                  By partnering with First Cert, organizations strengthen
                  digital trust, meet international client expectations, and
                  scale securely in competitive markets.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your SOC 2 Certification journey in Iraq with First Cert
                  and demonstrate your commitment to security, reliability, and
                  globally recognized trust standards.
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

export default IraqSoc2;
