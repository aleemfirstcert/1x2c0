import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/asia/malaysia/9001-img.webp";
import benefits9001 from "../../../assets/img/country/asia/malaysia/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Malaysia9001() {
  const benefits = [
    "Process Control – Improved consistency across operations and teams",
    "Customer Trust – Reliable delivery of products and services",
    "Market Recognition – Acceptance in both domestic and global markets",
    "Risk Reduction – Early identification and resolution of quality issues",
    "Tender Advantage – Strong positioning in supplier and contract evaluations",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope & Objective Review",
      description: "Define certification boundaries and goals.",
    },
    {
      number: "2",
      title: "Gap Assessment",
      description: "Evaluate current practices against ISO 9001 requirements.",
    },
    {
      number: "3",
      title: "QMS Structuring",
      description: "Develop quality manuals, SOPs, and process controls.",
    },
    {
      number: "4",
      title: "Implementation Support",
      description: "Assist teams in adopting quality practices.",
    },
    {
      number: "5",
      title: "Internal Audit & Review",
      description: "Validate system effectiveness and readiness.",
    },
    {
      number: "6",
      title: "Certification Audit Support",
      description: "Coordinate and guide through external audits.",
    },
    {
      number: "7",
      title: "Continual Improvement Support",
      description: "Maintain compliance and enhance performance.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Malaysia | Expert Quality Management
          Consulting – First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve ISO 9001 Certification in Malaysia? First Cert offers comprehensive ISO 9001 consulting services, including QMS structuring, process optimization, staff training, and certification audit support to drive consistent quality performance."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Malaysia, ISO 9001 consultants in Malaysia, ISO 9001 certification cost in Malaysia, ISO 9001 implementation in Malaysia, ISO 9001 certification process Malaysia, ISO certification consultants Malaysia, ISO 9001 training in Malaysia, ISO 9001 documentation Malaysia, Quality Management System Malaysia, QMS certification Malaysia, ISO certification services Malaysia, ISO 9001 audit support Malaysia, affordable ISO certification Malaysia, First Cert ISO consultants, ISO 9001 consulting company Malaysia, ISO 9001 certification for manufacturing companies Malaysia, ISO 9001 certification for IT companies Malaysia, ISO 9001 quality certification Malaysia."
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
          <h1 class="main-title">ISO 9001 Certification in Malaysia</h1>
          <p class="small-desc">
            Enhancing Quality Discipline and Business Reliability
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
                <b>ISO 9001 Certification in Malaysia</b> helps organizations
                establish a structured approach to managing quality, improving
                operational consistency, and meeting customer expectations. In
                Malaysia’s diverse and fast-evolving business landscape,
                organizations are expected to demonstrate process reliability,
                compliance readiness, and service consistency to remain
                competitive.
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
                <b>First Cert</b> works closely with organizations across
                Malaysia to implement ISO 9001 frameworks that are practical,
                scalable, and aligned with operational realities. Our focus is
                on embedding quality into daily activities rather than creating
                systems that exist only for audits.
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
                Overview of ISO 9001 Certification in Malaysia
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Malaysia</b> signifies that an
                organization’s Quality Management System conforms to
                internationally recognized ISO standards. The framework enables
                organizations to control processes, measure performance, and
                improve outcomes through a structured and repeatable approach.
                The standard emphasizes:
              </p>

              <ul className="iso-list">
                {[
                  "Clearly defined and monitored business processes",
                  "Strong customer focus and feedback mechanisms",
                  "Leadership oversight and strategic quality planning",
                  "Risk identification and preventive controls",
                  "Data-driven performance evaluation and improvement",
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
                ISO 9001–certified organizations in Malaysia demonstrate strong
                governance, accountability, and a commitment to continuous
                improvement.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Who Should Obtain ISO 9001 Certification in Malaysia?
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 Certification in Malaysia is suitable for organizations
                of all sizes and sectors, such as:
              </p>
              <ul className="iso-list">
                {[
                  "Manufacturing and precision engineering companies",
                  "Logistics, warehousing, and distribution providers",
                  "Technology firms and professional service companies",
                  "Construction, infrastructure, and project-based businesses",
                  "Healthcare, laboratories, and service institutions",
                  "Education providers and consulting organizations",
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
                    <a href="iso-9001-certification-in-malaysia">
                      ISO 9001 Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-malaysia">
                      ISO 27001 Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-malaysia">
                      CMMI Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-malaysia">
                      HIPAA Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-malaysia">
                      VAPT Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-malaysia">
                      GDPR Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-malaysia">
                      SOC 1 Certification in Malaysia
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-malaysia">
                      SOC 2 Certification in Malaysia
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
            By adopting ISO 9001, Malaysian organizations can improve
            efficiency, reduce operational errors, and build long-term customer
            confidence.
          </p>
        </div>
      </section>

      <div className="iso-benefits-section py-5 bg-white">
        <div className="container">
          {/* H1 - Full Width */}
          <div className="row">
            <div className="col-12">
              <h1 className="text-primary fw-bold text-center mb-4">
                Business Value of ISO 9001 Certification in Malaysia
              </h1>
              <p
                className="details-text"
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Organizations that achieve ISO 9001 Certification in Malaysia
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
          <p
            className="details-text"
            style={{
              color: "#000000",
              fontWeight: "400",
              textAlign: "center",
            }}
          >
            ISO 9001 supports sustainable growth by strengthening internal
            systems and external credibility.
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
                ISO 9001 Certification Process in Malaysia with{" "}
                <span style={{ color: "black" }}>First Cert</span>
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                <a href="/">First Cert</a> follows a structured and transparent
                approach to ISO 9001 Certification in Malaysia:
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
          ISO 9001 Certification Cost in Malaysia
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
                  The cost of ISO 9001 Certification in Malaysia depends on
                  several factors, including:
                </div>

                <ul className="features">
                  <li className="check">
                    Business size and operational complexity
                  </li>
                  <li className="check">
                    Industry-specific compliance requirements
                  </li>
                  <li className="check">
                    Scope and number of processes covered
                  </li>
                  <li className="check">
                    Existing quality systems and documentation
                  </li>
                  <li className="check">
                    Training and audit preparation needs
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert conducts an initial assessment to provide a
                  transparent and customized ISO 9001 cost proposal aligned with
                  your business objectives.
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
                  Get ISO 9001 Certification in Malaysia with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted ISO 9001 consulting partner in
                  Malaysia, helping organizations build practical and effective
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
                  Certification in Malaysia with First Cert and strengthen
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

export default Malaysia9001;
