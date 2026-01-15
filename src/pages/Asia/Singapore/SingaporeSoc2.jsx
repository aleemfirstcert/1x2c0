import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/asia/singapore/soc2-img.webp";
import benefitssoc2 from "../../../assets/img/country/asia/singapore/soc2-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function SingaporeSoc2() {
  const benefits = [
    "Stronger Security Governance – Structured controls to manage cyber and operational risks",
    "Client Assurance – Independent validation of data protection practices",
    "Reduced Compliance Friction – Faster responses to security and vendor assessments",
    "Lower Risk Exposure – Minimized likelihood of data incidents and service failures",
    "Global Market Readiness – Alignment with international trust and assurance standards",
    "Enhanced Brand Credibility – Demonstrates commitment to reliability and transparency",
  ];

  const hipaaData = [
    {
      icon: "bi-cloud-check",
      title: "SaaS and cloud solution providers",
    },
    {
      icon: "bi-code-slash",
      title: "IT consulting and managed service companies",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Fintech, payment, and digital banking platforms",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Data analytics, AI, and technology startups",
    },
    {
      icon: "bi-hdd-network",
      title: "Hosting providers and infrastructure operators",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and regional service centers",
    },
    {
      icon: "bi-cart-check",
      title: "E-commerce platforms and online marketplaces",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scoping & Criteria Selection",
      description: "Define services, systems, and Trust Services Criteria.",
    },
    {
      number: "2",
      title: "Risk & Control Assessment",
      description: "Identify gaps and prioritize remediation actions.",
    },
    {
      number: "3",
      title: "Control Design & Alignment",
      description:
        "Implement technical, administrative, and operational safeguards.",
    },
    {
      number: "4",
      title: "Policy & Evidence Development",
      description: "Create documentation and audit-ready records.",
    },
    {
      number: "5",
      title: "Readiness Review",
      description: "Internal testing and corrective action closure.",
    },
    {
      number: "6",
      title: "Audit Coordination",
      description:
        "Support SOC 2 Type 1 or Type 2 audits with accredited auditors.",
    },
    {
      number: "7",
      title: "Ongoing Compliance Advisory",
      description: "Continuous improvement and future audit support.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in Singapore | Strategic SOC 2 Compliance & Risk
          Assurance – First Cert
        </title>
        <meta
          name="description"
          content="Planning for SOC 2 Certification in Singapore? First Cert provides comprehensive SOC 2 advisory services, including risk evaluation, security control design, documentation support, and audit facilitation to meet international trust requirements."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in Singapore, SOC 2 consultants in Singapore, SOC 2 audit Singapore, SOC 2 Type 1 certification Singapore, SOC 2 Type 2 certification Singapore, SOC 2 compliance Singapore, SOC 2 consulting company Singapore, SOC 2 certification cost Singapore, SOC 2 implementation Singapore, SOC 2 documentation Singapore, SOC 2 audit support Singapore, SOC 2 security compliance Singapore, First Cert SOC 2 consultants, SOC 2 certification for IT companies Singapore, SOC 2 for SaaS companies Singapore, SOC 2 cybersecurity certification Singapore."
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
          <h1 className="main-title">SOC 2 Certification in Singapore</h1>
          <p className="small-desc">
            Enabling Secure and Trusted Digital Operations
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
                alt="soc2 Certification"
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
                <b>SOC 2 Certification in Singapore</b> helps organizations
                demonstrate that their information systems are governed by
                strong security, availability, and data protection controls. As
                Singapore continues to lead as a global hub for technology,
                fintech, and cloud-based services, customers and regulators
                increasingly demand independent assurance over how data is
                managed and protected.
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
                <b>First Cert</b> works with organizations across Singapore to
                establish SOC 2 programs that are practical, scalable, and
                aligned with business realities. Our focus is on building
                resilient control environments that support growth while meeting
                global assurance expectations.
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
            What SOC 2 Certification Means in Singapore
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 2 Certification in Singapore</b> is an independent evaluation
            developed under AICPA standards. It measures whether an
            organization’s internal controls comply with the Trust Services
            Criteria (TSC), which cover:
          </p>

          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Protection of systems against unauthorized access</h5>
            </div>

            <div class="vapt-card">
              <h5>Reliable availability of services and platforms</h5>
            </div>

            <div class="vapt-card">
              <h5>Accuracy and integrity of data processing</h5>
            </div>

            <div class="vapt-card">
              <h5>Safeguarding of confidential business information</h5>
            </div>

            <div class="vapt-card">
              <h5>Responsible handling of personal data and privacy</h5>
            </div>
          </div>
          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            SOC 2 compliance signals to stakeholders that the organization
            operates with disciplined risk management and mature governance
            practices.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations That Should Pursue SOC 2 Certification in
                Singapore?
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 2 Certification in Singapore is especially valuable for
                organizations delivering digital or outsourced services,
                including:
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
              For companies serving international markets, SOC 2 compliance
              often plays a key role in vendor selection, client onboarding, and
              contractual approvals.
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
                Business Impact of SOC 2 Certification in Singapore
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve SOC 2 Certification in Singapore
                realize multiple strategic benefits:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc2}
                alt="soc2 Benefits"
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
                With <a href="/">First Cert</a>, SOC 2 certification supports
                both trust-building and long-term business scalability
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
                SOC 2 Certification Methodology in Singapore with{" "}
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
                First Cert follows a structured and practical SOC 2
                implementation roadmap:
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
          SOC 2 Certification Cost in Singapore
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
                  The cost of SOC 2 Certification in Singapore depends on
                  multiple factors, such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Organizational size and service complexity
                  </li>
                  <li className="check">
                    Types of customer data and systems involved
                  </li>
                  <li className="check">
                    Number of Trust Services Criteria selected
                  </li>
                  <li className="check">
                    Existing security controls and maturity level
                  </li>
                  <li className="check">
                    Audit type and observation period duration
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial evaluation to deliver a clear,
                  customized, and cost-effective SOC 2 compliance plan.
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
                  Achieve SOC 2 Certification in Singapore with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted SOC 2 consulting partner in Singapore,
                  supporting organizations with end-to-end compliance—from
                  planning and implementation to audit completion and ongoing
                  assurance. Our consultants focus on practical controls, clear
                  documentation, and measurable risk reduction.
                </div>
                <div className="title small-title">
                  By partnering with First Cert, organizations strengthen
                  information security, meet global client expectations, and
                  build lasting trust in competitive digital markets.
                </div>
                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com Begin your SOC 2
                  Certification journey in Singapore with First Cert and
                  showcase your commitment to security, reliability, and
                  operational excellence.
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

export default SingaporeSoc2;
