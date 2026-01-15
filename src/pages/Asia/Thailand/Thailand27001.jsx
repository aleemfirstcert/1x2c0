import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img27001 from "../../../assets/img/country/asia/thailand/27001-img.webp";
import benefits27001 from "../../../assets/img/country/asia/thailand/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Thailand27001() {
  const benefits = [
    "Reduced exposure to cyber threats and data breaches",
    "Structured identification and treatment of security risks",
    "Increased confidence from clients, partners, and regulators",
    "Improved preparedness for incidents and disruptions",
    "Stronger alignment with global data protection expectations",
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "Software companies, IT service providers, and SaaS firms",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Data centers, hosting providers, and managed service operators",
    },
    {
      icon: "bi bi-bank",
      title: "Banks, fintech companies, and financial institutions",
    },
    {
      icon: "bi bi-heart-pulse",
      title: "Hospitals, clinics, diagnostic labs, and healthcare providers",
    },
    {
      icon: "bi bi-cart-check",
      title: "E-commerce platforms and digital marketplaces",
    },
    {
      icon: "bi bi-briefcase",
      title: "BPOs, KPOs, and regional service centers",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Academic institutions handling research and student data",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Thailand | Expert ISMS Consulting &
          Security Advisory – First Cert
        </title>
        <meta
          name="description"
          content="Planning to secure ISO 27001 Certification in Thailand? First Cert delivers tailored ISMS consulting services, including information risk analysis, security framework development, implementation support, and complete audit assistance to protect critical data and meet global security expectations."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Thailand, ISO 27001 consultants Thailand, ISO 27001 certification cost Thailand, ISO 27001 implementation Thailand, ISMS certification Thailand, ISO 27001 audit Thailand, ISO 27001 documentation Thailand, information security consultants Thailand, ISO 27001 training Thailand, ISO certification services Thailand, First Cert ISO 27001 Thailand, cybersecurity compliance Thailand, ISO 27001 for IT companies Thailand, data protection certification Thailand"
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
          <h1 className="main-title">ISO 27001 Certification in Thailand</h1>
          <p className="small-desc">Enabling Secure Information Management</p>
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
                alt="ISO 27001 Certification in Thailand"
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
                <b>ISO 27001 Certification in Thailand</b> supports
                organizations in building a robust and systematic approach to
                managing information security risks. With the rapid expansion of
                digital services, cloud adoption, and regional data exchange,
                Thai organizations face growing expectations to demonstrate
                strong protection of sensitive and business-critical
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
                <b>First Cert</b> works with organizations across Thailand to
                design ISO 27001 systems that are practical, business-aligned,
                and sustainable. Our methodology integrates security controls
                into everyday operations, ensuring accountability, transparency,
                and continuous risk reduction.
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
            What ISO 27001 Certification in Thailand Represents
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Thailand</b> confirms that an
            organization has established an{" "}
            <b>Information Security Management System (ISMS)</b> in accordance
            with ISO/IEC 27001 requirements. The standard focuses on identifying
            information risks, applying suitable controls, and continuously
            monitoring security performance.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            An effective ISMS helps safeguard:
          </p>

          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Internal business and operational data</h5>
            </div>

            <div class="vapt-card">
              <h5>Customer and employee personal information</h5>
            </div>

            <div class="vapt-card">
              <h5>Financial, contractual, and regulatory records</h5>
            </div>

            <div class="vapt-card">
              <h5>IT infrastructure, networks, and cloud platforms</h5>
            </div>

            <div class="vapt-card">
              <h5>Intellectual property and proprietary knowledge</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Certification demonstrates that information security is managed
            using internationally accepted best practices.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations That Should Consider ISO 27001 Certification in
            Thailand
          </h2>

          <p className="text-center section-sub mb-5">
            ISO 27001 Certification in Thailand is relevant for organizations
            that process, store, or manage sensitive information, such as:
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
                    <a href="iso-9001-certification-in-thailand">
                      ISO 9001 Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-thailand">
                      ISO 27001 Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-thailand">
                      CMMI Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-thailand">
                      HIPAA Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-thailand">
                      VAPT Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-thailand">
                      GDPR Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-thailand">
                      SOC 1 Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-thailand">
                      SOC 2 Certification in Thailand
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          For many organizations in Thailand, ISO 27001 is essential for
          customer trust, contractual requirements, and international business
          engagement.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Value of ISO 27001 Certification in Thailand
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve ISO 27001 Certification in Thailand
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
                alt="ISO 27001 Benefits in Thailand"
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
            ISO 27001 strengthens governance while reinforcing an organization's
            reputation for reliability and security.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's ISO 27001 Implementation Method in Thailand
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
            First Cert applies a clear and results-focused ISMS implementation
            framework:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>ISMS Scope & Context Setup</h4>
                <p>Define boundaries, assets, and risk context.</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Risk & Gap Analysis</h4>
                <p>Assess current practices against ISO 27001 controls.</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>ISMS Architecture & Documentation</h4>
                <p>Develop policies, procedures, and risk treatment plans.</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Control Deployment Support</h4>
                <p>Assist with technical and administrative implementation.</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal Review</h4>
                <p>Conduct internal audits and management evaluations.</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Certification Audit Coordination</h4>
                <p>Support Stage 1 and Stage 2 audits.</p>
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
          ISO 27001 Certification Cost in Thailand
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
                  The cost of ISO 27001 Certification in Thailand varies based
                  on factors such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and operational structure
                  </li>
                  <li className="check">
                    Sensitivity and volume of information assets
                  </li>
                  <li className="check">
                    Complexity of IT infrastructure and cloud usage
                  </li>
                  <li className="check">Scope and coverage of the ISMS</li>
                  <li className="check">
                    Training, documentation, and audit preparation needs
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert performs an initial assessment to provide a clear
                  and customized ISO 27001 cost estimate aligned with your
                  organization's requirements.
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
                  Get ISO 27001 Certification in Thailand with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted ISO 27001 consulting partner in
                  Thailand, delivering ISMS solutions that go beyond checklist
                  compliance. Our consultants focus on effective risk controls,
                  clear documentation, and audit-ready systems that support real
                  business resilience.
                </div>

                <div className="title small-title">
                  From initial planning through certification and ongoing
                  improvement, First Cert ensures your ISO 27001 journey in
                  Thailand is structured, efficient, and value-driven.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your ISO 27001 Certification journey in Thailand with
                  First Cert and demonstrate your commitment to information
                  security, compliance excellence, and sustainable digital
                  trust.
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

export default Thailand27001;
