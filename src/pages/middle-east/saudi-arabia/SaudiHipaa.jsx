import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imghipaa from "../../../assets/img/country/middle-east/saudi-arabia/hipaa-img.webp";
import benefitshipaa from "../../../assets/img/country/middle-east/saudi-arabia/hipaa-benefits.webp";
import bgimg from "../../../assets/img/services/card-hipaa.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function SaudiHipaa() {
  const benefits = [
    "Strong PHI Protection – Safeguards patient data from unauthorized access and cyber incidents.",
    "U.S. Regulatory Alignment – Meets mandatory healthcare compliance expectations.",
    "Increased Client Confidence – Builds trust with hospitals, insurers, and healthcare partners.",
    "Eligibility for Global Healthcare Projects – Supports U.S. healthcare outsourcing and IT contracts.",
    "Reduced Security & Legal Risk – Minimizes penalties, breaches, and compliance failures.",
  ];

  const hipaaData = [
    {
      icon: "bi-hospital",
      title: "Hospitals, Clinics, and Medical Centers",
    },
    {
      icon: "bi-telephone-plus",
      title: "Health-Tech & Telemedicine Companies",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Medical Billing and Revenue Cycle Firms",
    },
    {
      icon: "bi-clipboard-pulse",
      title: "Clinical Research & Diagnostic Labs",
    },
    {
      icon: "bi-capsule-pill",
      title: "Pharmaceutical & Life Sciences Organizations",
    },
    {
      icon: "bi-cloud-check",
      title: "IT, Cloud, and SaaS Providers supporting healthcare systems",
    },
    {
      icon: "bi-headset",
      title: "Healthcare Outsourcing & BPO Companies",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Initial Consultation & Scope Definition",
      description: "Identify PHI exposure and HIPAA compliance needs.",
    },
    {
      number: "2",
      title: "Risk & Gap Assessment",
      description: "Analyze technical and administrative vulnerabilities.",
    },
    {
      number: "3",
      title: "Policy & Documentation Development",
      description: "Privacy, Security, and Breach Notification policies.",
    },
    {
      number: "4",
      title: "Safeguard Implementation",
      description: "Technical, physical, and procedural controls.",
    },
    {
      number: "5",
      title: "Employee Training",
      description: "Role-based HIPAA awareness programs.",
    },
    {
      number: "6",
      title: "Readiness Review & Remediation",
      description: "Address gaps before compliance validation.",
    },
    {
      number: "7",
      title: "Ongoing Compliance Support",
      description: "Monitoring, updates, and audit assistance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          HIPAA Certification in Saudi Arabia | Reliable HIPAA Compliance
          Experts – First Cert
        </title>
        <meta
          name="description"
          content="Searching for HIPAA Certification in Saudi Arabia? First Cert delivers complete HIPAA compliance solutions including risk assessments, policy development, staff training, and audit readiness for healthcare and technology organizations."
        />
        <meta
          name="keywords"
          content="HIPAA Certification in Saudi Arabia, HIPAA consultants in Saudi Arabia, HIPAA compliance cost Saudi Arabia, HIPAA implementation in Saudi Arabia, HIPAA certification process Saudi Arabia, HIPAA compliance services Saudi Arabia, HIPAA security rule Saudi Arabia, HIPAA privacy rule Saudi Arabia, HIPAA audit Saudi Arabia, HIPAA documentation Saudi Arabia, healthcare compliance Saudi Arabia, medical data protection Saudi Arabia, First Cert HIPAA consultants, HIPAA consulting company Saudi Arabia, HIPAA certification for hospitals Saudi Arabia, HIPAA certification for IT companies Saudi Arabia, HIPAA compliance for healthcare startups Saudi Arabia."
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
          <h1 className="main-title">HIPAA Certification in Saudi Arabia</h1>
          <p className="small-desc">Secure Healthcare Data with Confidence</p>
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
                alt="Hipaa Certification"
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
                <b>HIPAA Certification in Saudi Arabia</b> enables healthcare
                providers and service organizations to meet U.S. healthcare data
                protection standards while safeguarding sensitive patient
                information. As cross-border healthcare services and digital
                health platforms expand, HIPAA compliance has become critical
                for organizations handling Protected Health Information (PHI).
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
                First Cert assists organizations across Saudi Arabia in building
                secure, compliant, and auditable HIPAA frameworks. Our
                end-to-end approach helps reduce regulatory risk, strengthen
                cybersecurity controls, and ensure trusted healthcare data
                management aligned with U.S. requirements.
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
            What is HIPAA Certification in Saudi Arabia?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>HIPAA Certification in Saudi Arabia</b> refers to implementing
            and validating compliance with the U.S. Health Insurance Portability
            and Accountability Act for organizations managing U.S. patient data.
            The framework focuses on protecting PHI through administrative,
            technical, and physical safeguards.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            HIPAA compliance ensures:
          </p>

          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Secure access control and authentication</h5>
            </div>

            <div class="vapt-card">
              <h5>Encryption and safe storage of medical data</h5>
            </div>

            <div class="vapt-card">
              <h5>Incident response and breach reporting readiness</h5>
            </div>

            <div class="vapt-card">
              <h5>Privacy-driven data handling practices</h5>
            </div>
          </div>
          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Organizations in Saudi Arabia working with U.S. healthcare
            providers, insurers, or medical platforms rely on HIPAA compliance
            to maintain legal eligibility and international trust.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Should Implement HIPAA Certification in Saudi Arabia?
              </h2>

              <p className="text-center section-sub mb-5">
                HIPAA Certification is essential for Saudi Arabia-based
                organizations involved in healthcare data processing, including:
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
                        <a href="iso-9001-certification-in-saudi-arabia">
                          ISO 9001 Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-saudi-arabia">
                          ISO 27001 Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-saudi-arabia">
                          CMMI Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-saudi-arabia">
                          HIPAA Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-saudi-arabia">
                          VAPT Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-saudi-arabia">
                          GDPR Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-saudi-arabia">
                          SOC 1 Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-saudi-arabia">
                          SOC 2 Certification in Saudi Arabia
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              HIPAA compliance enables these organizations to operate securely
              while supporting U.S. healthcare partnerships and outsourcing
              contracts.
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
                Benefits of HIPAA Certification in Saudi Arabia
              </h1>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitshipaa}
                alt="HIPAA Benefits"
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
              HIPAA certification strengthens both data security posture and
              market credibility.
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
                HIPAA Certification Implementation in Saudi Arabia with{" "}
                <span style={{ color: "black" }}>First Cert</span>
              </h2>
              <p className="text-center section-sub mb-5">
                First Cert follows a practical and structured HIPAA compliance
                methodology:
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
          How Much Does HIPAA Certification Cost in Saudi Arabia?
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
                  The cost of HIPAA Certification in Saudi Arabia depends on
                  multiple factors, including:
                </div>

                <ul className="features">
                  <li className="check">Size of the organization</li>
                  <li className="check">
                    Volume and sensitivity of PHI handled
                  </li>
                  <li className="check">
                    IT systems and infrastructure complexity
                  </li>
                  <li className="check">
                    Existing security controls and maturity
                  </li>
                  <li className="check">Training and documentation scope</li>
                </ul>

                <div className="title small-title">
                  First Cert offers customized and transparent pricing after an
                  initial assessment, ensuring cost-effective compliance without
                  unnecessary overhead.
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
                  Achieve HIPAA Certification in Saudi Arabia with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted HIPAA compliance partner for
                  healthcare and technology organizations in Saudi Arabia. We
                  help businesses implement effective HIPAA controls, strengthen
                  data privacy, and meet U.S. healthcare regulatory expectations
                  with confidence.
                </div>

                <div className="title small-title">
                  Our experienced consultants deliver practical guidance, clear
                  documentation, and continuous compliance support — enabling
                  organizations to protect patient data while expanding global
                  healthcare opportunities.
                </div>
                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com Start your HIPAA
                  Certification journey in Saudi Arabia with First Cert — and
                  demonstrate excellence in healthcare data privacy and
                  compliance.
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

export default SaudiHipaa;
