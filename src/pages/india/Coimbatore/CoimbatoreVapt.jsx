import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/india/coimbatore/vapt-img.webp";
import benefitsvapt from "../../../assets/img/country/india/coimbatore/vapt-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function CoimbatoreVapt() {
  const benefits = [
    "Early detection of critical security vulnerabilities",
    "Reduced risk of cyber-attacks, downtime, and data breaches",
    "Strengthened protection of business and customer information",
    "Enhanced compliance with global security frameworks",
    "Greater confidence from clients, investors, and regulators",
    "Proactive, intelligence-driven cybersecurity practices",
  ];

  const industryData = [
    {
      icon: "bi bi-pc-display",
      title: "IT service providers and software development companies",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS platforms and cloud hosting providers",
    },
    {
      icon: "bi bi-credit-card",
      title: "Banks, fintech businesses, and online payment processors",
    },
    {
      icon: "bi bi-bag-check",
      title: "E-commerce portals and digital marketplaces",
    },
    {
      icon: "bi bi-hospital",
      title:
        "Healthcare providers, research institutions, and data-driven companies",
    },
    {
      icon: "bi bi-mortarboard",
      title:
        "Organizations preparing for ISO 27001, SOC 2, PCI DSS, HIPAA, or GDPR compliance",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          VAPT Certification in Coimbatore | Ethical Hacking & Cybersecurity –
          First Cert
        </title>
        <meta
          name="description"
          content="Achieve VAPT Certification in Coimbatore with First Cert. We deliver penetration testing, vulnerability scanning, and security validation to protect digital systems."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Coimbatore, VAPT consultants Coimbatore, penetration testing Coimbatore, vulnerability assessment Coimbatore, cybersecurity testing Coimbatore, VAPT services Coimbatore, VAPT cost Coimbatore, network security testing Coimbatore, application penetration testing Coimbatore, cloud security testing Coimbatore, mobile application security Coimbatore, First Cert VAPT Coimbatore, ethical hacking Coimbatore, VAPT compliance Coimbatore"
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
          <h1 className="main-title">VAPT Certification in Coimbatore</h1>
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
                alt="VAPT Certification in Coimbatore"
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
                <b>VAPT Certification in Coimbatore</b> empowers organizations
                to identify and remediate security vulnerabilities before they
                are exploited by cyber attackers. With Coimbatore emerging as a
                hub for IT services, SaaS solutions, fintech platforms,
                healthcare software, and cloud applications, businesses face
                increasingly complex cyber risks.
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
                <b>First Cert</b> assists Coimbatore companies by performing
                real-world penetration tests and vulnerability assessments that
                mirror actual attack scenarios.
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
            What VAPT Certification in Coimbatore Entails
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>
              Vulnerability Assessment and Penetration Testing in Coimbatore
            </b>{" "}
            blends automated scanning with expert-led ethical hacking to uncover
            security gaps across applications, networks, APIs, and cloud
            systems. This comprehensive approach highlights both surface-level
            issues and deeper, hidden risks.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A VAPT program typically includes:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Web, mobile, network, and cloud security testing</h5>
            </div>

            <div className="vapt-card">
              <h5>Simulated cyber-attacks to assess exploitability</h5>
            </div>
            <div className="vapt-card">
              <h5>
                Evaluation of access controls, authentication, and permissions
              </h5>
            </div>
            <div className="vapt-card">
              <h5>Risk prioritization based on operational impact</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Certification shows that cybersecurity risks are measured, managed,
            and actively reduced.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Obtain VAPT in Coimbatore
          </h2>

          <p className="text-center section-sub mb-5">
            VAPT Certification in Coimbatore is crucial for organizations
            relying on digital infrastructure or managing sensitive information,
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
                    <a href="iso-9001-certification-in-coimbatore">
                      ISO 9001 Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-coimbatore">
                      ISO 27001 Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-coimbatore">
                      CMMI Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-coimbatore">
                      HIPAA Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-coimbatore">
                      VAPT Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-coimbatore">
                      GDPR Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-coimbatore">
                      SOC 1 Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-coimbatore">
                      SOC 2 Certification in Coimbatore
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          VAPT ensures Coimbatore organizations maintain strong security and
          meet international standards.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Advantages of VAPT Certification in Coimbatore
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that complete VAPT Certification in Coimbatore
                gain:
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
                alt="VAPT Benefits in Coimbatore"
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
            Proactive, intelligence-driven cybersecurity practices
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's VAPT Framework in Coimbatore
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
            First Cert delivers a structured VAPT approach tailored for
            Coimbatore-based businesses:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Scope Definition</h4>
                <p>Define the scope of systems, applications, and networks</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Vulnerability Identification</h4>
                <p>
                  Conduct thorough vulnerability identification and technical
                  analysis
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Penetration Testing</h4>
                <p>
                  Execute controlled penetration tests simulating real-world
                  attacks
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Risk Analysis</h4>
                <p>Analyze risks based on potential business impact</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Reporting</h4>
                <p>Provide clear reports for management and technical teams</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Support</h4>
                <p>Guide remediation of vulnerabilities</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Re-Testing</h4>
                <p>Re-test to verify security issues are resolved</p>
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
            This methodology ensures measurable improvements in security posture
            and continuous protection.
          </p>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          VAPT Certification Cost in Coimbatore
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
                  The cost of VAPT Certification in Coimbatore depends on:
                </div>

                <ul className="features">
                  <li className="check">
                    Number and type of systems and applications tested
                  </li>
                  <li className="check">
                    Coverage of networks, cloud, and mobile assets
                  </li>
                  <li className="check">
                    Complexity of IT architecture and integrations
                  </li>
                  <li className="check">
                    Sensitivity of organizational and client data
                  </li>
                  <li className="check">
                    Reporting requirements and validation cycles
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts a detailed assessment to provide a
                  transparent and tailored pricing estimate.
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
                  Get VAPT Certified in Coimbatore with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted cybersecurity partner in Coimbatore,
                  delivering VAPT services that help businesses detect
                  vulnerabilities, strengthen defenses, and reduce cyber risk.
                  Our experts focus on actionable security improvements that
                  protect real-world operations.
                </div>

                <div className="title small-title">
                  From initial assessment to final validation, Coimbatore
                  organizations can secure critical digital assets, mitigate
                  cyber threats, and achieve audit-ready protection.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your VAPT Certification journey in Coimbatore with First
                  Cert and establish a proactive, secure, and compliant digital
                  environment.
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

export default CoimbatoreVapt;
