import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/middle-east/oman/soc2-img.webp";
import benefitssoc2 from "../../../assets/img/country/middle-east/oman/soc2-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function OmanSoc2() {
  const benefits = [
    "Clear demonstration of control over cybersecurity and operational risks",
    "Greater confidence from clients, investors, and business partners",
    "Reduced effort in responding to security questionnaires and audits",
    "Lower exposure to data breaches and service disruptions",
    "Stronger positioning in regional and global markets",
    "Improved accountability and transparency across internal teams",
  ];

  const industryData = [
    {
      icon: "bi-code-slash",
      title: "Software development companies and SaaS providers",
    },
    {
      icon: "bi-cloud-check",
      title: "Cloud hosting, data center, and infrastructure operators",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "IT consulting firms and managed service providers",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Fintech platforms, payment services, and digital finance firms",
    },
    {
      icon: "bi-hdd-network",
      title: "Data analytics, AI, and platform-based technology companies",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and regional delivery centers",
    },
    {
      icon: "bi-cart-check",
      title: "Online platforms and subscription-based service businesses",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scoping & Criteria Selection",
      description:
        "Define in-scope systems, services, and Trust Services Criteria",
    },
    {
      number: "2",
      title: "Risk & Control Assessment",
      description: "Identify gaps and prioritize remediation activities",
    },
    {
      number: "3",
      title: "Control Design & Deployment",
      description:
        "Implement technical, administrative, and operational safeguards",
    },
    {
      number: "4",
      title: "Documentation & Evidence Readiness",
      description: "Prepare policies and organize audit-ready evidence",
    },
    {
      number: "5",
      title: "Readiness Validation",
      description: "Test control design and operating effectiveness",
    },
    {
      number: "6",
      title: "Audit Facilitation",
      description:
        "Coordinate SOC 2 Type 1 or Type 2 audits with licensed auditors",
    },
    {
      number: "7",
      title: "Ongoing Advisory",
      description: "Support continuous compliance and future reporting cycles",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in Oman | Advanced SOC 2 Compliance & Digital
          Trust Advisory – First Cert
        </title>
        <meta
          name="description"
          content="Planning to obtain SOC 2 Certification in Oman? First Cert offers comprehensive SOC 2 consulting services, covering cybersecurity risk assessment, control framework design, evidence readiness, and audit facilitation to help organizations meet global trust and compliance requirements."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in Oman, SOC 2 consultants Oman, SOC 2 audit Oman, SOC 2 Type 1 Oman, SOC 2 Type 2 Oman, SOC 2 compliance Oman, SOC 2 certification cost Oman, SOC 2 implementation Oman, SOC 2 documentation Oman, SOC 2 audit readiness Oman, SOC 2 cybersecurity Oman, SOC 2 for SaaS Oman, SOC 2 for IT companies Oman, First Cert SOC 2 Oman, SOC 2 trust services Oman"
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
          <h1 className="main-title">SOC 2 Certification in Oman</h1>
          <p className="small-desc">
            Enabling Trust in Secure Digital Operations
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
                alt="SOC 2 Certification in Oman"
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
                <b>SOC 2 Certification in Oman</b> allows organizations to
                demonstrate that their digital platforms, IT environments, and
                service delivery processes are protected by well-governed
                security, availability, and data protection controls. As Oman
                strengthens its role in technology services, cloud adoption,
                fintech solutions, and digital outsourcing, international
                clients increasingly expect independent assurance of how risks
                are identified and managed.
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
                <b>First Cert</b> works with organizations across Oman to
                establish SOC 2 control environments that are practical,
                scalable, and aligned with long-term business objectives. Our
                focus is on embedding trust into operational workflows rather
                than creating compliance overhead.
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
            Scope of SOC 2 Certification in Oman
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 2 Certification in Oman</b> is an independent assurance
            engagement based on the AICPA Trust Services Criteria. It evaluates
            whether an organization has designed and implemented effective
            controls to safeguard systems, data, and service commitments.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A SOC 2 assessment typically examines controls related to:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Protection against unauthorized access and cyber threats</h5>
            </div>

            <div className="vapt-card">
              <h5>
                System availability, capacity planning, and incident recovery
              </h5>
            </div>

            <div className="vapt-card">
              <h5>
                Accuracy, completeness, and reliability of system processing
              </h5>
            </div>

            <div className="vapt-card">
              <h5>
                Confidentiality of business-sensitive and customer information
              </h5>
            </div>

            <div className="vapt-card">
              <h5>Proper handling and protection of personal data</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            SOC 2 compliance confirms that digital operations are supported by
            structured governance and disciplined risk management.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations in Oman That Commonly Pursue SOC 2
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 2 Certification in Oman is especially relevant for
                organizations delivering technology-enabled or outsourced
                services, such as:
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
                        <a href="iso-9001-certification-in-oman">
                          ISO 9001 Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-oman">
                          ISO 27001 Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-oman">
                          CMMI Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-oman">
                          HIPAA Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-oman">
                          VAPT Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-oman">
                          GDPR Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-oman">
                          SOC 1 Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-oman">
                          SOC 2 Certification in Oman
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              For many enterprise and international customers, a SOC 2 report is
              a key requirement during vendor onboarding and security reviews.
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
                Strategic Benefits of SOC 2 Certification in Oman
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve SOC 2 Certification in Oman realize
                multiple operational and commercial advantages, including:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc2}
                alt="SOC 2 Benefits in Oman"
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
                SOC 2 transforms security and trust into a foundation for
                sustainable digital growth.
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
                First Cert's SOC 2 Implementation Framework in Oman
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
                First Cert follows a structured and outcome-focused SOC 2
                methodology tailored to organizations in Oman:
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
          SOC 2 Certification Cost in Oman
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
                  The cost of SOC 2 Certification in Oman varies depending on
                  factors such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and operational complexity
                  </li>
                  <li className="check">
                    Number and type of systems included in scope
                  </li>
                  <li className="check">
                    Sensitivity and volume of customer and business data
                  </li>
                  <li className="check">Selected Trust Services Criteria</li>
                  <li className="check">
                    Audit type and length of the observation period
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a SOC 2 readiness review to provide a
                  clear, customized, and transparent cost estimate aligned with
                  business objectives.
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
                  Achieve SOC 2 Certification in Oman with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted SOC 2 consulting partner in Oman,
                  supporting organizations from initial planning through audit
                  completion and ongoing compliance management. Our consultants
                  emphasize practical controls, clear documentation, and
                  measurable risk reduction aligned with real operational needs.
                </div>

                <div className="title small-title">
                  By partnering with First Cert, organizations strengthen
                  digital trust, meet international client expectations, and
                  scale securely in competitive markets.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your SOC 2 Certification journey in Oman with First Cert
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

export default OmanSoc2;
