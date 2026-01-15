import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/africa/mauritius/9001-img.webp";
import benefits9001 from "../../../assets/img/country/africa/mauritius/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Mauritius9001() {
  const benefits = [
    "Improved consistency in products and services",
    "Higher levels of customer satisfaction and loyalty",
    "Better eligibility for tenders and international contracts",
    "Reduced operational waste and rework",
    "Stronger market reputation and brand credibility",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scoping & Planning",
      description: "Define quality objectives and certification boundaries",
    },
    {
      number: "2",
      title: "Process Review",
      description: "Evaluate existing workflows against ISO 9001 requirements",
    },
    {
      number: "3",
      title: "QMS Development",
      description: "Build policies, procedures, and performance controls",
    },
    {
      number: "4",
      title: "Implementation Support",
      description: "Assist teams in applying standardized processes",
    },
    {
      number: "5",
      title: "Internal Audits & Management Review",
      description: "Verify effectiveness and leadership engagement",
    },
    {
      number: "6",
      title: "Certification Audit Support",
      description: "Guide organizations through Stage 1 and Stage 2 audits",
    },
    {
      number: "7",
      title: "Ongoing Improvement",
      description: "Maintain and enhance QMS performance",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Mauritius | Quality Governance & Business
          Excellence Services – First Cert
        </title>
        <meta
          name="description"
          content="Looking to obtain ISO 9001 Certification in Mauritius? First Cert delivers end-to-end Quality Management System consulting, including workflow optimization, leadership alignment, compliance planning, and certification audit support to help organizations achieve operational stability and customer satisfaction."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Mauritius, ISO 9001 consultants Mauritius, ISO 9001 certification cost Mauritius, ISO 9001 implementation Mauritius, ISO certification services Mauritius, ISO 9001 training Mauritius, ISO 9001 documentation Mauritius, Quality Management System Mauritius, QMS certification Mauritius, ISO 9001 audit Mauritius, ISO consultants Mauritius, First Cert ISO 9001 Mauritius, ISO quality certification Mauritius, ISO 9001 for companies Mauritius"
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
          <h1 className="main-title">ISO 9001 Certification in Mauritius</h1>
          <p className="small-desc">
            Building Reliable and Scalable Operations
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
                alt="ISO 9001 Certification in Mauritius"
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
                <b>ISO 9001 Certification in Mauritius</b> helps organizations
                establish structured management practices that improve
                consistency, accountability, and customer satisfaction. As
                businesses across Mauritius grow within manufacturing,
                infrastructure, healthcare, agriculture, logistics, financial
                services, and technology, clients and regulators increasingly
                expect clear evidence of quality-driven operations.
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
                <b>First Cert</b> works closely with organizations throughout
                Mauritius to design Quality Management Systems that match
                real-world workflows. Our focus is on practical implementation,
                leadership involvement, and measurable improvement rather than
                paperwork-heavy compliance.
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
                What ISO 9001 Certification in Mauritius Represents
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Mauritius</b> confirms that an
                organization has implemented a Quality Management System aligned
                with globally recognized ISO requirements. It ensures that
                processes are defined, controlled, monitored, and continuously
                improved to deliver dependable products and services.
              </p>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                A well-established ISO 9001 framework enables organizations to:
              </p>

              <ul className="iso-list">
                {[
                  "Maintain consistent operational procedures",
                  "Meet customer and regulatory expectations",
                  "Set quality objectives aligned with business goals",
                  "Control risks that impact product and service delivery",
                  "Track performance and drive continual improvement",
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
                Certification reflects a disciplined and transparent approach to
                managing quality across the organization.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Industries in Mauritius That Benefit from ISO 9001
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 Certification in Mauritius is applicable to
                organizations of all sizes and sectors, including:
              </p>
              <ul className="iso-list">
                {[
                  "Manufacturing and production facilities",
                  "Construction and engineering firms",
                  "Energy, utilities, and resource service providers",
                  "Logistics, warehousing, and transportation companies",
                  "IT services, SaaS, and digital solution providers",
                  "Hospitals, clinics, and healthcare organizations",
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
                Implementing ISO 9001 helps organizations in Mauritius improve
                efficiency, reduce errors, and strengthen customer and
                stakeholder confidence.
              </p>
            </div>

            {/* RIGHT SIDEBAR (OUR EXPERTISE) */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar mt-5">
                <h5>Our Expertise</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-mauritius">
                      ISO 9001 Certification in Mauritius
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-mauritius">
                      ISO 27001 Certification in Mauritius
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-mauritius">
                      CMMI Certification in Mauritius
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-mauritius">
                      HIPAA Certification in Mauritius
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-mauritius">
                      VAPT Certification in Mauritius
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-mauritius">
                      GDPR Certification in Mauritius
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-mauritius">
                      SOC 1 Certification in Mauritius
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-mauritius">
                      SOC 2 Certification in Mauritius
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
                Business Benefits of ISO 9001 Certification in Mauritius
              </h1>
              <p
                className="details-text"
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Organizations that achieve ISO 9001 Certification in Mauritius
                gain significant operational and commercial advantages, such as:
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
                alt="ISO 9001 Benefits in Mauritius"
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
            ISO 9001 supports a culture of accountability, performance
            measurement, and continuous enhancement.
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
                First Cert's ISO 9001 Implementation Approach in Mauritius
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                First Cert delivers ISO 9001 services in Mauritius using a
                structured, results-focused framework:
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
          ISO 9001 Certification Cost in Mauritius
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
                  The cost of ISO 9001 Certification in Mauritius depends on
                  several factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and number of employees
                  </li>
                  <li className="check">
                    Nature and complexity of business operations
                  </li>
                  <li className="check">
                    Scope of certification and number of locations
                  </li>
                  <li className="check">
                    Existing quality systems and documentation maturity
                  </li>
                  <li className="check">
                    Training, consulting, and audit requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a readiness assessment to provide a
                  transparent, tailored cost estimate aligned with business
                  objectives.
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
                  Get ISO 9001 Certified in Mauritius with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted ISO 9001 consulting partner in
                  Mauritius, supporting organizations from initial evaluation
                  through certification and ongoing quality improvement. Our
                  consultants translate ISO standards into practical systems
                  that enhance efficiency, audit confidence, and long-term
                  performance.
                </div>
                <div className="title small-title">
                  By partnering with First Cert, organizations in Mauritius can
                  strengthen quality governance, improve operational
                  reliability, and build a strong foundation for sustainable
                  growth.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Begin your ISO 9001 Certification journey in Mauritius with
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

export default Mauritius9001;