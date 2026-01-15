import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/asia/malaysia/vapt-img.webp";
import benefitsvapt from "../../../assets/img/country/asia/malaysia/vapt-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function MalaysiaVapt() {
  const benefits = [
    "Early detection of critical security weaknesses",
    "Reduced likelihood of cyberattacks, service disruptions, and data breaches",
    "Improved alignment with international cybersecurity and compliance standards",
    "Stronger system architecture and defense mechanisms",
    "Increased trust from customers, partners, and auditors",
  ];

  const hipaaData = [
    {
      icon: "bi bi-pc-display",
      title: "IT services companies and managed security providers",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS vendors and cloud-native businesses",
    },
    {
      icon: "bi bi-credit-card",
      title: "Banks, fintech companies, and payment service providers",
    },
    {
      icon: "bi bi-bag-check",
      title: "E-commerce platforms and online service providers",
    },
    {
      icon: "bi bi-hospital",
      title:
        "Healthcare organizations, health-tech firms, and data-driven enterprises",
    },
    {
      icon: "bi bi-mortarboard",
      title:
        "Enterprises subject to regulatory, audit, or contractual security requirements",
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
          VAPT Certification in Malaysia | Advanced Vulnerability & Penetration
          Testing Services – First Cert
        </title>
        <meta
          name="description"
          content="Searching for VAPT Certification in Malaysia? First Cert offers comprehensive vulnerability assessment and penetration testing solutions to uncover security gaps, validate defenses, and enhance cyber risk preparedness."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Malaysia, VAPT consultants in Malaysia, VAPT testing in Malaysia, penetration testing Malaysia, vulnerability assessment Malaysia, VAPT certification cost in Malaysia, VAPT audit Malaysia, cybersecurity services Malaysia, network penetration testing Malaysia, application security testing Malaysia, mobile app VAPT Malaysia, cloud security assessment Malaysia, affordable VAPT services Malaysia, First Cert VAPT consultants, security testing company Malaysia, VAPT for startups Malaysia, VAPT for IT companies Malaysia, VAPT compliance Malaysia."
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
          <h1 className="main-title">VAPT Certification in Malaysia</h1>
          <p className="small-desc">Strengthening Cyber Defenses Proactively</p>
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
                <b>VAPT Certification in Malaysia</b> enables organizations to
                evaluate the real strength of their cybersecurity controls
                against modern attack techniques. With Malaysian businesses
                increasingly adopting cloud platforms, digital payments, remote
                work models, and interconnected systems, identifying exploitable
                weaknesses early is critical to business continuity.
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
                <b>First Cert</b> supports organizations across Malaysia with
                practical VAPT programs designed to mirror real-world cyber
                threats. Our goal is to help organizations understand actual
                risk exposure, improve security posture, and maintain confidence
                in their digital operations.
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
            Understanding VAPT Certification in Malaysia
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>
              VAPT (Vulnerability Assessment and Penetration Testing)
              Certification in Malaysia
            </b>{" "}
            is a structured security testing exercise that goes beyond automated
            scans. It validates whether vulnerabilities can be exploited and
            assesses the potential impact on systems, data, and operations. A
            VAPT engagement typically covers:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>
                Discovery of vulnerabilities in networks, applications, APIs,
                and cloud environments
              </h5>
            </div>

            <div class="vapt-card">
              <h5>
                Controlled penetration testing using ethical hacking techniques
              </h5>
            </div>
            <div class="vapt-card">
              <h5>
                Validation of exploitability and potential business impact
              </h5>
            </div>
            <div class="vapt-card">
              <h5>
                Clear risk ratings with prioritized remediation recommendations
              </h5>
            </div>
          </div>
          <br />
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            VAPT certification demonstrates that an organization actively
            monitors, tests, and strengthens its cybersecurity defenses.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Pursue VAPT Certification in Malaysia?
          </h2>

          <p className="text-center section-sub mb-5">
            VAPT Certification is essential for Malaysia-based organizations
            that depend on digital infrastructure or manage sensitive
            information, including:{" "}
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
                    <a href="iso-9001-certification-in-malaysia">
                      ISO 9001 Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-malaysia">
                      ISO 27001 Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-malaysia">
                      CMMI Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-malaysia">
                      HIPAA Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-malaysia">
                      VAPT Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-malaysia">
                      GDPR Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-malaysia">
                      SOC 1 Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-malaysia">
                      SOC 2 Certification in Malaysia
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          VAPT helps Malaysian organizations reduce cyber exposure while meeting
          stakeholder and regulatory expectations.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Value of VAPT Certification in Malaysia
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve VAPT Certification in Malaysia gain
                tangible security and operational benefits:
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
            First Cert’s VAPT Execution Framework in Malaysia{" "}
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
            First Cert delivers VAPT services through a systematic and
            outcome-focused approach:
          </p>
          <br />
          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Scope Definition</h4>
                <p>
                  Engagement Scoping: Define assets, environments, and testing
                  objectives
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Threat & Vulnerability Analysis</h4>
                <p>
                  Security Assessment: Perform deep vulnerability analysis
                  across in-scope systems
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Penetration Testing Execution</h4>
                <p>
                  Penetration Simulation: Execute controlled attack scenarios
                  safely
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Risk Prioritization</h4>
                <p>
                  Risk Evaluation: Assess severity, exploitability, and business
                  impact
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Detailed Reporting</h4>
                <p>
                  Comprehensive Reporting: Provide technical insights and
                  management-level summaries
                </p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Support</h4>
                <p>
                  Remediation Guidance: Support teams in fixing identified
                  weaknesses
                </p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Revalidation Testing</h4>
                <p>
                  Post-Fix Validation: Re-test systems to confirm security
                  improvements
                </p>
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
            Our methodology ensures actionable insights rather than theoretical
            findings.
          </p>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          VAPT Certification Cost in Malaysia
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
                  The cost of VAPT Certification in Malaysia varies depending on
                  multiple factors, such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Number of applications, servers, and network components
                  </li>
                  <li className="check">
                    Type of testing (web, mobile, cloud, API, network)
                  </li>
                  <li className="check">
                    Complexity of infrastructure and integrations
                  </li>
                  <li className="check">
                    Data sensitivity and regulatory requirements
                  </li>
                  <li className="check">
                    Testing duration and reporting depth
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert provides clear, customized pricing based on your
                  organization’s security scope and risk profile.
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
                  Partner with First Cert for VAPT Certification in Malaysia
                </div>
                <div className="title small-title">
                  First Cert is a trusted cybersecurity consulting partner in
                  Malaysia, supporting startups, enterprises, and regulated
                  organizations with reliable VAPT services. Our security
                  specialists deliver accurate assessments, practical
                  remediation strategies, and measurable risk reduction
                  outcomes.
                </div>

                <div className="title small-title">
                  From initial planning to final validation, First Cert helps
                  organizations strengthen digital defenses and stay ahead of
                  evolving cyber threats.
                </div>
                <div className="title small-title-p">
                  📧 Contact us: info@firstcertification.com Start your VAPT
                  Certification journey in Malaysia with First Cert and protect
                  your business from real-world cyber risks.
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

export default MalaysiaVapt;
