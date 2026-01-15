import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img27001 from "../../../assets/img/country/africa/ghana/27001-img.webp";
import benefits27001 from "../../../assets/img/country/africa/ghana/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Ghana27001() {
  const benefits = [
    "Reduced risk of cyber incidents, data leaks, and unauthorized access",
    "Clear visibility into information security risks and control effectiveness",
    "Improved trust from customers, regulators, and global partners",
    "Stronger incident response and business continuity capabilities",
    "Alignment with international cybersecurity, privacy, and compliance expectations",
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "IT service providers, software companies, and digital startups",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud hosting firms, data centers, and managed service providers",
    },
    {
      icon: "bi bi-bank",
      title: "Banks, fintech companies, and financial institutions",
    },
    {
      icon: "bi bi-heart-pulse",
      title: "Hospitals, healthcare providers, and medical technology firms",
    },
    {
      icon: "bi bi-cart-check",
      title:
        "Online platforms, e-commerce businesses, and digital service providers",
    },
    {
      icon: "bi bi-briefcase",
      title: "Outsourcing firms, BPOs, and shared service centers",
    },
    {
      icon: "bi bi-mortarboard",
      title:
        "Academic institutions, research organizations, and training providers",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Ghana | Strategic ISMS & Cybersecurity
          Advisory – First Cert
        </title>
        <meta
          name="description"
          content="Looking to secure ISO 27001 Certification in Ghana? First Cert offers comprehensive ISMS consulting services, including information security risk analysis, ISMS framework development, security control deployment, and complete certification audit guidance to help organizations protect critical data and strengthen cyber resilience."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Ghana, ISO 27001 consultants Ghana, ISO 27001 certification cost Ghana, ISO 27001 implementation Ghana, ISMS certification Ghana, ISO 27001 audit Ghana, ISO 27001 documentation Ghana, information security consultants Ghana, ISO 27001 training Ghana, ISO certification services Ghana, First Cert ISO 27001 Ghana, cybersecurity compliance Ghana, ISO 27001 for IT companies Ghana, data security certification Ghana"
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
          <h1 className="main-title">ISO 27001 Certification in Ghana</h1>
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
                src={img27001}
                alt="ISO 27001 Certification in Ghana"
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
                <b>ISO 27001 Certification in Ghana</b> enables organizations to
                implement a robust and systematic approach to managing
                information security risks. As Ghana experiences rapid digital
                transformation across banking, telecom, healthcare, energy,
                e-commerce, government services, and technology sectors,
                protecting sensitive information has become a core business
                responsibility.
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
                <b>First Cert</b> works with organizations throughout Ghana to
                establish Information Security Management Systems that are
                practical, scalable, and aligned with real operational needs.
                Our focus is on risk ownership, governance clarity, and
                sustainable security improvement rather than documentation-heavy
                compliance.
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
            What ISO 27001 Certification in Ghana Validates
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Ghana</b> confirms that an
            organization has implemented an Information Security Management
            System aligned with ISO/IEC 27001 requirements. The standard
            provides a structured framework for identifying information security
            risks and applying proportionate controls to reduce exposure.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A properly implemented ISMS helps organizations safeguard:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Confidential business records and operational data</h5>
            </div>

            <div className="vapt-card">
              <h5>
                Personal information of customers, employees, and partners
              </h5>
            </div>

            <div className="vapt-card">
              <h5>Financial data, contracts, and transactional information</h5>
            </div>

            <div className="vapt-card">
              <h5>
                IT infrastructure, networks, applications, and cloud services
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
            Certification demonstrates that information security risks are
            actively monitored, reviewed, and improved through defined
            governance mechanisms.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Ghana That Benefit from ISO 27001
          </h2>

          <p className="text-center section-sub mb-5">
            ISO 27001 Certification in Ghana is relevant for any organization
            that handles sensitive or regulated information, including:
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
                    <a href="iso-9001-certification-in-ghana">
                      ISO 9001 Certification in Ghana
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-ghana">
                      ISO 27001 Certification in Ghana
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-ghana">
                      CMMI Certification in Ghana
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-ghana">
                      HIPAA Certification in Ghana
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-ghana">
                      VAPT Certification in Ghana
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-ghana">
                      GDPR Certification in Ghana
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-ghana">
                      SOC 1 Certification in Ghana
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-ghana">
                      SOC 2 Certification in Ghana
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          For many Ghanaian organizations, ISO 27001 is essential for client
          assurance, regulatory confidence, and international business
          engagement.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Key Advantages of ISO 27001 Certification in Ghana
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving ISO 27001 Certification in Ghana gain
                significant operational and strategic value, including:
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
                alt="ISO 27001 Benefits in Ghana"
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
            ISO 27001 embeds information security into organizational culture,
            supported by leadership commitment and continual improvement.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's ISO 27001 Consulting Framework in Ghana
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
            First Cert applies a structured, risk-driven ISO 27001
            implementation methodology tailored for organizations in Ghana:
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
                <h4>Risk Identification & Analysis</h4>
                <p>Evaluate threats, vulnerabilities, and impacts</p>
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
                <p>Apply administrative, technical, and physical controls</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal Audit & Leadership Review</h4>
                <p>Validate ISMS performance and accountability</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Certification Audit Support</h4>
                <p>Prepare and support Stage 1 and Stage 2 audits</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Continuous Improvement</h4>
                <p>Maintain ISMS effectiveness and maturity over time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          ISO 27001 Certification Cost in Ghana
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
                  The cost of ISO 27001 Certification in Ghana varies based on
                  several factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and operational structure
                  </li>
                  <li className="check">
                    Volume and sensitivity of information assets
                  </li>
                  <li className="check">
                    Complexity of IT systems and cloud environments
                  </li>
                  <li className="check">
                    Scope of ISMS controls and documentation required
                  </li>
                  <li className="check">
                    Training, awareness, and audit preparation needs
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with an ISMS readiness assessment to deliver
                  a transparent, customized cost estimate aligned with your
                  security objectives.
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
                  Achieve ISO 27001 Certification in Ghana with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a reliable ISO 27001 consulting partner in
                  Ghana, supporting organizations from initial risk assessment
                  through certification and ongoing ISMS optimization. Our
                  consultants focus on actionable security controls, audit
                  confidence, and measurable risk reduction.
                </div>

                <div className="title small-title">
                  By partnering with First Cert, organizations in Ghana can
                  strengthen information security governance, meet international
                  compliance standards, and build lasting digital trust.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your ISO 27001 Certification journey in Ghana with First
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

export default Ghana27001;
