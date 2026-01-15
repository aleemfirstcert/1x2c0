import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img27001 from "../../../assets/img/country/india/bangalore/27001-bangalore.jpg";
import benefits27001 from "../../../assets/img/country/india/bangalore/27001-benefits.jpg";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Bangalore27001() {
  const benefits = [
    "Enhanced Information Security – Safeguard sensitive company and customer data from unauthorized access and breaches.",
    "Regulatory Compliance – Meet international and local data protection laws such as GDPR and India's DPDP Act.",
    "Customer Trust and Brand Value – Demonstrate commitment to data protection, enhancing client confidence.",
    "Risk Management – Identify, assess, and mitigate security risks effectively.",
    "Operational Efficiency – Implement structured processes and controls that improve business resilience.",
    "Global Recognition – Gain credibility with partners and clients worldwide through ISO 27001 certification.",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Consultation",
      description:
        "We begin by understanding your business needs, data protection challenges, and compliance requirements.",
    },  
    {
      number: "2",
      title: "Gap Analysis",
      description:
        "Our consultants identify security gaps and recommend improvements to align with ISO 27001 standards.",
    },
    {
      number: "3",
      title: "Documentation",
      description:
        "We assist in creating necessary ISMS documents such as policies, procedures, risk assessments, and security controls.",
    },
    {
      number: "4",
      title: "Implementation",
      description:
        "Your Information Security Management System (ISMS) is deployed with team training and awareness programs.",
    },
    {
      number: "5",
      title: "Internal Audit",
      description:
        "We conduct an internal audit to verify readiness and compliance before certification.",
    },
    {
      number: "6",
      title: "Certification Audit",
      description:
        "An accredited certification body performs the final audit to confirm ISO 27001 compliance and issue certification.",
    },
    {
      number: "7",
      title: "Continuous Support",
      description:
        "First cert offers ongoing monitoring, surveillance audit assistance, and continual improvement support to maintain certification.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Bangalore | Affordable ISO 27001
          Consultants – First cert
        </title>
        <meta
          name="description"
          content="Looking for ISO 27001 Certification in Bangalore? First cert provides expert consulting, documentation, training, and audit support to help you build a robust Information Security Management System (ISMS)."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Bangalore, ISO 27001 consultants in Bangalore, ISO 27001 certification cost in Bangalore, ISO 27001 implementation in Bangalore, ISO 27001 certification process Bangalore, ISO certification consultants Bangalore, ISO 27001 training in Bangalore, ISO 27001 documentation Bangalore, Information Security Management System Bangalore, ISMS certification Bangalore, ISO 27001 audit support Bangalore, affordable ISO 27001 certification Bangalore, First cert ISO consultants, ISO 27001 consulting company Bangalore, ISO 27001 certification for IT companies Bangalore, ISO 27001 certification for startups Bangalore, ISO 27001 information security certification Bangalore"
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
          <h1 class="main-title">ISO 27001 Certification in Bangalore</h1>
          <p class="small-desc">
            Your Path to Strong Information Security and Compliance
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
              <img
                src={img27001}
                alt="ISO 27001 Certification"
                className="img-fluid rounded-2 mb-3"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />

              <p
                className="text-dark"
                style={{
                  color: "#111111",
                  fontWeight: "400",
                  fontSize: "0.975rem",
                  lineHeight: "1.8",
                }}
              >
                Achieve ISO 27001 Certification in Bangalore with the expert
                consultants at <b>First Cert</b>. We help organizations
                establish a robust{" "}
                <b>Information Security Management System (ISMS)</b> that
                safeguards data, ensures compliance, and builds customer trust.
              </p>

              <p
                className="text-dark"
                style={{
                  color: "#111111",
                  fontWeight: "400",
                  fontSize: "0.975rem",
                  lineHeight: "1.8",
                }}
              >
                Our end-to-end support — from{" "}
                <b>risk assessment and documentation to audit readiness</b> —
                makes ISO 27001 implementation in Bangalore seamless,
                affordable, and effective. Strengthen your information security
                posture with ISO 27001 certification.
              </p>
            </div>

            {/* RIGHT SIDE — ENQUIRY FORM */}
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
            What is ISO 27001 Certification in Bangalore?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Bangalore</b> is an internationally
            recognized standard that defines best practices for establishing,
            implementing, maintaining, and continually improving an{" "}
            <b>Information Security Management System (ISMS).</b>
          </p>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            It helps organizations manage the security of assets such as
            financial information, intellectual property, employee data, and
            information entrusted by third parties.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Whether your business operates in{" "}
            <b>
              IT, finance, healthcare, e-commerce, education, or manufacturing
            </b>
            , ISO 27001 helps reduce data breaches, ensure regulatory
            compliance, and build stakeholder confidence.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            By getting ISO 27001 certified, Bangalore-based companies
            demonstrate their{" "}
            <b>commitment to data protection, cybersecurity,</b> and
            <b> business continuity</b>, which are critical for long-term trust
            and success.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Which Businesses Need ISO 27001 Certification Implementation in
                Bangalore?
              </h2>

              <p className="text-center section-sub mb-5">
                Every organization that handles sensitive information or
                operates digitally should consider{" "}
                <b>ISO 27001 Certification Implementation in Bangalore</b>.
              </p>
              <div className="row g-4">
                {/* LEFT SIDE CARDS */}
                <div className="col-lg-9">
                  <div className="row g-4">
                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-laptop iso-icon"></i>
                        <h4>IT and Software Development Companies</h4>
                        <p>
                          Such as Infosys, Wipro, Mindtree, and mid-sized tech
                          startups managing client data.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-cloud-check iso-icon"></i>
                        <h4>Cloud Service Providers</h4>
                        <p>
                          Companies offering SaaS, PaaS, or data hosting
                          services like AWS partners or Azure resellers.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-cash-stack iso-icon"></i>
                        <h4>Financial Institutions and Fintech Startups</h4>
                        <p>
                          Including digital payment platforms, NBFCs, and
                          banking technology providers.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-hospital iso-icon"></i>
                        <h4>Healthcare Organizations</h4>
                        <p>
                          Hospitals, diagnostic labs, and health-tech startups
                          that process patient data.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-mortarboard iso-icon"></i>
                        <h4>Educational Institutions</h4>
                        <p>
                          Universities, training centers, and EdTech companies
                          storing student records and e-learning data.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-headset iso-icon"></i>
                        <h4>BPOs, KPOs, and Data Processing Firms</h4>
                        <p>
                          Organizations handling outsourced data, customer
                          service, and analytics operations.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-cart-check iso-icon"></i>
                        <h4>E-commerce and Retail Platforms</h4>
                        <p>
                          Online stores, delivery apps, and ERP-based retail
                          businesses managing customer information.
                        </p>
                      </div>
                    </div>
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
              Implementing ISO 27001 helps these Bangalore-based businesses
              <b>protect confidential data, reduce cyber risks</b>, and
              <b> enhance customer trust</b> — key factors for success in today’s
              digital economy.
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
                Benefits of Getting ISO 27001 Certification in Bangalore
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
                Achieving{" "}
                <a href="iso-27001-certification">ISO 27001 Certification</a> in
                Bangalore offers multiple strategic and operational benefits:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefits27001}
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
          </div>

          {/* Last Paragraph - Full Width */}
          <div className="row">
            <div className="col-12">
              <p
                className="text-center"
                style={{
                  color: "#000000",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  fontWeight: "400",
                }}
              >
                With <a href="/">First Cert</a>, achieving ISO 27001
                Certification in Bangalore becomes a streamlined and
                value-driven process — ensuring compliance, data integrity, and
                sustained growth.
              </p>
            </div>
          </div>
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
                ISO 27001 Certification in Bangalore – Simplified Process with{" "}
                <span style={{ color: "black" }}>First Cert</span>
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                At <b>First Cert</b>, we follow a proven 7-step methodology to
                make ISO 27001 certification simple, structured, and efficient:
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
                How much does it cost to get{" "}
                <span style={{ color: "#0056d6" }}>
                  ISO 27001 Certified in Bangalore?
                </span>
              </h2>
              <p className="lead text-muted mt-3" style={{ fontWeight: "400" }}>
                The <b>cost of ISO 27001 certification in Bangalore</b> varies
                depending on your organization’s size, data sensitivity, and
                operational complexity. There is no fixed price, but the key
                factors influencing cost include:
              </p>
            </div>
          </div>

          {/* Two Columns */}
          <div className="row g-4">
            {/* LEFT COLUMN */}
            {/* LEFT COLUMN */}
            <div className="col-lg-6">
              <div className="p-4 shadow-sm rounded-4 bg-white h-100">
                <ul className="iso-list">
                  {[
                    "Organization size and number of employees",
                    "Type of data processed (financial, healthcare, personal, etc.)",
                    "IT infrastructure and complexity of systems",
                    "Existing security controls and documentation",
                    "Scope of certification (single department or full organization)",
                    "Training and internal audit requirements",
                    "Certification body fees and audit days",
                  ].map((item, index) => (
                    <li key={index} className="mb-3">
                      {item}
                    </li>
                  ))}
                </ul>
                <br />
                <p className="mt-3 text-muted" style={{ fontWeight: "400" }}>
                  At <b>First Cert</b>, we provide a customized quotation after
                  a detailed assessment, ensuring the process is{" "}
                  <b>cost-effective </b>
                  and <b>timely</b> without compromising on quality.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-lg-6">
              <div className="p-4 shadow-sm rounded-4 bg-white h-100">
                <h4 className="fw-bold text-primary mb-3">
                  Achieve ISO 27001 Certification in Bangalore with First cert –
                  Your Trusted Partner for Information Security Excellence
                </h4>

                <p
                  className="mb-3 text-dark"
                  style={{
                    lineHeight: "1.75",
                    fontSize: "1rem",
                    fontWeight: "400",
                  }}
                >
                  If you’re looking to achieve{" "}
                  <b>ISO 27001 Certification in Bangalore, First Cert</b> is
                  your trusted partner for expert guidance and reliable
                  certification support. <br />
                  We specialize in building robust{" "}
                  <b>Information Security Management Systems (ISMS) </b>
                  that comply with ISO 27001 standards — ensuring data security,
                  business continuity, and regulatory compliance. <br />
                  With extensive experience across industries such as{" "}
                  <b>IT, finance, healthcare, and education</b>, First cert
                  offers <b>tailored consulting and implementation services</b>{" "}
                  designed for your organization’s specific needs. <br /> Our
                  team of experienced ISO 27001 consultants ensures a{" "}
                  <b>smooth certification journey</b> — from risk assessment and
                  training to audit readiness and continual improvement. <br />{" "}
                  We are committed to delivering{" "}
                  <b>
                    high-quality, affordable, and result-driven ISO consulting
                    services
                  </b>{" "}
                  that boost your organization’s security posture and
                  reputation. <br />
                  <b>Contact us today at info@firstcertification.com</b> to
                  begin your <b>ISO 27001 Certification journey in Bangalore</b>{" "}
                  with First cert — your partner in achieving data protection
                  and business resilience.
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

export default Bangalore27001;
