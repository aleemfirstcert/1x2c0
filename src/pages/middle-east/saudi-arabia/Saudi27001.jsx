import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/middle-east/saudi-arabia/27001-img.webp";
import benefitsvapt from "../../../assets/img/country/middle-east/saudi-arabia/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Saudi27001() {
  const benefits = [
    "Stronger Information Security – Reduces risks related to data breaches and cyber threats.",
    "Regulatory Readiness – Supports compliance with global and regional data protection requirements.",
    "Customer & Partner Trust – Demonstrates responsible handling of sensitive information.",
    "Risk-Based Governance – Enables structured identification and treatment of security risks.",
    "Business Continuity Support – Strengthens resilience against security incidents and disruptions.",
  ];

  const hipaaData = [
    {
      icon: "bi bi-code-slash",
      title: "IT and software development firms",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud service providers and SaaS companies",
    },
    {
      icon: "bi bi-bank",
      title: "Banks, fintech, and financial institutions",
    },
    {
      icon: "bi bi-heart-pulse",
      title: "Healthcare providers and health-tech companies",
    },
    {
      icon: "bi bi-cart-check",
      title: "E-commerce platforms and digital businesses",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Educational institutions and training providers",
    },
    {
      icon: "bi bi-graph-up-arrow",
      title: "BPOs, KPOs, and data processing centers",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Saudi Arabia | Expert ISMS Consultants –
          First Cert
        </title>
        <meta
          name="description"
          content="Looking for ISO 27001 Certification in Saudi Arabia? First Cert offers professional ISMS consulting, risk assessment, documentation, implementation, and audit readiness services to help organizations secure information assets and meet global security standards."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Saudi Arabia, ISO 27001 consultants in Saudi Arabia, ISO 27001 certification cost in Saudi Arabia, ISO 27001 implementation in Saudi Arabia, ISO 27001 certification process Saudi Arabia, ISO certification consultants Saudi Arabia, ISO 27001 training in Saudi Arabia, ISO 27001 documentation Saudi Arabia, Information Security Management System Saudi Arabia, ISMS certification Saudi Arabia, ISO 27001 audit support Saudi Arabia, affordable ISO 27001 certification Saudi Arabia, First Cert ISO consultants, ISO 27001 consulting company Saudi Arabia, ISO 27001 certification for IT companies Saudi Arabia, ISO 27001 certification for startups Saudi Arabia, ISO 27001 information security certification Saudi Arabia."
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
          <h1 className="main-title">
            ISO 27001 Certification in Saudi Arabia
          </h1>
          <p className="small-desc">Secure Information, Build Confidence</p>
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
                <b>ISO 27001 Certification in Saudi Arabia</b> enables
                organizations to protect sensitive data, manage cybersecurity
                risks, and establish strong governance over information
                security. As digital transformation accelerates across
                industries, businesses are increasingly expected to demonstrate
                robust controls for safeguarding data and systems.
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
                <b>First Cert</b> assists organizations throughout Saudi Arabia
                in developing and implementing an effective Information Security
                Management System (ISMS). Our end-to-end approach covers
                security risk assessment, ISMS documentation, implementation
                support, staff training, and certification audit
                preparation—ensuring a smooth and practical path to ISO 27001
                compliance.
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
            What is ISO 27001 Certification in Saudi Arabia?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Saudi Arabia</b> is based on the
            globally recognized ISO/IEC 27001 standard for information security
            management. It provides a structured framework to identify, assess,
            and control risks related to information assets.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            The standard focuses on protecting:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Confidential business information</h5>
            </div>

            <div class="vapt-card">
              <h5>Customer and employee personal data</h5>
            </div>

            <div class="vapt-card">
              <h5>Financial and operational records</h5>
            </div>

            <div class="vapt-card">
              <h5>Digital systems and intellectual property</h5>
            </div>
          </div>
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Organizations that adopt ISO 27001 benefit from improved risk
            management, stronger security controls, and alignment with
            international data protection expectations. Certification
            demonstrates a proactive commitment to information security and
            operational resilience.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Implement ISO 27001 in Saudi Arabia?
          </h2>

          <p className="text-center section-sub mb-5">
            ISO 27001 implementation in Saudi Arabia is suitable for any
            organization that handles sensitive or business-critical
            information, including:
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
                    <a href="iso-9001-certification-in-saudi-arabia">
                      ISO 9001 Certification in Saudi Arabia
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-saudi-arabia">
                      ISO 27001 Certification in Saudi Arabia
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-saudi-arabia">
                      CMMI Certification in Saudi Arabia
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-saudi-arabia">
                      HIPAA Certification in Saudi Arabia
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-saudi-arabia">
                      VAPT Certification in Saudi Arabia
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-saudi-arabia">
                      GDPR Certification in Saudi Arabia
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-saudi-arabia">
                      SOC 1 Certification in Saudi Arabia
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-saudi-arabia">
                      SOC 2 Certification in Saudi Arabia
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          For Saudi-based organizations working with international clients, ISO
          27001 is often a key requirement for contracts, partnerships, and
          regulatory alignment.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting ISO 27001 Certification in Saudi Arabia
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
            With <a href="/">First Cert</a>, ISO 27001 certification becomes a
            strategic tool for long-term security and credibility.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            ISO 27001 Certification in Saudi Arabia – Simple Process with <br />
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
            Our ISO 27001 consulting methodology is practical and
            business-focused:
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
                <h4>Initial Assessment</h4>
                <p>Define ISMS scope, assets, and security objectives.</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Risk & Gap Analysis</h4>
                <p>Identify security gaps against ISO 27001 controls.</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>ISMS Documentation</h4>
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
                  Assist with technical and organizational control deployment.
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
                <p>Support during the external audit by an accredited body.</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Post-Certification Support</h4>
                <p>Ongoing improvement and surveillance audit guidance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          ISO 27001 Certification Cost in Saudi Arabia
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
                  The cost of ISO 27001 Certification in Saudi Arabia depends on
                  multiple business-specific factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Size and structure of the organization
                  </li>
                  <li className="check">
                    Volume and sensitivity of information handled
                  </li>
                  <li className="check">IT infrastructure complexity</li>
                  <li className="check">
                    Existing security controls and maturity level
                  </li>
                  <li className="check">Scope of ISMS implementation</li>
                  <li className="check">
                    Audit duration and certification body requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial assessment to provide a
                  transparent and customized cost estimate tailored to your
                  organization’s needs.
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
                  Achieve ISO 27001 Certification in Saudi Arabia with First
                  Cert
                </div>

                <div className="title small-title">
                  First Cert is your reliable partner for ISO 27001
                  Certification in Saudi Arabia. We help organizations design,
                  implement, and maintain an effective ISMS aligned with
                  international best practices and business objectives.
                </div>
                <div className="title small-title">
                  With experience across IT, finance, healthcare, education,
                  manufacturing, and service sectors, our consultants deliver
                  practical, cost-effective, and results-driven ISO 27001
                  solutions—from planning to certification success.
                </div>
                <div className="title small-title-p">
                  📧 Contact us: info@firstcertification.com Start your ISO
                  27001 Certification journey in Saudi Arabia with First Cert
                  and strengthen your information security with confidence.
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

export default Saudi27001;
