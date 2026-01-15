import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/middle-east/bahrain/soc2-img.webp";
import benefitssoc2 from "../../../assets/img/country/middle-east/bahrain/soc2-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function BahrainSoc2() {
  const benefits = [
    "Demonstrated control over cybersecurity and operational risks",
    "Stronger trust from clients, investors, and strategic partners",
    "Reduced effort responding to recurring security assessments",
    "Lower likelihood of data breaches and service interruptions",
    "Improved competitiveness in regional and international markets",
    "Clear accountability and ownership of security responsibilities",
  ];

  const industryData = [
    {
      icon: "bi-code-slash",
      title: "SaaS vendors and software product companies",
    },
    {
      icon: "bi-cloud-check",
      title: "Cloud service providers and hosting environments",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "IT service firms and managed service providers",
    },
    {
      icon: "bi-file-earmark-medical",
      title:
        "Fintech platforms, digital payment providers, and online finance solutions",
    },
    {
      icon: "bi-hdd-network",
      title: "Data analytics, AI-driven platforms, and technology startups",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and regional service delivery centers",
    },
    {
      icon: "bi-cart-check",
      title: "Subscription-based and platform-centric digital businesses",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scoping & Criteria Alignment",
      description:
        "Define systems, services, and applicable Trust Services Criteria",
    },
    {
      number: "2",
      title: "Risk Evaluation",
      description: "Identify security, availability, and data protection gaps",
    },
    {
      number: "3",
      title: "Control Implementation",
      description: "Deploy technical, administrative, and procedural controls",
    },
    {
      number: "4",
      title: "Documentation & Evidence Preparation",
      description: "Develop policies and organize audit-ready artifacts",
    },
    {
      number: "5",
      title: "Readiness Assessment",
      description: "Validate control design and operational effectiveness",
    },
    {
      number: "6",
      title: "Audit Coordination",
      description:
        "Support SOC 2 Type 1 or Type 2 audits with licensed audit firms",
    },
    {
      number: "7",
      title: "Continuous Advisory",
      description:
        "Assist with remediation, monitoring, and future reporting cycles",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in Bahrain | Enterprise-Grade SOC 2 Compliance &
          Digital Assurance Services – First Cert
        </title>
        <meta
          name="description"
          content="Preparing for SOC 2 Certification in Bahrain? First Cert delivers end-to-end SOC 2 advisory services, including security risk evaluation, Trust Services Criteria alignment, control implementation guidance, evidence preparation, and audit coordination to support strong digital trust and global compliance expectations."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in Bahrain, SOC 2 consultants Bahrain, SOC 2 audit Bahrain, SOC 2 Type 1 Bahrain, SOC 2 Type 2 Bahrain, SOC 2 compliance Bahrain, SOC 2 certification cost Bahrain, SOC 2 implementation Bahrain, SOC 2 documentation Bahrain, SOC 2 audit readiness Bahrain, SOC 2 cybersecurity Bahrain, SOC 2 for SaaS Bahrain, SOC 2 for IT companies Bahrain, First Cert SOC 2 Bahrain, SOC 2 trust services Bahrain"
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
          <h1 className="main-title">SOC 2 Certification in Bahrain</h1>
          <p className="small-desc">Building Confidence in Digital Trust</p>
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
                alt="SOC 2 Certification in Bahrain"
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
                <b>SOC 2 Certification in Bahrain</b> helps organizations prove
                that their technology environments, cloud platforms, and digital
                service operations are governed by effective security,
                availability, and data protection controls. As Bahrain continues
                to position itself as a regional hub for fintech, cloud
                services, managed IT, and digital outsourcing, customers and
                regulators increasingly demand independent assurance over how
                technology risks are controlled.
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
                <b>First Cert</b> collaborates with organizations throughout
                Bahrain to design SOC 2-aligned control programs that integrate
                naturally with business operations. Our approach prioritizes
                scalability, audit clarity, and measurable risk reduction rather
                than compliance complexity.
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
            What SOC 2 Certification in Bahrain Covers
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 2 Certification in Bahrain</b> is an independent assurance
            assessment conducted against the AICPA Trust Services Criteria. It
            evaluates whether controls are appropriately designed and operating
            effectively to protect systems, data, and service commitments made
            to customers.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A SOC 2 engagement typically reviews controls related to:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>
                Prevention of unauthorized access, cyber threats, and system
                misuse
              </h5>
            </div>

            <div className="vapt-card">
              <h5>
                System uptime, resilience planning, and incident response
                capabilities
              </h5>
            </div>

            <div className="vapt-card">
              <h5>Accuracy and reliability of system processing activities</h5>
            </div>

            <div className="vapt-card">
              <h5>
                Protection of confidential business and client information
              </h5>
            </div>

            <div className="vapt-card">
              <h5>
                Secure collection, use, retention, and disposal of personal data
              </h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            SOC 2 assurance confirms that digital operations are supported by
            structured governance and disciplined risk management practices.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations in Bahrain That Commonly Seek SOC 2
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 2 Certification in Bahrain is well suited for organizations
                delivering technology-driven or outsourced services, including:
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
                        <a href="iso-9001-certification-in-bahrain">
                          ISO 9001 Certification in Bahrain
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-bahrain">
                          ISO 27001 Certification in Bahrain
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-bahrain">
                          CMMI Certification in Bahrain
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-bahrain">
                          HIPAA Certification in Bahrain
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-bahrain">
                          VAPT Certification in Bahrain
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-bahrain">
                          GDPR Certification in Bahrain
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-bahrain">
                          SOC 1 Certification in Bahrain
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-bahrain">
                          SOC 2 Certification in Bahrain
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              For many enterprise customers and global partners, a SOC 2 report
              is a baseline requirement during vendor due diligence and
              information security reviews.
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
                Business Value of SOC 2 Certification in Bahrain
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that obtain SOC 2 Certification in Bahrain gain
                meaningful operational and commercial advantages, such as:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc2}
                alt="SOC 2 Benefits in Bahrain"
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
                SOC 2 transforms information security into a strategic business
                enabler rather than a reactive obligation.
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
                First Cert's SOC 2 Consulting Approach in Bahrain
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
                First Cert applies a structured, audit-ready SOC 2 methodology
                tailored to Bahrain-based organizations:
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
          SOC 2 Certification Cost in Bahrain
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
                  The cost of SOC 2 Certification in Bahrain depends on several
                  variables, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Organizational size and operational complexity
                  </li>
                  <li className="check">
                    Number and nature of in-scope systems and applications
                  </li>
                  <li className="check">
                    Volume and sensitivity of customer or regulated data
                  </li>
                  <li className="check">Selected Trust Services Criteria</li>
                  <li className="check">
                    Type of report and duration of the observation period
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins every engagement with a detailed SOC 2
                  readiness review to provide a transparent, customized cost
                  estimate aligned with business priorities.
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
                  Get SOC 2 Certified in Bahrain with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted SOC 2 consulting partner in Bahrain,
                  supporting organizations from early planning through audit
                  completion and ongoing compliance management. Our consultants
                  focus on practical controls, clear documentation, and
                  measurable improvements that align with real-world operational
                  needs.
                </div>

                <div className="title small-title">
                  By working with First Cert, organizations strengthen digital
                  trust, meet international client expectations, and scale
                  securely in competitive markets.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Begin your SOC 2 Certification journey in Bahrain with First
                  Cert and demonstrate your commitment to security, reliability,
                  and globally recognized trust standards.
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

export default BahrainSoc2;
