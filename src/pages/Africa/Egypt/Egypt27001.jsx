import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img27001 from "../../../assets/img/country/africa/egypt/27001-img.webp";
import benefits27001 from "../../../assets/img/country/africa/egypt/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Egypt27001() {
  const benefits = [
    "Lower exposure to cyber threats and data breaches",
    "Clear visibility of information security risks and mitigation controls",
    "Stronger confidence from customers, regulators, and business partners",
    "Improved incident handling and business continuity preparedness",
    "Alignment with global cybersecurity, privacy, and compliance frameworks",
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "IT companies, software developers, and technology startups",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud service providers, hosting companies, and data centers",
    },
    {
      icon: "bi bi-bank",
      title: "Banks, fintech firms, and financial service providers",
    },
    {
      icon: "bi bi-heart-pulse",
      title: "Hospitals, diagnostic centers, and healthcare IT companies",
    },
    {
      icon: "bi bi-cart-check",
      title: "E-commerce platforms and digital service providers",
    },
    {
      icon: "bi bi-briefcase",
      title: "BPOs, outsourcing firms, and shared service operations",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Universities, research institutions, and education providers",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Egypt | Advanced ISMS & Information
          Security Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Planning to achieve ISO 27001 Certification in Egypt? First Cert provides end-to-end Information Security Management System (ISMS) consulting, covering risk identification, security framework design, control implementation, and complete audit support to safeguard organizational data and enhance cyber defense readiness."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Egypt, ISO 27001 consultants Egypt, ISO 27001 certification cost Egypt, ISO 27001 implementation Egypt, ISMS certification Egypt, ISO 27001 audit Egypt, ISO 27001 documentation Egypt, information security consultants Egypt, ISO 27001 training Egypt, ISO certification services Egypt, First Cert ISO 27001 Egypt, cybersecurity compliance Egypt, ISO 27001 for IT companies Egypt, data protection certification Egypt"
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
          <h1 className="main-title">ISO 27001 Certification in Egypt</h1>
          <p className="small-desc">
            Building a Resilient Information Security Framework
          </p>
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
                alt="ISO 27001 Certification in Egypt"
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
                <b>ISO 27001 Certification in Egypt</b> supports organizations
                in establishing a structured, risk-focused system for protecting
                sensitive information. With the rapid growth of digital
                operations across sectors such as finance, energy, healthcare,
                telecom, manufacturing, and online services, managing
                information security risks has become a critical business
                requirement rather than a technical option.
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
                <b>First Cert</b> partners with organizations across Egypt to
                design and implement ISO 27001-aligned ISMS frameworks that fit
                real operational environments. Our consulting approach
                prioritizes effective risk control, accountability, and
                long-term security governance instead of paperwork-driven
                compliance.
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
            What ISO 27001 Certification in Egypt Confirms
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Egypt</b> verifies that an
            organization has implemented an Information Security Management
            System in accordance with ISO/IEC 27001 international requirements.
            The standard establishes a systematic method for identifying
            information-related risks, assigning responsibilities, and applying
            appropriate controls across the organization.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            An effective ISMS helps protect:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Strategic business information and internal records</h5>
            </div>

            <div className="vapt-card">
              <h5>Customer, employee, and third-party personal data</h5>
            </div>

            <div className="vapt-card">
              <h5>Financial information and contractual documentation</h5>
            </div>

            <div className="vapt-card">
              <h5>IT systems, applications, networks, and cloud platforms</h5>
            </div>

            <div className="vapt-card">
              <h5>Intellectual property and confidential knowledge assets</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Certification demonstrates that information security risks are
            continuously assessed, managed, and improved through defined
            governance processes.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Egypt That Commonly Implement ISO 27001
          </h2>

          <p className="text-center section-sub mb-5">
            ISO 27001 Certification in Egypt is relevant for any organization
            that stores, processes, or transmits sensitive data, including:
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
                    <a href="iso-9001-certification-in-egypt">
                      ISO 9001 Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-egypt">
                      ISO 27001 Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-egypt">
                      CMMI Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-egypt">
                      HIPAA Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-egypt">
                      VAPT Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-egypt">
                      GDPR Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-egypt">
                      SOC 1 Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-egypt">
                      SOC 2 Certification in Egypt
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          For many organizations in Egypt, ISO 27001 is essential for client
          trust, regulatory confidence, and participation in international
          business opportunities.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Benefits of ISO 27001 Certification in Egypt
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve ISO 27001 Certification in Egypt gain
                both operational and strategic advantages, including:
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
                alt="ISO 27001 Benefits in Egypt"
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
            ISO 27001 positions information security as an organization-wide
            responsibility supported by leadership and continuous improvement.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's ISO 27001 Consulting Methodology in Egypt
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
            First Cert follows a structured and risk-oriented process to deliver
            ISO 27001 Certification in Egypt:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>ISMS Scope Definition</h4>
                <p>Define assets, systems, and information boundaries</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Risk & Compliance Assessment</h4>
                <p>Identify threats, vulnerabilities, and control gaps</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>ISMS Design & Documentation</h4>
                <p>Develop policies, procedures, and risk treatment plans</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Control Implementation Support</h4>
                <p>
                  Assist with administrative, technical, and physical safeguards
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal Audit & Management Review</h4>
                <p>Ensure ISMS effectiveness and leadership oversight</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Certification Audit Support</h4>
                <p>Coordinate and prepare for Stage 1 and Stage 2 audits</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Continual Improvement</h4>
                <p>
                  Support ongoing ISMS maintenance and security maturity growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          ISO 27001 Certification Cost in Egypt
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
                  The cost of ISO 27001 Certification in Egypt depends on
                  several organizational and technical factors, such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Size and structure of the organization
                  </li>
                  <li className="check">
                    Nature and sensitivity of information assets
                  </li>
                  <li className="check">
                    Complexity of IT infrastructure and cloud environments
                  </li>
                  <li className="check">
                    Scope of ISMS controls and documentation
                  </li>
                  <li className="check">
                    Training, awareness, and audit readiness requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a readiness review to provide a clear
                  and customized cost proposal aligned with your security
                  objectives.
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
                  Get ISO 27001 Certified in Egypt with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted ISO 27001 consulting partner in Egypt,
                  supporting organizations from initial risk assessment through
                  certification and ongoing ISMS improvement. Our consultants
                  focus on practical security governance, audit-ready systems,
                  and measurable risk reduction outcomes.
                </div>

                <div className="title small-title">
                  By working with First Cert, organizations strengthen
                  information security controls, meet international compliance
                  expectations, and build long-term digital trust.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Begin your ISO 27001 Certification journey in Egypt with First
                  Cert and demonstrate a strong commitment to secure information
                  management and sustainable cybersecurity practices.
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

export default Egypt27001;
