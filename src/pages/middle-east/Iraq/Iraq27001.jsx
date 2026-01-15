import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img27001 from "../../../assets/img/country/middle-east/iraq/27001-img.webp";
import benefits27001 from "../../../assets/img/country/middle-east/iraq/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Iraq27001() {
  const benefits = [
    "Reduced exposure to cyber threats and data breaches",
    "Improved visibility and control over information security risks",
    "Increased trust from customers, regulators, and stakeholders",
    "Better preparedness for incidents and operational disruptions",
    "Alignment with international cybersecurity and data protection expectations",
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "IT companies, software developers, and SaaS providers",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud hosting firms, data centers, and managed service providers",
    },
    {
      icon: "bi bi-bank",
      title: "Banks, fintech organizations, and financial institutions",
    },
    {
      icon: "bi bi-heart-pulse",
      title:
        "Healthcare providers, laboratories, and medical service operators",
    },
    {
      icon: "bi bi-cart-check",
      title: "E-commerce platforms and digital service businesses",
    },
    {
      icon: "bi bi-briefcase",
      title: "BPOs, shared service centers, and outsourcing companies",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Educational institutions and research organizations",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Iraq | Reliable ISMS & Information Security
          Advisory – First Cert
        </title>
        <meta
          name="description"
          content="Planning for ISO 27001 Certification in Iraq? First Cert provides end-to-end ISMS consulting services, including risk analysis, security framework development, control implementation, and certification audit assistance to help organizations protect critical information assets and strengthen cyber resilience."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Iraq, ISO 27001 consultants Iraq, ISO 27001 certification cost Iraq, ISO 27001 implementation Iraq, ISMS certification Iraq, ISO 27001 audit Iraq, ISO 27001 documentation Iraq, information security consultants Iraq, ISO 27001 training Iraq, ISO certification services Iraq, First Cert ISO 27001 Iraq, cybersecurity compliance Iraq, ISO 27001 for IT companies Iraq, data protection certification Iraq"
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
          <h1 className="main-title">ISO 27001 Certification in Iraq</h1>
          <p className="small-desc">
            Advancing Information Security and Risk Control
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
                alt="ISO 27001 Certification in Iraq"
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
                <b>ISO 27001 Certification in Iraq</b> enables organizations to
                manage information security risks through a structured and
                internationally recognized framework. As Iraq continues to
                expand across sectors such as energy, construction, banking,
                telecommunications, healthcare, and digital services,
                safeguarding sensitive data has become a critical operational
                and regulatory priority.
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
                <b>First Cert</b> supports organizations across Iraq in building
                Information Security Management Systems that align with real
                business processes. Our approach emphasizes risk reduction,
                operational clarity, and sustainable security governance rather
                than documentation-heavy compliance models.
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
            Understanding ISO 27001 Certification in Iraq
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Iraq</b> confirms that an organization
            has implemented an Information Security Management System in
            accordance with ISO/IEC 27001 standards. The standard provides a
            systematic method to identify information risks, apply appropriate
            controls, and continuously enhance security effectiveness.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            An ISO 27001-aligned ISMS helps protect:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Confidential business and operational data</h5>
            </div>

            <div className="vapt-card">
              <h5>Personal data belonging to customers and employees</h5>
            </div>

            <div className="vapt-card">
              <h5>Financial records and contractual information</h5>
            </div>

            <div className="vapt-card">
              <h5>IT infrastructure, cloud platforms, and applications</h5>
            </div>

            <div className="vapt-card">
              <h5>Intellectual property and proprietary business knowledge</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Certification demonstrates disciplined, globally accepted
            information security practices.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Iraq That Require ISO 27001
          </h2>

          <p className="text-center section-sub mb-5">
            ISO 27001 Certification in Iraq is relevant for organizations that
            create, store, process, or manage sensitive information, including:
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
          For many Iraqi organizations, ISO 27001 is increasingly required by
          clients, regulators, and international partners.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Benefits of ISO 27001 Certification in Iraq
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve ISO 27001 Certification in Iraq gain
                strong operational and strategic advantages, such as:
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
                alt="ISO 27001 Benefits in Iraq"
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
            ISO 27001 positions information security as a core component of
            enterprise governance.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's ISO 27001 Consulting Methodology in Iraq
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
            First Cert applies a structured and risk-focused ISO 27001
            implementation approach tailored to Iraqi organizations:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>ISMS Scope Definition</h4>
                <p>Identify assets, systems, and security boundaries</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Risk & Gap Analysis</h4>
                <p>
                  Evaluate threats and compare current controls with ISO 27001
                  requirements
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>ISMS Design</h4>
                <p>
                  Develop policies, procedures, risk treatment plans, and
                  security objectives
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Control Implementation Support</h4>
                <p>
                  Assist with technical, administrative, and physical controls
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal Audit & Management Review</h4>
                <p>Validate ISMS effectiveness and leadership involvement</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Certification Audit Support</h4>
                <p>Coordinate Stage 1 and Stage 2 audits</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Continuous Improvement</h4>
                <p>Support ongoing compliance and security maturity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          ISO 27001 Certification Cost in Iraq
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
                  The cost of ISO 27001 Certification in Iraq depends on several
                  factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Organizational size and business structure
                  </li>
                  <li className="check">
                    Nature and sensitivity of information assets
                  </li>
                  <li className="check">
                    Complexity of IT and cloud environments
                  </li>
                  <li className="check">
                    Scope of ISMS controls and documentation
                  </li>
                  <li className="check">
                    Training requirements and audit preparation needs
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with an initial assessment to deliver a
                  clear, customized, and transparent cost estimate aligned with
                  organizational objectives.
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
                  Get ISO 27001 Certified in Iraq with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted ISO 27001 consulting partner in Iraq,
                  supporting organizations from initial risk assessment through
                  certification and ongoing improvement. Our consultants focus
                  on practical security controls, audit-ready documentation, and
                  measurable risk reduction.
                </div>

                <div className="title small-title">
                  By working with First Cert, organizations in Iraq can
                  strengthen information security governance, meet international
                  compliance expectations, and build long-term digital trust.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your ISO 27001 Certification journey in Iraq with First
                  Cert and demonstrate your commitment to secure information
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

export default Iraq27001;
