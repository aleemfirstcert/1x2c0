import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imghipaa from "../../../assets/img/country/middle-east/qatar/hipaa-img.webp";
import benefitshipaa from "../../../assets/img/country/middle-east/qatar/hipaa-benefits.webp";
import bgimg from "../../../assets/img/services/card-hipaa.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function QatarHipaa() {
  const benefits = [
    "Secure Protection of Patient Health Information (PHI).",
    "Compliance with U.S. Healthcare Data Regulations.",
    "Increased Trust from Clients and Healthcare Partners.",
    "Eligibility to Work with U.S.-Based Healthcare Organizations.",
    "Reduced Risk of Data Breaches and Cyber Threats.",
  ];

  const hipaaData = [
    {
      icon: "bi-hospital",
      title: "Hospitals and Medical Clinics",
    },
    {
      icon: "bi-clipboard-pulse",
      title: "Diagnostic and Research Laboratories",
    },
    {
      icon: "bi-headset",
      title: "Healthcare Outsourcing Companies",
    },
    {
      icon: "bi-telephone-plus",
      title: "Health-Tech and Telemedicine Platforms",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Medical Billing and Coding Firms",
    },
    {
      icon: "bi-capsule-pill",
      title: "Pharmaceutical and Life Sciences Companies",
    },
    {
      icon: "bi-cloud-check",
      title: "IT & Cloud Service Providers Supporting Healthcare Systems",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Definition & Consultation",
      description: "Identify data flows and HIPAA compliance requirements.",
    },
    {
      number: "2",
      title: "Gap & Risk Assessment",
      description: "Evaluate existing security controls.",
    },
    {
      number: "3",
      title: "Policy & Documentation Development",
      description: "HIPAA privacy, security, and breach response policies.",
    },
    {
      number: "4",
      title: "Implementation Support",
      description: "Apply technical and administrative safeguards.",
    },
    {
      number: "5",
      title: "Staff Awareness & Training",
      description: "Role-based HIPAA training programs.",
    },
    {
      number: "6",
      title: "Internal Review & Remediation",
      description: "Address gaps before final validation.",
    },
    {
      number: "7",
      title: "Ongoing Compliance Support",
      description: "Updates, monitoring, and compliance maintenance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          HIPAA Certification in Qatar | Trusted HIPAA Compliance Consultants –
          First Cert
        </title>
        <meta
          name="description"
          content="Need HIPAA Certification in Qatar? First Cert offers end-to-end HIPAA compliance services including risk analysis, documentation, training, and audit support for healthcare and IT organizations."
        />
        <meta
          name="keywords"
          content="HIPAA Certification in Qatar, HIPAA consultants in Qatar, HIPAA compliance cost Qatar, HIPAA implementation in Qatar, HIPAA certification process Qatar, HIPAA compliance services Qatar, HIPAA security rule Qatar, HIPAA privacy rule Qatar, HIPAA audit Qatar, HIPAA documentation Qatar, healthcare compliance Qatar, medical data protection Qatar, First Cert HIPAA consultants, HIPAA consulting company Qatar, HIPAA certification for hospitals Qatar, HIPAA certification for IT companies Qatar, HIPAA compliance for healthcare startups Qatar."
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
          <h1 className="main-title">HIPAA Certification in Qatar</h1>
          <p className="small-desc">Strengthening Healthcare Data Security</p>
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
                <b>HIPAA Certification in Qatar</b> helps healthcare providers
                and IT service organizations protect sensitive patient
                information while meeting U.S. healthcare data protection
                requirements. First Cert supports organizations in building
                secure systems, minimizing compliance risks, and ensuring lawful
                handling of Protected Health Information (PHI).
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
                Our comprehensive HIPAA consulting services cover everything
                from initial assessment and policy development to employee
                training and audit readiness. With First Cert, organizations in
                Qatar can achieve HIPAA compliance efficiently while maintaining
                high standards of privacy and data security.
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
            What is HIPAA Certification in Qatar?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>HIPAA (Health Insurance Portability and Accountability Act)</b>{" "}
            is a U.S. regulation focused on safeguarding patient health data.
            HIPAA Certification in Qatar ensures that organizations handling
            U.S. patient information follow strict security, privacy, and breach
            management controls.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            This certification helps organizations establish secure access
            controls, encrypted data storage, risk management procedures, and
            incident response plans. Businesses in Qatar working with U.S.
            healthcare providers or medical data must follow HIPAA standards to
            remain compliant and trusted.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Which Businesses Need HIPAA Certification in Qatar?
              </h2>

              <p className="text-center section-sub mb-5">
                HIPAA Certification is essential for organizations in Qatar that
                process, store, or transmit healthcare data related to U.S.
                patients, including:
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
                        <a href="iso-9001-certification-in-qatar">
                          ISO 9001 Certification in Qatar
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-qatar">
                          ISO 27001 Certification in Qatar
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-qatar">
                          CMMI Certification in Qatar
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-qatar">
                          HIPAA Certification in Qatar
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-qatar">
                          VAPT Certification in Qatar
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-qatar">
                          GDPR Certification in Qatar
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-qatar">
                          SOC 1 Certification in Qatar
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-qatar">
                          SOC 2 Certification in Qatar
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              Implementing HIPAA strengthens compliance, improves security
              posture, and supports international healthcare partnerships.
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
                Key Benefits of HIPAA Certification in Qatar
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
              HIPAA certification positions organizations as reliable and
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
                HIPAA Certification in Qatar – Implementation Approach with{" "}
                <span style={{ color: "black" }}>First Cert</span>
              </h2>
              <p className="text-center section-sub mb-5">
                Our structured HIPAA compliance methodology includes:
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
          How Much Does HIPAA Certification Cost in Qatar?
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
                  HIPAA certification cost in Qatar depends on organizational
                  scope and complexity. Pricing is influenced by:
                </div>

                <ul className="features">
                  <li className="check">Number of employees</li>
                  <li className="check">Volume and type of PHI handled</li>
                  <li className="check">
                    IT infrastructure and system architecture
                  </li>
                  <li className="check">Existing security maturity</li>
                  <li className="check">Documentation and training needs</li>
                  <li className="check">
                    Compliance scope and assessment effort
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert provides a customized quotation to ensure
                  affordability, transparency, and timely compliance.
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
                  Achieve HIPAA Certification in Qatar with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted HIPAA compliance partner for
                  organizations in Qatar seeking secure, efficient, and reliable
                  certification support. Our experienced consultants help
                  healthcare and IT companies implement HIPAA controls aligned
                  with U.S. regulatory expectations.
                </div>

                <div className="title small-title">
                  We ensure a smooth compliance journey through practical
                  guidance, clear documentation, and continuous support —
                  helping you protect patient data and expand healthcare
                  business opportunities confidently.
                </div>
                <div className="title small-title">
                  📧 Contact: info@firstcertification.com Start your HIPAA
                  Certification journey in Qatar with First Cert — your partner
                  in healthcare data privacy and regulatory compliance.
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

export default QatarHipaa;
