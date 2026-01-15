import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imghipaa from "../../../assets/img/country/middle-east/iran/hipaa-img.webp";
import benefitshipaa from "../../../assets/img/country/middle-east/iran/hipaa-benefits.webp";
import bgimg from "../../../assets/img/services/card-hipaa.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function IranHipaa() {
  const benefits = [
    "Reduced exposure to data breaches, penalties, and contractual liabilities",
    "Structured oversight and control over sensitive health information",
    "Increased trust from U.S. healthcare partners, auditors, and regulators",
    "Stronger employee accountability and security awareness",
    "Improved market positioning as a secure healthcare data service provider",
  ];

  const industryData = [
    {
      icon: "bi-hospital",
      title: "Hospitals, medical centers, and healthcare service providers",
    },
    {
      icon: "bi-telephone-plus",
      title: "Telemedicine platforms and digital health solution vendors",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Medical billing, coding, and revenue cycle management companies",
    },
    {
      icon: "bi-clipboard-pulse",
      title: "Clinical research organizations and diagnostic laboratories",
    },
    {
      icon: "bi-capsule-pill",
      title: "Pharmaceutical, biotechnology, and life sciences enterprises",
    },
    {
      icon: "bi-cloud-check",
      title:
        "IT service providers, cloud platforms, and SaaS companies serving healthcare clients",
    },
    {
      icon: "bi-headset",
      title: "Healthcare outsourcing and shared service operations",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "PHI Identification & Data Mapping",
      description: "Understand healthcare data movement and storage",
    },
    {
      number: "2",
      title: "Risk & Compliance Gap Assessment",
      description:
        "Evaluate administrative, technical, and physical safeguards",
    },
    {
      number: "3",
      title: "Policy & Framework Development",
      description: "Establish HIPAA-aligned privacy and security documentation",
    },
    {
      number: "4",
      title: "Safeguard Implementation",
      description: "Deploy technical controls and procedural protections",
    },
    {
      number: "5",
      title: "Employee Training & Awareness",
      description: "Deliver targeted HIPAA education programs",
    },
    {
      number: "6",
      title: "Compliance Validation",
      description: "Test controls and remediate compliance gaps",
    },
    {
      number: "7",
      title: "Continuous Advisory Support",
      description: "Maintain ongoing monitoring and regulatory alignment",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          HIPAA Certification in Iran | Secure Healthcare Data Compliance &
          Advisory Services – First Cert
        </title>
        <meta
          name="description"
          content="Need HIPAA compliance support in Iran? First Cert offers end-to-end HIPAA consulting services, covering PHI risk assessment, privacy and security control implementation, compliance documentation, and workforce awareness programs to help organizations safely manage U.S. healthcare data and meet stringent international compliance expectations."
        />
        <meta
          name="keywords"
          content="HIPAA Certification in Iran, HIPAA consultants Iran, HIPAA compliance Iran, HIPAA audit Iran, HIPAA implementation Iran, HIPAA certification cost Iran, healthcare data protection Iran, PHI security Iran, HIPAA privacy rule Iran, HIPAA security rule Iran, First Cert HIPAA Iran, healthcare IT compliance Iran, HIPAA for IT companies Iran"
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
          <h1 className="main-title">HIPAA Certification in Iran</h1>
          <p className="small-desc">
            Building Trust in Healthcare Data Protection
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
                src={imghipaa}
                alt="HIPAA Certification in Iran"
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
                <b>HIPAA Certification in Iran</b> enables organizations that
                handle U.S. healthcare information to establish robust privacy,
                security, and accountability mechanisms. With the rapid growth
                of digital health platforms, medical research services,
                healthcare IT solutions, and offshore healthcare operations in
                Iran, HIPAA compliance has become essential for engaging with
                U.S.-based healthcare providers, insurers, and technology
                partners.
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
                <b>First Cert</b> supports organizations across Iran by
                developing HIPAA compliance programs focused on real-world risk
                mitigation and operational reliability. Our approach emphasizes
                enforceable safeguards, governance ownership, and continuous
                compliance rather than checklist-driven documentation.
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
            What HIPAA Certification in Iran Covers
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>HIPAA Certification in Iran</b> involves aligning organizational
            operations with the U.S. Health Insurance Portability and
            Accountability Act to ensure end-to-end protection of Protected
            Health Information (PHI). Compliance focuses on maintaining data
            confidentiality, integrity, and availability across systems, people,
            and processes.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A comprehensive HIPAA compliance framework typically includes:
          </p>

          <ul className="iso-list">
            {[
              "Clear assignment of roles and accountability for PHI governance",
              "Logical access controls, encryption mechanisms, and activity monitoring",
              "Physical protection of facilities, devices, and data infrastructure",
              "Incident response planning, breach management, and reporting readiness",
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
            HIPAA compliance confirms that Iran-based organizations can meet
            strict global healthcare data privacy requirements.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Requires HIPAA Certification in Iran
              </h2>

              <p className="text-center section-sub mb-5">
                HIPAA Certification in Iran is critical for organizations
                involved in storing, processing, or accessing U.S. healthcare
                data, including:
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
              HIPAA compliance allows organizations in Iran to work confidently
              with international healthcare stakeholders.
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
                Advantages of HIPAA Certification in Iran
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve HIPAA Certification in Iran realize
                significant business and operational benefits, such as:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitshipaa}
                alt="HIPAA Benefits in Iran"
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
              <br />
            </div>

            <p className="text-center section-sub mb-5">
              HIPAA compliance strengthens both regulatory readiness and
              long-term business resilience.
            </p>
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
                First Cert's HIPAA Implementation Framework in Iran
              </h2>
              <p className="text-center section-sub mb-5">
                First Cert follows a structured, risk-driven HIPAA consulting
                methodology tailored for organizations operating in Iran:
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
          HIPAA Certification Cost in Iran
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
                  The cost of HIPAA Certification in Iran varies depending on
                  several organizational factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Company size and operational complexity
                  </li>
                  <li className="check">
                    Type and volume of healthcare data handled
                  </li>
                  <li className="check">
                    IT architecture and cloud environment scope
                  </li>
                  <li className="check">
                    Existing privacy and security maturity levels
                  </li>
                  <li className="check">
                    Training, documentation, and ongoing compliance requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins each engagement with a readiness review to
                  provide a clear, customized, and transparent cost outline
                  aligned with compliance objectives.
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
                  Get HIPAA Certified in Iran with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted HIPAA consulting provider in Iran,
                  supporting healthcare organizations, technology firms, and
                  outsourcing partners with practical, audit-ready compliance
                  solutions. Our consultants embed HIPAA requirements into
                  everyday operations to ensure long-term compliance success.
                </div>

                <div className="title small-title">
                  From initial assessment to continuous compliance management,
                  First Cert ensures your HIPAA journey in Iran is efficient,
                  secure, and aligned with global healthcare regulations.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your HIPAA Certification journey in Iran with First Cert
                  and demonstrate your commitment to healthcare data privacy,
                  operational security, and international compliance excellence.
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

export default IranHipaa;
