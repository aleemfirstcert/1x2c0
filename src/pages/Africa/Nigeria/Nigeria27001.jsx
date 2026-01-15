import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img27001 from "../../../assets/img/country/africa/nigeria/27001-img.webp";
import benefits27001 from "../../../assets/img/country/africa/nigeria/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Nigeria27001() {
  const benefits = [
    "Reduced exposure to cyber threats, data breaches, and unauthorized access",
    "Clear understanding of information security risks and control effectiveness",
    "Enhanced trust from clients, regulators, and international partners",
    "Improved incident response and business continuity readiness",
    "Alignment with global cybersecurity, privacy, and compliance standards",
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "IT service providers, software firms, and technology startups",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud providers, data centers, and managed service companies",
    },
    {
      icon: "bi bi-bank",
      title: "Banks, fintech firms, and financial institutions",
    },
    {
      icon: "bi bi-heart-pulse",
      title:
        "Hospitals, healthcare providers, and medical technology companies",
    },
    {
      icon: "bi bi-cart-check",
      title: "E-commerce businesses and digital service platforms",
    },
    {
      icon: "bi bi-briefcase",
      title: "Outsourcing providers, BPOs, and shared service centers",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Universities, research institutions, and training organizations",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Nigeria | Expert ISMS & Cybersecurity
          Solutions – First Cert
        </title>
        <meta
          name="description"
          content="Seeking ISO 27001 Certification in Nigeria? First Cert offers end-to-end ISMS consulting services, covering risk assessment, security framework design, control implementation, and full certification support to help organizations protect sensitive data and strengthen cybersecurity readiness."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Nigeria, ISO 27001 consultants Nigeria, ISO 27001 certification cost Nigeria, ISO 27001 implementation Nigeria, ISMS certification Nigeria, ISO 27001 audit Nigeria, ISO 27001 documentation Nigeria, information security consultants Nigeria, ISO 27001 training Nigeria, ISO certification services Nigeria, First Cert ISO 27001 Nigeria, cybersecurity compliance Nigeria, ISO 27001 for IT companies Nigeria, data protection certification Nigeria"
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
          <h1 className="main-title">ISO 27001 Certification in Nigeria</h1>
          <p className="small-desc">Securing Critical Information Assets</p>
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
                alt="ISO 27001 Certification in Nigeria"
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
                <b>ISO 27001 Certification in Nigeria</b> helps organizations
                implement a systematic, risk-focused Information Security
                Management System (ISMS) to protect data and maintain
                operational resilience. With Nigeria's rapid digital growth
                across banking, healthcare, telecom, government services,
                e-commerce, and IT sectors, safeguarding sensitive information
                has become an essential organizational priority.
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
                <b>First Cert</b> collaborates with Nigerian organizations to
                design ISMS frameworks that are practical, scalable, and aligned
                with operational realities. Our approach prioritizes proactive
                risk management, leadership engagement, and continuous security
                improvement rather than compliance-driven paperwork.
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
            What ISO 27001 Certification in Nigeria Confirms
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Nigeria</b> validates that an
            organization has established an ISMS in accordance with ISO/IEC
            27001 international standards. The certification ensures systematic
            identification, assessment, and treatment of information security
            risks.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            An effective ISMS helps organizations secure:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>
                Confidential corporate records and operational documentation
              </h5>
            </div>

            <div className="vapt-card">
              <h5>Customer, employee, and partner personal data</h5>
            </div>

            <div className="vapt-card">
              <h5>Financial and transactional information</h5>
            </div>

            <div className="vapt-card">
              <h5>
                IT infrastructure, applications, networks, and cloud services
              </h5>
            </div>

            <div className="vapt-card">
              <h5>
                Intellectual property and sensitive organizational knowledge
              </h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            ISO 27001 certification demonstrates that security risks are
            continuously monitored, managed, and improved through structured
            governance processes.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Nigeria That Benefit from ISO 27001
          </h2>

          <p className="text-center section-sub mb-5">
            ISO 27001 is suitable for any Nigerian organization handling
            sensitive or regulated data, including:
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
                    <a href="iso-9001-certification-in-nigeria">
                      ISO 9001 Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-nigeria">
                      ISO 27001 Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-nigeria">
                      CMMI Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-nigeria">
                      HIPAA Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-nigeria">
                      VAPT Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-nigeria">
                      GDPR Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-nigeria">
                      SOC 1 Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-nigeria">
                      SOC 2 Certification in Nigeria
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          For many Nigerian organizations, ISO 27001 is critical for regulatory
          compliance, client trust, and international business opportunities.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Key Benefits of ISO 27001 Certification in Nigeria
              </h1>
              <p className="text-center section-sub mb-5">
                Achieving ISO 27001 Certification in Nigeria delivers both
                operational and strategic advantages:
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
                alt="ISO 27001 Benefits in Nigeria"
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
            Integration of information security into organizational culture with
            leadership oversight and continuous improvement.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's ISO 27001 Consulting Methodology in Nigeria
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
            First Cert applies a structured, risk-based ISO 27001 implementation
            approach for Nigerian organizations:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>ISMS Scope Definition</h4>
                <p>Identify assets, systems, and information boundaries</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Risk Assessment & Analysis</h4>
                <p>Evaluate threats, vulnerabilities, and business impacts</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>ISMS Framework Design</h4>
                <p>
                  Develop policies, procedures, and risk treatment strategies
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Control Implementation Support</h4>
                <p>Deploy administrative, technical, and physical safeguards</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal Audit & Leadership Review</h4>
                <p>Ensure ISMS effectiveness and accountability</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Certification Audit Support</h4>
                <p>Prepare and assist for Stage 1 and Stage 2 audits</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Continuous Improvement</h4>
                <p>Maintain ISMS maturity and security posture over time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          ISO 27001 Certification Cost in Nigeria
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
                  The cost of ISO 27001 Certification in Nigeria depends on
                  factors such as:
                </div>

                <ul className="features">
                  <li className="check">Organization size and structure</li>
                  <li className="check">
                    Volume and sensitivity of information assets
                  </li>
                  <li className="check">
                    IT infrastructure and cloud environment complexity
                  </li>
                  <li className="check">
                    Scope of ISMS controls, policies, and documentation
                  </li>
                  <li className="check">
                    Training, awareness, and audit preparation requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial ISMS readiness assessment to
                  deliver a clear, customized cost estimate aligned with
                  organizational security goals.
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
                  Get ISO 27001 Certified in Nigeria with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted ISO 27001 consulting partner in
                  Nigeria, guiding organizations from initial risk assessment
                  through certification and ongoing ISMS optimization. Our
                  consultants focus on actionable security controls, audit
                  readiness, and measurable risk reduction.
                </div>

                <div className="title small-title">
                  Partnering with First Cert ensures Nigerian organizations
                  strengthen information security governance, meet global
                  compliance standards, and build long-term digital trust.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Begin your ISO 27001 Certification journey in Nigeria with
                  First Cert and demonstrate commitment to secure information
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

export default Nigeria27001;
