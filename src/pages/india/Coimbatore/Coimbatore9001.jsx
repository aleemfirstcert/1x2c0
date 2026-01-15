import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/india/coimbatore/9001-img.webp";
import benefits9001 from "../../../assets/img/country/india/coimbatore/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function Coimbatore9001() {
  const benefits = [
    "Consistent quality in products and services",
    "Higher customer satisfaction and retention",
    "Improved eligibility for corporate and government contracts",
    "Reduced operational inefficiencies and waste",
    "Strengthened internal accountability and process discipline",
    "Enhanced reputation in both domestic and international markets",
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
      description: "Assess current processes against ISO 9001 standards",
    },
    {
      number: "3",
      title: "QMS Development",
      description: "Build policies, procedures, and process controls",
    },
    {
      number: "4",
      title: "Implementation Support",
      description: "Guide teams in standardizing workflows",
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
      description: "Strengthen QMS post-certification",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in Coimbatore | Expert Quality Management
          Services – First Cert
        </title>
        <meta
          name="description"
          content="Get ISO 9001 Certification in Coimbatore with First Cert. We provide QMS implementation, process optimization, staff training, and audit support to strengthen quality and compliance."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in Coimbatore, ISO 9001 consultants Coimbatore, ISO 9001 certification cost Coimbatore, ISO 9001 implementation Coimbatore, ISO certification services Coimbatore, ISO 9001 training Coimbatore, ISO 9001 documentation Coimbatore, Quality Management System Coimbatore, QMS certification Coimbatore, ISO 9001 audit Coimbatore, ISO consultants Coimbatore, First Cert ISO 9001 Coimbatore, ISO quality certification Coimbatore, ISO 9001 for companies Coimbatore"
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
          <h1 className="main-title">ISO 9001 Certification in Coimbatore</h1>
          <p className="small-desc">Enhancing Process Efficiency and Quality</p>
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
                alt="ISO 9001 Certification in Coimbatore"
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
                <b>ISO 9001 Certification in Coimbatore</b> empowers
                organizations to establish structured, measurable, and efficient
                quality practices. As Coimbatore grows as a hub for
                manufacturing, engineering, IT services, healthcare, textiles,
                and logistics, companies need recognized quality standards to
                improve operational reliability and client satisfaction.
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
                <b>First Cert</b> helps businesses in Coimbatore implement
                Quality Management Systems that are practical, aligned with
                operational realities, and designed to enhance long-term
                performance rather than just meet documentation requirements.
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
                What ISO 9001 Certification in Coimbatore Entails
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in Coimbatore</b> ensures that an
                organization follows internationally recognized Quality
                Management System standards. It confirms that key processes are
                defined, monitored, and continually improved.
              </p>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                A strong ISO 9001 framework enables organizations to:
              </p>

              <ul className="iso-list">
                {[
                  "Establish controlled and repeatable business processes",
                  "Consistently meet client and regulatory expectations",
                  "Set measurable quality objectives with leadership oversight",
                  "Identify and mitigate risks that could impact service or product quality",
                  "Track performance metrics to drive continual improvement",
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
                Certification demonstrates that quality is embedded into daily
                business operations.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Industries in Coimbatore That Benefit from ISO 9001
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 Certification in Coimbatore applies across diverse
                sectors, including:
              </p>
              <ul className="iso-list">
                {[
                  "Manufacturing, automotive, and industrial suppliers",
                  "IT, software development, and technology services",
                  "Construction, civil engineering, and infrastructure firms",
                  "Healthcare providers, diagnostics labs, and medical centers",
                  "Logistics, warehousing, and supply chain enterprises",
                  "Educational institutions and professional service organizations",
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
                Adopting ISO 9001 helps organizations reduce errors, improve
                operational efficiency, and enhance customer trust.
              </p>
            </div>

            {/* RIGHT SIDEBAR (OUR EXPERTISE) */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar mt-5">
                <h5>Our Expertise</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-coimbatore">
                      ISO 9001 Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-coimbatore">
                      ISO 27001 Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-coimbatore">
                      CMMI Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-coimbatore">
                      HIPAA Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-coimbatore">
                      VAPT Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-coimbatore">
                      GDPR Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-coimbatore">
                      SOC 1 Certification in Coimbatore
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-coimbatore">
                      SOC 2 Certification in Coimbatore
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
                Key Advantages of ISO 9001 Certification in Coimbatore
              </h1>
              <p
                className="details-text"
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Organizations achieving ISO 9001 Certification in Coimbatore
                enjoy benefits such as:
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
                alt="ISO 9001 Benefits in Coimbatore"
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
            ISO 9001 drives long-term competitive advantage by embedding quality
            into every business activity.
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
                First Cert's ISO 9001 Implementation Method in Coimbatore
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                Our structured approach ensures effective and sustainable
                certification:
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
          ISO 9001 Certification Cost in Coimbatore
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
                  The cost of ISO 9001 Certification in Coimbatore depends on:
                </div>

                <ul className="features">
                  <li className="check">
                    Organization size and employee strength
                  </li>
                  <li className="check">
                    Complexity and nature of business operations
                  </li>
                  <li className="check">
                    Number of sites and certification scope
                  </li>
                  <li className="check">
                    Existing process documentation and maturity
                  </li>
                  <li className="check">
                    Training, audit, and implementation requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert provides a transparent, customized cost estimate
                  based on your business needs.
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
                  Get ISO 9001 Certified in Coimbatore with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a trusted ISO 9001 consulting partner in
                  Coimbatore, supporting organizations from initial assessment
                  to certification and continual improvement. Our experts
                  translate ISO standards into actionable systems that boost
                  operational efficiency, compliance, and client confidence.
                </div>
                <div className="title small-title">
                  Partnering with First Cert enables organizations in Coimbatore
                  to establish robust quality governance, improve workflow
                  consistency, and create a foundation for long-term growth.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Start your ISO 9001 Certification journey in Coimbatore with
                  First Cert and demonstrate your commitment to quality,
                  efficiency, and continuous improvement.
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

export default Coimbatore9001;
