import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img27001 from "../../../assets/img/country/middle-east/bahrain/27001-img.webp";
import benefits27001 from "../../../assets/img/country/middle-east/bahrain/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Bahrain27001() {
  const benefits = [
    "Lower risk of data breaches and cybersecurity incidents",
    "Clear visibility and control over information security risks",
    "Increased confidence from customers, regulators, and partners",
    "Improved preparedness for incidents and business disruptions",
    "Stronger alignment with global cybersecurity and data protection frameworks",
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "Software companies, IT service providers, and SaaS platforms",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud service providers, managed service firms, and data centers",
    },
    {
      icon: "bi bi-bank",
      title:
        "Banks, insurance companies, fintech firms, and financial institutions",
    },
    {
      icon: "bi bi-heart-pulse",
      title: "Hospitals, clinics, diagnostic labs, and healthcare operators",
    },
    {
      icon: "bi bi-cart-check",
      title: "E-commerce businesses and digital marketplaces",
    },
    {
      icon: "bi bi-briefcase",
      title: "BPOs, KPOs, and shared service organizations",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Universities, training institutes, and research organizations",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Bahrain | Trusted ISMS & Cybersecurity
          Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve ISO 27001 Certification in Bahrain? First Cert delivers specialized ISMS consulting services designed to identify security risks, implement robust controls, and provide full certification audit support to safeguard sensitive data and enhance organizational cyber resilience."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Bahrain, ISO 27001 consultants Bahrain, ISO 27001 certification cost Bahrain, ISO 27001 implementation Bahrain, ISMS certification Bahrain, ISO 27001 audit Bahrain, ISO 27001 documentation Bahrain, information security consultants Bahrain, ISO 27001 training Bahrain, ISO certification services Bahrain, First Cert ISO 27001 Bahrain, cybersecurity compliance Bahrain, ISO 27001 for IT companies Bahrain, data protection certification Bahrain"
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
          <h1 className="main-title">ISO 27001 Certification in Bahrain</h1>
          <p className="small-desc">Building a Secure Digital Foundation</p>
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
                alt="ISO 27001 Certification in Bahrain"
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
                <b>ISO 27001 Certification in Bahrain</b> helps organizations
                establish a structured and proactive approach to information
                security management. As Bahrain continues to grow as a regional
                hub for finance, technology, cloud services, healthcare,
                government projects, and digital commerce, organizations must
                demonstrate strong controls to protect sensitive and regulated
                information.
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
                <b>First Cert</b> partners with businesses across Bahrain to
                develop ISO 27001-compliant Information Security Management
                Systems (ISMS) that integrate seamlessly into daily operations.
                Our focus is on practical security governance that delivers
                measurable protection rather than checkbox-driven compliance.
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
            What ISO 27001 Certification in Bahrain Demonstrates
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Bahrain</b> confirms that an
            organization has implemented and maintained an Information Security
            Management System aligned with ISO/IEC 27001 standards. The
            framework enables organizations to systematically identify threats,
            assess risks, and apply appropriate safeguards while continually
            improving security performance.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            An effective ISMS under ISO 27001 supports the protection of:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Confidential business and operational information</h5>
            </div>

            <div className="vapt-card">
              <h5>Customer, employee, and stakeholder personal data</h5>
            </div>

            <div className="vapt-card">
              <h5>Financial, contractual, and legal records</h5>
            </div>

            <div className="vapt-card">
              <h5>
                IT systems, networks, cloud environments, and applications
              </h5>
            </div>

            <div className="vapt-card">
              <h5>Intellectual property and proprietary knowledge</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Certification signals disciplined, internationally recognized
            information security management.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Bahrain That Benefit from ISO 27001
          </h2>

          <p className="text-center section-sub mb-5">
            ISO 27001 Certification in Bahrain is suitable for any organization
            responsible for managing sensitive or regulated data, including:
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
                    <a href="iso-9001-certification-in-bahrain">
                      ISO 9001 Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-bahrain">
                      ISO 27001 Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-bahrain">
                      CMMI Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-bahrain">
                      HIPAA Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-bahrain">
                      VAPT Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-bahrain">
                      GDPR Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-bahrain">
                      SOC 1 Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-bahrain">
                      SOC 2 Certification in Bahrain
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          For many Bahrain-based businesses, ISO 27001 is essential for meeting
          client security expectations and supporting cross-border operations.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Key Business Benefits of ISO 27001 Certification in Bahrain
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations certified to ISO 27001 in Bahrain gain several
                operational and strategic advantages, including:
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
                alt="ISO 27001 Benefits in Bahrain"
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
            ISO 27001 strengthens governance while enhancing trust and
            organizational credibility.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's ISO 27001 Implementation Approach in Bahrain
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
            First Cert follows a structured, risk-driven methodology tailored to
            business realities in Bahrain:
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
                <h4>Risk & Gap Assessment</h4>
                <p>Compare existing practices with ISO 27001 requirements</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>ISMS Framework Development</h4>
                <p>Create policies, procedures, and risk treatment plans</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Control Implementation Support</h4>
                <p>
                  Assist with administrative, technical, and operational
                  controls
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal Audits & Reviews</h4>
                <p>Evaluate ISMS effectiveness and management involvement</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Certification Audit Coordination</h4>
                <p>Support Stage 1 and Stage 2 certification audits</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Ongoing Improvement</h4>
                <p>
                  Maintain compliance and continuously enhance security maturity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          ISO 27001 Certification Cost in Bahrain
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
                  The cost of ISO 27001 Certification in Bahrain varies based on
                  several considerations, such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Size and structure of the organization
                  </li>
                  <li className="check">
                    Type, volume, and sensitivity of information assets
                  </li>
                  <li className="check">
                    Complexity of IT infrastructure and cloud usage
                  </li>
                  <li className="check">Scope and depth of ISMS controls</li>
                  <li className="check">
                    Training, documentation, and audit readiness requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial review to provide a transparent
                  and customized ISO 27001 cost estimate aligned with your
                  operational needs.
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
                  Achieve ISO 27001 Certification in Bahrain with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted ISO 27001 consulting partner in
                  Bahrain, delivering ISMS solutions focused on real risk
                  reduction and operational effectiveness. Our consultants
                  emphasize clear documentation, practical controls, and
                  audit-ready systems that support sustainable cybersecurity
                  governance.
                </div>

                <div className="title small-title">
                  From initial planning through certification and continual
                  improvement, First Cert ensures your ISO 27001 journey in
                  Bahrain is efficient, structured, and value-focused.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your ISO 27001 Certification journey in Bahrain with
                  First Cert and demonstrate your commitment to information
                  security, regulatory compliance, and long-term digital trust.
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

export default Bahrain27001;
