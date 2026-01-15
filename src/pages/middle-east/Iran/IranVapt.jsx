import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/middle-east/iran/vapt-img.webp";
import benefitsvapt from "../../../assets/img/country/middle-east/iran/vapt-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function IranVapt() {
  const benefits = [
    "Early detection of critical vulnerabilities before malicious exploitation",
    "Reduced risk of data breaches, downtime, and financial losses",
    "Improved alignment with global cybersecurity and compliance frameworks",
    "Enhanced protection of cloud, network, application, and mobile environments",
    "Increased confidence from customers, partners, and regulatory stakeholders",
  ];

  const industryData = [
    {
      icon: "bi bi-pc-display",
      title: "IT service providers and software development firms",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud service providers and SaaS companies",
    },
    {
      icon: "bi bi-credit-card",
      title: "Banks, fintech organizations, and payment platforms",
    },
    {
      icon: "bi bi-bag-check",
      title: "E-commerce businesses and online marketplaces",
    },
    {
      icon: "bi bi-hospital",
      title: "Healthcare institutions and data-centric enterprises",
    },
    {
      icon: "bi bi-mortarboard",
      title:
        "Enterprises undergoing client security audits or regulatory reviews",
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
          VAPT Certification in Iran | Advanced Vulnerability Assessment &
          Penetration Testing – First Cert
        </title>
        <meta
          name="description"
          content="Looking for VAPT Certification in Iran? First Cert provides expert vulnerability assessment and penetration testing services to identify hidden security gaps, simulate real-world cyberattacks, and help organizations strengthen their end-to-end cybersecurity defenses."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Iran, VAPT consultants Iran, penetration testing Iran, vulnerability assessment Iran, cybersecurity testing Iran, VAPT services Iran, VAPT cost Iran, network security testing Iran, application penetration testing Iran, cloud security testing Iran, mobile app security Iran, First Cert VAPT Iran, ethical hacking Iran, VAPT compliance Iran"
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
          <h1 className="main-title">VAPT Certification in Iran</h1>
          <p className="small-desc">Strengthening Digital Defense Readiness</p>
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
                alt="VAPT Certification in Iran"
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
                <b>VAPT Certification in Iran</b> enables organizations to
                proactively assess the strength of their IT infrastructure
                against evolving cyber threats. As Iran accelerates digital
                adoption across financial services, telecommunications,
                healthcare systems, energy operations, e-commerce, and
                government platforms, regular security testing has become
                essential for protecting business continuity and sensitive data.
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
                <b>First Cert</b> partners with organizations across Iran to
                deliver practical and intelligence-driven VAPT services. Our
                approach prioritizes realistic attack simulations, exposure
                validation, and remediation clarity—ensuring security
                improvements that extend beyond compliance checklists.
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
            Understanding VAPT Certification in Iran
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>Vulnerability Assessment and Penetration Testing in Iran</b>{" "}
            combines systematic vulnerability discovery with controlled
            exploitation techniques to measure real security exposure. This dual
            approach reveals how weaknesses can be chained together to
            compromise systems, applications, or data environments.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A comprehensive VAPT engagement typically includes:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>
                Identification of vulnerabilities across networks, applications,
                APIs, cloud services, and endpoints
              </h5>
            </div>

            <div className="vapt-card">
              <h5>
                Manual and automated penetration testing using modern attack
                methodologies
              </h5>
            </div>
            <div className="vapt-card">
              <h5>
                Analysis of privilege escalation paths and unauthorized access
                risks
              </h5>
            </div>
            <div className="vapt-card">
              <h5>
                Impact-based risk classification aligned with business
                priorities
              </h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            VAPT certification reflects a strong commitment to proactive
            cybersecurity risk management.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Should Pursue VAPT Certification in Iran
          </h2>

          <p className="text-center section-sub mb-5">
            VAPT Certification in Iran is critical for organizations that rely
            on digital platforms or manage sensitive information, including:
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
                    <a href="iso-9001-certification-in-iran">
                      ISO 9001 Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-iran">
                      ISO 27001 Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-iran">
                      CMMI Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-iran">
                      HIPAA Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-iran">
                      VAPT Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-iran">
                      GDPR Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-iran">
                      SOC 1 Certification in Iran
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-iran">
                      SOC 2 Certification in Iran
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          VAPT enables Iranian organizations to meet international security
          expectations with confidence.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Key Benefits of VAPT Certification in Iran
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving VAPT Certification in Iran gain
                significant technical and business advantages, such as:
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
                alt="VAPT Benefits in Iran"
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
            VAPT transforms cybersecurity into a preventive, intelligence-driven
            defense strategy.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's VAPT Methodology in Iran
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
            First Cert follows a structured and outcome-focused VAPT approach
            tailored to Iranian organizations:
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
                <h4>Vulnerability Discovery</h4>
                <p>Perform in-depth technical assessments</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Penetration Simulation</h4>
                <p>Execute ethical attack scenarios safely</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Risk Analysis</h4>
                <p>Evaluate business impact and exploitation likelihood</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Detailed Reporting</h4>
                <p>Provide technical findings and executive insights</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Support</h4>
                <p>Guide teams through practical risk mitigation</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Re-Testing & Validation</h4>
                <p>Confirm effective vulnerability resolution</p>
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
            This methodology ensures that testing leads to measurable security
            improvement.
          </p>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          VAPT Certification Cost in Iran
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
                  The cost of VAPT Certification in Iran depends on several
                  factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Number and type of systems, applications, and environments
                    assessed
                  </li>
                  <li className="check">
                    Scope of testing such as web, mobile, API, network, or cloud
                  </li>
                  <li className="check">
                    Technical complexity and third-party integrations
                  </li>
                  <li className="check">
                    Sensitivity of business or customer data involved
                  </li>
                  <li className="check">
                    Depth of reporting and post-remediation validation
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a scoping assessment to deliver a
                  clear, customized, and transparent cost estimate aligned with
                  organizational security objectives.
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
                  Get VAPT Certified in Iran with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted cybersecurity consulting partner in
                  Iran, supporting startups, growing businesses, and enterprises
                  with effective VAPT solutions. Our consultants focus on real
                  attack exposure, actionable insights, and long-term cyber
                  resilience.
                </div>

                <div className="title small-title">
                  From initial testing to remediation validation, First Cert
                  helps organizations in Iran stay ahead of cyber threats with
                  clarity, control, and confidence.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your VAPT Certification journey in Iran with First Cert
                  and secure your digital ecosystem through proactive and
                  professional cybersecurity testing.
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

export default IranVapt;
