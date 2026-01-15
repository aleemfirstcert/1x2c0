import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/middle-east/iraq/vapt-img.webp";
import benefitsvapt from "../../../assets/img/country/middle-east/iraq/vapt-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function IraqVapt() {
  const benefits = [
    "Identification of high-risk vulnerabilities before attackers exploit them",
    "Reduced likelihood of data breaches, service outages, and financial loss",
    "Stronger alignment with global cybersecurity and compliance frameworks",
    "Improved protection of applications, networks, and cloud environments",
    "Enhanced trust from customers, partners, and auditors",
  ];

  const industryData = [
    {
      icon: "bi bi-pc-display",
      title: "IT and technology service providers",
    },
    {
      icon: "bi bi-cloud-check",
      title: "Cloud-based and SaaS solution companies",
    },
    {
      icon: "bi bi-credit-card",
      title: "Banks, financial institutions, and payment processors",
    },
    {
      icon: "bi bi-bag-check",
      title: "E-commerce platforms and online service providers",
    },
    {
      icon: "bi bi-hospital",
      title: "Healthcare organizations and data-driven enterprises",
    },
    {
      icon: "bi bi-mortarboard",
      title:
        "Corporations responding to client security audits or regulatory expectations",
    },
    {
      icon: "bi bi-shield-lock",
      title:
        "Businesses preparing for ISO 27001, SOC 2, PCI DSS, HIPAA, or GDPR compliance",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          VAPT Certification in Iraq | Professional Vulnerability Assessment &
          Penetration Testing – First Cert
        </title>
        <meta
          name="description"
          content="Searching for VAPT Certification in Iraq? First Cert delivers professional vulnerability assessment and penetration testing services that uncover security flaws, simulate advanced cyber threats, and help organizations reinforce their overall cybersecurity posture."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Iraq, VAPT consultants Iraq, penetration testing Iraq, vulnerability assessment Iraq, cybersecurity testing Iraq, VAPT services Iraq, VAPT cost Iraq, network penetration testing Iraq, application security testing Iraq, cloud security Iraq, mobile app penetration testing Iraq, First Cert VAPT Iraq, ethical hacking Iraq, VAPT compliance Iraq"
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
          <h1 className="main-title">VAPT Certification in Iraq</h1>
          <p className="small-desc">
            Building Resilient Cybersecurity Frameworks
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
                alt="VAPT Certification in Iraq"
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
                <b>VAPT Certification in Iraq</b> enables organizations to
                evaluate how effectively their digital infrastructure can
                withstand real cyberattack scenarios. As Iraq continues to
                expand its digital footprint across banking, telecom, oil & gas,
                healthcare, e-governance, and enterprise IT environments,
                identifying and addressing security weaknesses has become a
                business-critical requirement.
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
                <b>First Cert</b> supports organizations across Iraq by
                delivering practical VAPT services that go beyond automated
                scans. Our testing focuses on realistic attack paths,
                operational impact, and clear remediation strategies that
                strengthen long-term cyber resilience.
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
            What VAPT Certification in Iraq Covers
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>Vulnerability Assessment and Penetration Testing in Iraq</b>{" "}
            involves a structured approach to identifying technical weaknesses
            and safely exploiting them to understand real exposure levels. This
            combined methodology highlights how attackers could gain
            unauthorized access or disrupt operations.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A standard VAPT engagement includes:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>
                In-depth identification of vulnerabilities across networks,
                servers, applications, APIs, and cloud platforms
              </h5>
            </div>

            <div className="vapt-card">
              <h5>
                Ethical penetration testing that imitates modern cyberattack
                techniques
              </h5>
            </div>
            <div className="vapt-card">
              <h5>
                Evaluation of attack chains, privilege misuse, and system
                compromise scenarios
              </h5>
            </div>
            <div className="vapt-card">
              <h5>
                Risk prioritization based on technical severity and business
                impact
              </h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            VAPT certification demonstrates a proactive commitment to
            cybersecurity governance and continuous risk management.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Organizations in Iraq That Need VAPT
          </h2>

          <p className="text-center section-sub mb-5">
            VAPT Certification in Iraq is essential for organizations that
            depend on digital systems or process sensitive information, such as:
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
                    <a href="iso-9001-certification-in-iraq">
                      ISO 9001 Certification in Iraq
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-iraq">
                      ISO 27001 Certification in Iraq
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-iraq">
                      CMMI Certification in Iraq
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-iraq">
                      HIPAA Certification in Iraq
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-iraq">
                      VAPT Certification in Iraq
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-iraq">
                      GDPR Certification in Iraq
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-iraq">
                      SOC 1 Certification in Iraq
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-iraq">
                      SOC 2 Certification in Iraq
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          VAPT helps Iraqi organizations meet international security
          expectations while minimizing exposure to evolving cyber risks.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Advantages of VAPT Certification in Iraq
              </h1>
              <p className="text-center section-sub mb-5">
                By achieving VAPT Certification in Iraq, organizations gain both
                technical and strategic benefits, including:
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
                alt="VAPT Benefits in Iraq"
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
            VAPT transforms cybersecurity from a reactive response into a
            preventive defense mechanism.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's VAPT Approach in Iraq
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
            First Cert applies a structured and risk-driven VAPT methodology
            tailored to organizations operating in Iraq:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Scope Planning</h4>
                <p>Define assets, environments, and security objectives</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Vulnerability Analysis</h4>
                <p>Conduct comprehensive technical assessments</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Penetration Execution</h4>
                <p>Perform controlled and ethical attack simulations</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Risk Evaluation</h4>
                <p>Measure exploit impact on business operations</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Reporting</h4>
                <p>Deliver clear technical findings and executive summaries</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Guidance</h4>
                <p>Support teams with practical mitigation steps</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Re-Testing</h4>
                <p>Validate that vulnerabilities are effectively resolved</p>
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
            This process ensures that security testing results in tangible and
            measurable improvements.
          </p>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          VAPT Certification Cost in Iraq
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
                  The cost of VAPT Certification in Iraq varies based on several
                  factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Number and type of systems, applications, and infrastructure
                    components
                  </li>
                  <li className="check">
                    Testing coverage such as web, mobile, API, network, or cloud
                    assets
                  </li>
                  <li className="check">
                    Technical complexity and external integrations
                  </li>
                  <li className="check">
                    Sensitivity of stored or processed data
                  </li>
                  <li className="check">
                    Required reporting depth and validation testing
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial scoping assessment to provide a
                  clear, customized cost estimate aligned with your security
                  goals.
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
                  Get VAPT Certification in Iraq with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a reliable cybersecurity consulting partner for
                  organizations in Iraq, helping startups, SMEs, and large
                  enterprises strengthen their security defenses through
                  effective VAPT services. Our focus is on real-world risk
                  exposure, actionable insights, and long-term cyber protection.
                </div>

                <div className="title small-title">
                  From assessment to remediation validation, First Cert supports
                  Iraqi organizations in staying ahead of cyber threats with
                  confidence and clarity.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Begin your VAPT Certification journey in Iraq with First Cert
                  and safeguard your digital environment through proactive
                  cybersecurity testing.
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

export default IraqVapt;
