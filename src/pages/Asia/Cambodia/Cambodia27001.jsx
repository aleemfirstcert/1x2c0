import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img27001 from "../../../assets/img/country/asia/cambodia/27001-img.webp";
import benefits27001 from "../../../assets/img/country/asia/cambodia/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Cambodia27001() {
  const benefits = [
    "Reduced likelihood of cyber incidents and data breaches",
    "Clear identification and management of information security risks",
    "Greater trust from customers, partners, and regulators",
    "Improved incident response and business continuity readiness",
    "Alignment with global data protection and cybersecurity expectations",
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "IT companies, software developers, and SaaS providers",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Managed service providers, hosting firms, and data centers",
    },
    {
      icon: "bi bi-bank",
      title: "Banks, fintech companies, and financial service providers",
    },
    {
      icon: "bi bi-heart-pulse",
      title: "Hospitals, clinics, laboratories, and healthcare operators",
    },
    {
      icon: "bi bi-cart-check",
      title: "E-commerce platforms and digital service businesses",
    },
    {
      icon: "bi bi-briefcase",
      title: "BPOs, KPOs, and shared service operations",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Educational institutions handling research and student data",
    },
  ];

  

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Cambodia | Professional ISMS Consulting &
          Cybersecurity Advisory – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve ISO 27001 Certification in Cambodia? First Cert provides customized ISMS consulting services, including information security risk assessment, control design, implementation support, and end-to-end certification audit assistance to safeguard critical data assets."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Cambodia, ISO 27001 consultants Cambodia, ISO 27001 certification cost Cambodia, ISO 27001 implementation Cambodia, ISMS certification Cambodia, ISO 27001 audit Cambodia, ISO 27001 documentation Cambodia, information security consultants Cambodia, ISO 27001 training Cambodia, ISO certification services Cambodia, First Cert ISO 27001 Cambodia, cybersecurity compliance Cambodia, ISO 27001 for IT companies Cambodia, data protection certification Cambodia"
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
          <h1 className="main-title">ISO 27001 Certification in Cambodia</h1>
          <p className="small-desc">
            Building Resilient Information Security Practices
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
                alt="ISO 27001 Certification in Cambodia"
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
                <b>ISO 27001 Certification in Cambodia</b> helps organizations
                establish a structured and proactive approach to protecting
                information against cyber threats, data leaks, and operational
                risks. As Cambodian businesses increasingly adopt digital
                platforms, cloud technologies, and cross-border data processing,
                the need for internationally recognized information security
                practices has become critical.
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
                <b>First Cert</b> supports organizations across Cambodia in
                implementing ISO 27001 frameworks that align with business
                realities. Our focus is on embedding security into daily
                operations while maintaining flexibility, clarity, and long-term
                effectiveness.
              </p>
            </div>

            <EnquiryForm />
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
            What ISO 27001 Certification in Cambodia Demonstrates
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Cambodia</b> confirms that an
            organization has implemented an{" "}
            <b>Information Security Management System (ISMS)</b> in accordance
            with ISO/IEC 27001 standards. The ISMS framework enables
            organizations to identify information risks, apply appropriate
            controls, and continuously monitor security performance.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            An effective ISMS protects:
          </p>

          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Core business and operational information</h5>
            </div>

            <div class="vapt-card">
              <h5>Customer, employee, and stakeholder personal data</h5>
            </div>

            <div class="vapt-card">
              <h5>Financial, legal, and contractual records</h5>
            </div>

            <div class="vapt-card">
              <h5>IT systems, networks, and cloud environments</h5>
            </div>

            <div class="vapt-card">
              <h5>Intellectual property and confidential knowledge</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Certification signals that information security is managed using
            globally accepted best practices.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Cambodia That Benefit from ISO 27001
          </h2>

          <p className="text-center section-sub mb-5">
            ISO 27001 Certification in Cambodia is highly relevant for
            organizations that manage sensitive or regulated information,
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
                    <a href="iso-9001-certification-in-cambodia">
                      ISO 9001 Certification in Cambodia
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-cambodia">
                      ISO 27001 Certification in Cambodia
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-cambodia">
                      CMMI Certification in Cambodia
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-cambodia">
                      HIPAA Certification in Cambodia
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-cambodia">
                      VAPT Certification in Cambodia
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-cambodia">
                      GDPR Certification in Cambodia
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-cambodia">
                      SOC 1 Certification in Cambodia
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-cambodia">
                      SOC 2 Certification in Cambodia
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          For many Cambodian organizations, ISO 27001 is a key requirement for
          client trust, vendor qualification, and international market access.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Key Business Benefits of ISO 27001 Certification in Cambodia
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving ISO 27001 Certification in Cambodia
                gain:
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
                alt="ISO 27001 Benefits in Cambodia"
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
            ISO 27001 strengthens governance while enhancing an organization's
            reputation for security and reliability.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's ISO 27001 Implementation Approach in Cambodia
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
            First Cert follows a structured, risk-based, and results-oriented
            ISMS implementation methodology:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>ISMS Scope & Context Definition</h4>
                <p>Identify boundaries, assets, and risk environment.</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Risk & Gap Assessment</h4>
                <p>Evaluate existing practices against ISO 27001 controls.</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>ISMS Design & Documentation</h4>
                <p>Develop policies, procedures, and risk treatment plans.</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Control Implementation Support</h4>
                <p>
                  Assist with technical, administrative, and operational
                  controls.
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal Audit & Management Review</h4>
                <p>Validate ISMS effectiveness.</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Certification Audit Support</h4>
                <p>Coordinate Stage 1 and Stage 2 audits.</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Continual Improvement</h4>
                <p>Maintain compliance and enhance security maturity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          ISO 27001 Certification Cost in Cambodia
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
                  The cost of ISO 27001 Certification in Cambodia depends on
                  several factors, such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and operational complexity
                  </li>
                  <li className="check">
                    Volume and sensitivity of information assets
                  </li>
                  <li className="check">
                    IT infrastructure, cloud usage, and integrations
                  </li>
                  <li className="check">Scope and coverage of the ISMS</li>
                  <li className="check">
                    Training, documentation, and audit preparation requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial assessment to provide a clear,
                  tailored, and transparent ISO 27001 cost estimate.
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
                  Get ISO 27001 Certification in Cambodia with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted ISO 27001 consulting partner in
                  Cambodia, delivering ISMS solutions that emphasize real risk
                  reduction rather than checklist compliance. Our consultants
                  focus on practical controls, audit-ready documentation, and
                  sustainable security practices.
                </div>

                <div className="title small-title">
                  From initial planning to certification and continuous
                  improvement, First Cert ensures your ISO 27001 journey in
                  Cambodia is efficient, structured, and value-driven.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your ISO 27001 Certification journey in Cambodia with
                  First Cert and demonstrate your commitment to information
                  security, regulatory alignment, and long-term digital trust.
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

export default Cambodia27001;
