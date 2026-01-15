import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/middle-east/UAE/27001-img.webp";
import benefitsvapt from "../../../assets/img/country/middle-east/UAE/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Uae27001() {
  const benefits = [
    "Enhanced Data Protection – Minimizes risks of breaches and unauthorized access",
    "Proactive Risk Management – Identifies and mitigates security threats early",
    "Improved Stakeholder Trust – Builds confidence among clients, partners, and regulators",
    "Compliance Support – Aligns with international data protection and security requirements",
    "Business Continuity – Strengthens resilience against cyber incidents and disruptions",
  ];

  const hipaaData = [
    {
      icon: "bi bi-code-slash",
      title: "IT services and software development firms",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Technology providers and internet-based businesses",
    },
    {
      icon: "bi bi-bank",
      title: "Financial institutions and fintech companies",
    },
    {
      icon: "bi bi-heart-pulse",
      title: "Healthcare organizations and medical service providers",
    },
    {
      icon: "bi bi-globe",
      title: "NGOs and international project-based organizations",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Educational institutions and training providers",
    },
    {
      icon: "bi bi-graph-up-arrow",
      title: "BPOs and data processing service companies",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in UAE | Expert ISMS Consulting Services –
          First Cert
        </title>
        <meta
          name="description"
          content="Planning to obtain ISO 27001 Certification in the UAE? First Cert delivers professional ISMS consulting, risk assessment, documentation, implementation guidance, and audit support to help organizations safeguard information and meet global security standards."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in UAE, ISO 27001 consultants in UAE, ISO 27001 certification cost in UAE, ISO 27001 implementation in UAE, ISO 27001 certification process UAE, ISO certification consultants UAE, ISO 27001 training in UAE, ISO 27001 documentation UAE, Information Security Management System UAE, ISMS certification UAE, ISO 27001 audit support UAE, affordable ISO 27001 certification UAE, First Cert ISO consultants, ISO 27001 consulting company UAE, ISO 27001 certification for IT companies UAE, ISO 27001 certification for startups UAE, ISO 27001 information security certification UAE."
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
          <h1 className="main-title">ISO 27001 Certification in UAE</h1>
          <p className="small-desc">
            Building Strong Information Security & Risk Governance
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
                <b>ISO 27001 Certification in UAE</b> enables organizations to
                implement a systematic approach for protecting sensitive
                information and managing cybersecurity risks. As businesses in
                the UAE continue to digitize operations and rely heavily on
                data-driven systems, ensuring information confidentiality,
                integrity, and availability has become a business priority.
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
                <b>First Cert</b> supports organizations across the UAE with
                practical ISO 27001 consulting services focused on risk control,
                operational security, and sustainable compliance. Our
                methodology integrates information security into everyday
                business processes rather than treating certification as a
                one-time objective.
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
            Overview of ISO 27001 Certification in UAE
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in UAE</b> is based on the
            internationally recognized ISO/IEC 27001 standard. It provides a
            structured framework for establishing, implementing, maintaining,
            and continually improving an{" "}
            <b>Information Security Management System (ISMS)</b>. The standard
            helps organizations manage risks related to:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Confidential business and operational records</h5>
            </div>

            <div class="vapt-card">
              <h5>Customer, employee, and stakeholder data</h5>
            </div>

            <div class="vapt-card">
              <h5>Financial and contractual information</h5>
            </div>

            <div class="vapt-card">
              <h5>IT systems, cloud platforms, and intellectual property</h5>
            </div>
          </div>
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Achieving ISO 27001 certification demonstrates that an organization
            follows globally accepted best practices for information security
            management and risk-based decision-making.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Implement ISO 27001 in UAE?
          </h2>

          <p className="text-center section-sub mb-5">
            ISO 27001 is relevant for UAE organizations that create, process,
            store, or manage sensitive information, including:
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
                    <a href="iso-9001-certification-in-uae">
                      ISO 9001 Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-uae">
                      ISO 27001 Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-uae">
                      CMMI Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-uae">
                      HIPAA Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-uae">
                      VAPT Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-uae">
                      GDPR Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-uae">
                      SOC 1 Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-uae">
                      SOC 2 Certification in UAE
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          Many UAE organizations require ISO 27001 certification to meet
          international client expectations, regulatory obligations, and
          contractual security requirements.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting ISO 27001 Certification in UAE
              </h1>
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
            ISO 27001 certification strengthens internal governance while
            improving market credibility.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            ISO 27001 Certification in UAE – Simple Process with
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
            First Cert follows a structured and business-aligned ISMS
            implementation approach:
          </p>
          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Business & Security Review</h4>
                <p>Understand organizational context and information assets.</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Risk and Gap Assessment</h4>
                <p>Evaluate current controls against ISO 27001 requirements.</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>ISMS Framework Development</h4>
                <p>Policies, procedures, risk registers, and control plans.</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Implementation Assistance</h4>
                <p>
                  Support in applying technical and organizational controls.
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal ISMS Audit</h4>
                <p>Validate effectiveness and readiness.</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Certification Audit Support</h4>
                <p>Guidance during the external audit stage.</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Continuous Improvement Support</h4>
                <p>Ongoing monitoring and system enhancement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          ISO 27001 Certification Cost in UAE
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
                  The cost of ISO 27001 Certification in UAE depends on several
                  factors, such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and operational complexity
                  </li>
                  <li className="check">
                    Nature and sensitivity of information assets
                  </li>
                  <li className="check">
                    IT infrastructure and system maturity
                  </li>
                  <li className="check">Scope of ISMS implementation</li>
                  <li className="check">
                    Audit duration and certification body fees
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert provides transparent and customized pricing after
                  an initial assessment, ensuring affordability without
                  compromising quality.
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
                  Achieve ISO 27001 Certification in UAE with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a reliable ISO 27001 consulting partner in the
                  UAE, helping organizations design and implement effective ISMS
                  frameworks aligned with international standards. Our
                  consultants focus on practical security controls, clear
                  documentation, and audit-ready systems that deliver long-term
                  value.
                </div>
                <div className="title small-title">
                  From initial assessment to certification and beyond, First
                  Cert ensures a smooth and efficient ISO 27001 certification
                  journey.
                </div>
                <div className="title small-title-p">
                  📩 Contact us at: info@firstcertification.com Start your ISO
                  27001 Certification journey in UAE with First Cert — your
                  partner in information security excellence and cyber
                  resilience.
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

export default Uae27001;
