import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imghipaa from "../../../assets/img/country/asia/maldives/hipaa-img.webp";
import benefitshipaa from "../../../assets/img/country/asia/maldives/hipaa-benefits.webp";
import bgimg from "../../../assets/img/services/card-hipaa.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function ChennaiHipaa() {
  const benefits = [
    "Reduced risk of healthcare data breaches",
    "Improved control over patient and clinical information",
    "Stronger trust from U.S. healthcare customers",
    "Better employee awareness of privacy obligations",
    "Higher credibility in global healthcare markets",
    "Long-term regulatory and operational stability",
  ];

  const industryData = [
    {
      icon: "bi-hospital",
      title: "Hospitals, clinics, and diagnostic centers",
    },
    {
      icon: "bi-telephone-plus",
      title: "Telemedicine and digital healthcare providers",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Medical billing and revenue cycle management companies",
    },
    {
      icon: "bi-clipboard-pulse",
      title: "Clinical research and laboratory organizations",
    },
    {
      icon: "bi-capsule-pill",
      title: "Pharmaceutical and life science firms",
    },
    {
      icon: "bi-cloud-check",
      title: "Healthcare IT, SaaS, and cloud service providers",
    },
    {
      icon: "bi-headset",
      title: "Outsourcing companies serving U.S. healthcare clients",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "PHI Identification",
      description: "Identify where PHI is created, stored, and shared",
    },
    {
      number: "2",
      title: "Risk Analysis",
      description: "Privacy and security risk analysis",
    },
    {
      number: "3",
      title: "Policy Framework",
      description: "Development of HIPAA-compliant policies and procedures",
    },
    {
      number: "4",
      title: "Safeguard Deployment",
      description:
        "Deployment of technical, administrative, and physical safeguards",
    },
    {
      number: "5",
      title: "Employee Training",
      description: "Training of employees on HIPAA responsibilities",
    },
    {
      number: "6",
      title: "Compliance Validation",
      description: "Validation of compliance through internal reviews",
    },
    {
      number: "7",
      title: "Ongoing Support",
      description: "Ongoing guidance to maintain regulatory alignment",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          HIPAA Certification in Chennai | Healthcare Data Consulting – First
          Cert
        </title>
        <meta
          name="description"
          content="Achieve HIPAA Certification in Chennai with First Cert. We deliver risk assessments, PHI security controls, compliance documentation, and audit-ready HIPAA frameworks."
        />
        <meta
          name="keywords"
          content="HIPAA Certification in Chennai, HIPAA consultants Chennai, HIPAA compliance Chennai, HIPAA audit Chennai, HIPAA implementation Chennai, HIPAA certification cost Chennai, healthcare data protection Chennai, PHI security Chennai, HIPAA privacy rule Chennai, HIPAA security rule Chennai, First Cert HIPAA Chennai, healthcare IT compliance Chennai, HIPAA for IT companies Chennai"
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
          <h1 className="main-title">HIPAA Certification in Chennai</h1>
          <p className="small-desc">
            Protecting Healthcare Data with Global Compliance
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
                alt="HIPAA Certification in Chennai"
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
                <b>HIPAA Certification in Chennai</b> helps organizations that
                handle U.S. healthcare information operate within strict privacy
                and security requirements. As Chennai continues to grow as a
                major center for healthcare IT, medical billing, telehealth
                platforms, research services, and cloud-based healthcare
                solutions, meeting HIPAA expectations has become essential for
                working with U.S. healthcare providers and insurers.
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
                <b>First Cert</b> supports Chennai-based organizations by
                building HIPAA programs that are practical, compliant, and
                aligned with real operational needs.
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
            What HIPAA Certification in Chennai Confirms
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>HIPAA Certification in Chennai</b> verifies that an organization
            follows the rules of the U.S. Health Insurance Portability and
            Accountability Act when managing Protected Health Information. It
            ensures that patient and clinical data is secured against
            unauthorized access, misuse, and loss through structured policies,
            technology controls, and operational procedures.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A HIPAA-aligned organization demonstrates:
          </p>

          <ul className="iso-list">
            {[
              "Clear responsibility for healthcare data handling",
              "Controlled access to systems and patient records",
              "Secure IT infrastructure and physical environments",
              "Documented incident and breach response procedures",
              "Continuous monitoring of privacy and security risks",
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
            This ensures healthcare data remains confidential, accurate, and
            protected at every stage.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Needs HIPAA Compliance in Chennai
              </h2>

              <p className="text-center section-sub mb-5">
                HIPAA Certification in Chennai is required for any organization
                that stores, processes, or transmits U.S. healthcare data,
                including:
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
                        <a href="iso-9001-certification-in-chennai">
                          ISO 9001 Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-chennai">
                          ISO 27001 Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-chennai">
                          CMMI Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-chennai">
                          HIPAA Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-chennai">
                          VAPT Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-chennai">
                          GDPR Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-chennai">
                          SOC 1 Certification in Chennai
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-chennai">
                          SOC 2 Certification in Chennai
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              HIPAA compliance enables Chennai organizations to confidently
              partner with U.S. healthcare institutions.
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
                Business Benefits of HIPAA Certification in Chennai
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve HIPAA Certification in Chennai
                benefit from:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitshipaa}
                alt="HIPAA Benefits in Chennai"
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
              <p
                className="text-center section-sub mb-5"
                style={{
                  color: "#000000",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  fontWeight: "400",
                }}
              >
                Long-term regulatory and operational stability
                <br />
                HIPAA compliance supports safe growth and sustainable healthcare
                operations.
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
                First Cert's HIPAA Consulting Approach in Chennai
              </h2>
              <p className="text-center section-sub mb-5">
                First Cert follows a structured HIPAA implementation model
                designed for Chennai organizations:
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
          HIPAA Certification Cost in Chennai
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
                  The cost of HIPAA Certification in Chennai depends on factors
                  such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Organizational size and service complexity
                  </li>
                  <li className="check">Volume of healthcare data handled</li>
                  <li className="check">IT systems in use</li>
                  <li className="check">Existing security maturity</li>
                  <li className="check">
                    Level of training and documentation required
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts a detailed readiness assessment to provide
                  a clear and customized cost plan.
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
                  Get HIPAA Certified in Chennai with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted HIPAA consulting partner in Chennai,
                  helping healthcare providers, IT companies, and outsourcing
                  firms meet U.S. healthcare compliance standards. Our experts
                  integrate HIPAA controls into everyday operations to ensure
                  real data protection and regulatory confidence.
                </div>

                <div className="title small-title">
                  From initial risk assessment to ongoing compliance management,
                  First Cert enables Chennai organizations to safeguard patient
                  information and build lasting trust with U.S. healthcare
                  partners.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your HIPAA Certification journey in Chennai with First
                  Cert and demonstrate your commitment to healthcare data
                  privacy, security, and global compliance.
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

export default ChennaiHipaa;
