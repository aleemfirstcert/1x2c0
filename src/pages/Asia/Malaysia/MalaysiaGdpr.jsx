import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imggdpr from "../../../assets/img/country/asia/malaysia/gdpr-img.webp";
import benefitsgdpr from "../../../assets/img/country/asia/malaysia/gdpr-benefits.webp";
import bgimg from "../../../assets/img/services/card-gdpr.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function MalaysiaGdpr() {
  const benefits = [
    "Improved control over personal and sensitive data",
    "Reduced exposure to regulatory fines and contractual risks",
    "Increased confidence among EU clients and business partners",
    "Stronger internal accountability and privacy awareness",
    "Enhanced brand reputation as a privacy-responsible organization",
  ];

  const hipaaData = [
    {
      icon: "bi-code-slash",
      title: "IT services, software development, and managed service providers",
    },
    {
      icon: "bi-cloud-check",
      title: "Cloud platforms, SaaS providers, and digital applications",
    },
    {
      icon: "bi-cart-check",
      title: "E-commerce businesses and online marketplaces",
    },
    {
      icon: "bi-headset",
      title: "Outsourcing firms, shared service centers, and data processors",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Financial institutions, fintech companies, and payment services",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Healthcare, research, biotech, and life sciences organizations",
    },
    {
      icon: "bi-bar-chart-line",
      title: "Marketing agencies, analytics firms, and digital media companies",
    },
    {
      icon: "bi-shield-lock",
      title: "Startups and enterprises offering services to EU residents",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Data Mapping & Scope Definition",
      description: "Identify personal data assets and processing activities.",
    },
    {
      number: "2",
      title: "Gap & Risk Evaluation",
      description: "Assess compliance gaps against GDPR obligations.",
    },
    {
      number: "3",
      title: "Privacy Documentation",
      description:
        "Develop policies, notices, consent mechanisms, and records.",
    },
    {
      number: "4",
      title: "Process & Control Deployment",
      description:
        "Implement governance, access controls, and breach response plans.",
    },
    {
      number: "5",
      title: "Staff Training",
      description: "Deliver role-based GDPR awareness programs.",
    },
    {
      number: "6",
      title: "Compliance Validation",
      description: "Perform internal reviews and corrective actions.",
    },
    {
      number: "7",
      title: "Ongoing Advisory",
      description:
        "Support continuous compliance and regulatory updates. This approach ensures GDPR compliance is sustainable and audit-ready.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          GDPR Certification in Malaysia | Expert GDPR Compliance & Privacy
          Advisory – First Cert
        </title>
        <meta
          name="description"
          content="Planning for GDPR Certification in Malaysia? First Cert delivers end-to-end GDPR compliance services including privacy gap analysis, documentation development, employee awareness, and advisory support to help organizations meet EU data protection requirements."
        />
        <meta
          name="keywords"
          content="GDPR Certification in Malaysia, GDPR consultants in Malaysia, GDPR compliance Malaysia, GDPR audit Malaysia, GDPR documentation Malaysia, GDPR certification cost Malaysia, data protection consultants Malaysia, GDPR implementation Malaysia, EU GDPR Malaysia, privacy compliance Malaysia, GDPR training Malaysia, GDPR consulting services Malaysia, GDPR audit support Malaysia, affordable GDPR consultants Malaysia, First Cert GDPR consultants."
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
          <h1 className="main-title">GDPR Certification in Malaysia</h1>
          <p className="small-desc">
            Building Trust Through Responsible Data Protection
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
                <b>GDPR Certification in Malaysia</b> supports organizations in
                managing personal data responsibly while aligning with European
                Union data protection laws. As Malaysian businesses increasingly
                serve EU customers, operate digital platforms, or participate in
                international supply chains, GDPR compliance has become a
                critical business enabler rather than just a legal obligation.
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
                <a href="/">First Cert</a> helps organizations in Malaysia
                establish privacy frameworks that are practical, auditable, and
                aligned with real operational processes. Our focus is on
                embedding privacy governance into daily business activities to
                support long-term compliance and customer confidence.
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
            What GDPR Certification in Malaysia Represents
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>GDPR Certification in Malaysia</b> indicates that an organization
            has implemented controls and processes aligned with the General Data
            Protection Regulation for handling EU personal data. The regulation
            emphasizes accountability, transparency, and protection of
            individual rights throughout the data lifecycle. Through
            GDPR-aligned practices, organizations can:
          </p>
          <ul className="iso-list">
            {[
              "Define lawful bases for collecting and processing personal data",
              "Maintain clear visibility over data storage, transfers, and usage",
              "Protect personal information from misuse, loss, or unauthorized access",
              "Respond effectively to data subject requests and incidents",
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
            GDPR compliance demonstrates that an organization treats data
            privacy as a core governance responsibility.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations in Malaysia That Require GDPR Compliance?
              </h2>

              <p className="text-center section-sub mb-5">
                GDPR applies to Malaysian organizations that process personal
                data of individuals located in the European Union. This includes
                a wide range of sectors such as:
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
                        <a href="iso-9001-certification-in-malaysia">
                          ISO 9001 Certification in Malaysia
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-malaysia">
                          ISO 27001 Certification in Malaysia
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-malaysia">
                          CMMI Certification in Malaysia
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-malaysia">
                          HIPAA Certification in Malaysia
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-malaysia">
                          VAPT Certification in Malaysia
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-malaysia">
                          GDPR Certification in Malaysia
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-malaysia">
                          SOC 1 Certification in Malaysia
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-malaysia">
                          SOC 2 Certification in Malaysia
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              GDPR compliance enables Malaysian organizations to operate
              confidently in global markets while respecting privacy rights.
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
                Business Benefits of GDPR Certification in Malaysia
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving GDPR Certification in Malaysia gain both
                regulatory and strategic advantages:
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
                GDPR Certification Methodology in Malaysia by{" "}
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
          GDPR Certification Cost in Malaysia?
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
                  The cost of GDPR Certification in Malaysia varies depending on
                  several factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Size and operational structure of the{" "}
                  </li>
                  <li className="check">
                    Volume and sensitivity of personal data processed
                  </li>
                  <li className="check">
                    IT infrastructure and data flow complexity
                  </li>
                  <li className="check">
                    Scope of documentation, training, and advisory support
                    required
                  </li>
                  <li className="check">Existing level of privacy maturity</li>
                </ul>

                <div className="title small-title">
                  First Cert provides a customized and transparent cost proposal
                  following an initial privacy readiness assessment.
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
                  Achieve GDPR Certification in Malaysia with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted GDPR consulting partner in Malaysia,
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
                  GDPR Certification journey in Malaysia with First Cert — your
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

export default MalaysiaGdpr;
