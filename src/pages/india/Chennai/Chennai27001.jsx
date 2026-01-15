import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img27001 from "../../../assets/img/country/asia/maldives/27001-img.webp";
import benefits27001 from "../../../assets/img/country/asia/maldives/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Chennai27001() {
  const benefits = [
    "Reduced risk of data breaches and cyber incidents",
    "Improved control over information and IT systems",
    "Higher trust from customers, partners, and regulators",
    "Better preparedness for security incidents and disruptions",
    "Stronger alignment with global cybersecurity best practices",
  ];

  const industryData = [
    {
      icon: "bi bi-code-slash",
      title: "IT companies, SaaS providers, and software developers",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud service providers and data hosting firms",
    },
    {
      icon: "bi bi-bank",
      title: "Banks, fintech platforms, and financial service organizations",
    },
    {
      icon: "bi bi-heart-pulse",
      title: "Hospitals, diagnostic centers, and health-tech companies",
    },
    {
      icon: "bi bi-cart-check",
      title: "E-commerce platforms and online businesses",
    },
    {
      icon: "bi bi-briefcase",
      title: "BPOs, KPOs, and outsourcing providers",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Research, education, and training institutions",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Chennai | ISMS & Cybersecurity – First Cert
        </title>
        <meta
          name="description"
          content="Looking for ISO 27001 Certification in Chennai? First Cert provides ISMS implementation, risk management, security controls, and audit support to protect business data and ensure compliance."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Chennai, ISO 27001 consultants Chennai, ISO 27001 certification cost Chennai, ISO 27001 implementation Chennai, ISMS certification Chennai, ISO 27001 audit Chennai, ISO 27001 documentation Chennai, information security consultants Chennai, ISO 27001 training Chennai, ISO certification services Chennai, First Cert ISO 27001 Chennai, cybersecurity compliance Chennai, ISO 27001 for IT companies Chennai, data protection certification Chennai"
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
          <h1 className="main-title">ISO 27001 Certification in Chennai</h1>
          <p className="small-desc">Building Strong Information Security</p>
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
                alt="ISO 27001 Certification in Chennai"
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
                <b>ISO 27001 Certification in Chennai</b> enables organizations
                to create a secure and well-governed environment for managing
                sensitive information. With Chennai serving as a major hub for
                IT services, SaaS, finance, healthcare, manufacturing, and
                digital enterprises, safeguarding data is essential for business
                continuity and client confidence. ISO 27001 provides a globally
                accepted framework to manage security risks and protect valuable
                business assets.
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
                <b>First Cert</b> works with Chennai-based organizations to
                design and implement Information Security Management Systems
                that fit real business processes, technology environments, and
                regulatory expectations.
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
            What ISO 27001 Certification in Chennai Means
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Chennai</b> confirms that an
            organization has established an effective Information Security
            Management System that identifies, controls, and reduces information
            security risks. The standard ensures that data is protected through
            a combination of people, process, and technology controls.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A properly implemented ISMS helps organizations protect:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Customer and employee personal data</h5>
            </div>

            <div className="vapt-card">
              <h5>Financial, legal, and operational records</h5>
            </div>

            <div className="vapt-card">
              <h5>IT systems, cloud platforms, and applications</h5>
            </div>

            <div className="vapt-card">
              <h5>Intellectual property and confidential information</h5>
            </div>

            <div className="vapt-card">
              <h5>Digital communications and transactions</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Certification demonstrates that information security is managed in a
            structured, measurable, and continuously improving way.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Implement ISO 27001 in Chennai
          </h2>

          <p className="text-center section-sub mb-5">
            ISO 27001 Certification in Chennai is essential for any organization
            that stores, processes, or transmits sensitive information,
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
                    <a href="iso-9001-certification-in-chennai">
                      ISO 9001 Certification in Chennai
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-chennai">
                      ISO 27001 Certification in Chennai
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-chennai">
                      CMMI Certification in Chennai
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-chennai">
                      HIPAA Certification in Chennai
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-chennai">
                      VAPT Certification in Chennai
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-chennai">
                      GDPR Certification in Chennai
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-chennai">
                      SOC 1 Certification in Chennai
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-chennai">
                      SOC 2 Certification in Chennai
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          ISO 27001 helps Chennai organizations meet international client
          expectations and regulatory security requirements.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Key Benefits of ISO 27001 Certification in Chennai
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve ISO 27001 Certification in Chennai
                gain important business and security advantages, such as:
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
                alt="ISO 27001 Benefits in Chennai"
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
            ISO 27001 turns information security into a core part of business
            resilience and competitive strength.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's ISO 27001 Implementation Approach in Chennai
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
            First Cert follows a structured and business-focused ISO 27001
            consulting model in Chennai:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>ISMS Scoping</h4>
                <p>Define systems, data, and security boundaries</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Risk Assessment</h4>
                <p>Identify threats, vulnerabilities, and impacts</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>ISMS Design</h4>
                <p>Develop policies, procedures, and risk treatment plans</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Control Implementation</h4>
                <p>Apply technical, physical, and administrative safeguards</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal Audit & Review</h4>
                <p>Verify effectiveness and management involvement</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Certification Audit Support</h4>
                <p>Prepare for Stage 1 and Stage 2 audits</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Continuous Improvement</h4>
                <p>Maintain and enhance ISMS performance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          ISO 27001 Certification Cost in Chennai
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
                  The cost of ISO 27001 Certification in Chennai depends on
                  factors such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and business complexity
                  </li>
                  <li className="check">
                    Volume and sensitivity of data handled
                  </li>
                  <li className="check">IT infrastructure and cloud usage</li>
                  <li className="check">
                    Scope of ISMS controls and documentation
                  </li>
                  <li className="check">
                    Training and audit preparation requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert starts with a readiness assessment to provide a
                  clear and customized cost estimate based on your security and
                  compliance needs.
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
                  Get ISO 27001 Certified in Chennai with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted ISO 27001 consulting partner in
                  Chennai, supporting organizations from initial security
                  evaluation to certification and ongoing compliance. Our
                  experts focus on practical risk reduction, audit-ready
                  documentation, and sustainable information security practices.
                </div>

                <div className="title small-title">
                  By working with First Cert, Chennai-based organizations can
                  protect critical data, meet international compliance
                  standards, and build lasting trust with global customers.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your ISO 27001 Certification journey in Chennai with
                  First Cert and demonstrate your commitment to secure,
                  reliable, and globally aligned information security.
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

export default Chennai27001;
