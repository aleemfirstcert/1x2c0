import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/africa/nigeria/soc2-img.webp";
import benefitssoc2 from "../../../assets/img/country/africa/nigeria/soc2-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function NigeriaSoc2() {
  const benefits = [
    "Independent validation of security and control effectiveness",
    "Increased confidence from customers, investors, and partners",
    "Reduced reliance on repetitive security questionnaires",
    "Lower risk of data breaches and service interruptions",
    "Stronger credibility in global and regional markets",
    "Clear ownership and governance of security responsibilities",
  ];

  const industryData = [
    {
      icon: "bi-code-slash",
      title: "SaaS providers and software development firms",
    },
    {
      icon: "bi-cloud-check",
      title: "Cloud infrastructure and hosting companies",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Managed IT services and cybersecurity providers",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Fintech platforms and digital payment processors",
    },
    {
      icon: "bi-hdd-network",
      title: "Data analytics, AI solutions, and tech startups",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and shared service technology centers",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scoping & Planning",
      description:
        "Define in-scope systems, services, and Trust Services Criteria",
    },
    {
      number: "2",
      title: "Risk & Gap Analysis",
      description:
        "Identify security, availability, and data protection weaknesses",
    },
    {
      number: "3",
      title: "Control Implementation",
      description:
        "Support deployment of technical and organizational safeguards",
    },
    {
      number: "4",
      title: "Documentation & Evidence",
      description: "Develop policies, procedures, and audit-ready evidence",
    },
    {
      number: "5",
      title: "Readiness Review",
      description: "Validate control design and operating effectiveness",
    },
    {
      number: "6",
      title: "Audit Coordination",
      description:
        "Support SOC 2 Type 1 or Type 2 audits with independent auditors",
    },
    {
      number: "7",
      title: "Continuous Advisory",
      description: "Assist with remediation and ongoing compliance monitoring",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in Nigeria | Advanced Cybersecurity & Trust
          Assurance Services – First Cert
        </title>
        <meta
          name="description"
          content="Planning to achieve SOC 2 Certification in Nigeria? First Cert delivers end-to-end SOC 2 consulting and audit-preparation services, including risk evaluation, Trust Services Criteria mapping, control implementation support, evidence management, and complete audit coordination to help organizations meet international security and trust requirements."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in Nigeria, SOC 2 consultants Nigeria, SOC 2 audit Nigeria, SOC 2 Type 1 Nigeria, SOC 2 Type 2 Nigeria, SOC 2 compliance Nigeria, SOC 2 certification cost Nigeria, SOC 2 implementation Nigeria, SOC 2 documentation Nigeria, SOC 2 audit readiness Nigeria, SOC 2 cybersecurity Nigeria, SOC 2 for SaaS Nigeria, SOC 2 for IT companies Nigeria, First Cert SOC 2 Nigeria, SOC 2 trust services Nigeria"
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
          <h1 className="main-title">SOC 2 Certification in Nigeria</h1>
          <p className="small-desc">
            Building Confidence in Digital Operations
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
                alt="SOC 2 Certification in Nigeria"
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
                <b>SOC 2 Certification in Nigeria</b> enables organizations to
                prove that their technology platforms and digital services are
                governed by strong security, availability, and data protection
                controls. As Nigerian businesses continue to expand across
                fintech, SaaS, cloud services, IT outsourcing, and data-driven
                industries, global clients increasingly expect independent
                assurance of system reliability and information security.
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
                <b>First Cert</b> partners with organizations throughout Nigeria
                to design SOC 2-aligned control environments that reflect real
                operational processes. Our focus is on sustainable security
                governance, accountability, and audit readiness—ensuring
                compliance supports growth rather than slowing it down.
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
            What SOC 2 Certification in Nigeria Covers
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 2 Certification in Nigeria</b> is conducted under the AICPA
            Trust Services Criteria and evaluates how effectively an
            organization safeguards systems and information. The assessment
            reviews whether controls are properly designed and consistently
            applied to protect service delivery and customer data.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A SOC 2 examination typically addresses:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Safeguards against unauthorized access and cyber threats</h5>
            </div>

            <div className="vapt-card">
              <h5>
                System availability, resilience, and incident recovery planning
              </h5>
            </div>

            <div className="vapt-card">
              <h5>Integrity and accuracy of system processing</h5>
            </div>

            <div className="vapt-card">
              <h5>Confidential handling of sensitive business information</h5>
            </div>

            <div className="vapt-card">
              <h5>Protection of personal and regulated data</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A completed SOC 2 report demonstrates that security and trust are
            embedded into everyday technology operations.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations in Nigeria That Commonly Pursue SOC 2
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 2 Certification in Nigeria is particularly relevant for
                companies delivering technology-enabled or cloud-based services,
                including:
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
                        <a href="iso-9001-certification-in-nigeria">
                          ISO 9001 Certification in Nigeria
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-nigeria">
                          ISO 27001 Certification in Nigeria
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-nigeria">
                          CMMI Certification in Nigeria
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-nigeria">
                          HIPAA Certification in Nigeria
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-nigeria">
                          VAPT Certification in Nigeria
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-nigeria">
                          GDPR Certification in Nigeria
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-nigeria">
                          SOC 1 Certification in Nigeria
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-nigeria">
                          SOC 2 Certification in Nigeria
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              For many international enterprises, SOC 2 is a mandatory
              requirement during vendor onboarding and periodic security
              reviews.
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
                Strategic Benefits of SOC 2 Certification in Nigeria
              </h1>
              <p className="text-center section-sub mb-5">
                Achieving SOC 2 Certification in Nigeria offers organizations
                both compliance assurance and commercial value, such as:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc2}
                alt="SOC 2 Benefits in Nigeria"
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
                SOC 2 transforms cybersecurity into a strategic differentiator
                rather than a reactive obligation.
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
                First Cert's SOC 2 Implementation Methodology in Nigeria
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
                First Cert applies a structured, audit-aligned SOC 2 consulting
                framework tailored to Nigerian organizations:
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
          SOC 2 Certification Cost in Nigeria
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
                  The cost of SOC 2 Certification in Nigeria depends on multiple
                  factors, including:
                </div>

                <ul className="features">
                  <li className="check">Size and complexity of operations</li>
                  <li className="check">
                    Number of applications, systems, and cloud environments
                  </li>
                  <li className="check">
                    Sensitivity and volume of customer data processed
                  </li>
                  <li className="check">Selected Trust Services Criteria</li>
                  <li className="check">
                    Report type (Type 1 or Type 2) and audit duration
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a SOC 2 readiness assessment to provide
                  a clear, tailored cost estimate aligned with business goals.
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
                  Get SOC 2 Certified in Nigeria with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted SOC 2 consulting partner in Nigeria,
                  supporting organizations from initial planning through audit
                  completion and ongoing compliance management. Our consultants
                  emphasize practical security controls, audit-ready
                  documentation, and measurable risk reduction aligned with real
                  operational needs.
                </div>

                <div className="title small-title">
                  By working with First Cert, organizations in Nigeria can
                  strengthen digital trust, meet international client
                  expectations, and scale securely in competitive global
                  markets.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your SOC 2 Certification journey in Nigeria with First
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

export default NigeriaSoc2;
