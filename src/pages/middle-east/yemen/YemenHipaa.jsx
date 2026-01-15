import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imghipaa from "../../../assets/img/country/middle-east/yemen/hipaa-img.avif";
import benefitshipaa from "../../../assets/img/country/middle-east/yemen/hipaa-benefits.webp";
import bgimg from "../../../assets/img/services/card-hipaa.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function YemenHipaa() {
  const benefits = [
    "Protection of Patient Data – Safeguards PHI from unauthorized access and cyber threats.",
    "Regulatory Readiness – Meets mandatory U.S. healthcare compliance requirements.",
    "Business Eligibility – Enables partnerships with U.S.-based healthcare organizations.",
    "Reduced Legal Exposure – Minimizes penalties and compliance risks.",
    "Improved Trust – Strengthens confidence among healthcare clients and partners.",
  ];

  const hipaaData = [
    {
      icon: "bi-hospital",
      title: "Hospitals and Healthcare Facilities",
    },
    {
      icon: "bi-telephone-plus",
      title: "Telemedicine and Digital Health Platforms",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Medical Billing and Coding Service Providers",
    },
    {
      icon: "bi-clipboard-pulse",
      title: "Diagnostic Laboratories and Research Centers",
    },
    {
      icon: "bi-capsule-pill",
      title: "Pharmaceutical and Clinical Trial Organizations",
    },
    {
      icon: "bi-cloud-check",
      title:
        "IT, SaaS, and Cloud Service Providers Supporting Healthcare Systems",
    },
    {
      icon: "bi-headset",
      title: "Healthcare Outsourcing and BPO Companies",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Identification",
      description: "Analyze PHI exposure and business operations.",
    },
    {
      number: "2",
      title: "Risk Assessment",
      description: "Identify technical, administrative, and physical gaps.",
    },
    {
      number: "3",
      title: "Policy Development",
      description: "Create HIPAA-compliant privacy and security documentation.",
    },
    {
      number: "4",
      title: "Control Implementation",
      description: "Apply safeguards for data protection and access control.",
    },
    {
      number: "5",
      title: "Staff Training",
      description: "Conduct HIPAA awareness and role-based training.",
    },
    {
      number: "6",
      title: "Readiness Review",
      description: "Validate compliance and address identified gaps.",
    },
    {
      number: "7",
      title: "Ongoing Support",
      description: "Continuous monitoring and compliance maintenance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          HIPAA Certification in Yemen | Expert HIPAA Compliance Services –
          First Cert
        </title>
        <meta
          name="description"
          content="Looking for HIPAA Certification in Yemen? First Cert provides comprehensive HIPAA compliance consulting, security assessments, documentation, and training to help organizations safely manage U.S. healthcare data."
        />
        <meta
          name="keywords"
          content="HIPAA Certification in Yemen, HIPAA consultants in Yemen, HIPAA compliance cost Yemen, HIPAA implementation in Yemen, HIPAA certification process Yemen, HIPAA compliance services Yemen, HIPAA security rule Yemen, HIPAA privacy rule Yemen, HIPAA audit Yemen, HIPAA documentation Yemen, healthcare compliance Yemen, medical data protection Yemen, First Cert HIPAA consultants, HIPAA consulting company Yemen, HIPAA certification for hospitals Yemen, HIPAA certification for IT companies Yemen, HIPAA compliance for healthcare startups Yemen."
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
          <h1 className="main-title">HIPAA Certification in Yemen</h1>
          <p className="small-desc">
            Ensuring Secure Handling of Healthcare Data
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
                <b>HIPAA Certification in Yemen</b> supports healthcare
                providers, IT companies, and service organizations in meeting
                strict U.S. healthcare data protection requirements. As global
                healthcare outsourcing and digital health services grow,
                organizations handling U.S. patient information must comply with
                HIPAA standards to remain eligible and trustworthy.
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
                <b>First Cert</b> assists organizations in Yemen by delivering
                structured HIPAA compliance solutions that focus on protecting
                Protected Health Information (PHI), reducing legal exposure, and
                strengthening cybersecurity practices. Our approach emphasizes
                clarity, practicality, and long-term compliance readiness.
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
            What is HIPAA Certification in Yemen?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>HIPAA Certification in Yemen</b> refers to aligning
            organizational practices with the Health Insurance Portability and
            Accountability Act, a U.S. regulation designed to protect patient
            health data. It establishes safeguards to ensure confidentiality,
            integrity, and availability of PHI.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            HIPAA compliance requires organizations to implement:
          </p>

          <ul className="iso-list">
            {[
              "Administrative controls for data governance",
              "Technical safeguards such as access control and encryption",
              "Physical security for systems handling health information",
              "Incident response and breach notification procedures",
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
            Organizations in Yemen that process U.S. healthcare data rely on
            HIPAA compliance to demonstrate accountability and meet
            international healthcare security expectations.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Needs HIPAA Certification in Yemen?
              </h2>

              <p className="text-center section-sub mb-5">
                HIPAA Certification is essential for organizations in Yemen that
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
                        <a href="iso-9001-certification-in-yemen">
                          ISO 9001 Certification in Yemen
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-yemen">
                          ISO 27001 Certification in Yemen
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-yemen">
                          CMMI Certification in Yemen
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-yemen">
                          HIPAA Certification in Yemen
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-yemen">
                          VAPT Certification in Yemen
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-yemen">
                          GDPR Certification in Yemen
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-yemen">
                          SOC 1 Certification in Yemen
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-yemen">
                          SOC 2 Certification in Yemen
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              HIPAA implementation helps these organizations operate securely
              while enabling cross-border healthcare collaborations.
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
                Key Advantages of HIPAA Certification in Yemen
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
                HIPAA Certification in Yemen – 
                <span style={{ color: "black" }}> First Cert</span>
              </h2>
              <p className="text-center section-sub mb-5">
                <a href="/">First Cert</a> follows a practical and clearly defined HIPAA
                compliance methodology:
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
          HIPAA Certification Cost in Yemen?
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
                  The cost of HIPAA Certification in Yemen varies based on
                  organizational scope and complexity. Pricing typically depends
                  on:
                </div>

                <ul className="features">
                  <li className="check">Number of employees</li>
                  <li className="check">Volume and sensitivity of PHI</li>
                  <li className="check">
                    IT infrastructure and system architecture
                  </li>
                  <li className="check">Existing security maturity</li>
                  <li className="check">Documentation and training needs</li>
                </ul>

                <div className="title small-title">
                  First Cert provides customized, transparent pricing after an
                  initial compliance assessment.
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
                  Get HIPAA Certification in Yemen with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted HIPAA consulting partner for
                  organizations in Yemen seeking reliable healthcare data
                  compliance. We help healthcare and IT companies implement
                  effective HIPAA frameworks that align with U.S. regulatory
                  expectations and global security standards.
                </div>

                <div className="title small-title">
                  Our experienced consultants deliver practical guidance,
                  accurate documentation, and continuous support to ensure
                  sustainable compliance and secure healthcare operations.
                </div>
                <div className="title small-title-p">
                  📧 Contact us: info@firstcertification.com Start your HIPAA
                  Certification journey in Yemen with First Cert and demonstrate
                  strong commitment to healthcare data privacy, security, and
                  international compliance.
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

export default YemenHipaa;
