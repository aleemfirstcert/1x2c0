import React from "react";
import { Helmet } from "react-helmet";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DemoFooter from "components/Footers/DemoFooter";
import "../../../assets/css/certificates.css";
import img9001 from "../../../assets/img/country/africa/south-africa/9001-img.webp";
import benefits9001 from "../../../assets/img/country/africa/south-africa/9001-benefits.webp";
import bgimg from "../../../assets/img/services/card-9001.webp";
import EnquiryForm from "views/index-sections/EnquiryForm";

function SouthAfrica9001() {
  const benefits = [
    "Greater consistency in products and service delivery",
    "Stronger customer trust and repeat business",
    "Improved eligibility for tenders and international contracts",
    "Reduced waste, rework, and process inefficiencies",
    "Enhanced reputation across regional and global markets",
  ];

  const processSteps = [
    {
      number: "1",
      title: "Scope & Objective Definition",
      description: "Establish certification boundaries and quality goals",
    },
    {
      number: "2",
      title: "Gap & Process Review",
      description: "Compare existing practices with ISO 9001 requirements",
    },
    {
      number: "3",
      title: "QMS Design",
      description: "Develop policies, procedures, and performance controls",
    },
    {
      number: "4",
      title: "Implementation Support",
      description: "Guide teams in applying standardized processes",
    },
    {
      number: "5",
      title: "Internal Audit & Management Review",
      description: "Confirm effectiveness and leadership engagement",
    },
    {
      number: "6",
      title: "Certification Audit Assistance",
      description: "Support Stage 1 and Stage 2 audits",
    },
    {
      number: "7",
      title: "Continual Improvement Support",
      description: "Maintain and strengthen QMS performance",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          ISO 9001 Certification in South Africa | Enterprise Quality Management
          Advisory Services – First Cert
        </title>
        <meta
          name="description"
          content="Planning to achieve ISO 9001 Certification in South Africa? First Cert provides comprehensive Quality Management consulting services, including process design, operational alignment, employee engagement programs, and complete certification audit assistance to help organizations build consistent performance and long-term customer confidence."
        />
        <meta
          name="keywords"
          content="ISO 9001 Certification in South Africa, ISO 9001 consultants South Africa, ISO 9001 certification cost South Africa, ISO 9001 implementation South Africa, ISO certification services South Africa, ISO 9001 training South Africa, ISO 9001 documentation South Africa, Quality Management System South Africa, QMS certification South Africa, ISO 9001 audit South Africa, ISO consultants South Africa, First Cert ISO 9001 South Africa, ISO quality certification South Africa, ISO 9001 for companies South Africa"
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
          <h1 className="main-title">ISO 9001 Certification in South Africa</h1>
          <p className="small-desc">
            Driving Consistency and Operational Excellence
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
                alt="ISO 9001 Certification in South Africa"
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
                <b>ISO 9001 Certification in South Africa</b> supports
                organizations in building structured, reliable, and
                performance-driven operations across diverse industries and
                markets. As South African economies continue to grow across
                manufacturing, energy, infrastructure, healthcare, agriculture,
                logistics, finance, and technology, organizations are
                increasingly expected to demonstrate consistent quality and
                accountable management practices.
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
                <b>First Cert</b> works with organizations across South Africa
                to develop Quality Management Systems that reflect real business
                operations. Our focus is on strengthening leadership
                involvement, clarifying responsibilities, and embedding quality
                into everyday workflows rather than creating theoretical
                documentation.
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
                What ISO 9001 Certification in South Africa Signifies
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                <b>ISO 9001 Certification in South Africa</b> verifies that an
                organization has implemented a Quality Management System aligned
                with internationally recognized ISO standards. The framework
                emphasizes customer satisfaction, process control, performance
                measurement, and continual improvement at every level of the
                organization.
              </p>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                An effective ISO 9001 system enables organizations to:
              </p>

              <ul className="iso-list">
                {[
                  "Define and control key operational processes",
                  "Understand customer expectations and consistently meet them",
                  "Establish measurable quality objectives with leadership oversight",
                  "Apply risk-based thinking to minimize errors and disruptions",
                  "Monitor results and improve performance continuously",
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
                Certification demonstrates a disciplined and transparent
                approach to quality management.
              </p>

              {/* HEADING 2 */}
              <h2
                className="details-title mt-5 text-primary"
                style={{ fontSize: "1.8rem" }}
              >
                Sectors Across South Africa That Gain Value from ISO 9001
              </h2>

              <p
                className="details-text"
                style={{ color: "#000000", fontWeight: "400" }}
              >
                ISO 9001 Certification in South Africa is suitable for
                organizations of all sizes and sectors, including:
              </p>
              <ul className="iso-list">
                {[
                  "Manufacturing plants and production facilities",
                  "Construction companies and engineering contractors",
                  "Energy, oil, gas, and mining service providers",
                  "Transportation, logistics, and supply chain operators",
                  "IT services, software development, and digital businesses",
                  "Healthcare providers, laboratories, and medical services",
                  "Education, consulting, and professional service firms",
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
                Implementing ISO 9001 helps South African organizations enhance
                efficiency, reduce operational risks, and strengthen stakeholder
                confidence.
              </p>
            </div>

            {/* RIGHT SIDEBAR (OUR EXPERTISE) */}
            <div className="col-lg-3">
              <div className="iso-links-box tall-sidebar mt-5">
                <h5>Our Expertise</h5>
                <ul>
                  <li>
                    <a href="iso-9001-certification-in-south-africa">
                      ISO 9001 Certification in South Africa
                    </a>
                  </li>
                  <li>
                    <a href="iso-27001-certification-in-south-africa">
                      ISO 27001 Certification in South Africa
                    </a>
                  </li>
                  <li>
                    <a href="cmmi-certification-in-south-africa">
                      CMMI Certification in South Africa
                    </a>
                  </li>
                  <li>
                    <a href="hipaa-certification-in-south-africa">
                      HIPAA Certification in South Africa
                    </a>
                  </li>
                  <li>
                    <a href="vapt-certification-in-south-africa">
                      VAPT Certification in South Africa
                    </a>
                  </li>
                  <li>
                    <a href="gdpr-certification-in-south-africa">
                      GDPR Certification in South Africa
                    </a>
                  </li>
                  <li>
                    <a href="soc-1-certification-in-south-africa">
                      SOC 1 Certification in South Africa
                    </a>
                  </li>
                  <li>
                    <a href="soc-2-certification-in-south-africa">
                      SOC 2 Certification in South Africa
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
                Advantages of ISO 9001 Certification in South Africa
              </h1>
              <p
                className="details-text"
                style={{
                  color: "#000000",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                Organizations that obtain ISO 9001 Certification in South Africa
                benefit from both operational improvement and market
                recognition, including:
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
                alt="ISO 9001 Benefits in South Africa"
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
            ISO 9001 fosters a culture of accountability, clarity, and ongoing
            improvement.
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
                First Cert’s ISO 9001 Consulting Framework in South Africa
              </h2>
              <p
                className="lead fw-bold mb-0 lh-lg fs-5"
                style={{ color: "#212529", fontWeight: "500" }}
              >
                First Cert applies a structured yet adaptable ISO 9001
                implementation model designed for organizations operating across
                South Africa:
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
          ISO 9001 Certification Cost in South Africa
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
                  The cost of ISO 9001 Certification in South Africa varies
                  based on several factors, such as:
                </div>

                <ul className="features">
                  <li className="check">
                    Organizational size and workforce scale
                  </li>
                  <li className="check">
                    Nature and complexity of business activities
                  </li>
                  <li className="check">
                    Certification scope and geographic coverage
                  </li>
                  <li className="check">
                    Existing quality systems and documentation maturity
                  </li>
                  <li className="check">
                    Training, implementation, and audit requirements
                  </li>
                </ul>

                <div className="title small-title">
                  First Cert begins with an initial assessment to provide a
                  clear, customized cost estimate aligned with organizational
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
                  Get ISO 9001 Certified in South Africa with First Cert
                </div>
                <div className="title small-title">
                  First Cert is a reliable ISO 9001 consulting partner in South
                  Africa, supporting organizations from initial assessment
                  through certification and ongoing quality improvement. Our
                  consultants translate ISO standards into practical,
                  results-driven systems that improve efficiency and audit
                  confidence.
                </div>
                <div className="title small-title">
                  By partnering with First Cert, organizations across South
                  Africa can strengthen quality governance, enhance operational
                  performance, and build a sustainable foundation for long-term
                  success.
                </div>

                <div className="title small-title-p">
                  📧 Email: info@firstcertification.com
                  <br />
                  Begin your ISO 9001 Certification journey in South Africa with
                  First Cert and showcase your commitment to quality excellence,
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

export default SouthAfrica9001;
