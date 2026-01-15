import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/middle-east/yemen/27001-img.avif";
import benefitsvapt from "../../../assets/img/country/middle-east/yemen/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Yemen27001() {
  const benefits = [
    "Improved Information Protection – Reduces exposure to data leaks and cyber incidents.",
    "Structured Risk Management – Identifies and controls security risks proactively.",
    "Increased Stakeholder Confidence – Builds trust with clients, donors, and partners.",
    "Regulatory & Contractual Alignment – Supports compliance with global data protection requirements.",
    "Operational Stability – Enhances resilience against security disruptions and incidents.",
  ];

  const hipaaData = [
    {
      icon: "bi bi-code-slash",
      title: "IT and software development companies",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Internet service providers and technology firms",
    },
    {
      icon: "bi bi-bank",
      title: "Financial services and microfinance institutions",
    },
    {
      icon: "bi bi-heart-pulse",
      title: "Healthcare organizations and medical service providers",
    },
    {
      icon: "bi bi-globe",
      title: "NGOs and international project organizations",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Educational institutions and training centers",
    },
    {
      icon: "bi bi-graph-up-arrow",
      title: "BPOs and data handling service providers",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Yemen | Professional ISMS Consultants –
          First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve ISO 27001 Certification in Yemen? First Cert provides expert ISMS consulting, risk management, documentation, implementation support, and audit assistance to help organizations protect information and meet international security standards."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Yemen, ISO 27001 consultants in Yemen, ISO 27001 certification cost in Yemen, ISO 27001 implementation in Yemen, ISO 27001 certification process Yemen, ISO certification consultants Yemen, ISO 27001 training in Yemen, ISO 27001 documentation Yemen, Information Security Management System Yemen, ISMS certification Yemen, ISO 27001 audit support Yemen, affordable ISO 27001 certification Yemen, First Cert ISO consultants, ISO 27001 consulting company Yemen, ISO 27001 certification for IT companies Yemen, ISO 27001 certification for startups Yemen, ISO 27001 information security certification Yemen."
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
          <h1 className="main-title">ISO 27001 Certification in Yemen</h1>
          <p className="small-desc">
            Strengthening Information Security & Risk Control
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
                <b>ISO 27001 Certification in Yemen</b> helps organizations
                establish a structured approach to securing sensitive
                information and managing cybersecurity risks effectively. As
                digital operations expand and data becomes a critical business
                asset, organizations must ensure confidentiality, integrity, and
                availability of information.
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
                <b>First Cert</b> supports businesses in Yemen with tailored ISO
                27001 consulting services that focus on practical security
                controls, risk reduction, and long-term compliance. Our approach
                ensures that information security is embedded into daily
                operations rather than treated as a one-time certification
                activity.
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
            What is ISO 27001 Certification in Yemen?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Yemen</b> is an internationally
            accepted standard that specifies requirements for establishing,
            implementing, maintaining, and continually improving an{" "}
            <b>Information Security Management System (ISMS)</b>.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            The standard helps organizations identify threats, assess
            vulnerabilities, and implement controls to protect information
            assets such as:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Business-critical documents and records</h5>
            </div>

            <div class="vapt-card">
              <h5>Customer and employee personal data</h5>
            </div>

            <div class="vapt-card">
              <h5>Financial and operational information</h5>
            </div>

            <div class="vapt-card">
              <h5>Digital platforms, systems, and intellectual property</h5>
            </div>
          </div>
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            ISO 27001 certification demonstrates that an organization follows
            globally accepted best practices for information security and risk
            governance.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Which Businesses Need ISO 27001 Certification in Yemen?
          </h2>

          <p className="text-center section-sub mb-5">
            ISO 27001 implementation in Yemen is suitable for any organization
            that handles sensitive or confidential information, including:
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
                    <a href="iso-9001-certification-in-yemen">
                      ISO 9001 Certification in Yemen
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-yemen">
                      ISO 27001 Certification in Yemen
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-yemen">
                      CMMI Certification in Yemen
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-yemen">
                      HIPAA Certification in Yemen
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-yemen">
                      VAPT Certification in Yemen
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-yemen">
                      GDPR Certification in Yemen
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-yemen">
                      SOC 1 Certification in Yemen
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-yemen">
                      SOC 2 Certification in Yemen
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          Organizations in Yemen working with international partners often
          require ISO 27001 certification to meet contractual and compliance
          expectations.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting ISO 27001 Certification in Yemen
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
            ISO 27001 certification helps organizations in Yemen build
            credibility while strengthening internal security governance.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            ISO 27001 Certification in Yemen – Simple Process with
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
            First Cert follows a clear, practical, and business-aligned ISMS
            implementation approach:
          </p>
          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Initial Consultation</h4>
                <p>
                  Understand business context, information assets, and security
                  goals.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Risk & Gap Assessment</h4>
                <p>Identify current security gaps and risk exposure.</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>ISMS Design & Documentation</h4>
                <p>
                  Develop policies, procedures, risk registers, and control
                  plans.
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Implementation Support</h4>
                <p>
                  Assist with applying technical and organizational security
                  controls.
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal Audit</h4>
                <p>Review ISMS effectiveness and readiness.</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Certification Audit Support</h4>
                <p>Guide organizations through the external audit process.</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Continual Improvement</h4>
                <p>
                  Ongoing support for maintaining and improving ISMS
                  performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          ISO 27001 Certification Cost in Yemen
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
                  The cost of ISO 27001 Certification in Yemen depends on
                  several factors, such as:
                </div>

                <ul className="features">
                  <li className="check">Organization size and workforce</li>
                  <li className="check">
                    Type and sensitivity of information handled
                  </li>
                  <li className="check">
                    Complexity of IT systems and infrastructure
                  </li>
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
                  Achieve ISO 27001 Certification in Yemen with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted ISO 27001 consulting partner for
                  organizations in Yemen seeking reliable information security
                  compliance. We help organizations design and implement
                  effective ISMS frameworks that align with international
                  standards while supporting real operational needs.
                </div>
                <div className="title small-title">
                  Our experienced consultants focus on practical security
                  solutions, clear documentation, and smooth audit
                  readiness—ensuring long-term value beyond certification.
                </div>
                <div className="title small-title-p">
                  📩 Contact us at: info@firstcertification.com Start your ISO
                  27001 Certification journey in Yemen with First Cert — your
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

export default Yemen27001;
