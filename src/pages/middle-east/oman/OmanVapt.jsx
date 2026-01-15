import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/middle-east/oman/vapt-img.webp";
import benefitsvapt from "../../../assets/img/country/middle-east/oman/vapt-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function OmanVapt() {
  const benefits = [
    "Early identification of high-risk and critical vulnerabilities",
    "Reduced likelihood of cyberattacks, data loss, and service outages",
    "Stronger alignment with global security and compliance standards",
    "Improved resilience of applications, infrastructure, and cloud environments",
    "Increased confidence among customers, auditors, and business partners",
  ];

  const industryData = [
    {
      icon: "bi bi-pc-display",
      title: "IT service providers and managed security service firms",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS vendors and cloud-native technology companies",
    },
    {
      icon: "bi bi-credit-card",
      title: "Banks, fintech organizations, and payment service providers",
    },
    {
      icon: "bi bi-bag-check",
      title: "E-commerce businesses and online platforms",
    },
    {
      icon: "bi bi-hospital",
      title: "Healthcare entities and data-driven organizations",
    },
    {
      icon: "bi bi-mortarboard",
      title:
        "Enterprises facing regulatory, audit, or client-mandated security requirements",
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
          VAPT Certification in Oman | Advanced Vulnerability & Penetration
          Testing Services – First Cert
        </title>
        <meta
          name="description"
          content="Searching for VAPT Certification in Oman? First Cert delivers comprehensive vulnerability assessment and penetration testing services that uncover security weaknesses, simulate real-world attack scenarios, and help organizations strengthen their cybersecurity defenses."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Oman, VAPT consultants Oman, penetration testing Oman, vulnerability assessment Oman, cybersecurity testing Oman, VAPT services Oman, VAPT cost Oman, network security testing Oman, application penetration testing Oman, cloud security testing Oman, mobile application security Oman, First Cert VAPT Oman, ethical hacking Oman, VAPT compliance Oman"
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
          <h1 className="main-title">VAPT Certification in Oman</h1>
          <p className="small-desc">
            Proactive Cyber Risk Identification and Mitigation
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
                alt="VAPT Certification in Oman"
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
                <b>VAPT Certification in Oman</b> enables organizations to gain
                clear insight into how exposed their digital assets are to
                modern cyber threats. As businesses in Oman continue to expand
                digital operations through cloud adoption, online platforms,
                financial technologies, and interconnected systems, proactive
                security testing has become a critical component of cyber risk
                management.
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
                <b>First Cert</b> partners with organizations across Oman to
                deliver in-depth VAPT services that go beyond automated scans.
                Our assessments focus on realistic attack paths, practical risk
                exposure, and prioritized actions that measurably improve
                security posture.
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
            Scope of VAPT Certification in Oman
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>
              Vulnerability Assessment and Penetration Testing (VAPT) in Oman
            </b>{" "}
            combines structured vulnerability discovery with controlled
            exploitation techniques. This approach not only identifies
            weaknesses but also demonstrates how attackers could leverage them
            in real environments.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A standard VAPT engagement typically covers:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>
                Detection of vulnerabilities across networks, servers,
                applications, APIs, and cloud platforms
              </h5>
            </div>

            <div className="vapt-card">
              <h5>
                Ethical hacking exercises that replicate current attacker
                tactics
              </h5>
            </div>
            <div className="vapt-card">
              <h5>
                Evaluation of exploitability and potential operational or data
                impact
              </h5>
            </div>
            <div className="vapt-card">
              <h5>
                Risk-based ranking of findings with clear remediation guidance
              </h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            VAPT certification reflects an organization's commitment to
            continuous cybersecurity evaluation and improvement.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Oman That Benefit from VAPT
          </h2>

          <p className="text-center section-sub mb-5">
            VAPT Certification in Oman is essential for organizations that
            depend on digital infrastructure or handle sensitive data,
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
                    <a href="iso-9001-certification-in-oman">
                      ISO 9001 Certification in Oman
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-oman">
                      ISO 27001 Certification in Oman
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-oman">
                      CMMI Certification in Oman
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-oman">
                      HIPAA Certification in Oman
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-oman">
                      VAPT Certification in Oman
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-oman">
                      GDPR Certification in Oman
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-oman">
                      SOC 1 Certification in Oman
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-oman">
                      SOC 2 Certification in Oman
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          VAPT helps Omani organizations meet international cybersecurity
          expectations while reducing exposure to evolving threats.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Benefits of VAPT Certification in Oman
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that obtain VAPT Certification in Oman achieve
                meaningful security and operational benefits, such as:
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
                alt="VAPT Benefits in Oman"
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
            VAPT transforms cybersecurity from reactive response to proactive
            defense.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's VAPT Delivery Approach in Oman
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
            First Cert applies a structured and outcome-driven VAPT methodology
            tailored to organizations in Oman:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Engagement Scoping</h4>
                <p>Define systems, assets, and testing objectives.</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Vulnerability Analysis</h4>
                <p>Conduct in-depth technical security assessments.</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Penetration Testing</h4>
                <p>Perform controlled and safe attack simulations.</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Risk & Impact Analysis</h4>
                <p>Determine severity, exploit chains, and business impact.</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Reporting</h4>
                <p>
                  Provide detailed technical findings and executive summaries.
                </p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Guidance</h4>
                <p>Support teams with practical mitigation strategies.</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Verification Testing</h4>
                <p>Re-test systems to confirm vulnerability closure.</p>
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
            This approach ensures that VAPT results translate into tangible
            security improvements.
          </p>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          VAPT Certification Cost in Oman
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
                  The cost of VAPT Certification in Oman varies depending on
                  factors such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Number and type of systems, applications, and infrastructure
                    components
                  </li>
                  <li className="check">
                    Scope of testing (web, mobile, API, network, or cloud)
                  </li>
                  <li className="check">
                    Technical complexity and third-party integrations
                  </li>
                  <li className="check">
                    Sensitivity of organizational and customer data
                  </li>
                  <li className="check">
                    Required depth of testing and reporting
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial technical review to provide a
                  clear, customized cost estimate aligned with organizational
                  risk and compliance needs.
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
                  Get VAPT Certification in Oman with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a reliable cybersecurity consulting partner in
                  Oman, supporting startups, growing businesses, and enterprises
                  with effective and actionable VAPT services. Our specialists
                  focus on meaningful risk reduction and long-term security
                  resilience rather than checklist-based testing.
                </div>

                <div className="title small-title">
                  From initial vulnerability discovery to remediation
                  validation, First Cert helps organizations in Oman stay secure
                  against emerging cyber threats.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your VAPT Certification journey in Oman with First Cert
                  and safeguard your digital ecosystem with confidence,
                  visibility, and proactive cybersecurity assurance.
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

export default OmanVapt;
