import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imghipaa from "../../../assets/img/country/india/pune/hipaa-img.png";
import benefitshipaa from "../../../assets/img/country/india/pune/hipaa-benefits.jpg";
import bgimg from '../../../assets/img/services/card-hipaa.webp'
import EnquiryForm from "views/index-sections/EnquiryForm";

function PuneHipaa() {
  const benefits = [
    "Protection of Patient Data – Safeguard sensitive PHI from unauthorized access, loss, or cyberattacks.",
    "Avoidance of Legal Penalties – Reduce the risk of fines and legal action from non-compliance.",
    "Increased Customer Trust – Demonstrate strong commitment to healthcare privacy and security.",
    "Access to U.S. Healthcare Clients – HIPAA compliance is mandatory for outsourcing or IT services involving patient data.",
    "Reduced Cybersecurity Risks – Identify vulnerabilities and implement strong security controls.",
    "Improved Operational Efficiency – Standardized data handling and incident response processes improve workflow accuracy.",
    "Enhanced Reputation in Healthcare Industry – Gain credibility and competitive advantage over non-compliant organizations.",
  ];

  const hipaaData = [
    {
      icon: "bi-hospital",
      title: "Hospitals and Clinics",
    },
    {
      icon: "bi-clipboard-pulse",
      title: "Diagnostic Labs and Medical Centers",
    },
    {
      icon: "bi-headset",
      title: "Healthcare BPOs and KPOs",
    },
    {
      icon: "bi-telephone-plus",
      title: "Health-Tech Startups and Telemedicine Platforms",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Medical Billing Companies",
    },
    {
      icon: "bi-capsule-pill",
      title: "Pharmaceutical Companies",
    },
    {
      icon: "bi-hdd-network",
      title: "IT Companies Handling Healthcare Data",
    },
    {
      icon: "bi-cloud-plus",
      title: "Healthcare SaaS, Cloud, and Software Providers",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Consultation",
      description:
        "Understanding your services, data flows, and HIPAA compliance scope.",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description:
        "We evaluate existing policies and identify areas requiring improvement.",
    },
    {
      number: "3",
      title: "Risk Assessment (Security Rule Requirement)",
      description:
        "Detailed analysis of threats, vulnerabilities, and risks to PHI.",
    },
    {
      number: "4",
      title: "Documentation Development",
      description:
        "We prepare all HIPAA-required documents, including privacy policies, security rule policies, risk management plans, business associate agreements (BAAs), and incident response plans.",
    },
    {
      number: "5",
      title: "Implementation",
      description:
        "Deploying policies, securing systems, and training teams on HIPAA compliance.",
    },
    {
      number: "6",
      title: "Internal Audit & Corrective Actions",
      description:
        "We conduct a pre-audit to check readiness and fix compliance gaps.",
    },
    {
      number: "7",
      title: "Certification & Continuous Support",
      description: "After a successful audit, HIPAA certification is awarded.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          HIPAA Certification in Pune | Affordable HIPAA Compliance
          Consultants – First Cert
        </title>
        <meta
          name="description"
          content="Looking for HIPAA Certification in Pune? First Cert provides expert consulting, risk assessment, documentation, staff training, and audit support to ensure full HIPAA compliance for healthcare and IT organizations."
        />
        <meta
          name="keywords"
          content="HIPAA Certification in Pune, HIPAA consultants in Pune, HIPAA compliance cost Pune, HIPAA implementation in Pune, HIPAA certification process Pune, HIPAA compliance services Pune, HIPAA security rule Pune, HIPAA privacy rule Pune, HIPAA audit Pune, HIPAA documentation Pune, healthcare compliance Pune, medical data protection Pune, First Cert HIPAA consultants, HIPAA consulting company Pune, HIPAA certification for hospitals Pune, HIPAA certification for IT companies Pune, HIPAA compliance for healthcare startups Pune."
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
          <h1 className="main-title">HIPAA Certification in Pune</h1>
          <p className="small-desc">
            Your Path to Secure Healthcare Data Compliance
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
                alt="hipaa Certification"
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
                Achieve <b>ISO 27001 Certification in Pune</b> with the expert
                consultants at First Cert. We help organizations protect patient
                information, strengthen data security practices, and comply with
                U.S. healthcare privacy laws.
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
                Our end-to-end HIPAA compliance support — including risk
                assessment, documentation, training, and audit preparation —
                makes the implementation process simple, cost-effective, and
                100% compliant.
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
                Whether you are a hospital, diagnostic center, healthcare
                startup, or IT service provider working with U.S. clients, HIPAA
                certification strengthens trust, reduces risks, and ensures
                legal compliance.
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
            What is HIPAA Certification in Pune?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>HIPAA (Health Insurance Portability and Accountability Act)</b>{" "}
            is a U.S. federal regulation designed to protect patient data and
            ensure secure handling of medical information.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            HIPAA Certification in Pune ensures that healthcare organizations
            and IT companies follow strict standards for:
          </p>
          <ul className="iso-list">
            {[
              "Protecting patient health information (PHI)",
              "Ensuring privacy and security controls",
              "Managing risk and incident response",
              "Maintaining secure data transmission and storage",
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
            Businesses in healthcare and IT sectors working with U.S. clients
            must follow HIPAA guidelines to avoid legal penalties and maintain
            trust.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            By getting HIPAA certified, Pune-based organizations demonstrate
            their ability to manage sensitive patient data responsibly and
            securely — a crucial factor in today’s digital healthcare ecosystem.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Which Businesses Need HIPAA Certification Implementation in
                Pune?
              </h2>

              <p className="text-center section-sub mb-5">
                Any organization handling Protected Health Information (PHI) or
                working with U.S.-based healthcare clients must consider HIPAA
                Certification Implementation in Pune. This includes:
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
                        <a href="iso-9001-certification-in-pune">
                          ISO 9001 Certification in Pune
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-pune">
                          ISO 27001 Certification in Pune
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-pune">
                          CMMI Certification in Pune
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-pune">
                          HIPAA Certification in Pune
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-pune">
                          VAPT Certification in Pune
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-pune">
                          GDPR Certification in Pune
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-pune">
                          SOC 1 Certification in Pune
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-pune">
                          SOC 2 Certification in Pune
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              Implementing HIPAA ensures secure data handling, compliance with
              legal requirements, and enhanced credibility with healthcare
              partners globally.
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
                Benefits of Getting HIPAA Certification in Pune
              </h1>
            </div>
          </div>

          {/* First Paragraph - Full Width */}
          <div className="row">
            <div className="col-12">
              <p
                className="text-center mb-5"
                style={{
                  color: "#000000",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  fontWeight: "400",
                }}
              >
                Achieving{" "}
                <b href="iso-27001-certification">
                  HIPAA Certification in Pune
                </b>{" "}
                provides strong security, compliance, and business advantages:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitshipaa}
                alt="hipaa Benefits"
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
                With <a href="/">First Cert</a>, achieving{" "}
                <b>ISO 27001 Certification in Pune</b> becomes a structured,
                guided, and value-driven process.
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
                HIPAA Certification in Pune – Simplified Process with{" "}
                <span style={{ color: "black" }}>First Cert</span>
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                Achieving <b>HIPAA Certification in Pune</b> with{" "}
                <a href="/">First Cert</a> is structured, guided, and
                result-driven. Our experts handle the entire compliance journey
                step-by-step:
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
          <p
            className="lead fw-bold mb-0 lh-lg fs-5 text-center"
            style={{ color: "#212529", fontWeight: "500" }}
          >
            <a href="/">First Cert</a> continues to support your compliance
            maintenance, yearly reviews, and updates.
          </p>
        </div>
      </div>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          How Much Does HIPAA Certification Cost in Pune?
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
                  HIPAA certification cost in Pune varies depending on your
                  organization’s size, systems, and PHI handling process. There
                  is no fixed price.
                </div>
                <div className="title small-title">
                  Key factors influencing cost include:
                </div>

                <ul className="features">
                  <li className="check">Number of employees</li>
                  <li className="check">Type of PHI handled</li>
                  <li className="check">IT infrastructure complexity</li>
                  <li className="check">Existing security controls</li>
                  <li className="check">Documentation requirements</li>
                  <li className="check">Training needs</li>
                  <li className="check">
                    Scope of compliance (full or partial)
                  </li>
                  <li className="check">Audit and assessment costs</li>
                </ul>

                <div className="title small-title">
                  First Cert provides a customized quotation after evaluating
                  your operations. Our approach ensures an affordable,
                  transparent, and quick compliance process.
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
                  HIPAA Certification in Pune Made Simple with First Cert –
                  Your Compliance Partner
                </div>
                <div className="title small-title">
                  If you want to achieve HIPAA Certification in Pune, First
                  Cert is your trusted partner for expert consulting and
                  certification assistance.
                </div>

                <div className="title small-title">
                  We help healthcare and IT organizations comply with HIPAA
                  Privacy, Security, and Breach Notification Rules through
                  structured guidance and efficient implementation.
                </div>
                <div className="title small-title">
                  Our experienced consultants ensure a smooth certification
                  journey — from documentation and training to risk assessments
                  and final audits.
                </div>
                <div className="title small-title">
                  We are committed to delivering high-quality, affordable, and
                  reliable HIPAA compliance services that protect patient data
                  and build lasting trust.
                </div>
                <div className="title small-title-p">
                  Contact us at info@firstcertification.com Begin your HIPAA
                  Certification journey in Pune with First Cert — your partner
                  in healthcare privacy, security, and compliance excellence.
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

export default PuneHipaa;
