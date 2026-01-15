import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/asia/thailand/soc2-img.webp";
import benefitssoc2 from "../../../assets/img/country/asia/thailand/soc2-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function ThailandSoc2() {
  const benefits = [
    "Demonstrated control over cybersecurity and operational risks",
    "Increased confidence from customers, partners, and regulators",
    "Faster completion of security questionnaires and due diligence",
    "Reduced exposure to data breaches and service disruptions",
    "Stronger positioning in global and enterprise markets",
    "Improved internal accountability and process transparency",
  ];

  const industryData = [
    {
      icon: "bi-code-slash",
      title: "Software developers and SaaS solution providers",
    },
    {
      icon: "bi-cloud-check",
      title: "Cloud infrastructure and hosting service companies",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "IT consulting firms and managed service providers",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Fintech platforms, digital wallets, and payment services",
    },
    {
      icon: "bi-hdd-network",
      title: "Data analytics, AI, and platform-based technology firms",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and regional delivery centers",
    },
    {
      icon: "bi-cart-check",
      title: "E-commerce platforms and online service providers",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scoping & Criteria Selection",
      description: "Identify in-scope systems, services, and Trust Services Criteria.",
    },
    {
      number: "2",
      title: "Risk & Gap Assessment",
      description: "Analyze current controls and prioritize remediation efforts.",
    },
    {
      number: "3",
      title: "Control Design & Implementation",
      description: "Establish technical, administrative, and operational safeguards.",
    },
    {
      number: "4",
      title: "Policy & Evidence Preparation",
      description: "Develop documentation and audit-ready evidence repositories.",
    },
    {
      number: "5",
      title: "Readiness Validation",
      description: "Perform internal testing to confirm control effectiveness.",
    },
    {
      number: "6",
      title: "Audit Support",
      description: "Coordinate SOC 2 Type 1 or Type 2 audits with licensed auditors.",
    },
    {
      number: "7",
      title: "Ongoing Advisory",
      description: "Support continuous compliance and future reporting cycles.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in Thailand | Advanced SOC 2 Compliance & Digital Trust – First Cert
        </title>
        <meta
          name="description"
          content="Planning to secure SOC 2 Certification in Thailand? First Cert delivers end-to-end SOC 2 consulting services covering risk assessment, control design, evidence management, and audit facilitation to help organizations meet global security and trust expectations."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in Thailand, SOC 2 consultants Thailand, SOC 2 audit Thailand, SOC 2 Type 1 Thailand, SOC 2 Type 2 Thailand, SOC 2 compliance Thailand, SOC 2 certification cost Thailand, SOC 2 implementation Thailand, SOC 2 documentation Thailand, SOC 2 audit readiness Thailand, SOC 2 cybersecurity Thailand, SOC 2 for SaaS Thailand, SOC 2 for IT companies Thailand, First Cert SOC 2 Thailand, SOC 2 trust services Thailand"
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
          <h1 className="main-title">SOC 2 Certification in Thailand</h1>
          <p className="small-desc">
            Building Assurance for Secure Digital Operations
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
                alt="SOC 2 Certification in Thailand"
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
                <b>SOC 2 Certification in Thailand</b> enables organizations to demonstrate that their systems, platforms, and service operations are governed by strong security, availability, and data protection controls. As Thailand rapidly grows as a hub for SaaS development, fintech innovation, cloud services, and IT outsourcing, customers increasingly expect independent validation of how digital risks are managed.
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
                <b>First Cert</b> works closely with organizations across Thailand to establish SOC 2-aligned control frameworks that are practical, scalable, and aligned with business objectives. Our focus is on embedding security and trust into everyday operations, not creating unnecessary complexity.
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
            Scope of SOC 2 Certification in Thailand
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 2 Certification in Thailand</b> is an independent assurance report based on the AICPA Trust Services Criteria. It assesses how effectively an organization designs and operates controls to safeguard systems, data, and service delivery processes.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A typical SOC 2 engagement evaluates controls related to:
          </p>

          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Protection of systems from unauthorized access and cyber threats</h5>
            </div>

            <div class="vapt-card">
              <h5>Service availability, resilience, and disaster recovery planning</h5>
            </div>

            <div class="vapt-card">
              <h5>Accuracy, completeness, and reliability of system processing</h5>
            </div>

            <div class="vapt-card">
              <h5>Safeguarding of confidential business information</h5>
            </div>

            <div class="vapt-card">
              <h5>Proper handling and protection of personal and customer data</h5>
            </div>
          </div>
          
          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            SOC 2 compliance reflects strong governance, disciplined risk management, and operational reliability.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations in Thailand That Commonly Pursue SOC 2
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 2 Certification in Thailand is highly relevant for organizations delivering technology-driven or outsourced services, such as:
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
                        <a href="iso-9001-certification-in-thailand">
                          ISO 9001 Certification in Thailand
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-thailand">
                          ISO 27001 Certification in Thailand
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-thailand">
                          CMMI Certification in Thailand
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-thailand">
                          HIPAA Certification in Thailand
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-thailand">
                          VAPT Certification in Thailand
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-thailand">
                          GDPR Certification in Thailand
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-thailand">
                          SOC 1 Certification in Thailand
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-thailand">
                          SOC 2 Certification in Thailand
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-center section-sub mb-5">
              For many international and enterprise clients, a SOC 2 report is a key requirement during vendor onboarding and security evaluations.
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
                Strategic Benefits of SOC 2 Certification in Thailand
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving SOC 2 Certification in Thailand gain several long-term advantages:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc2}
                alt="SOC 2 Benefits in Thailand"
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
                SOC 2 certification strengthens digital resilience while reinforcing brand trust.
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
                First Cert's SOC 2 Implementation Methodology in Thailand
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
                First Cert follows a structured, results-oriented SOC 2 delivery model:
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
          SOC 2 Certification Cost in Thailand
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
                  The cost of SOC 2 Certification in Thailand varies depending on factors such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Organizational size and operational complexity
                  </li>
                  <li className="check">
                    Number and type of systems included in scope
                  </li>
                  <li className="check">
                    Sensitivity of customer and business data
                  </li>
                  <li className="check">
                    Trust Services Criteria selected
                  </li>
                  <li className="check">
                    Audit type and length of the observation period
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with an initial assessment to provide a clear, tailored, and transparent SOC 2 cost estimate.
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
                  Achieve SOC 2 Certification in Thailand with First Cert
                </div>
                
                <div className="title small-title">
                  First Cert is a trusted SOC 2 consulting partner in Thailand, supporting organizations from early planning through audit completion and ongoing compliance management. Our consultants emphasize practical controls, clear documentation, and measurable risk reduction aligned with real business needs.
                </div>
                
                <div className="title small-title">
                  By working with First Cert, organizations strengthen digital trust, meet international client expectations, and confidently scale their operations in competitive markets.
                </div>
                
                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your SOC 2 Certification journey in Thailand with First Cert and demonstrate your commitment to security, reliability, and globally recognized trust standards.
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

export default ThailandSoc2;