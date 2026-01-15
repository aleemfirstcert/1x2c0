import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imghipaa from "../../../assets/img/country/middle-east/UAE/hipaa-img.webp";
import benefitshipaa from "../../../assets/img/country/middle-east/UAE/hipaa-benefits.webp";
import bgimg from "../../../assets/img/services/card-hipaa.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function UaeHipaa() {
  const benefits = [
    "Robust PHI Protection – Reduces risk of data breaches and unauthorized disclosure",
    "Regulatory Compliance – Meets mandatory U.S. healthcare data protection requirements",
    "Expanded Business Opportunities – Enables collaboration with U.S. healthcare entities",
    "Reduced Legal and Financial Risk – Minimizes penalties and compliance exposure",
    "Enhanced Client Confidence – Builds trust with healthcare partners and stakeholders",
  ];

  const hipaaData = [
    {
      icon: "bi-hospital",
      title: "Hospitals, clinics, and healthcare service providers",
    },
    {
      icon: "bi-telephone-plus",
      title: "Telehealth and digital health technology platforms",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Medical billing, coding, and claims management companies",
    },
    {
      icon: "bi-clipboard-pulse",
      title: "Diagnostic laboratories and healthcare research organizations",
    },
    {
      icon: "bi-capsule-pill",
      title: "Pharmaceutical and life sciences firms",
    },
    {
      icon: "bi-cloud-check",
      title: "IT, SaaS, and cloud providers supporting healthcare systems",
    },
    {
      icon: "bi-headset",
      title: "Healthcare BPO and outsourcing service providers",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Compliance Scope Definition",
      description: "Identify PHI flows and system boundaries.",
    },
    {
      number: "2",
      title: "Risk & Vulnerability Analysis",
      description: "Assess administrative, technical, and physical risks.",
    },
    {
      number: "3",
      title: "Policy & Procedure Development",
      description: "Create HIPAA-aligned privacy and security documents.",
    },
    {
      number: "4",
      title: "Safeguard Implementation",
      description:
        "Apply access controls, monitoring, and data protection measures.",
    },
    {
      number: "5",
      title: "Workforce Training",
      description: "Conduct role-based HIPAA awareness programs.",
    },
    {
      number: "6",
      title: "Compliance Validation",
      description: "Review readiness and close identified gaps.",
    },
    {
      number: "7",
      title: "Ongoing Compliance Support",
      description: "Continuous monitoring and improvement.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          HIPAA Certification in UAE | Professional HIPAA Compliance Consulting
          – First Cert
        </title>
        <meta
          name="description"
          content="Need HIPAA Certification in the UAE? First Cert offers end-to-end HIPAA compliance services including risk analysis, security controls, documentation, and workforce training to help organizations securely handle U.S. healthcare data."
        />
        <meta
          name="keywords"
          content="HIPAA Certification in UAE, HIPAA consultants in UAE, HIPAA compliance cost UAE, HIPAA implementation in UAE, HIPAA certification process UAE, HIPAA compliance services UAE, HIPAA security rule UAE, HIPAA privacy rule UAE, HIPAA audit UAE, HIPAA documentation UAE, healthcare compliance UAE, medical data protection UAE, First Cert HIPAA consultants, HIPAA consulting company UAE, HIPAA certification for hospitals UAE, HIPAA certification for IT companies UAE, HIPAA compliance for healthcare startups UAE."
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
          <h1 className="main-title">HIPAA Certification in UAE</h1>
          <p className="small-desc">
            Safeguarding Healthcare Information & Global Trust
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
                <b>HIPAA Certification in UAE</b> enables healthcare
                organizations, technology providers, and outsourcing companies
                to securely manage U.S. patient data in accordance with federal
                healthcare regulations. As cross-border healthcare services,
                telemedicine, and health IT solutions continue to expand, HIPAA
                compliance has become a critical requirement for organizations
                serving U.S.-based clients.
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
                <b>First Cert</b> supports UAE-based organizations with
                structured HIPAA compliance programs designed to protect
                <b>Protected Health Information (PHI)</b>, reduce regulatory
                risk, and strengthen information security controls. Our approach
                emphasizes operational clarity, risk-based controls, and
                long-term compliance sustainability.
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
            Understanding HIPAA Certification in UAE
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>HIPAA Certification in UAE</b> refers to aligning organizational
            practices with the Health Insurance Portability and Accountability
            Act, a U.S. regulation designed to protect patient health data. It
            establishes safeguards to ensure confidentiality, integrity, and
            availability of PHI.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            HIPAA compliance requires organizations to implement:
          </p>

          <ul className="iso-list">
            {[
              "Governance and administrative controls for data handling",
              "Technical safeguards such as authentication, encryption, and access monitoring",
              "Physical protections for systems and facilities processing health data",
              "Incident management and breach notification procedures",
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
            Organizations in UAE that process U.S. healthcare data rely on HIPAA
            compliance to demonstrate accountability and meet international
            healthcare security expectations.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Should Pursue HIPAA Certification in UAE?
              </h2>

              <p className="text-center section-sub mb-5">
                HIPAA Certification is essential for organizations in UAE that
                create, access, store, or transmit U.S. patient data, including:
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
                        <a href="iso-9001-certification-in-uae">
                          ISO 9001 Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-uae">
                          ISO 27001 Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-uae">
                          CMMI Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-uae">
                          HIPAA Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-uae">
                          VAPT Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-uae">
                          GDPR Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-uae">
                          SOC 1 Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-uae">
                          SOC 2 Certification in UAE
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              HIPAA implementation enables these organizations to operate
              securely while supporting cross-border healthcare partnerships.
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
                Key Business Benefits of HIPAA Certification in UAE
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve HIPAA Certification in the UAE gain
                significant advantages.
              </p>
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
              HIPAA certification positions organizations as responsible and
              security-focused healthcare service providers.
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
                HIPAA Certification Process in UAE with –
                <span style={{ color: "black" }}> First Cert</span>
              </h2>
              <p className="text-center section-sub mb-5">
                <a href="/">First Cert</a> follows a clear, structured HIPAA
                compliance approach tailored for UAE organizations:
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
          HIPAA Certification Cost in UAE?
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
                  HIPAA Certification costs in the UAE vary depending on
                  organizational requirements, such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Workforce size and operational scale
                  </li>
                  <li className="check">
                    Volume and sensitivity of healthcare data
                  </li>
                  <li className="check">
                    IT systems, cloud infrastructure, and security maturity{" "}
                  </li>
                  <li className="check">
                    Documentation, training, and audit preparation needs
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert offers transparent and customized pricing following
                  an initial compliance evaluation
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
                  Get HIPAA Certification in UAE with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted HIPAA consulting partner in the UAE,
                  helping healthcare and technology organizations implement
                  effective compliance frameworks aligned with U.S. regulatory
                  requirements. Our experienced consultants focus on practical
                  controls, accurate documentation, and audit-ready systems that
                  support long-term compliance.
                </div>

                <div className="title small-title">
                  From initial assessment to ongoing compliance management,
                  First Cert ensures a smooth HIPAA certification journey with
                  measurable security outcomes.
                </div>
                <div className="title small-title-p">
                  📧 Contact us: info@firstcertification.com Start your HIPAA
                  Certification journey in the UAE with First Cert and
                  demonstrate a strong commitment to healthcare data privacy,
                  security, and international compliance.
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

export default UaeHipaa;
