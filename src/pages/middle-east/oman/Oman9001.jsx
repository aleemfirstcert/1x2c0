import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/middle-east/oman/9001-img.webp";
import benefits9001 from "../../../assets/img/country/middle-east/oman/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Oman9001() {
  const benefits = [
    "Improved process control and operational consistency",
    "Higher customer satisfaction and repeat business",
    "Better compliance with regulatory and contractual obligations",
    "Reduced operational risks and rework",
    "Stronger positioning in tenders, audits, and partnerships",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope & Objective Definition",
      description: "Identify certification boundaries and quality goals",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description: "Evaluate existing practices against ISO 9001 requirements",
    },
    {
      number: "3",
      title: "QMS Design",
      description:
        "Develop customized policies, procedures, and process controls",
    },
    {
      number: "4",
      title: "Implementation Guidance",
      description: "Support teams in applying quality practices effectively",
    },
    {
      number: "5",
      title: "Internal Audit & Review",
      description: "Conduct internal audits and management evaluations",
    },
    {
      number: "6",
      title: "Certification Audit Support",
      description: "Assist with Stage 1 and Stage 2 audits",
    },
    {
      number: "7",
      title: "Continual Improvement Support",
      description: "Help maintain and enhance the QMS over time",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Oman | Expert Quality Management Consulting
          Services – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve ISO 9001 Certification in Oman? First Cert provides comprehensive ISO 9001 consulting, including QMS design, process optimization, workforce awareness, and full certification audit support to help organizations achieve consistent quality performance."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Oman, ISO 9001 consultants Oman, ISO 9001 certification cost Oman, ISO 9001 implementation Oman, ISO certification services Oman, ISO 9001 training Oman, ISO 9001 documentation Oman, Quality Management System Oman, QMS certification Oman, ISO 9001 audit support Oman, ISO consultants Oman, First Cert ISO 9001 Oman, ISO quality certification Oman, ISO 9001 for companies Oman"
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
          <h1 className="main-title">ISO 9001 Certification in Oman</h1>
          <p className="small-desc">
            Driving Operational Excellence and Customer Trust
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
                alt="ISO 9001 Certification in Oman"
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
                <b>ISO 9001 Certification in Oman</b> supports organizations in
                building structured and reliable quality management practices
                that enhance efficiency, consistency, and customer satisfaction.
                As Oman continues to expand across sectors such as oil and gas
                services, manufacturing, logistics, construction, tourism, and
                professional services, ISO 9001 has become a vital benchmark for
                demonstrating quality-driven operations.
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
                <b>First Cert</b> works closely with organizations across Oman
                to develop ISO 9001 systems that align with real business
                workflows. Our focus is on practical implementation, measurable
                improvement, and long-term value rather than excessive
                documentation.
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
                What ISO 9001 Certification in Oman Signifies
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Oman</b> confirms that an
                organization has implemented a Quality Management System in
                accordance with international ISO standards. The framework helps
                organizations control processes, manage risks, and continually
                improve performance across departments.
              </p>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                Core elements of ISO 9001 include:
              </p>

              <ul className="iso-list">
                {[
                  "Well-defined and standardized operational processes",
                  "Strong emphasis on customer needs and satisfaction",
                  "Leadership involvement and accountability",
                  "Risk-based planning to minimize quality failures",
                  "Monitoring, measurement, and continual improvement",
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
                Certification demonstrates that quality is embedded into
                everyday decision-making and operations.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Sectors in Oman That Benefit from ISO 9001
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 Certification in Oman is applicable to organizations of
                all sizes and industries, such as:
              </p>
              <ul className="iso-list">
                {[
                  "Manufacturing plants and industrial service providers",
                  "Oil & gas contractors and engineering companies",
                  "Construction firms and infrastructure developers",
                  "Logistics, shipping, and supply chain organizations",
                  "IT companies, service providers, and startups",
                  "Healthcare facilities and support services",
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
                ISO 9001 enables organizations in Oman to improve efficiency,
                reduce errors, and build long-term customer confidence.
              </p>
            </div>

            {/* RIGHT SIDEBAR (OUR EXPERTISE) */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar mt-5">
                <h5>Our Expertise</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-oman">
                      ISO 9001 Certification in Oman
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-oman">
                      ISO 27001 Certification in Oman
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-oman">
                      CMMI Certification in Oman
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-oman">
                      HIPAA Certification in Oman
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-oman">
                      VAPT Certification in Oman
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-oman">
                      GDPR Certification in Oman
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-oman">
                      SOC 1 Certification in Oman
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-oman">
                      SOC 2 Certification in Oman
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
                Key Benefits of ISO 9001 Certification in Oman
              </h1>
              <p
                className="details-text"
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Organizations that obtain ISO 9001 Certification in Oman gain
                several strategic and operational advantages:
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
                alt="ISO 9001 Benefits in Oman"
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
            ISO 9001 promotes a culture of accountability, clarity, and
            continuous improvement throughout the organization.
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
                First Cert's ISO 9001 Implementation Methodology in Oman
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                First Cert applies a structured and business-focused approach to
                ISO 9001 implementation:
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
          ISO 9001 Certification Cost in Oman
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
                  The cost of ISO 9001 Certification in Oman depends on several
                  factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and number of employees
                  </li>
                  <li className="check">Nature and complexity of operations</li>
                  <li className="check">
                    Scope of certification and processes involved
                  </li>
                  <li className="check">
                    Existing level of documentation and quality maturity
                  </li>
                  <li className="check">
                    Training needs and certification audit requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial assessment to provide a clear
                  and customized ISO 9001 cost estimate aligned with
                  organizational needs.
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
                  Achieve ISO 9001 Certification in Oman with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a reliable ISO 9001 consulting partner in Oman,
                  supporting organizations from initial planning through
                  certification and continuous improvement. Our consultants
                  simplify ISO requirements while ensuring real business
                  benefits and audit confidence.
                </div>
                <div className="title small-title">
                  By partnering with First Cert, organizations build a resilient
                  Quality Management System that supports sustainable growth,
                  operational excellence, and customer satisfaction.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your ISO 9001 Certification journey in Oman with First
                  Cert and strengthen your foundation for quality excellence and
                  long-term business success.
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

export default Oman9001;
