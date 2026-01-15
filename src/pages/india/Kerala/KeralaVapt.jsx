import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/india/kerala/vapt-img.webp";
import benefitsvapt from "../../../assets/img/country/india/kerala/vapt-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function KeralaVapt() {
  const benefits = [
    "Early identification of high-risk security gaps",
    "Lower exposure to cyberattacks and service disruptions",
    "Better protection of sensitive customer and business data",
    "Improved alignment with international compliance frameworks",
    "Higher trust from clients, regulators, and partners",
    "A proactive and intelligence-driven security posture",
  ];

  const industryData = [
    {
      icon: "bi bi-pc-display",
      title: "Software companies and IT service providers",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud hosting and SaaS businesses",
    },
    {
      icon: "bi bi-credit-card",
      title: "Banks, NBFCs, and fintech organizations",
    },
    {
      icon: "bi bi-bag-check",
      title: "Online retail platforms and marketplaces",
    },
    {
      icon: "bi bi-hospital",
      title: "Healthcare providers, labs, and research firms",
    },
    {
      icon: "bi bi-mortarboard",
      title:
        "Companies preparing for ISO 27001, SOC 2, PCI DSS, HIPAA, or GDPR",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          VAPT Certification in Kerala | Advanced Cybersecurity & Ethical
          Hacking
        </title>
        <meta
          name="description"
          content="Get VAPT Certification in Kerala with First Cert. We perform penetration testing, vulnerability scanning, and security validation to safeguard your IT systems."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Kerala, VAPT consultants Kerala, penetration testing Kerala, vulnerability assessment Kerala, cybersecurity testing Kerala, VAPT services Kerala, VAPT cost Kerala, network security testing Kerala, application penetration testing Kerala, cloud security testing Kerala, mobile application security Kerala, First Cert VAPT Kerala, ethical hacking Kerala, VAPT compliance Kerala"
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
          <h1 className="main-title">VAPT Certification in Kerala</h1>
          <p className="small-desc">Building Resilient Cyber Defense</p>
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
                alt="VAPT Certification in Kerala"
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
                <b>VAPT Certification in Kerala</b> enables organizations to
                detect, evaluate, and eliminate security weaknesses before they
                can be exploited by cybercriminals. With Kerala becoming a major
                center for IT services, digital healthcare, SaaS platforms,
                fintech solutions, and cloud-based operations, the demand for
                strong cybersecurity controls has grown significantly.
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
                <b>First Cert</b> supports Kerala-based companies by performing
                realistic vulnerability and penetration testing that simulates
                actual cyber-attack methods.
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
            What VAPT Certification in Kerala Covers
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>Vulnerability Assessment and Penetration Testing in Kerala</b>{" "}
            combines intelligent automated scans with skilled ethical hacking to
            expose risks in applications, servers, networks, APIs, and cloud
            platforms. This layered testing approach reveals both visible
            weaknesses and deeply hidden flaws.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A standard VAPT program includes:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>
                Security testing for web, mobile, network, and cloud
                environments
              </h5>
            </div>

            <div className="vapt-card">
              <h5>Simulated hacking attempts to verify exploitability</h5>
            </div>
            <div className="vapt-card">
              <h5>
                Review of user access, authentication, and system permissions
              </h5>
            </div>
            <div className="vapt-card">
              <h5>
                Risk classification based on business and operational impact
              </h5>
            </div>
            <div className="vapt-card">
              <h5>Clear technical and management-level remediation guidance</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Certification confirms that security risks are identified,
            controlled, and continuously reduced.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Needs VAPT Certification in Kerala
          </h2>

          <p className="text-center section-sub mb-5">
            VAPT Certification in Kerala is essential for organizations that
            depend on digital infrastructure or manage confidential data, such
            as:
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
                    <a href="iso-9001-certification-in-kerala">
                      ISO 9001 Certification in Kerala
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-kerala">
                      ISO 27001 Certification in Kerala
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-kerala">
                      CMMI Certification in Kerala
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-kerala">
                      HIPAA Certification in Kerala
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-kerala">
                      VAPT Certification in Kerala
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-kerala">
                      GDPR Certification in Kerala
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-kerala">
                      SOC 1 Certification in Kerala
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-kerala">
                      SOC 2 Certification in Kerala
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          VAPT ensures organizations in Kerala meet global security and
          compliance expectations.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of VAPT Certification in Kerala
              </h1>
              <p className="text-center section-sub mb-5">
                By completing VAPT Certification in Kerala, businesses achieve:
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
                alt="VAPT Benefits in Kerala"
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
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's VAPT Methodology in Kerala
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
            First Cert follows a proven VAPT process designed for Kerala
            organizations:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Define Scope</h4>
                <p>
                  Define the scope of applications, networks, and infrastructure
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Vulnerability Discovery</h4>
                <p>Perform detailed vulnerability discovery and analysis</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Penetration Testing</h4>
                <p>
                  Conduct controlled penetration testing based on real attack
                  techniques
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Risk Evaluation</h4>
                <p>Evaluate risks according to business impact</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Reporting</h4>
                <p>Deliver clear reports for technical and leadership teams</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Support</h4>
                <p>Support vulnerability remediation</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Re-Testing</h4>
                <p>Re-test to confirm security improvements</p>
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
            This approach ensures continuous strengthening of your cybersecurity
            environment.
          </p>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          VAPT Certification Cost in Kerala
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
                  The cost of VAPT Certification in Kerala varies based on:
                </div>

                <ul className="features">
                  <li className="check">
                    Number of applications, servers, and endpoints tested
                  </li>
                  <li className="check">
                    Coverage of cloud, mobile, and network assets
                  </li>
                  <li className="check">
                    Complexity of IT systems and integrations
                  </li>
                  <li className="check">
                    Sensitivity of stored or processed data
                  </li>
                  <li className="check">
                    Compliance and reporting requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert evaluates your environment to provide a
                  transparent, customized pricing proposal.
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
                  Get VAPT Certified in Kerala with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted cybersecurity partner in Kerala,
                  delivering professional VAPT services that help organizations
                  detect threats, strengthen defenses, and minimize cyber risk.
                  Our team focuses on practical, real-world security
                  improvements rather than just compliance checklists.
                </div>

                <div className="title small-title">
                  From initial assessment to final verification, Kerala
                  businesses can protect digital assets, reduce vulnerabilities,
                  and maintain audit-ready security.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your VAPT Certification in Kerala with First Cert and
                  build a safer, more resilient digital future.
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

export default KeralaVapt;
