import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imggdpr from "../../../assets/img/country/middle-east/iraq/gdpr-img.webp";
import benefitsgdpr from "../../../assets/img/country/middle-east/iraq/gdpr-benefits.webp";
import bgimg from "../../../assets/img/services/card-gdpr.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function IraqGdpr() {
  const benefits = [
    "Clear visibility and accountability over personal data usage",
    "Reduced exposure to regulatory fines and contractual risks",
    "Increased trust among EU-based customers and partners",
    "Defined roles and responsibilities for privacy management",
    "Enhanced organizational reputation as a privacy-first enterprise",
  ];

  const industryData = [
    {
      icon: "bi-code-slash",
      title: "Software development firms and IT service providers",
    },
    {
      icon: "bi-cloud-check",
      title: "SaaS companies, cloud platforms, and digital startups",
    },
    {
      icon: "bi-cart-check",
      title: "Online retailers, subscription platforms, and marketplaces",
    },
    {
      icon: "bi-headset",
      title: "Business process outsourcing and data processing organizations",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Banks, fintech firms, and payment service providers",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Healthcare, research, and life sciences entities",
    },
    {
      icon: "bi-bar-chart-line",
      title:
        "Marketing agencies, analytics providers, and data-centric consultancies",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Data Mapping & Scope Definition",
      description:
        "Identify personal data sources, flows, and processing activities",
    },
    {
      number: "2",
      title: "Gap & Risk Assessment",
      description: "Evaluate existing practices against GDPR obligations",
    },
    {
      number: "3",
      title: "Privacy Framework Design",
      description:
        "Develop policies, notices, consent mechanisms, and processing records",
    },
    {
      number: "4",
      title: "Control Implementation",
      description:
        "Establish access controls, retention rules, and response workflows",
    },
    {
      number: "5",
      title: "Training & Awareness",
      description:
        "Deliver role-specific GDPR training for employees and leadership",
    },
    {
      number: "6",
      title: "Compliance Review",
      description: "Validate effectiveness and address remaining gaps",
    },
    {
      number: "7",
      title: "Ongoing Advisory",
      description: "Support regulatory updates and continuous compliance",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          GDPR Certification in Iraq | Expert GDPR Compliance & Data Privacy
          Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Planning to achieve GDPR Certification in Iraq? First Cert provides end-to-end GDPR compliance consulting, including privacy risk assessments, governance frameworks, employee training, and continuous advisory to help organizations meet EU data protection requirements confidently."
        />
        <meta
          name="keywords"
          content="GDPR Certification in Iraq, GDPR consultants Iraq, GDPR compliance Iraq, GDPR audit Iraq, GDPR documentation Iraq, GDPR certification cost Iraq, data privacy consultants Iraq, GDPR implementation Iraq, EU GDPR Iraq, privacy compliance Iraq, GDPR training Iraq, GDPR advisory services Iraq, GDPR audit support Iraq, First Cert GDPR Iraq"
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
          <h1 className="main-title">GDPR Certification in Iraq</h1>
          <p className="small-desc">
            Enabling Responsible and Lawful Data Protection
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
                alt="GDPR Certification in Iraq"
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
                <b>GDPR Certification in Iraq</b> helps organizations
                demonstrate responsible handling of personal data when engaging
                with individuals, customers, or partners within the European
                Union. As Iraqi businesses expand into international markets
                through digital services, outsourcing, technology platforms, and
                cross-border trade, compliance with EU privacy regulations has
                become essential for credibility and long-term growth.
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
                <a href="/">First Cert</a> works closely with organizations
                across Iraq to design GDPR compliance programs that align with
                real operational workflows. Our approach treats data privacy as
                a governance and risk management discipline rather than a purely
                legal exercise.
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
            What GDPR Certification in Iraq Represents
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>GDPR Certification in Iraq</b> reflects an organization's
            alignment with the core principles of the EU General Data Protection
            Regulation, ensuring personal data is processed lawfully,
            transparently, and securely throughout its lifecycle.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A well-implemented GDPR framework typically covers:
          </p>

          <ul className="iso-list">
            {[
              "Defined legal grounds for collecting and processing personal data",
              "Controls governing data access, storage, retention, and sharing",
              "Processes to address data subject rights such as access, correction, and erasure",
              "Technical and organizational safeguards for sensitive information",
              "Incident management procedures for breach detection and notification",
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
            GDPR compliance signals that privacy protection is embedded into
            enterprise governance and daily decision-making.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations in Iraq Impacted by GDPR
              </h2>

              <p className="text-center section-sub mb-5">
                GDPR applies to organizations in Iraq that process or manage
                personal data of individuals located in the European Union,
                regardless of physical presence in the EU. Commonly affected
                sectors include:
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
              GDPR compliance enables Iraqi organizations to collaborate with
              European clients while meeting global privacy expectations.
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
                Business Value of GDPR Certification in Iraq
              </h1>
              <p className="text-center section-sub mb-5">
                Achieving GDPR Certification in Iraq delivers both regulatory
                confidence and strategic advantages, such as:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitsgdpr}
                alt="GDPR Benefits in Iraq"
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
                GDPR transforms data protection into a competitive and
                trust-building capability.
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
                First Cert's GDPR Compliance Methodology in Iraq
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
                First Cert follows a structured, practical GDPR implementation
                approach tailored for organizations operating in Iraq:
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
          GDPR Certification Cost in Iraq
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
                  The cost of GDPR Certification in Iraq varies depending on
                  several considerations, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and operational complexity
                  </li>
                  <li className="check">
                    Type, volume, and sensitivity of personal data processed
                  </li>
                  <li className="check">
                    Complexity of IT systems and international data transfers
                  </li>
                  <li className="check">
                    Scope of required documentation, training, and advisory
                    support
                  </li>
                  <li className="check">
                    Existing maturity of privacy and information security
                    controls
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a GDPR readiness review to provide a
                  transparent and tailored cost estimate aligned with your
                  compliance goals.
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
                  Get GDPR Certification in Iraq with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a reliable GDPR consulting partner for
                  organizations in Iraq, supporting businesses in designing,
                  implementing, and maintaining effective privacy management
                  systems aligned with EU regulations. Our consultants focus on
                  clarity, practicality, and long-term compliance
                  sustainability.
                </div>

                <div className="title small-title">
                  From initial privacy assessments to continuous advisory
                  services, First Cert ensures your GDPR journey strengthens
                  governance, builds trust, and supports international business
                  growth.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your GDPR Certification journey in Iraq with First Cert
                  and establish a strong, privacy-driven foundation for global
                  confidence and sustainable success.
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

export default IraqGdpr;
