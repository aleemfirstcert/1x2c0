import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img27001 from "../../../assets/img/country/india/coimbatore/27001-img.webp";
import benefits27001 from "../../../assets/img/country/india/coimbatore/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Coimbatore27001() {
  const benefits = [
    "Minimized risk of data breaches and cyber threats",
    "Enhanced control over information systems and assets",
    "Improved trust from customers, partners, and regulatory bodies",
    "Better preparedness for incidents and data recovery",
    "Compliance alignment with global cybersecurity standards",
    "Strengthened operational resilience and competitive advantage",
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "IT service providers, software firms, and SaaS companies",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud service providers and data centers",
    },
    {
      icon: "bi bi-bank",
      title: "Banks, fintech companies, and financial institutions",
    },
    {
      icon: "bi bi-heart-pulse",
      title: "Hospitals, healthcare facilities, and diagnostics labs",
    },
    {
      icon: "bi bi-cart-check",
      title: "E-commerce and online service platforms",
    },
    {
      icon: "bi bi-briefcase",
      title: "BPOs, KPOs, and outsourcing firms",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Educational and research institutions",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Coimbatore | ISMS & Data Security – First
          Cert
        </title>
        <meta
          name="description"
          content="Achieve ISO 27001 Certification in Coimbatore with First Cert. We provide ISMS setup, risk assessment, security controls, and audit support to protect sensitive business data."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Coimbatore, ISO 27001 consultants Coimbatore, ISO 27001 certification cost Coimbatore, ISO 27001 implementation Coimbatore, ISMS certification Coimbatore, ISO 27001 audit Coimbatore, ISO 27001 documentation Coimbatore, information security consultants Coimbatore, ISO 27001 training Coimbatore, ISO certification services Coimbatore, First Cert ISO 27001 Coimbatore, cybersecurity compliance Coimbatore, ISO 27001 for IT companies Coimbatore, data protection certification Coimbatore"
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
          <h1 className="main-title">ISO 27001 Certification in Coimbatore</h1>
          <p className="small-desc">Strengthening Enterprise Cybersecurity</p>
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
                alt="ISO 27001 Certification in Coimbatore"
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
                <b>ISO 27001 Certification in Coimbatore</b> helps organizations
                establish a secure and well-governed environment for managing
                critical information. As Coimbatore grows as a center for IT
                services, finance, healthcare, manufacturing, and digital
                enterprises, protecting sensitive data is essential for
                regulatory compliance and customer trust.
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
                <b>First Cert</b> assists Coimbatore-based organizations in
                designing and implementing Information Security Management
                Systems that integrate seamlessly into business operations while
                meeting global standards.
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
            What ISO 27001 Certification in Coimbatore Covers
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Coimbatore</b> ensures an organization
            has a structured ISMS that identifies, manages, and mitigates
            information security risks. It applies people, process, and
            technology controls to safeguard digital and physical assets.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A well-implemented ISMS protects:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Client, employee, and partner personal information</h5>
            </div>

            <div className="vapt-card">
              <h5>Financial, operational, and legal records</h5>
            </div>

            <div className="vapt-card">
              <h5>IT infrastructure, applications, and cloud platforms</h5>
            </div>

            <div className="vapt-card">
              <h5>Intellectual property and proprietary business data</h5>
            </div>

            <div className="vapt-card">
              <h5>Digital communication channels and transaction systems</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Certification confirms that data protection is systematic,
            measurable, and continuously improving.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Get ISO 27001 Certification in Coimbatore
          </h2>

          <p className="text-center section-sub mb-5">
            ISO 27001 Certification in Coimbatore is ideal for organizations
            that handle confidential or sensitive information, including:
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
                    <a href="iso-9001-certification-in-coimbatore">
                      ISO 9001 Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-coimbatore">
                      ISO 27001 Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-coimbatore">
                      CMMI Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-coimbatore">
                      HIPAA Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-coimbatore">
                      VAPT Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-coimbatore">
                      GDPR Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-coimbatore">
                      SOC 1 Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-coimbatore">
                      SOC 2 Certification in Coimbatore
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          ISO 27001 helps Coimbatore businesses meet international client
          expectations and regulatory security requirements.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of ISO 27001 Certification in Coimbatore
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving ISO 27001 Certification in Coimbatore
                gain several strategic advantages:
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
                alt="ISO 27001 Benefits in Coimbatore"
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
            ISO 27001 transforms information security into a business enabler
            rather than just a compliance exercise.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's ISO 27001 Implementation Approach in Coimbatore
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
            Our approach ensures effective ISMS deployment and lasting security
            maturity:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Scope & Assessment</h4>
                <p>Identify data, systems, and organizational boundaries</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Risk Evaluation</h4>
                <p>Detect threats, vulnerabilities, and business impacts</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>ISMS Design</h4>
                <p>Create policies, procedures, and risk treatment plans</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Control Implementation</h4>
                <p>Deploy technical, physical, and administrative safeguards</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal Audit & Review</h4>
                <p>Validate system performance and leadership oversight</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Certification Audit Support</h4>
                <p>Guide organizations through Stage 1 and Stage 2 audits</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Continuous Improvement</h4>
                <p>Maintain and enhance ISMS over time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          ISO 27001 Certification Cost in Coimbatore
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
                  The cost of ISO 27001 Certification in Coimbatore depends on:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and complexity of operations
                  </li>
                  <li className="check">
                    Volume and sensitivity of information handled
                  </li>
                  <li className="check">
                    IT infrastructure, cloud adoption, and integrations
                  </li>
                  <li className="check">
                    Scope of documentation, controls, and training
                  </li>
                  <li className="check">
                    Audit preparation and support requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert provides a customized cost estimate after a
                  detailed readiness assessment.
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
                  Get ISO 27001 Certified in Coimbatore with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted ISO 27001 consulting partner in
                  Coimbatore, guiding organizations from initial risk assessment
                  to certification and ongoing compliance. Our consultants
                  ensure practical implementation of ISMS controls, audit
                  readiness, and sustainable data protection.
                </div>

                <div className="title small-title">
                  By partnering with First Cert, Coimbatore businesses can
                  safeguard critical information, achieve global compliance, and
                  build long-term client trust.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your ISO 27001 Certification journey in Coimbatore with
                  First Cert and demonstrate your commitment to strong,
                  reliable, and globally compliant information security.
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

export default Coimbatore27001;
