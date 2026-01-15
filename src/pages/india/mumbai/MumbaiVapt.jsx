import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/india/mumbai/vapt-img.jpg";
import benefitsvapt from "../../../assets/img/country/india/mumbai/vapt-benefits.jpg";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function MumbaiVapt() {
  const benefits = [
    "Stronger Security Posture – Identify vulnerabilities before hackers exploit them.",
    "Regulatory Compliance – Meet requirements for ISO 27001, PCI-DSS, HIPAA, SOC 2, and DPDP Act.",
    "Reduced Cyber Risk – Prevent data breaches, ransomware attacks, and financial loss.",
    "Enhanced Customer Trust – Show clients that their data and systems are secure.",
    "Protection Against Zero-Day Attacks – Stay ahead of emerging and advanced cyber threats.",
    "Improved System Performance – Security optimization leads to smoother and more reliable operations.",
    "Better Business Continuity – Minimize downtime and strengthen overall resilience.",
  ];

  const hipaaData = [
    {
      icon: "bi bi-pc-display",
      title: "IT and Software Development Companies",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS & Cloud Service Providers",
    },
    {
      icon: "bi bi-credit-card",
      title: "Fintech Companies and Digital Payment Platforms",
    },
    {
      icon: "bi bi-bag-check",
      title: "E-commerce Platforms and Online Marketplaces",
    },
    {
      icon: "bi bi-hospital",
      title: "Hospitals, Clinics & Health-Tech Platforms",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Educational Institutions & EdTech Apps",
    },
    {
      icon: "bi bi-headset",
      title: "BPOs, KPOs & Data Processing Centers",
    },
    {
      icon: "bi bi-building",
      title: "Government & Public Sector Systems",
    },
    {
      icon: "bi bi-rocket",
      title: "Startups working with sensitive data",
    },
    {
      icon: "bi bi-shield-lock",
      title: "Companies undergoing ISO 27001, SOC 2, GDPR, or HIPAA compliance",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          VAPT Certification in Mumbai | Affordable VAPT Consultants – First
          Cert
        </title>
        <meta
          name="description"
          content="Looking for VAPT Certification in Mumbai? First Cert provides expert vulnerability assessment, penetration testing, reporting, remediation support, and security hardening guidance for complete cyber protection."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Mumbai, VAPT consultants in Mumbai, VAPT testing in Mumbai, penetration testing Mumbai, vulnerability assessment Mumbai, VAPT certification cost in Mumbai, VAPT audit Mumbai, cybersecurity services Mumbai, network penetration testing Mumbai, application security testing Mumbai, mobile app VAPT Mumbai, cloud security assessment Mumbai, affordable VAPT services Mumbai, First Cert VAPT consultants, security testing company Mumbai, VAPT for startups Mumbai, VAPT for IT companies Mumbai, VAPT compliance Mumbai."
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
          <h1 className="main-title">VAPT Certification in Mumbai</h1>
          <p className="small-desc">
            Your Path to Strong Cybersecurity and Protection
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
                Achieve <b>VAPT Certification in Mumbai</b> with expert
                cybersecurity specialists from <b>First Cert</b>. We help
                businesses strengthen their security posture by identifying
                vulnerabilities, performing controlled penetration tests, and
                providing actionable remediation plans.
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
                Our end-to-end support — from assessment and testing to
                reporting and certification — makes{" "}
                <b>
                  Vulnerability Assessment and Penetration Testing (VAPT) in
                  Mumbai
                </b>{" "}
                simple, affordable, and highly effective. Strengthen your cyber
                defense, prevent attacks, and build customer trust with
                certified security testing.
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
            What is VAPT Certification in Mumbai?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>VAPT Certification in Mumbai</b> is a comprehensive security
            evaluation process that combines:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Vulnerability Assessment (detecting system weaknesses)</h5>
            </div>

            <div class="vapt-card">
              <h5>Penetration Testing (simulating real cyberattacks)</h5>
            </div>
          </div>
          <br />
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            This certification helps organizations proactively identify security
            risks and strengthen protection against cyber threats such as data
            breaches, ransomware, phishing, and unauthorized access.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Whether your business operates in IT, SaaS, fintech, healthcare,
            e-commerce, education, or manufacturing, VAPT helps:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Meet compliance requirements</h5>
            </div>

            <div class="vapt-card">
              <h5>Prevent cyberattacks</h5>
            </div>

            <div class="vapt-card">
              <h5>Protect sensitive data</h5>
            </div>

            <div class="vapt-card">
              <h5>Build customer confidence</h5>
            </div>
          </div>
          <br />
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Getting VAPT certified demonstrates your organization's commitment
            to strong cybersecurity and regulatory compliance.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Which Businesses Need VAPT Certification Implementation in Mumbai?
          </h2>

          <p className="text-center section-sub mb-5">
            Every organization that handles digital systems, customer data, or
            online applications should undergo{" "}
            <b>VAPT Certification in Mumbai</b>. This includes:
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
                    <a href="iso-9001-certification-in-mumbai">
                      ISO 9001 Certification in Mumbai
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-mumbai">
                      ISO 27001 Certification in Mumbai
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-mumbai">
                      CMMI Certification in Mumbai
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-mumbai">
                      HIPAA Certification in Mumbai
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-mumbai">
                      VAPT Certification in Mumbai
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-mumbai">
                      GDPR Certification in Mumbai
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-mumbai">
                      SOC 1 Certification in Mumbai
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-mumbai">
                      SOC 2 Certification in Mumbai
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          Implementing VAPT helps Mumbai-based organizations prevent cyber
          risks, improve system resilience, and ensure data protection.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting VAPT Certification in Mumbai
              </h1>
            </div>
          </div>

          {/* First Paragraph - Full Width */}
          <div className="row">
            <div className="col-12">
              <p
                className="text-center mb-5"
                style={{
                  color: "#000000",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  fontWeight: "400",
                }}
              >
                Achieving <b>VAPT Certification in Mumbai</b> offers multiple
                advantages:
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
                alt="ISO 27001 Benefits"
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
            <b>VAPT Certification in Mumbai</b> becomes a secure, thorough, and
            value-driven process.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            VAPT Certification in Mumbai – Simplified Process with{" "}
            <span style={{ color: "black" }}>First Cert</span>
          </h2>

          <p className="process-sub text-center mb-5">
            We follow a structured and proven approach to deliver accurate and
            compliant VAPT services:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Consultation & Scoping</h4>
                <p>
                  We understand your IT infrastructure and define the scope for
                  VAPT testing.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Vulnerability Assessment</h4>
                <p>Automated and manual scans to detect security gaps.</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Penetration Testing</h4>
                <p>
                  Simulated attacks to determine exploitability of
                  vulnerabilities.
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Analysis & Risk Rating</h4>
                <p>
                  Each security issue is classified based on severity and risk.
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Detailed Reporting</h4>
                <p>
                  We prepare a comprehensive VAPT report with evidence, impact,
                  and remediation steps.
                </p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Support</h4>
                <p>
                  Your team gets guidance to fix identified vulnerabilities
                  effectively.
                </p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Re-testing & Certification</h4>
                <p>
                  After fixes, we perform a re-test and issue the final{" "}
                  <b>VAPT Certification Report</b>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          How Much Does VAPT Certification Cost in Mumbai?
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
                  The cost of VAPT Certification in Mumbai varies depending on:
                </div>

                <ul className="features">
                  <li className="check">
                    Number of applications / IPs / servers
                  </li>
                  <li className="check">
                    Type of testing (web app, mobile app, network, cloud, API,
                    etc.)
                  </li>
                  <li className="check">Complexity of systems</li>
                  <li className="check">Data sensitivity</li>
                  <li className="check">Internal security maturity</li>
                  <li className="check">Scope of assessment</li>
                  <li className="check">Number of testing days required</li>
                </ul>

                <div className="title small-title">
                  At First Cert, we offer customized and affordable VAPT
                  packages based on your organization's needs — ensuring maximum
                  security at a reasonable price.
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
                  Achieve VAPT Certification in Mumbai with First Cert – Your
                  Trusted Cybersecurity Partner
                </div>
                <div className="title small-title-p">
                  If you’re planning to strengthen your cybersecurity and
                  achieve VAPT Certification in Mumbai, First Cert is your
                  trusted partner, We specialize in:
                </div>

                <ul className="features">
                  <li className="check">Network VAPT</li>
                  <li className="check">Web Application VAPT</li>
                  <li className="check">Mobile App VAPT</li>
                  <li className="check">Cloud Security Testing</li>
                  <li className="check">API Penetration Testing</li>
                  <li className="check">Source Code Review</li>
                  <li className="check">
                    Compliance-driven VAPT (ISO 27001, SOC 2, HIPAA, GDPR,
                    PCI-DSS)
                  </li>
                </ul>

                <div className="title small-title-p">
                  Our experienced cybersecurity professionals ensure a smooth,
                  accurate, and compliant VAPT experience — from initial
                  assessment to remediation and final certification.
                </div>
                <div className="title small-title-p">
                  We are committed to delivering high-quality, affordable, and
                  result-driven cybersecurity solutions that protect your
                  business and enhance stakeholder confidence. <br /> Contact us
                  at info@firstcertification.com to begin your VAPT
                  Certification journey in Mumbai with First Cert — your partner
                  in achieving secure, resilient, and compliant IT systems.
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

export default MumbaiVapt;
