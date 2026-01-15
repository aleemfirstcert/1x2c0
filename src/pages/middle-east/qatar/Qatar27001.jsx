import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/middle-east/qatar/27001-img.webp";
import benefitsvapt from "../../../assets/img/country/middle-east/qatar/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Qatar27001() {
  const benefits = [
    "Enhanced Data Protection – Safeguards critical business and customer information.",
    "Regulatory Alignment – Supports compliance with GDPR, HIPAA, and regional data laws.",
    "Improved Client Confidence – Demonstrates strong information security practices.",
    "Reduced Cybersecurity Risks – Identifies and mitigates security threats proactively.",
    "Operational Control – Establishes structured security policies and monitoring mechanisms.",
  ];

  const hipaaData = [
    {
      icon: "bi bi-code-slash",
      title: "IT and Software Development Companies",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud, SaaS & Hosting Providers",
    },
    {
      icon: "bi bi-bank",
      title: "Financial Institutions and Fintech Firms",
    },
    {
      icon: "bi bi-heart-pulse",
      title: "Healthcare Providers and Health-Tech Companies",
    },
    {
      icon: "bi bi-cart-check",
      title: "E-commerce Platforms and Digital Platforms",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Educational Institutions and Training Providers",
    },
    {
      icon: "bi bi-graph-up-arrow",
      title: "BPOs, KPOs & Data Processing Organizations",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Qatar | Trusted ISO 27001 Consultants –
          First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve ISO 27001 Certification in Qatar? First Cert provides expert ISMS consulting, documentation, implementation guidance, training, and audit support to help organizations strengthen information security and compliance."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Qatar, ISO 27001 consultants in Qatar, ISO 27001 certification cost in Qatar, ISO 27001 implementation in Qatar, ISO 27001 certification process Qatar, ISO certification consultants Qatar, ISO 27001 training in Qatar, ISO 27001 documentation Qatar, Information Security Management System Qatar, ISMS certification Qatar, ISO 27001 audit support Qatar, affordable ISO 27001 certification Qatar, First Cert ISO consultants, ISO 27001 consulting company Qatar, ISO 27001 certification for IT companies Qatar, ISO 27001 certification for startups Qatar, ISO 27001 information security certification Qatar."
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
          <h1 className="main-title">ISO 27001 Certification in Qatar</h1>
          <p className="small-desc">
            Build Strong Information Security & Digital Trust
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
                Achieve <b>ISO 27001 Certification in Qatar</b> helps
                organizations protect critical information assets, manage cyber
                risks, and demonstrate compliance with international information
                security standards. With growing digital adoption across
                industries, having a structured Information Security Management
                System (ISMS) is essential for protecting sensitive business and
                customer data.
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
                <b>First Cert</b> supports organizations across Qatar by
                delivering complete ISO 27001 consulting services — from initial
                risk evaluation and ISMS framework design to implementation and
                certification audit readiness. Our practical, cost-effective
                approach ensures your organization achieves certification
                efficiently while strengthening long-term security resilience.
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
            What is ISO 27001 Certification in Qatar?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Qatar</b> is an internationally
            accepted standard that specifies requirements for establishing,
            implementing, maintaining, and continually improving an{" "}
            <b>Information Security Management System (ISMS)</b>.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            The standard helps organizations systematically manage information
            security risks related to:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Confidential business information</h5>
            </div>

            <div class="vapt-card">
              <h5>Customer and employee data</h5>
            </div>

            <div class="vapt-card">
              <h5>Financial and operational records</h5>
            </div>

            <div class="vapt-card">
              <h5>Intellectual property and digital assets</h5>
            </div>
          </div>
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Organizations in sectors such as IT, finance, healthcare, education,
            e-commerce, energy, and manufacturing adopt ISO 27001 to reduce
            cyber threats, comply with regulatory requirements, and build
            stakeholder confidence. Achieving ISO 27001 certification in Qatar
            demonstrates a strong commitment to data protection, cybersecurity
            governance, and business continuity.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Which Businesses Need ISO 27001 Certification in Qatar?
          </h2>

          <p className="text-center section-sub mb-5">
            Any organization in Qatar that processes, stores, or manages
            sensitive information should consider ISO 27001 Certification. This
            includes:
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
                    <a href="iso-9001-certification-in-qatar">
                      ISO 9001 Certification in Qatar
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-qatar">
                      ISO 27001 Certification in Qatar
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-qatar">
                      CMMI Certification in Qatar
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-qatar">
                      HIPAA Certification in Qatar
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-qatar">
                      VAPT Certification in Qatar
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-qatar">
                      GDPR Certification in Qatar
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-qatar">
                      SOC 1 Certification in Qatar
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-qatar">
                      SOC 2 Certification in Qatar
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          Implementing ISO 27001 enables Qatar-based businesses to minimize
          cyber risks, meet client security expectations, and strengthen trust
          in digital operations.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting ISO 27001 Certification in Qatar
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
            With <a href="/">First Cert</a>, achieving{" "}
            <b>ISO 27001 Certification in Qatar</b> becomes a structured and
            value-focused journey — ensuring compliance, data integrity, and
            sustainable growth.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            ISO 27001 Certification in Qatar – Simple Process with
            <span style={{ color: "black" }}>First Cert</span>
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
            Our ISO 27001 consulting approach is practical, structured, and
            outcome-focused:
          </p>
          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Initial Consultation</h4>
                <p>Define ISMS scope, objectives, and security priorities.</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Gap Assessment</h4>
                <p>
                  Evaluate existing controls against ISO 27001 requirements.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>ISMS Documentation</h4>
                <p>
                  Develop policies, procedures, risk assessments, and control
                  frameworks.
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Implementation Support</h4>
                <p>
                  Assist with control deployment, employee awareness, and system
                  alignment
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal Audit</h4>
                <p>Validate ISMS effectiveness and readiness.</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Certification Audit</h4>
                <p>
                  Final audit conducted by an accredited certification body.
                </p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Ongoing Support</h4>
                <p>Continuous improvement and surveillance audit assistance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          ISO 27001 Certification Cost in Qatar
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
                  The cost of ISO 27001 Certification in Qatar varies based on
                  organizational scope and complexity. Pricing is influenced by:
                </div>

                <ul className="features">
                  <li className="check">Organization size and workforce</li>
                  <li className="check">
                    Nature and sensitivity of information handled
                  </li>
                  <li className="check">IT infrastructure complexity</li>
                  <li className="check">Existing security maturity</li>
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
                  Achieve ISO 27001 Certification in Qatar with First Cert
                </div>

                <div className="title small-title">
                  If you are planning to achieve ISO 27001 Certification in
                  Qatar, First Cert is your trusted partner for complete ISMS
                  consulting and certification support. We help organizations
                  design, implement, and maintain effective information security
                  frameworks aligned with international standards.
                </div>
                <div className="title small-title">
                  With experience across IT, finance, healthcare, manufacturing,
                  education, and service sectors, our consultants ensure a
                  smooth, efficient, and compliant certification journey — from
                  documentation to audit success.
                </div>
                <div className="title small-title-p">
                  📩 Contact us at: info@firstcertification.com Start your ISO
                  27001 Certification journey in Qatar with First Cert — your
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

export default Qatar27001;
