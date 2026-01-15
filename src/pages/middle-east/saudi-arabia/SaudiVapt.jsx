import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/middle-east/saudi-arabia/vapt-img.webp";
import benefitsvapt from "../../../assets/img/country/middle-east/saudi-arabia/vapt-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function SaudiVapt() {
  const benefits = [
    "Early Risk Identification – Discover security gaps before attackers exploit them.",
    "Regulatory & Standard Readiness – Supports compliance with global security frameworks.",
    "Reduced Financial & Operational Loss – Prevents costly data breaches and downtime.",
    "Improved Customer & Partner Trust – Demonstrates strong cybersecurity commitment.",
    "Stronger Business Continuity – Enhances system stability and resilience.",
  ];

  const hipaaData = [
    {
      icon: "bi bi-pc-display",
      title: "IT and software development companies",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS, cloud, and hosting service providers",
    },
    {
      icon: "bi bi-credit-card",
      title: "Banks, fintech, and financial institutions",
    },
    {
      icon: "bi bi-bag-check",
      title: "E-commerce and online service platforms",
    },
    {
      icon: "bi bi-hospital",
      title: "Healthcare and health-tech organizations",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Government contractors and regulated industries",
    },
    {
      icon: "bi bi-headset",
      title: "BPOs, KPOs, and data processing centers",
    },
    {
      icon: "bi bi-shield-lock",
      title:
        "Organizations preparing for ISO 27001, SOC 2, PCI DSS, GDPR, or HIPAA",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          VAPT Certification in Saudi Arabia | Expert VAPT Consultants – First
          Cert
        </title>
        <meta
          name="description"
          content="Strengthen your cybersecurity with VAPT Certification in Saudi Arabia. First Cert provides professional vulnerability assessment, penetration testing, detailed risk reports, and remediation support to protect your digital assets."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Saudi Arabia, VAPT consultants in Saudi Arabia, VAPT testing in Saudi Arabia, penetration testing Saudi Arabia, vulnerability assessment Saudi Arabia, VAPT certification cost in Saudi Arabia, VAPT audit Saudi Arabia, cybersecurity services Saudi Arabia, network penetration testing Saudi Arabia, application security testing Saudi Arabia, mobile app VAPT Saudi Arabia, cloud security assessment Saudi Arabia, affordable VAPT services Saudi Arabia, First Cert VAPT consultants, security testing company Saudi Arabia, VAPT for startups Saudi Arabia, VAPT for IT companies Saudi Arabia, VAPT compliance Saudi Arabia."
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
          <h1 className="main-title">VAPT Certification in Saudi Arabia</h1>
          <p className="small-desc">
            Strengthen Cybersecurity Before Attacks Occur
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
                <b>VAPT Certification in Saudi Arabia</b> enables organizations
                to identify security weaknesses and address them before they are
                exploited by cyber attackers. With the increasing reliance on
                digital platforms and cloud technologies, proactive security
                testing has become a critical business requirement.
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
                <a href="/">First Cert</a> delivers end-to-end VAPT services in
                Saudi Arabia, combining technical expertise with real-world
                attack simulations. Our approach helps organizations reduce
                cyber risks, protect sensitive data, and maintain uninterrupted
                business operations.
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
            What is VAPT Certification in Saudi Arabia?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>
              VAPT (Vulnerability Assessment and Penetration Testing)
              Certification in Saudi Arabia
            </b>{" "}
            is a structured cybersecurity testing process that evaluates the
            strength of your IT environment against potential threats. It
            involves:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Scanning systems to identify known vulnerabilities</h5>
            </div>

            <div class="vapt-card">
              <h5>Simulating controlled cyberattacks to test defenses</h5>
            </div>
            <div class="vapt-card">
              <h5>Assessing risk severity and potential impact</h5>
            </div>
            <div class="vapt-card">
              <h5>Recommending corrective actions for risk mitigation</h5>
            </div>
          </div>
          <br />
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            VAPT helps organizations demonstrate due diligence in cybersecurity,
            meet regulatory expectations, and improve overall system resilience.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Needs VAPT Certification in Saudi Arabia?
          </h2>

          <p className="text-center section-sub mb-5">
            VAPT Certification is recommended for any organization in Saudi
            Arabia that depends on IT systems, digital platforms, or sensitive
            data, including:
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
          Implementing VAPT helps Saudi-based businesses reduce cyber exposure
          and maintain secure, reliable systems.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting VAPT Certification in Saudi Arabia
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
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            VAPT Certification in Saudi Arabia – Simplified Process with{" "} <br />
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
            Our VAPT methodology is designed for clarity, accuracy, and
            actionable results
          </p>
          <br />
          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Scope Definition</h4>
                <p>
                  Identify systems, applications, and networks to be tested.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Vulnerability Assessment</h4>
                <p>
                  Detect weaknesses using advanced tools and manual analysis.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Penetration Testing</h4>
                <p>Perform ethical attack simulations.</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Risk Analysis</h4>
                <p>
                  Classify vulnerabilities based on severity and business
                  impact.
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Detailed Reporting</h4>
                <p>Provide clear findings with remediation priorities.</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Support</h4>
                <p>Guide teams in fixing identified issues.</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Re-testing & Final Report</h4>
                <p>Validate fixes and issue the final VAPT report.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          How Much Does VAPT Certification Cost in Saudi Arabia?
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
                  The cost of VAPT Certification in Saudi Arabia varies
                  depending on:
                </div>

                <ul className="features">
                  <li className="check">
                    Number of applications, servers, and networks
                  </li>
                  <li className="check">
                    Type of testing required (web, mobile, network, cloud, API)
                  </li>
                  <li className="check">IT infrastructure complexity</li>
                  <li className="check">Data sensitivity and risk profile</li>
                  <li className="check">Testing scope and duration</li>
                </ul>

                <div className="title small-title">
                  First Cert offers transparent and customized pricing after an
                  initial assessment to ensure cost-effective cybersecurity
                  testing.
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
                  Achieve VAPT Certification in Saudi Arabia with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted cybersecurity partner for
                  organizations in Saudi Arabia seeking reliable VAPT services.
                  Our experienced security professionals deliver accurate
                  testing, practical remediation advice, and compliance-driven
                  assessments tailored to your business environment.
                </div>

                <div className="title small-title">
                  From startups to large enterprises, we help organizations
                  build strong cyber defenses and maintain regulatory
                  confidence.
                </div>
                <div className="title small-title-p">
                  📧 Contact us: info@firstcertification.com Start your VAPT
                  Certification journey in Saudi Arabia with First Cert and
                  secure your systems against evolving cyber threats.
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

export default SaudiVapt;
