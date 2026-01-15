import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/middle-east/bahrain/vapt-img.webp";
import benefitsvapt from "../../../assets/img/country/middle-east/bahrain/vapt-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function BahrainVapt() {
  const benefits = [
    "Early detection of critical and high-risk vulnerabilities",
    "Lower probability of cyberattacks, data breaches, and downtime",
    "Stronger alignment with international security and compliance standards",
    "Improved resilience of applications, networks, and cloud environments",
    "Increased confidence among customers, auditors, and strategic partners",
  ];

  const industryData = [
    {
      icon: "bi bi-pc-display",
      title: "IT service providers and managed security service companies",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS platforms and cloud-native technology firms",
    },
    {
      icon: "bi bi-credit-card",
      title: "Banks, fintech companies, and payment service providers",
    },
    {
      icon: "bi bi-bag-check",
      title: "Online retailers, digital platforms, and marketplaces",
    },
    {
      icon: "bi bi-hospital",
      title: "Healthcare organizations and data-intensive businesses",
    },
    {
      icon: "bi bi-mortarboard",
      title:
        "Enterprises facing regulatory audits or client security requirements",
    },
    {
      icon: "bi bi-shield-lock",
      title:
        "Organizations preparing for ISO 27001, SOC 2, PCI DSS, HIPAA, or GDPR compliance",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          VAPT Certification in Bahrain | Advanced Vulnerability Assessment &
          Penetration Testing – First Cert
        </title>
        <meta
          name="description"
          content="Looking for VAPT Certification in Bahrain? First Cert provides expert vulnerability assessment and penetration testing services to identify security gaps, simulate real cyberattacks, and help organizations strengthen their digital defense strategies."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Bahrain, VAPT consultants Bahrain, penetration testing Bahrain, vulnerability assessment Bahrain, cybersecurity testing Bahrain, VAPT services Bahrain, VAPT cost Bahrain, network security testing Bahrain, application penetration testing Bahrain, cloud security testing Bahrain, mobile application security Bahrain, First Cert VAPT Bahrain, ethical hacking Bahrain, VAPT compliance Bahrain"
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
          <h1 className="main-title">VAPT Certification in Bahrain</h1>
          <p className="small-desc">
            Strengthening Cyber Defense Through Proactive Testing
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/918073358319?text=Thank you for contacting First Cert"
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
                alt="VAPT Certification in Bahrain"
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
                <b>VAPT Certification in Bahrain</b> helps organizations
                understand how resilient their IT systems, applications, and
                digital platforms are against real-world cyber threats. As
                Bahrain accelerates digital innovation across banking, fintech,
                cloud services, e-commerce, healthcare, and government
                initiatives, proactive security testing has become essential for
                preventing breaches and operational disruptions.
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
                <b>First Cert</b> works with organizations across Bahrain to
                deliver VAPT engagements that focus on real attack scenarios,
                business impact, and actionable remediation rather than
                surface-level scanning. Our approach prioritizes meaningful risk
                reduction and continuous security improvement.
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
            What VAPT Certification in Bahrain Involves
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>Vulnerability Assessment and Penetration Testing in Bahrain</b>{" "}
            combines systematic vulnerability identification with ethical
            exploitation techniques to evaluate how attackers could compromise
            systems in real conditions.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A typical VAPT engagement includes:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>
                Identification of security weaknesses across networks, servers,
                applications, APIs, and cloud environments
              </h5>
            </div>

            <div className="vapt-card">
              <h5>
                Controlled penetration testing that mimics modern attacker
                behavior
              </h5>
            </div>
            <div className="vapt-card">
              <h5>
                Analysis of exploit paths, privilege escalation, and lateral
                movement risks
              </h5>
            </div>
            <div className="vapt-card">
              <h5>
                Business-impact-based risk classification with clear mitigation
                recommendations
              </h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            VAPT certification demonstrates an organization's commitment to
            continuous cybersecurity validation and responsible risk management.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Bahrain That Require VAPT
          </h2>

          <p className="text-center section-sub mb-5">
            VAPT Certification in Bahrain is critical for organizations that
            rely on digital infrastructure or manage sensitive information,
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
                    <a href="iso-9001-certification-in-bahrain">
                      ISO 9001 Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-bahrain">
                      ISO 27001 Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-bahrain">
                      CMMI Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-bahrain">
                      HIPAA Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-bahrain">
                      VAPT Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-bahrain">
                      GDPR Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-bahrain">
                      SOC 1 Certification in Bahrain
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-bahrain">
                      SOC 2 Certification in Bahrain
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          VAPT enables Bahrain-based organizations to meet global cybersecurity
          expectations and reduce exposure to evolving threats.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Key Benefits of VAPT Certification in Bahrain
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving VAPT Certification in Bahrain gain
                significant security and business advantages, such as:
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
                alt="VAPT Benefits in Bahrain"
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
            VAPT shifts cybersecurity from a reactive function to a proactive
            defense strategy.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's VAPT Methodology in Bahrain
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
            First Cert follows a structured, risk-focused VAPT delivery model
            tailored to organizations in Bahrain:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Scope Definition</h4>
                <p>Identify systems, assets, and testing objectives</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Vulnerability Discovery</h4>
                <p>Perform deep technical security assessments</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Penetration Testing</h4>
                <p>Execute safe and controlled attack simulations</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Impact Evaluation</h4>
                <p>Assess exploit severity and business consequences</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Detailed Reporting</h4>
                <p>Provide technical findings and executive-level summaries</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Support</h4>
                <p>Guide teams on practical mitigation actions</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Validation Testing</h4>
                <p>Re-test to confirm effective vulnerability closure</p>
              </div>
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
            This approach ensures testing results translate into measurable
            security improvements.
          </p>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          VAPT Certification Cost in Bahrain
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
                  The cost of VAPT Certification in Bahrain depends on multiple
                  factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Number and type of applications, systems, and infrastructure
                    components
                  </li>
                  <li className="check">
                    Testing scope such as web, mobile, API, network, or cloud
                    environments
                  </li>
                  <li className="check">
                    Technical complexity and third-party integrations
                  </li>
                  <li className="check">
                    Sensitivity of organizational and customer data
                  </li>
                  <li className="check">
                    Required depth of testing, reporting, and re-validation
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a technical scoping review to deliver a
                  transparent, customized cost estimate aligned with your
                  security and compliance objectives.
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
                  Get VAPT Certification in Bahrain with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted cybersecurity consulting partner in
                  Bahrain, supporting startups, growing businesses, and
                  enterprises with actionable and effective VAPT services. Our
                  specialists focus on real risk exposure and long-term cyber
                  resilience rather than checklist-driven testing.
                </div>

                <div className="title small-title">
                  From initial security assessment through remediation
                  validation, First Cert helps organizations in Bahrain stay
                  protected against emerging cyber threats.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your VAPT Certification journey in Bahrain with First
                  Cert and secure your digital ecosystem with clarity,
                  confidence, and proactive cybersecurity assurance.
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

export default BahrainVapt;
