import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/north-america/mexico/soc2-img.webp";
import benefitssoc2 from "../../../assets/img/country/north-america/mexico/soc2-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function MexicoSoc2() {
  const benefits = [
    "Strengthens Data Security – Identifies risks and builds strong protection against cyber threats.",
    "Improves Customer Trust – Demonstrates secure data handling practices.",
    "Ensures Global Compliance – Aligns with internationally recognized security standards.",
    "Reduces Operational Risks – Detects vulnerabilities early and ensures stable operations.",
    "Helps Win International Clients – Meets mandatory security requirements for global contracts.",
    "Enhances Brand Reputation – Positions your business as security-focused and reliable.",
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
        "We understand your business and create a customized SOC 2 compliance roadmap.",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description:
        "Experts analyze your security posture and identify gaps against SOC 2 Trust Service Criteria.",
    },
    {
      number: "3",
      title: "Documentation",
      description:
        "We prepare policies, procedures, risk assessments, and security control documentation.",
    },
    {
      number: "4",
      title: "Implementation",
      description:
        "We assist in implementing and strengthening your controls with training and monitoring systems.",
    },
    {
      number: "5",
      title: "Internal Audit",
      description:
        "Verification of readiness to ensure all requirements are met.",
    },
    {
      number: "6",
      title: "Certification Audit",
      description:
        "Final SOC 2 Type 1 or Type 2 audit performed by an accredited CPA auditor.",
    },
    {
      number: "7",
      title: "Continuous Support",
      description:
        "Ongoing guidance, surveillance checks, and compliance maintenance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in Mexico | Affordable SOC 2 Consultants – First
          Cert
        </title>
        <meta
          name="description"
          content="Looking for SOC 2 Certification in Mexico? First Cert provides expert consulting, documentation, implementation, and audit readiness support to help businesses achieve secure and compliant operations."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in Mexico, SOC 2 consultants in Mexico, SOC 2 audit Mexico, SOC 2 Type 1 certification Mexico, SOC 2 Type 2 certification Mexico, SOC 2 compliance Mexico, SOC 2 consulting company Mexico, SOC 2 certification cost Mexico, SOC 2 implementation Mexico, SOC 2 documentation Mexico, SOC 2 audit support Mexico, SOC 2 security compliance Mexico, First Cert SOC 2 consultants, SOC 2 certification for IT companies Mexico, SOC 2 for SaaS companies Mexico, SOC 2 cybersecurity certification Mexico."
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
          <h1 className="main-title">SOC 2 Certification in Mexico</h1>
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
                Achieve <b>SOC 2 Certification in Mexico</b> with expert
                consultants from First Cert. We help businesses strengthen their
                information security controls and demonstrate trust,
                reliability, and data protection to clients. Our end-to-end SOC
                2 compliance services — including documentation, implementation,
                risk assessment, and audit preparation — make SOC 2
                certification simple, efficient, and cost-effective.
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
                Build customer confidence and stay ahead of competitors with a
                globally recognized security compliance standard.
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
            What is SOC 2 Certification in Mexico?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 2 Certification in Mexico</b> is a globally recognized
            compliance standard designed to ensure that service organizations
            securely manage customer data. Based on the AICPA Trust Service
            Criteria —
            <b>
              Security, Availability, Processing Integrity, Confidentiality, and
              Privacy
            </b>{" "}
            — SOC 2 helps businesses establish strong internal controls and
            cybersecurity practices.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            Whether you operate a SaaS company, IT services, cloud hosting,
            fintech, healthcare, or outsourcing firm, SOC 2 Certification
            ensures your organization follows robust security and compliance
            frameworks. Businesses in Mexico gain improved credibility, stronger
            risk management, and enhanced customer trust by becoming SOC 2
            compliant.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Which Businesses Need SOC 2 Certification in Mexico?
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
                        <a href="iso-9001-certification-in-mexico">
                          ISO 9001 Certification in Mexico
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-mexico">
                          ISO 27001 Certification in Mexico
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-mexico">
                          CMMI Certification in Mexico
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-mexico">
                          HIPAA Certification in Mexico
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-mexico">
                          VAPT Certification in Mexico
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-mexico">
                          GDPR Certification in Mexico
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-mexico">
                          SOC 1 Certification in Mexico
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-mexico">
                          SOC 2 Certification in Mexico
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              Businesses seeking international clients, especially in the U.S.
              and Europe, often require SOC 2 Compliance to meet contract and
              security expectations.
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
                Benefits of Getting SOC 2 Certification in Mexico
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
                  GDPR Certification in Mexico
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
                With <a href="/">First Cert</a>, companies in Mexico achieve SOC
                2 Certification with ease — ensuring compliance, trust, and
                long-term growth.
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
                SOC 2 Certification in Mexico – Simplified Process with{" "}
                <span style={{ color: "black" }}>First Cert</span>
              </h2>
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
          How Much Does SOC 2 Certification Cost in Mexico?
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
                  SOC 2 Certification cost in Mexico depends on:
                </div>

                <ul className="features">
                  <li className="check">Size of the organization</li>
                  <li className="check">
                    Nature of services (SaaS, IT, cloud, fintech, etc.)
                  </li>
                  <li className="check">
                    Number of Trust Service Criteria in scope
                  </li>
                  <li className="check">Complexity of IT systems</li>
                  <li className="check">Documentation & readiness level</li>
                  <li className="check">
                    Type of SOC 2 report (Type 1 or Type 2)
                  </li>

                  <li className="check">Number of audit days</li>
                </ul>

                <div className="title small-title">
                  First Cert’s SOC 2 consultants in Mexico provide transparent,
                  customized, and cost-effective pricing based on your
                  requirements.
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
                  Achieve SOC 2 Certification in Mexico with First Cert – Your
                  Trusted Partner in Security Compliance
                </div>
                <div className="title small-title">
                  If you want to achieve SOC 2 Certification in Mexico, First
                  Cert is your trusted partner for end-to-end guidance and
                  expert consulting. We help organizations build strong security
                  frameworks aligned with SOC 2 standards, ensuring data
                  protection, risk reduction, and compliance.
                </div>
                <div className="title small-title">
                  With vast experience across SaaS, fintech, cloud services, and
                  IT companies, First Cert delivers smooth, affordable, and
                  results-driven SOC 2 consulting services.
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

export default MexicoSoc2;
