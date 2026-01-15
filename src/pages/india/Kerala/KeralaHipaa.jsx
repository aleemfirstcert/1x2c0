import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imghipaa from "../../../assets/img/country/india/kerala/hipaa-img.webp";
import benefitshipaa from "../../../assets/img/country/india/kerala/hipaa-benefits.webp";
import bgimg from "../../../assets/img/services/card-hipaa.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function KeralaHipaa() {
  const benefits = [
    "Reduced risk of data breaches and penalties",
    "Better control over patient and clinical information",
    "Increased trust from healthcare customers and regulators",
    "Improved employee awareness of privacy obligations",
    "Stronger reputation in international healthcare markets",
    "Long-term stability in regulatory compliance",
  ];

  const industryData = [
    {
      icon: "bi-hospital",
      title: "Hospitals, clinics, and diagnostic facilities",
    },
    {
      icon: "bi-telephone-plus",
      title: "Digital health and telemedicine providers",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Medical billing and healthcare BPOs",
    },
    {
      icon: "bi-clipboard-pulse",
      title: "Clinical research and laboratory services",
    },
    {
      icon: "bi-capsule-pill",
      title: "Pharmaceutical and life sciences companies",
    },
    {
      icon: "bi-cloud-check",
      title: "Cloud and SaaS providers serving healthcare clients",
    },
    {
      icon: "bi-headset",
      title: "Healthcare outsourcing and IT service firms",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "PHI Mapping",
      description: "Identify where PHI is collected, stored, and transmitted",
    },
    {
      number: "2",
      title: "Risk Evaluation",
      description: "Perform privacy and security risk assessments",
    },
    {
      number: "3",
      title: "Policy Framework",
      description: "Develop HIPAA-aligned policies and procedures",
    },
    {
      number: "4",
      title: "Safeguard Implementation",
      description: "Deploy technical and organizational security controls",
    },
    {
      number: "5",
      title: "Staff Training",
      description: "Train employees on HIPAA roles and responsibilities",
    },
    {
      number: "6",
      title: "Compliance Review",
      description: "Validate compliance through internal assessments",
    },
    {
      number: "7",
      title: "Ongoing Support",
      description: "Provide guidance for ongoing regulatory alignment",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          HIPAA Certification in Kerala | Healthcare Privacy & Compliance –
          First Cert
        </title>
        <meta
          name="description"
          content="HIPAA Certification in Kerala by First Cert helps organizations protect PHI through risk analysis, secure controls, policy development, and audit-ready compliance programs."
        />
        <meta
          name="keywords"
          content="HIPAA Certification in Kerala, HIPAA consultants Kerala, HIPAA compliance Kerala, HIPAA audit Kerala, HIPAA implementation Kerala, HIPAA certification cost Kerala, healthcare data protection Kerala, PHI security Kerala, HIPAA privacy rule Kerala, HIPAA security rule Kerala, First Cert HIPAA Kerala, healthcare IT compliance Kerala, HIPAA for IT companies Kerala"
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
          <h1 className="main-title">HIPAA Certification in Kerala</h1>
          <p className="small-desc">Safeguarding Healthcare Information</p>
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
                alt="HIPAA Certification in Kerala"
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
                <b>HIPAA Certification in Kerala</b> enables organizations that
                manage U.S. healthcare data to meet strict privacy and security
                obligations. With Kerala expanding in healthcare IT services,
                telemedicine platforms, clinical research, medical coding, and
                cloud-based health systems, regulatory compliance is critical
                for working with U.S. providers and insurers.
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
                <b>First Cert</b> helps Kerala-based organizations build HIPAA
                programs that align technology, people, and processes to protect
                sensitive healthcare information in real business environments.
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
            What HIPAA Certification in Kerala Demonstrates
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>HIPAA Certification in Kerala</b> confirms that an organization
            follows the U.S. Health Insurance Portability and Accountability Act
            when handling Protected Health Information. It ensures patient
            records, clinical data, and billing information are secured against
            unauthorized access, loss, and misuse.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A compliant HIPAA framework includes:
          </p>

          <ul className="iso-list">
            {[
              "Defined ownership for healthcare data handling",
              "Secure access management and data storage controls",
              "Administrative, technical, and physical safeguards",
              "Incident detection and breach response procedures",
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
            Certification shows that healthcare data is managed responsibly and
            securely.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Requires HIPAA Compliance in Kerala
              </h2>

              <p className="text-center section-sub mb-5">
                HIPAA Certification in Kerala is essential for organizations
                involved in U.S. healthcare data processing, such as:
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
                        <a href="iso-9001-certification-in-kerala">
                          ISO 9001 Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-kerala">
                          ISO 27001 Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-kerala">
                          CMMI Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-kerala">
                          HIPAA Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-kerala">
                          VAPT Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-kerala">
                          GDPR Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-kerala">
                          SOC 1 Certification in Kerala
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-kerala">
                          SOC 2 Certification in Kerala
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              HIPAA compliance allows Kerala organizations to confidently serve
              U.S. healthcare partners.
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
                Benefits of HIPAA Certification in Kerala
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve HIPAA Certification in Kerala gain:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitshipaa}
                alt="HIPAA Benefits in Kerala"
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
             <p
                className="text-center section-sub"
                style={{
                  color: "#000000",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  fontWeight: "400",
                }}
              >
                HIPAA strengthens both data protection and business credibility.
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
                First Cert's HIPAA Implementation Framework in Kerala
              </h2>
              <p className="text-center section-sub mb-5">
                First Cert delivers HIPAA consulting in Kerala through a
                practical, end-to-end approach:
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
          HIPAA Certification Cost in Kerala
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
                  The cost of HIPAA Certification in Kerala varies based on:
                </div>

                <ul className="features">
                  <li className="check">
                    Organizational size and service complexity
                  </li>
                  <li className="check">Volume of healthcare data processed</li>
                  <li className="check">Existing IT security maturity</li>
                  <li className="check">Technology infrastructure in use</li>
                  <li className="check">
                    Training and documentation requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts a readiness assessment to deliver a
                  transparent and tailored cost plan.
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
                  Get HIPAA Certified in Kerala with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted HIPAA consulting partner in Kerala,
                  helping healthcare providers, IT firms, and outsourcing
                  companies meet U.S. healthcare compliance standards. Our
                  experts integrate HIPAA safeguards into everyday operations to
                  ensure real protection and audit readiness.
                </div>

                <div className="title small-title">
                  From risk assessment to ongoing compliance management, First
                  Cert enables Kerala organizations to safeguard patient
                  information and build lasting trust with U.S. healthcare
                  partners.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your HIPAA Certification journey in Kerala with First
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

export default KeralaHipaa;
