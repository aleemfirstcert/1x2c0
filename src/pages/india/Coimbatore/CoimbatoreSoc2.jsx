import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/india/coimbatore/soc2-img.webp";
import benefitssoc2 from "../../../assets/img/country/india/coimbatore/soc2-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function CoimbatoreSoc2() {
  const benefits = [
    "Verified proof of strong security and privacy controls",
    "Increased confidence from customers and business partners",
    "Reduced vendor risk assessments and faster onboarding",
    "Improved internal control maturity and governance",
    "A stronger competitive edge in international markets",
    "SOC 2 helps Coimbatore businesses move from being low-cost providers to trusted global partners",
  ];

  const industryData = [
    {
      icon: "bi-code-slash",
      title: "Software product companies and SaaS startups",
    },
    {
      icon: "bi-cloud-check",
      title: "Cloud service and data hosting providers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Managed IT and cybersecurity firms",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Fintech, ERP, and billing platforms",
    },
    {
      icon: "bi-hdd-network",
      title: "Analytics, AI, and digital solution providers",
    },
    {
      icon: "bi-headset",
      title: "Outsourced IT and support service companies",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Identification",
      description: "Identify in-scope systems, services, and data flows",
    },
    {
      number: "2",
      title: "Risk Evaluation",
      description: "Evaluate cybersecurity and compliance risks",
    },
    {
      number: "3",
      title: "Control Design",
      description:
        "Design and implement security, availability, and privacy controls",
    },
    {
      number: "4",
      title: "Documentation Development",
      description: "Develop audit-ready policies, procedures, and evidence",
    },
    {
      number: "5",
      title: "Readiness Testing",
      description: "Perform internal readiness and control testing",
    },
    {
      number: "6",
      title: "Audit Support",
      description: "Support SOC 2 Type 1 or Type 2 audits",
    },
    {
      number: "7",
      title: "Ongoing Compliance",
      description: "Assist with remediation and ongoing compliance",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in Coimbatore | Cyber Security & Compliance Trust
          – First Cert
        </title>
        <meta
          name="description"
          content="Looking for SOC 2 Certification in Coimbatore? First Cert supports businesses with security controls, audit readiness, and compliance frameworks to ensure trusted and reliable digital services."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in Coimbatore, SOC 2 consultants Coimbatore, SOC 2 audit Coimbatore, SOC 2 Type 1 Coimbatore, SOC 2 Type 2 Coimbatore, SOC 2 compliance Coimbatore, SOC 2 certification cost Coimbatore, SOC 2 implementation Coimbatore, SOC 2 documentation Coimbatore, SOC 2 audit readiness Coimbatore, SOC 2 cybersecurity Coimbatore, SOC 2 for SaaS Coimbatore, SOC 2 for IT companies Coimbatore, First Cert SOC 2 Coimbatore, SOC 2 trust services Coimbatore"
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
          <h1 className="main-title">SOC 2 Certification in Coimbatore</h1>
          <p className="small-desc">Strengthening Technology Trust</p>
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
                alt="SOC 2 Certification in Coimbatore"
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
                <b>SOC 2 Certification in Coimbatore</b> helps growing
                technology and service organizations prove that their digital
                platforms, applications, and data environments are built on
                strong security and operational discipline. As Coimbatore
                becomes an emerging hub for SaaS development, IT outsourcing,
                engineering services, and data-driven businesses, international
                customers increasingly expect independent assurance of system
                reliability and data protection.
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
                <b>First Cert</b> enables Coimbatore companies to adopt SOC 2
                controls that are practical, business-aligned, and ready for
                independent audit.
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
            What SOC 2 Certification in Coimbatore Validates
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 2 Certification in Coimbatore</b> measures how effectively an
            organization protects systems and information using the AICPA Trust
            Services Criteria. A SOC 2 engagement typically reviews:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>
                Safeguards against cyber intrusions and unauthorized access
              </h5>
            </div>

            <div className="vapt-card">
              <h5>Stability and uptime of critical systems</h5>
            </div>

            <div className="vapt-card">
              <h5>Integrity and accuracy of data processing</h5>
            </div>

            <div className="vapt-card">
              <h5>Protection of confidential and customer information</h5>
            </div>

            <div className="vapt-card">
              <h5>Compliance with privacy and regulatory obligations</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            The SOC 2 report becomes a powerful tool to demonstrate transparency
            and digital responsibility.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Should Get SOC 2 in Coimbatore
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 2 Certification in Coimbatore is highly relevant for:
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
                        <a href="iso-9001-certification-in-coimbatore">
                          ISO 9001 Certification in Coimbatore
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-coimbatore">
                          ISO 27001 Certification in Coimbatore
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-coimbatore">
                          CMMI Certification in Coimbatore
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-coimbatore">
                          HIPAA Certification in Coimbatore
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-coimbatore">
                          VAPT Certification in Coimbatore
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-coimbatore">
                          GDPR Certification in Coimbatore
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-coimbatore">
                          SOC 1 Certification in Coimbatore
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-coimbatore">
                          SOC 2 Certification in Coimbatore
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              Many global clients require a valid SOC 2 report before approving
              vendors.
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
                Advantages of SOC 2 Certification in Coimbatore
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations certified under SOC 2 gain:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc2}
                alt="SOC 2 Benefits in Coimbatore"
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
                SOC 2 helps Coimbatore companies convert cybersecurity into a
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
                First Cert's SOC 2 Framework in Coimbatore
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
                First Cert follows a step-by-step approach designed for
                operational efficiency:
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
          SOC 2 Certification Cost in Coimbatore
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
                  The cost of SOC 2 Certification in Coimbatore varies based on.
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
                  First Cert provides a tailored readiness review to define a
                  clear and accurate cost structure.
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
                  Get SOC 2 Certified in Coimbatore with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a reliable SOC 2 consulting partner for
                  Coimbatore-based organizations, guiding them from planning to
                  audit completion and beyond. We focus on embedding controls
                  into real operations, making compliance both effective and
                  sustainable.
                </div>

                <div className="title small-title">
                    📧 Email: info@firstcertification.com <br />
                  Start your SOC 2 Certification journey in Coimbatore with
                  First Cert and show your commitment to secure, resilient, and
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

export default CoimbatoreSoc2;
