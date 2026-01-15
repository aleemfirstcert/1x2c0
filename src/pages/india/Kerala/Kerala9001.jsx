import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/india/kerala/9001-img.webp";
import benefits9001 from "../../../assets/img/country/india/kerala/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Kerala9001() {
  const benefits = [
    "Improved consistency in service and product quality",
    "Higher customer satisfaction and repeat business",
    "Stronger process control and reduced operational errors",
    "Better chances of winning tenders and corporate contracts",
    "Enhanced reputation in national and global markets",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Review Existing Workflows",
      description: "Assess current quality practices and business processes",
    },
    {
      number: "2",
      title: "Gap Identification",
      description: "Identify gaps against ISO 9001 requirements",
    },
    {
      number: "3",
      title: "QMS Design & Development",
      description: "Design policies, procedures, and quality controls",
    },
    {
      number: "4",
      title: "Implementation Support",
      description: "Support teams in implementing standardized processes",
    },
    {
      number: "5",
      title: "Internal Audit & Review",
      description: "Conduct internal audits and management reviews",
    },
    {
      number: "6",
      title: "Certification Preparation",
      description: "Prepare organizations for external certification audits",
    },
    {
      number: "7",
      title: "Continual Improvement",
      description: "Assist with maintaining and improving QMS after certification",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Kerala | Quality Systems & Compliance – First Cert
        </title>
        <meta
          name="description"
          content="ISO 9001 Certification in Kerala from First Cert helps organizations improve process control, meet customer expectations, and achieve internationally recognized quality compliance."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Kerala, ISO 9001 consultants Kerala, ISO 9001 certification cost Kerala, ISO 9001 implementation Kerala, ISO certification services Kerala, ISO 9001 training Kerala, ISO 9001 documentation Kerala, Quality Management System Kerala, QMS certification Kerala, ISO 9001 audit Kerala, ISO consultants Kerala, First Cert ISO 9001 Kerala, ISO quality certification Kerala, ISO 9001 for companies Kerala"
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
          <h1 className="main-title">ISO 9001 Certification in Kerala</h1>
          <p className="small-desc">Driving Operational Excellence</p>
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
                src={img9001}
                alt="ISO 9001 Certification in Kerala"
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
                <b>ISO 9001 Certification in Kerala</b> supports organizations in building reliable, customer-focused, and efficient business processes. With Kerala's strong presence in IT services, tourism, healthcare, manufacturing, education, and export industries, maintaining consistent quality standards is critical to meeting domestic and international expectations.
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
                <b>First Cert</b> partners with Kerala-based companies to implement quality systems that improve performance, reduce risks, and support long-term growth.
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
          <div className="row">
            {/* LEFT CONTENT */}
            <div className="col-lg-9">
              {/* HEADING 1 */}
              <h2
                className="details-title text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                What ISO 9001 Certification in Kerala Represents
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Kerala</b> confirms that an organization has adopted a structured Quality Management System aligned with international best practices. The framework focuses on:
              </p>

              <ul className="iso-list">
                {[
                  "Clearly defined and controlled business processes",
                  "Consistent delivery of products and services",
                  "Monitoring of customer satisfaction and feedback",
                  "Risk-based thinking to prevent quality failures",
                  "Ongoing performance evaluation and improvement",
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
                Certification signals that quality management is part of everyday decision-making.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Organizations in Kerala That Benefit from ISO 9001
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 Certification in Kerala is valuable for a wide range of sectors, including:
              </p>
              <ul className="iso-list">
                {[
                  "IT companies, software developers, and digital service firms",
                  "Manufacturing, engineering, and export-oriented units",
                  "Healthcare providers, clinics, and laboratories",
                  "Tourism, hospitality, and travel service operators",
                  "Logistics, trading, and supply chain businesses",
                  "Educational and professional service organizations",
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
                Implementing ISO 9001 helps organizations operate more efficiently while building customer confidence.
              </p>
            </div>

            {/* RIGHT SIDEBAR (OUR EXPERTISE) */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar mt-5">
                <h5>Our Expertise</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-kerala">
                      ISO 9001 Certification in Kerala
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-kerala">
                      ISO 27001 Certification in Kerala
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-kerala">
                      CMMI Certification in Kerala
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-kerala">
                      HIPAA Certification in Kerala
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-kerala">
                      VAPT Certification in Kerala
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-kerala">
                      GDPR Certification in Kerala
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-kerala">
                      SOC 1 Certification in Kerala
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-kerala">
                      SOC 2 Certification in Kerala
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Benefits of ISO 9001 Certification in Kerala
              </h1>
              <p
                className="details-text"
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Organizations with ISO 9001 Certification in Kerala gain:
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
                src={benefits9001}
                alt="ISO 9001 Benefits in Kerala"
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
                className="details-text"
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                ISO 9001 turns quality management into a strategic advantage.
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
                First Cert's ISO 9001 Consulting Approach in Kerala
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                First Cert follows a practical and results-driven model for Kerala organizations:
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
          ISO 9001 Certification Cost in Kerala
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
                  The cost of ISO 9001 Certification in Kerala varies based on:
                </div>

                <ul className="features">
                  <li className="check">
                    Company size and number of employees
                  </li>
                  <li className="check">
                    Process complexity and operational scope
                  </li>
                  <li className="check">
                    Number of business locations
                  </li>
                  <li className="check">
                    Existing documentation and quality systems
                  </li>
                  <li className="check">
                    Training and preparation requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert performs an initial assessment to provide a clear and tailored cost structure.
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
                  Get ISO 9001 Certified in Kerala with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted ISO 9001 partner in Kerala, helping organizations achieve certification and maintain strong quality governance. Our consultants focus on building systems that are easy to use, audit-ready, and aligned with business objectives.
                </div>
                <div className="title small-title-p">
                  By partnering with First Cert, Kerala-based organizations can establish robust quality systems, streamline operations, and build lasting credibility with customers and stakeholders.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your ISO 9001 Certification journey in Kerala with First Cert and build a foundation of quality, efficiency, and sustainable business growth.
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

export default Kerala9001;