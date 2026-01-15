import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imggdpr from "../../../assets/img/country/middle-east/iran/gdpr-img.webp";
import benefitsgdpr from "../../../assets/img/country/middle-east/iran/gdpr-benefits.webp";
import bgimg from "../../../assets/img/services/card-gdpr.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function IranGdpr() {
  const benefits = [
    "Clear oversight and accountability for personal data usage",
    "Reduced risk of non-compliance penalties and contractual disputes",
    "Increased confidence from EU customers, regulators, and partners",
    "Defined privacy roles, responsibilities, and escalation mechanisms",
    "Stronger brand positioning as a privacy-conscious organization",
  ];

  const industryData = [
    {
      icon: "bi-code-slash",
      title: "IT companies, software developers, and managed service providers",
    },
    {
      icon: "bi-cloud-check",
      title: "SaaS platforms, cloud service providers, and digital startups",
    },
    {
      icon: "bi-cart-check",
      title:
        "E-commerce businesses, subscription services, and online marketplaces",
    },
    {
      icon: "bi-headset",
      title: "Data processing firms and outsourcing service providers",
    },
    {
      icon: "bi-credit-card-2-front",
      title:
        "Financial institutions, fintech companies, and payment processors",
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
      title: "Data Discovery & Scoping",
      description:
        "Identify personal data types, sources, and processing activities",
    },
    {
      number: "2",
      title: "Privacy Risk Assessment",
      description: "Evaluate compliance gaps and exposure areas",
    },
    {
      number: "3",
      title: "Governance Framework Design",
      description: "Develop privacy policies, notices, and processing records",
    },
    {
      number: "4",
      title: "Control Deployment",
      description:
        "Implement access controls, retention schedules, and response workflows",
    },
    {
      number: "5",
      title: "Training & Awareness",
      description: "Educate staff and leadership on GDPR responsibilities",
    },
    {
      number: "6",
      title: "Compliance Validation",
      description: "Review implementation effectiveness and close gaps",
    },
    {
      number: "7",
      title: "Ongoing Advisory",
      description:
        "Support regulatory updates and continuous compliance management",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          GDPR Certification in Iran | Trusted EU Data Protection & Privacy
          Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve GDPR Certification in Iran? First Cert offers comprehensive GDPR consulting services, including data protection assessments, privacy governance development, staff awareness programs, and ongoing advisory to help organizations comply confidently with EU data protection laws."
        />
        <meta
          name="keywords"
          content="GDPR Certification in Iran, GDPR consultants Iran, GDPR compliance Iran, GDPR audit Iran, GDPR documentation Iran, GDPR certification cost Iran, data privacy services Iran, GDPR implementation Iran, EU GDPR Iran, privacy compliance Iran, GDPR training Iran, GDPR advisory Iran, First Cert GDPR Iran"
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
          <h1 className="main-title">GDPR Certification in Iran</h1>
          <p className="small-desc">
            Building Trust Through Data Privacy Excellence
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
                alt="GDPR Certification in Iran"
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
                <b>GDPR Certification in Iran</b> supports organizations in
                responsibly managing personal data related to individuals
                located within the European Union. As Iranian companies
                increasingly participate in cross-border services, digital
                commerce, outsourcing, and international partnerships, GDPR
                compliance has become a critical requirement for maintaining
                credibility and contractual eligibility.
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
                <a href="/">First Cert</a> works with organizations across Iran
                to embed GDPR principles into daily operations. Our methodology
                focuses on practical governance, accountability, and risk
                management—ensuring privacy compliance becomes a sustainable
                business function rather than a one-time legal exercise.
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
            What GDPR Certification in Iran Demonstrates
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>GDPR Certification in Iran</b> signifies that an organization
            aligns its data processing activities with the principles of the EU
            General Data Protection Regulation. This ensures that personal data
            is handled lawfully, securely, and transparently across its entire
            lifecycle.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A strong GDPR compliance framework typically includes:
          </p>

          <ul className="iso-list">
            {[
              "Clearly defined lawful bases for data collection and processing",
              "Controlled handling of data storage, access, retention, and transfer",
              "Structured processes for responding to data subject rights requests",
              "Technical and organizational measures to safeguard personal information",
              "Incident response plans for breach detection and regulatory notification",
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
            Certification reflects a mature approach to privacy governance and
            compliance accountability.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who in Iran Is Subject to GDPR
              </h2>

              <p className="text-center section-sub mb-5">
                GDPR applies to organizations in Iran that process or manage
                personal data belonging to individuals located in the European
                Union, regardless of where the organization operates. Commonly
                impacted sectors include:
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
                        <a href="iso-9001-certification-in-iran">
                          ISO 9001 Certification in Iran
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-iran">
                          ISO 27001 Certification in Iran
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-iran">
                          CMMI Certification in Iran
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-iran">
                          HIPAA Certification in Iran
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-iran">
                          VAPT Certification in Iran
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-iran">
                          GDPR Certification in Iran
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-iran">
                          SOC 1 Certification in Iran
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-iran">
                          SOC 2 Certification in Iran
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              GDPR compliance enables Iranian organizations to operate
              confidently within EU regulatory expectations.
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
                Strategic Benefits of GDPR Certification in Iran
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving GDPR Certification in Iran gain both
                regulatory assurance and competitive advantages, including:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitsgdpr}
                alt="GDPR Benefits in Iran"
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
                GDPR transforms data protection into a foundation for trust and
                sustainable growth.
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
                First Cert's GDPR Implementation Approach in Iran
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
                First Cert follows a structured and business-aligned GDPR
                compliance methodology tailored to Iranian organizations:
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
          GDPR Certification Cost in Iran
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
                  The cost of GDPR Certification in Iran varies based on several
                  factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and operational complexity
                  </li>
                  <li className="check">
                    Volume, sensitivity, and types of personal data processed
                  </li>
                  <li className="check">
                    Use of third-party vendors and cross-border data transfers
                  </li>
                  <li className="check">
                    Scope of documentation, training, and advisory support
                    required
                  </li>
                  <li className="check">
                    Existing maturity of information security and privacy
                    controls
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a GDPR readiness assessment to provide
                  a transparent, customized cost estimate aligned with your
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
                  Get GDPR Certified in Iran with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted GDPR consulting partner in Iran,
                  supporting organizations in implementing and maintaining
                  effective privacy management systems aligned with EU
                  regulations. Our consultants focus on clarity, practicality,
                  and long-term compliance sustainability.
                </div>

                <div className="title small-title">
                  From initial assessments to continuous privacy advisory, First
                  Cert ensures your GDPR journey strengthens governance, builds
                  trust, and supports international business expansion.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your GDPR Certification journey in Iran with First Cert
                  and establish a strong, privacy-driven foundation for global
                  confidence and regulatory excellence.
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

export default IranGdpr;
