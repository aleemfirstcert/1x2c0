import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/middle-east/UAE/soc2-img.webp";
import benefitssoc2 from "../../../assets/img/country/middle-east/UAE/soc2-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function UaeSoc2() {
  const benefits = [
    "Improved cybersecurity posture and risk visibility",
    "Higher confidence among customers, investors, and partners",
    "Alignment with international security and governance expectations",
    "Reduced likelihood of data breaches and service disruptions",
    "Smoother compliance with client security questionnaires",
    "Stronger brand reputation in competitive global markets",
  ];

  const hipaaData = [
    {
      icon: "bi-code-slash",
      title: "Software development and IT service providers",
    },
    {
      icon: "bi-cloud-check",
      title: "SaaS and cloud-native businesses",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Fintech, regtech, and digital finance platforms",
    },
    {
      icon: "bi-hdd-network",
      title: "Managed IT, hosting, and data center providers",
    },
    {
      icon: "bi-headset",
      title: "BPOs, KPOs, and shared service operations",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Health-tech, ed-tech, and data-driven startups",
    },
    {
      icon: "bi-cart-check",
      title: "E-commerce and online service platforms",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Definition",
      description: "Identify systems, services, and data included in SOC 2.",
    },
    {
      number: "2",
      title: "Risk Assessment",
      description: "Analyze threats and gaps against Trust Services Criteria.",
    },
    {
      number: "3",
      title: "Control Framework Design",
      description:
        "Define technical, administrative, and operational controls.",
    },
    {
      number: "4",
      title: "Documentation Development",
      description: "Policies, procedures, and evidence mapping.",
    },
    {
      number: "5",
      title: "Readiness Validation",
      description: "Internal testing and corrective action planning.",
    },
    {
      number: "6",
      title: "Audit Facilitation",
      description: "Coordination for SOC 2 Type 1 or Type 2 audits.",
    },
    {
      number: "7",
      title: "Ongoing Compliance Support",
      description: "Continuous improvement and future audit readiness.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in UAE | Advanced SOC 2 Compliance & Advisory –
          First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve SOC 2 Certification in UAE? First Cert offers end-to-end SOC 2 consulting, covering security risk analysis, control implementation, documentation, and audit coordination to meet global trust and compliance expectations."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in UAE, SOC 2 consultants in UAE, SOC 2 audit UAE, SOC 2 Type 1 certification UAE, SOC 2 Type 2 certification UAE, SOC 2 compliance UAE, SOC 2 consulting company UAE, SOC 2 certification cost UAE, SOC 2 implementation UAE, SOC 2 documentation UAE, SOC 2 audit support UAE, SOC 2 security compliance UAE, First Cert SOC 2 consultants, SOC 2 certification for IT companies UAE, SOC 2 for SaaS companies UAE, SOC 2 cybersecurity certification UAE."
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
          <h1 className="main-title">SOC 2 Certification in UAE</h1>
          <p className="small-desc">
            Strengthening Security and Client Confidence
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
                <b>SOC 2 Certification in UAE</b> enables organizations to prove
                that their systems and operations are designed to protect data,
                maintain availability, and deliver reliable digital services.
                With the UAE positioned as a regional technology and business
                hub, clients increasingly expect strong assurance over
                cybersecurity, privacy, and operational controls.
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
                <b>First Cert</b> supports organizations across the UAE by
                building SOC 2 frameworks that align with both international
                standards and real-world business practices. Our
                compliance-driven yet flexible approach helps companies improve
                security maturity while maintaining operational efficiency.
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
            Understanding SOC 2 Certification in UAE
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 2 Certification in UAE</b> is an independent evaluation
            developed under AICPA standards. It measures whether an
            organization’s internal controls comply with the Trust Services
            Criteria (TSC), which cover:
          </p>

          <div class="vapt-grid">
            <div class="vapt-card">
              <h5>Security of systems and information</h5>
            </div>

            <div class="vapt-card">
              <h5>Availability of services and infrastructure</h5>
            </div>

            <div class="vapt-card">
              <h5>Integrity of data processing activities</h5>
            </div>

            <div class="vapt-card">
              <h5>Confidential handling of sensitive information</h5>
            </div>

            <div class="vapt-card">
              <h5>Protection of personal data and privacy practices</h5>
            </div>
          </div>
          <br />

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            SOC 2 compliance demonstrates that an organization actively manages
            risks associated with data handling and service delivery, making it
            a critical trust signal for global customers and partners.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Needs SOC 2 Certification in UAE?
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 2 Certification in UAE is particularly relevant for
                organizations that manage customer data, digital platforms, or
                outsourced services, including:
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
                        <a href="iso-9001-certification-in-uae">
                          ISO 9001 Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-uae">
                          ISO 27001 Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-uae">
                          CMMI Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-uae">
                          HIPAA Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-uae">
                          VAPT Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-uae">
                          GDPR Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-uae">
                          SOC 1 Certification in UAE
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-uae">
                          SOC 2 Certification in UAE
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              For companies serving international markets, SOC 2 compliance
              often plays a key role in vendor selection, client onboarding, and
              contractual approvals.
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
                Key Business Benefits of SOC 2 Certification in UAE
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations achieving SOC 2 Certification in UAE gain
                measurable business advantages:
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
                With <a href="/">First Cert</a>, SOC 2 certification supports
                both trust-building and long-term business scalability
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
                SOC 2 Certification Methodology in UAE with{" "}
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
                First Cert follows a structured and practical SOC 2
                implementation roadmap:
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
          SOC 2 Certification Cost in UAE
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
                  The cost of SOC 2 Certification in UAE depends on multiple
                  factors, such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Company size and operational complexity
                  </li>
                  <li className="check">Nature and volume of data processed</li>
                  <li className="check">
                    Number of Trust Services Criteria selected
                  </li>
                  <li className="check">
                    Existing security controls and maturity level
                  </li>
                  <li className="check">
                    Type and duration of the SOC 2 audit
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial evaluation to deliver a clear,
                  customized, and cost-effective SOC 2 compliance plan.
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
                  Get SOC 2 Certification in UAE with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a reliable SOC 2 consulting partner in the UAE,
                  supporting organizations from initial assessment through audit
                  completion and beyond. Our consultants focus on practical
                  control implementation, clear documentation, and audit-ready
                  processes tailored to your business environment.
                </div>
                <div className="title small-title">
                  By choosing First Cert, organizations strengthen data
                  security, meet international compliance demands, and build
                  lasting trust with global clients.
                </div>
                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com Begin your SOC 2
                  Certification journey in UAE with First Cert and showcase your
                  commitment to security, reliability, and operational
                  excellence.
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

export default UaeSoc2;
