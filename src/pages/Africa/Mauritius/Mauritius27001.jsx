import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img27001 from "../../../assets/img/country/africa/mauritius/27001-img.webp";
import benefits27001 from "../../../assets/img/country/africa/mauritius/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Mauritius27001() {
  const benefits = [
    "Reduced exposure to cyberattacks, data breaches, and system compromise",
    "Clear visibility into security risks and mitigation effectiveness",
    "Higher confidence from clients, regulators, and global partners",
    "Improved incident response, disaster recovery, and continuity planning",
    "Alignment with international cybersecurity and privacy frameworks",
    "Stronger security culture driven by leadership accountability",
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "IT services firms, software developers, and SaaS providers",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud hosting companies and data center operators",
    },
    {
      icon: "bi bi-bank",
      title: "Banks, fintech platforms, and financial institutions",
    },
    {
      icon: "bi bi-heart-pulse",
      title: "Hospitals, medical service providers, and health-tech firms",
    },
    {
      icon: "bi bi-cart-check",
      title: "E-commerce companies and online service platforms",
    },
    {
      icon: "bi bi-briefcase",
      title: "Outsourcing providers, BPOs, and shared service centers",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Universities, research organizations, and training institutes",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Mauritius | Enterprise Information Security
          & ISMS Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Looking to obtain ISO 27001 Certification in Mauritius? First Cert provides expert ISMS consulting, including cyber risk analysis, security governance design, control deployment, and full certification audit assistance to help organizations secure sensitive data and maintain regulatory confidence."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Mauritius, ISO 27001 consultants Mauritius, ISO 27001 certification cost Mauritius, ISO 27001 implementation Mauritius, ISMS certification Mauritius, ISO 27001 audit Mauritius, ISO 27001 documentation Mauritius, information security consultants Mauritius, ISO 27001 training Mauritius, ISO certification services Mauritius, First Cert ISO 27001 Mauritius, cybersecurity compliance Mauritius, ISO 27001 for IT companies Mauritius, data protection certification Mauritius"
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
          <h1 className="main-title">ISO 27001 Certification in Mauritius</h1>
          <p className="small-desc">
            Protecting Digital and Business Information
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
                alt="ISO 27001 Certification in Mauritius"
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
                <b>ISO 27001 Certification in Mauritius</b> enables organizations
                to establish a disciplined and risk-based approach to managing
                information security. As businesses in Mauritius rapidly expand
                across banking, healthcare, government services,
                telecommunications, cloud computing, e-commerce, and technology
                sectors, cyber risks and regulatory expectations continue to
                rise.
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
                <b>First Cert</b> helps organizations in Mauritius build
                Information Security Management Systems that integrate directly
                into daily operations. Our focus is on creating practical,
                enforceable security controls that protect real business
                assets—not just producing compliance documents.
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
            What ISO 27001 Certification in Mauritius Confirms
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Mauritius</b> validates that an
            organization has implemented an Information Security Management
            System aligned with global ISO/IEC 27001 requirements. It confirms
            that information risks are identified, assessed, controlled, and
            reviewed in a structured and repeatable manner.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            An effective ISMS helps safeguard:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Customer, employee, and partner personal data</h5>
            </div>

            <div className="vapt-card">
              <h5>Financial, operational, and transactional records</h5>
            </div>

            <div className="vapt-card">
              <h5>IT infrastructure, applications, and cloud platforms</h5>
            </div>

            <div className="vapt-card">
              <h5>Confidential documents and intellectual property</h5>
            </div>

            <div className="vapt-card">
              <h5>Business-critical communication and digital assets</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Certification demonstrates that security controls are actively
            managed, monitored, and improved across the organization.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Needs ISO 27001 Certification in Mauritius
          </h2>

          <p className="text-center section-sub mb-5">
            ISO 27001 Certification in Mauritius is essential for organizations
            that store, process, or transmit sensitive or regulated information,
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
                    <a href="iso-9001-certification-in-mauritius">
                      ISO 9001 Certification in Mauritius
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-mauritius">
                      ISO 27001 Certification in Mauritius
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-mauritius">
                      CMMI Certification in Mauritius
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-mauritius">
                      HIPAA Certification in Mauritius
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-mauritius">
                      VAPT Certification in Mauritius
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-mauritius">
                      GDPR Certification in Mauritius
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-mauritius">
                      SOC 1 Certification in Mauritius
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-mauritius">
                      SOC 2 Certification in Mauritius
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          ISO 27001 enables organizations in Mauritius to meet customer security
          expectations, contractual requirements, and international compliance
          standards.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Benefits of ISO 27001 Certification in Mauritius
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve ISO 27001 Certification in Mauritius
                gain strong security and commercial advantages, including:
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
                alt="ISO 27001 Benefits in Mauritius"
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
            ISO 27001 turns information security into a strategic asset rather
            than a reactive cost.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's ISO 27001 Consulting Methodology in Mauritius
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
            First Cert applies a structured, business-aligned ISO 27001
            framework for organizations in Mauritius:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>ISMS Scoping</h4>
                <p>Define systems, data, and operational boundaries</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Risk Assessment</h4>
                <p>Identify threats, vulnerabilities, and business impact</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>ISMS Design</h4>
                <p>Build policies, procedures, and risk treatment plans</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Control Implementation</h4>
                <p>Deploy technical, physical, and organizational safeguards</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal Audit & Review</h4>
                <p>Validate effectiveness and management involvement</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Certification Audit Support</h4>
                <p>Guide Stage 1 and Stage 2 audit readiness</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Ongoing Optimization</h4>
                <p>Strengthen security posture and compliance maturity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          ISO 27001 Certification Cost in Mauritius
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
                  The cost of ISO 27001 Certification in Mauritius varies
                  depending on:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and operational scope
                  </li>
                  <li className="check">
                    Volume and sensitivity of information assets
                  </li>
                  <li className="check">
                    IT systems, cloud usage, and integration complexity
                  </li>
                  <li className="check">
                    Depth of security controls and documentation required
                  </li>
                  <li className="check">
                    Training, internal audits, and certification audit support
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert starts with a readiness and risk review to deliver
                  a clear, customized cost estimate aligned with your security
                  and business goals.
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
                  Get ISO 27001 Certified in Mauritius with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted ISO 27001 consulting partner in
                  Mauritius, supporting organizations from initial risk
                  evaluation through certification and ongoing ISMS management.
                  Our consultants focus on practical security controls,
                  audit-ready documentation, and measurable risk reduction.
                </div>

                <div className="title small-title">
                  With First Cert, organizations in Mauritius can strengthen
                  information security governance, meet international compliance
                  expectations, and build lasting digital trust.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your ISO 27001 Certification journey in Mauritius with
                  First Cert and demonstrate your commitment to secure,
                  reliable, and internationally aligned information security.
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

export default Mauritius27001;
