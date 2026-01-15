import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/asia/indonesia/27001-img.webp";
import benefitsvapt from "../../../assets/img/country/asia/indonesia/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Indonesia27001() {
  const benefits = [
    "Lower risk of cyber incidents and information loss",
    "Clear framework for identifying and mitigating security threats",
    "Enhanced confidence among customers, partners, and regulators",
    "Improved resilience against operational and technology disruptions",
    "Better alignment with global security and data protection expectations",
  ];

  const hipaaData = [
    {
      icon: "bi bi-laptop",
      title: "IT companies, SaaS providers, and software developers",
    },
    {
      icon: "bi bi-hdd-network",
      title: "Data centers, cloud service providers, and MSPs",
    },
    {
      icon: "bi bi-currency-exchange",
      title: "Banks, fintech firms, and financial service institutions",
    },
    {
      icon: "bi bi-hospital",
      title: "Hospitals, clinics, laboratories, and healthcare networks",
    },
    {
      icon: "bi bi-bag-check",
      title: "Online retailers, digital platforms, and marketplaces",
    },
    {
      icon: "bi bi-headset",
      title: "BPO, KPO, and shared service organizations",
    },
    {
      icon: "bi bi-journal-bookmark",
      title:
        "Universities and institutions managing academic and research data",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Indonesia | Professional ISMS Advisory
          Services – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve ISO 27001 Certification in Indonesia? First Cert provides customized ISMS consulting, security risk assessment, policy design, implementation assistance, and end-to-end audit support to help organizations safeguard information assets and meet international security standards."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Indonesia, ISO 27001 consultants in Indonesia, ISO 27001 certification cost in Indonesia, ISO 27001 implementation in Indonesia, ISO 27001 certification process Indonesia, ISO certification consultants Indonesia, ISO 27001 training in Indonesia, ISO 27001 documentation Indonesia, Information Security Management System Indonesia, ISMS certification Indonesia, ISO 27001 audit support Indonesia, affordable ISO 27001 certification Indonesia, First Cert ISO consultants, ISO 27001 consulting company Indonesia, ISO 27001 certification for IT companies Indonesia, ISO 27001 certification for startups Indonesia, ISO 27001 information security certification Indonesia."
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
          <h1 className="main-title">ISO 27001 Certification in Indonesia</h1>
          <p className="small-desc">
            Building Trust Through Information Security
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
                <b>ISO 27001 Certification in Indonesia</b> helps organizations
                establish a structured and reliable approach to protecting
                sensitive information from cyber risks, data leaks, and internal
                vulnerabilities. As Indonesian enterprises rapidly adopt digital
                platforms, cloud systems, and cross-border operations,
                information security management has become a critical business
                priority rather than a technical add-on.
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
                <b>First Cert</b> assists organizations across Indonesia in
                implementing ISO 27001 frameworks that align with operational
                realities and long-term business goals. Our focus is on
                embedding security into daily processes, ensuring ownership,
                accountability, and measurable risk control.
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
            Understanding ISO 27001 Certification in Indonesia
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Indonesia</b> verifies that an
            organization has implemented an Information Security Management
            System (ISMS) in line with ISO/IEC 27001 standards. The framework
            emphasizes risk identification, control selection, monitoring, and
            continuous improvement to protect information assets, ISO 27001
            addresses protection of:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Corporate and operational data</h5>
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
              <h5>Proprietary knowledge and intellectual assets</h5>
            </div>
          </div>
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Certification confirms that information security risks are
            systematically managed using globally recognized best practices.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Consider ISO 27001 Certification in Indonesia?
          </h2>

          <p className="text-center section-sub mb-5">
            ISO 27001 is suitable for organizations in Indonesia that handle
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
                    <a href="iso-9001-certification-in-indonesia">
                      ISO 9001 Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-indonesia">
                      ISO 27001 Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-indonesia">
                      CMMI Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-indonesia">
                      HIPAA Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-indonesia">
                      VAPT Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-indonesia">
                      GDPR Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-indonesia">
                      SOC 1 Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-indonesia">
                      SOC 2 Certification in Indonesia
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          For many Indonesian businesses, ISO 27001 is a key requirement for
          client contracts, regulatory alignment, and international market
          access.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Key Advantages of ISO 27001 Certification in Indonesia
              </h1>
              <p className="text-center section-sub mb-5">
                Achieving ISO 27001 Certification in Indonesia delivers
                long-term strategic benefits:
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
            ISO 27001 Implementation Methodology in Indonesia with
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
                <h4>ISMS Scope & Context Definition</h4>
                <p>
                  Identify information assets and organizational boundaries.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Security Risk & Gap Assessment</h4>
                <p>Evaluate current controls against ISO 27001 requirements.</p>
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
                <h4>Implementation Guidance</h4>
                <p>
                  Support deployment of administrative and technical controls.
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal Audit & Management Review</h4>
                <p>Assess readiness and system effectiveness.</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Certification Audit Support</h4>
                <p>Assist during Stage 1 and Stage 2 audits.</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Ongoing Improvement</h4>
                <p>Ensure continual ISMS performance and compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          ISO 27001 Certification Cost in Indonesia
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
                  The cost of ISO 27001 Certification in Indonesia depends on
                  several factors:
                </div>

                <ul className="features">
                  <li className="check">
                    Size and structure of the organization
                  </li>
                  <li className="check">
                    Type and sensitivity of information handled
                  </li>
                  <li className="check">
                    Complexity of IT systems and cloud usage
                  </li>
                  <li className="check">Scope and coverage of the ISMS</li>
                  <li className="check">
                    TrainingTraining, documentation, and audit preparation
                    requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial evaluation to provide a
                  transparent and tailored cost estimate aligned with your
                  business needs.
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
                  Achieve ISO 27001 Certification in Indonesia with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a reliable ISO 27001 consulting partner in
                  Indonesia, helping organizations design and implement
                  effective Information Security Management Systems that deliver
                  real business value. Our consultants emphasize practical
                  controls, clear documentation, and audit-ready systems.
                </div>
                <div className="title small-title">
                  From initial security assessment to certification and ongoing
                  improvement, First Cert ensures your ISO 27001 journey is
                  efficient, compliant, and results-focused.
                </div>
                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com Begin your ISO 27001
                  Certification in Indonesia with First Cert and strengthen
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

export default Indonesia27001;
