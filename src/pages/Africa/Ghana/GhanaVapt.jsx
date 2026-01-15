import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/africa/ghana/vapt-img.webp";
import benefitsvapt from "../../../assets/img/country/africa/ghana/vapt-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function GhanaVapt() {
  const benefits = [
    "Early detection of exploitable vulnerabilities before attackers can act",
    "Reduced risk of data breaches, downtime, and financial losses",
    "Improved security posture across cloud, network, web, and mobile assets",
    "Stronger compliance alignment with international security frameworks",
    "Increased confidence from customers, partners, and regulators",
  ];

  const industryData = [
    {
      icon: "bi bi-pc-display",
      title: "Software development firms and IT service providers",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud hosting companies and SaaS platforms",
    },
    {
      icon: "bi bi-credit-card",
      title: "Banks, fintech organizations, and digital payment providers",
    },
    {
      icon: "bi bi-bag-check",
      title: "E-commerce platforms and online customer portals",
    },
    {
      icon: "bi bi-hospital",
      title: "Healthcare institutions and data-driven enterprises",
    },
    {
      icon: "bi bi-mortarboard",
      title:
        "Organizations facing vendor risk assessments or regulatory scrutiny",
    },
    {
      icon: "bi bi-shield-lock",
      title:
        "Businesses preparing for ISO 27001, SOC 2, PCI DSS, HIPAA, or GDPR audits",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          VAPT Certification in Ghana | Advanced Vulnerability & Penetration
          Testing Solutions – First Cert
        </title>
        <meta
          name="description"
          content="Need reliable VAPT Certification in Ghana? First Cert offers in-depth vulnerability assessment and penetration testing services that simulate real cyber threats, identify critical security gaps, and help organizations strengthen their cyber defenses with actionable insights."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Ghana, VAPT consultants Ghana, penetration testing Ghana, vulnerability assessment Ghana, cybersecurity testing Ghana, VAPT services Ghana, VAPT cost Ghana, network security testing Ghana, application penetration testing Ghana, cloud security testing Ghana, mobile app security Ghana, First Cert VAPT Ghana, ethical hacking Ghana, VAPT compliance Ghana"
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
          <h1 className="main-title">VAPT Certification in Ghana</h1>
          <p className="small-desc">Building Stronger Cyber Resilience</p>
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
                alt="VAPT Certification in Ghana"
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
                <b>VAPT Certification in Ghana</b> enables organizations to
                proactively assess their exposure to cyber risks and validate
                the effectiveness of existing security controls. With Ghana's
                rapid digital growth across financial services, telecom,
                healthcare, e-commerce, government systems, and cloud-based
                platforms, organizations must continuously test their
                environments against evolving cyberattack techniques.
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
                <b>First Cert</b> supports businesses across Ghana by delivering
                practical, threat-led VAPT programs that mirror real attacker
                behavior. Our approach focuses on uncovering genuine security
                weaknesses, measuring business impact, and delivering
                remediation guidance that leads to real-world risk reduction
                rather than checkbox compliance.
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
            Understanding VAPT Certification in Ghana
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>Vulnerability Assessment and Penetration Testing in Ghana</b>{" "}
            combines systematic vulnerability discovery with controlled
            exploitation to determine how attackers could compromise systems,
            applications, or networks. This integrated testing approach exposes
            real attack paths and security blind spots across digital
            environments.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A typical VAPT engagement includes:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>
                Identification of security weaknesses across networks, servers,
                applications, APIs, and cloud infrastructure
              </h5>
            </div>

            <div className="vapt-card">
              <h5>
                Ethical hacking simulations using both automated tools and
                manual techniques
              </h5>
            </div>
            <div className="vapt-card">
              <h5>
                Testing for privilege escalation, unauthorized access, and
                lateral movement
              </h5>
            </div>
            <div className="vapt-card">
              <h5>
                Risk scoring based on exploitability and potential business
                impact
              </h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            VAPT Certification demonstrates an organization's commitment to
            proactive cybersecurity risk management and continuous improvement.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Needs VAPT Certification in Ghana
          </h2>

          <p className="text-center section-sub mb-5">
            VAPT Certification in Ghana is highly valuable for organizations
            that operate digital systems or manage sensitive data, including:
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
                    <a href="iso-9001-certification-in-ghana">
                      ISO 9001 Certification in Ghana
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-ghana">
                      ISO 27001 Certification in Ghana
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-ghana">
                      CMMI Certification in Ghana
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-ghana">
                      HIPAA Certification in Ghana
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-ghana">
                      VAPT Certification in Ghana
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-ghana">
                      GDPR Certification in Ghana
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-ghana">
                      SOC 1 Certification in Ghana
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-ghana">
                      SOC 2 Certification in Ghana
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          VAPT helps Ghanaian organizations align with global cybersecurity
          expectations and client security requirements.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Key Business Benefits of VAPT Certification in Ghana
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve VAPT Certification in Ghana gain
                several strategic advantages, such as:
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
                alt="VAPT Benefits in Ghana"
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
            VAPT transforms cybersecurity from a reactive process into a
            proactive defense mechanism.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's VAPT Implementation Methodology in Ghana
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
            First Cert follows a proven, results-driven VAPT framework designed
            for organizations operating in Ghana:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Scope Definition</h4>
                <p>Identify systems, assets, and testing boundaries</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Security Assessment</h4>
                <p>Conduct deep vulnerability analysis across environments</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Penetration Testing</h4>
                <p>Simulate real-world cyberattack scenarios ethically</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Risk Analysis</h4>
                <p>Evaluate technical findings against business impact</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Detailed Reporting</h4>
                <p>Provide technical reports and executive-level summaries</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Support</h4>
                <p>Assist teams with practical mitigation strategies</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Re-Testing</h4>
                <p>
                  Confirm that identified vulnerabilities have been successfully
                  resolved
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
            This methodology ensures that VAPT delivers measurable and
            sustainable security improvements.
          </p>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          VAPT Certification Cost in Ghana
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
                  The cost of VAPT Certification in Ghana depends on multiple
                  factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Number and type of systems, applications, and platforms
                    tested
                  </li>
                  <li className="check">
                    Testing scope covering web, mobile, API, network, or cloud
                    environments
                  </li>
                  <li className="check">
                    Infrastructure complexity and external integrations
                  </li>
                  <li className="check">
                    Sensitivity of business or customer data involved
                  </li>
                  <li className="check">
                    Depth of reporting and post-remediation verification
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins every engagement with a detailed scoping
                  exercise to provide a transparent and customized cost estimate
                  aligned with security objectives.
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
                  Get VAPT Certified in Ghana with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted cybersecurity advisory partner in
                  Ghana, supporting startups, SMEs, and large enterprises with
                  effective vulnerability assessment and penetration testing
                  services. Our consultants focus on real threat exposure,
                  actionable remediation, and long-term cyber resilience.
                </div>

                <div className="title small-title">
                  From initial assessment through remediation validation, First
                  Cert helps organizations in Ghana protect digital assets,
                  strengthen security controls, and stay ahead of modern cyber
                  threats.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your VAPT Certification journey in Ghana with First Cert
                  and secure your digital infrastructure through professional,
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

export default GhanaVapt;
