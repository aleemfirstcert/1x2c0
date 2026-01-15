import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/asia/maldives/vapt-img.webp";
import benefitsvapt from "../../../assets/img/country/asia/maldives/vapt-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function MaldivesVapt() {
  const benefits = [
    "Early discovery of critical security weaknesses",
    "Reduced risk of cyber breaches and service disruptions",
    "Stronger protection for customer and business data",
    "Improved alignment with global cybersecurity standards",
    "Higher trust from clients, partners, and regulators",
  ];

  const industryData = [
    {
      icon: "bi bi-pc-display",
      title: "IT companies, software developers, and outsourcing firms",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS platforms and cloud service providers",
    },
    {
      icon: "bi bi-credit-card",
      title: "Banks, fintech operators, and payment processors",
    },
    {
      icon: "bi bi-bag-check",
      title: "Online retailers and customer-facing portals",
    },
    {
      icon: "bi bi-hospital",
      title: "Healthcare, research, and data-driven organizations",
    },
    {
      icon: "bi bi-mortarboard",
      title:
        "Businesses preparing for ISO 27001, SOC 2, PCI DSS, HIPAA, or GDPR compliance",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          VAPT Certification in Maldives | Proactive Cyber Defense & Penetration
          Testing – First Cert
        </title>
        <meta
          name="description"
          content="Looking for VAPT Certification in Maldives? First Cert provides advanced vulnerability assessment and penetration testing services that identify exploitable security gaps, validate system defenses, and help organizations strengthen their cybersecurity posture through real-world attack simulations."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Maldives, VAPT consultants Maldives, penetration testing Maldives, vulnerability assessment Maldives, cybersecurity testing Maldives, VAPT services Maldives, VAPT cost Maldives, network security testing Maldives, application penetration testing Maldives, cloud security testing Maldives, mobile application security Maldives, First Cert VAPT Maldives, ethical hacking Maldives, VAPT compliance Maldives"
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
          <h1 className="main-title">VAPT Certification in Maldives</h1>
          <p className="small-desc">Strengthening Digital Security</p>
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
                alt="VAPT Certification in Maldives"
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
                <b>VAPT Certification in Maldives</b> enables organizations to
                identify and fix security weaknesses before cybercriminals can
                exploit them. As Maldivian businesses expand across fintech,
                tourism platforms, healthcare systems, e-commerce, cloud
                services, and government portals, cyber risks are growing
                rapidly. Regular vulnerability assessment and penetration
                testing has become a critical layer of protection for sensitive
                data and digital operations.
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
                <b>First Cert</b> helps organizations in Maldives stay secure by
                applying threat-driven testing methods that mirror how real
                attackers target systems.
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
            What VAPT Certification in Maldives Covers
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>Vulnerability Assessment and Penetration Testing in Maldives</b>{" "}
            combines automated security scanning with expert-led ethical hacking
            to uncover weaknesses across applications, networks, APIs, and cloud
            infrastructure. This dual-layer approach exposes both visible and
            hidden security flaws.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A professional VAPT engagement typically includes:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Testing of web, mobile, network, and cloud environments</h5>
            </div>

            <div className="vapt-card">
              <h5>Simulated cyber-attacks to evaluate exploitability</h5>
            </div>
            <div className="vapt-card">
              <h5>
                Review of authentication, authorization, and access controls
              </h5>
            </div>
            <div className="vapt-card">
              <h5>Risk ranking based on business impact and likelihood</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            VAPT Certification confirms that security risks are measured,
            understood, and actively managed.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Maldives That Need VAPT
          </h2>

          <p className="text-center section-sub mb-5">
            VAPT Certification in Maldives is essential for any organization
            that relies on digital platforms or handles sensitive information,
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
                    <a href="iso-9001-certification-in-maldives">
                      ISO 9001 Certification in Maldives
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-maldives">
                      ISO 27001 Certification in Maldives
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-maldives">
                      CMMI Certification in Maldives
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-maldives">
                      HIPAA Certification in Maldives
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-maldives">
                      VAPT Certification in Maldives
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-maldives">
                      GDPR Certification in Maldives
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-maldives">
                      SOC 1 Certification in Maldives
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-maldives">
                      SOC 2 Certification in Maldives
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          VAPT helps Maldivian organizations meet international security
          expectations and contractual requirements.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Benefits of VAPT Certification in Maldives
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that complete VAPT Certification in Maldives
                achieve:
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
                alt="VAPT Benefits in Maldives"
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
            VAPT shifts cybersecurity from reactive incident response to
            proactive risk management.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's VAPT Delivery Model in Maldives
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
            First Cert applies a structured and results-driven VAPT framework
            for organizations in Maldives:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Asset Scoping</h4>
                <p>Define systems, applications, and testing scope</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Vulnerability Identification</h4>
                <p>Perform deep technical analysis</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Penetration Testing</h4>
                <p>Conduct controlled ethical hacking exercises</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Risk Analysis</h4>
                <p>Link findings to business and operational impact</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Reporting</h4>
                <p>Provide clear technical and executive-level reports</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Support</h4>
                <p>Guide teams in closing security gaps</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Re-Testing</h4>
                <p>Confirm vulnerabilities have been properly resolved</p>
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
            This ensures measurable security improvement and long-term
            resilience.
          </p>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          VAPT Certification Cost in Maldives
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
                  The cost of VAPT Certification in Maldives depends on:
                </div>

                <ul className="features">
                  <li className="check">
                    Number and type of applications and systems tested
                  </li>
                  <li className="check">
                    Coverage across network, web, mobile, API, and cloud assets
                  </li>
                  <li className="check">
                    Architecture complexity and integrations
                  </li>
                  <li className="check">
                    Sensitivity of customer and business data
                  </li>
                  <li className="check">
                    Reporting depth and validation cycles
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts a detailed scope assessment to provide a
                  transparent and tailored cost estimate.
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
                  Get VAPT Certified in Maldives with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted cybersecurity partner in Maldives,
                  supporting startups, enterprises, and government organizations
                  with high-impact vulnerability assessment and penetration
                  testing services. Our specialists focus on real-world threats,
                  practical remediation, and continuous security improvement.
                </div>

                <div className="title small-title">
                  From initial testing to final validation, First Cert helps
                  organizations in Maldives protect digital assets, strengthen
                  cyber defenses, and stay resilient against evolving cyber
                  threats.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your VAPT Certification journey in Maldives with First
                  Cert and secure your systems through professional,
                  intelligence-driven cybersecurity testing.
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

export default MaldivesVapt;
