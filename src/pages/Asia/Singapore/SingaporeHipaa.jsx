import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imghipaa from "../../../assets/img/country/asia/singapore/hipaa-img.webp";
import benefitshipaa from "../../../assets/img/country/asia/singapore/hipaa-benefits.webp";
import bgimg from "../../../assets/img/services/card-hipaa.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function SingaporeHipaa() {
  const benefits = [
    "Stronger PHI Safeguards – Stronger safeguards for sensitive patient information",
    "Reduced Regulatory & Legal Risk – Reduced exposure to regulatory penalties and legal risks",
    "U.S. Healthcare Eligibility – Eligibility to work with U.S.-based healthcare clients",
    "Improved Security Awareness – Improved internal security awareness and accountability",
    "Enhanced Partner Trust – Enhanced trust among healthcare partners and stakeholders",
  ];

  const hipaaData = [
    {
      icon: "bi-hospital",
      title: "Hospitals, specialty clinics, and healthcare service providers",
    },
    {
      icon: "bi-telephone-plus",
      title: "Telemedicine platforms and digital health solution providers",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Medical billing, revenue cycle, and claims processing companies",
    },
    {
      icon: "bi-clipboard-pulse",
      title: "Diagnostic labs and clinical research organizations",
    },
    {
      icon: "bi-capsule-pill",
      title: "Pharmaceutical, biotech, and life sciences firms",
    },
    {
      icon: "bi-cloud-check",
      title:
        "IT, SaaS, and cloud service providers supporting healthcare systems",
    },
    {
      icon: "bi-headset",
      title: "Healthcare outsourcing and shared service centers",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Data Scope Assessment",
      description: "Identify PHI sources, systems, and workflows.",
    },
    {
      number: "2",
      title: "Risk Evaluation",
      description:
        "Analyze administrative, technical, and physical vulnerabilities.",
    },
    {
      number: "3",
      title: "Compliance Documentation",
      description:
        "Develop privacy policies, security procedures, and records.",
    },
    {
      number: "4",
      title: "Safeguard Deployment",
      description:
        "Implement controls for access, monitoring, and data protection.",
    },
    {
      number: "5",
      title: "Employee Enablement",
      description: "Deliver role-based HIPAA training programs.",
    },
    {
      number: "6",
      title: "Readiness Validation",
      description: "Verify compliance effectiveness and close gaps.",
    },
    {
      number: "7",
      title: "Continuous Support",
      description: "Ongoing guidance to maintain compliance maturity.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          HIPAA Certification in Singapore | Trusted HIPAA Compliance Advisory –
          First Cert
        </title>
        <meta
          name="description"
          content="Looking for HIPAA Certification in Singapore? First Cert provides comprehensive HIPAA compliance consulting, security assessments, policy development, and staff training to help organizations securely manage U.S. healthcare data."
        />
        <meta
          name="keywords"
          content="HIPAA Certification in Singapore, HIPAA consultants in Singapore, HIPAA compliance cost Singapore, HIPAA implementation in Singapore, HIPAA certification process Singapore, HIPAA compliance services Singapore, HIPAA security rule Singapore, HIPAA privacy rule Singapore, HIPAA audit Singapore, HIPAA documentation Singapore, healthcare compliance Singapore, medical data protection Singapore, First Cert HIPAA consultants, HIPAA consulting company Singapore, HIPAA certification for hospitals Singapore, HIPAA certification for IT companies Singapore, HIPAA compliance for healthcare startups Singapore."
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
          <h1 className="main-title">HIPAA Certification in Singapore</h1>
          <p className="small-desc">
            Enabling Secure Healthcare Data Operations
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
                <b>HIPAA Certification in Singapore</b> helps organizations
                handling U.S. healthcare information meet strict federal data
                protection expectations. With Singapore being a global hub for
                health technology, clinical research, and healthcare
                outsourcing, organizations must ensure that patient data is
                handled securely, lawfully, and transparently.
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
                <b>First Cert</b> supports organizations in Singapore by
                designing HIPAA compliance programs that integrate security,
                governance, and operational best practices. Our solutions focus
                on real-world risk reduction and sustainable compliance rather
                than checklist-based implementation.
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
            What Does HIPAA Certification Mean in Singapore?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>HIPAA Certification in Singapore</b> involves aligning
            organizational controls with the requirements of the U.S. Health
            Insurance Portability and Accountability Act. The objective is to
            safeguard Protected Health Information (PHI) across people,
            processes, and technology. HIPAA compliance frameworks typically
            address:
          </p>

          <ul className="iso-list">
            {[
              "Administrative oversight and accountability for healthcare data",
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
            Organizations in Singapore that support U.S. healthcare operations
            rely on HIPAA compliance to demonstrate responsible data stewardship
            and contractual reliability.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Needs HIPAA Certification in Singapore?
              </h2>

              <p className="text-center section-sub mb-5">
                HIPAA compliance is critical for Singapore-based organizations
                that create, store, access, or transmit U.S. patient data, such
                as:
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
                        <a href="iso-9001-certification-in-singapore">
                          ISO 9001 Certification in Singapore
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-singapore">
                          ISO 27001 Certification in Singapore
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-singapore">
                          CMMI Certification in Singapore
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-singapore">
                          HIPAA Certification in Singapore
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-singapore">
                          VAPT Certification in Singapore
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-singapore">
                          GDPR Certification in Singapore
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-singapore">
                          SOC 1 Certification in Singapore
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-singapore">
                          SOC 2 Certification in Singapore
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              HIPAA implementation enables these organizations to support
              international healthcare engagements while maintaining high data
              protection standards.
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
                Key Business Benefits of HIPAA Certification in Singapore
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving HIPAA Certification in Singapore benefit
                from both compliance and business growth perspectives.
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
              HIPAA compliance positions organizations as dependable
              contributors to the global healthcare ecosystem.
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
                HIPAA Certification Process in Singapore with –
                <span style={{ color: "black" }}> First Cert</span>
              </h2>
              <p className="text-center section-sub mb-5">
                <a href="/">First Cert</a> follows a structured and practical
                HIPAA compliance methodology:
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
          HIPAA Certification Cost in Singapore?
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
                  The cost of HIPAA Certification in Singapore varies based on
                  organizational complexity, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Number of employees and operational units
                  </li>
                  <li className="check">
                    Volume and criticality of healthcare data handled
                  </li>
                  <li className="check">
                    IT environment and cloud infrastructure
                  </li>
                  <li className="check">
                    Existing security controls and compliance maturity
                  </li>
                  <li className="check">Training and documentation scope</li>
                </ul>

                <div className="title small-title">
                  First Cert provides a clear and customized cost structure
                  after conducting an initial compliance assessment.
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
                  Get HIPAA Certification in Singapore with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted HIPAA consulting partner in the
                  Singapore, helping healthcare and technology organizations
                  implement effective compliance frameworks aligned with U.S.
                  regulatory requirements. Our experienced consultants focus on
                  practical controls, accurate documentation, and audit-ready
                  systems that support long-term compliance.
                </div>

                <div className="title small-title">
                  From initial assessment to ongoing compliance management,
                  First Cert ensures a smooth HIPAA certification journey with
                  measurable security outcomes.
                </div>
                <div className="title small-title-p">
                  📧 Contact us: info@firstcertification.com Start your HIPAA
                  Certification journey in the Singapore with First Cert and
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

export default SingaporeHipaa;
