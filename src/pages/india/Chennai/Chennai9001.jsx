import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/asia/maldives/9001-img.webp";
import benefits9001 from "../../../assets/img/country/asia/maldives/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Chennai9001() {
  const benefits = [
    "More consistent product and service quality",
    "Higher customer satisfaction and repeat business",
    "Better eligibility for government and corporate tenders",
    "Reduced rework, delays, and operational waste",
    "Improved internal accountability and process control",
    "Stronger brand credibility in domestic and global markets",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope & Planning",
      description: "Define certification boundaries and quality objectives",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description: "Compare existing practices with ISO 9001 requirements",
    },
    {
      number: "3",
      title: "QMS Development",
      description: "Design policies, procedures, and process controls",
    },
    {
      number: "4",
      title: "Implementation Support",
      description: "Guide teams in applying standardized workflows",
    },
    {
      number: "5",
      title: "Internal Audit & Management Review",
      description: "Validate system effectiveness",
    },
    {
      number: "6",
      title: "Certification Audit Support",
      description: "Assist with Stage 1 and Stage 2 audits",
    },
    {
      number: "7",
      title: "Continuous Improvement",
      description: "Strengthen and maintain the QMS after certification",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Chennai | Quality Management Experts – First
          Cert
        </title>
        <meta
          name="description"
          content="Get ISO 9001 Certification in Chennai with First Cert. We provide QMS implementation, documentation, training, and audit support to improve quality and compliance."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Chennai, ISO 9001 consultants Chennai, ISO 9001 certification cost Chennai, ISO 9001 implementation Chennai, ISO certification services Chennai, ISO 9001 training Chennai, ISO 9001 documentation Chennai, Quality Management System Chennai, QMS certification Chennai, ISO 9001 audit Chennai, ISO consultants Chennai, First Cert ISO 9001 Chennai, ISO quality certification Chennai, ISO 9001 for companies Chennai"
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
          <h1 className="main-title">ISO 9001 Certification in Chennai</h1>
          <p className="small-desc">Driving Consistent Business Quality</p>
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
                alt="ISO 9001 Certification in Chennai"
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
                <b>ISO 9001 Certification in Chennai</b> helps organizations
                establish a strong quality-driven operating culture where
                processes are controlled, measurable, and focused on customer
                satisfaction. As Chennai continues to grow as a hub for
                manufacturing, IT services, automotive, healthcare, logistics,
                and engineering, companies are expected to demonstrate
                reliability, efficiency, and global-quality benchmarks. ISO 9001
                provides the framework needed to achieve these expectations.
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
                <b>First Cert</b> supports organizations across Chennai by
                building Quality Management Systems that are practical,
                business-focused, and aligned with real operational workflows
                rather than just paperwork.
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
                What ISO 9001 Certification in Chennai Represents
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Chennai</b> confirms that an
                organization follows internationally recognized Quality
                Management System requirements. It ensures that every key
                business activity is planned, controlled, reviewed, and improved
                on a continual basis.
              </p>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                A strong ISO 9001 system enables organizations to:
              </p>

              <ul className="iso-list">
                {[
                  "Define and control their core business processes",
                  "Consistently meet customer and regulatory expectations",
                  "Set measurable quality objectives linked to business goals",
                  "Identify risks and prevent service or product failures",
                  "Use data and performance reviews to drive improvement",
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
                Certification shows that quality is built into daily operations,
                not just promised to customers.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Industries in Chennai That Benefit from ISO 9001
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 Certification in Chennai is valuable for organizations
                across all sectors, including:
              </p>
              <ul className="iso-list">
                {[
                  "Manufacturing, automotive, and industrial suppliers",
                  "IT services, software development, and technology firms",
                  "Construction, infrastructure, and engineering companies",
                  "Healthcare, diagnostics, and medical service providers",
                  "Logistics, warehousing, and supply chain businesses",
                  "Educational institutions and professional service firms",
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
                By adopting ISO 9001, Chennai-based organizations can reduce
                errors, improve efficiency, and strengthen trust with customers
                and regulators.
              </p>
            </div>

            {/* RIGHT SIDEBAR (OUR EXPERTISE) */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar mt-5">
                <h5>Our Expertise</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-chennai">
                      ISO 9001 Certification in Chennai
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-chennai">
                      ISO 27001 Certification in Chennai
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-chennai">
                      CMMI Certification in Chennai
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-chennai">
                      HIPAA Certification in Chennai
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-chennai">
                      VAPT Certification in Chennai
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-chennai">
                      GDPR Certification in Chennai
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-chennai">
                      SOC 1 Certification in Chennai
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-chennai">
                      SOC 2 Certification in Chennai
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
                Key Benefits of ISO 9001 Certification in Chennai
              </h1>
              <p
                className="details-text"
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Organizations that achieve ISO 9001 Certification in Chennai
                gain several operational and commercial advantages, such as:
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
                alt="ISO 9001 Benefits in Chennai"
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
            ISO 9001 helps transform quality management into a long-term
            competitive advantage.
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
                First Cert's ISO 9001 Consulting Approach in Chennai
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                First Cert follows a structured and results-oriented ISO 9001
                implementation methodology for Chennai organizations:
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
          ISO 9001 Certification Cost in Chennai
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
                  The cost of ISO 9001 Certification in Chennai depends on
                  factors such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Size of the organization and number of employees
                  </li>
                  <li className="check">
                    Type and complexity of business operations
                  </li>
                  <li className="check">
                    Number of locations and certification scope
                  </li>
                  <li className="check">
                    Existing level of process documentation
                  </li>
                  <li className="check">
                    Training and audit preparation requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with a readiness assessment to provide a
                  clear and customized cost estimate aligned with your business
                  needs.
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
                  Get ISO 9001 Certified in Chennai with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted ISO 9001 consulting partner in
                  Chennai, supporting organizations from initial assessment to
                  certification and beyond. Our experts convert ISO standards
                  into practical management systems that improve performance,
                  audit readiness, and customer confidence.
                </div>
                <div className="title small-title">
                  By partnering with First Cert, organizations in Chennai can
                  build stronger quality governance, streamline operations, and
                  create a solid foundation for long-term growth and market
                  credibility.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your ISO 9001 Certification journey in Chennai with
                  First Cert and demonstrate your commitment to quality,
                  consistency, and continual improvement.
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

export default Chennai9001;
