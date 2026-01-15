import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/africa/mauritius/vapt-img.webp";
import benefitsvapt from "../../../assets/img/country/africa/mauritius/vapt-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function MauritiusVapt() {
  const benefits = [
    "Identification of critical vulnerabilities before they are exploited",
    "Lower risk of cyberattacks, outages, and financial losses",
    "Stronger protection for web, mobile, cloud, and network environments",
    "Improved compliance alignment with international standards",
    "Increased confidence from customers, partners, and regulators",
  ];

  const industryData = [
    {
      icon: "bi bi-pc-display",
      title: "Software developers and IT outsourcing companies",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS providers, hosting platforms, and managed service providers",
    },
    {
      icon: "bi bi-credit-card",
      title: "Banks, fintech firms, and online payment services",
    },
    {
      icon: "bi bi-bag-check",
      title: "E-commerce platforms and customer portals",
    },
    {
      icon: "bi bi-hospital",
      title: "Healthcare, research, and data-driven organizations",
    },
    {
      icon: "bi bi-mortarboard",
      title:
        "Companies preparing for ISO 27001, SOC 2, PCI DSS, HIPAA, or GDPR compliance",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          VAPT Certification in Mauritius | Advanced Cyber Risk & Penetration
          Testing – First Cert
        </title>
        <meta
          name="description"
          content="Need reliable VAPT Certification in Mauritius? First Cert delivers expert vulnerability assessment and penetration testing solutions that expose security gaps, simulate real cyber-attacks, and strengthen organizational defenses through actionable, risk-driven security insights."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Mauritius, VAPT consultants Mauritius, penetration testing Mauritius, vulnerability assessment Mauritius, cybersecurity testing Mauritius, VAPT services Mauritius, VAPT cost Mauritius, network security testing Mauritius, application penetration testing Mauritius, cloud security testing Mauritius, mobile application security Mauritius, First Cert VAPT Mauritius, ethical hacking Mauritius, VAPT compliance Mauritius"
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
          <h1 className="main-title">VAPT Certification in Mauritius</h1>
          <p className="small-desc">Securing the Digital Enterprise</p>
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
                alt="VAPT Certification in Mauritius"
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
                <b>VAPT Certification in Mauritius</b> empowers organizations to
                uncover cybersecurity weaknesses before they are exploited by
                attackers. With rapid digital growth across fintech, healthcare,
                e-commerce, telecom, cloud services, and government platforms in
                Mauritius, continuous security testing has become essential for
                protecting systems, customer data, and business operations.
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
                <b>First Cert</b> helps organizations in Mauritius stay ahead of
                evolving threats by applying intelligence-based VAPT techniques
                that reflect how real attackers operate.
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
            What VAPT Certification in Mauritius Includes
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>Vulnerability Assessment and Penetration Testing in Mauritius</b>{" "}
            combines automated scanning with manual ethical hacking to identify
            security flaws across IT and cloud environments. This dual approach
            reveals hidden vulnerabilities that standard audits often overlook.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A VAPT program typically delivers:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>
                Security testing across networks, servers, applications, APIs,
                and cloud infrastructure
              </h5>
            </div>

            <div className="vapt-card">
              <h5>
                Simulated attacks to test exploit paths and system resistance
              </h5>
            </div>
            <div className="vapt-card">
              <h5>
                Evaluation of access control, authentication, and privilege
                escalation risks
              </h5>
            </div>
            <div className="vapt-card">
              <h5>
                Prioritized risk scoring based on likelihood and business impact
              </h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            VAPT Certification demonstrates an organization's commitment to
            proactive and measurable cybersecurity improvement.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Get VAPT in Mauritius
          </h2>

          <p className="text-center section-sub mb-5">
            VAPT Certification in Mauritius is critical for any organization
            that operates digital systems or handles sensitive information,
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
                    <a href="iso-9001-certification-in-mauritius">
                      ISO 9001 Certification in Mauritius
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-mauritius">
                      ISO 27001 Certification in Mauritius
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-mauritius">
                      CMMI Certification in Mauritius
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-mauritius">
                      HIPAA Certification in Mauritius
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-mauritius">
                      VAPT Certification in Mauritius
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-mauritius">
                      GDPR Certification in Mauritius
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-mauritius">
                      SOC 1 Certification in Mauritius
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-mauritius">
                      SOC 2 Certification in Mauritius
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          VAPT enables organizations in Mauritius to meet global security
          expectations and client assurance requirements.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Key Benefits of VAPT Certification in Mauritius
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that complete VAPT Certification in Mauritius gain
                significant business and security advantages, including:
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
                alt="VAPT Benefits in Mauritius"
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
            VAPT transforms cybersecurity from reactive incident handling into
            structured risk prevention.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's VAPT Methodology in Mauritius
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
            First Cert follows a comprehensive and practical VAPT approach
            designed for organizations in Mauritius:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Scope Definition</h4>
                <p>Identify assets, systems, and testing boundaries</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Vulnerability Discovery</h4>
                <p>Perform in-depth technical analysis</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Ethical Hacking</h4>
                <p>Execute controlled cyberattack simulations</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Risk Mapping</h4>
                <p>Connect findings to operational and business impact</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Detailed Reporting</h4>
                <p>Provide technical reports and executive summaries</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Guidance</h4>
                <p>Support teams with prioritized fixes</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Re-Testing</h4>
                <p>Validate that vulnerabilities have been properly closed</p>
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
            This methodology ensures measurable security gains and long-term
            cyber resilience.
          </p>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          VAPT Certification Cost in Mauritius
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
                  The cost of VAPT Certification in Mauritius depends on:
                </div>

                <ul className="features">
                  <li className="check">
                    Number and type of systems and applications tested
                  </li>
                  <li className="check">
                    Coverage across network, web, mobile, API, and cloud assets
                  </li>
                  <li className="check">
                    Architecture complexity and third-party integrations
                  </li>
                  <li className="check">
                    Sensitivity of business and customer data
                  </li>
                  <li className="check">
                    Depth of reporting and post-remediation validation
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts a detailed scoping review to deliver a
                  clear, customized cost estimate aligned with your
                  cybersecurity goals.
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
                  Get VAPT Certified in Mauritius with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted cybersecurity consulting partner in
                  Mauritius, supporting startups, mid-size firms, and large
                  enterprises with high-impact vulnerability assessment and
                  penetration testing services. Our experts focus on real-world
                  threat exposure, practical remediation, and sustainable
                  security improvement.
                </div>

                <div className="title small-title">
                  From initial testing through final re-validation, First Cert
                  helps organizations in Mauritius protect digital assets,
                  strengthen cyber defenses, and stay resilient against modern
                  cyber threats.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your VAPT Certification journey in Mauritius with First
                  Cert and secure your digital infrastructure through
                  professional, proactive, and intelligence-driven cybersecurity
                  testing.
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

export default MauritiusVapt;
