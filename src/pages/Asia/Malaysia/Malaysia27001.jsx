import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/asia/malaysia/27001-img.webp";
import benefitsvapt from "../../../assets/img/country/asia/malaysia/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Malaysia27001() {
  const benefits = [
    "Reduced Exposure – Reduced exposure to cyber incidents and data breaches",
    "Risk Management – Structured approach to identifying and managing security risks",
    "Stakeholder Trust – Increased trust from customers, partners, and regulators",
    "Operational Resilience – Stronger resilience against operational and technology disruptions",
    "Standards Alignment – Improved alignment with international security and privacy standards",
  ];

  const hipaaData = [
    {
      icon: "bi bi-code-slash",
      title: "IT services, software development, and technology firms",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud hosting providers and managed service companies",
    },
    {
      icon: "bi bi-bank",
      title: "Banks, financial institutions, and fintech organizations",
    },
    {
      icon: "bi bi-heart-pulse",
      title: "Healthcare providers, laboratories, and research entities",
    },
    {
      icon: "bi bi-cart-check",
      title: "E-commerce platforms and digital marketplaces",
    },
    {
      icon: "bi bi-briefcase",
      title: "BPOs, KPOs, and outsourcing service providers",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Educational institutions handling student and research data",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Malaysia | Expert ISMS Consulting Services
          – First Cert
        </title>
        <meta
          name="description"
          content="Planning to obtain ISO 27001 Certification in Malaysia? First Cert delivers tailored ISMS consulting, security risk analysis, policy development, implementation guidance, and audit support to help organizations strengthen information security controls."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Malaysia, ISO 27001 consultants in Malaysia, ISO 27001 certification cost in Malaysia, ISO 27001 implementation in Malaysia, ISO 27001 certification process Malaysia, ISO certification consultants Malaysia, ISO 27001 training in Malaysia, ISO 27001 documentation Malaysia, Information Security Management System Malaysia, ISMS certification Malaysia, ISO 27001 audit support Malaysia, affordable ISO 27001 certification Malaysia, First Cert ISO consultants, ISO 27001 consulting company Malaysia, ISO 27001 certification for IT companies Malaysia, ISO 27001 certification for startups Malaysia, ISO 27001 information security certification Malaysia."
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
          <h1 className="main-title">ISO 27001 Certification in Malaysia</h1>
          <p className="small-desc">
            Managing Information Security with Confidence
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
                <b>ISO 27001 Certification in Malaysia</b> enables organizations
                to systematically manage information security risks while
                protecting critical data from cyber threats, misuse, and
                operational failures. As Malaysian businesses expand digital
                operations and engage with global partners, structured
                information security governance has become a strategic
                necessity.
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
                <b>First Cert</b> supports organizations across Malaysia by
                developing ISO 27001 frameworks that are practical,
                business-aligned, and sustainable. Our approach focuses on risk
                ownership, accountability, and security integration rather than
                checklist-driven compliance.
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
            What ISO 27001 Certification in Malaysia Represents
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Malaysia</b> confirms that an
            organization has implemented an Information Security Management
            System compliant with ISO/IEC 27001 requirements. The standard
            provides a risk-based structure for identifying threats, applying
            safeguards, and continuously improving security controls, ISO 27001
            addresses protection of:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Business and operational information</h5>
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
            Organizations That Need ISO 27001 Certification in Malaysia?
          </h2>

          <p className="text-center section-sub mb-5">
            ISO 27001 is suitable for organizations in Malaysia that handle
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
                    <a href="iso-9001-certification-in-malaysia">
                      ISO 9001 Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-malaysia">
                      ISO 27001 Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-malaysia">
                      CMMI Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-malaysia">
                      HIPAA Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-malaysia">
                      VAPT Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-malaysia">
                      GDPR Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-malaysia">
                      SOC 1 Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-malaysia">
                      SOC 2 Certification in Malaysia
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          For many Malaysian organizations, ISO 27001 is essential for meeting
          client security expectations and regulatory obligations.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Strategic Benefits of ISO 27001 Certification in Malaysia
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations certified to ISO 27001 in Malaysia experience
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
            ISO 27001 strengthens internal governance while enhancing external
            credibility.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            ISO 27001 Implementation Methodology in Malaysia with
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
                <h4>Scope & Context Definition</h4>
                <p>
                  Identify organizational boundaries and information assets.
                </p>
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
                <h4>ISMS Framework Development</h4>
                <p>Create policies, risk registers, and control plans.</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Implementation Support</h4>
                <p>
                  Assist with applying organizational and technical safeguards.
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal Audit & Review</h4>
                <p>Verify effectiveness and readiness for certification.</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Certification Audit Assistance</h4>
                <p>Support during Stage 1 and Stage 2 audits.</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Continual Improvement Support</h4>
                <p>Maintain and enhance ISMS performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          ISO 27001 Certification Cost in Malaysia
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
                  ISO 27001 Certification costs in Malaysia vary depending on{" "}
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and business complexity
                  </li>
                  <li className="check">
                    Nature and sensitivity of information assets
                  </li>
                  <li className="check">
                    IT infrastructure, cloud usage, and system
                  </li>
                  <li className="check">Scope of ISMS implementation</li>
                  <li className="check">
                    Training, documentation, and audit preparation needs
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
                  Get ISO 27001 Certification in Malaysia with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a reliable ISO 27001 consulting partner in
                  Malaysia, helping organizations design and implement effective
                  Information Security Management Systems that deliver real
                  business value. Our consultants emphasize practical controls,
                  clear documentation, and audit-ready systems.
                </div>
                <div className="title small-title">
                  From initial security assessment to certification and ongoing
                  improvement, First Cert ensures your ISO 27001 journey is
                  efficient, compliant, and results-focused.
                </div>
                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com Begin your ISO 27001
                  Certification in Malaysia with First Cert and strengthen
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

export default Malaysia27001;
