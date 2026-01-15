import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imghipaa from "../../../assets/img/country/middle-east/oman/hipaa-img.webp";
import benefitshipaa from "../../../assets/img/country/middle-east/oman/hipaa-benefits.webp";
import bgimg from "../../../assets/img/services/card-hipaa.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function OmanHipaa() {
  const benefits = [
    "Lower risk of data breaches, penalties, and contractual violations",
    "Structured control and governance over sensitive health information",
    "Increased trust from U.S.-based healthcare clients and regulators",
    "Improved workforce awareness of privacy and security responsibilities",
    "Enhanced reputation as a dependable healthcare data partner",
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
      title: "Medical billing, coding, and revenue cycle management firms",
    },
    {
      icon: "bi-clipboard-pulse",
      title: "Clinical research organizations and diagnostic service providers",
    },
    {
      icon: "bi-capsule-pill",
      title: "Pharmaceutical, biotech, and life sciences companies",
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
      title: "Data Discovery & Scoping",
      description: "Identify PHI flows, systems, and access points",
    },
    {
      number: "2",
      title: "Risk & Gap Assessment",
      description:
        "Evaluate administrative, technical, and physical safeguards",
    },
    {
      number: "3",
      title: "Policy & Documentation Development",
      description: "Establish HIPAA-aligned privacy and security frameworks",
    },
    {
      number: "4",
      title: "Control Implementation",
      description:
        "Apply technical, procedural, and physical security measures",
    },
    {
      number: "5",
      title: "Staff Training",
      description:
        "Deliver role-specific HIPAA awareness and compliance education",
    },
    {
      number: "6",
      title: "Compliance Validation",
      description: "Test safeguards and address identified gaps",
    },
    {
      number: "7",
      title: "Ongoing Advisory",
      description:
        "Support continuous compliance monitoring and regulatory updates",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          HIPAA Certification in Oman | Expert HIPAA Compliance & Data Privacy
          Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Need HIPAA compliance assistance in Oman? First Cert provides comprehensive HIPAA advisory services, including privacy risk analysis, security control deployment, compliance documentation, and workforce training to help organizations safely handle U.S. healthcare data and meet international regulatory standards."
        />
        <meta
          name="keywords"
          content="HIPAA Certification in Oman, HIPAA consultants Oman, HIPAA compliance Oman, HIPAA audit Oman, HIPAA implementation Oman, HIPAA certification cost Oman, healthcare data protection Oman, PHI compliance Oman, HIPAA privacy rule Oman, HIPAA security rule Oman, First Cert HIPAA Oman, healthcare IT compliance Oman, HIPAA for IT companies Oman"
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
          <h1 className="main-title">HIPAA Certification in Oman</h1>
          <p className="small-desc">
            Enabling Secure Global Healthcare Data Operations
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
                alt="HIPAA Certification in Oman"
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
                <b>HIPAA Certification in Oman</b> supports organizations that
                manage or process U.S. healthcare information by establishing
                robust privacy, security, and compliance controls aligned with
                international healthcare regulations. As Oman continues to
                strengthen its role in healthcare services, health IT, and
                cross-border data operations, HIPAA compliance has become
                essential for protecting patient information and maintaining
                global credibility.
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
                <b>First Cert</b> collaborates with organizations across Oman to
                design HIPAA-compliant programs that are practical,
                risk-oriented, and adaptable to business operations. Our focus
                is on real-world data protection and accountability rather than
                policy-driven or theoretical compliance.
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
            Scope of HIPAA Certification in Oman
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>HIPAA Certification in Oman</b> involves aligning organizational
            practices with the requirements of the U.S. Health Insurance
            Portability and Accountability Act. The primary objective is to
            ensure the confidentiality, integrity, and availability of Protected
            Health Information (PHI) across systems, people, and processes.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A complete HIPAA compliance framework typically includes:
          </p>

          <ul className="iso-list">
            {[
              "Clear administrative ownership and governance for PHI protection",
              "Technical safeguards such as access control, encryption, and audit logging",
              "Physical security measures for facilities, servers, and work environments",
              "Incident response planning, breach management, and notification readiness",
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
            HIPAA compliance confirms that organizations operating from Oman can
            responsibly manage sensitive healthcare data under strict
            international privacy expectations.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Organizations in Oman That Need HIPAA Compliance
              </h2>

              <p className="text-center section-sub mb-5">
                HIPAA Certification in Oman is critical for organizations
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
                        <a href="iso-9001-certification-in-oman">
                          ISO 9001 Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-oman">
                          ISO 27001 Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-oman">
                          CMMI Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-oman">
                          HIPAA Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-oman">
                          VAPT Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-oman">
                          GDPR Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-oman">
                          SOC 1 Certification in Oman
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-oman">
                          SOC 2 Certification in Oman
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center section-sub mb-5">
              HIPAA compliance allows Omani organizations to engage confidently
              with global healthcare partners while maintaining strong data
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
                Benefits of HIPAA Certification in Oman
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving HIPAA Certification in Oman realize
                important operational and strategic advantages, including:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitshipaa}
                alt="HIPAA Benefits in Oman"
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
                First Cert's HIPAA Compliance Approach in Oman
              </h2>
              <p className="text-center section-sub mb-5">
                First Cert follows a structured, risk-based HIPAA implementation
                methodology tailored to organizations in Oman:
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
          HIPAA Certification Cost in Oman
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
                  The cost of HIPAA Certification in Oman varies based on
                  several factors, such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Organizational size and internal structure
                  </li>
                  <li className="check">
                    Nature and volume of healthcare data processed
                  </li>
                  <li className="check">
                    Complexity of IT infrastructure and cloud usage
                  </li>
                  <li className="check">
                    Existing privacy and security maturity levels
                  </li>
                  <li className="check">
                    Scope of training, documentation, and ongoing monitoring
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial compliance review to provide a
                  transparent, customized cost estimate aligned with business
                  and regulatory requirements.
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
                  Get HIPAA Certification in Oman with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted HIPAA consulting partner in Oman,
                  supporting healthcare organizations, technology providers, and
                  outsourcing companies with practical, audit-ready compliance
                  solutions. Our consultants integrate HIPAA requirements into
                  everyday business operations to ensure lasting compliance
                  value.
                </div>

                <div className="title small-title">
                  From initial assessment to continuous compliance management,
                  First Cert ensures your HIPAA journey in Oman is secure,
                  efficient, and globally aligned.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your HIPAA Certification journey in Oman with First Cert
                  and demonstrate a strong commitment to healthcare data
                  privacy, security, and international compliance excellence.
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

export default OmanHipaa;
