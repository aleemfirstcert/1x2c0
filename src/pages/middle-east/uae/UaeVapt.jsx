import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/middle-east/UAE/vapt-img.webp";
import benefitsvapt from "../../../assets/img/country/middle-east/UAE/vapt-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function UaeVapt() {
  const benefits = [
    "Early Threat Detection – Identifies security gaps before they are exploited",
    "Lower Cyber Exposure – Reduces risks of breaches, ransomware, and service outages",
    "Compliance Support – Aligns with international cybersecurity and audit standards",
    "Improved Infrastructure Stability – Enhances system reliability and performance",
    "Customer & Partner Trust – Demonstrates commitment to strong security practices",
  ];

  const hipaaData = [
    {
      icon: "bi bi-pc-display",
      title: "IT service providers and software development firms",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud hosting companies and SaaS providers",
    },
    {
      icon: "bi bi-credit-card",
      title: "Banks, fintech organizations, and financial platforms",
    },
    {
      icon: "bi bi-bag-check",
      title: "E-commerce businesses and online marketplaces",
    },
    {
      icon: "bi bi-hospital",
      title: "Healthcare technology and digital health providers",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Enterprises operating in regulated environments",
    },
    {
      icon: "bi bi-shield-lock",
      title:
        "Organizations preparing for ISO 27001, SOC 2, PCI DSS, GDPR, or HIPAA compliance",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          VAPT Certification in UAE | Advanced Vulnerability & Penetration
          Testing – First Cert
        </title>
        <meta
          name="description"
          content="Need VAPT Certification in the UAE? First Cert provides professional vulnerability assessment and penetration testing services to uncover security weaknesses, defend against cyber threats, and improve IT security resilience."
        />
        <meta
          name="keywords"
          content="VAPT Certification in UAE, VAPT consultants in UAE, VAPT testing in UAE, penetration testing UAE, vulnerability assessment UAE, VAPT certification cost in UAE, VAPT audit UAE, cybersecurity services UAE, network penetration testing UAE, application security testing UAE, mobile app VAPT UAE, cloud security assessment UAE, affordable VAPT services UAE, First Cert VAPT consultants, security testing company UAE, VAPT for startups UAE, VAPT for IT companies UAE, VAPT compliance UAE."
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
          <h1 className="main-title">VAPT Certification in UAE</h1>
          <p className="small-desc">
            Strengthen Cyber Defense Before Attacks Occur
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
                <b>VAPT Certification in UAE</b> enables organizations to
                proactively evaluate the strength of their digital
                infrastructure against evolving cyber threats. With increasing
                reliance on cloud platforms, web applications, and connected
                systems, businesses must regularly test their defenses to avoid
                data breaches and operational disruption.
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
                <b>First Cert</b> delivers comprehensive VAPT services across
                the UAE, combining technical expertise with real-world attack
                simulations. Our approach helps organizations identify
                weaknesses early, apply targeted remediation, and maintain a
                strong cybersecurity posture.
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
            Understanding VAPT Certification in UAE
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>
              VAPT (Vulnerability Assessment and Penetration Testing)
              Certification in UAE
            </b>{" "}
            Certification in the UAE is a structured cybersecurity exercise that
            examines how systems, networks, and applications respond to
            attempted attacks. It goes beyond automated scans to validate real
            exploit scenarios. VAPT activities typically involve:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>
                Discovery of system, network, and application vulnerabilities
              </h5>
            </div>

            <div class="vapt-card">
              <h5>Manual and automated penetration testing techniques</h5>
            </div>
            <div class="vapt-card">
              <h5>
                Validation of exploitability and potential business impact
              </h5>
            </div>
            <div class="vapt-card">
              <h5>
                Prioritized recommendations for remediation and security
                hardening
              </h5>
            </div>
          </div>
          <br />
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            VAPT certification confirms that an organization actively evaluates
            and improves its security defenses against cyber risks.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations That Need VAPT Certification in UAE
          </h2>

          <p className="text-center section-sub mb-5">
            VAPT services are essential for UAE organizations that depend on
            digital platforms or manage sensitive information, including
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
                    <a href="iso-9001-certification-in-uae">
                      ISO 9001 Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-uae">
                      ISO 27001 Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-uae">
                      CMMI Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-uae">
                      HIPAA Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-uae">
                      VAPT Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-uae">
                      GDPR Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-uae">
                      SOC 1 Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-uae">
                      SOC 2 Certification in UAE
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          VAPT implementation helps UAE organizations demonstrate responsible
          cybersecurity management and readiness.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Benefits of VAPT Certification in UAE
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that undergo VAPT Certification in the UAE gain
                multiple advantages.
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
            VAPT certification strengthens both technical controls and business
            credibility.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            VAPT Certification Process in UAE with{" "}
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
            First Cert follows a robust and business-focused VAPT engagement
            methodology:
          </p>
          <br />
          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Engagement Scoping</h4>
                <p>Define assets, systems, and testing boundaries.</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Security Assessment</h4>
                <p>
                  Identify vulnerabilities through automated and manual
                  analysis.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Penetration Testing</h4>
                <p>
                  Simulate real-world cyberattacks in a controlled environment.
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Risk Evaluation</h4>
                <p>Classify findings by severity and potential impact.</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Comprehensive Reporting</h4>
                <p>Provide clear technical and executive-level reports.</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Guidance</h4>
                <p>Support fixing identified security weaknesses.</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Validation Testing</h4>
                <p>Re-test systems to confirm mitigation effectiveness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          VAPT Certification Cost in UAE
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
                  VAPT Certification costs in the UAE vary based on the
                  technical scope and testing complexity, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Number of applications, servers, and network components
                  </li>
                  <li className="check">
                    Type of testing (web, mobile, cloud, API, network)
                  </li>
                  <li className="check">
                    Infrastructure size and architecture
                  </li>
                  <li className="check">
                    Data sensitivity and regulatory requirements
                  </li>
                  <li className="check">
                    Duration and depth of the testing engagement
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert offers customized, transparent pricing after
                  evaluating your security environment.
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
                  Get VAPT Certification in UAE with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted cybersecurity consulting firm in the
                  UAE, delivering reliable VAPT services for startups,
                  enterprises, and regulated organizations. Our skilled security
                  professionals provide accurate testing, actionable insights,
                  and practical remediation strategies tailored to your systems.
                </div>

                <div className="title small-title">
                  From initial assessment to final validation, First Cert helps
                  organizations strengthen cyber defenses and maintain
                  compliance in a rapidly evolving threat landscape.
                </div>
                <div className="title small-title-p">
                  📧 Contact us: info@firstcertification.com Start your VAPT
                  Certification journey in the UAE with First Cert and safeguard
                  your digital assets against real-world cyber threats.
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

export default UaeVapt;
