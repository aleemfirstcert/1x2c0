import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import imgsoc2 from "../../../assets/img/country/middle-east/yemen/soc2-img.avif";
import benefitssoc2 from "../../../assets/img/country/middle-east/yemen/soc2-benefits.webp";
import bgimg from "../../../assets/img/services/card-soc2.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function YemenSoc2() {
  const benefits = [
    "Stronger Data Protection – Enhanced safeguards against cyber risks and data exposure",
    "Client Trust – Demonstrates verified controls to customers and partners",
    "Global Compliance Alignment – Meets international standards and expectations",
    "Reduced Operational Risks – Identifies gaps and improves internal processes",
    "Faster Partner Onboarding – Supports security due diligence requirements",
    "Enhanced Brand Credibility – Establishes the organization as reliable and secure",
  ];

  const hipaaData = [
    {
      icon: "bi-code-slash",
      title: "IT and software development companies",
    },
    {
      icon: "bi-cloud-check",
      title: "Cloud-based and SaaS solution providers",
    },
    {
      icon: "bi-credit-card-2-front",
      title: "Fintech and digital payment platforms",
    },
    {
      icon: "bi-hdd-network",
      title: "Managed service and hosting providers",
    },
    {
      icon: "bi-headset",
      title: "Outsourcing, BPO, and KPO firms",
    },
    {
      icon: "bi-file-earmark-medical",
      title: "Health-tech and digital healthcare organizations",
    },
    {
      icon: "bi-cart-check",
      title: "E-commerce and online service providers",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scoping & Planning",
      description: "Define the scope of systems, processes, and data.",
    },
    {
      number: "2",
      title: "Risk & Gap Assessment",
      description: "Review current controls against SOC 2 criteria.",
    },
    {
      number: "3",
      title: "Documentation Preparation",
      description: "Policies, procedures, and control mapping.",
    },
    {
      number: "4",
      title: "Control Implementation Support",
      description: "Assistance with technical and administrative controls.",
    },
    {
      number: "5",
      title: "Readiness Review",
      description: "Internal assessment and corrective actions.",
    },
    {
      number: "6",
      title: "SOC 2 Audit Coordination",
      description: "Support for Type 1 or Type 2 audits.",
    },
    {
      number: "7",
      title: "Continuous Compliance Support",
      description: "Guidance for ongoing audit readiness and improvements.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SOC 2 Certification in Yemen | Expert SOC 2 Advisory Services – First
          Cert
        </title>
        <meta
          name="description"
          content="Looking to obtain SOC 2 Certification in Yemen? First Cert delivers complete SOC 2 solutions including risk assessment, control setup, documentation, and audit support to help organizations meet international trust standards."
        />
        <meta
          name="keywords"
          content="SOC 2 Certification in Yemen, SOC 2 consultants in Yemen, SOC 2 audit Yemen, SOC 2 Type 1 certification Yemen, SOC 2 Type 2 certification Yemen, SOC 2 compliance Yemen, SOC 2 consulting company Yemen, SOC 2 certification cost Yemen, SOC 2 implementation Yemen, SOC 2 documentation Yemen, SOC 2 audit support Yemen, SOC 2 security compliance Yemen, First Cert SOC 2 consultants, SOC 2 certification for IT companies Yemen, SOC 2 for SaaS companies Yemen, SOC 2 cybersecurity certification Yemen."
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
          <h1 className="main-title">SOC 2 Certification in Yemen</h1>
          <p className="small-desc">
            Demonstrate Security, Reliability, and Trust
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
                <b>SOC 2 Certification in Yemen</b> allows organizations to
                validate that their systems, processes, and applications protect
                sensitive data while delivering dependable services. As Yemeni
                companies increasingly serve international clients and adopt
                cloud-based solutions, SOC 2 compliance has become essential for
                building trust and credibility.
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
                <b>First Cert</b> provides practical SOC 2 consulting services
                across Yemen, focusing on risk reduction, process improvement,
                and audit readiness. Our approach ensures compliance without
                disrupting operations, helping businesses strengthen security
                and gain recognition globally.
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
            What is SOC 2 Certification in Yemen?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>SOC 2 Certification in Yemen</b> is an independent evaluation
            developed under AICPA standards. It measures whether an
            organization’s internal controls comply with the Trust Services
            Criteria (TSC), which cover:
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
            SOC 2 ensures that systems are safeguarded from cyber threats,
            unauthorized access, data breaches, and service interruptions.
            Achieving SOC 2 certification shows responsible management of data
            and operational accountability to customers, partners, and
            regulators. IT services, SaaS platforms, fintech companies, cloud
            providers, and outsourcing firms in Yemen gain substantial benefits
            from SOC 2 compliance.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Who Should Consider SOC 2 Certification in Yemen?
              </h2>

              <p className="text-center section-sub mb-5">
                SOC 2 Certification is ideal for organizations in Yemen that
                store, process, or transmit customer or client data, including:
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
                        <a href="iso-9001-certification-in-yemen">
                          ISO 9001 Certification in Yemen
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-yemen">
                          ISO 27001 Certification in Yemen
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-yemen">
                          CMMI Certification in Yemen
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-yemen">
                          HIPAA Certification in Yemen
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-yemen">
                          VAPT Certification in Yemen
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-yemen">
                          GDPR Certification in Yemen
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-yemen">
                          SOC 1 Certification in Yemen
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-yemen">
                          SOC 2 Certification in Yemen
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              For companies collaborating with clients abroad, SOC 2 is often a
              prerequisite for partnerships and vendor approvals.
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
                Business Advantages of SOC 2 Certification in Yemen
              </h1>
              <p className="text-center section-sub mb-5">
                Obtaining SOC 2 Certification in Yemen offers several strategic
                benefits:
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
                With <a href="/">First Cert</a>, SOC 2 becomes a growth enabler
                rather than a compliance obstacle.
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
                SOC 2 Certification Process in Yemen with{" "}
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
                Our methodology ensures smooth SOC 2 implementation tailored to
                your business:
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
          SOC 2 Certification Cost in Yemen
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
                  The cost of SOC 2 Certification in Yemen depends on multiple
                  factors, such as:
                </div>

                <ul className="features">
                  <li className="check">Organization size and Service model</li>
                  <li className="check">Type of data processed</li>
                  <li className="check">
                    Number of Trust Services Criteria selected
                  </li>
                  <li className="check">
                    IT infrastructure and system complexity
                  </li>
                  <li className="check">
                    Audit type (Type 1 or Type 2) and audit duration
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert offers transparent, tailored pricing after
                  evaluating your organization to ensure effective and
                  cost-efficient compliance.
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
                  Achieve SOC 2 Certification in Yemen with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted SOC 2 consulting partner in Yemen,
                  guiding organizations in designing, implementing, and
                  validating secure frameworks. Our team supports IT companies,
                  SaaS providers, fintech firms, and digital enterprises with
                  practical controls, clear documentation, and audit-ready
                  systems.
                </div>
                <div className="title small-title">
                  📧 Email: info@firstcertification.com Start your SOC 2
                  Certification journey in Yemen with First Cert and showcase
                  security, reliability, and trust to international clients.
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

export default YemenSoc2;
