import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/middle-east/kuwait/27001-img.webp";
import benefitsvapt from "../../../assets/img/country/middle-east/kuwait/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Kuwait27001() {
  const benefits = [
    "Stronger Information Security – Protects critical business and customer data.",
    "Regulatory Compliance – Aligns with GDPR, HIPAA, and local data protection laws.",
    "Improved Customer Trust – Demonstrates commitment to secure data handling.",
    "Reduced Security Risks – Identifies and mitigates information security threats.",
    "Operational Improvement – Establishes structured and controlled security processes.",
  ];

  const hipaaData = [
    {
      icon: "bi bi-code-slash",
      title: "IT and Software Development Companies",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS & Cloud Service Providers",
    },
    {
      icon: "bi bi-bank",
      title: "Financial Institutions and Fintech Companies",
    },
    {
      icon: "bi bi-heart-pulse",
      title: "Healthcare Providers and Health-Tech Firms",
    },
    {
      icon: "bi bi-cart-check",
      title: "E-commerce Platforms and Online Businesses",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Educational Institutions and EdTech Providers",
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
          ISO 27001 Certification in Kuwait | Affordable ISO 27001 Consultants –
          First Cert
        </title>
        <meta
          name="description"
          content="Looking for ISO 27001 Certification in Kuwait? First Cert delivers expert consulting, ISMS documentation, training, and audit support to help organizations achieve strong information security compliance."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Kuwait, ISO 27001 consultants in Kuwait, ISO 27001 certification cost in Kuwait, ISO 27001 implementation in Kuwait, ISO 27001 certification process Kuwait, ISO certification consultants Kuwait, ISO 27001 training in Kuwait, ISO 27001 documentation Kuwait, Information Security Management System Kuwait, ISMS certification Kuwait, ISO 27001 audit support Kuwait, affordable ISO 27001 certification Kuwait, First Cert ISO consultants, ISO 27001 consulting company Kuwait, ISO 27001 certification for IT companies Kuwait, ISO 27001 certification for startups Kuwait, ISO 27001 information security certification Kuwait."
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
          <h1 className="main-title">ISO 27001 Certification in Kuwait</h1>
          <p className="small-desc">
            Secure Your Information and Strengthen Compliance
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
                Achieve <b>ISO 27001 Certification in Kuwait</b> with
                experienced consultants from <b>First Cert</b>. We support
                organizations in building a reliable Information Security
                Management System (ISMS) that protects critical data, meets
                regulatory expectations, and enhances customer confidence.
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
                Our comprehensive services — covering risk analysis, ISMS
                documentation, implementation, and audit readiness — make ISO
                27001 implementation in Kuwait smooth, cost-effective, and
                results-oriented. Strengthen your cybersecurity framework and
                align with global information security standards through ISO
                27001 certification.
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
            What is ISO 27001 Certification in Kuwait?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Kuwait</b> is an internationally
            accepted standard that specifies requirements for establishing,
            implementing, maintaining, and continually improving an{" "}
            <b>Information Security Management System (ISMS)</b>.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            It enables organizations to systematically protect sensitive assets
            such as financial records, intellectual property, employee
            information, and third-party data.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Applicable across industries like IT, finance, healthcare,
            e-commerce, education, and manufacturing, ISO 27001 helps reduce
            cyber threats, support regulatory compliance, and build stakeholder
            trust.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            By achieving ISO 27001 certification, Kuwait-based organizations
            demonstrate a strong commitment to data protection, cybersecurity
            resilience, and long-term business continuity.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Which Businesses Need ISO 27001 Certification Implementation in
            Kuwait?
          </h2>

          <p className="text-center section-sub mb-5">
            Any organization in Kuwait that handles confidential information or
            relies on digital systems should consider ISO 27001 Certification
            Implementation. This includes:
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
                    <a href="iso-9001-certification-in-kuwait">
                      ISO 9001 Certification in Kuwait
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-kuwait">
                      ISO 27001 Certification in Kuwait
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-kuwait">
                      CMMI Certification in Kuwait
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-kuwait">
                      HIPAA Certification in Kuwait
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-kuwait">
                      VAPT Certification in Kuwait
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-kuwait">
                      GDPR Certification in Kuwait
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-kuwait">
                      SOC 1 Certification in Kuwait
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-kuwait">
                      SOC 2 Certification in Kuwait
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          Implementing ISO 27001 helps businesses in Kuwait safeguard sensitive
          data, minimize cyber risks, and enhance trust among clients and
          partners.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting ISO 27001 Certification in Kuwait
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
            <b>ISO 27001 Certification in Kuwait</b> becomes a structured and
            value-focused journey — ensuring compliance, data integrity, and
            sustainable growth.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            ISO 27001 Certification in Kuwait – Simple Process with
            <span style={{ color: "black" }}>First Cert</span>
          </h2>
          <br />
          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Consultation</h4>
                <p>Define security goals, scope, and compliance needs.</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Gap Assessment</h4>
                <p>Identify gaps in current security controls.</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Documentation</h4>
                <p>Develop ISMS policies, procedures, and risk registers.</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Implementation</h4>
                <p>
                  Apply controls, conduct training, and integrate security
                  practices.
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Internal Audit</h4>
                <p>Verify readiness and effectiveness of controls.</p>
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
                <p>Surveillance audits and continual improvement guidance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          How Much Does ISO 27001 Certification Cost in Kuwait?
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
                  The cost of ISO 27001 certification in Kuwait depends on
                  several organizational factors, such as:
                </div>

                <ul className="features">
                  <li className="check">Company size and employee count</li>
                  <li className="check">
                    Type and sensitivity of information handled
                  </li>
                  <li className="check">
                    IT systems and infrastructure complexity
                  </li>
                  <li className="check">Existing security maturity</li>
                  <li className="check">
                    Certification scope and audit duration
                  </li>
                  <li className="check">
                    Training and internal audit requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert offers transparent and customized pricing after
                  evaluating your specific business requirements.
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
                  Achieve ISO 27001 Certification in Kuwait with First Cert –
                  Your Trusted ISMS Partner
                </div>

                <div className="title small-title">
                  If you are planning to achieve ISO 27001 Certification in
                  Kuwait, First Cert is your dependable compliance partner. We
                  specialize in designing and implementing ISMS frameworks
                  aligned with ISO 27001 standards to ensure strong data
                  security, regulatory compliance, and business continuity.
                </div>
                <div className="title small-title">
                  With proven experience across IT, finance, healthcare,
                  manufacturing, and education sectors, we deliver tailored ISO
                  27001 consulting services that ensure a smooth and successful
                  certification journey.
                </div>
                <div className="title small-title-p">
                  📩 Contact us at: info@firstcertification.com Start your ISO
                  27001 Certification journey in Kuwait with First Cert — your
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

export default Kuwait27001;
