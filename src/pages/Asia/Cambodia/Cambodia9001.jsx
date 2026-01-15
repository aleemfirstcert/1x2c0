import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/asia/cambodia/9001-img.webp";
import benefits9001 from "../../../assets/img/country/asia/cambodia/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Cambodia9001() {
  const benefits = [
    "Improved process efficiency and operational control",
    "Higher levels of customer satisfaction and retention",
    "Stronger compliance with contractual and regulatory requirements",
    "Proactive identification and management of operational risks",
    "Enhanced credibility in tenders, partnerships, and audits",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Definition",
      description: "Establish certification boundaries and objectives.",
    },
    {
      number: "2",
      title: "Gap Assessment",
      description:
        "Identify differences between current practices and ISO 9001 requirements.",
    },
    {
      number: "3",
      title: "QMS Development",
      description: "Create customized policies, procedures, and controls.",
    },
    {
      number: "4",
      title: "Implementation Support",
      description: "Guide teams in applying quality processes effectively.",
    },
    {
      number: "5",
      title: "Internal Auditing",
      description: "Conduct internal audits and management reviews.",
    },
    {
      number: "6",
      title: "Certification Assistance",
      description: "Support Stage 1 and Stage 2 certification audits.",
    },
    {
      number: "7",
      title: "Ongoing Support",
      description: "Help maintain compliance and drive continual improvement.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Cambodia | Professional Quality Management
          Advisory – First Cert
        </title>
        <meta
          name="description"
          content="Planning for ISO 9001 Certification in Cambodia? First Cert delivers end-to-end ISO 9001 consulting services, including QMS development, operational alignment, staff training, and certification audit assistance to drive consistent quality outcomes."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Cambodia, ISO 9001 consultants Cambodia, ISO 9001 certification cost Cambodia, ISO 9001 implementation Cambodia, ISO certification services Cambodia, ISO 9001 training Cambodia, ISO 9001 documentation Cambodia, Quality Management System Cambodia, QMS certification Cambodia, ISO 9001 audit support Cambodia, ISO consultants Cambodia, First Cert ISO 9001 Cambodia, ISO quality certification Cambodia, ISO 9001 for companies Cambodia"
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
          <h1 class="main-title">ISO 9001 Certification in Cambodia</h1>
          <p class="small-desc">
            Elevating Process Consistency and Customer Confidence
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
                alt="ISO 9001 Certification in Cambodia"
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
                <b>ISO 9001 Certification in Cambodia</b> helps organizations
                establish disciplined quality management practices that improve
                operational consistency, enhance customer satisfaction, and
                strengthen overall business reliability. As Cambodia continues
                to develop its manufacturing base, export capabilities,
                construction sector, and service economy, ISO 9001 has become a
                key standard for organizations aiming to compete in regional and
                international markets.
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
                <b>First Cert</b> partners with businesses across Cambodia to
                design ISO 9001 systems that fit real operational needs. Our
                approach emphasizes usability, clarity, and measurable
                improvement rather than paperwork-driven compliance.
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
                Understanding ISO 9001 Certification in Cambodia
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Cambodia</b> confirms that an
                organization has implemented a Quality Management System aligned
                with globally accepted ISO requirements. The standard provides a
                structured framework to control processes, manage risks, and
                continuously improve performance across all functions.
              </p>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                Key principles addressed under ISO 9001 include:
              </p>

              <ul className="iso-list">
                {[
                  "Clearly defined and controlled business processes",
                  "Strong customer focus and service consistency",
                  "Leadership accountability and strategic direction",
                  "Risk-based thinking to prevent quality issues",
                  "Performance monitoring and continual improvement",
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
                Certified organizations demonstrate professionalism,
                reliability, and a commitment to quality-driven operations.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Industries in Cambodia That Commonly Adopt ISO 9001
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 Certification in Cambodia is suitable for organizations
                of all sizes and sectors, including:
              </p>
              <ul className="iso-list">
                {[
                  "Manufacturing units and industrial facilities",
                  "Exporters, importers, and trading companies",
                  "Construction contractors and engineering firms",
                  "Logistics, transportation, and warehousing providers",
                  "IT services, digital businesses, and startups",
                  "Healthcare providers and support services",
                  "Educational institutions and professional consultancies",
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
                ISO 9001 enables Cambodian organizations to streamline
                operations, reduce rework, and improve customer trust.
              </p>
            </div>

            {/* RIGHT SIDEBAR (OUR EXPERTISE) */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar mt-5">
                <h5>Our Expertise</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-cambodia">
                      ISO 9001 Certification in Cambodia
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-cambodia">
                      ISO 27001 Certification in Cambodia
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-cambodia">
                      CMMI Certification in Cambodia
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-cambodia">
                      HIPAA Certification in Cambodia
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-cambodia">
                      VAPT Certification in Cambodia
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-cambodia">
                      GDPR Certification in Cambodia
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-cambodia">
                      SOC 1 Certification in Cambodia
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-cambodia">
                      SOC 2 Certification in Cambodia
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
                Business Value of ISO 9001 Certification in Cambodia
              </h1>
              <p
                className="details-text"
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Organizations achieving ISO 9001 Certification in Cambodia
                benefit from:
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
                alt="ISO 9001 Benefits in Cambodia"
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
            ISO 9001 fosters a culture of accountability, consistency, and
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
              <h2
                className="display-5 fw-bold mb-3"
                style={{ color: "#0000FF" }}
              >
                First Cert’s ISO 9001 Consulting Approach in Cambodia
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                First Cert follows a practical and business-aligned ISO 9001
                implementation methodology:
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
          ISO 9001 Certification Cost in Cambodia
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
                  The cost of ISO 9001 Certification in Cambodia varies based on
                  factors such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and workforce strength
                  </li>
                  <li className="check">
                    Industry type and operational complexity
                  </li>
                  <li className="check">
                    Scope and number of processes covered
                  </li>
                  <li className="check">
                    Current level of documentation and quality maturity
                  </li>
                  <li className="check">
                    Training and certification audit requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert performs an initial assessment to provide a
                  transparent and customized ISO 9001 cost proposal.
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
                  Get ISO 9001 Certification in Cambodia with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted ISO 9001 consulting partner in
                  Cambodia, supporting organizations from early planning through
                  certification and ongoing system improvement. Our consultants
                  focus on simplifying ISO requirements while delivering
                  tangible business value.
                </div>
                <div className="title small-title">
                  By choosing First Cert, organizations build a resilient
                  quality management framework that supports growth,
                  competitiveness, and long-term customer satisfaction.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your ISO 9001 Certification journey in Cambodia with
                  First Cert and establish a strong foundation for quality
                  excellence and sustainable business performance.
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

export default Cambodia9001;
