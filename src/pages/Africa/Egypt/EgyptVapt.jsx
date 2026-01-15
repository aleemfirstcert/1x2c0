import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/africa/egypt/vapt-img.webp";
import benefitsvapt from "../../../assets/img/country/africa/egypt/vapt-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function EgyptVapt() {
  const benefits = [
    "Early identification of critical vulnerabilities before exploitation",
    "Reduced likelihood of data breaches, service outages, and financial loss",
    "Improved alignment with international cybersecurity and compliance standards",
    "Stronger protection for cloud, network, application, and mobile environments",
    "Increased trust from customers, partners, and regulatory stakeholders",
  ];

  const industryData = [
    {
      icon: "bi bi-pc-display",
      title: "IT service providers and software development companies",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud service providers and SaaS businesses",
    },
    {
      icon: "bi bi-credit-card",
      title: "Banks, fintech firms, and payment processing platforms",
    },
    {
      icon: "bi bi-bag-check",
      title: "E-commerce companies and online service portals",
    },
    {
      icon: "bi bi-hospital",
      title: "Healthcare institutions and data-intensive organizations",
    },
    {
      icon: "bi bi-mortarboard",
      title:
        "Enterprises undergoing vendor security audits or regulatory reviews",
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
          VAPT Certification in Egypt | Comprehensive Vulnerability &
          Penetration Testing Services – First Cert
        </title>
        <meta
          name="description"
          content="Searching for VAPT Certification in Egypt? First Cert delivers advanced vulnerability assessment and penetration testing services that uncover hidden security weaknesses, emulate real cyberattack scenarios, and help organizations strengthen their overall cybersecurity posture with confidence."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Egypt, VAPT consultants Egypt, penetration testing Egypt, vulnerability assessment Egypt, cybersecurity testing Egypt, VAPT services Egypt, VAPT cost Egypt, network security testing Egypt, application penetration testing Egypt, cloud security testing Egypt, mobile app security Egypt, First Cert VAPT Egypt, ethical hacking Egypt, VAPT compliance Egypt"
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
          <h1 className="main-title">VAPT Certification in Egypt</h1>
          <p className="small-desc">
            Advancing Proactive Cybersecurity Defense
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
                alt="VAPT Certification in Egypt"
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
                <b>VAPT Certification in Egypt</b> allows organizations to
                evaluate how effectively their digital environments can
                withstand modern cyber threats. As Egypt continues to expand its
                digital ecosystem across banking, fintech, healthcare, energy,
                telecom, e-commerce, and public-sector platforms, continuous
                security testing has become a core requirement for protecting
                data, systems, and service availability.
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
                <b>First Cert</b> works with organizations across Egypt to
                deliver intelligence-driven VAPT programs that reflect
                real-world attack behavior. Our focus is on identifying
                exploitable weaknesses, validating risk exposure, and providing
                clear remediation paths that lead to measurable security
                improvements rather than superficial compliance.
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
            What VAPT Certification in Egypt Involves
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>Vulnerability Assessment and Penetration Testing in Egypt</b>{" "}
            combines detailed vulnerability identification with controlled
            exploitation techniques to determine how security gaps could be
            abused by attackers. This approach highlights real attack paths
            instead of isolated technical findings.
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
                Discovery of vulnerabilities across networks, servers,
                applications, APIs, and cloud platforms
              </h5>
            </div>

            <div className="vapt-card">
              <h5>
                Manual and automated penetration testing using current threat
                techniques
              </h5>
            </div>
            <div className="vapt-card">
              <h5>
                Evaluation of privilege escalation, lateral movement, and
                unauthorized access scenarios
              </h5>
            </div>
            <div className="vapt-card">
              <h5>
                Risk prioritization based on business impact and exploit
                feasibility
              </h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            VAPT certification demonstrates an organization's commitment to
            continuous cybersecurity risk management.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Egypt That Benefit from VAPT
          </h2>

          <p className="text-center section-sub mb-5">
            VAPT Certification in Egypt is essential for organizations that
            operate digital platforms or handle sensitive information,
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
                    <a href="iso-9001-certification-in-egypt">
                      ISO 9001 Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-egypt">
                      ISO 27001 Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-egypt">
                      CMMI Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-egypt">
                      HIPAA Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-egypt">
                      VAPT Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-egypt">
                      GDPR Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-egypt">
                      SOC 1 Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-egypt">
                      SOC 2 Certification in Egypt
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          VAPT enables Egyptian organizations to meet global security
          expectations with confidence.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Advantages of VAPT Certification in Egypt
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving VAPT Certification in Egypt gain strong
                technical and strategic benefits, such as:
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
                alt="VAPT Benefits in Egypt"
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
            VAPT shifts cybersecurity from a reactive response to a preventive
            defense strategy.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's VAPT Delivery Framework in Egypt
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
            First Cert follows a structured, results-oriented VAPT methodology
            designed for organizations operating in Egypt:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Engagement Scoping</h4>
                <p>Define systems, assets, and testing boundaries</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Vulnerability Identification</h4>
                <p>Perform deep technical security assessments</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Penetration Execution</h4>
                <p>Simulate ethical attack scenarios in a controlled manner</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Risk Evaluation</h4>
                <p>Measure exploitation impact and business exposure</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Comprehensive Reporting</h4>
                <p>
                  Deliver detailed technical findings and executive summaries
                </p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Assistance</h4>
                <p>Support teams with practical mitigation guidance</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Re-Testing & Confirmation</h4>
                <p>
                  Validate that vulnerabilities have been effectively resolved
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
            This approach ensures VAPT delivers tangible and lasting security
            improvements.
          </p>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          VAPT Certification Cost in Egypt
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
                  The cost of VAPT Certification in Egypt varies depending on
                  several factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Number and type of systems, applications, and environments
                    tested
                  </li>
                  <li className="check">
                    Scope of testing such as web, mobile, API, network, or cloud
                  </li>
                  <li className="check">
                    Infrastructure complexity and third-party integrations
                  </li>
                  <li className="check">
                    Sensitivity of customer or business-critical data
                  </li>
                  <li className="check">
                    Reporting depth and post-remediation validation requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a detailed scoping exercise to provide
                  a transparent, customized cost estimate aligned with
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
                  Get VAPT Certified in Egypt with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted cybersecurity consulting partner in
                  Egypt, supporting startups, SMEs, and large enterprises with
                  effective VAPT solutions. Our consultants focus on real attack
                  exposure, actionable insights, and long-term cyber resilience.
                </div>

                <div className="title small-title">
                  From initial assessment to remediation validation, First Cert
                  helps organizations in Egypt stay ahead of evolving cyber
                  threats with clarity, control, and confidence.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your VAPT Certification journey in Egypt with First Cert
                  and secure your digital ecosystem through proactive,
                  professional, and intelligence-driven cybersecurity testing.
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

export default EgyptVapt;
