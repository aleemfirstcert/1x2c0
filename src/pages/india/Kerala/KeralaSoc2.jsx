import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/india/kerala/soc2-img.webp";
import benefitssoc2 from "../../../assets/img/country/india/kerala/soc2-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function KeralaSoc2() {
  const benefits = [
    "Verified proof of cybersecurity and data protection",
    "Stronger trust with customers and business partners",
    "Faster completion of client due diligence reviews",
    "Improved internal governance and risk management",
    "Increased competitiveness in global markets",
  ];

  const industryData = [
    {
      icon: "bi-code-slash",
      title: "SaaS and software product companies",
    },
    {
      icon: "bi-cloud-check",
      title: "Cloud infrastructure and hosting providers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Managed IT and security service firms",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Fintech, ERP, and billing platforms",
    },
    {
      icon: "bi-hdd-network",
      title: "Data analytics and AI solution providers",
    },
    {
      icon: "bi-headset",
      title: "Outsourced IT support and digital service companies",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Definition",
      description: "Define in-scope applications, systems, and data flows",
    },
    {
      number: "2",
      title: "Risk Assessment",
      description: "Identify security and compliance risks",
    },
    {
      number: "3",
      title: "Control Implementation",
      description: "Implement controls for security, availability, and privacy",
    },
    {
      number: "4",
      title: "Documentation",
      description: "Create policies, procedures, and audit evidence",
    },
    {
      number: "5",
      title: "Readiness Testing",
      description: "Perform readiness testing before the audit",
    },
    {
      number: "6",
      title: "Audit Support",
      description: "Support SOC 2 Type 1 or Type 2 examinations",
    },
    {
      number: "7",
      title: "Continuous Improvement",
      description: "Assist with remediation and continuous improvement",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in Kerala | Secure Systems & Compliance Assurance
          – First Cert
        </title>
        <meta
          name="description"
          content="Get SOC 2 Certification in Kerala with First Cert. We deliver security controls, audit readiness, and compliance programs to help protect data and digital services."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in Kerala, SOC 2 consultants Kerala, SOC 2 audit Kerala, SOC 2 Type 1 Kerala, SOC 2 Type 2 Kerala, SOC 2 compliance Kerala, SOC 2 certification cost Kerala, SOC 2 implementation Kerala, SOC 2 documentation Kerala, SOC 2 audit readiness Kerala, SOC 2 cybersecurity Kerala, SOC 2 for SaaS Kerala, SOC 2 for IT companies Kerala, First Cert SOC 2 Kerala, SOC 2 trust services Kerala"
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
          <h1 className="main-title">SOC 2 Certification in Kerala</h1>
          <p className="small-desc">Building Digital Confidence</p>
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
                alt="SOC 2 Certification in Kerala"
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
                <b>SOC 2 Certification in Kerala</b> enables technology-driven
                organizations to demonstrate that their platforms, applications,
                and data environments are protected by strong governance and
                security practices. With Kerala growing as a center for SaaS
                development, cloud services, fintech solutions, and IT
                outsourcing, global customers demand reliable proof of data
                protection and system reliability.
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
                <b>First Cert</b> supports Kerala businesses by implementing SOC
                2 controls that are practical, scalable, and aligned with real
                operational needs.
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
            What SOC 2 Certification in Kerala Evaluates
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 2 Certification in Kerala</b> measures how well an
            organization safeguards systems and information using the AICPA
            Trust Services Criteria. Core focus areas include:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>
                Protection against cyber threats and unauthorized system access
              </h5>
            </div>

            <div className="vapt-card">
              <h5>Stability and availability of digital platforms</h5>
            </div>

            <div className="vapt-card">
              <h5>Accuracy and reliability of data processing</h5>
            </div>

            <div className="vapt-card">
              <h5>Security of confidential and customer information</h5>
            </div>

            <div className="vapt-card">
              <h5>Alignment with privacy and regulatory obligations</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            The SOC 2 report provides independent evidence that security and
            compliance practices are operating effectively.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Should Obtain SOC 2 Certification in Kerala
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 2 Certification in Kerala is essential for organizations
                delivering technology-based services:
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
                        <a href="iso-9001-certification-in-kerala">
                          ISO 9001 Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-kerala">
                          ISO 27001 Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-kerala">
                          CMMI Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-kerala">
                          HIPAA Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-kerala">
                          VAPT Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-kerala">
                          GDPR Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-kerala">
                          SOC 1 Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-kerala">
                          SOC 2 Certification in Kerala
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              A SOC 2 report is often a mandatory requirement for vendor
              approval by international clients.
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
                Business Benefits of SOC 2 Certification in Kerala
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve SOC 2 Certification in Kerala gain:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc2}
                alt="SOC 2 Benefits in Kerala"
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
                SOC 2 transforms Kerala businesses into credible,
                security-focused service providers.
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
                First Cert's SOC 2 Implementation Model in Kerala
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
                First Cert follows a structured SOC 2 approach designed for
                sustainable compliance:
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
          SOC 2 Certification Cost in Kerala
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
                  The cost of SOC 2 Certification in Kerala depends on:
                </div>

                <ul className="features">
                  <li className="check">
                    Size and complexity of the organization
                  </li>
                  <li className="check">
                    IT infrastructure and cloud environment
                  </li>
                  <li className="check">
                    Volume and sensitivity of data handled
                  </li>
                  <li className="check">
                    Requirement for Type 1 or Type 2 reporting
                  </li>
                  <li className="check">
                    Scope of Trust Services Criteria selected
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts a readiness assessment to provide a clear
                  and customized cost plan.
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
                  Get SOC 2 Certified in Kerala with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted SOC 2 consulting partner in Kerala,
                  guiding organizations from preparation through audit
                  completion and long-term compliance. Our team ensures that
                  security controls are embedded into everyday operations,
                  creating both audit success and lasting protection.
                </div>

                <div className="title small-title-p">
                  By working with First Cert, Kerala businesses can strengthen
                  digital trust, meet international security expectations, and
                  confidently expand into global markets.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your SOC 2 Certification in Kerala with First Cert and
                  demonstrate your commitment to secure, compliant, and globally
                  trusted digital services.
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

export default KeralaSoc2;
