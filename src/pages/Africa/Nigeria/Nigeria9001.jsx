import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/africa/nigeria/9001-img.webp";
import benefits9001 from "../../../assets/img/country/africa/nigeria/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Nigeria9001() {
  const benefits = [
    "Improved consistency in product and service delivery",
    "Higher customer confidence and long-term loyalty",
    "Better eligibility for tenders, contracts, and partnerships",
    "Reduced operational waste, rework, and inefficiencies",
    "Enhanced reputation in local and international markets",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Definition",
      description: "Identify certification boundaries and quality objectives",
    },
    {
      number: "2",
      title: "Gap & Process Assessment",
      description: "Review existing practices against ISO 9001 requirements",
    },
    {
      number: "3",
      title: "QMS Development",
      description: "Create policies, procedures, and operational controls",
    },
    {
      number: "4",
      title: "Implementation Guidance",
      description: "Support teams in applying standardized processes",
    },
    {
      number: "5",
      title: "Internal Audit & Management Review",
      description: "Verify system effectiveness and leadership involvement",
    },
    {
      number: "6",
      title: "Certification Audit Support",
      description: "Assist with Stage 1 and Stage 2 audits",
    },
    {
      number: "7",
      title: "Post-Certification Support",
      description: "Maintain and enhance QMS performance",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Nigeria | Strategic Quality Management
          Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Looking to secure ISO 9001 Certification in Nigeria? First Cert offers end-to-end ISO 9001 Quality Management consulting, including system structuring, operational standardization, staff awareness programs, and full certification audit support to help organizations achieve reliable performance and sustained customer satisfaction."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Nigeria, ISO 9001 consultants Nigeria, ISO 9001 certification cost Nigeria, ISO 9001 implementation Nigeria, ISO certification services Nigeria, ISO 9001 training Nigeria, ISO 9001 documentation Nigeria, Quality Management System Nigeria, QMS certification Nigeria, ISO 9001 audit Nigeria, ISO consultants Nigeria, First Cert ISO 9001 Nigeria, ISO quality certification Nigeria, ISO 9001 for companies Nigeria"
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
          <h1 className="main-title">ISO 9001 Certification in Nigeria</h1>
          <p className="small-desc">
            Strengthening Operational Discipline and Quality Control
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
                alt="ISO 9001 Certification in Nigeria"
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
                <b>ISO 9001 Certification in Nigeria</b> enables organizations
                to establish consistent, well-governed processes that improve
                service delivery, product quality, and organizational
                efficiency. As Nigeria's economy continues to expand across
                manufacturing, oil and gas, construction, healthcare, logistics,
                agribusiness, financial services, and technology sectors, ISO
                9001 has become a critical benchmark for dependable and
                transparent operations.
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
                <b>First Cert</b> partners with organizations throughout Nigeria
                to implement Quality Management Systems that align with actual
                business practices. Our consulting approach emphasizes
                leadership accountability, process ownership, and measurable
                improvement rather than documentation-heavy compliance.
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
                Meaning of ISO 9001 Certification in Nigeria
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Nigeria</b> confirms that an
                organization has implemented a Quality Management System aligned
                with international ISO 9001 standards. The framework promotes
                customer focus, structured process management, performance
                monitoring, and continual improvement across all functional
                areas.
              </p>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                A well-designed ISO 9001 system enables organizations to:
              </p>

              <ul className="iso-list">
                {[
                  "Establish controlled and repeatable operational processes",
                  "Clearly understand and meet customer requirements",
                  "Set measurable quality objectives with leadership oversight",
                  "Apply risk-based thinking to prevent operational failures",
                  "Monitor performance and drive continuous improvement",
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
                Certification demonstrates that quality is systematically
                embedded into organizational decision-making and daily
                operations.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Industries in Nigeria That Benefit from ISO 9001
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 Certification in Nigeria is applicable to organizations
                of all sizes and sectors, including:
              </p>
              <ul className="iso-list">
                {[
                  "Manufacturing companies and industrial suppliers",
                  "Construction firms and infrastructure developers",
                  "Oil, gas, energy, and mining service providers",
                  "Logistics, transportation, and supply chain businesses",
                  "IT companies, software firms, and service organizations",
                  "Hospitals, clinics, and healthcare service providers",
                  "Educational institutions, consulting firms, and professional services",
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
                Implementing ISO 9001 helps Nigerian organizations improve
                efficiency, reduce errors, and build stronger trust with
                customers, regulators, and business partners.
              </p>
            </div>

            {/* RIGHT SIDEBAR (OUR EXPERTISE) */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar mt-5">
                <h5>Our Expertise</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-nigeria">
                      ISO 9001 Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-nigeria">
                      ISO 27001 Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-nigeria">
                      CMMI Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-nigeria">
                      HIPAA Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-nigeria">
                      VAPT Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-nigeria">
                      GDPR Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-nigeria">
                      SOC 1 Certification in Nigeria
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-nigeria">
                      SOC 2 Certification in Nigeria
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
                Key Benefits of ISO 9001 Certification in Nigeria
              </h1>
              <p
                className="details-text"
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Organizations that achieve ISO 9001 Certification in Nigeria
                experience clear operational and commercial advantages,
                including:
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
                alt="ISO 9001 Benefits in Nigeria"
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
            ISO 9001 supports a culture of responsibility, clarity, and
            continuous improvement across the organization.
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
                First Cert's ISO 9001 Implementation Approach in Nigeria
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                First Cert follows a structured yet practical ISO 9001
                consulting methodology tailored to Nigerian organizations:
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
          ISO 9001 Certification Cost in Nigeria
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
                  The cost of ISO 9001 Certification in Nigeria depends on
                  several organizational factors, such as:
                </div>

                <ul className="features">
                  <li className="check">Company size and workforce strength</li>
                  <li className="check">
                    Complexity and nature of business activities
                  </li>
                  <li className="check">
                    Certification scope and number of locations
                  </li>
                  <li className="check">
                    Existing quality practices and documentation maturity
                  </li>
                  <li className="check">
                    Training, audit, and implementation requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a structured initial assessment to
                  provide a transparent, customized cost estimate aligned with
                  business objectives.
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
                  Get ISO 9001 Certified in Nigeria with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted ISO 9001 consulting partner in
                  Nigeria, supporting organizations from initial evaluation
                  through certification and ongoing quality improvement. Our
                  consultants translate ISO requirements into practical systems
                  that enhance performance and audit confidence.
                </div>
                <div className="title small-title">
                  By partnering with First Cert, organizations in Nigeria can
                  strengthen quality governance, improve operational efficiency,
                  and build a sustainable foundation for long-term growth.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your ISO 9001 Certification journey in Nigeria with
                  First Cert and demonstrate your commitment to quality
                  excellence, consistency, and continual improvement.
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

export default Nigeria9001;
