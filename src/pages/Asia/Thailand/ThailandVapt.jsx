import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/asia/thailand/vapt-img.webp";
import benefitsvapt from "../../../assets/img/country/asia/thailand/vapt-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function ThailandVapt() {
  const benefits = [
    "Early identification of critical and high-impact vulnerabilities",
    "Reduced likelihood of cyberattacks, downtime, and data breaches",
    "Improved alignment with global cybersecurity and compliance standards",
    "Stronger application, network, and infrastructure resilience",
    "Increased confidence from clients, regulators, and business partners",
  ];

  const industryData = [
    {
      icon: "bi bi-pc-display",
      title: "IT service providers and managed security companies",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS vendors and cloud-native technology firms",
    },
    {
      icon: "bi bi-credit-card",
      title: "Banks, fintech companies, and payment solution providers",
    },
    {
      icon: "bi bi-bag-check",
      title: "E-commerce platforms and online service businesses",
    },
    {
      icon: "bi bi-hospital",
      title: "Healthcare institutions and data-driven organizations",
    },
    {
      icon: "bi bi-mortarboard",
      title:
        "Enterprises subject to regulatory, audit, or contractual security requirements",
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
          VAPT Certification in Thailand | Advanced Vulnerability & Penetration
          Testing Services – First Cert
        </title>
        <meta
          name="description"
          content="Searching for VAPT Certification in Thailand? First Cert provides expert vulnerability assessment and penetration testing services to uncover security weaknesses, test real-world attack exposure, and strengthen overall cybersecurity resilience."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Thailand, VAPT consultants Thailand, penetration testing Thailand, vulnerability assessment Thailand, cybersecurity testing Thailand, VAPT services Thailand, VAPT cost Thailand, network security testing Thailand, application penetration testing Thailand, cloud security testing Thailand, mobile application security Thailand, First Cert VAPT Thailand, ethical hacking Thailand, VAPT compliance Thailand"
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
          <h1 className="main-title">VAPT Certification in Thailand</h1>
          <p className="small-desc">
            Proactive Defense Against Modern Cyber Threats
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
                alt="VAPT Certification in Thailand"
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
                <b>VAPT Certification in Thailand</b> empowers organizations to
                evaluate their cybersecurity posture by simulating real attack
                conditions and identifying exploitable weaknesses before threat
                actors do. With Thailand experiencing rapid growth in digital
                banking, cloud adoption, e-commerce platforms, and
                interconnected enterprise systems, proactive security testing
                has become a critical business safeguard.
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
                <b>First Cert</b> partners with organizations across Thailand to
                deliver realistic VAPT engagements that go beyond automated
                scans. Our focus is on uncovering genuine risk exposure,
                strengthening defenses, and enabling informed cybersecurity
                decision-making.
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
            What VAPT Certification in Thailand Includes
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>
              Vulnerability Assessment and Penetration Testing (VAPT)
              Certification in Thailand
            </b>{" "}
            combines structured vulnerability identification with controlled
            exploitation techniques to determine how attackers could compromise
            systems. This approach validates both technical weaknesses and their
            potential business impact.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A comprehensive VAPT program typically covers:
          </p>

          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>
                Discovery of vulnerabilities across networks, servers,
                applications, APIs, and cloud environments
              </h5>
            </div>

            <div class="vapt-card">
              <h5>
                Ethical hacking simulations that replicate real attacker
                behavior
              </h5>
            </div>
            <div class="vapt-card">
              <h5>Validation of exploitability and likelihood of compromise</h5>
            </div>
            <div class="vapt-card">
              <h5>
                Risk-based classification with prioritized remediation actions
              </h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            VAPT certification reflects an organization's commitment to
            continuous security validation and risk reduction.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Thailand That Benefit from VAPT Certification
          </h2>

          <p className="text-center section-sub mb-5">
            VAPT Certification in Thailand is essential for organizations that
            depend on digital platforms or process sensitive information,
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
                    <a href="iso-9001-certification-in-thailand">
                      ISO 9001 Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-thailand">
                      ISO 27001 Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-thailand">
                      CMMI Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-thailand">
                      HIPAA Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-thailand">
                      VAPT Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-thailand">
                      GDPR Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-thailand">
                      SOC 1 Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-thailand">
                      SOC 2 Certification in Thailand
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          VAPT helps Thailand-based organizations meet international security
          expectations while reducing cyber risk exposure.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Advantages of VAPT Certification in Thailand
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving VAPT Certification in Thailand gain
                measurable security and operational benefits:
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
                alt="VAPT Benefits in Thailand"
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
            VAPT transforms cybersecurity from a reactive response into a
            proactive protection strategy.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's VAPT Delivery Framework in Thailand
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
            First Cert follows a structured and outcome-focused VAPT
            methodology:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Scoping & Planning</h4>
                <p>Define assets, environments, and testing goals.</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Security Analysis</h4>
                <p>Perform in-depth vulnerability assessments.</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Penetration Simulation</h4>
                <p>Execute safe and controlled attack scenarios.</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Risk Assessment</h4>
                <p>Evaluate severity, exploit paths, and business impact.</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Detailed Reporting</h4>
                <p>Provide technical findings and executive-level insights.</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Advisory</h4>
                <p>Guide teams on effective risk mitigation.</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Re-Assessment</h4>
                <p>Confirm vulnerabilities are resolved after fixes.</p>
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
            This approach ensures practical insights that drive real security
            improvement.
          </p>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          VAPT Certification Cost in Thailand
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
                  The cost of VAPT Certification in Thailand varies depending on
                  factors such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Number of systems, applications, and endpoints tested
                  </li>
                  <li className="check">
                    Scope of testing (web, mobile, API, network, cloud)
                  </li>
                  <li className="check">
                    Infrastructure complexity and third-party integrations
                  </li>
                  <li className="check">
                    Sensitivity of business and customer data
                  </li>
                  <li className="check">
                    Depth of testing and reporting requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial review to provide a transparent
                  and customized cost estimate aligned with your security
                  objectives.
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
                  Partner with First Cert for VAPT Certification in Thailand
                </div>

                <div className="title small-title">
                  First Cert is a reliable cybersecurity consulting partner in
                  Thailand, supporting startups, SMEs, and large enterprises
                  with accurate and actionable VAPT services. Our specialists
                  focus on meaningful risk reduction and long-term security
                  maturity.
                </div>

                <div className="title small-title">
                  From vulnerability discovery to remediation validation, First
                  Cert helps organizations stay ahead of evolving cyber threats.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your VAPT Certification journey in Thailand with First
                  Cert and secure your digital infrastructure with confidence
                  and clarity.
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

export default ThailandVapt;
