import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/asia/singapore/vapt-img.webp";
import benefitsvapt from "../../../assets/img/country/asia/singapore/vapt-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function SingaporeVapt() {
  const benefits = [
    "Proactive Risk Identification – Detects exploitable flaws before attackers act",
    "Reduced Cybersecurity Exposure – Minimizes breach, downtime, and data loss risks",
    "Audit & Compliance Readiness – Supports alignment with global security frameworks",
    "Stronger IT Architecture – Improves system reliability and resilience",
    "Enhanced Stakeholder Confidence – Builds trust with customers, partners, and regulators",
  ];

  const hipaaData = [
    {
      icon: "bi bi-pc-display",
      title: "Technology companies and managed IT service providers",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS platforms and cloud-based solution providers",
    },
    {
      icon: "bi bi-credit-card",
      title: "Financial institutions, payment platforms, and fintech firms",
    },
    {
      icon: "bi bi-bag-check",
      title: "Online retailers and digital marketplaces",
    },
    {
      icon: "bi bi-hospital",
      title:
        "Healthcare systems, health-tech platforms, and data-driven services",
    },
    {
      icon: "bi bi-mortarboard",
      title:
        "Enterprises operating under regulatory or audit-driven environments",
    },
    {
      icon: "bi bi-shield-lock",
      title:
        "Organizations pursuing ISO 27001, SOC 2, PCI DSS, GDPR, or HIPAA compliance",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          VAPT Certification in Singapore | Proactive Vulnerability &
          Penetration Testing – First Cert
        </title>
        <meta
          name="description"
          content="Looking for VAPT Certification in Singapore? First Cert delivers expert vulnerability assessment and penetration testing services to detect cyber risks, validate security controls, and strengthen organizational cyber resilience."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Singapore, VAPT consultants in Singapore, VAPT testing in Singapore, penetration testing Singapore, vulnerability assessment Singapore, VAPT certification cost in Singapore, VAPT audit Singapore, cybersecurity services Singapore, network penetration testing Singapore, application security testing Singapore, mobile app VAPT Singapore, cloud security assessment Singapore, affordable VAPT services Singapore, First Cert VAPT consultants, security testing company Singapore, VAPT for startups Singapore, VAPT for IT companies Singapore, VAPT compliance Singapore."
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
          <h1 className="main-title">VAPT Certification in Singapore</h1>
          <p className="small-desc">Identify Risks Before Hackers Do</p>
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
                <b>VAPT Certification in Singapore</b> empowers organizations to
                uncover hidden weaknesses within their IT infrastructure before
                cybercriminals exploit them. As businesses increasingly depend
                on digital platforms, APIs, cloud environments, and remote
                access systems, continuous security testing has become a
                critical business requirement rather than an option.
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
                <b>First Cert</b> provides structured and in-depth VAPT services
                across Singapore, combining industry-recognized testing
                methodologies with real-world attack scenarios. Our services
                help organizations detect vulnerabilities early, prioritize
                security improvements, and build a resilient cybersecurity
                framework aligned with global standards.
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
            What Is VAPT Certification in Singapore?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>
              VAPT (Vulnerability Assessment and Penetration Testing)
              Certification in Singapore
            </b>{" "}
            Certification in the Singapore is a comprehensive security
            evaluation that examines how effectively an organization’s systems
            can withstand attempted cyber intrusions. Unlike basic vulnerability
            scans, VAPT validates whether identified weaknesses can actually be
            exploited in real attack conditions. A typical VAPT engagement
            includes:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>
                Identification of weaknesses across networks, applications,
                servers, and cloud assets
              </h5>
            </div>

            <div class="vapt-card">
              <h5>
                Ethical hacking using manual and automated penetration testing
                tools
              </h5>
            </div>
            <div class="vapt-card">
              <h5>
                Exploitation validation to assess real business and data impact
              </h5>
            </div>
            <div class="vapt-card">
              <h5>
                Risk-based classification of findings with clear remediation
                guidance
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
            Who Should Opt for VAPT Certification in Singapore?
          </h2>

          <p className="text-center section-sub mb-5">
            VAPT Certification is highly recommended for Singapore-based
            organizations that rely on digital systems or handle confidential
            information, such as:
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
                    <a href="iso-9001-certification-in-singapore">
                      ISO 9001 Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-singapore">
                      ISO 27001 Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-singapore">
                      CMMI Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-singapore">
                      HIPAA Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-singapore">
                      VAPT Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-singapore">
                      GDPR Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-singapore">
                      SOC 1 Certification in Singapore
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-singapore">
                      SOC 2 Certification in Singapore
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          VAPT implementation helps Singapore organizations demonstrate
          responsible cybersecurity management and readiness.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Key Advantages of VAPT Certification in Singapore
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving VAPT Certification in Singapore benefit
                from both technical and strategic improvements.
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
            VAPT Certification Process in Singapore with{" "}
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
            First Cert follows a structured, transparent, and results-driven
            VAPT methodology:
          </p>
          <br />
          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Scope Definition</h4>
                <p>Identify systems, assets, and testing objectives.</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Threat & Vulnerability Analysis</h4>
                <p>Perform in-depth security evaluations.</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Penetration Testing Execution</h4>
                <p>Simulate real attack techniques safely.</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Risk Prioritization</h4>
                <p>Rank vulnerabilities by severity and impact.</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Detailed Reporting</h4>
                <p>Deliver technical findings and executive summaries.</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Support</h4>
                <p>Guide teams in closing identified security gaps.</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Revalidation Testing</h4>
                <p>Confirm fixes and security improvements.</p>
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
            Our approach ensures actionable outcomes rather than just compliance
            checklists.
          </p>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          VAPT Certification Cost in Singapore
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
                  VAPT Certification costs in the Singapore vary based on the
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
                  First Cert provides customized pricing based on your security
                  landscape, ensuring clarity and value without hidden costs.
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
                  Choose First Cert for VAPT Certification in Singapore
                </div>
                <div className="title small-title">
                  First Cert is a trusted cybersecurity consulting partner in
                  Singapore, supporting startups, enterprises, and regulated
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
                  Certification journey in Singapore with First Cert and protect
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

export default SingaporeVapt;
