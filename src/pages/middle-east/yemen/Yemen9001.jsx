import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/middle-east/yemen/9001-img.avif";
import benefits9001 from "../../../assets/img/country/middle-east/yemen/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Yemen9001() {
  const benefits = [
    "Consistent Operations – Standardized processes improve reliability and efficiency",
    "Customer Satisfaction – Better service quality leads to stronger customer trust",
    "International Recognition – Alignment with globally accepted quality standards",
    "Operational Risk Control – Early identification and management of quality risks",
    "Market Competitiveness – Improved credibility in tenders and partnerships",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Initial Assessment",
      description:
        "Understand business goals, processes, and certification scope.",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description: "Identify gaps against ISO 9001 requirements.",
    },
    {
      number: "3",
      title: "QMS Development",
      description: "Create policies, procedures, and quality records.",
    },
    {
      number: "4",
      title: "Implementation Support",
      description: "Assist teams in adopting QMS practices.",
    },
    {
      number: "5",
      title: "Internal Audit",
      description: "Review system effectiveness and readiness.",
    },
    {
      number: "6",
      title: "Certification Audit",
      description: "Support during the external audit by an accredited body.",
    },
    {
      number: "7",
      title: "Post-Certification Support",
      description:
        "Guidance for continual improvement and surveillance audits.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Yemen | Professional ISO 9001 Consultants –
          First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve ISO 9001 Certification in Yemen? First Cert provides expert ISO 9001 consulting, QMS development, staff training, and audit assistance to help organizations improve quality and business performance."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Yemen, ISO 9001 consultants in Yemen, ISO 9001 certification cost in Yemen, ISO 9001 implementation in Yemen, ISO 9001 certification process Yemen, ISO certification consultants Yemen, ISO 9001 training in Yemen, ISO 9001 documentation Yemen, Quality Management System Yemen, QMS certification Yemen, ISO certification services Yemen, ISO 9001 audit support Yemen, affordable ISO certification Yemen, First Cert ISO consultants, ISO 9001 consulting company Yemen, ISO 9001 certification for manufacturing companies Yemen, ISO 9001 certification for IT companies Yemen, ISO 9001 quality certification Yemen."
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
          <h1 class="main-title">ISO 9001 Certification in Yemen</h1>
          <p class="small-desc">Enhancing Quality and Business Reliability</p>
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
                Achieve <b>ISO 9001 Certification in Yemen</b> enables
                organizations to establish reliable quality practices, improve
                internal efficiency, and consistently meet customer
                expectations. In today’s competitive environment, businesses in
                Yemen must demonstrate structured operations and dependable
                service delivery to gain trust in both local and international
                markets.
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
                <b>First Cert</b> helps organizations in Yemen implement ISO
                9001 through a practical and business-driven approach. Our
                consultants focus on building effective quality systems that
                support long-term improvement, rather than creating
                documentation for compliance alone.
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
                What is ISO 9001 Certification in Yemen?
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Yemen</b> is based on the
                international ISO 9001 standard for Quality Management Systems
                (QMS). It provides a structured framework for managing
                processes, monitoring performance, and driving continual
                improvement across the organization, The standard emphasizes:
              </p>

              <ul className="iso-list">
                {[
                  "Clear process definition and control",
                  "Customer satisfaction and feedback management",
                  "Leadership responsibility and accountability",
                  "Risk-based planning and performance evaluation",
                  "Continuous improvement culture",
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
                Organizations in Yemen that achieve ISO 9001 certification
                demonstrate their commitment to consistent quality, operational
                discipline, and customer-focused performance.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Which Organizations Benefit from ISO 9001 Certification in
                Yemen?
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 is suitable for organizations of all sizes and sectors
                in Yemen that aim to improve quality and operational control,
                including:
              </p>
              <ul className="iso-list">
                {[
                  "Manufacturing and production companies",
                  "Trading and distribution businesses",
                  "IT, software, and technology firms",
                  "Construction and engineering companies",
                  "Healthcare and service providers",
                  "Educational institutions and professional services",
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
                    <a href="iso-9001-certification-in-yemen">
                      ISO 9001 Certification in Yemen
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-yemen">
                      ISO 27001 Certification in Yemen
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-yemen">
                      CMMI Certification in Yemen
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-yemen">
                      HIPAA Certification in Yemen
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-yemen">
                      VAPT Certification in Yemen
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-yemen">
                      GDPR Certification in Yemen
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-yemen">
                      SOC 1 Certification in Yemen
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-yemen">
                      SOC 2 Certification in Yemen
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
            Implementing ISO 9001 helps organizations in Yemen streamline
            workflows, reduce errors, and build confidence among customers,
            partners, and regulators{" "}
          </p>
        </div>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting ISO 9001 Certified in Yemen
              </h1>
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
                ISO 9001 Certification in Yemen – Simple Process with{" "}
                <span style={{ color: "black" }}>First Cert</span>
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                <a href="/">First Cert</a> follows a structured and transparent
                approach to ISO 9001 Certification in Yemen:
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
          ISO 9001 Certification Cost in Yemen
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
                  The cost of ISO 9001 Certification in Yemen depends on several
                  factors rather than a fixed price, including:
                </div>

                <ul className="features">
                  <li className="check">Organization size and structure</li>
                  <li className="check">Industry and process complexity</li>
                  <li className="check">Scope of certification</li>
                  <li className="check">
                    Existing documentation and process maturity
                  </li>
                  <li className="check">
                    Training and audit preparation needs
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert provides transparent and customized pricing after
                  an initial evaluation to ensure cost-effective certification.
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
                  Achieve ISO 9001 Certification in Yemen with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted ISO 9001 consulting partner for
                  organizations in Yemen seeking practical, efficient, and
                  results-oriented certification support. We help businesses
                  design Quality Management Systems that improve performance,
                  enhance customer satisfaction, and meet international
                  standards.
                </div>
                <div className="title small-title">
                  With experienced consultants and industry-focused solutions,
                  First Cert ensures a smooth ISO 9001 certification
                  journey—from planning and implementation to audit success and
                  ongoing compliance.
                </div>

                <div className="title small-title-p">
                  📧 Contact: info@firstcertification.com Start your ISO 9001
                  Certification journey in Yemen with First Cert and build a
                  strong foundation for quality, efficiency, and long-term
                  business success.
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

export default Yemen9001;
