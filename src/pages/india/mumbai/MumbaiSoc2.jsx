import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/india/mumbai/soc2-img.jpg";
import benefitssoc2 from "../../../assets/img/country/india/mumbai/soc2-benefits.jpg";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function MumbaiSoc2() {
  const benefits = [
    "Strengthens Data Security – Identify risks, implement controls, and build a secure cybersecurity foundation.",
    "Improves Customer Trust – Clients trust companies that demonstrate strong security and compliance.",
    "Ensures Global Compliance – SOC 2 aligns your organization with internationally recognized security standards.",
    "Reduces Operational Risks – Minimizes vulnerabilities, system failures, and security incidents.",
    "Helps Win International Clients – Essential for global contracts and enterprise partnerships.",
    "Enhances Brand Reputation – Positions your organization as secure, reliable, and compliant.",
  ];

  const hipaaData = [
    {
      icon: "bi-code-slash",
      title: "IT & Software Companies",
    },
    {
      icon: "bi-cloud-check",
      title: "SaaS & Cloud Service Providers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Fintech & BFSI Organizations",
    },
    {
      icon: "bi-hdd-network",
      title: "Data Centers & Hosting Providers",
    },
    {
      icon: "bi-headset",
      title: "BPOs & KPOs",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Healthcare Technology Companies",
    },
    {
      icon: "bi-cart-check",
      title: "E-commerce & Digital Service Providers",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Initial Consultation",
      description:
        "We understand your business needs and define the scope for SOC 2 compliance.",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description:
        "Experts assess your current security posture and identify compliance gaps.",
    },
    {
      number: "3",
      title: "Documentation",
      description:
        "We create all required SOC 2 documents including policies, procedures, risk assessments, and control frameworks.",
    },
    {
      number: "4",
      title: "Implementation",
      description:
        "We support security control deployment, employee training, and process enhancements.",
    },
    {
      number: "5",
      title: "Internal Audit",
      description:
        "A detailed readiness audit ensures your systems meet SOC 2 requirements.",
    },
    {
      number: "6",
      title: "Certification Audit",
      description:
        "An accredited CPA auditor conducts the SOC 2 Type 1 or Type 2 audit.",
    },
    {
      number: "7",
      title: "Continuous Support",
      description:
        "We provide continuous monitoring, updates, and guidance to maintain compliance year-round.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in Mumbai | Affordable SOC 2 Consultants – First
          Cert
        </title>
        <meta
          name="description"
          content="Looking for SOC 2 Certification in Mumbai? First Cert provides expert consulting, documentation, implementation, and audit readiness support to help businesses achieve secure and compliant operations."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in Mumbai, SOC 2 consultants in Mumbai, SOC 2 audit Mumbai, SOC 2 Type 1 certification Mumbai, SOC 2 Type 2 certification Mumbai, SOC 2 compliance Mumbai, SOC 2 consulting company Mumbai, SOC 2 certification cost Mumbai, SOC 2 implementation Mumbai, SOC 2 documentation Mumbai, SOC 2 audit support Mumbai, SOC 2 security compliance Mumbai, First Cert SOC 2 consultants, SOC 2 certification for IT companies Mumbai, SOC 2 for SaaS companies Mumbai, SOC 2 cybersecurity certification Mumbai."
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
          <h1 className="main-title">SOC 2 Certification in Mumbai</h1>
          <p className="small-desc">
            Your Path to Security, Trust, and Compliance
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
                src={imgsoc2}
                alt="soc2 Certification"
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
                Achieve <b>SOC 2 Certification in Mumbai</b> with expert
                consultants from First Cert. We help businesses strengthen their
                information security controls and demonstrate trust,
                reliability, and data protection to clients.
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
                Our end-to-end SOC 2 compliance services — including
                documentation, implementation, risk assessment, and audit
                preparation — make SOC 2 certification simple, efficient, and
                cost-effective. Build customer confidence and gain a competitive
                edge with this globally recognized security standard.
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
            What is SOC 2 Certification in Mumbai?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 2 Certification in Mumbai</b> is a globally recognized
            compliance framework based on the AICPA Trust Service Criteria:
          </p>
          <ul className="iso-list">
            {[
              "Security",
              "Availability",
              "Processing Integrity",
              "Confidentiality",
              "Privacy",
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
            It ensures service organizations securely manage customer data
            through strong internal controls and cybersecurity systems.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Companies across Mumbai — including SaaS, IT services, fintech,
            cloud hosting, health tech, and outsourcing firms — rely on SOC 2 to
            demonstrate security, trust, and compliance to their clients.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Which Businesses Need SOC 2 Certification in Mumbai?
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 2 Certification is essential for any organization that
                stores, processes, or manages customer data, including:
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
                        <a href="iso-9001-certification-in-mumbai">
                          ISO 9001 Certification in Mumbai
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-mumbai">
                          ISO 27001 Certification in Mumbai
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-mumbai">
                          CMMI Certification in Mumbai
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-mumbai">
                          HIPAA Certification in Mumbai
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-mumbai">
                          VAPT Certification in Mumbai
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-mumbai">
                          GDPR Certification in Mumbai
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-mumbai">
                          SOC 1 Certification in Mumbai
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-mumbai">
                          SOC 2 Certification in Mumbai
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              For businesses serving international clients — especially the U.S.
              and Europe — SOC 2 compliance is often a mandatory requirement.
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
                Benefits of Getting SOC 2 Certification in Mumbai
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
                <b href="iso-27001-certification">
                  GDPR Certification in Mumbai
                </b>{" "}
                provides strong business advantages:
              </p>
            </div>
          </div>

          {/* Image and Benefits - Side by Side */}
          <div className="row align-items-start mb-5">
            {/* Image - Left Side */}
            <div className="col-md-6">
              <img
                src={benefitssoc2}
                alt="soc2 Benefits"
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
                With <a href="/">First Cert</a>, Mumbai companies achieve SOC 2
                Certification smoothly and confidently.
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
                SOC 2 Certification in Mumbai – Simplified Process with{" "}
                <span style={{ color: "black" }}>First Cert</span>
              </h2>
              <p
                className="text-center"
                style={{
                  color: "#000000",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  fontWeight: "400",
                }}
              >
                Our SOC 2 process is structured, clear, and results-driven:
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
          <br />
        </div>
      </div>

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          How Much Does SOC 2 Certification Cost in Mumbai?
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
                  SOC 2 Certification cost depends on:
                </div>

                <ul className="features">
                  <li className="check">Size of the organization</li>
                  <li className="check">
                    Industry (SaaS, IT, cloud, fintech, etc.)
                  </li>
                  <li className="check">
                    Number of Trust Service Criteria in scope
                  </li>
                  <li className="check">IT system complexity</li>
                  <li className="check">Internal control maturity</li>
                  <li className="check">Documentation requirements</li>
                  <li className="check">
                    Type of report (SOC 2 Type 1 or Type 2)
                  </li>
                  <li className="check">Audit duration</li>
                </ul>

                <div className="title small-title">
                  First Cert provides customized pricing after a detailed
                  evaluation, ensuring cost-efficient and high-quality
                  consulting.
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
                  Achieve SOC 2 Certification in Mumbai with First Cert – Your
                  Trusted Compliance Partner
                </div>
                <div className="title small-title">
                  If you want to achieve SOC 2 Certification in Mumbai, First
                  Cert is your trusted partner for end-to-end guidance. We help
                  organizations build strong security frameworks aligned with
                  SOC 2 standards to ensure trust, compliance, and operational
                  excellence.
                </div>
                <div className="title small-title">
                  With proven expertise across SaaS, fintech, IT services,
                  cloud, BPOs, and digital companies, we deliver affordable,
                  smooth, and result-driven SOC 2 compliance services.
                </div>
                <div className="title small-title">
                  Start your SOC 2 Certification journey today with First Cert —
                  your partner in achieving security excellence and global
                  compliance. 📧 Email: info@firstcertification.com
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

export default MumbaiSoc2;
