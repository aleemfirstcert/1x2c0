import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/africa/egypt/9001-img.webp";
import benefits9001 from "../../../assets/img/country/africa/egypt/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Egypt9001() {
  const benefits = [
    "Consistent delivery of products and services",
    "Higher customer confidence and long-term satisfaction",
    "Improved eligibility for contracts, tenders, and partnerships",
    "Reduced errors, rework, and operational inefficiencies",
    "Stronger brand credibility in local and international markets",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope & Goal Definition",
      description: "Establish certification boundaries and quality objectives",
    },
    {
      number: "2",
      title: "Gap & Process Analysis",
      description: "Evaluate current practices against ISO 9001 requirements",
    },
    {
      number: "3",
      title: "QMS Design",
      description: "Develop policies, procedures, and operational controls",
    },
    {
      number: "4",
      title: "Implementation Guidance",
      description: "Support teams in applying standardized processes",
    },
    {
      number: "5",
      title: "Internal Audit & Management Review",
      description: "Assess system effectiveness and readiness",
    },
    {
      number: "6",
      title: "Certification Audit Support",
      description: "Assist with Stage 1 and Stage 2 audits",
    },
    {
      number: "7",
      title: "Post-Certification Improvement",
      description: "Ongoing support to sustain and improve the QMS",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Egypt | Expert Quality Management Consulting
          – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve ISO 9001 Certification in Egypt? First Cert delivers end-to-end ISO 9001 consulting services, including quality system design, operational alignment, employee training, and full audit support to help organizations enhance performance and achieve continual improvement."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Egypt, ISO 9001 consultants Egypt, ISO 9001 certification cost Egypt, ISO 9001 implementation Egypt, ISO certification services Egypt, ISO 9001 training Egypt, ISO 9001 documentation Egypt, Quality Management System Egypt, QMS certification Egypt, ISO 9001 audit Egypt, ISO consultants Egypt, First Cert ISO 9001 Egypt, ISO quality certification Egypt, ISO 9001 for companies Egypt"
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
          <h1 className="main-title">ISO 9001 Certification in Egypt</h1>
          <p className="small-desc">
            Driving Quality Excellence and Operational Consistency
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
                src={img9001}
                alt="ISO 9001 Certification in Egypt"
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
                <b>ISO 9001 Certification in Egypt</b> enables organizations to
                build a disciplined Quality Management System that improves
                process efficiency, customer satisfaction, and overall business
                reliability. With Egypt's expanding economy across
                manufacturing, construction, healthcare, energy, logistics, and
                service industries, ISO 9001 has become a recognized benchmark
                for structured operations and quality assurance.
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
                <b>First Cert</b> supports organizations across Egypt by
                developing ISO 9001-aligned systems that integrate seamlessly
                with existing workflows. Our approach emphasizes real
                performance improvement and accountability rather than
                checklist-based documentation, ensuring long-term value beyond
                certification.
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
                Overview of ISO 9001 Certification in Egypt
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Egypt</b> confirms that an
                organization has established, implemented, and maintained a
                Quality Management System that complies with internationally
                accepted ISO 9001 standards. The framework focuses on customer
                satisfaction, leadership involvement, controlled processes, and
                continuous improvement.
              </p>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                A well-implemented ISO 9001 system helps organizations achieve:
              </p>

              <ul className="iso-list">
                {[
                  "Standardized and repeatable operational processes",
                  "Clear identification of customer needs and service expectations",
                  "Defined quality objectives supported by leadership oversight",
                  "Risk-based controls to reduce inefficiencies and nonconformities",
                  "Continuous monitoring, measurement, and system enhancement",
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
                Certification signals that quality principles are embedded into
                everyday decision-making and operations.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Sectors in Egypt That Benefit from ISO 9001 Certification
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 Certification in Egypt is suitable for organizations of
                all sizes and industries, including:
              </p>
              <ul className="iso-list">
                {[
                  "Manufacturing facilities and industrial suppliers",
                  "Construction firms and infrastructure developers",
                  "Oil, gas, and energy-related service providers",
                  "Logistics, transportation, and supply chain companies",
                  "IT firms, technology startups, and service providers",
                  "Hospitals, clinics, and healthcare support organizations",
                  "Educational institutions, consultancies, and professional services",
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
                Implementing ISO 9001 helps Egyptian organizations improve
                internal control, reduce operational variability, and strengthen
                trust with clients and stakeholders.
              </p>
            </div>

            {/* RIGHT SIDEBAR (OUR EXPERTISE) */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar mt-5">
                <h5>Our Expertise</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-egypt">
                      ISO 9001 Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-egypt">
                      ISO 27001 Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-egypt">
                      CMMI Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-egypt">
                      HIPAA Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-egypt">
                      VAPT Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-egypt">
                      GDPR Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-egypt">
                      SOC 1 Certification in Egypt
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-egypt">
                      SOC 2 Certification in Egypt
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
                Key Benefits of ISO 9001 Certification in Egypt
              </h1>
              <p
                className="details-text"
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Organizations certified to ISO 9001 in Egypt gain measurable
                advantages, including:
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
                alt="ISO 9001 Benefits in Egypt"
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
            ISO 9001 fosters a culture of clarity, responsibility, and ongoing
            improvement throughout the organization.
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
                First Cert's ISO 9001 Implementation Approach in Egypt
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                First Cert applies a practical and business-focused methodology
                for ISO 9001 Certification in Egypt:
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
          ISO 9001 Certification Cost in Egypt
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
                  The cost of ISO 9001 Certification in Egypt depends on
                  multiple organizational factors, such as:
                </div>

                <ul className="features">
                  <li className="check">Company size and workforce strength</li>
                  <li className="check">
                    Complexity and type of business activities
                  </li>
                  <li className="check">
                    Certification scope and number of operational locations
                  </li>
                  <li className="check">
                    Existing quality practices and documentation level
                  </li>
                  <li className="check">
                    Training needs and audit requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial assessment to provide a clear,
                  customized cost proposal aligned with your organization's
                  goals.
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
                  Achieve ISO 9001 Certification in Egypt with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted ISO 9001 consulting partner in Egypt,
                  guiding organizations from initial evaluation through
                  certification and ongoing quality improvement. Our consultants
                  simplify ISO requirements while ensuring audit confidence and
                  meaningful operational outcomes.
                </div>
                <div className="title small-title">
                  By working with First Cert, organizations in Egypt can
                  strengthen quality governance, improve efficiency, and build a
                  solid foundation for sustainable growth.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your ISO 9001 Certification journey in Egypt with First
                  Cert and demonstrate your commitment to quality, consistency,
                  and continual improvement.
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

export default Egypt9001;
