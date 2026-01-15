import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/middle-east/kuwait/soc2-img.webp";
import benefitssoc2 from "../../../assets/img/country/middle-east/kuwait/soc2-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function KuwaitSoc2() {
  const benefits = [
    "Enhanced Data Protection – Strengthens controls against cyber threats and data leaks.",
    "Customer Confidence – Demonstrates secure and responsible data handling.",
    "International Compliance Alignment – Meets globally recognized security expectations.",
    "Lower Operational Risk – Identifies vulnerabilities before they impact operations.",
    "Global Business Readiness – Supports onboarding with overseas clients.",
    "Stronger Brand Image – Positions your organization as security-focused and reliable.",
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
      title: "Fintech and Financial Service Firms",
    },
    {
      icon: "bi-hdd-network",
      title: "Data Centers & Managed Hosting Providers",
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
      title: "E-commerce & Digital Platforms",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Business Assessment",
      description:
        "Understanding your services, data flows, and compliance goals.",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description: "Identifying gaps against SOC 2 Trust Service Criteria.",
    },
    {
      number: "3",
      title: "Documentation Development",
      description:
        "Policies, procedures, risk assessments, and control frameworks.",
    },
    {
      number: "4",
      title: "Control Implementation",
      description:
        "Security controls, monitoring systems, and employee awareness.",
    },
    {
      number: "5",
      title: "Internal Review",
      description: "Readiness validation and corrective actions.",
    },
    {
      number: "6",
      title: "SOC 2 Audit",
      description:
        "Type 1 or Type 2 audit conducted by an authorized CPA firm.",
    },
    {
      number: "7",
      title: "Ongoing Support",
      description: "Compliance maintenance and future audit preparation.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in Kuwait | Trusted SOC 2 Consultants – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve SOC 2 Certification in Kuwait? First Cert delivers professional SOC 2 consulting, documentation, risk assessment, and audit readiness services to ensure secure and compliant business operations."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in Kuwait, SOC 2 consultants in Kuwait, SOC 2 audit Kuwait, SOC 2 Type 1 certification Kuwait, SOC 2 Type 2 certification Kuwait, SOC 2 compliance Kuwait, SOC 2 consulting company Kuwait, SOC 2 certification cost Kuwait, SOC 2 implementation Kuwait, SOC 2 documentation Kuwait, SOC 2 audit support Kuwait, SOC 2 security compliance Kuwait, First Cert SOC 2 consultants, SOC 2 certification for IT companies Kuwait, SOC 2 for SaaS companies Kuwait, SOC 2 cybersecurity certification Kuwait."
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
          <h1 className="main-title">SOC 2 Certification in Kuwait</h1>
          <p className="small-desc">
            Build Trust Through Strong Security Controls
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
                Achieve <b>SOC 2 Certification in Kuwait</b> helps organizations
                prove their commitment to safeguarding customer data and
                maintaining reliable systems. With increasing cybersecurity
                risks and rising client expectations, SOC 2 compliance has
                become essential for businesses handling sensitive information.
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
                <b>First Cert</b> supports organizations in Kuwait with complete
                SOC 2 consulting services, covering security assessments,
                control implementation, documentation, and audit coordination.
                Our structured approach simplifies compliance while helping
                businesses strengthen trust, reduce risks, and meet
                international security expectations.
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
            What is SOC 2 Certification in Kuwait?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 2 Certification in Kuwait</b> is a globally accepted
            assurance report developed under AICPA standards. It evaluates how
            effectively an organization protects customer data based on the
            Trust Services Criteria:
          </p>

          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Security</h5>
            </div>

            <div class="vapt-card">
              <h5>Availability</h5>
            </div>

            <div class="vapt-card">
              <h5>Processing Integrity</h5>
            </div>

            <div class="vapt-card">
              <h5>Confidentiality</h5>
            </div>

            <div class="vapt-card">
              <h5>Privacy</h5>
            </div>
          </div>
          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            SOC 2 compliance ensures that internal systems and processes are
            designed to prevent data breaches, operational disruptions, and
            unauthorized access. Organizations operating in IT services, SaaS,
            cloud computing, fintech, healthcare technology, and outsourcing
            benefit significantly from SOC 2 certification in Kuwait by
            improving credibility and governance.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Which Organizations Require SOC 2 Certification in Kuwait?
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 2 Certification is recommended for any organization that
                stores, processes, or manages client or customer data,
                including:
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
                        <a href="iso-9001-certification-in-kuwait">
                          ISO 9001 Certification in Kuwait
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-kuwait">
                          ISO 27001 Certification in Kuwait
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-kuwait">
                          CMMI Certification in Kuwait
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-kuwait">
                          HIPAA Certification in Kuwait
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-kuwait">
                          VAPT Certification in Kuwait
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-kuwait">
                          GDPR Certification in Kuwait
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-kuwait">
                          SOC 1 Certification in Kuwait
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-kuwait">
                          SOC 2 Certification in Kuwait
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              For businesses in Kuwait working with international clients, SOC 2
              compliance is often a mandatory contractual requirement.
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
                Key Benefits of SOC 2 Certification in Kuwait
              </h1>
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
                With <a href="/">First Cert</a>,{" "}
                <b>SOC 2 certification in Kuwait </b>
                becomes a practical and growth-oriented investment.
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
                SOC 2 Certification Process in Kuwait with{" "}
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
                Our proven SOC 2 compliance methodology includes:
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
          SOC 2 Certification Cost in Kuwait
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
                  The cost of SOC 2 Certification in Kuwait depends on multiple
                  factors, such as:
                </div>

                <ul className="features">
                  <li className="check">Organization size and workforce</li>
                  <li className="check">
                    Nature of services (SaaS, IT, cloud, fintech, etc.)
                  </li>
                  <li className="check">IT infrastructure complexity</li>
                  <li className="check">Existing security maturity</li>
                  <li className="check">
                    Type of SOC 2 report (Type 1 or Type 2)
                  </li>
                  <li className="check">
                    Audit duration and preparation effort
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert offers transparent, customized pricing after an
                  initial assessment to ensure affordability and clarity.
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
                  Achieve SOC 2 Certification in Kuwait with First Cert
                </div>
                <div className="title small-title">
                  If you are planning to achieve SOC 2 Certification in Kuwait,
                  First Cert is your trusted compliance partner. We help
                  organizations design, implement, and validate strong security
                  frameworks aligned with SOC 2 requirements.
                </div>
                <div className="title small-title">
                  With extensive experience supporting IT companies, SaaS
                  providers, fintech firms, and cloud businesses, we deliver
                  reliable, cost-effective, and results-driven SOC 2 consulting
                  services from start to certification.
                </div>
                <div className="title small-title">
                  📧 Email: info@firstcertification.com Start your SOC 2
                  Certification journey in Kuwait with First Cert — and
                  demonstrate security, trust, and compliance with confidence.
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

export default KuwaitSoc2;
