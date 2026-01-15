import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/middle-east/saudi-arabia/soc2-img.webp";
import benefitssoc2 from "../../../assets/img/country/middle-east/saudi-arabia/soc2-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function SaudiSoc2() {
  const benefits = [
    "Improved Data Security – Stronger safeguards against cyber risks and data leaks",
    "Client Assurance – Builds confidence through independently validated controls",
    "Global Compliance Readiness – Aligns with international security expectations",
    "Operational Risk Reduction – Identifies and mitigates system and process gaps",
    "Faster Client Onboarding – Meets security due diligence requirements",
    "Enhanced Brand Reputation – Positions the business as secure and reliable",
  ];

  const hipaaData = [
    {
      icon: "bi-code-slash",
      title: "IT and Software Development Companies",
    },
    {
      icon: "bi-cloud-check",
      title: "SaaS and Cloud Solution Providers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Fintech and Digital Payment Firms",
    },
    {
      icon: "bi-hdd-network",
      title: "Managed Service Providers and Data Centers",
    },
    {
      icon: "bi-headset",
      title: "BPOs and KPOs",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Health-tech and Digital Healthcare Platforms",
    },
    {
      icon: "bi-cart-check",
      title: "E-commerce and Online Service Businesses",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scoping & Planning",
      description: "Define services, systems, and data in scope",
    },
    {
      number: "2",
      title: "Risk & Gap Assessment",
      description: "Evaluate existing controls against SOC 2 criteria",
    },
    {
      number: "3",
      title: "Documentation Development",
      description: "Policies, procedures, risk registers, and control mapping",
    },
    {
      number: "4",
      title: "Control Implementation Support",
      description: "Technical, administrative, and operational controls",
    },
    {
      number: "5",
      title: "Readiness Review",
      description: "Internal validation and corrective actions",
    },
    {
      number: "6",
      title: "SOC 2 Audit Coordination",
      description: "Support for Type 1 or Type 2 audits",
    },
    {
      number: "7",
      title: "Ongoing Compliance Support",
      description: "Continuous improvement and audit maintenance",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in Saudi Arabia | Professional SOC 2 Consulting –
          First Cert
        </title>
        <meta
          name="description"
          content="Planning for SOC 2 Certification in Saudi Arabia? First Cert offers complete SOC 2 compliance solutions including security reviews, control implementation, documentation, and audit coordination to help businesses meet global trust standards."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in Saudi Arabia, SOC 2 consultants in Saudi Arabia, SOC 2 audit Saudi Arabia, SOC 2 Type 1 certification Saudi Arabia, SOC 2 Type 2 certification Saudi Arabia, SOC 2 compliance Saudi Arabia, SOC 2 consulting company Saudi Arabia, SOC 2 certification cost Saudi Arabia, SOC 2 implementation Saudi Arabia, SOC 2 documentation Saudi Arabia, SOC 2 audit support Saudi Arabia, SOC 2 security compliance Saudi Arabia, First Cert SOC 2 consultants, SOC 2 certification for IT companies Saudi Arabia, SOC 2 for SaaS companies Saudi Arabia, SOC 2 cybersecurity certification Saudi Arabia."
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
          <h1 className="main-title">SOC 2 Certification in Saudi Arabia</h1>
          <p className="small-desc">
            Establish Security, Reliability, and Trust
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
                <b>SOC 2 Certification in Saudi Arabia</b> enables organizations
                to prove that their systems and processes are designed to
                protect customer data and ensure service reliability. As
                businesses in Saudi Arabia expand globally and handle increasing
                volumes of sensitive information, SOC 2 compliance has become a
                key trust requirement for clients and partners.
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
                <b>First Cert</b> helps organizations in Saudi Arabia adopt a
                structured SOC 2 compliance approach that focuses on practical
                security controls, risk reduction, and audit readiness. Our
                consulting services are designed to simplify compliance while
                supporting business growth and international credibility.
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
            What is SOC 2 Certification in Saudi Arabia?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 2 Certification in Saudi Arabia</b> is an independent
            assurance report developed under AICPA standards. It evaluates
            whether an organization’s internal controls effectively align with
            the <b>Trust Services Criteria (TSC)</b>, which include:
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
            SOC 2 focuses on safeguarding systems against cyber threats,
            unauthorized access, service failures, and data misuse.
            Organizations that achieve SOC 2 certification demonstrate
            responsible data management and operational accountability to
            customers, partners, and regulators. Industries such as IT services,
            SaaS platforms, fintech, healthcare technology, cloud providers, and
            outsourcing companies in Saudi Arabia benefit significantly from SOC
            2 compliance.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Should Consider SOC 2 Certification in Saudi Arabia?
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 2 Certification is ideal for organizations in Saudi Arabia
                that store, process, or transmit customer or client data,
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
                        <a href="iso-9001-certification-in-saudi-arabia">
                          ISO 9001 Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-saudi-arabia">
                          ISO 27001 Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-saudi-arabia">
                          CMMI Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-saudi-arabia">
                          HIPAA Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-saudi-arabia">
                          VAPT Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-saudi-arabia">
                          GDPR Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-saudi-arabia">
                          SOC 1 Certification in Saudi Arabia
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-saudi-arabia">
                          SOC 2 Certification in Saudi Arabia
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              For businesses working with clients in the U.S., Europe, or global
              enterprises, SOC 2 compliance is often a mandatory requirement for
              vendor onboarding.
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
                Business Advantages of SOC 2 Certification in Saudi Arabia
              </h1>
              <p className="text-center section-sub mb-5">
                Organizations that achieve SOC 2 Certification in Saudi Arabia
                gain measurable benefits, such as:
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
                With <a href="/">First Cert</a>, SOC 2 compliance becomes a
                strategic advantage rather than just a regulatory task.
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
                SOC 2 Certification Process in Saudi Arabia with{" "} <br />
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
                Our SOC 2 implementation methodology is structured, efficient,
                and business-focused:
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
          SOC 2 Certification Cost in Saudi Arabia
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
                  The cost of SOC 2 Certification in Saudi Arabia depends on
                  multiple factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and business model
                  </li>
                  <li className="check">
                    Type and sensitivity of data handled
                  </li>
                  <li className="check">
                    Number of Trust Service Criteria selected
                  </li>
                  <li className="check">IT infrastructure and complexity</li>
                  <li className="check">
                    Existing security and compliance maturity
                  </li>
                  <li className="check">
                    Audit type (Type 1 or Type 2) duration
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert provides transparent, customized pricing after an
                  initial assessment to ensure cost-effective and clear
                  compliance planning.
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
                  Achieve SOC 2 Certification in Saudi Arabia with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted SOC 2 consulting partner in Saudi
                  Arabia, helping organizations design, implement, and validate
                  security frameworks aligned with global standards. Our
                  experienced consultants work closely with IT companies, SaaS
                  providers, fintech firms, cloud platforms, and digital
                  enterprises to ensure smooth and successful certification.
                </div>
                <div className="title small-title">
                  We focus on practical controls, clear documentation, and
                  audit-ready systems that support long-term security and
                  operational resilience.
                </div>
                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com Start your SOC 2
                  Certification journey in Saudi Arabia with First Cert — and
                  demonstrate security, reliability, and compliance to the
                  world.
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

export default SaudiSoc2;
