import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/asia/cambodia/vapt-img.webp";
import benefitsvapt from "../../../assets/img/country/asia/cambodia/vapt-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function CambodiaVapt() {
  const benefits = [
    "Early detection of critical and high-risk vulnerabilities",
    "Lower probability of cyber incidents, data breaches, and service disruption",
    "Improved alignment with international security and compliance frameworks",
    "Enhanced resilience of applications, networks, and cloud systems",
    "Greater confidence from customers, auditors, and business partners",
  ];

  const industryData = [
    {
      icon: "bi bi-pc-display",
      title: "IT service providers and managed service organizations",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS companies and cloud-based technology platforms",
    },
    {
      icon: "bi bi-credit-card",
      title: "Banks, fintech firms, and payment processing businesses",
    },
    {
      icon: "bi bi-bag-check",
      title: "E-commerce platforms and online service providers",
    },
    {
      icon: "bi bi-hospital",
      title: "Healthcare organizations and data-intensive enterprises",
    },
    {
      icon: "bi bi-mortarboard",
      title:
        "Companies subject to regulatory, audit, or client-driven security requirements",
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
          VAPT Certification in Cambodia | Expert Vulnerability & Penetration
          Testing Services – First Cert
        </title>
        <meta
          name="description"
          content="Looking for VAPT Certification in Cambodia? First Cert offers professional vulnerability assessment and penetration testing services to identify security gaps, validate real attack risks, and enhance organizational cyber resilience."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Cambodia, VAPT consultants Cambodia, penetration testing Cambodia, vulnerability assessment Cambodia, cybersecurity testing Cambodia, VAPT services Cambodia, VAPT cost Cambodia, network security testing Cambodia, application penetration testing Cambodia, cloud security testing Cambodia, mobile application security Cambodia, First Cert VAPT Cambodia, ethical hacking Cambodia, VAPT compliance Cambodia"
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
          <h1 className="main-title">VAPT Certification in Cambodia</h1>
          <p className="small-desc">
            Strengthening Cybersecurity Through Proactive Testing
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
                alt="VAPT Certification in Cambodia"
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
                <b>VAPT Certification in Cambodia</b> enables organizations to
                understand how vulnerable their digital assets are to real-world
                cyber threats. As Cambodian businesses increasingly adopt cloud
                platforms, online services, fintech solutions, and
                interconnected IT environments, proactive security testing has
                become essential for protecting systems, data, and business
                continuity.
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
                <b>First Cert</b> supports organizations across Cambodia by
                delivering hands-on VAPT services that focus on real exploit
                scenarios rather than surface-level scans. Our goal is to
                provide clear risk visibility, actionable remediation guidance,
                and measurable improvements in security posture.
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
            What VAPT Certification in Cambodia Covers
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>
              Vulnerability Assessment and Penetration Testing (VAPT)
              Certification in Cambodia
            </b>{" "}
            combines systematic vulnerability discovery with controlled
            penetration attempts. This dual approach evaluates not only where
            weaknesses exist, but also how they could realistically be exploited
            by attackers.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A typical VAPT engagement includes:
          </p>

          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>
                Identification of security weaknesses across networks, servers,
                applications, APIs, and cloud environments
              </h5>
            </div>

            <div class="vapt-card">
              <h5>
                Ethical hacking exercises that simulate genuine attack
                techniques
              </h5>
            </div>
            <div class="vapt-card">
              <h5>
                Analysis of exploit feasibility and potential business impact
              </h5>
            </div>
            <div class="vapt-card">
              <h5>
                Risk prioritization with clear, actionable remediation
                recommendations
              </h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            VAPT certification demonstrates an organization's commitment to
            continuous cybersecurity assessment and improvement.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Cambodia That Need VAPT Certification
          </h2>

          <p className="text-center section-sub mb-5">
            VAPT Certification in Cambodia is highly relevant for organizations
            that rely on digital infrastructure or manage sensitive information,
            such as:
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
                    <a href="iso-9001-certification-in-cambodia">
                      ISO 9001 Certification in Cambodia
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-cambodia">
                      ISO 27001 Certification in Cambodia
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-cambodia">
                      CMMI Certification in Cambodia
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-cambodia">
                      HIPAA Certification in Cambodia
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-cambodia">
                      VAPT Certification in Cambodia
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-cambodia">
                      GDPR Certification in Cambodia
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-cambodia">
                      SOC 1 Certification in Cambodia
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-cambodia">
                      SOC 2 Certification in Cambodia
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          VAPT helps Cambodia-based organizations align with global
          cybersecurity expectations while reducing exposure to cyber risks.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Key Benefits of VAPT Certification in Cambodia
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve VAPT Certification in Cambodia gain
                important security and business advantages, including:
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
                alt="VAPT Benefits in Cambodia"
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
            VAPT shifts cybersecurity from reactive incident handling to
            proactive risk prevention.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's VAPT Methodology in Cambodia
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
            First Cert follows a structured, results-oriented VAPT delivery
            model in Cambodia:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Scope Definition</h4>
                <p>Identify systems, environments, and testing objectives.</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Vulnerability Identification</h4>
                <p>Perform detailed security assessments.</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Penetration Testing</h4>
                <p>Execute controlled attack simulations safely.</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Impact Evaluation</h4>
                <p>
                  Assess severity, exploit paths, and real-world consequences.
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Reporting</h4>
                <p>
                  Deliver clear technical reports and management-level
                  summaries.
                </p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Support</h4>
                <p>Advise on effective vulnerability fixes.</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Re-Testing</h4>
                <p>
                  Confirm that applied corrections successfully mitigate risks.
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
            This methodology ensures practical outcomes that strengthen real
            security defenses.
          </p>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          VAPT Certification Cost in Cambodia
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
                  The cost of VAPT Certification in Cambodia depends on several
                  factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Number of applications, systems, and infrastructure
                    components in scope
                  </li>
                  <li className="check">
                    Type of testing required (web, mobile, API, network, or
                    cloud)
                  </li>
                  <li className="check">
                    Complexity of the IT environment and external integrations
                  </li>
                  <li className="check">
                    Sensitivity of business and customer data
                  </li>
                  <li className="check">
                    Depth of testing and reporting expectations
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial security review to provide a
                  transparent, customized cost proposal aligned with your
                  organization's needs.
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
                  Choose First Cert for VAPT Certification in Cambodia
                </div>

                <div className="title small-title">
                  First Cert is a trusted cybersecurity consulting partner in
                  Cambodia, supporting startups, growing businesses, and
                  enterprises with reliable and actionable VAPT services. Our
                  experts focus on delivering meaningful risk reduction and
                  long-term security improvement.
                </div>

                <div className="title small-title">
                  From initial vulnerability identification to remediation
                  validation, First Cert helps organizations in Cambodia stay
                  resilient against evolving cyber threats.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your VAPT Certification journey in Cambodia with First
                  Cert and protect your digital environment with confidence,
                  clarity, and proactive security assurance.
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

export default CambodiaVapt;
