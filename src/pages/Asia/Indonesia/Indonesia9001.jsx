import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/asia/indonesia/9001-img.webp";
import benefits9001 from "../../../assets/img/country/asia/indonesia/9001-benfits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Indonesia9001() {
  const benefits = [
    "Consistent and controlled operational processes",
    "Improved customer satisfaction and retention",
    "Enhanced credibility in local and international markets",
    "Better identification and management of operational risks",
    "Stronger positioning in tenders and supplier evaluations",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Initial Review",
      description: "Define organizational objectives and certification scope.",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description: "Assess existing practices against ISO 9001 clauses.",
    },
    {
      number: "3",
      title: "QMS Development",
      description:
        "Create tailored policies, procedures, and process controls.",
    },
    {
      number: "4",
      title: "Execution Support",
      description: "Guide teams in applying quality requirements effectively.",
    },
    {
      number: "5",
      title: "Internal Evaluation",
      description: "Conduct internal audits and management reviews.",
    },
    {
      number: "6",
      title: "Certification Audit Assistance",
      description: "Support during external audit stages.",
    },
    {
      number: "7",
      title: "Ongoing Improvement",
      description: "Maintain compliance and optimize performance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Indonesia | Professional Quality System
          Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Planning to obtain ISO 9001 Certification in Indonesia? First Cert provides end-to-end ISO 9001 consulting, including QMS design, process standardization, employee training, and certification audit guidance to support consistent quality outcomes."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Indonesia, ISO 9001 consultants in Indonesia, ISO 9001 certification cost in Indonesia, ISO 9001 implementation in Indonesia, ISO 9001 certification process Indonesia, ISO certification consultants Indonesia, ISO 9001 training in Indonesia, ISO 9001 documentation Indonesia, Quality Management System Indonesia, QMS certification Indonesia, ISO certification services Indonesia, ISO 9001 audit support Indonesia, affordable ISO certification Indonesia, First Cert ISO consultants, ISO 9001 consulting company Indonesia, ISO 9001 certification for manufacturing companies Indonesia, ISO 9001 certification for IT companies Indonesia, ISO 9001 quality certification Indonesia."
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
          <h1 class="main-title">ISO 9001 Certification in Indonesia</h1>
          <p class="small-desc">
            Driving Structured Quality and Operational Stability
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
                alt="ISO 9001 Certification"
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
                <b>ISO 9001 Certification in Indonesia</b> helps organizations
                build a reliable quality framework that improves process
                consistency, reduces operational variation, and enhances
                customer satisfaction. As Indonesian businesses expand across
                manufacturing, services, exports, and digital sectors, adopting
                a recognized quality standard supports efficiency, credibility,
                and sustainable growth.
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
                <b>First Cert</b> supports organizations in Indonesia by
                developing ISO 9001 systems that reflect real operational needs.
                Our approach emphasizes usability, accountability, and
                measurable improvement rather than complex or audit-only
                documentation.
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
                Understanding ISO 9001 Certification in Indonesia
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Indonesia</b> confirms that an
                organization has implemented a Quality Management System aligned
                with international ISO requirements. The standard provides a
                structured methodology for planning, controlling, and improving
                business processes across functions. Key principles of ISO 9001
                include:
              </p>

              <ul className="iso-list">
                {[
                  "Clearly defined workflows and responsibilities",
                  "Strong focus on customer requirements and feedback",
                  "Leadership involvement in quality objectives",
                  "Risk-based planning and preventive controls",
                  "Performance measurement and continual improvement",
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
                Organizations certified to ISO 9001 in Indonesia demonstrate
                disciplined management practices and consistent service or
                product delivery.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Who Should Pursue ISO 9001 Certification in Indonesia?
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 Certification in Indonesia is suitable for
                organizations of all sizes and sectors, such as:
              </p>
              <ul className="iso-list">
                {[
                  "Manufacturing, processing, and industrial companies",
                  "Trading firms, distributors, and export-oriented businesses",
                  "Logistics, transportation, and supply chain providers",
                  "Construction, engineering, and project-based organizations",
                  "IT services, software development, and digital companies",
                  "Healthcare providers, laboratories, and service institutions",
                  "Educational bodies and professional service firms",
                ].map((item, index) => (
                  <li key={index} className="mb-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT SIDEBAR (OUR EXPERTISE) */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar mt-5">
                <h5>Our Expertise</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-indonesia">
                      ISO 9001 Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-indonesia">
                      ISO 27001 Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-indonesia">
                      CMMI Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-indonesia">
                      HIPAA Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-indonesia">
                      VAPT Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-indonesia">
                      GDPR Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-indonesia">
                      SOC 1 Certification in Indonesia
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-indonesia">
                      SOC 2 Certification in Indonesia
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <p
            className="details-text"
            style={{ color: "#000000", fontWeight: "400", textAlign: "center" }}
          >
            ISO 9001 helps Indonesian organizations improve efficiency, reduce
            rework, and strengthen long-term customer relationships.
          </p>
        </div>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of ISO 9001 Certification in Indonesia
              </h1>
              <p
                className="details-text"
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Organizations that achieve ISO 9001 Certification in Indonesia
                benefit in multiple ways:
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
              <h2
                className="display-5 fw-bold mb-3"
                style={{ color: "#0000FF" }}
              >
                ISO 9001 Implementation Approach in Indonesia with{" "}
                <span style={{ color: "black" }}>First Cert</span>
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                <a href="/">First Cert</a> follows a practical and outcome-driven ISO 9001 implementation model:
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
          ISO 9001 Certification Cost in Indonesia
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
                  The cost of ISO 9001 Certification in Indonesia depends on factors such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and operational structure
                  </li>
                  <li className="check">
                    Industry type and regulatory exposure
                  </li>
                  <li className="check">
                    Scope and complexity of the Quality Management System
                  </li>
                  <li className="check">
                    Existing documentation and quality maturity
                  </li>
                  <li className="check">
                    Training and audit preparation requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial assessment to provide a transparent and customized ISO 9001 cost estimate aligned with your business needs.
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
                  Achieve ISO 9001 Certification in Indonesia with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted ISO 9001 consulting partner in
                  Indonesia, helping organizations build practical and effective
                  Quality Management Systems. Our consultants focus on aligning
                  ISO requirements with real business operations to ensure
                  smooth certification and long-term value.
                </div>
                <div className="title small-title">
                  From system design to audit support and continual improvement,
                  First Cert ensures a clear and efficient ISO 9001
                  certification journey.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com Start your ISO 9001
                  Certification in Indonesia with First Cert and strengthen
                  quality, consistency, and business performance.
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

export default Indonesia9001;
