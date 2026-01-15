import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imghipaa from "../../../assets/img/country/africa/mauritius/hipaa-img.webp";
import benefitshipaa from "../../../assets/img/country/africa/mauritius/hipaa-benefits.webp";
import bgimg from "../../../assets/img/services/card-hipaa.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function MauritiusHipaa() {
  const benefits = [
    "Reduced exposure to data breaches and regulatory penalties",
    "Improved visibility and control over sensitive health data",
    "Stronger trust from U.S. healthcare clients and auditors",
    "Better staff awareness and accountability for data protection",
    "Enhanced credibility as a secure healthcare service provider",
  ];

  const industryData = [
    {
      icon: "bi-hospital",
      title: "Hospitals, clinics, and healthcare providers",
    },
    {
      icon: "bi-telephone-plus",
      title: "Telehealth and digital healthcare platforms",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Medical billing, coding, and revenue cycle firms",
    },
    {
      icon: "bi-clipboard-pulse",
      title: "Clinical research organizations and laboratories",
    },
    {
      icon: "bi-capsule-pill",
      title: "Pharmaceutical, biotech, and life science companies",
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
      title: "PHI Mapping",
      description: "Identify where healthcare data is stored and processed",
    },
    {
      number: "2",
      title: "Risk Assessment",
      description:
        "Evaluate gaps in administrative, technical, and physical safeguards",
    },
    {
      number: "3",
      title: "Policy Development",
      description: "Create HIPAA-aligned privacy and security documentation",
    },
    {
      number: "4",
      title: "Control Deployment",
      description: "Implement security and compliance controls",
    },
    {
      number: "5",
      title: "Training",
      description: "Deliver role-based HIPAA education for employees",
    },
    {
      number: "6",
      title: "Validation",
      description: "Test controls and close compliance gaps",
    },
    {
      number: "7",
      title: "Ongoing Support",
      description: "Monitor compliance and regulatory updates",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          HIPAA Certification in Mauritius | Healthcare Data Security &
          Regulatory Compliance – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve HIPAA Certification in Mauritius? First Cert provides expert HIPAA compliance services, including PHI risk analysis, privacy and security program development, safeguard deployment, and workforce training to help organizations manage U.S. healthcare data securely and meet international regulatory standards."
        />
        <meta
          name="keywords"
          content="HIPAA Certification in Mauritius, HIPAA consultants Mauritius, HIPAA compliance Mauritius, HIPAA audit Mauritius, HIPAA implementation Mauritius, HIPAA certification cost Mauritius, healthcare data protection Mauritius, PHI security Mauritius, HIPAA privacy rule Mauritius, HIPAA security rule Mauritius, First Cert HIPAA Mauritius, healthcare IT compliance Mauritius, HIPAA for IT companies Mauritius"
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
          <h1 className="main-title">HIPAA Certification in Mauritius</h1>
          <p className="small-desc">
            Protecting Sensitive Healthcare Information
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
                alt="HIPAA Certification in Mauritius"
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
                <b>HIPAA Certification in Mauritius</b> enables organizations
                that work with U.S. healthcare data to implement strong privacy,
                security, and accountability controls. As telemedicine
                platforms, digital health solutions, medical research, and
                healthcare outsourcing continue to grow in Mauritius, HIPAA
                compliance has become a critical requirement for working with
                U.S. hospitals, insurers, and healthcare technology partners.
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
                <b>First Cert</b> supports organizations in Mauritius by
                building HIPAA programs that focus on real operational risks and
                long-term security rather than documentation alone.
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
            What HIPAA Certification in Mauritius Covers
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>HIPAA Certification in Mauritius</b> ensures that an organization
            follows the U.S. Health Insurance Portability and Accountability Act
            when handling Protected Health Information (PHI). Compliance focuses
            on safeguarding the confidentiality, integrity, and availability of
            healthcare data through administrative, technical, and physical
            protections.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A strong HIPAA program typically includes:
          </p>

          <ul className="iso-list">
            {[
              "Defined ownership and accountability for PHI management",
              "Secure access controls, encryption, and activity monitoring",
              "Protection of facilities, devices, and IT infrastructure",
              "Breach response planning and notification readiness",
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
            HIPAA certification confirms that healthcare data is managed
            according to strict international security and privacy standards.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Needs HIPAA Compliance in Mauritius
              </h2>

              <p className="text-center section-sub mb-5">
                HIPAA Certification in Mauritius is required for organizations
                that create, store, process, or transmit U.S. healthcare
                information, such as:
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
                        <a href="iso-9001-certification-in-mauritius">
                          ISO 9001 Certification in Mauritius
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-mauritius">
                          ISO 27001 Certification in Mauritius
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-mauritius">
                          CMMI Certification in Mauritius
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-mauritius">
                          HIPAA Certification in Mauritius
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-mauritius">
                          VAPT Certification in Mauritius
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-mauritius">
                          GDPR Certification in Mauritius
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-mauritius">
                          SOC 1 Certification in Mauritius
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-mauritius">
                          SOC 2 Certification in Mauritius
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              HIPAA compliance allows organizations in Mauritius to operate
              confidently within the global healthcare ecosystem.
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
                Business Benefits of HIPAA Certification in Mauritius
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that obtain HIPAA Certification in Mauritius gain
                multiple strategic and operational advantages:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitshipaa}
                alt="HIPAA Benefits in Mauritius"
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
              HIPAA compliance supports both regulatory confidence and long-term
              business sustainability.
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
                First Cert's HIPAA Implementation Approach in Mauritius
              </h2>
              <p className="text-center section-sub mb-5">
                First Cert follows a structured, risk-based HIPAA consulting
                framework for organizations in Mauritius:
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
          HIPAA Certification Cost in Mauritius
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
                  The cost of HIPAA Certification in Mauritius depends on
                  factors such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Size and complexity of the organization
                  </li>
                  <li className="check">
                    Volume and sensitivity of healthcare data handled
                  </li>
                  <li className="check">
                    Scope of IT systems and cloud environments
                  </li>
                  <li className="check">
                    Existing maturity of privacy and security controls
                  </li>
                  <li className="check">
                    Training, documentation, and ongoing compliance needs
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a readiness assessment to provide a
                  clear, tailored cost estimate aligned with your compliance
                  goals.
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
                  Get HIPAA Certified in Mauritius with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted HIPAA consulting partner in Mauritius,
                  supporting healthcare providers, technology firms, and
                  outsourcing companies with practical, audit-ready compliance
                  solutions. Our experts integrate HIPAA controls into daily
                  operations to ensure long-term effectiveness and data
                  protection.
                </div>

                <div className="title small-title">
                  From initial risk evaluation to continuous compliance
                  management, First Cert helps organizations in Mauritius
                  protect healthcare information, meet international regulatory
                  requirements, and build lasting trust with global healthcare
                  partners.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your HIPAA Certification journey in Mauritius with First
                  Cert and demonstrate a strong commitment to healthcare data
                  privacy, security, and internationally recognized compliance
                  standards.
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

export default MauritiusHipaa;
