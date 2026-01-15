import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img27001 from "../../../assets/img/country/india/kerala/27001-img.webp";
import benefits27001 from "../../../assets/img/country/india/kerala/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Kerala27001() {
  const benefits = [
    "Reduced exposure to cyberattacks and data leaks",
    "Greater control over critical business information",
    "Higher confidence from clients, investors, and regulators",
    "Stronger readiness for security incidents and recovery",
    "Alignment with international data protection expectations",
    "Improved reputation as a secure and reliable service provider",
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "Software companies, SaaS providers, and IT service firms",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud hosting and data processing organizations",
    },
    {
      icon: "bi bi-bank",
      title: "Banks, NBFCs, and fintech businesses",
    },
    {
      icon: "bi bi-heart-pulse",
      title: "Hospitals, clinics, and medical data handlers",
    },
    {
      icon: "bi bi-cart-check",
      title: "E-commerce, travel, and online service platforms",
    },
    {
      icon: "bi bi-briefcase",
      title: "BPOs, KPOs, and outsourcing operations",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Research, education, and analytics organizations",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Kerala | Information Security & ISMS –
          First Cert
        </title>
        <meta
          name="description"
          content="ISO 27001 Certification in Kerala by First Cert helps organizations build secure ISMS frameworks, manage cyber risks, and protect sensitive data while meeting global compliance standards."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Kerala, ISO 27001 consultants Kerala, ISO 27001 certification cost Kerala, ISO 27001 implementation Kerala, ISMS certification Kerala, ISO 27001 audit Kerala, ISO 27001 documentation Kerala, information security consultants Kerala, ISO 27001 training Kerala, ISO certification services Kerala, First Cert ISO 27001 Kerala, cybersecurity compliance Kerala, ISO 27001 for IT companies Kerala, data protection certification Kerala"
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
          <h1 className="main-title">ISO 27001 Certification in Kerala</h1>
          <p className="small-desc">Securing Business Information</p>
        </div>
      </div>

      <a
        href="https://wa.me/918073358319?text=Thank you for Contacting First Cert"
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
              {/* IMAGE */}
              <img
                src={img27001}
                alt="ISO 27001 Certification in Kerala"
                className="img-fluid rounded-2"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />

              {/* TEXT BELOW IMAGE */}
              <p
                className="text-dark mt-3"
                style={{
                  color: "#111111",
                  fontWeight: "400",
                  fontSize: "0.975rem",
                  lineHeight: "1.8",
                }}
              >
                <b>ISO 27001 Certification in Kerala</b> enables organizations
                to protect valuable information against cyber threats, internal
                risks, and data misuse. With Kerala's expanding footprint in IT
                services, healthcare, fintech, tourism platforms, and
                manufacturing, safeguarding data has become essential for
                business continuity and international trust.
              </p>
              <p
                className="text-dark mt-3"
                style={{
                  color: "#111111",
                  fontWeight: "400",
                  fontSize: "0.975rem",
                  lineHeight: "1.8",
                }}
              >
                <b>First Cert</b> helps Kerala-based organizations design
                Information Security Management Systems that align security
                controls with real business processes.
              </p>
            </div>

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
            What ISO 27001 Certification in Kerala Validates
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Kerala</b> confirms that an
            organization has implemented a structured ISMS to identify, control,
            and reduce information security risks. The standard focuses on:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Protecting digital and physical information assets</h5>
            </div>

            <div className="vapt-card">
              <h5>Managing access to systems and sensitive data</h5>
            </div>

            <div className="vapt-card">
              <h5>
                Ensuring secure handling of customer and employee information
              </h5>
            </div>

            <div className="vapt-card">
              <h5>Monitoring and responding to security incidents</h5>
            </div>

            <div className="vapt-card">
              <h5>Continual improvement of security controls</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Certification demonstrates that information security is actively
            managed rather than reactively handled.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Kerala That Need ISO 27001
          </h2>

          <p className="text-center section-sub mb-5">
            ISO 27001 Certification in Kerala is highly relevant for:
          </p>

          <div className="row g-4">
            {/* LEFT: Industry Cards */}
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

            {/* RIGHT: Internal Links */}
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
          These sectors depend heavily on data integrity, confidentiality, and
          system availability.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Key Benefits of ISO 27001 Certification in Kerala
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that adopt ISO 27001 in Kerala achieve:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
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
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefits27001}
                alt="ISO 27001 Benefits in Kerala"
                className="img-fluid rounded-3"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "450px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          <p
            className="text-center mb-5"
            style={{
              color: "#000000",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              fontWeight: "400",
            }}
          >
            ISO 27001 turns security into a foundation for business growth.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's ISO 27001 Consulting Method in Kerala
          </h2>

          <p
            className="text-center mb-5"
            style={{
              color: "#000000",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              fontWeight: "400",
            }}
          >
            First Cert follows a clear and business-friendly ISMS implementation
            model:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Identify Information Assets</h4>
                <p>Define systems, data, and security boundaries</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Analyze Security Gaps</h4>
                <p>
                  Identify threats, vulnerabilities, and compliance requirements
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Develop ISMS Framework</h4>
                <p>Create policies, procedures, and risk treatment plans</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Implement Security Controls</h4>
                <p>Apply technical, physical, and administrative safeguards</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal Audit & Review</h4>
                <p>Verify effectiveness and management involvement</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Prepare for Certification</h4>
                <p>Prepare for Stage 1 and Stage 2 audits</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Continuous Improvement</h4>
                <p>Maintain and enhance ISMS performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          ISO 27001 Certification Cost in Kerala
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
                  The cost of ISO 27001 Certification in Kerala depends on:
                </div>

                <ul className="features">
                  <li className="check">
                    Size of the organization and business complexity
                  </li>
                  <li className="check">
                    Type and sensitivity of data handled
                  </li>
                  <li className="check">IT infrastructure and cloud usage</li>
                  <li className="check">Number of locations and audit scope</li>
                  <li className="check">
                    Training and audit preparation requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts a detailed assessment to provide a
                  transparent and tailored cost structure.
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
                  Get ISO 27001 Certified in Kerala with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted ISO 27001 consulting partner in
                  Kerala, helping organizations achieve certification and
                  maintain strong information security governance. Our experts
                  focus on practical controls, audit readiness, and long-term
                  data protection.
                </div>

                <div className="title small-title">
                  By working with First Cert, Kerala-based organizations can
                  protect critical data, meet international compliance
                  standards, and build lasting trust with global customers.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Begin your ISO 27001 Certification journey in Kerala with
                  First Cert and build a secure, compliant, and globally trusted
                  information security framework.
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

export default Kerala27001;
