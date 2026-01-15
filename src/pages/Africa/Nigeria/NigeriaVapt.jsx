import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/africa/nigeria/vapt-img.webp";
import benefitsvapt from "../../../assets/img/country/africa/nigeria/vapt-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function NigeriaVapt() {
  const benefits = [
    "Early identification of exploitable vulnerabilities before attackers can strike",
    "Minimized risk of data breaches, operational downtime, and financial loss",
    "Strengthened cybersecurity across cloud, network, web, and mobile assets",
    "Alignment with global compliance and security frameworks",
    "Increased confidence from clients, partners, and regulators",
    "Proactive security management rather than reactive fixes",
  ];

  const industryData = [
    {
      icon: "bi bi-pc-display",
      title: "Software development companies and IT service providers",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud service providers, SaaS platforms, and hosting firms",
    },
    {
      icon: "bi bi-credit-card",
      title: "Banks, fintech startups, and digital payment processors",
    },
    {
      icon: "bi bi-bag-check",
      title: "E-commerce platforms, marketplaces, and online portals",
    },
    {
      icon: "bi bi-hospital",
      title:
        "Healthcare institutions, research labs, and medical technology firms",
    },
    {
      icon: "bi bi-mortarboard",
      title:
        "Organizations preparing for ISO 27001, SOC 2, PCI DSS, HIPAA, or GDPR compliance audits",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          VAPT Certification in Nigeria | Advanced Cybersecurity & Penetration
          Testing Services – First Cert
        </title>
        <meta
          name="description"
          content="Seeking professional VAPT Certification in Nigeria? First Cert delivers end-to-end vulnerability assessment and penetration testing solutions that identify critical security gaps, simulate real-world cyber threats, and help organizations strengthen their digital defenses with actionable recommendations."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Nigeria, VAPT consultants Nigeria, penetration testing Nigeria, vulnerability assessment Nigeria, cybersecurity testing Nigeria, VAPT services Nigeria, VAPT cost Nigeria, network security testing Nigeria, application penetration testing Nigeria, cloud security testing Nigeria, mobile app security Nigeria, First Cert VAPT Nigeria, ethical hacking Nigeria, VAPT compliance Nigeria"
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
          <h1 className="main-title">VAPT Certification in Nigeria</h1>
          <p className="small-desc">Enhancing Digital Security Posture</p>
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
                alt="VAPT Certification in Nigeria"
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
                <b>VAPT Certification in Nigeria</b> enables businesses to
                proactively evaluate cybersecurity risks and assess the strength
                of their security controls. With Nigeria's fast-growing digital
                economy across fintech, healthcare, telecom, government
                platforms, e-commerce, and cloud services, organizations must
                continuously test systems to stay ahead of evolving cyber
                threats.
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
                <b>First Cert</b> partners with Nigerian organizations to
                deliver realistic, threat-driven VAPT programs. Our methodology
                uncovers genuine vulnerabilities, evaluates business impact, and
                provides clear remediation guidance—transforming security from
                reactive measures to strategic defense.
              </p>
            </div>

            <div className="col-md-6">
              <EnquiryForm />
            </div>
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
            What VAPT Certification in Nigeria Involves
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>
              Vulnerability Assessment and Penetration Testing (VAPT) in Nigeria
            </b>{" "}
            combines thorough vulnerability scanning with ethical exploitation
            to identify how systems, networks, applications, and cloud platforms
            could be attacked. Key components include:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>
                Detection of security weaknesses across networks, applications,
                APIs, servers, and cloud infrastructure
              </h5>
            </div>

            <div className="vapt-card">
              <h5>
                Controlled ethical hacking simulations using automated and
                manual techniques
              </h5>
            </div>
            <div className="vapt-card">
              <h5>
                Tests for unauthorized access, privilege escalation, and lateral
                movement
              </h5>
            </div>
            <div className="vapt-card">
              <h5>
                Risk ranking based on exploitability and potential business
                impact
              </h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            VAPT Certification signals a commitment to proactive cybersecurity
            and continuous protection against threats.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Obtain VAPT Certification in Nigeria
          </h2>

          <p className="text-center section-sub mb-5">
            VAPT Certification in Nigeria is crucial for organizations that
            manage digital infrastructure or sensitive data, including:
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
                    <a href="iso-9001-certification-in-nigeria">
                      ISO 9001 Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-nigeria">
                      ISO 27001 Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-nigeria">
                      CMMI Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-nigeria">
                      HIPAA Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-nigeria">
                      VAPT Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-nigeria">
                      GDPR Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-nigeria">
                      SOC 1 Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-nigeria">
                      SOC 2 Certification in Nigeria
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          By obtaining VAPT Certification, Nigerian organizations demonstrate
          adherence to international cybersecurity standards and strengthen
          stakeholder trust.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Advantages of VAPT Certification in Nigeria
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving VAPT Certification in Nigeria benefit
                from:
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
                alt="VAPT Benefits in Nigeria"
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
            VAPT transforms cybersecurity into a structured, measurable, and
            sustainable business practice.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's VAPT Implementation Approach in Nigeria
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
            First Cert delivers a structured, results-focused VAPT framework
            tailored for Nigerian businesses:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Scope & Asset Definition</h4>
                <p>
                  Identify systems, applications, networks, and infrastructure
                  to be tested
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Vulnerability Assessment</h4>
                <p>
                  Conduct detailed scans and analysis of potential security gaps
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Penetration Testing</h4>
                <p>
                  Simulate real-world cyberattacks to evaluate control
                  effectiveness
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Risk Evaluation</h4>
                <p>
                  Measure technical findings against business and operational
                  impact
                </p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Reporting</h4>
                <p>
                  Provide comprehensive technical reports and executive
                  summaries
                </p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Guidance</h4>
                <p>
                  Recommend actionable strategies to address vulnerabilities
                </p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Re-Testing</h4>
                <p>Verify effectiveness of implemented security measures</p>
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
            This methodology ensures meaningful results, sustainable
            improvements, and measurable cyber resilience.
          </p>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          VAPT Certification Cost in Nigeria
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
                  VAPT Certification cost in Nigeria depends on factors such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Number and complexity of systems, applications, and network
                    environments
                  </li>
                  <li className="check">
                    Testing scope covering web, mobile, cloud, API, and network
                    systems
                  </li>
                  <li className="check">
                    Sensitivity of data being processed and stored
                  </li>
                  <li className="check">
                    Depth of testing, reporting, and post-remediation validation
                  </li>
                  <li className="check">
                    Integration with other compliance initiatives (e.g., ISO
                    27001, SOC 2, HIPAA)
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a comprehensive scoping and readiness
                  assessment to provide a transparent, tailored cost estimate
                  aligned with organizational security goals.
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
                  Get VAPT Certified in Nigeria with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted cybersecurity consulting partner in
                  Nigeria, supporting enterprises, SMEs, and startups with
                  practical vulnerability assessment and penetration testing
                  solutions. Our experts focus on realistic threat exposure,
                  actionable remediation, and long-term cyber resilience.
                </div>

                <div className="title small-title">
                  From initial assessment to remediation validation, First Cert
                  helps organizations in Nigeria safeguard digital assets,
                  strengthen security posture, and stay prepared against
                  emerging cyber threats.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your VAPT Certification journey in Nigeria with First
                  Cert and secure your digital environment through professional,
                  proactive, and intelligence-driven cybersecurity testing.
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

export default NigeriaVapt;
