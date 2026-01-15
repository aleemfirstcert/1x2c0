import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imghipaa from "../../../assets/img/country/middle-east/iraq/hipaa-img.webp";
import benefitshipaa from "../../../assets/img/country/middle-east/iraq/hipaa-benefits.webp";
import bgimg from "../../../assets/img/services/card-hipaa.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function IraqHipaa() {
  const benefits = [
    "Lower likelihood of data breaches, regulatory penalties, and contract risks",
    "Clear governance and control over sensitive healthcare information",
    "Increased confidence from U.S. healthcare partners and auditors",
    "Improved employee awareness of privacy and security responsibilities",
    "Stronger positioning as a reliable healthcare data service provider",
  ];

  const industryData = [
    {
      icon: "bi-hospital",
      title: "Hospitals, clinics, and healthcare service providers",
    },
    {
      icon: "bi-telephone-plus",
      title: "Telehealth platforms and digital healthcare solution companies",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Medical billing, coding, and revenue cycle management providers",
    },
    {
      icon: "bi-clipboard-pulse",
      title: "Clinical research organizations and diagnostic service firms",
    },
    {
      icon: "bi-capsule-pill",
      title: "Pharmaceutical, biotechnology, and life sciences companies",
    },
    {
      icon: "bi-cloud-check",
      title:
        "IT service providers, SaaS platforms, and cloud vendors serving healthcare clients",
    },
    {
      icon: "bi-headset",
      title: "Healthcare outsourcing and shared service centers",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "PHI Discovery & Scoping",
      description: "Identify healthcare data flows, systems, and access points",
    },
    {
      number: "2",
      title: "Risk & Gap Analysis",
      description: "Assess administrative, technical, and physical safeguards",
    },
    {
      number: "3",
      title: "Policy & Documentation Development",
      description: "Establish HIPAA-aligned privacy and security frameworks",
    },
    {
      number: "4",
      title: "Control Deployment",
      description: "Implement technical, procedural, and physical safeguards",
    },
    {
      number: "5",
      title: "Workforce Enablement",
      description:
        "Deliver role-specific HIPAA training and awareness programs",
    },
    {
      number: "6",
      title: "Compliance Validation",
      description: "Test control effectiveness and close identified gaps",
    },
    {
      number: "7",
      title: "Ongoing Advisory",
      description: "Support continuous monitoring and regulatory updates",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          HIPAA Certification in Iraq | Healthcare Data Privacy & Compliance
          Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Looking to meet HIPAA requirements in Iraq? First Cert provides comprehensive HIPAA consulting services, including PHI risk evaluation, security control deployment, compliance documentation, and workforce training to help organizations securely handle U.S. healthcare data and meet international regulatory standards."
        />
        <meta
          name="keywords"
          content="HIPAA Certification in Iraq, HIPAA consultants Iraq, HIPAA compliance Iraq, HIPAA audit Iraq, HIPAA implementation Iraq, HIPAA certification cost Iraq, healthcare data protection Iraq, PHI compliance Iraq, HIPAA privacy rule Iraq, HIPAA security rule Iraq, First Cert HIPAA Iraq, healthcare IT compliance Iraq, HIPAA for IT companies Iraq"
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
          <h1 className="main-title">HIPAA Certification in Iraq</h1>
          <p className="small-desc">
            Protecting Healthcare Information with Confidence
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
                alt="HIPAA Certification in Iraq"
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
                <b>HIPAA Certification in Iraq</b> supports organizations that
                store, process, or transmit U.S. healthcare information by
                establishing strong privacy, security, and accountability
                frameworks. As Iraq expands its healthcare services, digital
                health platforms, medical research operations, and healthcare
                outsourcing capabilities, HIPAA compliance has become a critical
                requirement for working with U.S.-based healthcare entities and
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
                <b>First Cert</b> works with organizations across Iraq to design
                HIPAA compliance programs that focus on real risk reduction and
                operational effectiveness. Our approach emphasizes practical
                safeguards, accountability, and continuous compliance rather
                than policy-only implementation.
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
            Scope of HIPAA Certification in Iraq
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>HIPAA Certification in Iraq</b> involves aligning organizational
            practices with the U.S. Health Insurance Portability and
            Accountability Act to ensure the protection of Protected Health
            Information (PHI) throughout its lifecycle. The objective is to
            maintain confidentiality, integrity, and availability across people,
            processes, and technology.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A complete HIPAA compliance program typically includes:
          </p>

          <ul className="iso-list">
            {[
              "Defined administrative ownership and governance for PHI protection",
              "Technical safeguards such as authentication controls, encryption, and audit logging",
              "Physical security measures for offices, devices, and data environments",
              "Incident response procedures, breach handling, and notification readiness",
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
            HIPAA compliance demonstrates that Iraq-based organizations can
            manage healthcare data in line with strict international privacy
            expectations.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations in Iraq That Need HIPAA Compliance
              </h2>

              <p className="text-center section-sub mb-5">
                HIPAA Certification in Iraq is essential for organizations
                involved in handling U.S. healthcare data, including:
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
                        <a href="iso-9001-certification-in-iraq">
                          ISO 9001 Certification in Iraq
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-iraq">
                          ISO 27001 Certification in Iraq
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-iraq">
                          CMMI Certification in Iraq
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-iraq">
                          HIPAA Certification in Iraq
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-iraq">
                          VAPT Certification in Iraq
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-iraq">
                          GDPR Certification in Iraq
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-iraq">
                          SOC 1 Certification in Iraq
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-iraq">
                          SOC 2 Certification in Iraq
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              HIPAA compliance enables Iraqi organizations to build trust and
              collaborate securely with global healthcare stakeholders.
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
                Business Benefits of HIPAA Certification in Iraq
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve HIPAA Certification in Iraq gain
                important operational and strategic advantages, such as:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitshipaa}
                alt="HIPAA Benefits in Iraq"
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
              HIPAA compliance strengthens regulatory readiness while supporting
              long-term business sustainability.
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
                First Cert's HIPAA Compliance Approach in Iraq
              </h2>
              <p className="text-center section-sub mb-5">
                First Cert follows a structured, risk-focused HIPAA
                implementation methodology designed for organizations operating
                in Iraq:
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
          HIPAA Certification Cost in Iraq
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
                  The cost of HIPAA Certification in Iraq depends on several
                  factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and internal structure
                  </li>
                  <li className="check">
                    Nature and volume of healthcare data processed
                  </li>
                  <li className="check">
                    Complexity of IT systems and cloud environments
                  </li>
                  <li className="check">
                    Existing privacy and information security maturity
                  </li>
                  <li className="check">
                    Scope of training, documentation, and ongoing compliance
                    support
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with an initial readiness assessment to
                  provide a clear, customized, and transparent cost estimate
                  aligned with your compliance objectives.
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
                  Get HIPAA Certified in Iraq with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted HIPAA consulting partner in Iraq,
                  supporting healthcare organizations, technology providers, and
                  outsourcing firms with practical, audit-ready compliance
                  solutions. Our consultants integrate HIPAA requirements into
                  daily business operations to ensure lasting compliance value.
                </div>

                <div className="title small-title">
                  From early-stage assessments to continuous compliance
                  management, First Cert ensures your HIPAA journey in Iraq is
                  efficient, secure, and globally aligned.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your HIPAA Certification journey in Iraq with First Cert
                  and demonstrate a strong commitment to healthcare data
                  privacy, security excellence, and international regulatory
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

export default IraqHipaa;
