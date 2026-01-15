import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/middle-east/kuwait/9001-img.webp";
import benefits9001 from "../../../assets/img/country/middle-east/kuwait/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Kuwait9001() {
  const benefits = [
    "Improved Process Efficiency – Streamlined operations reduce errors and improve consistency.",
    "Higher Customer Satisfaction – Higher Customer Satisfaction – Consistent delivery of products and services that meet customer needs.",
    "Global Quality Recognition – Demonstrates compliance with internationally accepted quality standards.",
    "Better Risk Management – Identifies process gaps early and prevents operational issues.",
    "Stronger Market Credibility – Enhances brand reputation and competitiveness in domestic and global markets.",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Consultation",
      description:
        "Understanding your business objectives and quality goals to define a tailored ISO 9001 roadmap.",
    },
    {
      number: "2",
      title: "Gap Analysis",
      description:
        "Assessing existing processes and identifying gaps against ISO 9001 requirements.",
    },
    {
      number: "3",
      title: "Documentation",
      description:
        "Preparing all required policies, procedures, and records for compliance.",
    },
    {
      number: "4",
      title: "Implementation",
      description:
        "Effective QMS deployment with team training and process integration.",
    },
    {
      number: "5",
      title: "Internal Audit",
      description:
        "Evaluating readiness and identifying improvement opportunities.",
    },
    {
      number: "6",
      title: "Certification Audit",
      description: "Final audit conducted by an accredited certification body.",
    },
    {
      number: "7",
      title: "Continuous Support",
      description:
        "Ongoing guidance, surveillance audits, and improvement support.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Kuwait | Affordable ISO 9001 Consultants –
          First Cert
        </title>
        <meta
          name="description"
          content="Looking to achieve ISO 9001 Certification in the Kuwait? First Cert offers expert consulting, training, documentation, and audit support to help organizations build a strong Quality Management System and achieve quality excellence."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Kuwait, ISO 9001 consultants in Kuwait, ISO 9001 certification cost in Kuwait, ISO 9001 implementation in Kuwait, ISO 9001 certification process Kuwait, ISO certification consultants Kuwait, ISO 9001 training in Kuwait, ISO 9001 documentation Kuwait, Quality Management System Kuwait, QMS certification Kuwait, ISO certification services Kuwait, ISO 9001 audit support Kuwait, affordable ISO certification Kuwait, First Cert ISO consultants, ISO 9001 consulting company Kuwait, ISO 9001 certification for manufacturing companies Kuwait, ISO 9001 certification for IT companies Kuwait, ISO 9001 quality certification Kuwait."
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
          <h1 class="main-title">ISO 9001 Certification in Kuwait</h1>
          <p class="small-desc">
            Your Path to Consistent Quality and Business Excellence
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
                Achieve <b>ISO 9001 Certification in Kuwait</b> with expert
                consultants from First Cert. We help businesses build strong
                <b> Quality Management Systems (QMS)</b> that improve
                operational efficiency, enhance customer satisfaction, and
                support continual improvement. Our end-to-end support — from
                documentation to certification audit — makes ISO 9001
                implementation in the Kuwait smooth, affordable, and effective.
                Strengthen your brand credibility and stay competitive with a
                globally recognized quality standard.
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
                What is ISO 9001 Certification in Kuwait?
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Kuwait</b> is an internationally
                recognized standard that defines the requirements for an
                effective Quality Management System (QMS). It enables
                organizations to streamline processes, reduce operational
                errors, and consistently deliver products and services that meet
                customer and regulatory expectations.
              </p>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                Whether you operate in manufacturing, IT, healthcare,
                construction, education, or service industries, ISO 9001
                provides a structured, process-driven approach to achieving
                quality excellence and continual improvement. By becoming ISO
                9001 certified, Kuwait-based organizations demonstrate
                reliability, efficiency, and a strong customer-focused
                operations.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Which Businesses Need ISO 9001 Certification Implementation in
                Kuwait?
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                Any organization aiming to improve efficiency, ensure consistent
                quality, and enhance customer satisfaction should consider ISO
                9001 Certification Implementation in the Kuwait. This includes
                manufacturing companies, IT firms, construction organizations,
                healthcare providers, educational institutions, and
                service-based enterprises.
              </p>
              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                Implementing ISO 9001 standards helps businesses across the
                Kuwait improve process control, reduce waste, meet client
                expectations, and gain a competitive edge in both local and
                international markets.
              </p>
            </div>

            {/* RIGHT SIDEBAR (OUR EXPERTISE) */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar mt-5">
                <h5>Our Expertise</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-kuwait">
                      ISO 9001 Certification in Kuwait
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-kuwait">
                      ISO 27001 Certification in Kuwait
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-kuwait">
                      CMMI Certification in Kuwait
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-kuwait">
                      HIPAA Certification in Kuwait
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-kuwait">
                      VAPT Certification in Kuwait
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-kuwait">
                      GDPR Certification in Kuwait
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-kuwait">
                      SOC 1 Certification in Kuwait
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-kuwait">
                      SOC 2 Certification in Kuwait
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
                Benefits of Getting ISO 9001 Certified in Kuwait
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
                ISO 9001 Certification in Kuwait – Simplified Process with{" "}
                <span style={{ color: "black" }}>First Cert</span>
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                Achieving <b>ISO 9001 Certification in the Kuwait</b> with{" "}
                <b>First Cert</b> is structured, transparent, and
                outcome-focused:
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
          How much does it cost to get ISO 9001 certified in Kuwait?
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
                  The cost of ISO 9001 certification in Kuwait varies depending
                  on organizational size, scope, and operational complexity.
                  There is no fixed pricing, as every business has unique
                  requirements. Key factors influencing cost include:
                </div>

                <ul className="features">
                  <li className="check">Organization size and workforce</li>
                  <li className="check">
                    Nature of operations (manufacturing, IT, services, etc.)
                  </li>
                  <li className="check">Process complexity and risk level</li>
                  <li className="check">
                    Existing documentation and system maturity
                  </li>
                  <li className="check">Scope of certification</li>
                  <li className="check">
                    Training and internal audit requirements
                  </li>
                  <li className="check">Certification body audit duration</li>
                </ul>

                <div className="title small-title">
                  ISO 9001 consultants in Kuwait evaluate these factors to
                  provide a customized and cost-effective quotation.
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
                  Achieve ISO 9001 Certification in Kuwait with First Cert –
                  Your Your Trusted Quality Partner
                </div>
                <div className="title small-title">
                  If you are planning to achieve ISO 9001 Certification in the
                  Kuwait, First Cert is your reliable partner for expert
                  consulting and end-to-end certification support. We help
                  organizations establish strong Quality Management Systems
                  aligned with ISO 9001 standards, improving efficiency,
                  consistency, and customer satisfaction.
                </div>

                <div className="title small-title">
                  With extensive experience across manufacturing, IT,
                  healthcare, education, and service industries, First Cert
                  delivers tailored ISO 9001 solutions that ensure a smooth
                  certification journey — from documentation and training to
                  audit readiness and continual improvement.
                </div>
                <div className="title small-title-p">
                  📧 Contact us at: info@firstcertification.com Start your ISO
                  9001 Certification journey in the Kuwait with First Cert —
                  your partner in quality excellence and sustainable business
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

export default Kuwait9001;
