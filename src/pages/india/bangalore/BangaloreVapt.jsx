import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgvapt from "../../../assets/img/country/india/bangalore/vapt-bangalore.jpg";
import benefitsvapt from "../../../assets/img/country/india/bangalore/vapt-benefits.jpg";
import bgimg from "../../../assets/img/services/card-vapt.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function BangaloreVapt() {
  const benefits = [
    "Stronger Security Posture – Identify vulnerabilities before hackers exploit them.",
    "Regulatory Compliance – Meet requirements for ISO 27001, PCI-DSS, HIPAA, SOC 2, and DPDP Act.",
    "Reduced Cyber Risk – Prevent data breaches, ransomware attacks, and financial loss.",
    "Enhanced Customer Trust – Show clients that their data and systems are secure.",
    "Protection Against Zero-Day Attacks – Stay ahead of emerging and advanced cyber threats.",
    "Improved System Performance – Security optimization leads to smoother and more reliable operations.",
    "Better Business Continuity – Minimize downtime and strengthen overall resilience.",
  ];

  const hipaaData = [
    {
      icon: "bi-code-slash",
      title: "IT and Software Development Companies",
    },
    {
      icon: "bi-cloud-check",
      title: "SaaS & Cloud Service Providers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Fintech Companies and Digital Payment Platforms",
    },
    {
      icon: "bi-cart-check",
      title: "E-commerce Platforms and Online Marketplaces",
    },
    {
      icon: "bi-hospital",
      title: "Hospitals, Clinics & Health-Tech Companies",
    },
    {
      icon: "bi-mortarboard",
      title: "Educational Institutions and EdTech Platforms",
    },
    {
      icon: "bi-hdd-network",
      title: "BPOs, KPOs, and Data Processing Centers",
    },
    {
      icon: "bi-shield-lock",
      title: "Startups working with sensitive data",
    },
    {
      icon: "bi-shield-check",
      title: "Companies undergoing ISO 27001, SOC 2, GDPR, or HIPAA compliance",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Consultation & Scoping",
      description:
        "We understand your IT infrastructure and define the scope for VAPT testing.",
    },
    {
      number: "2",
      title: "Vulnerability Assessment",
      description: "Automated and manual scans to detect security gaps.",
    },
    {
      number: "3",
      title: "Penetration Testing",
      description:
        "Simulated attacks to determine exploitability of vulnerabilities.",
    },
    {
      number: "4",
      title: "Analysis & Risk Rating",
      description:
        "Each security issue is classified based on severity and risk.",
    },

    {
      number: "5",
      title: "Detailed Reporting",
      description:
        "We prepare a comprehensive VAPT report with evidence, impact, and remediation steps.",
    },
    {
      number: "6",
      title: "Remediation Support",
      description:
        "Your team gets guidance to fix identified vulnerabilities effectively.",
    },
    {
      number: "7",
      title: "Re-testing & Certification",
      description:
        "After fixes, we perform a re-test and issue the final VAPT Certification Report.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          VAPT Certification in Bangalore | Affordable VAPT Consultants – First
          Cert
        </title>
        <meta
          name="description"
          content="Looking for VAPT Certification in Bangalore? First cert provides expert vulnerability assessment, penetration testing, reporting, remediation support, and security hardening guidance for complete cyber protection."
        />
        <meta
          name="keywords"
          content="VAPT Certification in Bangalore, VAPT consultants in Bangalore, VAPT testing in Bangalore, penetration testing Bangalore, vulnerability assessment Bangalore, VAPT certification cost in Bangalore, VAPT audit Bangalore, cybersecurity services Bangalore, network penetration testing Bangalore, application security testing Bangalore, mobile app VAPT Bangalore, cloud security assessment Bangalore, affordable VAPT services Bangalore, First cert VAPT consultants, security testing company Bangalore, VAPT for startups Bangalore, VAPT for IT companies Bangalore, VAPT compliance Bangalore."
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
          <h1 class="main-title">VAPT Certification in Bangalore</h1>
          <p class="small-desc">
            Your Path to Strong Cybersecurity and Protection
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
                alt="vapt Certification"
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
                Achieve <b>VAPT Certification in Bangalore</b> with expert
                cybersecurity specialists from <b>First Cert</b>. We help
                businesses strengthen their security posture by identifying
                vulnerabilities, performing controlled penetration tests, and
                providing actionable remediation plans.
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
                Our end-to-end support — from assessment and testing to
                reporting and certification — makes{" "}
                <b>Vulnerability Assessment and Penetration Testing (VAPT)</b>{" "}
                in Bangalore simple, affordable, and highly effective.
                Strengthen your cyber defense, prevent attacks, and build
                customer trust with certified security testing.
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
            What is VAPT Certification in Bangalore?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>VAPT Certification in Bangalore</b> is a comprehensive security
            evaluation process that combines:
          </p>
          <ul className="iso-list">
            {[
              "Vulnerability Assessment (detecting system weaknesses)",
              "Penetration Testing (simulating real cyberattacks)",
            ].map((item, index) => (
              <li key={index} className="mb-3">
                {item}
              </li>
            ))}
          </ul>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            This certification helps organizations proactively identify security
            risks and strengthen protection against cyber threats such as data
            breaches, ransomware, phishing, and unauthorized access.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Whether your business operates in{" "}
            <b>
              IT, SaaS, fintech, healthcare, e-commerce, education, or
              manufacturing,
            </b>{" "}
            VAPT helps:
          </p>
          <ul className="iso-list">
            {[
              "Meet compliance requirements",
              "Prevent cyberattacks",
              "Protect sensitive data",
              "Build customer confidence",
            ].map((item, index) => (
              <li key={index} className="mb-3">
                {item}
              </li>
            ))}
          </ul>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Getting VAPT certified demonstrates your organization's commitment
            to strong cybersecurity and regulatory compliance.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Which Businesses Need VAPT Certification Implementation in
                Bangalore?
              </h2>

              <p className="text-center section-sub mb-5">
                Every organization that handles digital systems, customer data,
                or online applications should undergo{" "}
                <a href="vapt-certification">Vapt Certification</a> in
                Bangalore. This includes:
              </p>
              <div className="row g-4">
                {/* LEFT SIDE CARDS */}
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

                {/* RIGHT SIDE INTERNAL LINKS BOX */}
                <div className="col-lg-3">
                  <div className="iso-links-box tall-sidebar">
                    <h5>Our Experties</h5>
                    <ul>
                      <li>
                        <a href="iso-9001-certification-in-bangalore">
                          ISO 9001 Certification in Bangalore
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-bangalore">
                          ISO 27001 Certification in Bangalore
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-bangalore">
                          CMMI Certification in Bangalore
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-bangalore">
                          HIPAA Certification in Bangalore
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-bangalore">
                          VAPT Certification in Bangalore
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-bangalore">
                          GDPR Certification in Bangalore
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-bangalore">
                          SOC 1 Certification in Bangalore
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-bangalore">
                          SOC 2 Certification in Bangalore
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              Implementing VAPT helps Bangalore-based organizations prevent
              cyber risks, improve system resilience, and ensure data
              protection.
            </p>
          </section>
        </div>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting VAPT Certification in Bangalore
              </h1>
            </div>
          </div>

          {/* First Paragraph - Full Width */}
          <div className="row">
            <div className="col-12">
              <p
                className="text-center mb-5"
                style={{
                  color: "#000000",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  fontWeight: "400",
                }}
              >
                Achieving <b>VAPT Certification in Bangalore</b> offers multiple
                advantages:
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
                alt="ISO 27001 Benefits"
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
            With <a href="/">First Cert</a>, achieving VAPT Certification in
            Bangalore becomes a secure, thorough, and value-driven process.
          </p>
        </div>
      </div>

      <div className="iso-process-section py-5 position-relative overflow-hidden">
        <div
          className="position-absolute top-0 start-0 w-100 h-100 bg-light"
          style={{ marginTop: "-3rem" }}
        ></div>
        <div className="container position-relative">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-10">
              <h2 className="display-5 fw-bold mb-3 text-primary">
                VAPT Certification in Bangalore – Simplified Process with First
                Cert
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                We follow a structured and proven approach to deliver accurate
                and compliant VAPT services:
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="process-timeline position-relative">
                {/* Connecting Line */}
                <div className="process-line position-absolute top-0 start-50 translate-middle-x h-100 d-none d-md-block"></div>

                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="process-step position-relative mb-4"
                  >
                    <div className="row align-items-center">
                      {/* Step Number & Icon - Alternating sides */}
                      <div
                        className={`col-md-5 ${
                          index % 2 === 0 ? "" : "order-md-2"
                        }`}
                      >
                        <div className="step-number-container text-center text-md-end">
                          <div className="step-number d-inline-flex align-items-center justify-content-center position-relative">
                            <div className="number-circle bg-primary text-white rounded-circle d-flex align-items-center justify-content-center">
                              {step.number}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Step Content - Alternating sides */}
                      <div
                        className={`col-md-7 ${
                          index % 2 === 0 ? "" : "order-md-1"
                        }`}
                      >
                        <div
                          className={`step-card p-4 rounded-3 shadow-sm h-100 ${
                            index % 2 === 0 ? "ms-md-4" : "me-md-4"
                          }`}
                        >
                          <h4 className="text-primary fw-bold mb-3">
                            {step.title}
                          </h4>
                          <p
                            className="mb-0 lh-lg"
                            style={{
                              fontSize: "0.95rem",
                              color: "#212529",
                              fontWeight: "500",
                            }}
                          >
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="iso-cost-section py-5">
        <div className="container">
          {/* Heading */}
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-10">
              <h2 className="fw-bold display-6 text-dark">
                How Much Does VAPT Certification Cost in Bangalore?
              </h2>
              <p className="lead text-muted mt-3" style={{ fontWeight: "400" }}>
                The cost of <b>VAPT Certification in Bangalore</b> varies
                depending on:
              </p>
            </div>
          </div>

          {/* Two Columns */}
          <div className="row g-4">
            {/* LEFT COLUMN */}
            {/* LEFT COLUMN */}
            <div className="col-lg-6">
              <div className="p-4 shadow-sm rounded-4 bg-white h-100">
                <p className="mt-3 text-muted" style={{ fontWeight: "400" }}>
                  Key factors influencing cost include:
                </p>
                <ul className="iso-list">
                  {[
                    "Number of applications / IPs / servers",
                    "Type of testing (web app, mobile app, network, cloud, API, etc.)",
                    "Complexity of systems",
                    "Data sensitivity",
                    "Internal security maturity",
                    "Scope of assessment",
                    "Number of testing days required",
                  ].map((item, index) => (
                    <li key={index} className="mb-3">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-muted" style={{ fontWeight: "400" }}>
                  At First cert, we offer{" "}
                  <b>customized and affordable VAPT packages</b> based on your
                  organization's needs — ensuring maximum security at a
                  reasonable price.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-lg-6">
              <div className="p-4 shadow-sm rounded-4 bg-white h-100">
                <h4 className="fw-bold text-primary mb-3">
                  Achieve VAPT Certification in Bangalore with First cert – Your
                  Trusted Cybersecurity Partner
                </h4>

                <p
                  className="mb-3 text-dark"
                  style={{
                    lineHeight: "1.75",
                    fontSize: "1rem",
                    fontWeight: "400",
                  }}
                >
                  If you’re planning to strengthen your cybersecurity and
                  achieve VAPT Certification in Bangalore, <b>First Cert</b> is
                  your trusted partner.
                </p>
                <p className="mt-3 text-muted" style={{ fontWeight: "400" }}>
                  We specialize in:
                </p>
                <ul className="iso-list">
                  {[
                    "Network VAPT",
                    "Web Application VAPT",
                    "Mobile App VAPT",
                    "Cloud Security Testing",
                    "API Penetration Testing",
                    "Source Code Review",
                    "Compliance-driven VAPT (ISO 27001, SOC 2, HIPAA, GDPR, PCI-DSS)",
                  ].map((item, index) => (
                    <li key={index} className="mb-3">
                      {item}
                    </li>
                  ))}
                </ul>
                <p
                  className="mb-3 text-dark"
                  style={{
                    lineHeight: "1.75",
                    fontSize: "1rem",
                    fontWeight: "400",
                  }}
                >
                  Our experienced cybersecurity professionals ensure a smooth,
                  accurate, and compliant VAPT experience — from initial
                  assessment to remediation and final certification. <br /> We
                  are committed to delivering high-quality, affordable, and
                  result-driven cybersecurity solutions that protect your
                  business and enhance stakeholder confidence. <br />
                  to begin your VAPT Certification journey in Bangalore with
                  First cert — your partner in achieving secure, resilient, and
                  compliant IT systems.
                </p>
                {/* CONTACT BUTTON */}
                <div className="mt-4 text-start">
                  <a
                    href="mailto:info@firstcertification.com"
                    className="contact-btn btn btn-primary rounded-pill w-100 text-center"
                    style={{
                      fontSize: "0.85rem",
                      padding: "10px 12px",
                      whiteSpace: "normal",
                      lineHeight: "1.4",
                    }}
                  >
                    Contact Us — info@firstcertification.com
                  </a>
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

export default BangaloreVapt;
