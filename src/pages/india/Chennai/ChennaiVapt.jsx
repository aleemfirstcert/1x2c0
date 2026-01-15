import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/asia/maldives/vapt-img.webp";
import benefitsvapt from "../../../assets/img/country/asia/maldives/vapt-benefits.webp";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function ChennaiVapt() {
  const benefits = [
    "Early identification of high-risk security gaps",
    "Lower chances of data breaches and downtime",
    "Stronger protection for customer and business data",
    "Improved compliance with international standards",
    "Higher trust from clients and regulatory bodies",
  ];

  const industryData = [
    {
      icon: "bi bi-pc-display",
      title: "Software development and IT service companies",
    },
    {
      icon: "bi bi-cloud-check",
      title: "SaaS platforms and cloud hosting providers",
    },
    {
      icon: "bi bi-credit-card",
      title: "Banks, fintech firms, and payment gateways",
    },
    {
      icon: "bi bi-bag-check",
      title: "Online marketplaces and customer portals",
    },
    {
      icon: "bi bi-hospital",
      title: "Healthcare, research, and data-driven organizations",
    },
    {
      icon: "bi bi-mortarboard",
      title:
        "Businesses preparing for ISO 27001, SOC 2, PCI DSS, HIPAA, or GDPR",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          VAPT Certification in Chennai | Cybersecurity & Ethical Hacking –
          First Cert
        </title>
        <meta
          name="description"
          content="Get VAPT Certification in Chennai with First Cert. We provide vulnerability scanning, penetration testing, and security validation to protect systems from real cyber threats."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Chennai, VAPT consultants Chennai, penetration testing Chennai, vulnerability assessment Chennai, cybersecurity testing Chennai, VAPT services Chennai, VAPT cost Chennai, network security testing Chennai, application penetration testing Chennai, cloud security testing Chennai, mobile application security Chennai, First Cert VAPT Chennai, ethical hacking Chennai, VAPT compliance Chennai"
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
          <h1 className="main-title">VAPT Certification in Chennai</h1>
          <p className="small-desc">Building Stronger Digital Defenses</p>
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
                alt="VAPT Certification in Chennai"
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
                <b>VAPT Certification in Chennai</b> enables organizations to
                uncover and eliminate security weaknesses before attackers can
                exploit them. As Chennai continues to grow as a major hub for IT
                services, fintech platforms, healthcare systems, SaaS providers,
                e-commerce, and cloud hosting, cyber threats have become more
                sophisticated and frequent.
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
                <b>First Cert</b> supports Chennai-based businesses by
                delivering real-world security testing that reflects how modern
                cyber-attacks actually occur.
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
            What VAPT Certification in Chennai Includes
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>Vulnerability Assessment and Penetration Testing in Chennai</b>{" "}
            combines automated scanning with expert-led ethical hacking to
            identify weaknesses across networks, applications, APIs, and cloud
            environments. This approach highlights both configuration flaws and
            deeper exploitable risks.
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            A complete VAPT program covers:
          </p>

          <div className="vapt-grid">
            <div className="vapt-card">
              <h5>Testing of web, mobile, network, and cloud systems</h5>
            </div>

            <div className="vapt-card">
              <h5>Controlled attack simulations to evaluate exploit paths</h5>
            </div>
            <div className="vapt-card">
              <h5>
                Review of access controls, authentication, and data exposure
              </h5>
            </div>
            <div className="vapt-card">
              <h5>Prioritization of risks based on business impact</h5>
            </div>
          </div>

          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            VAPT Certification confirms that cybersecurity risks are actively
            measured and reduced.
          </p>
        </div>
      </section>

      <section className="iso-section py-5">
        <div className="container">
          <h2 className="text-center mb-4 section-title">
            Who Needs VAPT in Chennai
          </h2>

          <p className="text-center section-sub mb-5">
            VAPT Certification in Chennai is critical for organizations that
            rely on digital infrastructure or handle sensitive information,
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
                    <a href="iso-9001-certification-in-chennai">
                      ISO 9001 Certification in Chennai
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-chennai">
                      ISO 27001 Certification in Chennai
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-chennai">
                      CMMI Certification in Chennai
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-chennai">
                      HIPAA Certification in Chennai
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-chennai">
                      VAPT Certification in Chennai
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-chennai">
                      GDPR Certification in Chennai
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-chennai">
                      SOC 1 Certification in Chennai
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-chennai">
                      SOC 2 Certification in Chennai
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center section-sub mb-5">
          VAPT helps Chennai organizations meet global security and compliance
          expectations.
        </p>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Advantages of VAPT Certification in Chennai
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that complete VAPT Certification in Chennai gain:
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
                alt="VAPT Benefits in Chennai"
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
            VAPT enables a proactive approach to cybersecurity rather than
            reacting after incidents occur.
          </p>
        </div>
      </div>

      <section className="soc1-process py-5">
        <div className="container">
          <h2 className="process-title text-center mb-3 text-primary">
            First Cert's VAPT Methodology in Chennai
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
            First Cert follows a structured VAPT approach designed for real
            operational environments in Chennai:
          </p>

          <div className="timeline">
            {/* STEP 1 */}
            <div className="timeline-item">
              <div className="timeline-icon">1</div>
              <div className="timeline-content">
                <h4>Define Testing Scope</h4>
                <p>Define testing scope across systems and applications</p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="timeline-item">
              <div className="timeline-icon">2</div>
              <div className="timeline-content">
                <h4>Vulnerability Identification</h4>
                <p>Identify vulnerabilities through deep technical analysis</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="timeline-item">
              <div className="timeline-icon">3</div>
              <div className="timeline-content">
                <h4>Penetration Testing</h4>
                <p>Perform controlled penetration testing</p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="timeline-item">
              <div className="timeline-icon">4</div>
              <div className="timeline-content">
                <h4>Risk Analysis</h4>
                <p>Analyze findings based on business risk</p>
              </div>
            </div>

            {/* STEP 5 */}
            <div className="timeline-item">
              <div className="timeline-icon">5</div>
              <div className="timeline-content">
                <h4>Reporting</h4>
                <p>Deliver clear technical and management reports</p>
              </div>
            </div>

            {/* STEP 6 */}
            <div className="timeline-item">
              <div className="timeline-icon">6</div>
              <div className="timeline-content">
                <h4>Remediation Support</h4>
                <p>Support remediation of security issues</p>
              </div>
            </div>

            {/* STEP 7 */}
            <div className="timeline-item">
              <div className="timeline-icon">7</div>
              <div className="timeline-content">
                <h4>Re-Testing</h4>
                <p>Re-test to verify vulnerabilities are resolved</p>
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
            This process ensures continuous improvement in security posture.
          </p>
        </div>
      </section>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          VAPT Certification Cost in Chennai
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
                  The cost of VAPT Certification in Chennai depends on:
                </div>

                <ul className="features">
                  <li className="check">Number of systems tested</li>
                  <li className="check">
                    Coverage across networks and applications
                  </li>
                  <li className="check">Complexity of the IT environment</li>
                  <li className="check">Data sensitivity</li>
                  <li className="check">
                    Reporting and validation requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts a detailed scoping exercise to provide a
                  clear and customized cost estimate.
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
                  Get VAPT Certified in Chennai with First Cert
                </div>

                <div className="title small-title">
                  First Cert is a trusted cybersecurity and VAPT partner in
                  Chennai, helping organizations detect vulnerabilities,
                  strengthen defenses, and reduce cyber risk. Our specialists
                  focus on practical security improvements that protect
                  real-world business operations.
                </div>

                <div className="title small-title">
                  From initial vulnerability discovery to final validation,
                  First Cert enables Chennai organizations to secure their
                  digital assets and stay resilient against evolving cyber
                  threats.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your VAPT Certification journey in Chennai with First
                  Cert and take a proactive step toward stronger cybersecurity
                  and compliance.
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

export default ChennaiVapt;
