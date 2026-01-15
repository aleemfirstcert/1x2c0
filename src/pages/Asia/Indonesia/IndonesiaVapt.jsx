import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/asia/indonesia/vapt-img.webp";
import benefitsvapt from "../../../assets/img/country/asia/indonesia/vapt-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function IndonesiaVapt() {
  const benefits = [
    "Early visibility into critical and high-risk security flaws",
    "Lower probability of cyber incidents and operational disruption",
    "Stronger alignment with international security and compliance frameworks",
    "Improved resilience of applications, networks, and cloud environments",
    "Greater confidence from customers, partners, and auditors",
  ];

  const hipaaData = [
    {
      icon: "bi bi-laptop",
      title: "Technology companies and managed service providers",
    },
    {
      icon: "bi bi-cloud",
      title: "SaaS platforms and cloud-based solution providers",
    },
    {
      icon: "bi bi-currency-exchange",
      title: "Financial institutions, fintech firms, and payment processors",
    },
    {
      icon: "bi bi-cart-check",
      title: "E-commerce businesses and digital marketplaces",
    },
    {
      icon: "bi bi-heart-pulse",
      title: "Healthcare organizations and data-centric enterprises",
    },
    {
      icon: "bi bi-clipboard-check",
      title:
        "Corporations facing regulatory, audit, or client security requirements",
    },
    {
      icon: "bi bi-shield-check",
      title:
        "Organizations preparing for ISO 27001, SOC 2, PCI DSS, HIPAA, or GDPR compliance",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          VAPT Certification in Indonesia | Professional Vulnerability &
          Penetration Testing Services – First Cert
        </title>
        <meta
          name="description"
          content="Looking for VAPT Certification in Indonesia? First Cert delivers expert-led vulnerability assessment and penetration testing services to identify security gaps, validate system resilience, and strengthen organizational cyber defenses."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Indonesia, VAPT consultants in Indonesia, VAPT testing in Indonesia, penetration testing Indonesia, vulnerability assessment Indonesia, VAPT certification cost in Indonesia, VAPT audit Indonesia, cybersecurity services Indonesia, network penetration testing Indonesia, application security testing Indonesia, mobile app VAPT Indonesia, cloud security assessment Indonesia, affordable VAPT services Indonesia, First Cert VAPT consultants, security testing company Indonesia, VAPT for startups Indonesia, VAPT for IT companies Indonesia, VAPT compliance Indonesia."
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
          <h1 className="main-title">VAPT Certification in Indonesia</h1>
          <p className="small-desc">Advancing Cyber Risk Readiness</p>
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
                <b>VAPT Certification in Indonesia</b> helps organizations
                proactively assess how well their digital infrastructure can
                withstand real cyberattacks. As Indonesian enterprises
                accelerate digital transformation through cloud adoption,
                fintech innovation, e-commerce growth, and remote operations,
                understanding exploitable vulnerabilities is essential for
                protecting business-critical systems.
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
                <b>First Cert</b> collaborates with organizations across
                Indonesia to deliver VAPT programs that simulate real attack
                scenarios and uncover hidden weaknesses. Our focus is on
                practical risk visibility, measurable security improvement, and
                informed decision-making rather than surface-level scanning.
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
            What VAPT Certification in Indonesia Involves
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>
              VAPT (Vulnerability Assessment and Penetration Testing)
              Certification in Indonesia
            </b>{" "}
            combines in-depth vulnerability discovery with controlled
            exploitation techniques. This approach validates not just the
            presence of weaknesses, but their actual impact on systems, data,
            and operations. A typical VAPT engagement includes:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>
                Identification of vulnerabilities across networks, applications,
                APIs, and cloud platforms
              </h5>
            </div>

            <div class="vapt-card">
              <h5>Ethical penetration testing to simulate attacker behavior</h5>
            </div>
            <div class="vapt-card">
              <h5>Evaluation of exploit feasibility and business impact</h5>
            </div>
            <div class="vapt-card">
              <h5>Risk prioritization with clear remediation guidance</h5>
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
            Who Should Opt for VAPT Certification in Indonesia?
          </h2>

          <p className="text-center section-sub mb-5">
            VAPT Certification in Indonesia is critical for organizations that
            rely heavily on digital systems or manage sensitive data, such as:
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
                    <a href="iso-9001-certification-in-indonesia">
                      ISO 9001 Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-indonesia">
                      ISO 27001 Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-indonesia">
                      CMMI Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-indonesia">
                      HIPAA Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-indonesia">
                      VAPT Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-indonesia">
                      GDPR Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-indonesia">
                      SOC 1 Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-indonesia">
                      SOC 2 Certification in Indonesia
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          VAPT enables Indonesian organizations to reduce cyber risk while
          meeting global security expectations.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Key Benefits of VAPT Certification in Indonesia
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving VAPT Certification in Indonesia gain:
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
            VAPT shifts cybersecurity from reactive incident response to
            proactive risk management.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert’s VAPT Execution Framework in Indonesia{" "}
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
                <p>Identify systems, applications, and testing objectives</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Vulnerability Discovery</h4>
                <p>Conduct in-depth security analysis</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Penetration Testing</h4>
                <p>Perform safe and controlled attack simulations</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Impact Analysis</h4>
                <p>Assess severity and real-world exploit potential</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Detailed Reporting</h4>
                <p>Deliver technical findings and executive summaries</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Support</h4>
                <p>Guide teams on fixing identified issues</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Re-Testing</h4>
                <p>Validate the effectiveness of applied security fixes</p>
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
            This approach ensures actionable outcomes rather than theoretical
            observations.
          </p>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          VAPT Certification Cost in Indonesia
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
                  The cost of VAPT Certification in Indonesia depends on factors
                  such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Number of applications, servers, and network components
                  </li>
                  <li className="check">
                    Type of testing (web, mobile, cloud, API, network)
                  </li>
                  <li className="check">
                    Infrastructure complexity and third-party integrations
                  </li>
                  <li className="check">
                    Sensitivity of data and compliance requirements
                  </li>
                  <li className="check">
                    Depth of testing and reporting expectations
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert provides a transparent and customized cost proposal
                  after reviewing your security landscape.
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
                  Choose First Cert for VAPT Certification in Indonesia
                </div>
                <div className="title small-title">
                  First Cert is a trusted cybersecurity consulting partner in
                  Indonesia, supporting startups, growing businesses, and
                  enterprises with reliable and effective VAPT services. Our
                  experts focus on delivering meaningful risk reduction and
                  long-term security improvements.
                </div>

                <div className="title small-title">
                  From initial planning to final validation, First Cert helps
                  organizations strengthen digital defenses and stay ahead of
                  evolving cyber threats.
                </div>
                <div className="title small-title-p">
                  📧 Contact us: info@firstcertification.com Start your VAPT
                  Certification journey in Indonesia with First Cert and protect
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

export default IndonesiaVapt;
