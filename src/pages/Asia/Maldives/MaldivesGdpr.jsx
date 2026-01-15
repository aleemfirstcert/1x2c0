import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imggdpr from "../../../assets/img/country/asia/maldives/gdpr-img.webp";
import benefitsgdpr from "../../../assets/img/country/asia/maldives/gdpr-benefits.webp";
import bgimg from "../../../assets/img/services/card-gdpr.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function MaldivesGdpr() {
  const benefits = [
    "Strong control and visibility over personal data processing",
    "Lower exposure to regulatory fines and disputes",
    "Greater trust from European clients and regulators",
    "Well-defined privacy responsibilities across teams",
    "Improved brand credibility as a secure data handler",
  ];

  const industryData = [
    {
      icon: "bi-code-slash",
      title: "Software companies and IT service providers",
    },
    {
      icon: "bi-cloud-check",
      title: "SaaS platforms and cloud hosting providers",
    },
    {
      icon: "bi-cart-check",
      title: "Online travel, booking, and e-commerce businesses",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and shared service centers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Financial services, fintech, and payment platforms",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Healthcare, research, and data-driven organizations",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Data Discovery",
      description: "Map how and where personal data is used",
    },
    {
      number: "2",
      title: "Risk Evaluation",
      description: "Identify privacy and compliance gaps",
    },
    {
      number: "3",
      title: "Policy & Governance",
      description: "Develop GDPR-aligned documentation",
    },
    {
      number: "4",
      title: "Control Setup",
      description: "Implement access, retention, and response processes",
    },
    {
      number: "5",
      title: "Training",
      description: "Build GDPR awareness across staff and management",
    },
    {
      number: "6",
      title: "Compliance Validation",
      description: "Test controls and close gaps",
    },
    {
      number: "7",
      title: "Ongoing Support",
      description: "Maintain compliance as regulations evolve",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          GDPR Certification in Maldives | EU Data Protection & Privacy
          Compliance – First Cert
        </title>
        <meta
          name="description"
          content="Looking for GDPR Certification in Maldives? First Cert provides end-to-end GDPR compliance support, including data protection assessments, privacy framework development, regulatory alignment, and ongoing advisory to help organizations safely manage EU personal data."
        />
        <meta
          name="keywords"
          content="GDPR Certification in Maldives, GDPR consultants Maldives, GDPR compliance Maldives, GDPR audit Maldives, GDPR documentation Maldives, GDPR certification cost Maldives, data privacy services Maldives, GDPR implementation Maldives, EU GDPR Maldives, privacy compliance Maldives, GDPR training Maldives, GDPR advisory Maldives, First Cert GDPR Maldives"
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
          <h1 className="main-title">GDPR Certification in Maldives</h1>
          <p className="small-desc">Enabling Global Data Confidence</p>
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
                alt="GDPR Certification in Maldives"
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
                <b>GDPR Certification in Maldives</b> allows organizations to
                legally process and protect personal data belonging to
                individuals in the European Union. As Maldivian companies
                increasingly serve European customers through SaaS platforms,
                digital services, travel technology, fintech, outsourcing, and
                cloud-based operations, GDPR compliance has become a critical
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
                <b>First Cert</b> helps organizations in Maldives adopt
                privacy-driven operating models that meet regulatory
                expectations while supporting efficient business growth.
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
            What GDPR Certification in Maldives Represents
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>GDPR Certification in Maldives</b> confirms that an organization
            has established effective controls for managing personal data
            throughout its entire lifecycle. It ensures that information is
            handled transparently, securely, and in accordance with European
            data protection law.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A strong GDPR compliance program typically includes:
          </p>

          <ul className="iso-list">
            {[
              "Clear legal grounds for collecting and using personal data",
              "Data minimization, retention, and deletion controls",
              "Procedures for consent management and data subject rights",
              "Technical and organizational measures to protect privacy",
              "Breach response and regulatory notification processes",
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
            Certification demonstrates that privacy governance is embedded into
            daily operations.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Must Follow GDPR in Maldives
              </h2>

              <p className="text-center section-sub mb-5">
                Any organization in Maldives that collects or processes personal
                data of EU residents must comply with GDPR, including:
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
                        <a href="iso-9001-certification-in-maldives">
                          ISO 9001 Certification in Maldives
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-maldives">
                          ISO 27001 Certification in Maldives
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-maldives">
                          CMMI Certification in Maldives
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-maldives">
                          HIPAA Certification in Maldives
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-maldives">
                          VAPT Certification in Maldives
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-maldives">
                          GDPR Certification in Maldives
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-maldives">
                          SOC 1 Certification in Maldives
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-maldives">
                          SOC 2 Certification in Maldives
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              GDPR compliance allows Maldivian businesses to work with EU
              partners without legal, financial, or reputational risk.
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
                Business Value of GDPR Certification in Maldives
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that obtain GDPR Certification in Maldives gain:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitsgdpr}
                alt="GDPR Benefits in Maldives"
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
                GDPR transforms privacy from a compliance burden into a
                competitive advantage.
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
                First Cert's GDPR Compliance Framework in Maldives
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
                First Cert follows a practical and business-aligned GDPR
                implementation model for organizations in Maldives:
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
          GDPR Certification Cost in Maldives
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
                  The cost of GDPR Certification in Maldives depends on:
                </div>

                <ul className="features">
                  <li className="check">
                    Size and structure of the organization
                  </li>
                  <li className="check">
                    Amount and sensitivity of EU personal data
                  </li>
                  <li className="check">
                    Use of third-party processors and cross-border transfers
                  </li>
                  <li className="check">
                    Scope of documentation, training, and advisory services
                  </li>
                  <li className="check">
                    Existing maturity of privacy and security practices
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts a GDPR readiness review to provide a clear
                  and tailored cost estimate.
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
                  Get GDPR Certified in Maldives with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted GDPR consulting partner in Maldives,
                  helping organizations build compliant, audit-ready privacy
                  frameworks that align with EU regulations. Our experts
                  integrate GDPR controls into real business workflows to ensure
                  lasting compliance and data protection.
                </div>

                <div className="title small-title">
                  From initial assessment to continuous advisory, First Cert
                  enables organizations in Maldives to protect personal data,
                  meet European regulatory expectations, and operate confidently
                  in global markets.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your GDPR Certification journey in Maldives with First
                  Cert and establish a strong foundation for privacy,
                  compliance, and international trust.
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

export default MaldivesGdpr;
