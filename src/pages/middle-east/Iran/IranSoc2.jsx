import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/middle-east/iran/soc2-img.webp";
import benefitssoc2 from "../../../assets/img/country/middle-east/iran/soc2-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function IranSoc2() {
  const benefits = [
    "Independent assurance over cybersecurity and operational safeguards",
    "Increased confidence from customers, investors, and stakeholders",
    "Reduced effort responding to repeated security questionnaires",
    "Lower risk of data breaches, outages, and compliance failures",
    "Stronger credibility in regional and global markets",
    "Clear accountability for security and risk ownership",
  ];

  const industryData = [
    {
      icon: "bi-code-slash",
      title: "SaaS vendors and software product companies",
    },
    {
      icon: "bi-cloud-check",
      title: "Cloud service providers and hosting platforms",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Managed IT, cybersecurity, and MSP organizations",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Fintech firms and digital payment solution providers",
    },
    {
      icon: "bi-hdd-network",
      title: "Data analytics companies, AI platforms, and tech startups",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and shared service centers",
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
        "Define in-scope systems, services, and applicable Trust Services Criteria",
    },
    {
      number: "2",
      title: "Risk & Gap Assessment",
      description:
        "Identify control gaps across security, availability, and data protection domains",
    },
    {
      number: "3",
      title: "Control Enablement",
      description:
        "Support implementation of technical, administrative, and procedural safeguards",
    },
    {
      number: "4",
      title: "Documentation & Evidence Preparation",
      description: "Develop policies, procedures, and audit-ready artifacts",
    },
    {
      number: "5",
      title: "Readiness Review",
      description: "Validate control design and operating effectiveness",
    },
    {
      number: "6",
      title: "Audit Support",
      description:
        "Coordinate SOC 2 Type 1 or Type 2 examinations with licensed audit firms",
    },
    {
      number: "7",
      title: "Ongoing Advisory",
      description:
        "Assist with remediation, monitoring, and future reporting cycles",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in Iran | Comprehensive SOC 2 Compliance & Digital
          Trust Services – First Cert
        </title>
        <meta
          name="description"
          content="Preparing for SOC 2 Certification in Iran? First Cert delivers full-spectrum SOC 2 consulting, covering technology risk assessment, Trust Services Criteria alignment, control implementation guidance, evidence organization, and end-to-end audit support to help organizations meet international trust and security expectations."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in Iran, SOC 2 consultants Iran, SOC 2 audit Iran, SOC 2 Type 1 Iran, SOC 2 Type 2 Iran, SOC 2 compliance Iran, SOC 2 certification cost Iran, SOC 2 implementation Iran, SOC 2 documentation Iran, SOC 2 audit readiness Iran, SOC 2 cybersecurity Iran, SOC 2 for SaaS Iran, SOC 2 for IT companies Iran, First Cert SOC 2 Iran, SOC 2 trust services Iran"
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
          <h1 className="main-title">SOC 2 Certification in Iran</h1>
          <p className="small-desc">
            Strengthening Digital Confidence and Risk Control
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
                alt="SOC 2 Certification in Iran"
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
                <b>SOC 2 Certification in Iran</b> enables organizations to
                demonstrate that their digital platforms, cloud systems, and
                technology-driven services operate under strong security,
                availability, and data protection controls. As Iran's digital
                ecosystem continues to grow across software development,
                fintech, cloud services, IT outsourcing, and online platforms,
                customers and global partners increasingly demand independent
                assurance over how digital risks are managed.
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
                Iran to build SOC 2 programs that integrate seamlessly into
                existing operations. Our approach emphasizes scalable controls,
                audit readiness, and meaningful risk reduction rather than
                checkbox-based compliance.
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
            Overview of SOC 2 Certification in Iran
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 2 Certification in Iran</b> is an independent assurance
            examination conducted in accordance with the AICPA Trust Services
            Criteria. It evaluates whether an organization's internal controls
            are appropriately designed and effectively operating to protect
            systems, data, and customer commitments.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A SOC 2 assessment commonly reviews controls related to:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Defense against unauthorized access and cyber threats</h5>
            </div>

            <div className="vapt-card">
              <h5>
                System availability, resilience planning, and incident response
              </h5>
            </div>

            <div className="vapt-card">
              <h5>Integrity and reliability of system processing activities</h5>
            </div>

            <div className="vapt-card">
              <h5>
                Protection of confidential business and customer information
              </h5>
            </div>

            <div className="vapt-card">
              <h5>
                Secure handling of personal and sensitive data across its
                lifecycle
              </h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            SOC 2 reporting confirms that technology operations are governed by
            disciplined security management and accountable governance
            practices.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations in Iran That Commonly Pursue SOC 2
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 2 Certification in Iran is particularly relevant for
                organizations delivering technology-enabled or outsourced
                services, including:
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
              For many enterprise customers and international partners, a SOC 2
              report is a baseline requirement during vendor onboarding and
              ongoing security reviews.
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
                Business Benefits of SOC 2 Certification in Iran
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that obtain SOC 2 Certification in Iran realize
                significant strategic and operational value, including:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc2}
                alt="SOC 2 Benefits in Iran"
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
                SOC 2 positions trust, security, and transparency as competitive
                advantages.
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
                First Cert's SOC 2 Consulting Methodology in Iran
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
                First Cert applies a structured and audit-ready SOC 2 approach
                tailored to Iranian organizations:
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
          SOC 2 Certification Cost in Iran
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
                  The cost of SOC 2 Certification in Iran varies based on
                  factors such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and operational complexity
                  </li>
                  <li className="check">
                    Number of systems, applications, and cloud environments in
                    scope
                  </li>
                  <li className="check">
                    Sensitivity and volume of customer or regulated data
                  </li>
                  <li className="check">Selected Trust Services Criteria</li>
                  <li className="check">
                    Report type (Type 1 or Type 2) and observation period
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins each engagement with a detailed SOC 2
                  readiness assessment to deliver a transparent, customized cost
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
                  Get SOC 2 Certified in Iran with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted SOC 2 consulting partner in Iran,
                  supporting organizations from early-stage planning through
                  audit completion and continuous compliance management. Our
                  consultants focus on practical controls, clear documentation,
                  and measurable risk reduction aligned with real operational
                  needs.
                </div>

                <div className="title small-title">
                  By partnering with First Cert, organizations strengthen
                  digital trust, meet global client expectations, and scale
                  securely in competitive markets.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your SOC 2 Certification journey in Iran with First Cert
                  and demonstrate your commitment to security, reliability, and
                  internationally recognized trust standards.
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

export default IranSoc2;
