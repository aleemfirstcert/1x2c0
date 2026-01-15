import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imggdpr from "../../../assets/img/country/middle-east/UAE/gdpr-img.webp";
import benefitsgdpr from "../../../assets/img/country/middle-east/UAE/gdpr-benefits.webp";
import bgimg from "../../../assets/img/services/card-gdpr.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function UaeGdpr() {
  const benefits = [
    "Stronger Data Protection Controls – Secure handling of personal and sensitive data",
    "Regulatory Alignment – Compliance with EU data protection obligations",
    "Customer & Partner Trust – Demonstrates commitment to privacy rights",
    "Global Business Enablement – Supports partnerships with EU-based entities",
    "Reduced Risk Exposure – Early identification and mitigation of privacy risks",
    "Enhanced Brand Reputation – Positions the organization as privacy-focused and responsible",
  ];

  const hipaaData = [
    {
      icon: "bi-code-slash",
      title: "IT and software development companies",
    },
    {
      icon: "bi-cloud-check",
      title: "SaaS providers and cloud-based platforms",
    },
    {
      icon: "bi-cart-check",
      title: "Online retailers and digital marketplaces",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and data processing service providers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Financial institutions and fintech organizations",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Healthcare, pharmaceutical, and research entities",
    },
    {
      icon: "bi-bar-chart-line",
      title: "Marketing, analytics, and digital advertising agencies",
    },
    {
      icon: "bi-shield-lock",
      title: "Startups offering services to EU residents",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Data Mapping & Scope Definition",
      description: "Identify personal data flows and processing activities.",
    },
    {
      number: "2",
      title: "Privacy Gap Assessment",
      description: "Evaluate current practices against GDPR requirements.",
    },
    {
      number: "3",
      title: "Policy & Register Development",
      description: "Privacy notices, consent mechanisms, ROPA, and DPAs.",
    },
    {
      number: "4",
      title: "Control Implementation",
      description:
        "Data access controls, security safeguards, and governance measures.",
    },
    {
      number: "5",
      title: "Employee Awareness & Training",
      description: "Role-based GDPR training programs.",
    },
    {
      number: "6",
      title: "Compliance Validation",
      description: "Internal reviews and corrective actions.",
    },
    {
      number: "7",
      title: "Ongoing Advisory Support",
      description: "Continuous compliance monitoring and updates.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          GDPR Certification in UAE | Expert GDPR Compliance & Advisory Services
          – First Cert
        </title>
        <meta
          name="description"
          content="Need GDPR Certification in the UAE? First Cert delivers end-to-end GDPR consulting, privacy risk assessments, documentation support, staff training, and ongoing compliance guidance to help organizations meet EU data protection requirements."
        />
        <meta
          name="keywords"
          content="GDPR Certification in UAE, GDPR consultants in UAE, GDPR compliance UAE, GDPR audit UAE, GDPR documentation UAE, GDPR certification cost UAE, data protection consultants UAE, GDPR implementation UAE, EU GDPR UAE, privacy compliance UAE, GDPR training UAE, GDPR consulting services UAE, GDPR audit support UAE, affordable GDPR consultants UAE, First Cert GDPR consultants."
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
          <h1 className="main-title">GDPR Certification in UAE</h1>
          <p className="small-desc">
            Building Strong Privacy Governance & International Trust
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
                <b>GDPR Certification in UAE</b> enables organizations to manage
                personal data responsibly while aligning with European Union
                data protection laws. As UAE businesses increasingly serve EU
                customers and operate across borders, GDPR compliance has become
                essential for lawful data processing and international
                collaboration.
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
                <a href="/">First Cert</a> supports UAE-based organizations by
                designing practical GDPR compliance programs focused on
                accountability, transparency, and sustainable privacy
                governance. Our solutions help reduce regulatory risk while
                enabling organizations to operate confidently in global markets.
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
            Overview of GDPR Certification in UAE
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>GDPR Certification in UAE</b> reflects an organization’s
            adherence to the General Data Protection Regulation when handling
            personal data belonging to EU residents. The regulation establishes
            strict requirements around data protection, individual rights, and
            organizational accountability.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            By implementing GDPR-aligned practices, organizations can:
          </p>
          <ul className="iso-list">
            {[
              "Secure personal and sensitive information against misuse or loss",
              "Define clear purposes and lawful bases for data processing",
              "Improve visibility and control over data flows",
              "Minimize legal, financial, and reputational exposure",
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
            Organizations in technology, outsourcing, digital services,
            healthcare, finance, and e-commerce sectors benefit significantly
            from GDPR compliance by meeting globally recognized privacy
            standards.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Needs GDPR Compliance in UAE?
              </h2>

              <p className="text-center section-sub mb-5">
                GDPR applies to UAE organizations that process personal data of
                individuals located in the European Union, regardless of company
                size or industry. This includes:
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
                        <a href="iso-9001-certification-in-uae">
                          ISO 9001 Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-uae">
                          ISO 27001 Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-uae">
                          CMMI Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-uae">
                          HIPAA Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-uae">
                          VAPT Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-uae">
                          GDPR Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-uae">
                          SOC 1 Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-uae">
                          SOC 2 Certification in UAE
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              GDPR compliance helps UAE organizations operate ethically, avoid
              regulatory penalties, and build trust with international
              stakeholders.
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
                Business Benefits of GDPR Certification in UAE
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving GDPR Certification in the UAE gain
                multiple strategic advantages:
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
                GDPR Certification in UAE – Implementation Approach by{" "}
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
                First Cert follows a structured, business-oriented GDPR
                implementation methodology.
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
          GDPR Certification Cost in UAE?
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
                  The cost of GDPR Certification in the UAE varies based on
                  organizational factors such as:
                </div>

                <ul className="features">
                  <li className="check">Organization size and structure</li>
                  <li className="check">Volume and sensitivity of personal data processed</li>
                  <li className="check">
                    IT systems and data workflow complexity
                  </li>
                  <li className="check">
                    Documentation and training requirements
                  </li>
                  <li className="check">Overall compliance scope</li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial assessment to provide a
                  transparent, customized, and cost-effective GDPR compliance
                  proposal.
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
                  Get GDPR Certification in UAE with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted GDPR consulting partner for
                  organizations in UAE seeking reliable and sustainable data
                  privacy compliance. We help businesses design effective
                  privacy frameworks, prepare accurate documentation, train
                  employees, and maintain long-term compliance readiness.
                </div>
                <div className="title small-title">
                  By choosing First Cert, organizations gain stronger data
                  governance, improved international credibility, and confidence
                  in meeting global privacy expectations.
                </div>
                <div className="title small-title-p">
                  📧 For consultation: info@firstcertification.com Start your
                  GDPR Certification journey in UAE with First Cert — your
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

export default UaeGdpr;
