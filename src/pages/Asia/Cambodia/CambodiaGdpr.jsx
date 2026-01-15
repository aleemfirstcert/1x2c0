import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imggdpr from "../../../assets/img/country/asia/cambodia/gdpr-img.webp";
import benefitsgdpr from "../../../assets/img/country/asia/cambodia/gdpr-benefits.webp";
import bgimg from "../../../assets/img/services/card-gdpr.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function CambodiaGdpr() {
  const benefits = [
    "Improved control and transparency over personal data usage",
    "Lower risk of regulatory penalties and contractual non-compliance",
    "Increased trust from European customers and partners",
    "Clear accountability for data protection roles and responsibilities",
    "Stronger market reputation as a privacy-conscious organization",
  ];

  const industryData = [
    {
      icon: "bi-code-slash",
      title: "Software developers and IT-enabled service providers",
    },
    {
      icon: "bi-cloud-check",
      title: "SaaS platforms, cloud service operators, and digital products",
    },
    {
      icon: "bi-cart-check",
      title: "Online retailers, marketplaces, and subscription services",
    },
    {
      icon: "bi-headset",
      title: "Business process outsourcing firms and data processors",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Banks, fintech companies, and payment solution providers",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Healthcare, research, and life sciences organizations",
    },
    {
      icon: "bi-bar-chart-line",
      title: "Marketing, analytics, and data-driven consulting firms",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Data Discovery & Scope Definition",
      description: "Identify personal data flows and processing activities",
    },
    {
      number: "2",
      title: "Gap & Risk Analysis",
      description: "Evaluate existing practices against GDPR requirements",
    },
    {
      number: "3",
      title: "Privacy Framework Development",
      description:
        "Create policies, privacy notices, consent models, and records",
    },
    {
      number: "4",
      title: "Operational Control Implementation",
      description:
        "Apply access controls, retention schedules, and response procedures",
    },
    {
      number: "5",
      title: "Workforce Training",
      description:
        "Provide role-specific GDPR awareness and capability building",
    },
    {
      number: "6",
      title: "Compliance Review",
      description: "Validate effectiveness and address remaining gaps",
    },
    {
      number: "7",
      title: "Continuous Advisory",
      description: "Support ongoing compliance and regulatory changes",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          GDPR Certification in Cambodia | Professional GDPR Compliance & Data
          Privacy Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve GDPR Certification in Cambodia? First Cert delivers end-to-end GDPR compliance services, including privacy assessments, governance design, employee training, and ongoing advisory to meet EU data protection obligations effectively."
        />
        <meta
          name="keywords"
          content="GDPR Certification in Cambodia, GDPR consultants Cambodia, GDPR compliance Cambodia, GDPR audit Cambodia, GDPR documentation Cambodia, GDPR certification cost Cambodia, data privacy consultants Cambodia, GDPR implementation Cambodia, EU GDPR Cambodia, privacy compliance Cambodia, GDPR training Cambodia, GDPR advisory services Cambodia, GDPR audit support Cambodia, First Cert GDPR Cambodia"
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
          <h1 className="main-title">GDPR Certification in Cambodia</h1>
          <p className="small-desc">
            Building a Robust Privacy-First Framework
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
                src={imggdpr}
                alt="GDPR Certification in Cambodia"
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
                <b>GDPR Certification in Cambodia</b> enables organizations to
                responsibly manage personal data when dealing with individuals,
                customers, or partners within the European Union. As Cambodia
                continues to expand its footprint in digital services,
                outsourcing, cloud-based solutions, and international trade,
                aligning with EU data protection standards has become a critical
                business requirement.
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
                <a href="/">First Cert</a> collaborates with organizations
                across Cambodia to establish GDPR compliance programs that are
                practical, sustainable, and aligned with real business
                operations. Our approach focuses on embedding privacy into
                governance structures rather than treating compliance as a
                one-time documentation exercise.
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
            Understanding GDPR Certification in Cambodia
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>GDPR Certification in Cambodia</b> reflects an organization’s
            alignment with the principles and requirements of the EU General
            Data Protection Regulation. GDPR defines how personal data must be
            collected, processed, stored, shared, and safeguarded throughout its
            lifecycle.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A GDPR-compliant operating model typically includes:
          </p>

          <ul className="iso-list">
            {[
              "Clearly defined and lawful bases for processing personal data",
              "Structured controls for data collection, retention, and disclosure",
              "Mechanisms to uphold data subject rights",
              "Safeguards for sensitive and confidential information",
              "Readiness for incident handling and breach notification",
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
            GDPR compliance confirms that privacy protection is integrated into
            enterprise risk management and decision-making processes.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations in Cambodia Impacted by GDPR
              </h2>

              <p className="text-center section-sub mb-5">
                GDPR applies to Cambodia-based organizations that handle
                personal data of individuals located in the European Union,
                regardless of physical presence in the EU. Industries commonly
                affected include:
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
                        <a href="iso-9001-certification-in-cambodia">
                          ISO 9001 Certification in Cambodia
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-cambodia">
                          ISO 27001 Certification in Cambodia
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-cambodia">
                          CMMI Certification in Cambodia
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-cambodia">
                          HIPAA Certification in Cambodia
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-cambodia">
                          VAPT Certification in Cambodia
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-cambodia">
                          GDPR Certification in Cambodia
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-cambodia">
                          SOC 1 Certification in Cambodia
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-cambodia">
                          SOC 2 Certification in Cambodia
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              GDPR compliance allows Cambodian organizations to engage
              confidently with EU markets while meeting international privacy
              expectations.
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
                Strategic Benefits of GDPR Certification in Cambodia
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that obtain GDPR Certification in Cambodia gain
                both compliance and business advantages, such as:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitsgdpr}
                alt="GDPR Benefits in Cambodia"
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
                GDPR positions data protection as a strategic enabler for global
                business growth rather than a regulatory burden.
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
                First Cert’s GDPR Implementation Approach in Cambodia
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
                First Cert applies a structured, business-oriented GDPR
                compliance methodology in Cambodia:
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
          GDPR Certification Cost in Cambodia
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
                  The cost of GDPR Certification in Cambodia varies based on
                  several considerations, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Size and structure of the organization
                  </li>
                  <li className="check">
                    Nature and volume of personal data processed
                  </li>
                  <li className="check">
                    Complexity of IT infrastructure and cross-border data flows
                  </li>
                  <li className="check">
                    Extent of documentation, training, and advisory support
                    required
                  </li>
                  <li className="check">
                    Existing level of privacy and information security maturity
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert performs an initial GDPR readiness review to
                  provide a clear, customized cost estimate aligned with your
                  compliance objectives.
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
                  Achieve GDPR Certification in Cambodia with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted GDPR consulting partner in Cambodia,
                  helping organizations design and maintain effective privacy
                  management systems aligned with EU regulations. Our
                  consultants emphasize clarity, operational relevance, and
                  long-term compliance success.
                </div>

                <div className="title small-title">
                  From early-stage privacy assessments to continuous advisory
                  support, First Cert ensures your GDPR journey strengthens data
                  protection governance and enhances international credibility.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Begin your GDPR Certification journey in Cambodia with First
                  Cert and establish a strong, privacy-driven foundation for
                  global trust and sustainable growth.
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

export default CambodiaGdpr;
