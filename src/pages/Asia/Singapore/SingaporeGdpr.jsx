import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imggdpr from "../../../assets/img/country/asia/singapore/gdpr-img.webp";
import benefitsgdpr from "../../../assets/img/country/asia/singapore/gdpr-benefits.webp";
import bgimg from "../../../assets/img/services/card-gdpr.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function SingaporeGdpr() {
  const benefits = [
    "Robust Privacy Controls – Structured protection of personal and sensitive information",
    "Regulatory Readiness – Alignment with EU data protection laws",
    "Customer & Partner Assurance – Demonstrates respect for data privacy rights",
    "International Market Access – Supports collaboration with EU-based clients",
    "Risk Reduction – Identifies and mitigates data protection gaps early",
    "Brand Credibility – Positions the organization as privacy-conscious and trustworthy",
  ];

  const hipaaData = [
    {
      icon: "bi-code-slash",
      title: "Software development firms and IT service providers",
    },
    {
      icon: "bi-cloud-check",
      title: "Cloud platforms and SaaS businesses",
    },
    {
      icon: "bi-cart-check",
      title: "E-commerce companies and online service providers",
    },
    {
      icon: "bi-headset",
      title: "BPOs, shared service centers, and data processors",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Banks, fintech companies, and payment platforms",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Healthcare, biotech, and life sciences organizations",
    },
    {
      icon: "bi-bar-chart-line",
      title: "Marketing, data analytics, and digital media agencies",
    },
    {
      icon: "bi-shield-lock",
      title: "Startups and enterprises offering services to EU residents",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Data Discovery & Scoping",
      description: "Identify personal data sources and processing activities.",
    },
    {
      number: "2",
      title: "Privacy Risk Assessment",
      description: "Measure gaps against GDPR requirements.",
    },
    {
      number: "3",
      title: "Documentation Development",
      description: "Privacy notices, consent frameworks, ROPA, and DPAs.",
    },
    {
      number: "4",
      title: "Control & Process Implementation",
      description: "Access controls, breach response, and governance measures.",
    },
    {
      number: "5",
      title: "Employee Training & Awareness",
      description: "GDPR training aligned to job roles.",
    },
    {
      number: "6",
      title: "Compliance Review & Validation",
      description: "Internal assessments and corrective actions.",
    },
    {
      number: "7",
      title: "Ongoing Advisory Support",
      description: "Continuous monitoring and regulatory updates.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          GDPR Certification in Singapore | Professional GDPR Compliance &
          Advisory Services – First Cert
        </title>
        <meta
          name="description"
          content="Looking for GDPR Certification in Singapore? First Cert offers complete GDPR compliance consulting, privacy assessments, documentation, workforce training, and ongoing advisory support to help organizations meet EU data protection obligations."
        />
        <meta
          name="keywords"
          content="GDPR Certification in Singapore, GDPR consultants in Singapore, GDPR compliance Singapore, GDPR audit Singapore, GDPR documentation Singapore, GDPR certification cost Singapore, data protection consultants Singapore, GDPR implementation Singapore, EU GDPR Singapore, privacy compliance Singapore, GDPR training Singapore, GDPR consulting services Singapore, GDPR audit support Singapore, affordable GDPR consultants Singapore, First Cert GDPR consultants."
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
          <h1 className="main-title">GDPR Certification in Singapore</h1>
          <p className="small-desc">
            Advancing Privacy Compliance & Global Confidence
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
                alt="GDPR Certification"
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
                <b>GDPR Certification in Singapore</b> helps organizations
                establish strong personal data protection practices while
                aligning with European Union privacy regulations. As
                Singapore-based companies increasingly engage with EU customers,
                partners, and digital markets, GDPR compliance has become a
                strategic requirement for cross-border operations.
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
                <a href="/">First Cert</a> organizations in Singapore by
                building practical, risk-based GDPR compliance frameworks that
                emphasize transparency, accountability, and long-term privacy
                governance. Our approach enables businesses to meet regulatory
                expectations while supporting international growth and
                data-driven innovation.
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
            Understanding GDPR Certification in Singapore
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>GDPR Certification in Singapore</b> demonstrates that an
            organization processes EU personal data in line with the General
            Data Protection Regulation. The regulation mandates strict controls
            around data collection, usage, storage, and sharing, along with
            enforceable rights for individuals.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Through GDPR-aligned implementation, organizations can:
          </p>
          <ul className="iso-list">
            {[
              "Protect personal and sensitive data from unauthorized access and misuse",
              "Establish lawful and documented data processing activities",
              "Gain full visibility into personal data flows across systems",
              "Reduce exposure to regulatory penalties and operational disruptions",
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
            Industries such as technology, digital services, finance,
            healthcare, and e-commerce in Singapore benefit significantly from
            adopting GDPR-compliant privacy practices.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Which Organizations Need GDPR Compliance in Singapore?
              </h2>

              <p className="text-center section-sub mb-5">
                GDPR applies to Singapore organizations that process personal
                data of individuals located in the European Union, regardless of
                company size or industry. This includes:
              </p>
              <div className="row g-4">
                {/* LEFT SIDE CARDS */}
                <div className="col-lg-9">
                  <div className="row g-4">
                    {hipaaData.map((item, index) => (
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
                    <h5>Our Experties</h5>
                    <ul>
                      <li>
                        <a href="iso-9001-certification-in-singapore">
                          ISO 9001 Certification in Singapore
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-singapore">
                          ISO 27001 Certification in Singapore
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-singapore">
                          CMMI Certification in Singapore
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-singapore">
                          HIPAA Certification in Singapore
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-singapore">
                          VAPT Certification in Singapore
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-singapore">
                          GDPR Certification in Singapore
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-singapore">
                          SOC 1 Certification in Singapore
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-singapore">
                          SOC 2 Certification in Singapore
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              GDPR compliance enables Singapore organizations to operate
              responsibly while meeting international privacy expectations.
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
                Key Business Advantages of GDPR Certification in Singapore
              </h1>
              <p className="text-center section-sub mb-5">
                Achieving GDPR Certification in Singapore delivers long-term
                business and compliance value:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitsgdpr}
                alt="GDPR Benefits"
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
                GDPR compliance strengthens operational discipline while
                enhancing market credibility.
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
                GDPR Certification Methodology in Singapore by{" "}
                <span style={{ color: "black" }}>First Cert</span>
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
                First Cert follows a structured and scalable GDPR implementation
                approach tailored to business needs{" "}
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
          GDPR Certification Cost in Singapore?
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
                  The cost of GDPR Certification in the Singapore varies based
                  on organizational factors such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Size and operational structure of the{" "}
                  </li>
                  <li className="check">
                    Volume and sensitivity of personal data processed
                  </li>
                  <li className="check">
                    Complexity of IT systems and data workflows
                  </li>
                  <li className="check">
                    Level of documentation, training, and advisory support
                    required
                  </li>
                  <li className="check">
                    Overall scope and maturity of existing privacy controls
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial privacy assessment to deliver a
                  clear, customized, and cost-effective GDPR compliance roadmap.
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
                  Get GDPR Certification in Singapore with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted GDPR consulting partner in Singapore,
                  supporting organizations with end-to-end data protection and
                  privacy compliance solutions. Our experienced consultants
                  provide actionable guidance, accurate documentation, employee
                  enablement, and long-term compliance support.
                </div>
                <div className="title small-title">
                  By working with First Cert, organizations gain stronger
                  privacy governance, enhanced international credibility, and
                  confidence in meeting evolving global data protection
                  regulations.
                </div>
                <div className="title small-title-p">
                  📧 For consultation: info@firstcertification.com Start your
                  GDPR Certification journey in Singapore with First Cert — your
                  partner in data privacy, compliance excellence, and
                  international business confidence.
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

export default SingaporeGdpr;
