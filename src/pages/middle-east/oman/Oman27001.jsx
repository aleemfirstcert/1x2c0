import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img27001 from "../../../assets/img/country/middle-east/oman/27001-img.webp";
import benefits27001 from "../../../assets/img/country/middle-east/oman/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Oman27001() {
  const benefits = [
    "Reduced exposure to cyber threats and data breaches",
    "Structured identification and mitigation of security risks",
    "Increased confidence from clients, regulators, and partners",
    "Improved readiness for incidents and operational disruptions",
    "Stronger alignment with global cybersecurity and data protection standards",
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "IT service providers, software developers, and SaaS companies",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Managed service providers, cloud operators, and data centers",
    },
    {
      icon: "bi bi-bank",
      title: "Banks, fintech firms, and financial institutions",
    },
    {
      icon: "bi bi-heart-pulse",
      title:
        "Hospitals, clinics, laboratories, and healthcare service providers",
    },
    {
      icon: "bi bi-cart-check",
      title: "E-commerce platforms and digital businesses",
    },
    {
      icon: "bi bi-briefcase",
      title: "BPOs, KPOs, and shared service centers",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Educational and research institutions managing confidential data",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Oman | Expert ISMS Consulting &
          Cybersecurity Solutions – First Cert
        </title>
        <meta
          name="description"
          content="Planning to obtain ISO 27001 Certification in Oman? First Cert offers tailored ISMS consulting services, covering security risk evaluation, control framework development, implementation guidance, and complete certification audit support to protect sensitive information and strengthen cyber resilience."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Oman, ISO 27001 consultants Oman, ISO 27001 certification cost Oman, ISO 27001 implementation Oman, ISMS certification Oman, ISO 27001 audit Oman, ISO 27001 documentation Oman, information security consultants Oman, ISO 27001 training Oman, ISO certification services Oman, First Cert ISO 27001 Oman, cybersecurity compliance Oman, ISO 27001 for IT companies Oman, data protection certification Oman"
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
          <h1 className="main-title">ISO 27001 Certification in Oman</h1>
          <p className="small-desc">
            Strengthening Information Security Governance
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
                alt="ISO 27001 Certification in Oman"
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
                <b>ISO 27001 Certification in Oman</b> enables organizations to
                systematically manage information security risks while
                safeguarding business-critical and sensitive data. As Oman
                accelerates digital transformation across sectors such as oil
                and gas services, finance, logistics, government contracting,
                healthcare, and technology, organizations are under increasing
                pressure to demonstrate strong cybersecurity and data protection
                controls.
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
                <b>First Cert</b> supports organizations throughout Oman in
                building ISO 27001-compliant Information Security Management
                Systems that align with operational realities. Our approach
                focuses on integrating security responsibilities into daily
                processes rather than treating compliance as a standalone
                activity.
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
            What ISO 27001 Certification in Oman Confirms
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Oman</b> verifies that an organization
            has established and maintained an ISMS in line with ISO/IEC 27001
            requirements. The standard provides a structured framework for
            identifying information risks, selecting appropriate safeguards, and
            continuously improving security performance.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            An ISO 27001-aligned ISMS helps protect:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Strategic business and operational data</h5>
            </div>

            <div className="vapt-card">
              <h5>Customer and employee personal information</h5>
            </div>

            <div className="vapt-card">
              <h5>Financial, legal, and contractual records</h5>
            </div>

            <div className="vapt-card">
              <h5>IT infrastructure, applications, and cloud platforms</h5>
            </div>

            <div className="vapt-card">
              <h5>Intellectual property and confidential business knowledge</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Certification demonstrates disciplined security management based on
            internationally recognized best practices.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Oman That Should Consider ISO 27001
          </h2>

          <p className="text-center section-sub mb-5">
            ISO 27001 Certification in Oman is relevant for any organization
            that handles sensitive, regulated, or customer data, including:
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
          For many Oman-based organizations, ISO 27001 is essential for meeting
          client security expectations and enabling international business
          engagements.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Advantages of ISO 27001 Certification in Oman
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve ISO 27001 Certification in Oman
                benefit from:
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
                alt="ISO 27001 Benefits in Oman"
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
            ISO 27001 strengthens governance while enhancing organizational
            credibility and trust.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's ISO 27001 Consulting Methodology in Oman
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
            First Cert applies a practical and risk-focused ISO 27001
            implementation framework designed for long-term effectiveness:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>ISMS Scope Definition</h4>
                <p>
                  Identify information assets, systems, and security boundaries
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Risk & Gap Analysis</h4>
                <p>Evaluate current practices against ISO 27001 requirements</p>
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
                  Assist with technical, administrative, and operational
                  safeguards
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal Audit & Review</h4>
                <p>Validate ISMS performance and management oversight</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Certification Audit Assistance</h4>
                <p>Support Stage 1 and Stage 2 certification audits</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Continual Improvement</h4>
                <p>
                  Maintain compliance and enhance security maturity over time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          ISO 27001 Certification Cost in Oman
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
                  The cost of ISO 27001 Certification in Oman depends on factors
                  such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and operational structure
                  </li>
                  <li className="check">
                    Sensitivity and volume of information assets
                  </li>
                  <li className="check">
                    Complexity of IT infrastructure and cloud environments
                  </li>
                  <li className="check">
                    Scope of the ISMS and control coverage
                  </li>
                  <li className="check">
                    Training, documentation, and audit preparation requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial assessment to provide a clear,
                  customized, and transparent ISO 27001 cost estimate aligned
                  with organizational needs.
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
                  Get ISO 27001 Certification in Oman with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a reliable ISO 27001 consulting partner in Oman,
                  delivering ISMS solutions focused on real risk reduction and
                  operational relevance. Our consultants emphasize practical
                  controls, clear documentation, and audit-ready systems that
                  support long-term cybersecurity resilience.
                </div>

                <div className="title small-title">
                  From early planning through certification and continuous
                  improvement, First Cert ensures your ISO 27001 journey in Oman
                  is structured, efficient, and value-driven.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your ISO 27001 Certification journey in Oman with First
                  Cert and demonstrate your commitment to information security,
                  regulatory compliance, and sustainable digital trust.
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

export default Oman27001;
