import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img27001 from "../../../assets/img/country/middle-east/iran/27001-img.webp";
import benefits27001 from "../../../assets/img/country/middle-east/iran/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Iran27001() {
  const benefits = [
    "Reduced likelihood of cyber incidents and data loss",
    "Clear visibility into information security risks and controls",
    "Increased confidence from customers, regulators, and partners",
    "Improved incident response and business continuity readiness",
    "Alignment with global cybersecurity and data protection frameworks",
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "Software developers, IT service firms, and SaaS providers",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud hosting companies, data centers, and MSPs",
    },
    {
      icon: "bi bi-bank",
      title: "Banks, fintech platforms, and financial service institutions",
    },
    {
      icon: "bi bi-heart-pulse",
      title: "Hospitals, laboratories, and healthcare solution providers",
    },
    {
      icon: "bi bi-cart-check",
      title: "E-commerce platforms and digital service operators",
    },
    {
      icon: "bi bi-briefcase",
      title: "Outsourcing firms, BPOs, and shared service centers",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Universities, research bodies, and educational institutions",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Iran | Strategic ISMS & Cybersecurity
          Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Looking to secure ISO 27001 Certification in Iran? First Cert offers comprehensive ISMS consulting services, including information risk assessment, security architecture design, control deployment, and full certification audit support to help organizations protect critical data and strengthen cyber resilience."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Iran, ISO 27001 consultants Iran, ISO 27001 certification cost Iran, ISO 27001 implementation Iran, ISMS certification Iran, ISO 27001 audit Iran, ISO 27001 documentation Iran, information security consultants Iran, ISO 27001 training Iran, ISO certification services Iran, First Cert ISO 27001 Iran, cybersecurity compliance Iran, ISO 27001 for IT companies Iran, data protection certification Iran"
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
          <h1 className="main-title">ISO 27001 Certification in Iran</h1>
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
                alt="ISO 27001 Certification in Iran"
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
                <b>ISO 27001 Certification in Iran</b> enables organizations to
                establish a systematic and risk-based approach to protecting
                information assets. As Iranian businesses expand across
                industries such as energy, manufacturing, banking, healthcare,
                telecommunications, and digital services, the need for robust
                information security governance has become increasingly
                critical.
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
                <b>First Cert</b> works with organizations throughout Iran to
                develop ISO 27001-compliant Information Security Management
                Systems that integrate seamlessly into operational workflows.
                Our focus is on building practical, enforceable security
                controls that deliver real risk reduction rather than
                theoretical compliance.
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
            What ISO 27001 Certification in Iran Represents
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Iran</b> confirms that an organization
            has implemented an Information Security Management System aligned
            with the ISO/IEC 27001 international standard. The framework
            provides a disciplined method to identify information risks, define
            security responsibilities, and apply appropriate safeguards across
            people, processes, and technology.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A well-designed ISMS supports the protection of:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Confidential business strategies and operational records</h5>
            </div>

            <div className="vapt-card">
              <h5>Customer and employee personal information</h5>
            </div>

            <div className="vapt-card">
              <h5>Financial, contractual, and regulatory data</h5>
            </div>

            <div className="vapt-card">
              <h5>IT infrastructure, applications, and cloud environments</h5>
            </div>

            <div className="vapt-card">
              <h5>Intellectual property and proprietary knowledge assets</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Certification demonstrates that information security is actively
            managed and continuously improved.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Iran That Benefit from ISO 27001
          </h2>

          <p className="text-center section-sub mb-5">
            ISO 27001 Certification in Iran is suitable for any organization
            responsible for handling sensitive or regulated information,
            including:
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
                    <a href="iso-9001-certification-in-iran">
                      ISO 9001 Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-iran">
                      ISO 27001 Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-iran">
                      CMMI Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-iran">
                      HIPAA Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-iran">
                      VAPT Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-iran">
                      GDPR Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-iran">
                      SOC 1 Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-iran">
                      SOC 2 Certification in Iran
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          For many Iranian organizations, ISO 27001 is a key requirement for
          winning contracts, passing client audits, and supporting international
          partnerships.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Key Advantages of ISO 27001 Certification in Iran
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve ISO 27001 Certification in Iran gain
                both security and business benefits, such as:
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
                alt="ISO 27001 Benefits in Iran"
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
            ISO 27001 elevates information security from an IT concern to an
            enterprise-wide governance priority.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's ISO 27001 Implementation Approach in Iran
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
            First Cert delivers ISO 27001 consulting services in Iran using a
            structured and risk-driven methodology:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>ISMS Scope Definition</h4>
                <p>Identify information assets, systems, and boundaries</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Risk & Gap Assessment</h4>
                <p>
                  Analyze threats and compare controls against ISO 27001
                  requirements
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>ISMS Framework Development</h4>
                <p>
                  Create security policies, procedures, and risk treatment plans
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Control Implementation Support</h4>
                <p>
                  Assist with technical, organizational, and physical safeguards
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal Audits & Management Review</h4>
                <p>Validate effectiveness and leadership oversight</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Certification Audit Coordination</h4>
                <p>Support Stage 1 and Stage 2 audits</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Ongoing Improvement</h4>
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
          ISO 27001 Certification Cost in Iran
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
                  The cost of ISO 27001 Certification in Iran varies based on
                  factors such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and operational structure
                  </li>
                  <li className="check">
                    Volume, type, and sensitivity of information assets
                  </li>
                  <li className="check">
                    Complexity of IT systems and cloud usage
                  </li>
                  <li className="check">
                    Scope of ISMS documentation and controls
                  </li>
                  <li className="check">
                    Training needs and audit preparation requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert starts with a readiness assessment to provide a
                  transparent, customized cost estimate aligned with business
                  and security objectives.
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
                  Achieve ISO 27001 Certification in Iran with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted ISO 27001 consulting partner in Iran,
                  supporting organizations from initial risk evaluation through
                  certification and continuous improvement. Our consultants
                  focus on practical security governance, audit-ready
                  documentation, and measurable risk reduction.
                </div>

                <div className="title small-title">
                  By partnering with First Cert, organizations strengthen
                  information security management, meet international compliance
                  expectations, and build long-term digital trust.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your ISO 27001 Certification journey in Iran with First
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

export default Iran27001;
