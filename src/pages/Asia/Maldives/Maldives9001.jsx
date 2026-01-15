import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/asia/maldives/9001-img.webp";
import benefits9001 from "../../../assets/img/country/asia/maldives/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Maldives9001() {
  const benefits = [
    "Improved consistency in products and service delivery",
    "Higher customer satisfaction and retention",
    "Stronger eligibility for government and international contracts",
    "Lower operational waste and rework",
    "Enhanced brand image and business credibility",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope Definition",
      description: "Identify business boundaries and quality goals",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description: "Compare current practices with ISO 9001 requirements",
    },
    {
      number: "3",
      title: "QMS Design",
      description: "Develop policies, procedures, and performance controls",
    },
    {
      number: "4",
      title: "Process Deployment",
      description: "Guide teams in applying standardized workflows",
    },
    {
      number: "5",
      title: "Internal Audit & Review",
      description: "Validate system effectiveness and leadership involvement",
    },
    {
      number: "6",
      title: "Certification Audit Support",
      description: "Assist during Stage 1 and Stage 2 audits",
    },
    {
      number: "7",
      title: "Continuous Improvement",
      description: "Maintain and enhance QMS maturity",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Maldives | Quality Systems & Operational Excellence Solutions – First Cert
        </title>
        <meta
          name="description"
          content="Looking for ISO 9001 Certification in Maldives? First Cert offers professional Quality Management System consulting, process optimization, compliance planning, and certification audit guidance to help organizations improve service reliability and customer confidence."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Maldives, ISO 9001 consultants Maldives, ISO 9001 certification cost Maldives, ISO 9001 implementation Maldives, ISO certification services Maldives, ISO 9001 training Maldives, ISO 9001 documentation Maldives, Quality Management System Maldives, QMS certification Maldives, ISO 9001 audit Maldives, ISO consultants Maldives, First Cert ISO 9001 Maldives, ISO quality certification Maldives, ISO 9001 for companies Maldives"
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
          <h1 className="main-title">ISO 9001 Certification in Maldives</h1>
          <p className="small-desc">
            Creating a Culture of Quality
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
                alt="ISO 9001 Certification in Maldives"
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
                <b>ISO 9001 Certification in Maldives</b> enables organizations to implement structured quality practices that ensure consistency, accountability, and customer satisfaction. As industries in Maldives expand across tourism, construction, logistics, healthcare, fisheries, manufacturing, and technology, clients and partners increasingly expect reliable, well-managed operations.
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
                <b>First Cert</b> works with organizations across Maldives to design Quality Management Systems that align with real operational needs rather than generic documentation.
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
                What ISO 9001 Certification in Maldives Means
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Maldives</b> confirms that a company operates a Quality Management System aligned with international ISO standards. It ensures that business processes are controlled, monitored, and continuously improved to deliver stable and high-quality outcomes.
              </p>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                An effective ISO 9001 framework helps organizations to:
              </p>

              <ul className="iso-list">
                {[
                  "Standardize operational processes",
                  "Consistently meet customer and regulatory requirements",
                  "Set measurable quality objectives",
                  "Identify and control risks affecting service delivery",
                  "Monitor results and drive continuous improvement",
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
                Certification reflects a strong commitment to quality and performance management.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Sectors in Maldives That Benefit from ISO 9001
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 Certification in Maldives is suitable for organizations of every size and industry, including:
              </p>
              <ul className="iso-list">
                {[
                  "Hotels, resorts, and tourism service providers",
                  "Construction, engineering, and infrastructure companies",
                  "Transport, logistics, and supply chain businesses",
                  "Healthcare providers and medical service organizations",
                  "IT services, software companies, and digital platforms",
                  "Manufacturing, fisheries, and processing facilities",
                  "Education, consulting, and professional services",
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
                ISO 9001 helps organizations in Maldives strengthen efficiency, reduce errors, and build long-term trust.
              </p>
            </div>

            {/* RIGHT SIDEBAR (OUR EXPERTISE) */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar mt-5">
                <h5>Our Expertise</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-maldives">
                      ISO 9001 Certification in Maldives
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-maldives">
                      ISO 27001 Certification in Maldives
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-maldives">
                      CMMI Certification in Maldives
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-maldives">
                      HIPAA Certification in Maldives
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-maldives">
                      VAPT Certification in Maldives
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-maldives">
                      GDPR Certification in Maldives
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-maldives">
                      SOC 1 Certification in Maldives
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-maldives">
                      SOC 2 Certification in Maldives
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
                Key Advantages of ISO 9001 Certification in Maldives
              </h1>
              <p
                className="details-text"
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Organizations that achieve ISO 9001 Certification in Maldives gain several strategic and operational benefits, including:
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
                alt="ISO 9001 Benefits in Maldives"
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
            ISO 9001 supports a culture of responsibility, transparency, and ongoing improvement.
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
                First Cert's ISO 9001 Consulting Method in Maldives
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                First Cert applies a practical and performance-driven ISO 9001 implementation model in Maldives:
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
          ISO 9001 Certification Cost in Maldives
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
                  The cost of ISO 9001 Certification in Maldives depends on factors such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Company size and workforce
                  </li>
                  <li className="check">
                    Type and complexity of operations
                  </li>
                  <li className="check">
                    Number of sites and certification scope
                  </li>
                  <li className="check">
                    Existing documentation and process maturity
                  </li>
                  <li className="check">
                    Training and audit preparation requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert starts with a readiness assessment to provide a clear, customized cost estimate aligned with business needs.
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
                  Get ISO 9001 Certified in Maldives with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a reliable ISO 9001 consulting partner in Maldives, guiding organizations from initial assessment through certification and ongoing quality improvement. Our consultants convert ISO standards into practical systems that increase efficiency, audit readiness, and long-term performance.
                </div>
                <div className="title small-title">
                  By working with First Cert, organizations in Maldives can strengthen quality governance, improve operational consistency, and build a strong platform for sustainable growth.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Begin your ISO 9001 Certification journey in Maldives with First Cert and showcase your commitment to quality, reliability, and continuous improvement.
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

export default Maldives9001;