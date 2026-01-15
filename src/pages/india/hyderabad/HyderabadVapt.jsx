import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/india/hyderabad/vapt-hyderabad.jpg";
import benefitsvapt from "../../../assets/img/country/india/hyderabad/vapt-benefits.jpg";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function HyderabadVapt() {
  const benefits = [
    "Stronger Cybersecurity Posture – Fix vulnerabilities before hackers exploit them.",
    "Compliance with Global Standards – ISO 27001, SOC 2, HIPAA, GDPR, PCI-DSS, DPDP Act.",
    "Prevent Data Breaches & Attacks – Reduce risks of ransomware, phishing, malware, and unauthorized access.",
    "Improved Customer Trust – Boost credibility with clients who value secure and compliant organizations.",
    "Advanced Threat Protection – Stay ahead of zero-day exploits and modern cyber threats.",
    "Enhanced System Performance – Security hardening improves stability and reduces downtime.",
    "Better Business Continuity – Minimize business interruptions through early threat detection.",
  ];

  const hipaaData = [
    {
      icon: "bi bi-pc-display",
      title: "IT & Software Companies",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS & Cloud Service Providers",
    },
    {
      icon: "bi bi-credit-card",
      title: "Fintech and Digital Payment Platforms",
    },
    {
      icon: "bi bi-bag-check",
      title: "E-commerce & Online Marketplaces",
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
      title: "Startups handling customer data",
    },
    {
      icon: "bi bi-shield-lock",
      title:
        "Companies undergoing ISO 27001, SOC 2, HIPAA, GDPR, PCI-DSS compliance",
    },
  ];


  return (
    <>
      <Helmet>
        <title>
          VAPT Certification in Hyderabad | Best VAPT Consultants – First Cert
        </title>
        <meta
          name="description"
          content="Get VAPT Certification in Hyderabad with expert vulnerability assessment, penetration testing, reporting, and remediation support from First Cert. Strengthen your cybersecurity today."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Hyderabad, VAPT consultants in Hyderabad, VAPT testing Hyderabad, vulnerability assessment Hyderabad, penetration testing Hyderabad, VAPT services Hyderabad, VAPT cost in Hyderabad, VAPT companies in Hyderabad, best VAPT consultants Hyderabad, network VAPT Hyderabad, web application VAPT Hyderabad, mobile app VAPT Hyderabad, cloud VAPT Hyderabad, API penetration testing Hyderabad, source code review Hyderabad, cybersecurity services Hyderabad, VAPT audit Hyderabad, VAPT certification report Hyderabad, ISO 27001 VAPT Hyderabad, SOC 2 VAPT Hyderabad, PCI-DSS VAPT Hyderabad, HIPAA VAPT Hyderabad, GDPR VAPT Hyderabad, DPDP Act VAPT Hyderabad, First Cert VAPT consultants."
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
          <h1 class="main-title">VAPT Certification in Hyderabad</h1>
          <p class="small-desc">
            Strengthen Your Cybersecurity with Expert Testing & Compliance
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
                Achieve <b>VAPT Certification in Hyderabad</b> with the
                specialized cybersecurity experts at <b>First Cert</b>. We help
                businesses identify vulnerabilities, simulate real-world
                cyberattacks, fix security gaps, and achieve complete protection
                against modern cyber threats.
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
                Our end-to-end VAPT services — including vulnerability
                assessment, penetration testing, reporting, remediation support,
                and certification — make the process simple, reliable, and
                affordable for organizations across Hyderabad. Strengthen your
                cybersecurity defenses, prevent cyberattacks, and build trust
                with clients through certified VAPT compliance.
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
            What is VAPT Certification in Hyderabad?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>VAPT (Vulnerability Assessment & Penetration Testing)</b> is a
            combined security process used to:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Identify system weaknesses (Vulnerability Assessment)</h5>
            </div>

            <div class="vapt-card">
              <h5>Simulate real hacking attempts (Penetration Testing)</h5>
            </div>
          </div>
          <br />
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>VAPT Certification in Hyderabad</b> ensures your IT systems,
            networks, applications, and cloud environments are secure and
            compliant with global cyber standards.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Industries across Hyderabad — from IT and SaaS to fintech,
            healthcare, e-commerce, and manufacturing — use VAPT to:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Stop cyberattacks</h5>
            </div>

            <div class="vapt-card">
              <h5>Secure sensitive data</h5>
            </div>

            <div class="vapt-card">
              <h5>Meet regulatory requirements</h5>
            </div>

            <div class="vapt-card">
              <h5>Build strong customer confidence</h5>
            </div>
          </div>
          <br />
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Achieving VAPT certification demonstrates your organization's
            commitment to cybersecurity and data protection.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Which Businesses Need VAPT Certification in Hyderabad?
          </h2>

          <p className="text-center section-sub mb-5">
            Any organization handling digital systems or sensitive data should
            implement VAPT. This includes:
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
                        <a href="iso-9001-certification-in-hyderabad">
                          ISO 9001 Certification in Hyderabad
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-hyderabad">
                          ISO 27001 Certification in Hyderabad
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-hyderabad">
                          CMMI Certification in Hyderabad
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-hyderabad">
                          HIPAA Certification in Hyderabad
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-hyderabad">VAPT Certification in Hyderabad</a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-hyderabad">GDPR Certification in Hyderabad</a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-hyderabad">
                          SOC 1 Certification in Hyderabad
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-hyderabad">
                          SOC 2 Certification in Hyderabad
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          VAPT helps Hyderabad-based organizations detect vulnerabilities early,
          strengthen cyber defenses, and avoid costly data breaches.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting VAPT Certification in Hyderabad
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
                VAPT Certification offers multiple operational and security
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
            With <a href="/">First Cert</a>, achieving VAPT Certification in
            Hyderabad becomes accurate, professional, and value-driven.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            VAPT Certification in Hyderabad – Simple & Effective Process with
            First Cert
          </h2>

          <p className="process-sub text-center mb-5">
            We follow a structured, industry-approved methodology to ensure
            high-quality VAPT execution.
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Consultation & Scoping</h4>
                <p>
                  We understand your IT environment, business needs, and testing
                  scope.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Vulnerability Assessment</h4>
                <p>
                  Manual and automated scans to identify potential security
                  weaknesses.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Penetration Testing</h4>
                <p>
                  Simulated cyberattacks to exploit and test real-world
                  vulnerabilities.
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Risk Analysis & Severity Rating</h4>
                <p>
                  Findings are classified as High, Medium, or Low based on risk
                  impact.
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Detailed VAPT Reporting</h4>
                <p>Comprehensive report with:</p>
                <ul>
                  <li>Vulnerability details</li>
                  <li>Proof-of-concepts</li>
                  <li>Risk impact</li>
                  <li>Recommended fixes</li>
                </ul>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Support</h4>
                <p>
                  Our experts guide your IT team on how to fix identified issues
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
                  After remediation, we re-test and issue the official{" "}
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
          How Much Does VAPT Certification Cost in Hyderabad?
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
                  VAPT Certification cost in Hyderabad depends on various
                  factors such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Number of applications / servers / networks
                  </li>
                  <li className="check">
                    Type of testing (Web, Mobile, Network, Cloud, API, Source
                    Code Review)
                  </li>
                  <li className="check">Complexity of IT environment</li>
                  <li className="check">Data sensitivity</li>
                  <li className="check">Compliance requirements</li>
                  <li className="check">Testing duration</li>
                </ul>

                <div className="title small-title">
                  First Cert provides{" "}
                  <b>customized, affordable, and transparent pricing</b> based
                  on your organization's cybersecurity needs.
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
                  Achieve VAPT Certification in Hyderabad with First Cert – Your
                  Trusted Cybersecurity Partner
                </div>
                <div className="title small-title-p">
                  If you’re planning to strengthen your cybersecurity and
                  achieve VAPT Certification in Hyderabad, First Cert is your
                  trusted partner. We specialize in:
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
                  assessment to remediation and final certification. <br /> We are
                  committed to delivering high-quality, affordable, and
                  result-driven cybersecurity solutions that protect your
                  business and enhance stakeholder confidence. <br /> Contact us at
                  info@firstcertification.com to begin your VAPT Certification
                  journey in Hyderabad with First Cert — your partner in
                  achieving secure, resilient, and compliant IT systems.
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

export default HyderabadVapt;
