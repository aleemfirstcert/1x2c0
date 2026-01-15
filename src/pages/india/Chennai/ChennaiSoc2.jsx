import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/asia/maldives/soc2-img.webp";
import benefitssoc2 from "../../../assets/img/country/asia/maldives/soc2-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function ChennaiSoc2() {
  const benefits = [
    "Independent confirmation of security and privacy practices",
    "Higher trust from customers, partners, and investors",
    "Faster vendor approval and reduced due diligence",
    "Lower risk of cyber breaches and service interruptions",
    "Stronger positioning in global technology markets",
  ];

  const industryData = [
    {
      icon: "bi-code-slash",
      title: "SaaS providers and software development firms",
    },
    {
      icon: "bi-cloud-check",
      title: "Cloud hosting and infrastructure companies",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Managed IT and cybersecurity service providers",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Fintech and digital payment platforms",
    },
    {
      icon: "bi-hdd-network",
      title: "AI, analytics, and data processing companies",
    },
    {
      icon: "bi-headset",
      title: "IT-enabled service and outsourcing firms",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Definition",
      description:
        "Define in-scope systems, services, and Trust Services Criteria",
    },
    {
      number: "2",
      title: "Risk Assessment",
      description: "Assess cybersecurity, availability, and privacy risks",
    },
    {
      number: "3",
      title: "Control Design",
      description: "Design and implement technical and procedural controls",
    },
    {
      number: "4",
      title: "Documentation",
      description:
        "Develop policies, procedures, and audit-ready documentation",
    },
    {
      number: "5",
      title: "Readiness Testing",
      description: "Conduct readiness testing to validate control performance",
    },
    {
      number: "6",
      title: "Audit Coordination",
      description: "Coordinate SOC 2 Type 1 or Type 2 audits",
    },
    {
      number: "7",
      title: "Continuous Support",
      description:
        "Provide post-audit remediation and continuous compliance support",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in Chennai | Cyber Security & Data Trust Assurance
          – First Cert
        </title>
        <meta
          name="description"
          content="Looking for SOC 2 Certification in Chennai? First Cert helps businesses secure systems, meet Trust Services Criteria, and pass audits to prove strong data protection and service reliability."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in Chennai, SOC 2 consultants Chennai, SOC 2 audit Chennai, SOC 2 Type 1 Chennai, SOC 2 Type 2 Chennai, SOC 2 compliance Chennai, SOC 2 certification cost Chennai, SOC 2 implementation Chennai, SOC 2 documentation Chennai, SOC 2 audit readiness Chennai, SOC 2 cybersecurity Chennai, SOC 2 for SaaS Chennai, SOC 2 for IT companies Chennai, First Cert SOC 2 Chennai, SOC 2 trust services Chennai"
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
          <h1 className="main-title">SOC 2 Certification in Chennai</h1>
          <p className="small-desc">Securing Digital Operations</p>
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
                alt="SOC 2 Certification in Chennai"
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
                <b>SOC 2 Certification in Chennai</b> enables technology-driven
                organizations to show that their software platforms, cloud
                environments, and digital services are protected by strong
                security, privacy, and operational controls. Chennai is home to
                a fast-growing ecosystem of SaaS companies, fintech firms, IT
                service providers, and data-driven enterprises that serve global
                clients who demand verified cybersecurity assurance.
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
                <b>First Cert</b> supports Chennai-based businesses by
                integrating SOC 2 controls into real operational workflows,
                ensuring compliance that is effective, measurable, and
                sustainable.
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
            What SOC 2 Certification in Chennai Covers
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 2 Certification in Chennai</b> is built on the AICPA Trust
            Services Criteria, which measures how well an organization protects
            information, maintains system performance, and safeguards customer
            data. A SOC 2 audit evaluates:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Defense against unauthorized access and cyber threats</h5>
            </div>

            <div className="vapt-card">
              <h5>
                System uptime, availability, and incident response processes
              </h5>
            </div>

            <div className="vapt-card">
              <h5>Accuracy and integrity of data processing</h5>
            </div>

            <div className="vapt-card">
              <h5>Secure handling of confidential and sensitive information</h5>
            </div>

            <div className="vapt-card">
              <h5>Compliance with privacy and data protection requirements</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            The resulting SOC 2 report provides independent proof that security
            and trust are embedded in business operations.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Needs SOC 2 Certification in Chennai
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 2 is especially important for organizations delivering
                technology-enabled services, including:
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
                        <a href="iso-9001-certification-in-chennai">
                          ISO 9001 Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-chennai">
                          ISO 27001 Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-chennai">
                          CMMI Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-chennai">
                          HIPAA Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-chennai">
                          VAPT Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-chennai">
                          GDPR Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-chennai">
                          SOC 1 Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-chennai">
                          SOC 2 Certification in Chennai
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              Many international clients make SOC 2 certification a mandatory
              requirement before signing contracts.
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
                Business Benefits of SOC 2 Certification in Chennai
              </h1>
              <p className="text-center section-sub mb-5">
                Achieving SOC 2 Certification in Chennai offers:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc2}
                alt="SOC 2 Benefits in Chennai"
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
                SOC 2 helps Chennai companies convert cybersecurity into a
                competitive business advantage.
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
                First Cert's SOC 2 Consulting Approach in Chennai
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
                First Cert delivers SOC 2 services through a structured and
                results-focused framework:
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
          SOC 2 Certification Cost in Chennai
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
                  The cost of SOC 2 Certification in Chennai varies based on:
                </div>

                <ul className="features">
                  <li className="check">
                    Business size and operational complexity
                  </li>
                  <li className="check">
                    Number of applications, cloud platforms, and integrations
                  </li>
                  <li className="check">
                    Type and sensitivity of customer data handled
                  </li>
                  <li className="check">Selected Trust Services Criteria</li>
                  <li className="check">
                    Audit type (Type 1 or Type 2) and review duration
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert performs a detailed readiness assessment to provide
                  a clear and customized cost estimate.
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
                  Get SOC 2 Certified in Chennai with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted SOC 2 consulting partner in Chennai,
                  supporting organizations from initial planning through audit
                  completion and ongoing compliance. Our experts focus on
                  practical control implementation, strong documentation, and
                  real risk reduction.
                </div>

                <div className="title small-title">
                  By working with First Cert, Chennai businesses can strengthen
                  digital trust, meet international security expectations, and
                  confidently expand into global markets.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your SOC 2 Certification journey in Chennai with First
                  Cert and demonstrate your commitment to secure, reliable, and
                  globally trusted digital services.
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

export default ChennaiSoc2;
