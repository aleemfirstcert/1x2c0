import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/asia/thailand/9001-img.webp";
import benefits9001 from "../../../assets/img/country/asia/thailand/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Thailand9001() {
  const benefits = [
    "Standardized operations and improved process control",
    "Higher customer trust and satisfaction levels",
    "Better compliance with contractual and regulatory needs",
    "Improved risk identification and corrective action",
    "Stronger credibility during tenders and supplier audits",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope & Objective Setting",
      description: "Define goals, boundaries, and certification scope.",
    },
    {
      number: "2",
      title: "Gap Review",
      description: "Compare current practices with ISO 9001 requirements.",
    },
    {
      number: "3",
      title: "System Design",
      description: "Develop customized QMS documentation and controls.",
    },
    {
      number: "4",
      title: "Implementation Guidance",
      description: "Support teams in applying quality practices.",
    },
    {
      number: "5",
      title: "Internal Review",
      description: "Conduct internal audits and management evaluations.",
    },
    {
      number: "6",
      title: "Certification Support",
      description: "Assist during Stage 1 and Stage 2 audits.",
    },
    {
      number: "7",
      title: "Post-Certification Support",
      description: "Maintain compliance and drive improvements.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Thailand | Expert Quality Management
          Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve ISO 9001 Certification in Thailand? First Cert offers comprehensive ISO 9001 consulting services, covering QMS planning, process alignment, workforce awareness, and certification audit support to ensure consistent quality performance."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Thailand, ISO 9001 consultants Thailand, ISO 9001 certification cost Thailand, ISO 9001 implementation Thailand, ISO certification services Thailand, ISO 9001 training Thailand, ISO 9001 documentation Thailand, Quality Management System Thailand, QMS certification Thailand, ISO 9001 audit support Thailand, ISO consultants Thailand, First Cert ISO 9001 Thailand, ISO quality certification Thailand, ISO 9001 for companies Thailand"
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
          <h1 class="main-title">ISO 9001 Certification in Thailand</h1>
          <p class="small-desc">
            Strengthening Quality Control and Business Reliability
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
                alt="ISO 9001 Certification in Thailand"
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
                <b>ISO 9001 Certification in Thailand</b> enables organizations
                to establish a structured quality management approach that
                enhances consistency, improves operational discipline, and
                delivers dependable customer outcomes. As Thailand continues to
                grow as a hub for manufacturing, exports, services, and
                technology-driven industries, organizations are increasingly
                adopting ISO 9001 to meet market expectations and improve
                internal efficiency.
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
                <b>First Cert</b> assists businesses across Thailand in building
                ISO 9001 systems that are practical, scalable, and aligned with
                daily operations. Our focus is on integrating quality into real
                workflows rather than creating documentation purely for audit
                purposes.
              </p>
            </div>

            <EnquiryForm />
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
                Overview of ISO 9001 Certification in Thailand
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Thailand</b> confirms that an
                organization has implemented a Quality Management System in line
                with internationally recognized ISO standards. The framework
                helps organizations control processes, manage risks, and
                continuously enhance performance across departments.
              </p>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                Core elements of ISO 9001 include:
              </p>

              <ul className="iso-list">
                {[
                  "Defined processes with clear roles and accountability",
                  "Strong emphasis on customer needs and satisfaction",
                  "Leadership involvement in setting quality direction",
                  "Risk-based thinking to prevent nonconformities",
                  "Ongoing monitoring, measurement, and improvement",
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
                Certified organizations demonstrate reliability, consistency,
                and professional management practices to stakeholders.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Organizations That Benefit from ISO 9001 Certification in
                Thailand
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 Certification in Thailand is applicable to a wide range
                of industries and organization sizes, such as:
              </p>
              <ul className="iso-list">
                {[
                  "Manufacturing plants and production facilities",
                  "Exporters, traders, and supply chain businesses",
                  "Warehousing, logistics, and transportation providers",
                  "Construction firms and engineering service companies",
                  "IT services, SaaS providers, and digital enterprises",
                  "Healthcare organizations and diagnostic centers",
                  "Educational institutions and consulting firms",
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
                ISO 9001 supports Thai organizations in reducing inefficiencies,
                minimizing errors, and strengthening customer confidence.
              </p>
            </div>

            {/* RIGHT SIDEBAR (OUR EXPERTISE) */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar mt-5">
                <h5>Our Expertise</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-thailand">
                      ISO 9001 Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-thailand">
                      ISO 27001 Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-thailand">
                      CMMI Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-thailand">
                      HIPAA Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-thailand">
                      VAPT Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-thailand">
                      GDPR Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-thailand">
                      SOC 1 Certification in Thailand
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-thailand">
                      SOC 2 Certification in Thailand
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
                Key Advantages of ISO 9001 Certification in Thailand
              </h1>
              <p
                className="details-text"
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Organizations with ISO 9001 Certification in Thailand experience
                measurable business benefits, including:
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
                alt="ISO 9001 Benefits in Thailand"
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
            ISO 9001 helps embed a culture of quality, responsibility, and
            continual improvement across the organization.
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
              <h2
                className="display-5 fw-bold mb-3"
                style={{ color: "#0000FF" }}
              >
                First Cert’s ISO 9001 Implementation Methodology in Thailand
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                First Cert follows a structured yet flexible ISO 9001
                implementation approach designed for Thai business environments:
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
          ISO 9001 Certification Cost in Thailand
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
                  The cost of ISO 9001 Certification in Thailand depends on
                  several factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Size and structure of the organization
                  </li>
                  <li className="check">
                    Nature of operations and industry complexity
                  </li>
                  <li className="check">
                    Scope of the Quality Management System
                  </li>
                  <li className="check">
                    Existing level of documentation and controls
                  </li>
                  <li className="check">
                    Training, audit preparation, and certification needs
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial evaluation to provide a clear
                  and tailored ISO 9001 cost estimate without hidden charges.
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
                  Get ISO 9001 Certification in Thailand with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a reliable ISO 9001 consulting partner in
                  Thailand, supporting organizations from initial planning
                  through certification and ongoing improvement. Our consultants
                  focus on simplifying ISO requirements, strengthening
                  operational performance, and ensuring long-term compliance
                  value.
                </div>
                <div className="title small-title">
                  By working with First Cert, organizations gain a robust
                  quality framework that supports growth, competitiveness, and
                  customer satisfaction.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Begin your ISO 9001 Certification journey in Thailand with
                  First Cert and build a strong foundation for quality
                  excellence and sustainable business success.
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

export default Thailand9001;
