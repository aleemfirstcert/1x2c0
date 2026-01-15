import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/middle-east/yemen/vapt-img.avif";
import benefitsvapt from "../../../assets/img/country/middle-east/yemen/vapt-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function YemenVapt() {
  const benefits = [
    "Proactive Security Testing – Detect vulnerabilities before attackers exploit them.",
    "Reduced Cyber Risk – Prevent data breaches, downtime, and financial loss.",
    "Compliance Readiness – Supports alignment with global security standards.",
    "Improved System Reliability – Enhances infrastructure stability and performance.",
    "Increased Stakeholder Confidence – Shows commitment to cybersecurity best practices.",
  ];

  const hipaaData = [
    {
      icon: "bi bi-pc-display",
      title: "IT and software development companies",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud service providers and SaaS platforms",
    },
    {
      icon: "bi bi-credit-card",
      title: "Financial institutions and fintech companies",
    },
    {
      icon: "bi bi-bag-check",
      title: "E-commerce and online service providers",
    },
    {
      icon: "bi bi-hospital",
      title: "Healthcare and digital health organizations",
    },
    {
      icon: "bi bi-mortarboard",
      title: "NGOs, enterprises, and regulated industries",
    },
    {
      icon: "bi bi-shield-lock",
      title:
        "Companies preparing for ISO 27001, SOC 2, PCI DSS, GDPR, or HIPAA",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          VAPT Certification in Yemen | Professional VAPT Security Services –
          First Cert
        </title>
        <meta
          name="description"
          content="Looking for VAPT Certification in Yemen? First Cert offers expert vulnerability assessment and penetration testing services to help organizations detect security flaws, prevent cyberattacks, and strengthen IT infrastructure resilience."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Yemen, VAPT consultants in Yemen, VAPT testing in Yemen, penetration testing Yemen, vulnerability assessment Yemen, VAPT certification cost in Yemen, VAPT audit Yemen, cybersecurity services Yemen, network penetration testing Yemen, application security testing Yemen, mobile app VAPT Yemen, cloud security assessment Yemen, affordable VAPT services Yemen, First Cert VAPT consultants, security testing company Yemen, VAPT for startups Yemen, VAPT for IT companies Yemen, VAPT compliance Yemen."
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
          <h1 className="main-title">VAPT Certification in Yemen</h1>
          <p className="small-desc">
            Identify Risks Before They Become Threats
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
                <b>VAPT Certification in Yemen</b> helps organizations
                proactively uncover security gaps within their IT systems,
                applications, and networks. As digital adoption grows across
                businesses and institutions, cybersecurity threats are becoming
                more frequent and sophisticated. Regular vulnerability
                assessments and penetration testing are essential to stay ahead
                of attackers.
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
                <b>First Cert</b> delivers comprehensive VAPT services in Yemen
                designed to simulate real cyber threats, analyze system
                weaknesses, and provide practical remediation guidance. Our
                security-driven approach helps organizations strengthen
                defenses, protect sensitive data, and maintain operational
                stability.
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
            What is VAPT Certification in Yemen?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>
              VAPT (Vulnerability Assessment and Penetration Testing)
              Certification in Yemen
            </b>{" "}
            Certification in Yemen is a structured cybersecurity evaluation that
            measures how effectively an organization’s systems can withstand
            cyberattacks, The process includes:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Identifying known and unknown vulnerabilities</h5>
            </div>

            <div class="vapt-card">
              <h5>
                Testing system defenses through ethical hacking techniques
              </h5>
            </div>
            <div class="vapt-card">
              <h5>Evaluating potential business impact of security flaws</h5>
            </div>
            <div class="vapt-card">
              <h5>Recommending prioritized corrective actions</h5>
            </div>
          </div>
          <br />
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            VAPT certification demonstrates that an organization actively
            monitors and improves its cybersecurity posture, reducing exposure
            to breaches, ransomware, and service disruptions.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Implement VAPT Certification in Yemen?
          </h2>

          <p className="text-center section-sub mb-5">
            <b>VAPT Certification in Yemen</b> is recommended for organizations
            that rely on digital infrastructure or handle sensitive information,
            including:
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
          Implementing VAPT helps organizations in Yemen reduce cyber risk and
          demonstrate responsible security management.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting VAPT Certification in Yemen
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
            VAPT certification strengthens both technical security and
            organizational credibility.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            VAPT Certification in Yemen – Simplified Process with{" "}
            <span style={{ color: "black" }}>First Cert</span>
          </h2>
          <br />
          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Scope Definition</h4>
                <p>Identify assets, systems, and applications for testing.</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Vulnerability Assessment</h4>
                <p>Automated and manual detection of weaknesses.</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Penetration Testing</h4>
                <p>Controlled ethical attacks to validate exploitability.</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Risk Classification</h4>
                <p>Rank findings based on severity and impact.</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Detailed Reporting</h4>
                <p>Clear technical and management-level reports.</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Support</h4>
                <p>Guidance to fix and mitigate vulnerabilities.</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Re-Testing & Validation</h4>
                <p>Confirm effectiveness of corrective actions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          How Much Does VAPT Certification Cost in Yemen?
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
                  The cost of VAPT Certification in Yemen depends on several
                  technical and operational factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Number of systems, applications, or servers
                  </li>
                  <li className="check">
                    Type of testing required (web, mobile, network, cloud, API)
                  </li>
                  <li className="check">Complexity of IT infrastructure</li>
                  <li className="check">
                    Sensitivity of stored or processed data
                  </li>
                  <li className="check">
                    Testing scope and engagement duration
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert provides customized and transparent pricing after
                  an initial security review.
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
                  Get VAPT Certification in Yemen with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted cybersecurity partner offering
                  reliable VAPT services in Yemen for startups, enterprises, and
                  service organizations. Our experienced security professionals
                  deliver accurate testing, actionable insights, and practical
                  remediation strategies tailored to your environment.
                </div>

                <div className="title small-title">
                  We help organizations strengthen cyber defenses, meet
                  compliance expectations, and operate securely in an evolving
                  threat landscape.
                </div>
                <div className="title small-title-p">
                  📧 Contact us: info@firstcertification.com Start your VAPT
                  Certification journey in Yemen with First Cert and secure your
                  systems against evolving cyber threats.
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

export default YemenVapt;
