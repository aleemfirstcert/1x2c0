import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/asia/singapore/27001-img.webp";
import benefitsvapt from "../../../assets/img/country/asia/singapore/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Singapore27001() {
  const benefits = [
    "Stronger Data Protection – Reduces the risk of cyber threats and data loss",
    "Structured Risk Management – Enables informed security decision-making",
    "Improved Stakeholder Confidence – Builds trust among clients, partners, and regulators",
    "Incident Readiness & Resilience – Improves preparedness for security incidents and disruptions",
    "Global Standards Alignment – Conforms to international information security and privacy requirements",
  ];

  const hipaaData = [
    {
      icon: "bi bi-code-slash",
      title: "Software development and IT service companies",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud service providers and data centers",
    },
    {
      icon: "bi bi-bank",
      title: "Banks, fintech firms, and financial service providers",
    },
    {
      icon: "bi bi-heart-pulse",
      title: "Healthcare, biotech, and research organizations",
    },
    {
      icon: "bi bi-cart-check",
      title: "E-commerce platforms and digital service providers",
    },
    {
      icon: "bi bi-briefcase",
      title: "Consulting, outsourcing, and managed service firms",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Educational and training institutions",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Singapore | Professional ISMS Advisory
          Services – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve ISO 27001 Certification in Singapore? First Cert provides expert ISMS consulting, security risk evaluation, documentation support, implementation assistance, and audit readiness services to help organizations protect critical information assets."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Singapore, ISO 27001 consultants in Singapore, ISO 27001 certification cost in Singapore, ISO 27001 implementation in Singapore, ISO 27001 certification process Singapore, ISO certification consultants Singapore, ISO 27001 training in Singapore, ISO 27001 documentation Singapore, Information Security Management System Singapore, ISMS certification Singapore, ISO 27001 audit support Singapore, affordable ISO 27001 certification Singapore, First Cert ISO consultants, ISO 27001 consulting company Singapore, ISO 27001 certification for IT companies Singapore, ISO 27001 certification for startups Singapore, ISO 27001 information security certification Singapore."
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
          <h1 className="main-title">ISO 27001 Certification in Singapore</h1>
          <p className="small-desc">
            Securing Information in a Digital Economy
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
                src={imgvapt}
                alt="ISO 9001 Certification"
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
                <b>ISO 27001 Certification in Singapore</b> helps organizations
                establish robust controls to safeguard business-critical and
                sensitive information. In Singapore’s technology-driven and
                globally connected economy, effective information security
                management is essential to maintain trust, resilience, and
                regulatory alignment.
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
                <b>First Cert</b> works with organizations in Singapore to embed
                information security into daily operations. Our focus is on
                building risk-aware security frameworks that support business
                growth while ensuring confidentiality, integrity, and
                availability of information.
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
            Understanding ISO 27001 Certification in Singapore
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Singapore</b> is granted to
            organizations that implement an{" "}
            <b>Information Security Management System (ISMS)</b> in line with
            the ISO/IEC 27001 standard. The framework enables organizations to
            systematically identify information security risks and apply
            appropriate controls. ISO 27001 helps organizations manage risks
            related to:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Digital and physical information assets</h5>
            </div>

            <div class="vapt-card">
              <h5>Customer and employee personal data</h5>
            </div>

            <div class="vapt-card">
              <h5>Financial, legal, and contractual information</h5>
            </div>

            <div class="vapt-card">
              <h5>IT infrastructure, cloud environments, and applications</h5>
            </div>
            <div class="vapt-card">
              <h5>Intellectual property and proprietary data</h5>
            </div>
          </div>
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Certification confirms that an organization follows internationally
            accepted information security practices.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Pursue ISO 27001 Certification in Singapore?
          </h2>

          <p className="text-center section-sub mb-5">
            ISO 27001 is suitable for organizations in Singapore that handle
            sensitive or confidential information, including:
          </p>

          <div className="row g-4">
            {/* LEFT: HIPAA Cards */}
            <div className="col-lg-9">
              <div className="row g-4">
                {hipaaData.map((item, index) => (
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
                <h5>Our Experties</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-singapore">
                      ISO 9001 Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-singapore">
                      ISO 27001 Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-singapore">
                      CMMI Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-singapore">
                      HIPAA Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-singapore">
                      VAPT Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-singapore">
                      GDPR Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-singapore">
                      SOC 1 Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-singapore">
                      SOC 2 Certification in Singapore
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          Many Singapore-based organizations adopt ISO 27001 to meet client
          security expectations, regulatory requirements, and cross-border data
          protection obligations.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting ISO 27001 Certification in Singapore
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations certified to ISO 27001 in Singapore experience
                measurable advantages:
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
                src={benefitsvapt}
                alt="vapt Benefits"
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
            ISO 27001 supports long-term security governance and operational
            stability.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            ISO 27001 Implementation Methodology in Singapore with
            <span style={{ color: "black" }}> First Cert</span>
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
            First Cert follows a clear and practical ISMS implementation
            roadmap:
          </p>
          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Context & Asset Identification</h4>
                <p>
                  Define business scope, information assets, and organizational
                  context.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Risk Assessment & Gap Analysis</h4>
                <p>
                  Identify threats, vulnerabilities, and gaps against ISO 27001
                  requirements.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>ISMS Framework Design</h4>
                <p>
                  Develop policies, procedures, risk registers, and control
                  frameworks.
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Control Implementation</h4>
                <p>
                  Apply technical, administrative, and physical security
                  controls.
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal ISMS Review</h4>
                <p>Conduct internal audits and management evaluations.</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Certification Audit Support</h4>
                <p>
                  Assist organizations during external certification audits.
                </p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Ongoing ISMS Maintenance</h4>
                <p>
                  Support continual improvement, monitoring, and system
                  enhancement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          ISO 27001 Certification Cost in Singapore
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
                  The cost of ISO 27001 Certification in Singapore depends on
                  several factors, such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Size and structure of the organization
                  </li>
                  <li className="check">
                    Type and volume of information processed
                  </li>
                  <li className="check">
                    Complexity of IT systems and cloud usage
                  </li>
                  <li className="check">Scope of ISMS coverage</li>
                  <li className="check">
                    Readiness level and training requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert provides a customized and transparent cost estimate
                  following an initial security assessment.
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
                  Achieve ISO 27001 Certification in Singapore with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted ISO 27001 consulting partner in
                  Singapore, helping organizations design and implement
                  effective Information Security Management Systems. Our
                  consultants focus on practical risk control, clear
                  documentation, and audit preparedness to ensure sustainable
                  compliance.
                </div>
                <div className="title small-title">
                  From planning and implementation to certification and
                  continual improvement, First Cert ensures a smooth and
                  value-driven ISO 27001 journey.
                </div>
                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com Begin your ISO 27001
                  Certification in Singapore with First Cert and strengthen
                  information security, compliance, and business confidence.
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

export default Singapore27001;
