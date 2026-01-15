import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/middle-east/qatar/vapt-img.webp";
import benefitsvapt from "../../../assets/img/country/middle-east/qatar/vapt-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function QatarVapt() {
  const benefits = [
    "Proactive Threat Detection – Identify vulnerabilities before attackers do.",
    "Compliance Enablement – Supports ISO 27001, SOC 2, PCI DSS, GDPR, and HIPAA requirements.",
    "Reduced Cyber Losses – Minimizes risk of breaches, ransomware, and service disruption.",
    "Customer Confidence – Demonstrates commitment to data and system security.",
    "Operational Stability – Improves resilience and business continuity.",
  ];

  const hipaaData = [
    {
      icon: "bi bi-pc-display",
      title: "IT services and software development firms",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS and cloud-based businesses",
    },
    {
      icon: "bi bi-credit-card",
      title: "Financial services, fintech, and payment platforms",
    },
    {
      icon: "bi bi-bag-check",
      title: "E-commerce and online marketplaces",
    },
    {
      icon: "bi bi-hospital",
      title: "Healthcare and health-tech organizations",
    },
    {
      icon: "bi bi-mortarboard",
      title: "Educational institutions and EdTech companies",
    },
    {
      icon: "bi bi-headset",
      title: "BPOs, KPOs, and data processing centers",
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
          VAPT Certification in Qatar | Trusted VAPT Consultants – First Cert
        </title>
        <meta
          name="description"
          content="Looking to secure your IT systems with VAPT Certification in Qatar? First Cert offers professional vulnerability assessment, penetration testing, detailed reporting, and remediation guidance to strengthen your cybersecurity defenses."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Qatar, VAPT consultants in Qatar, VAPT testing in Qatar, penetration testing Qatar, vulnerability assessment Qatar, VAPT certification cost in Qatar, VAPT audit Qatar, cybersecurity services Qatar, network penetration testing Qatar, application security testing Qatar, mobile app VAPT Qatar, cloud security assessment Qatar, affordable VAPT services Qatar, First Cert VAPT consultants, security testing company Qatar, VAPT for startups Qatar, VAPT for IT companies Qatar, VAPT compliance Qatar."
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
          <h1 className="main-title">VAPT Certification in Qatar</h1>
          <p className="small-desc">
            Strengthen Your Cyber Defense Proactively
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
                Achieve <b>VAPT Certification in Qatar</b> helps organizations
                identify and eliminate security weaknesses before cybercriminals
                can exploit them. With First Cert, businesses gain access to
                expert-led vulnerability assessments and penetration testing
                that uncover hidden risks across networks, applications, and
                cloud environments.
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
                Our structured VAPT approach focuses on real-world attack
                simulations, practical remediation, and compliance alignment,
                enabling organizations in Qatar to build resilient and secure IT
                infrastructures while maintaining customer confidence.
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
            What is VAPT Certification in Qatar?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>
              VAPT (Vulnerability Assessment and Penetration Testing)
              Certification in Qatar
            </b>{" "}
            is a comprehensive cybersecurity evaluation that combines automated
            scans and manual testing techniques. It assesses how secure your
            systems are against internal and external threats. This process
            helps organizations:
          </p>
          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Detect security gaps in systems and applications</h5>
            </div>

            <div class="vapt-card">
              <h5>Simulate hacker behavior to test defenses</h5>
            </div>
            <div class="vapt-card">
              <h5>Reduce the likelihood of data breaches and downtime</h5>
            </div>
            <div class="vapt-card">
              <h5>
                Meet security requirements for international standards and
                regulations
              </h5>
            </div>
          </div>
          <br />
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            VAPT certification demonstrates that your organization takes
            cybersecurity seriously and follows industry-recognized security
            testing practices.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Implement VAPT Certification in Qatar?
          </h2>

          <p className="text-center section-sub mb-5">
            Organizations in Qatar that rely on digital platforms, online
            services, or sensitive data should implement VAPT, including:
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
                    <a href="iso-9001-certification-in-qatar">
                      ISO 9001 Certification in Qatar
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-qatar">
                      ISO 27001 Certification in Qatar
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-qatar">
                      CMMI Certification in Qatar
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-qatar">
                      HIPAA Certification in Qatar
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-qatar">
                      VAPT Certification in Qatar
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-qatar">
                      GDPR Certification in Qatar
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-qatar">
                      SOC 1 Certification in Qatar
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-qatar">
                      SOC 2 Certification in Qatar
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          VAPT helps Qatar-based businesses reduce cyber exposure and strengthen
          system reliability.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting VAPT Certification in Qatar
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
            With <a href="/">First Cert</a>, achieving{" "}
            <b>VAPT Certification in Qatar</b> becomes a secure, thorough, and
            value-driven process.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            VAPT Certification in Qatar – Simplified Process with{" "}
            <span style={{ color: "black" }}>First Cert</span>
          </h2>
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
                <p>Perform controlled attack simulations.</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Risk Evaluation</h4>
                <p>Prioritize findings based on severity and impact.</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Reporting</h4>
                <p>Deliver a clear, actionable security report.</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Guidance</h4>
                <p>Support teams in fixing identified issues.</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Re-testing & Certification</h4>
                <p>Validate fixes and issue the final VAPT report.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          How Much Does VAPT Certification Cost in Qatar?
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
                  The cost of VAPT Certification in Qatar varies depending on:
                </div>

                <ul className="features">
                  <li className="check">
                    Number of systems, applications, or servers
                  </li>
                  <li className="check">
                    Type of testing required (web, mobile, network, cloud, API)
                  </li>
                  <li className="check">Complexity of IT infrastructure</li>
                  <li className="check">Data sensitivity and risk exposure</li>
                  <li className="check">Testing duration and scope</li>
                </ul>

                <div className="title small-title">
                  First Cert provides flexible, transparent, and affordable VAPT
                  pricing based on your exact requirements.
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
                  Achieve VAPT Certification in Qatar with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted cybersecurity partner for
                  organizations in Qatar seeking reliable VAPT services. Our
                  experienced security professionals deliver accurate testing,
                  practical remediation advice, and compliance-driven
                  assessments tailored to your business environment.
                </div>

                <div className="title small-title">
                  From startups to large enterprises, we help organizations
                  build strong cyber defenses and maintain regulatory
                  confidence.
                </div>
                <div className="title small-title-p">
                  📧 Contact us: info@firstcertification.com Start your VAPT
                  Certification journey in Qatar with First Cert and secure your
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

export default QatarVapt;
