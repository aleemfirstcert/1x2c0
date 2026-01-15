import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/middle-east/UAE/9001-img.webp";
import benefits9001 from "../../../assets/img/country/middle-east/UAE/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Uae9001() {
  const benefits = [
    "Improved Process Efficiency – Clearly defined workflows reduce inefficiencies",
    "Higher Customer Confidence – Consistent quality enhances customer satisfaction",
    "Global Market Acceptance – Recognized credibility in international markets",
    "Risk Mitigation – Proactive identification and control of quality-related risks",
    "Competitive Advantage – Strong positioning in tenders, contracts, and partnerships",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Business Review & Scope Definition",
      description: "Understand objectives and certification boundaries.",
    },
    {
      number: "2",
      title: "Compliance Gap Assessment",
      description: "Compare current practices with ISO 9001 requirements.",
    },
    {
      number: "3",
      title: "QMS Design & Documentation",
      description: "Develop tailored quality policies and procedures.",
    },
    {
      number: "4",
      title: "Implementation Guidance",
      description: "Support teams in applying QMS controls.",
    },
    {
      number: "5",
      title: "Internal Audit & Management Review",
      description: "Verify effectiveness and readiness.",
    },
    {
      number: "6",
      title: "Certification Audit Support",
      description: "Assist during the external audit process.",
    },
    {
      number: "7",
      title: "Ongoing Improvement Support",
      description: "Maintain compliance and system effectiveness.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in UAE | Expert ISO 9001 Advisory Services –
          First Cert
        </title>
        <meta
          name="description"
          content="Searching for ISO 9001 Certification in the UAE? First Cert offers end-to-end ISO 9001 consulting, QMS implementation, employee training, and audit support to help organizations achieve consistent quality excellence."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in UAE, ISO 9001 consultants in UAE, ISO 9001 certification cost in UAE, ISO 9001 implementation in UAE, ISO 9001 certification process UAE, ISO certification consultants UAE, ISO 9001 training in UAE, ISO 9001 documentation UAE, Quality Management System UAE, QMS certification UAE, ISO certification services UAE, ISO 9001 audit support UAE, affordable ISO certification UAE, First Cert ISO consultants, ISO 9001 consulting company UAE, ISO 9001 certification for manufacturing companies UAE, ISO 9001 certification for IT companies UAE, ISO 9001 quality certification UAE."
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
          <h1 class="main-title">ISO 9001 Certification in UAE</h1>
          <p class="small-desc">
            Driving Quality Excellence and Business Confidence
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
                <b>ISO 9001 Certification in UAE</b> helps organizations
                formalize their quality practices, improve operational
                discipline, and deliver consistent outcomes to customers. In a
                highly regulated and competitive business environment like the
                UAE, quality assurance is essential for sustaining growth and
                meeting stakeholder expectations.
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
                <b>First Cert</b> supports UAE-based organizations by delivering
                ISO 9001 solutions that are practical, scalable, and aligned
                with real business objectives. Our focus is on building systems
                that enhance performance—not just meeting certification
                requirements.
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
                Understanding ISO 9001 Certification in UAE?
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in UAE</b> is awarded to organizations
                that comply with the internationally recognized ISO 9001 Quality
                Management System standard. It provides a systematic approach to
                managing processes, improving efficiency, and ensuring continual
                improvement across operations. The standard concentrates on:
              </p>

              <ul className="iso-list">
                {[
                  "Process consistency and operational control",
                  "Customer needs and satisfaction measurement",
                  "Leadership involvement and strategic alignment",
                  "Risk-based thinking and performance monitoring",
                  "Ongoing improvement and corrective action management",
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
                Organizations certified to ISO 9001 in the UAE demonstrate
                structured management practices and a strong commitment to
                quality delivery.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Who Should Obtain ISO 9001 Certification in UAE?
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 is applicable to all types of organizations operating
                in the UAE, regardless of size or industry, including:
              </p>
              <ul className="iso-list">
                {[
                  "Manufacturing and industrial enterprises",
                  "Trading, logistics, and supply chain companies",
                  "IT services, software, and technology providers",
                  "Construction, contracting, and engineering firms",
                  "Healthcare providers and service organizations",
                  "Educational institutions and consulting firms",
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
                    <a href="iso-9001-certification-in-uae">
                      ISO 9001 Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-uae">
                      ISO 27001 Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-uae">
                      CMMI Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-uae">
                      HIPAA Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-uae">
                      VAPT Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-uae">
                      GDPR Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-uae">
                      SOC 1 Certification in UAE
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-uae">
                      SOC 2 Certification in UAE
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
            ISO 9001 enables UAE organizations to optimize workflows, minimize
            operational errors, and strengthen trust with clients and
            regulators.
          </p>
        </div>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Benefits of Getting ISO 9001 Certified in UAE
              </h1>
              <p
                className="details-text"
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Organizations that achieve ISO 9001 Certification in the UAE
                gain measurable advantages.
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
          <p
            className="details-text"
            style={{
              color: "#000000",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            ISO 9001 embeds quality thinking into daily operations, supporting
            long-term organizational success.
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
                ISO 9001 Certification Process in UAE with{" "}
                <span style={{ color: "black" }}>First Cert</span>
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                <a href="/">First Cert</a> follows a structured and transparent
                approach to ISO 9001 Certification in UAE:
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
          ISO 9001 Certification Cost in UAE
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
                  ISO 9001 Certification costs in the UAE vary based on
                  organizational needs and complexity, including:
                </div>

                <ul className="features">
                  <li className="check">Business size and operational scale</li>
                  <li className="check">
                    Industry type and regulatory requirements
                  </li>
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
                  Achieve ISO 9001 Certification in UAE with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a reliable ISO 9001 consulting partner in the
                  UAE, helping organizations implement Quality Management
                  Systems that deliver measurable business value. Our
                  consultants work closely with management and operational teams
                  to ensure smooth implementation and audit success.
                </div>
                <div className="title small-title">
                  From planning and system development to certification and
                  continual improvement, First Cert ensures your ISO 9001
                  journey is efficient, compliant, and results-driven.
                </div>

                <div className="title small-title-p">
                  📧 Contact: info@firstcertification.com Begin your ISO 9001
                  Certification journey in the UAE with First Cert and build a
                  strong foundation for quality, efficiency, and sustainable
                  growth.
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

export default Uae9001;
