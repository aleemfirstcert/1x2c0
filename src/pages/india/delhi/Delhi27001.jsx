import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img27001 from "../../../assets/img/country/india/delhi/27001-img.webp";
import benefits27001 from "../../../assets/img/country/india/delhi/27001-benefits.webp";
import bgimg from "../../../assets/img/services/card-27001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Delhi27001() {
  const benefits = [
    "Enhanced Information Security – Protect business and customer data from breaches.",
    "Regulatory Compliance – Meet GDPR, DPDP Act, and other data protection laws.",
    "Customer Trust and Brand Value – Demonstrate commitment to strong data protection.",
    "Risk Management – Identify, assess, and mitigate information security risks.",
    "Operational Efficiency – Implement structured processes that improve resilience.",
    "Global Recognition – Gain international credibility through ISO 27001 certification.",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Consultation",
      description:
        "We understand your organization’s data protection needs and compliance challenges.",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description:
        "Our experts identify gaps and recommend improvements to align with ISO 27001 standards.",
    },
    {
      number: "3",
      title: "Documentation",
      description:
        "We prepare ISMS documents such as security policies, procedures, risk assessments, and controls.",
    },
    {
      number: "4",
      title: "Implementation",
      description:
        "Your Information Security Management System is deployed with staff training and awareness sessions.",
    },
    {
      number: "5",
      title: "Internal Audit",
      description:
        "We conduct an internal audit to evaluate overall readiness.",
    },
    {
      number: "6",
      title: "Certification Audit",
      description:
        "A certified auditor verifies ISO 27001 compliance and issues the certification.",
    },
    {
      number: "7",
      title: "Continuous Support",
      description:
        "We offer continuous monitoring, surveillance audit assistance, and improvement guidance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 27001 Certification in Delhi | Affordable ISO 27001 Consultants –
          First Cert
        </title>
        <meta
          name="description"
          content="Looking for ISO 27001 Certification in Delhi? First Cert provides expert consulting, documentation, training, and audit support to help you build a robust Information Security Management System (ISMS)."
        />
        <meta
          name="keywords"
          content="ISO 27001 Certification in Delhi, ISO 27001 consultants in Delhi, ISO 27001 certification cost in Delhi, ISO 27001 implementation in Delhi, ISO 27001 certification process Delhi, ISO certification consultants Delhi, ISO 27001 training in Delhi, ISO 27001 documentation Delhi, Information Security Management System Delhi, ISMS certification Delhi, ISO 27001 audit support Delhi, affordable ISO 27001 certification Delhi, First Cert ISO consultants, ISO 27001 consulting company Delhi, ISO 27001 certification for IT companies Delhi, ISO 27001 certification for startups Delhi, ISO 27001 information security certification Delhi."
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
          <h1 class="main-title">ISO 27001 Certification in Delhi</h1>
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
                Achieve <b>ISO 27001 Certification in Delhi</b> with the expert
                consultants at First Cert. We help organizations establish a
                robust Information Security Management System (ISMS) that
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
                Our end-to-end support — from risk assessment and documentation
                to audit readiness — makes ISO 27001 implementation in Delhi
                seamless, affordable, and effective. Strengthen your information
                security posture and stay compliant with global standards using
                ISO 27001 certification.
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
            What is ISO 27001 Certification in Delhi?
          </h2>

          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            <b>ISO 27001 Certification in Delhi</b> is an internationally
            recognized standard that defines best practices for establishing,
            implementing, maintaining, and continually improving an{" "}
            <b>Information Security Management System (ISMS)</b>.
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
            Whether your business operates in IT, finance, healthcare,
            e-commerce, education, or manufacturing, ISO 27001 helps reduce data
            breaches, ensure regulatory compliance, and build stakeholder
            confidence.
          </p>
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400" }}
          >
            By getting ISO 27001 certified, Delhi-based companies demonstrate
            their commitment to data protection, cybersecurity, and business
            continuity — critical for long-term trust and success.
          </p>

          <section className="iso-section py-5">
            <div className="container">
              <h2 className="text-center mb-4 section-title">
                Which Businesses Need ISO 27001 Certification Implementation in
                Delhi?
              </h2>

              <p className="text-center section-sub mb-5">
                Every organization that handles sensitive information or
                operates digitally should consider ISO 27001 Certification
                Implementation in Delhi. This includes:
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
                          Mid-sized tech firms, technology providers, and IT
                          startups handling client data.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-cloud-check iso-icon"></i>
                        <h4>Cloud Service Providers</h4>
                        <p>
                          SaaS companies, hosting providers, and data center
                          operators.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-cash-stack iso-icon"></i>
                        <h4>Financial Institutions and Fintech Startups</h4>
                        <p>
                          digital payment companies, NBFCs, and financial
                          services platforms.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-hospital iso-icon"></i>
                        <h4>Healthcare Organizations</h4>
                        <p>
                          hospitals, diagnostic centers, and health-tech
                          companies managing patient data.
                        </p>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-mortarboard iso-icon"></i>
                        <h4>Educational Institutions</h4>
                        <p>
                          schools, universities, training centers, and EdTech
                          platforms handling student records.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-headset iso-icon"></i>
                        <h4>BPOs, KPOs, and Data Processing Firms</h4>
                        <p>
                          companies managing outsourced data, customer
                          processes, or analytics.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="iso-card small-card">
                        <i className="bi bi-cart-check iso-icon"></i>
                        <h4>E-commerce and Retail Platforms</h4>
                        <p>
                          online marketplaces, delivery platforms, and ERP-based
                          retail systems.
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
                        <a href="iso-9001-certification-in-delhi">
                          ISO 9001 Certification in Delhi
                        </a>
                      </li>
                      <li>
                        <a href="iso-27001-certification-in-delhi">
                          ISO 27001 Certification in Delhi
                        </a>
                      </li>
                      <li>
                        <a href="cmmi-certification-in-delhi">
                          CMMI Certification in Delhi
                        </a>
                      </li>
                      <li>
                        <a href="hipaa-certification-in-delhi">
                          HIPAA Certification in Delhi
                        </a>
                      </li>
                      <li>
                        <a href="vapt-certification-in-delhi">
                          VAPT Certification in Delhi
                        </a>
                      </li>
                      <li>
                        <a href="gdpr-certification-in-delhi">
                          GDPR Certification in Delhi
                        </a>
                      </li>
                      <li>
                        <a href="soc-1-certification-in-delhi">
                          SOC 1 Certification in Delhi
                        </a>
                      </li>
                      <li>
                        <a href="soc-2-certification-in-delhi">
                          SOC 2 Certification in Delhi
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center section-sub mb-5">
              ISO 27001 implementation helps these Delhi-based organizations
              protect confidential information, reduce cyber risks, and increase
              customer trust — key factors for success in the digital era.
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
                Benefits of Getting ISO 27001 Certification in Delhi
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
                  ISO 27001 Certification in Delhi
                </b>{" "}
                offers multiple strategic and operational benefits:
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
                With <a href="/">First Cert</a>, achieving{" "}
                <b>ISO 27001 Certification in Delhi</b> becomes a streamlined
                and value-driven process — ensuring compliance, data security,
                and business continuity.
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
                ISO 27001 Certification in Delhi – Simplified Process with{" "}
                <span style={{ color: "black" }}>First Cert</span>
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                At <a href="/">First Cert</a>, we follow a proven 7-step
                methodology to make ISO 27001 certification simple, structured,
                and efficient:
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

      <div className="plans-wrapper py-5">
        {/* Main Heading */}
        <h2 className="text-center mb-4 main-heading text-primary">
          How Much Does It Cost to Get ISO 27001 Certified in Delhi?
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
                  The cost of ISO 27001 certification in Delhi depends on
                  several factors:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and employee count
                  </li>
                  <li className="check">
                    Type and sensitivity of data handled
                  </li>
                  <li className="check">
                    IT infrastructure and system complexity
                  </li>
                  <li className="check">
                    Existing security controls and documentation
                  </li>
                  <li className="check">
                    Certification scope (department-specific or full
                    organization)
                  </li>
                  <li className="check">Training and internal audit needs</li>
                  <li className="check">
                    Certification body fees and number of audit days
                  </li>
                </ul>

                <div className="title small-title">
                  We provide customized quotations after assessing your
                  organization’s requirements to ensure cost-effective and
                  timely certification.
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
                  Achieve ISO 27001 Certification in Delhi with First Cert –
                  Your Trusted Partner for Information Security Excellence
                </div>
                <div className="title small-title-p">
                  If you’re looking to achieve ISO 27001 Certification in
                  Delhi, First Cert is your trusted partner for expert guidance
                  and reliable certification support.
                </div>

                <div className="title small-title-p">
                  We specialize in creating strong Information Security
                  Management Systems (ISMS) that comply with ISO 27001 —
                  ensuring data protection, cyber resilience, and compliance
                  with global standards.
                </div>
                <div className="title small-title-p">
                  With wide experience across industries like IT, fintech,
                  healthcare, retail, and education, First Cert offers tailored
                  consulting and implementation services.
                </div>
                <div className="title small-title-p">
                  Our experienced consultants guide you through every stage —
                  from risk assessment and training to audit readiness and
                  continual improvement.
                </div>
                <div className="title small-title-p">
                  We are committed to delivering high-quality, affordable, and
                  result-oriented ISO consulting services that strengthen your
                  organization's security posture and reputation.
                </div>
                <div className="title small-title-p">
                  Contact us at info@firstcertification.com to begin your ISO
                  27001 Certification journey in Delhi with First Cert — your
                  partner in data protection and business resilience.
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

export default Delhi27001;
